/**
 * circle.js - Interactive SVG Circle of Fifths Engine
 * Renders an interactive 12-key circle with animated arcs, active selection, and responsive layout.
 */

class CircleOfFifths {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    this.options = Object.assign({
      size: 460,
      radius: 175,
      nodeRadius: 28,
      onSelectKey: null
    }, options);

    this.activeKeyIndex = 0; // 0 to 11 (corresponds to modulations 1 to 12)
    this.keys = [
      { id: 1, name: 'C',  angle: -90, sig: '0',     sharps: 0, flats: 0, target: 'G'  },
      { id: 2, name: 'G',  angle: -60, sig: '1♯',    sharps: 1, flats: 0, target: 'D'  },
      { id: 3, name: 'D',  angle: -30, sig: '2♯',    sharps: 2, flats: 0, target: 'A'  },
      { id: 4, name: 'A',  angle: 0,   sig: '3♯',    sharps: 3, flats: 0, target: 'E'  },
      { id: 5, name: 'E',  angle: 30,  sig: '4♯',    sharps: 4, flats: 0, target: 'B'  },
      { id: 6, name: 'B',  angle: 60,  sig: '5♯',    sharps: 5, flats: 0, target: 'F#' },
      { id: 7, name: 'F♯', angle: 90,  sig: '6♯/6♭', sharps: 6, flats: 6, target: 'Db', alt: 'G♭' },
      { id: 8, name: 'D♭', angle: 120, sig: '5♭',    sharps: 0, flats: 5, target: 'Ab' },
      { id: 9, name: 'A♭', angle: 150, sig: '4♭',    sharps: 0, flats: 4, target: 'Eb' },
      { id: 10, name: 'E♭', angle: 180, sig: '3♭',   sharps: 0, flats: 3, target: 'Bb' },
      { id: 11, name: 'B♭', angle: 210, sig: '2♭',   sharps: 0, flats: 2, target: 'F'  },
      { id: 12, name: 'F',  angle: 240, sig: '1♭',   sharps: 0, flats: 1, target: 'C'  },
    ];

