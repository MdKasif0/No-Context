/**
 * Lyric Typography Layer
 * Handles warm off-white lyric reveals, opacity, transforms, and timing markers.
 * Strictly adheres to handwritten, rounded lowercase style ('Caveat') with progressive,
 * vocal-synchronized word reveals, subtle horizontal settling, and zero modern UI artifacts.
 */

export class LyricsLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-lyrics';
    parentGroup.appendChild(this.group);

    // Scene 2 Multi-stage progressive word reveal cues
    this.scene2Stages = [
      {
        id: 's2-parvardigara',
        start: 4.47,
        end: 5.08,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'parvardigara,', isNew: true, stageStart: 4.47 },
          { text: 'parvardigara', isNew: true, stageStart: 4.47 }
        ]
      },
      {
        id: 's2-deewan',
        start: 5.08,
        end: 5.78,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'deewan', isNew: true, stageStart: 5.08 }
        ]
      },
      {
        id: 's2-deewangi',
        start: 5.78,
        end: 6.58,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'deewangi', isNew: true, stageStart: 5.78 }
        ]
      },
      {
        id: 's2-deewangi-ki',
        start: 6.58,
        end: 7.18,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          {
            words: [
              { text: 'deewangi ', isNew: false },
              { text: 'ki', isNew: true, stageStart: 6.58 }
            ]
          }
        ]
      },
      {
        id: 's2-hadd',
        start: 7.18,
        end: 7.68,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'deewangi ki', isNew: false },
          { text: 'hadd', isNew: true, stageStart: 7.18 }
        ]
      },
      {
        id: 's2-maine',
        start: 7.68,
        end: 8.28,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'deewangi ki', isNew: false },
          { text: 'hadd', isNew: false },
          { text: 'maine', isNew: true, stageStart: 7.68 }
        ]
      },
      {
        id: 's2-maine-nochi',
        start: 8.28,
        end: 8.78,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'deewangi ki', isNew: false },
          { text: 'hadd', isNew: false },
          {
            words: [
              { text: 'maine ', isNew: false },
              { text: 'nochi', isNew: true, stageStart: 8.28 }
            ]
          }
        ]
      },
      {
        id: 's2-o',
        start: 8.78,
        end: 10.5,
        x: 52,
        y: 156,
        fontSize: 27,
        lines: [
          { text: 'o', isNew: true, stageStart: 8.78 }
        ]
      }
    ];

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <g id="lyric-content-group" style="pointer-events: none;">
        <!-- Delicate handwritten typography matching reference (warm off-white, light weight, no heavy glow) -->
        <g id="lyric-lines-container"></g>
      </g>
    `;

    this.contentGroup = this.group.querySelector('#lyric-content-group');
    this.linesContainer = this.group.querySelector('#lyric-lines-container');
    this.currentStageId = null;
  }

  /**
   * Updates lyric presentation based on time
   * @param {number} time Current timestamp in seconds
   */
  update(time) {
    if (!this.contentGroup || !this.linesContainer) return;

    // =========================================================
    // 1. SCENE 1 (1.45s to 4.47s): "so how's life / without me"
    // =========================================================
    if (time >= 1.45 && time < 4.47) {
      this.contentGroup.style.display = 'block';

      let opacity = 1.0;
      if (time < 1.70) {
        opacity = (time - 1.45) / 0.25;
      } else {
        opacity = 1.0;
      }

      this.contentGroup.setAttribute('opacity', opacity.toFixed(3));
      this.contentGroup.setAttribute('transform', 'translate(470, 220)');

      if (this.currentStageId !== 'scene1') {
        this.currentStageId = 'scene1';
        this.linesContainer.innerHTML = `
          <text fill="#FFF8F0" 
                font-family="'Caveat', cursive, sans-serif" 
                font-weight="400" 
                font-size="22" 
                letter-spacing="0.5px"
                style="text-shadow: 0 1px 2px rgba(80, 50, 60, 0.2);">
            <tspan x="0" y="0">so how's life</tspan>
            <tspan x="1" y="27">without me</tspan>
          </text>
        `;
      }
      return;
    }

    // =========================================================
    // 2. SCENE 2 (~4.47s to ~8.95s): Progressive Word Reveal
    // =========================================================
    const s2Stage = this.scene2Stages.find(s => time >= s.start && time < s.end);

    if (s2Stage) {
      this.contentGroup.style.display = 'block';
      this.contentGroup.setAttribute('opacity', '1');
      this.contentGroup.setAttribute('transform', `translate(${s2Stage.x}, ${s2Stage.y})`);

      // Compute progressive reveal timing and subtle horizontal settling
      const lineHeight = 35;
      let html = '';

      s2Stage.lines.forEach((lineObj, idx) => {
        const yPos = idx * lineHeight;

        if (lineObj.words) {
          // Line has multiple words with individual progressive timing
          let wordHtml = '';
          lineObj.words.forEach(w => {
            if (w.isNew) {
              const elapsed = Math.max(0, time - w.stageStart);
              const ramp = Math.min(1.0, elapsed / 0.09); // 90ms soft opacity ramp
              const settleX = (1.0 - ramp) * -3; // 3px settling drift
              wordHtml += `<tspan dx="${settleX.toFixed(1)}" opacity="${ramp.toFixed(3)}">${w.text}</tspan>`;
            } else {
              wordHtml += `<tspan opacity="1.0">${w.text}</tspan>`;
            }
          });

          html += `
            <text x="0" y="${yPos}" 
                  fill="#FFFDF8" 
                  font-family="'Caveat', cursive, sans-serif" 
                  font-weight="400" 
                  font-size="${s2Stage.fontSize}" 
                  letter-spacing="0.4px"
                  style="text-shadow: 0 1px 3px rgba(50, 25, 35, 0.45);">
              ${wordHtml}
            </text>
          `;
        } else {
          // Single text string on this line
          let lineOpacity = 1.0;
          let settleX = 0;
          if (lineObj.isNew) {
            const elapsed = Math.max(0, time - lineObj.stageStart);
            lineOpacity = Math.min(1.0, elapsed / 0.09);
            settleX = (1.0 - lineOpacity) * -3;
          }

          html += `
            <text x="${settleX.toFixed(1)}" y="${yPos}" 
                  fill="#FFFDF8" 
                  opacity="${lineOpacity.toFixed(3)}"
                  font-family="'Caveat', cursive, sans-serif" 
                  font-weight="400" 
                  font-size="${s2Stage.fontSize}" 
                  letter-spacing="0.4px"
                  style="text-shadow: 0 1px 3px rgba(50, 25, 35, 0.45);">
              ${lineObj.text}
            </text>
          `;
        }
      });

      this.linesContainer.innerHTML = html;
      this.currentStageId = s2Stage.id;
      return;
    }

    // =========================================================
    // 3. OUTSIDE SCENE 1 & SCENE 2
    // =========================================================
    this.contentGroup.style.display = 'none';
    this.currentStageId = null;
  }
}
