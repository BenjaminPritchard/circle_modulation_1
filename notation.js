/**
 * notation.js - ABC Notation Rendering Engine via abcjs
 * Supports Focused Single-Key View and Full 12-Key Circle Ring/Grid View with Dimmed Inactive Styling.
 */

class NotationEngine {
  constructor() {
    this.currentNotationFormat = 'quarter'; // 'quarter' (2 measures) or 'whole' (5 measures)
    this.showRomanNumerals = false;
    this.activeKeyIndex = 0;
    this.gridLayout = 'stream'; // 'stream' (1 column continuous scroll) or 'grid' (multi-column)
  }

  setFormat(format) {
    this.currentNotationFormat = format; // 'quarter' or 'whole'
  }

  setLayout(layout) {
    this.gridLayout = layout; // 'stream' or 'grid'
  }

  toggleRomanNumerals(show) {
    this.showRomanNumerals = show !== undefined ? show : !this.showRomanNumerals;
    return this.showRomanNumerals;
  }

  getAbcString(mod, format = this.currentNotationFormat, includeRoman = this.showRomanNumerals, showTitle = true) {
    let baseAbc = '';
    const titleLine = showTitle ? `T:${mod.title}\n` : '';

    if (format === 'quarter') {
      // 2 Measures: Measure 1 has 4 quarter notes, Measure 2 has 1 whole note (duration 4)
      const rh_q = `"${mod.chords[0].name}"${mod.chords[0].rhABC_whole} "${mod.chords[1].name}"${mod.chords[1].rhABC_whole} "${mod.chords[2].name}"${mod.chords[2].rhABC_whole} "${mod.chords[3].name}"${mod.chords[3].rhABC_whole} | "${mod.chords[4].name}"${mod.chords[4].rhABC_whole}4 ||`;
      const lh_q = `${mod.chords[0].lhABC_whole} ${mod.chords[1].lhABC_whole} ${mod.chords[2].lhABC_whole} ${mod.chords[3].lhABC_whole} | ${mod.chords[4].lhABC_whole}4 ||`;

      let wLines = '';
      if (includeRoman) {
        const w1 = mod.chords.slice(0, 4).map(c => c.roman).join(' ') + ' | ' + mod.chords[4].roman;
        const w2 = mod.chords.slice(0, 4).map(c => c.figuredBass).join(' ') + ' | ' + mod.chords[4].figuredBass;
        wLines = `\nw: ${w1}\nw: ${w2}`;
      }

      baseAbc = `X:${mod.num}
${titleLine}M:4/4
L:1/4
K:${mod.keySig}
%%score ( RH ) | ( LH )
V:RH clef=treble
V:LH clef=bass
[V:RH] ${rh_q}
[V:LH] ${lh_q}${wLines}`;
    } else {
      // 5 Measures Whole Note Format
      const rh_w = mod.chords.map(c => `"${c.name}"${c.rhABC_whole}`).join(' | ');
      const lh_w = mod.chords.map(c => c.lhABC_whole).join(' | ');

      let wLines = '';
      if (includeRoman) {
        const w1 = mod.chords.map(c => c.roman).join(' | ');
        const w2 = mod.chords.map(c => c.figuredBass).join(' | ');
        wLines = `\nw: ${w1}\nw: ${w2}`;
      }

      baseAbc = `X:${mod.num}
${titleLine}M:C
L:1/1
K:${mod.keySig}
%%score ( RH ) | ( LH )
V:RH clef=treble
V:LH clef=bass
[V:RH] ${rh_w} ||
[V:LH] ${lh_w} ||${wLines}`;
    }

    return baseAbc;
  }

  renderFocusedView(containerId, activeIndex = this.activeKeyIndex) {
    this.activeKeyIndex = activeIndex;
    const container = document.getElementById(containerId);
    if (!container || !window.CIRCLE_MODULATIONS_DATA) return;

    const mod = window.CIRCLE_MODULATIONS_DATA[this.activeKeyIndex];
    if (!mod) return;

    container.innerHTML = `<div id="focused-abc-paper" class="focused-paper" style="width: 100%;"></div>`;

    const abcString = this.getAbcString(mod);
    const clientW = (container.clientWidth && container.clientWidth > 100) ? container.clientWidth : 720;
    const staffW = Math.max(340, Math.min(840, clientW - 48));
    const options = {
      responsive: 'resize',
      scale: 1.15,
      staffwidth: staffW,
      add_classes: true
    };

    if (window.ABCJS) {
      window.ABCJS.renderAbc('focused-abc-paper', abcString, options);
    }
  }

