/**
 * Floating Particles & Wind-Blown Leaves Layer
 * Procedural particles and petals drifting across the warm sunset sky.
 * Deterministic calculation allows seeking forward and backwards seamlessly.
 */
export class ParticlesLayer {
  constructor(parentGroup, count = 28) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-particles';
    parentGroup.appendChild(this.group);

    this.count = count;
    this.particles = [];
    this.initParticles();
  }

  initParticles() {
    this.particles = [];
    for (let i = 0; i < this.count; i++) {
      // Deterministic pseudo-random parameters based on index
      const seed = i * 137.5;
      const speedX = 28 + (i % 7) * 12; // 28 to 100 px per sec
      const startX = (seed * 11) % 900 - 100;
      const startY = 80 + (seed * 19) % 560;
      const size = 3.5 + (i % 5) * 1.5;
      const isLeaf = i % 3 !== 0; // 2/3 leaves, 1/3 glowing dust motes
      const color = isLeaf 
        ? (i % 2 === 0 ? '#EFA98A' : '#73576C')
        : '#FFF2D6';

      const el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      
      if (isLeaf) {
        // Organic curved leaf shape
        el.innerHTML = `
          <path d="M0,0 C${size},${-size*0.7} ${size*2},${-size*0.4} ${size*2.6},0 C${size*2},${size*0.7} ${size},${size*0.4} 0,0 Z" 
                fill="${color}" opacity="0.75" />
        `;
      } else {
        // Glowing round dust mote
        el.innerHTML = `
          <circle cx="0" cy="0" r="${size * 0.45}" fill="${color}" opacity="0.65" filter="url(#warm-glow-filter)" />
        `;
      }

      this.group.appendChild(el);
      this.particles.push({
        el,
        speedX,
        startX,
        startY,
        size,
        freqY: 0.8 + (i % 4) * 0.6,
        ampY: 15 + (i % 6) * 8,
        rotSpeed: 30 + (i % 8) * 25,
        phase: (i * 1.7)
      });
    }
  }

  /**
   * Updates particle positions deterministically based on playback time
   * @param {number} time Time in seconds
   */
  update(time) {
    const wrapWidth = 920; // -100 to 820
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      // Compute deterministic X position
      let curX = (p.startX + p.speedX * time) % wrapWidth;
      if (curX < -80) curX += wrapWidth;
      curX -= 60; // offset to span -60 to 760

      // Sinusoidal floating wave on Y axis
      const curY = p.startY + Math.sin(time * p.freqY + p.phase) * p.ampY;

      // Rotation
      const rot = (time * p.rotSpeed + p.phase * 45) % 360;

      p.el.setAttribute('transform', `translate(${curX.toFixed(1)}, ${curY.toFixed(1)}) rotate(${rot.toFixed(1)})`);
    }
  }
}
