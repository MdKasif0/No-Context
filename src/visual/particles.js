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
    this.initScene1SingleLeaf();
  }

  initScene1SingleLeaf() {
    // Dedicated single delicate hand-drawn leaf/petal for Scene 1
    this.scene1Leaf = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.scene1Leaf.id = 'scene1-single-leaf';
    this.scene1Leaf.innerHTML = `
      <path d="M0,0 C4.5,-2.8 9.5,-1.6 12.5,0 C9.5,2.8 4.5,1.6 0,0 Z" 
            fill="#C98877" stroke="#4A3544" stroke-width="0.8" opacity="0.85" />
    `;
    this.group.appendChild(this.scene1Leaf);
  }

  initParticles() {
    this.particlesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.particlesGroup.id = 'particles-general-group';
    this.group.appendChild(this.particlesGroup);

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

      this.particlesGroup.appendChild(el);
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
    if (time < 4.47) {
      // Scene 1: Suppress general particles swarm.
      // Show ONLY the single tiny drifting leaf around the woman during the latter portion of the scene.
      this.particlesGroup.style.display = 'none';

      if (time >= 2.6 && time < 4.47) {
        this.scene1Leaf.style.display = 'block';
        const progress = (time - 2.6) / (4.47 - 2.6); // 0.0 to 1.0

        // Gentle drift path around the woman (from x: 260, y: 280 drifting left-down to x: 175, y: 365)
        const curX = 260 - progress * 85 + Math.sin(time * 2.8) * 6;
        const curY = 280 + progress * 85 + Math.cos(time * 2.2) * 8;
        const rot = progress * 140 + Math.sin(time * 3.5) * 15;

        // Fade in smoothly between 2.6s and 2.9s
        let op = 0.85;
        if (time < 2.9) {
          op = ((time - 2.6) / 0.3) * 0.85;
        }
        this.scene1Leaf.setAttribute('opacity', op.toFixed(2));
        this.scene1Leaf.setAttribute('transform', `translate(${curX.toFixed(1)}, ${curY.toFixed(1)}) rotate(${rot.toFixed(1)})`);
      } else {
        this.scene1Leaf.style.display = 'none';
      }
    } else {
      // Post Scene 1
      this.scene1Leaf.style.display = 'none';
      this.particlesGroup.style.display = 'block';

      const wrapWidth = 920;
      for (let i = 0; i < this.particles.length; i++) {
        const p = this.particles[i];
        let curX = (p.startX + p.speedX * time) % wrapWidth;
        if (curX < -80) curX += wrapWidth;
        curX -= 60;

        const curY = p.startY + Math.sin(time * p.freqY + p.phase) * p.ampY;
        const rot = (time * p.rotSpeed + p.phase * 45) % 360;
        p.el.setAttribute('transform', `translate(${curX.toFixed(1)}, ${curY.toFixed(1)}) rotate(${rot.toFixed(1)})`);
      }
    }
  }
}
