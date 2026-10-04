/**
 * app.js - Main Controller for Circle Modulation Studio
 * Connects the Interactive Circle, Notation Renderer, and Web Audio Metronome.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize State
  let activeIndex = 0; // 0 = C->G, 1 = G->D, ..., 11 = F->C
  let currentView = 'split'; // 'split' or 'grid'
  let notationFormat = 'quarter'; // 'quarter' (2 bars) or 'whole' (5 bars)
  let showRoman = false;

  // 2. Initialize Engines
  const audio = new AudioEngine();
  const notation = new NotationEngine();

  // Connect Audio Engine Callbacks
  audio.getActiveModulation = () => {
    return window.CIRCLE_MODULATIONS_DATA ? window.CIRCLE_MODULATIONS_DATA[activeIndex] : null;
  };

  audio.onBeat = (beatIdx, measureBeat, chordIdx) => {
    updateBeatVisuals(beatIdx, measureBeat, chordIdx);
    // Real-time chord highlighting in sheet music
    if (currentView === 'split') {
      notation.highlightActiveChord(null, chordIdx);
    } else {
      notation.highlightActiveChord(activeIndex, chordIdx);
    }
  };

  audio.onKeyAdvance = () => {
    // Advance to next key clockwise automatically
    circle.nextKey();
  };

  // 3. Initialize Interactive Circle
  const circle = new CircleOfFifths('circle-container', {
    size: 440,
    radius: 172,
    nodeRadius: 26,
    onSelectKey: (newIndex) => {
      onSelectModulation(newIndex);
    }
  });

  // 4. UI Elements Cache
  const btnPlay = document.getElementById('btn-play');
  const bpmSlider = document.getElementById('bpm-slider');
  const bpmDisplay = document.getElementById('bpm-display');
  const btnBpmMinus = document.getElementById('btn-bpm-minus');
  const btnBpmPlus = document.getElementById('btn-bpm-plus');
  const btnTapTempo = document.getElementById('btn-tap-tempo');
  const switchChords = document.getElementById('switch-chords');
  const switchMetronome = document.getElementById('switch-metronome');
  const switchRoman = document.getElementById('switch-roman');
  const btnFormatQuarter = document.getElementById('btn-format-quarter');
  const btnFormatWhole = document.getElementById('btn-format-whole');
  const btnViewSplit = document.getElementById('btn-view-split');
  const btnViewGrid = document.getElementById('btn-view-grid');
  const scrollingLayoutToggle = document.getElementById('scrolling-layout-toggle');
  const btnLayoutStream = document.getElementById('btn-layout-stream');
  const btnLayoutGrid = document.getElementById('btn-layout-grid');
  const splitViewSection = document.getElementById('split-view-section');
  const gridViewSection = document.getElementById('grid-view-section');
  const btnPrevKey = document.getElementById('btn-prev-key');
  const btnNextKey = document.getElementById('btn-next-key');

  // Theory Breakdown Cache
  const theoryTargetKey = document.getElementById('theory-target-key');
  const theoryPedal = document.getElementById('theory-pedal');
  const theoryAlto = document.getElementById('theory-alto');
  const theoryTenor = document.getElementById('theory-tenor');
  const theoryBass = document.getElementById('theory-bass');

  // 5. Modulation Selection Handler
  function onSelectModulation(newIndex) {
    activeIndex = newIndex;

    // Clear any active chord highlights
    notation.clearChordHighlights();

    // Update Circle Visuals
    circle.selectKey(activeIndex, false);

    // Update Focused Notation or Grid Active State (with smooth vertical auto-scroll)
    if (currentView === 'split') {
      notation.renderFocusedView('focused-notation-container', activeIndex);
    } else {
      notation.updateGridActiveState(activeIndex);
    }

    // Update Theory Card Breakdown
    updateTheoryDetails();
  }

  function formatPitch(p) {
    if (!p) return '';
    return p.replace('-', '♭').replace('#', '♯');
  }

  function updateTheoryDetails() {
    if (!window.CIRCLE_MODULATIONS_DATA) return;
    const data = window.CIRCLE_MODULATIONS_DATA[activeIndex];
    if (!data) return;

    if (theoryTargetKey) theoryTargetKey.textContent = `${data.targetKey} Major (${data.keySig})`;
    if (theoryPedal && data.chords[1]) {
      const pedalPitch = data.chords[1].rhPitches[data.chords[1].rhPitches.length - 1];
      theoryPedal.textContent = `${formatPitch(pedalPitch)} (Target Tonic Inverted Pedal held across Chords 2–5)`;
    }
    if (theoryAlto) {
      const altoNotes = data.chords.map(c => formatPitch(c.rhPitches[1])).join(' → ');
      theoryAlto.textContent = `${altoNotes} (Descending 6̂ → 5̂ → ♯4̂ → ♮4̂ → 3̂)`;
    }
    if (theoryTenor) {
      const tenorNotes = data.chords.map(c => formatPitch(c.rhPitches[0])).join(' → ');
      theoryTenor.textContent = `${tenorNotes} (Parallel 10ths with Bass)`;
    }
    if (theoryBass) {
      const bassNotes = data.chords.map(c => `${formatPitch(c.lhPitches[0])}/${formatPitch(c.lhPitches[1] || '')}`).join(' → ');
      theoryBass.textContent = `${bassNotes} (Chromatic Root Octaves: 4̂ → ♭3̂ → 2̂ → ♭2̂ → 1̂)`;
    }
  }

  // 6. Beat Indicator Animation
  function updateBeatVisuals(beatIdx, measureBeat, chordIdx) {
    const dots = document.querySelectorAll('.beat-dot');
    dots.forEach((dot, idx) => {
      if (idx + 1 === measureBeat) {
        dot.classList.add('active');
        if (measureBeat === 1) dot.classList.add('downbeat');
      } else {
        dot.classList.remove('active', 'downbeat');
      }
    });

    // In 2-bar quarter mode: highlight active chord in UI if available
    const activeChordNameEl = document.getElementById('active-chord-name');
    if (activeChordNameEl && window.CIRCLE_MODULATIONS_DATA) {
      const mod = window.CIRCLE_MODULATIONS_DATA[activeIndex];
      if (mod && mod.chords[chordIdx]) {
        activeChordNameEl.textContent = `${mod.chords[chordIdx].name} (${mod.chords[chordIdx].roman})`;
      }
    }
  }

  // 7. Transport Controls (Play / Pause / Metronome)
  btnPlay.addEventListener('click', () => {
    if (audio.isPlaying) {
      audio.stop();
      notation.clearChordHighlights();
      btnPlay.classList.remove('playing');
      btnPlay.innerHTML = '▶';
    } else {
      audio.start();
      btnPlay.classList.add('playing');
      btnPlay.innerHTML = '⏸';
    }
  });

  // Tempo Slider & Steppers
  function updateTempo(bpm) {
    audio.setBpm(bpm);
    bpmSlider.value = bpm;
    bpmDisplay.textContent = bpm;
  }

  bpmSlider.addEventListener('input', (e) => {
    updateTempo(parseInt(e.target.value, 10));
  });

  btnBpmMinus.addEventListener('click', () => {
    updateTempo(audio.bpm - 2);
  });

  btnBpmPlus.addEventListener('click', () => {
    updateTempo(audio.bpm + 2);
  });

  // Tap Tempo
  let tapTimes = [];
  btnTapTempo.addEventListener('click', () => {
    const now = performance.now();
    tapTimes.push(now);
    if (tapTimes.length > 4) tapTimes.shift();

    if (tapTimes.length >= 2) {
      let intervals = [];
      for (let i = 1; i < tapTimes.length; i++) {
        intervals.push(tapTimes[i] - tapTimes[i - 1]);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const calcBpm = Math.round(60000 / avgInterval);
      if (calcBpm >= 40 && calcBpm <= 220) {
        updateTempo(calcBpm);
      }
    }
  });

  // Toggles: Mute Chords, Mute Metronome, Roman Numerals
  switchChords.addEventListener('change', (e) => {
    audio.togglePlayChords(e.target.checked);
  });

  switchMetronome.addEventListener('change', (e) => {
    audio.togglePlayMetronome(e.target.checked);
  });

  switchRoman.addEventListener('change', (e) => {
    showRoman = e.target.checked;
    notation.toggleRomanNumerals(showRoman);
    refreshNotationView();
  });

  // Notation Format Toggles (Quarter Note 2 Bars vs Whole Note 5 Bars)
  btnFormatQuarter.addEventListener('click', () => {
    if (notationFormat === 'quarter') return;
    notationFormat = 'quarter';
    btnFormatQuarter.classList.add('active');
    btnFormatWhole.classList.remove('active');
    notation.setFormat('quarter');
    audio.setMode('quarter');
    refreshNotationView();
  });

  btnFormatWhole.addEventListener('click', () => {
    if (notationFormat === 'whole') return;
    notationFormat = 'whole';
    btnFormatWhole.classList.add('active');
    btnFormatQuarter.classList.remove('active');
    notation.setFormat('whole');
    audio.setMode('whole');
    refreshNotationView();
  });

  // View Mode Switcher
  btnViewSplit.addEventListener('click', () => {
    if (currentView === 'split') return;
    currentView = 'split';
    btnViewSplit.classList.add('active');
    btnViewGrid.classList.remove('active');
    if (scrollingLayoutToggle) scrollingLayoutToggle.style.display = 'none';
    splitViewSection.style.display = 'grid';
    gridViewSection.style.display = 'none';
    notation.renderFocusedView('focused-notation-container', activeIndex);
  });

  btnViewGrid.addEventListener('click', () => {
    if (currentView === 'grid') return;
    currentView = 'grid';
    btnViewGrid.classList.add('active');
    btnViewSplit.classList.remove('active');
    if (scrollingLayoutToggle) scrollingLayoutToggle.style.display = 'flex';
    splitViewSection.style.display = 'none';
    gridViewSection.style.display = '';
    notation.renderGridView('grid-view-section', activeIndex, (selectedIdx) => {
      onSelectModulation(selectedIdx);
    });
  });

  // Scrolling Layout Sub-Toggle (1 Column Stream vs 3 Column Grid)
  if (btnLayoutStream && btnLayoutGrid) {
    btnLayoutStream.addEventListener('click', () => {
      if (notation.gridLayout === 'stream') return;
      btnLayoutStream.classList.add('active');
      btnLayoutGrid.classList.remove('active');
      notation.setLayout('stream');
      refreshNotationView();
    });

    btnLayoutGrid.addEventListener('click', () => {
      if (notation.gridLayout === 'grid') return;
      btnLayoutGrid.classList.add('active');
      btnLayoutStream.classList.remove('active');
      notation.setLayout('grid');
      refreshNotationView();
    });
  }

  // Navigation Buttons
  btnPrevKey.addEventListener('click', () => {
    circle.prevKey();
  });

  btnNextKey.addEventListener('click', () => {
    circle.nextKey();
  });

  // Keyboard Shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;

    if (e.code === 'Space') {
      e.preventDefault();
      btnPlay.click();
    } else if (e.code === 'ArrowRight') {
      e.preventDefault();
      circle.nextKey();
    } else if (e.code === 'ArrowLeft') {
      e.preventDefault();
      circle.prevKey();
    } else if (e.key === 'm' || e.key === 'M') {
      switchMetronome.checked = !switchMetronome.checked;
      switchMetronome.dispatchEvent(new Event('change'));
    } else if (e.key === 'c' || e.key === 'C') {
      switchChords.checked = !switchChords.checked;
      switchChords.dispatchEvent(new Event('change'));
    }
  });

  function refreshNotationView() {
    if (currentView === 'split') {
      notation.renderFocusedView('focused-notation-container', activeIndex);
    } else {
      notation.renderGridView('grid-view-section', activeIndex, (selectedIdx) => {
        onSelectModulation(selectedIdx);
      });
    }
  }

  // Window resize handler
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      refreshNotationView();
    }, 150);
  });

  // Initial Render & URL Parameter deep-linking
  const urlParams = new URLSearchParams(window.location.search);
  const initialKey = parseInt(urlParams.get('key'), 10);
  if (!isNaN(initialKey) && initialKey >= 0 && initialKey < 12) {
    activeIndex = initialKey;
  }

  if (urlParams.get('format') === 'whole') {
    btnFormatWhole.click();
  }

  if (urlParams.get('roman') === '1' || urlParams.get('roman') === 'true') {
    switchRoman.checked = true;
    showRoman = true;
    notation.toggleRomanNumerals(true);
  }

  onSelectModulation(activeIndex);

  if (urlParams.get('view') === 'grid' || urlParams.get('view') === 'overview') {
    btnViewGrid.click();
  }
});