  renderGridView(containerId, activeIndex = this.activeKeyIndex, onSelectCallback = null) {
    this.activeKeyIndex = activeIndex;
    const container = document.getElementById(containerId);
    if (!container || !window.CIRCLE_MODULATIONS_DATA) return;

    container.innerHTML = '';
    if (this.gridLayout === 'stream') {
      container.classList.add('layout-stream');
      container.classList.remove('layout-grid');
    } else {
      container.classList.add('layout-grid');
      container.classList.remove('layout-stream');
    }

    const data = window.CIRCLE_MODULATIONS_DATA;
    const isStream = this.gridLayout === 'stream';
    const staffWidth = isStream ? 640 : 320;
    const scale = isStream ? 1.05 : 0.88;

    data.forEach((mod, idx) => {
      const card = document.createElement('div');
      card.className = `score-card ${idx === this.activeKeyIndex ? 'active' : 'inactive'}`;
      card.id = `score-card-${idx}`;
      card.setAttribute('data-index', idx);

      const paperId = `grid-abc-paper-${idx}`;
      card.innerHTML = `
        <div class="card-header">
          <span class="card-num">#${mod.num}</span>
          <span class="card-title">${mod.fromKey} → <strong>${mod.toKey}</strong></span>
          <span class="card-keysig badge">${mod.keySig}</span>
        </div>
        <div id="${paperId}" class="card-notation"></div>
      `;

      card.addEventListener('click', () => {
        if (typeof onSelectCallback === 'function') {
          onSelectCallback(idx);
        }
      });

      container.appendChild(card);

      // Render ABC inside card (without redundant title since card header has it)
      const abcString = this.getAbcString(mod, this.currentNotationFormat, this.showRomanNumerals, false);
      const options = {
        responsive: 'resize',
        scale: scale,
        staffwidth: staffWidth,
        add_classes: true
      };

      if (window.ABCJS) {
        window.ABCJS.renderAbc(paperId, abcString, options);
      }
    });

    // Auto-scroll active card into view after layout calculation
    setTimeout(() => {
      const activeCard = document.getElementById(`score-card-${this.activeKeyIndex}`);
      if (activeCard) {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    }, 60);
  }

  updateGridActiveState(activeIndex) {
    this.activeKeyIndex = activeIndex;
    const cards = document.querySelectorAll('.score-card');
    cards.forEach((card, idx) => {
      if (idx === this.activeKeyIndex) {
        card.classList.add('active');
        card.classList.remove('inactive');
        // Automatically scroll page vertically to keep active card centered in view
        card.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      } else {
        card.classList.remove('active');
        card.classList.add('inactive');
      }
    });
  }

  highlightActiveChord(cardIndex, chordIndex) {
    this.clearChordHighlights();
    if (chordIndex < 0 || chordIndex > 4) return;

    const targetContainer = cardIndex === null 
      ? document.getElementById('focused-abc-paper')
      : document.getElementById(`grid-abc-paper-${cardIndex}`);

    if (!targetContainer) return;

    // 1. Highlight chord text
    const chordTexts = targetContainer.querySelectorAll('.abcjs-chord');
    if (chordTexts && chordTexts[chordIndex]) {
      chordTexts[chordIndex].classList.add('active-chord-text');
    }

    // 2. Highlight note heads & stems for this chord
    let mClass, nClass;
    if (this.currentNotationFormat === 'quarter') {
      if (chordIndex < 4) {
        mClass = 'abcjs-m0';
        nClass = `abcjs-n${chordIndex}`;
      } else {
        mClass = 'abcjs-m1';
        nClass = 'abcjs-n0';
      }
    } else {
      mClass = `abcjs-m${chordIndex}`;
      nClass = 'abcjs-n0';
    }

    const notes = targetContainer.querySelectorAll(`.${mClass}.${nClass}`);
    notes.forEach(n => n.classList.add('active-chord-note'));
  }

  clearChordHighlights() {
    document.querySelectorAll('.active-chord-text, .active-chord-note').forEach(el => {
      el.classList.remove('active-chord-text', 'active-chord-note');
    });
  }
}

window.NotationEngine = NotationEngine;
