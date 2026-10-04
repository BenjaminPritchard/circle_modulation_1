/**
 * audio.js - High-Precision Web Audio API Metronome & Polyphonic Chord Synthesizer
 * Provides rock-solid timing with lookahead scheduling and realistic audio tones.
 */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.bpm = 72;
    this.metronomeVolume = 0.8;
    this.synthVolume = 0.6;
    this.playChords = true;
    this.playMetronome = true;

    // Lookahead scheduler settings (Web Audio Best Practice)
    this.lookaheadMs = 25.0; // How frequently to call scheduling function (in ms)
    this.scheduleAheadTime = 0.1; // How far ahead to schedule audio events (in seconds)
    this.currentBeat = 0; // 0 to 7 in 8-beat (2-bar) mode
    this.nextBeatTime = 0.0;
    this.timerId = null;

    // Mode: 'quarter' (8 beats per key) or 'whole' (20 beats per key: 4 beats x 5 chords)
    this.mode = 'quarter';

    // Callback listeners for UI sync
    this.onBeat = null; // function(beatNumber, measureBeat, chordIndex)
    this.onKeyAdvance = null; // function()
    this.getActiveModulation = null; // function(): returns active modulation object
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setBpm(bpm) {
    this.bpm = Math.max(30, Math.min(220, bpm));
  }

  setMetronomeVolume(vol) {
    this.metronomeVolume = Math.max(0, Math.min(1, vol));
  }

  setSynthVolume(vol) {
    this.synthVolume = Math.max(0, Math.min(1, vol));
  }

  togglePlayChords(enable) {
    this.playChords = enable !== undefined ? enable : !this.playChords;
    return this.playChords;
  }

  togglePlayMetronome(enable) {
    this.playMetronome = enable !== undefined ? enable : !this.playMetronome;
    return this.playMetronome;
  }

  setMode(mode) {
    this.mode = mode; // 'quarter' or 'whole'
  }

  start() {
    this.init();
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.currentBeat = 0;
    this.nextBeatTime = this.ctx.currentTime + 0.05;

    this.scheduler();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    this.currentBeat = 0;
  }

  scheduler() {
    if (!this.isPlaying) return;

    // Schedule any beats that fall within the lookahead window
    while (this.nextBeatTime < this.ctx.currentTime + this.scheduleAheadTime) {
      this.scheduleBeat(this.currentBeat, this.nextBeatTime);
      this.advanceBeat();
    }

    this.timerId = setTimeout(() => this.scheduler(), this.lookaheadMs);
  }

  advanceBeat() {
    const secondsPerBeat = 60.0 / this.bpm;
    this.nextBeatTime += secondsPerBeat;
    this.currentBeat++;

    const totalBeatsPerKey = this.mode === 'quarter' ? 8 : 20;

    if (this.currentBeat >= totalBeatsPerKey) {
      this.currentBeat = 0;
      // Key advance happens at the end of the modulation cycle
      if (this.onKeyAdvance) {
        // Dispatch key advance asynchronously on the UI thread
        setTimeout(() => {
          if (this.isPlaying && this.onKeyAdvance) {
            this.onKeyAdvance();
          }
        }, 0);
      }
    }
  }

  scheduleBeat(beatIdx, time) {
    // Determine measure beat (1..4)
    const measureBeat = (beatIdx % 4) + 1;
    const isDownbeat = measureBeat === 1;

    // 1. Play Metronome Click
    if (this.playMetronome && this.metronomeVolume > 0) {
      this.playClick(time, isDownbeat);
    }

    // 2. Play Synthesizer Chord if active
    let chordIdx = -1;
    let shouldTriggerChord = false;

    if (this.mode === 'quarter') {
      // In 2-bar quarter mode:
      // Beat 0 -> Chord 0 (IV)
      // Beat 1 -> Chord 1 (i6)
      // Beat 2 -> Chord 2 (V7/V)
      // Beat 3 -> Chord 3 (bIImaj7)
      // Beat 4 -> Chord 4 (I) (held across beats 4, 5, 6, 7)
      if (beatIdx < 4) {
        chordIdx = beatIdx;
        shouldTriggerChord = true;
      } else if (beatIdx === 4) {
        chordIdx = 4;
        shouldTriggerChord = true;
      } else {
        chordIdx = 4; // sustained
        shouldTriggerChord = false;
      }
    } else {
      // In whole-note mode:
      // Each chord lasts 4 beats (1 whole measure)
      chordIdx = Math.floor(beatIdx / 4);
      shouldTriggerChord = isDownbeat;
    }

    if (shouldTriggerChord && this.playChords && this.synthVolume > 0 && this.getActiveModulation) {
      const mod = this.getActiveModulation();
      if (mod && mod.chords && mod.chords[chordIdx]) {
        const chordData = mod.chords[chordIdx];
        const chordDuration = this.mode === 'quarter'
          ? (chordIdx === 4 ? (60.0 / this.bpm) * 3.8 : (60.0 / this.bpm) * 0.9)
          : (60.0 / this.bpm) * 3.8;
        this.playChordMidi(chordData.midi, time, chordDuration);
      }
    }

    // Notify UI listener
    if (this.onBeat) {
      const delayMs = Math.max(0, (time - this.ctx.currentTime) * 1000);
      setTimeout(() => {
        if (this.isPlaying && this.onBeat) {
          this.onBeat(beatIdx, measureBeat, chordIdx);
        }
      }, delayMs);
    }
  }

  playClick(time, isDownbeat) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    // Downbeat: higher frequency (1200Hz), other beats: 800Hz
    osc.frequency.setValueAtTime(isDownbeat ? 1200 : 800, time);

    const clickVol = (isDownbeat ? 1.0 : 0.6) * this.metronomeVolume;
    gain.gain.setValueAtTime(clickVol, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.04);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(time);
    osc.stop(time + 0.045);
  }

  playChordMidi(midiNotes, time, duration = 1.0) {
    if (!midiNotes || midiNotes.length === 0) return;

    midiNotes.forEach((midi, idx) => {
      this.playNoteMidi(midi, time, duration, idx);
    });
  }

  playNoteMidi(midi, time, duration, voiceIndex = 0) {
    const freq = 440 * Math.pow(2, (midi - 69) / 12);

    // Warm Rhodes / Acoustic Piano style hybrid synth
    const fundamental = this.ctx.createOscillator();
    const overtone = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    // Fundamental: Triangle/Sine blend
    fundamental.type = 'triangle';
    fundamental.frequency.setValueAtTime(freq, time);

    // Overtone: Soft Sine at 2x frequency for rich harmonics
    overtone.type = 'sine';
    overtone.frequency.setValueAtTime(freq * 2, time);

    // Filter to soften brightness
    filter.type = 'lowpass';
    const cutoff = Math.min(4000, Math.max(600, freq * 3.5));
    filter.frequency.setValueAtTime(cutoff, time);
    filter.frequency.exponentialRampToValueAtTime(cutoff * 0.4, time + duration);

    // ADSR Envelope
    const peakVolume = (0.15 / Math.sqrt(voiceIndex + 1)) * this.synthVolume;
    noteGain.gain.setValueAtTime(0.0001, time);
    // Instant attack (piano hammer strike)
    noteGain.gain.linearRampToValueAtTime(peakVolume, time + 0.008);
    // Natural acoustic decay
    noteGain.gain.exponentialRampToValueAtTime(peakVolume * 0.4, time + 0.25);
    // Sustain & Release
    noteGain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    // Connect audio graph
    fundamental.connect(filter);
    overtone.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.ctx.destination);

    fundamental.start(time);
    overtone.start(time);
    fundamental.stop(time + duration + 0.05);
    overtone.stop(time + duration + 0.05);
  }
}

// Export singleton or class
window.AudioEngine = AudioEngine;
