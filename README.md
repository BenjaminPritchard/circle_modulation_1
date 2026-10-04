# Circle Modulation Studio 🎵

An interactive, responsive Circle of Fifths practice trainer and musical score visualizer for mastering modulations through all 12 major keys.

---

## 🚀 Quick Start

To launch the web application locally:

```bash
cd "circle modulation"   # or: cd circle_modulation
python3 server.py 8088
```

Then open your browser to:
👉 **[http://localhost:8088/index.html](http://localhost:8088/index.html)**

---

## ✨ Key Features

1. **Interactive SVG Circle of Fifths Diagram:**
   - Tap or click any of the 12 keys around the circle ($C \to G \to D \to A \to \dots \to F \to C$).
   - Real-time animated luminous arc connecting the source key to the target modulation.
   - Dynamic center hub displaying the current transition, key signature, and inverted pedal pitch.

2. **Compact 2-Measure Format (Quarter Notes):**
   - Measure 1 contains the 4 chromatic voice-leading chords as quarter notes.
   - Measure 2 resolves into the target tonic chord as a whole note.
   - Also includes a toggle for the 5-Measure Whole-Note Chorale format.

3. **12-Key Overview Mode (Dimmed Inactive Styling):**
   - See all 12 modulations notated simultaneously.
   - The currently selected modulation is **fully visible, crisp white, and illuminated with an indigo glow**.
   - All other 11 modulations are rendered in **elegant, muted light gray** (`opacity: 0.32`).
   - Clicking any card instantly focuses and illuminates that key.

4. **High-Precision Metronome & Play-Along Auto-Advance:**
   - Web Audio API lookahead scheduler for rock-solid timing.
   - Distinct woodblock clicks (1200 Hz downbeat, 800 Hz beats 2–4).
   - Polyphonic synthesizer backing chords with smooth ADSR envelope.
   - Automatically advances clockwise around the circle every 2 measures (8 beats) so you can play along smoothly at the keyboard.
   - Tap tempo, tempo slider, stepper buttons, and animated visual beat dots.

5. **Theoretical Blueprint & Voice Leading Card:**
   - Detailed breakdown of each voice for pianists and theory students:
     - **Soprano:** Common inverted pedal held at the top.
     - **Alto:** Chromatically descending line ($6̂ \to 5̂ \to ♯4̂ \to ♮4̂ \to 3̂$).
     - **Tenor:** Parallel 10ths with the bass line ($1̂ \to ♭7̂ \to 6̂ \to ♭6̂ \to 5̂$).
     - **Bass (LH):** Chromatic descending root octaves ($4̂ \to ♭3̂ \to 2̂ \to ♭2̂ \to 1̂$).
   - Toggleable Roman numeral and figured bass analysis.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| `Space` | Start / Stop Metronome & Auto-Advance |
| `→` (Right Arrow) | Next Key Clockwise |
| `←` (Left Arrow) | Previous Key Counter-Clockwise |
| `M` | Mute / Unmute Metronome Click |
| `C` | Mute / Unmute Synthesizer Chords |

---

## 🔗 Deep-Linking URL Parameters

- `?view=grid` — Open directly in the 12-Key Overview grid
- `?key=3` — Jump directly to key index (0 = C, 1 = G, 2 = D, 3 = A, etc.)
- `?format=whole` — Load the 5-measure whole note chorale format
- `?roman=1` — Show Roman numerals and figured bass
