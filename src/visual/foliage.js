/**
 * Foliage Layer
 * Hand-crafted painterly anime tree silhouette matching reference frames.
 * Natural branching boughs, sky visibility, and soft stippled leaf clusters.
 */
export class FoliageLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-foliage';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Fine stipple leaf texture -->
        <pattern id="foliage-stipple-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="8" height="8" fill="#5F4A5B" />
          <circle cx="2" cy="2" r="0.9" fill="#7D6677" />
          <circle cx="6" cy="3" r="0.8" fill="#4B3746" />
          <circle cx="7" cy="6" r="1.0" fill="#887081" />
          <circle cx="3" cy="7" r="0.8" fill="#43323F" />
        </pattern>

        <linearGradient id="foliage-tree-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#765F71" />
          <stop offset="50%" stop-color="#5E4759" />
          <stop offset="100%" stop-color="#463442" />
        </linearGradient>
      </defs>

      <!-- LEFT PAINTERLY ANIME TREE -->
      <g id="tree-left-group" filter="url(#ink-wobble-filter)">
        <!-- Slender Branches rising behind car -->
        <g id="tree-left-branches" stroke="#3D2C39" stroke-linecap="round" fill="none">
          <!-- Main winding trunk -->
          <path d="M-15,480 C-5,410 4,340 8,265 C12,190 18,135 22,50" stroke-width="4.0" />
          <path d="M8,280 C24,250 48,235 68,210" stroke-width="2.5" />
          <path d="M10,195 C30,165 54,150 74,125" stroke-width="2.2" />
          <path d="M14,125 C32,100 55,85 72,65" stroke-width="1.8" />
          <!-- Twigs -->
          <path d="M44,235 C58,225 72,222 84,215" stroke-width="1.4" />
          <path d="M48,155 C64,145 78,142 88,135" stroke-width="1.3" />
          <path d="M50,90 C65,80 78,78 88,70" stroke-width="1.2" />
        </g>

        <!-- Leafy Clusters Canopy (Airy, organic, painterly silhouettes) -->
        <g id="tree-left-canopy">
          <!-- Cluster A: Upper crown (y: 35 - 120) -->
          <path d="M-25,50 
                   C-15,30 10,25 32,38 
                   C48,28 70,38 78,56 
                   C85,74 76,92 64,102 
                   C72,112 65,126 50,130 
                   C32,134 18,124 5,118 
                   C-10,122 -22,110 -25,90 Z" 
                fill="url(#foliage-tree-grad)" opacity="0.92" />

          <!-- Cluster B: Upper mid-bough (y: 105 - 195) -->
          <path d="M-25,120 
                   C-10,105 15,102 38,114 
                   C58,106 82,120 86,142 
                   C90,164 76,182 58,186 
                   C65,198 52,212 35,210 
                   C18,208 6,198 -8,190 
                   C-20,194 -25,178 -25,158 Z" 
                fill="url(#foliage-tree-grad)" opacity="0.92" />

          <!-- Cluster C: Mid-bough (y: 180 - 280) -->
          <path d="M-20,195 
                   C-2,180 25,178 48,192 
                   C70,186 92,204 94,228 
                   C95,252 78,270 58,272 
                   C64,284 50,298 32,295 
                   C14,292 2,282 -10,272 
                   C-22,276 -25,258 -20,232 Z" 
                fill="url(#foliage-tree-grad)" opacity="0.92" />

          <!-- Cluster D: Lower bough (y: 265 - 370) -->
          <path d="M-20,285 
                   C-2,270 22,272 42,284 
                   C62,280 82,298 80,322 
                   C78,344 62,360 42,358 
                   C48,370 34,382 18,380 
                   C2,376 -8,364 -18,350 
                   C-25,352 -25,334 -20,312 Z" 
                fill="url(#foliage-tree-grad)" opacity="0.90" />

          <!-- Stipple overlay for fine organic leaf flecks -->
          <g opacity="0.38" mix-blend-mode="multiply">
            <path d="M-25,50 C-15,30 10,25 32,38 C48,28 70,38 78,56 C85,74 76,92 64,102 C72,112 65,126 50,130 C32,134 18,124 5,118 C-10,122 -22,110 -25,90 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-25,120 C-10,105 15,102 38,114 C58,106 82,120 86,142 C90,164 76,182 58,186 C65,198 52,212 35,210 C18,208 6,198 -8,190 C-20,194 -25,178 -25,158 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-20,195 C-2,180 25,178 48,192 C70,186 92,204 94,228 C95,252 78,270 58,272 C64,284 50,298 32,295 C14,292 2,282 -10,272 C-22,276 -25,258 -20,232 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-20,285 C-2,270 22,272 42,284 C62,280 82,298 80,322 C78,344 62,360 42,358 C48,370 34,382 18,380 C2,376 -8,364 -18,350 C-25,352 -25,334 -20,312 Z" fill="url(#foliage-stipple-pattern)" />
          </g>

          <!-- Organic anime leaf stipple specks around edges -->
          <g id="tree-left-fine-leaves"></g>
        </g>
      </g>

      <!-- LOWER RIGHT TREE (Peeking behind railing) -->
      <g id="tree-right-group" filter="url(#ink-wobble-filter)">
        <g id="tree-right-canopy">
          <path d="M620,720 
                   C615,660 625,620 648,590 
                   C672,560 710,545 745,555 
                   C770,565 780,600 780,720 Z" 
                fill="url(#foliage-tree-grad)" />

          <path d="M620,720 C615,660 625,620 648,590 C672,560 710,545 745,555 C770,565 780,600 780,720 Z" 
                fill="url(#foliage-stipple-pattern)" opacity="0.45" />

          <g id="tree-right-fine-leaves"></g>
        </g>
      </g>
    `;

    this.renderFineLeaves();
    this.treeLeftCanopy = this.group.querySelector('#tree-left-canopy');
    this.treeRightCanopy = this.group.querySelector('#tree-right-canopy');
  }

  renderFineLeaves() {
    const leftContainer = this.group.querySelector('#tree-left-fine-leaves');
    const rightContainer = this.group.querySelector('#tree-right-fine-leaves');

    const leftPoints = [
      [55, 52, 4], [72, 65, 3.5], [82, 85, 4], [78, 110, 3.5],
      [68, 135, 4], [88, 150, 4.5], [98, 172, 4], [82, 195, 3.5],
      [78, 220, 4], [102, 240, 4.5], [110, 262, 4], [88, 285, 3.5],
      [68, 315, 3.5], [88, 335, 4], [92, 355, 3.5], [68, 375, 4]
    ];

    let leftHtml = '';
    leftPoints.forEach(([x, y, r]) => {
      leftHtml += `<circle cx="${x}" cy="${y}" r="${r}" fill="#786071" opacity="0.85" />`;
      leftHtml += `<circle cx="${x + 2}" cy="${y + 1}" r="${r * 0.7}" fill="#543E4E" opacity="0.85" />`;
    });
    leftContainer.innerHTML = leftHtml;

    const rightPoints = [
      [640, 605, 4.5], [665, 578, 5], [695, 555, 5], [725, 550, 5],
      [650, 635, 4.5], [680, 600, 4.5], [710, 580, 4.5],
      [630, 655, 4], [625, 685, 4.5]
    ];

    let rightHtml = '';
    rightPoints.forEach(([x, y, r]) => {
      rightHtml += `<circle cx="${x}" cy="${y}" r="${r}" fill="#765F70" opacity="0.85" />`;
      rightHtml += `<circle cx="${x + 2}" cy="${y + 1}" r="${r * 0.7}" fill="#503B4A" opacity="0.85" />`;
    });
    rightContainer.innerHTML = rightHtml;
  }

  update(time) {
    if (this.treeLeftCanopy) {
      const swayAngle = Math.sin(time * 1.3) * 0.8;
      this.treeLeftCanopy.setAttribute('transform', `rotate(${swayAngle}, 20, 260)`);
    }
    if (this.treeRightCanopy) {
      const swayAngle = Math.sin(time * 1.6 + 0.6) * 0.7;
      this.treeRightCanopy.setAttribute('transform', `rotate(${swayAngle}, 670, 650)`);
    }
  }
}
