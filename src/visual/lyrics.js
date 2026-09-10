/**
 * Lyric Typography Layer
 * Handles warm off-white lyric reveals, opacity, transforms, and timing markers.
 */
export class LyricsLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-lyrics';
    parentGroup.appendChild(this.group);

    // Timeline cues from reference video
    this.cues = [
      {
        id: 'scene1',
        start: 1.45,
        fullAt: 1.70,
        end: 4.47, // Strict hard cut at 4.47s
        lines: ["so how's life", "without me"],
        x: 470,
        y: 220,
        fontSize: 22,
        align: 'left'
      },
      {
        id: 'scene2',
        start: 7.5,
        end: 10.5,
        lines: ["deewangi ki", "hadd"],
        x: 80,
        y: 190,
        fontSize: 30,
        align: 'left'
      },
      {
        id: 'scene3',
        start: 10.7,
        end: 13.3,
        lines: ["o", "parvardigara"],
        x: 80,
        y: 190,
        fontSize: 30,
        align: 'left'
      },
      {
        id: 'scene4',
        start: 13.5,
        end: 14.98,
        lines: ["yeh fitoor"],
        x: 80,
        y: 190,
        fontSize: 30,
        align: 'left'
      }
    ];

    this.state = {
      opacity: 0,
      x: 0,
      y: 0,
      scale: 1,
      revealProgress: 0,
      activeCue: null
    };

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <g id="lyric-content-group" style="pointer-events: none;">
        <!-- Delicate handwritten typography matching reference (warm off-white, light weight, no heavy glow) -->
        <text id="lyric-text-element" 
              fill="#FFF8F0" 
              font-family="'Caveat', cursive, sans-serif" 
              font-weight="400"
              font-size="22"
              letter-spacing="0.5px"
              style="text-shadow: 0 1px 2px rgba(80, 50, 60, 0.2);">
        </text>
      </g>
    `;

    this.textElement = this.group.querySelector('#lyric-text-element');
    this.contentGroup = this.group.querySelector('#lyric-content-group');
  }

  /**
   * Set custom text transform directly
   */
  setTransform({ opacity, x, y, scale, revealProgress }) {
    if (opacity !== undefined) this.state.opacity = opacity;
    if (x !== undefined) this.state.x = x;
    if (y !== undefined) this.state.y = y;
    if (scale !== undefined) this.state.scale = scale;
    if (revealProgress !== undefined) this.state.revealProgress = revealProgress;
    this.applyState();
  }

  applyState() {
    if (this.contentGroup) {
      this.contentGroup.setAttribute('opacity', this.state.opacity.toFixed(3));
      this.contentGroup.setAttribute(
        'transform', 
        `translate(${this.state.x}, ${this.state.y}) scale(${this.state.scale})`
      );
    }
  }

  /**
   * Updates lyric presentation based on time
   * @param {number} time Current timestamp in seconds
   */
  update(time) {
    // Find active cue matching time
    const cue = this.cues.find(c => time >= c.start && time < c.end);

    if (cue) {
      let opacity = 1.0;

      if (cue.id === 'scene1') {
        // Scene 1: Reveal starts at 1.45s, gently fades, becomes fully readable around 1.70s,
        // remains visible through the woman scene, and HARD CUTS at 4.47s.
        if (time < cue.fullAt) {
          opacity = (time - cue.start) / (cue.fullAt - cue.start);
        } else {
          opacity = 1.0; // Remains fully visible until hard cut
        }
      } else {
        // Standard fade
        const fadeInDuration = 0.4;
        const fadeOutDuration = 0.35;
        if (time - cue.start < fadeInDuration) {
          opacity = (time - cue.start) / fadeInDuration;
        } else if (cue.end - time < fadeOutDuration) {
          opacity = (cue.end - time) / fadeOutDuration;
        }
      }

      this.state.opacity = Math.max(0, Math.min(1, opacity));
      this.state.x = cue.x;
      this.state.y = cue.y;
      this.state.scale = 1.0;

      if (this.state.activeCue !== cue) {
        this.state.activeCue = cue;
        let html = '';
        if (cue.id === 'scene1') {
          // Handwritten rounded lowercase appearance with slight irregular baseline
          html = `
            <tspan x="0" y="0" font-size="22">so how's life</tspan>
            <tspan x="1" y="27" font-size="22">without me</tspan>
          `;
        } else {
          cue.lines.forEach((line, idx) => {
            html += `<tspan x="0" dy="${idx === 0 ? 0 : 36}" font-size="${cue.fontSize}">${line}</tspan>`;
          });
        }
        this.textElement.innerHTML = html;
      }

      this.applyState();
    } else {
      // Hide lyrics outside of cues (hard cut)
      this.state.opacity = 0;
      this.state.activeCue = null;
      this.applyState();
    }
  }
}