    this.render();
  }

  render() {
    if (!this.container) return;

    const size = this.options.size;
    const center = size / 2;
    const r = this.options.radius;
    const nr = this.options.nodeRadius;

    let svg = `<svg viewBox="0 0 ${size} ${size}" class="circle-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Luminous Glow Filters -->
        <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="glow-indigo" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <!-- Gradients -->
        <linearGradient id="arc-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#818cf8" />
          <stop offset="100%" stop-color="#c084fc" />
        </linearGradient>
        <radialGradient id="center-bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e1b4b" stop-opacity="0.8" />
          <stop offset="100%" stop-color="#0f172a" stop-opacity="0.95" />
        </radialGradient>
      </defs>

      <!-- Background Orbit Track -->
      <circle cx="${center}" cy="${center}" r="${r}" class="circle-track" />
      <circle cx="${center}" cy="${center}" r="${r - 42}" class="circle-inner-track" />

      <!-- Connecting Arc from Current Key to Next Key -->
      <path id="modulation-arc" class="modulation-arc" d="" />

      <!-- Center Hub -->
      <g class="circle-hub" transform="translate(${center}, ${center})">
        <circle cx="0" cy="0" r="88" class="hub-circle" />
        <circle cx="0" cy="0" r="84" class="hub-inner-ring" />
        <text y="-28" class="hub-label">MODULATING</text>
        <text y="4" class="hub-transition" id="hub-transition-text">C → G</text>
        <text y="28" class="hub-keysig" id="hub-keysig-text">Key: G Major (1♯)</text>
        <text y="48" class="hub-pedal" id="hub-pedal-text">Pedal: G5</text>
      </g>

      <!-- 12 Key Nodes -->
      <g class="circle-nodes">`;

    this.keys.forEach((k, idx) => {
      // Angle in radians (0° is at top = -90° in standard math coordinate)
      const rad = (k.angle * Math.PI) / 180;
      const x = center + r * Math.cos(rad);
      const y = center + r * Math.sin(rad);

      // Key signature label offset further outward
      const sigR = r + 38;
      const sigX = center + sigR * Math.cos(rad);
      const sigY = center + sigR * Math.sin(rad);

      svg += `
        <g class="key-node" data-index="${idx}" transform="translate(${x}, ${y})">
          <circle cx="0" cy="0" r="${nr}" class="node-bg" />
          <circle cx="0" cy="0" r="${nr - 3}" class="node-border" />
          <text dy="5" class="node-name">${k.name}</text>
        </g>
        <text x="${sigX}" y="${sigY}" dy="4" class="node-sig">${k.sig}</text>
      `;
    });

    svg += `</g></svg>`;

    this.container.innerHTML = svg;

    // Attach click listeners to key nodes
    const nodeElements = this.container.querySelectorAll('.key-node');
    nodeElements.forEach((el) => {
      el.addEventListener('click', () => {
        const idx = parseInt(el.getAttribute('data-index'), 10);
        this.selectKey(idx, true);
      });
    });

    this.updateActiveKeyVisuals();
  }

  selectKey(index, triggerCallback = true) {
    if (index < 0 || index >= 12) return;
    this.activeKeyIndex = index;
    this.updateActiveKeyVisuals();

    if (triggerCallback && typeof this.options.onSelectKey === 'function') {
      this.options.onSelectKey(this.activeKeyIndex);
    }
  }

  nextKey() {
    const nextIdx = (this.activeKeyIndex + 1) % 12;
    this.selectKey(nextIdx, true);
  }

  prevKey() {
    const prevIdx = (this.activeKeyIndex + 11) % 12;
    this.selectKey(prevIdx, true);
  }

  updateActiveKeyVisuals() {
    const nodes = this.container.querySelectorAll('.key-node');
    nodes.forEach((node, idx) => {
      if (idx === this.activeKeyIndex) {
        node.classList.add('active');
        node.setAttribute('filter', 'url(#glow-indigo)');
      } else {
        node.classList.remove('active');
        node.removeAttribute('filter');
      }
    });

    // Update Arc connecting Current Key to Target Key
    this.updateArc();

    // Update Center Hub Text if data available
    if (window.CIRCLE_MODULATIONS_DATA && window.CIRCLE_MODULATIONS_DATA[this.activeKeyIndex]) {
      const data = window.CIRCLE_MODULATIONS_DATA[this.activeKeyIndex];
      const transEl = document.getElementById('hub-transition-text');
      const sigEl = document.getElementById('hub-keysig-text');
      const pedalEl = document.getElementById('hub-pedal-text');

      if (transEl) transEl.textContent = `${data.fromKey.replace(' Major', '')} → ${data.toKey.replace(' Major', '')}`;
      if (sigEl) sigEl.textContent = `Key: ${data.targetKey} (${data.keySig})`;
      if (pedalEl && data.chords && data.chords[1]) {
        const pedalPitch = data.chords[1].rhPitches[data.chords[1].rhPitches.length - 1];
        pedalEl.textContent = `Inverted Pedal: ${pedalPitch.replace('-', '♭')}`;
      }
    }
  }

  updateArc() {
    const arcPath = document.getElementById('modulation-arc');
    if (!arcPath) return;

    const size = this.options.size;
    const center = size / 2;
    const r = this.options.radius;

    // Start angle: Current key
    const currentKey = this.keys[this.activeKeyIndex];
    // End angle: Next key clockwise (+30 degrees)
    const startAngle = currentKey.angle;
    const endAngle = startAngle + 30;

    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    const x1 = center + r * Math.cos(startRad);
    const y1 = center + r * Math.sin(startRad);
    const x2 = center + r * Math.cos(endRad);
    const y2 = center + r * Math.sin(endRad);

    // SVG arc format: A rx ry x-axis-rotation large-arc-flag sweep-flag x y
    const d = `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
    arcPath.setAttribute('d', d);
  }
}

window.CircleOfFifths = CircleOfFifths;
