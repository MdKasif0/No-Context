/**
 * Sky & Cloud Layers
 * Procedural sunset gradient mesh and undulating organic cloud bands with soft drift.
 */
export class SkyAndCloudsLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-sky-clouds';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <!-- Base Sunset Sky Gradient -->
      <defs>
        <linearGradient id="sunset-sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#EAA189" />
          <stop offset="28%" stop-color="#F2AF83" />
          <stop offset="55%" stop-color="#F7BA82" />
          <stop offset="78%" stop-color="#F8C694" />
          <stop offset="100%" stop-color="#FCE1BE" />
        </linearGradient>

        <linearGradient id="cloud-band-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EAA387" stop-opacity="0.35" />
          <stop offset="45%" stop-color="#F4B898" stop-opacity="0.45" />
          <stop offset="100%" stop-color="#EAA387" stop-opacity="0.30" />
        </linearGradient>

        <linearGradient id="cloud-band-grad-2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#E89B84" stop-opacity="0.35" />
          <stop offset="100%" stop-color="#F7BA82" stop-opacity="0.15" />
        </linearGradient>

        <linearGradient id="cloud-highlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCE1C2" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#F7BA82" stop-opacity="0.0" />
        </linearGradient>
      </defs>

      <!-- Background Sky Rectangle (Oversized to cover any camera zoom / pan) -->
      <rect x="-800" y="-800" width="2400" height="2400" fill="url(#sunset-sky-gradient)" />

      <!-- High Atmospheric Cloud Layer (Drifting slowly) -->
      <g id="cloud-group-high" filter="url(#watercolor-filter)">
        <!-- Wispy high altitude feather clouds -->
        <path d="M-400,65 C-150,45 100,75 350,55 C600,35 850,60 1100,50 C1250,46 1350,58 1500,52 C1350,70 1050,75 800,85 C550,95 200,80 -400,85 Z" 
              fill="#ECA289" opacity="0.25" />

        <path d="M-350,110 C-100,95 180,120 460,105 C740,90 980,100 1300,95 C1150,125 860,135 550,130 C260,125 50,135 -350,130 Z" 
              fill="#E99781" opacity="0.20" />
      </g>

      <!-- Midground Horizontal Cloud Strata Bands -->
      <g id="cloud-group-mid" filter="url(#watercolor-filter)">
        <!-- Band 1: Upper mid stratum -->
        <path d="M-400,175 C-180,160 80,185 320,170 C560,155 790,178 1010,165 C1180,158 1320,175 1450,168 C1350,205 1100,215 800,208 C500,202 240,218 0,210 C-200,202 -320,215 -400,195 Z" 
              fill="url(#cloud-band-grad-1)" />

        <path d="M-200,182 C80,172 350,188 600,176 C850,166 1100,185 1350,176 C1150,195 850,202 550,196 C300,190 50,202 -200,192 Z" 
              fill="url(#cloud-highlight)" />

        <!-- Band 2: Middle thick warm cloud bank -->
        <path d="M-400,240 C-150,225 150,245 420,232 C680,220 940,242 1180,230 C1320,222 1420,238 1550,232 C1420,270 1150,285 850,275 C550,265 250,282 -50,274 C-220,266 -320,278 -400,258 Z" 
              fill="#EAA085" opacity="0.28" />

        <!-- Band 3: Lower horizon cloud layer -->
        <path d="M-400,330 C-120,318 180,335 480,324 C750,312 1020,330 1350,322 C1200,360 900,370 600,362 C320,355 50,368 -400,358 Z" 
              fill="#F2AF88" opacity="0.32" />

        <path d="M-100,336 C180,328 450,342 750,332 C1000,324 1250,338 1450,332 C1250,352 950,358 650,352 C400,346 150,356 -100,348 Z" 
              fill="#F8C89A" opacity="0.22" />
      </g>
    `;

    this.cloudHigh = this.group.querySelector('#cloud-group-high');
    this.cloudMid = this.group.querySelector('#cloud-group-mid');
  }

  /**
   * Subtle procedural cloud drift over time
   */
  update(time) {
    if (this.cloudHigh) {
      const highDrift = (time * 1.8) % 120;
      this.cloudHigh.setAttribute('transform', `translate(${-highDrift}, 0)`);
    }
    if (this.cloudMid) {
      const midDrift = (time * 2.6) % 150;
      this.cloudMid.setAttribute('transform', `translate(${-midDrift}, 0)`);
    }
  }
}
