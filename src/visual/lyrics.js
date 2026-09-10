/**
 * Lyric Typography Layer
 * Handles warm off-white lyric reveals, opacity, transforms, and timing markers.
 */
export class LyricsLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-lyrics';
    parentGroup.appendChild(this.group);

    // Timeline cues from the reference video
    this.cues = [
      {
        start: 3.3,
        end: 7.2,
        lines: ["so how's life", "without me"],
        x: 450,
        y: 220,
        fontSize: 32,
        align: 'left'
      },
      {
        start: 7.5,
        end: 10.5,
        lines: ["deewangi ki", "hadd"],
        x: 80,
        y: 190,
        fontSize: 30,
        align: 'left'
      },
      {
        start: 10.7,
        end: 13.3,
        lines: ["o", "parvardigara"],
        x: 80,
        y: 190,
        fontSize: 30,
        align: 'left'
      },
      {
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
        <text id="lyric-text-element" 
              fill="#FDF8F2" 
              font-family="'Caveat', 'Comic Sans MS', cursive, sans-serif" 
              font-weight="700"
              filter="url(#warm-glow-filter)"
              letter-spacing="1px">
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
      this.contentGroup.setAttribute('opacity', this.state.opacity.toFixed(2));
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
    const cue = this.cues.find(c => time >= c.start && time <= c.end);

    if (cue) {
      const fadeInDuration = 0.45;
      const fadeOutDuration = 0.4;
      let opacity = 1.0;

      // In-out easing
      if (time - cue.start < fadeInDuration) {
        opacity = (time - cue.start) / fadeInDuration;
      } else if (cue.end - time < fadeOutDuration) {
        opacity = (cue.end - time) / fadeOutDuration;
      }

      this.state.opacity = Math.max(0, Math.min(1, opacity));
      this.state.x = cue.x;
      this.state.y = cue.y;
      this.state.scale = 1.0;

      if (this.state.activeCue !== cue) {
        this.state.activeCue = cue;
        // Build tspan lines (x is 0 relative to contentGroup translation)
        let html = '';
        cue.lines.forEach((line, idx) => {
          html += `<tspan x="0" dy="${idx === 0 ? 0 : 36}" font-size="${cue.fontSize}">${line}</tspan>`;
        });
        this.textElement.innerHTML = html;
      }

      this.applyState();
    } else {
      // Hide lyrics outside of cues
      this.state.opacity = 0;
      this.state.activeCue = null;
      this.applyState();
    }
  }
}
