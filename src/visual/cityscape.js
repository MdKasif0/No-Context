/**
 * Cityscape Layer
 * Silhouetted urban apartment towers, rooftop utility structures, and glowing warm windows.
 */
export class CityscapeLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-cityscape';
    parentGroup.appendChild(this.group);

    this.windows = [];
    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Building facade gradients -->
        <linearGradient id="bldg-far-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#8F7888" />
          <stop offset="100%" stop-color="#6F5767" />
        </linearGradient>

        <linearGradient id="bldg-mid-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7A6372" />
          <stop offset="100%" stop-color="#5A4452" />
        </linearGradient>

        <linearGradient id="bldg-fore-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6D5564" />
          <stop offset="100%" stop-color="#4F3A47" />
        </linearGradient>
      </defs>

      <!-- Far building silhouettes -->
      <g id="city-far" opacity="0.7">
        <!-- Building Far 1 (left) -->
        <rect x="220" y="520" width="85" height="200" fill="url(#bldg-far-grad)" />
        <rect x="240" y="505" width="45" height="15" fill="#7E6877" />

        <!-- Building Far 2 (center-left) -->
        <rect x="340" y="490" width="65" height="230" fill="url(#bldg-far-grad)" />
        <line x1="372" y1="490" x2="372" y2="470" stroke="#65495A" stroke-width="1.5" />

        <!-- Building Far 3 (center-right) -->
        <rect x="495" y="530" width="80" height="190" fill="url(#bldg-far-grad)" />

        <!-- Building Far 4 (far right) -->
        <rect x="670" y="510" width="60" height="210" fill="url(#bldg-far-grad)" />
      </g>

      <!-- Midground Buildings -->
      <g id="city-mid">
        <!-- Tower A (x: 235 - 325) -->
        <rect x="235" y="515" width="92" height="205" fill="url(#bldg-mid-grad)" stroke="#553F4E" stroke-width="1.2" />
        <!-- Elevator housing & water tower -->
        <rect x="255" y="498" width="40" height="17" fill="#6A5362" stroke="#553F4E" stroke-width="1" />
        <rect x="302" y="502" width="16" height="13" fill="#644E5D" />

        <!-- Tower B - Center prominent apartment block (x: 370 - 465) -->
        <rect x="375" y="465" width="90" height="255" fill="url(#bldg-mid-grad)" stroke="#553F4E" stroke-width="1.2" />
        <rect x="390" y="450" width="55" height="15" fill="#6B5463" stroke="#553F4E" stroke-width="1" />
        <line x1="418" y1="450" x2="418" y2="425" stroke="#553F4E" stroke-width="1.8" />
        <circle cx="418" cy="425" r="2.5" fill="#EFA98A" />

        <!-- Tower C - Right side behind boy (x: 520 - 610) -->
        <rect x="525" y="480" width="82" height="240" fill="url(#bldg-mid-grad)" stroke="#553F4E" stroke-width="1.2" />
        <rect x="540" y="468" width="42" height="12" fill="#685261" />

        <!-- Tower D - Far right lower block (x: 610 - 720) -->
        <rect x="615" y="540" width="115" height="180" fill="url(#bldg-mid-grad)" stroke="#553F4E" stroke-width="1.2" />
      </g>

      <!-- Foreground Building structures directly behind railing -->
      <g id="city-fore">
        <!-- Left building flank (x: 180 - 245) -->
        <rect x="180" y="550" width="60" height="170" fill="url(#bldg-fore-grad)" stroke="#4A3644" stroke-width="1.2" />
        <!-- Mid-right low roof extension (x: 460 - 528) -->
        <rect x="465" y="565" width="65" height="155" fill="url(#bldg-fore-grad)" stroke="#4A3644" stroke-width="1.2" />
      </g>

      <!-- Warm glowing apartment windows group -->
      <g id="city-windows"></g>
    `;

    this.renderWindows();
  }

  /**
   * Procedural window generator placing warm rectangular glows with organic variety
   */
  renderWindows() {
    const winGroup = this.group.querySelector('#city-windows');
    const windowConfigs = [
      // Tower A windows (x: 235 - 325, y: 530 - 640)
      { bX: 245, bY: 535, cols: 4, rows: 6, dx: 18, dy: 16, w: 7, h: 10 },
      // Tower B center windows (x: 375 - 465, y: 480 - 650)
      { bX: 388, bY: 485, cols: 4, rows: 9, dx: 18, dy: 16, w: 7, h: 10 },
      // Tower C right windows (x: 525 - 610, y: 500 - 650)
      { bX: 538, bY: 502, cols: 3, rows: 8, dx: 20, dy: 16, w: 7, h: 10 },
      // Far right windows
      { bX: 630, bY: 555, cols: 4, rows: 5, dx: 20, dy: 16, w: 7, h: 10 }
    ];

    let html = '';
    const seed = 42;

    windowConfigs.forEach((cfg, bIdx) => {
      for (let r = 0; r < cfg.rows; r++) {
        for (let c = 0; c < cfg.cols; c++) {
          const wx = cfg.bX + c * cfg.dx;
          const wy = cfg.bY + r * cfg.dy;

          // Pseudorandom lit state
          const pseudoVal = Math.sin(bIdx * 100 + r * 17 + c * 31 + seed);
          const isLit = pseudoVal > -0.15; // ~58% windows lit

          if (isLit) {
            const baseOpacity = 0.55 + Math.abs(pseudoVal) * 0.42;
            const glowColor = pseudoVal > 0.4 ? '#FFE694' : '#F6CB68';

            html += `
              <rect class="city-win" x="${wx}" y="${wy}" width="${cfg.w}" height="${cfg.h}" 
                    rx="1" ry="1" fill="${glowColor}" opacity="${baseOpacity.toFixed(2)}"
                    data-base-opacity="${baseOpacity.toFixed(2)}" data-freq="${(1.5 + pseudoVal).toFixed(2)}" />
            `;
          } else {
            // Unlit window slit
            html += `
              <rect x="${wx}" y="${wy}" width="${cfg.w}" height="${cfg.h}" 
                    rx="1" ry="1" fill="#4B3845" opacity="0.8" />
            `;
          }
        }
      }
    });

    winGroup.innerHTML = html;
    this.windows = Array.from(winGroup.querySelectorAll('.city-win'));
  }

  /**
   * Subtle window breathing / sunset luminance pulse
   */
  update(time) {
    // Micro flicker/shimmer on selected windows
    for (let i = 0; i < this.windows.length; i += 4) {
      const win = this.windows[i];
      const base = parseFloat(win.getAttribute('data-base-opacity') || '0.7');
      const freq = parseFloat(win.getAttribute('data-freq') || '1.5');
      const shimmer = Math.sin(time * freq + i) * 0.08;
      win.setAttribute('opacity', Math.max(0.2, Math.min(1.0, base + shimmer)).toFixed(2));
    }
  }
}
