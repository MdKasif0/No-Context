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
        <pattern id="foliage-stipple-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
          <rect width="10" height="10" fill="#6A5364" />
          <circle cx="2" cy="2" r="1.1" fill="#846C7E" />
          <circle cx="7" cy="3" r="1.0" fill="#523E4D" />
          <circle cx="8" cy="7" r="1.2" fill="#8E7688" />
          <circle cx="3" cy="8" r="1.0" fill="#4B3746" />
          <circle cx="5" cy="5" r="1.3" fill="#967E90" />
        </pattern>

        <linearGradient id="foliage-tree-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7C6577" />
          <stop offset="50%" stop-color="#654E60" />
          <stop offset="100%" stop-color="#4A3644" />
        </linearGradient>
      </defs>

      <!-- LEFT PAINTERLY ANIME TREE -->
      <g id="tree-left-group" filter="url(#ink-wobble-filter)">
        <!-- Slender Branches rising behind car -->
        <g id="tree-left-branches" stroke="#463442" stroke-linecap="round" fill="none">
          <!-- Main winding trunk -->
          <path d="M-15,480 C2,410 10,340 12,270 C14,200 20,150 24,70" stroke-width="3.5" />
          <path d="M11,290 C26,260 52,245 74,220" stroke-width="2.2" />
          <path d="M12,210 C32,180 58,165 80,140" stroke-width="2.0" />
          <path d="M16,140 C34,115 58,100 78,80" stroke-width="1.6" />
          <!-- Twigs -->
          <path d="M48,245 C62,235 76,232 88,225" stroke-width="1.2" />
          <path d="M52,170 C68,160 82,158 92,150" stroke-width="1.2" />
          <path d="M55,105 C70,95 84,92 94,84" stroke-width="1.1" />
        </g>

        <!-- Leafy Clusters Canopy (Organic scalloped shapes, airy clusters) -->
        <g id="tree-left-canopy">
          <!-- Cluster 1: Topmost canopy (y: 30 - 130) -->
          <path d="M-20,60 
                   C-10,40 15,35 35,48 
                   C55,42 75,55 82,75 
                   C88,95 78,115 65,125 
                   C48,135 25,130 10,122 
                   C-5,128 -18,115 -20,95 Z" 
                fill="url(#foliage-tree-grad)" />

          <!-- Cluster 2: Upper bough (y: 110 - 210) -->
          <path d="M-20,135 
                   C-5,120 20,115 45,128 
                   C68,122 92,138 96,162 
                   C98,185 82,205 62,210 
                   C40,215 15,208 0,195 
                   C-12,200 -20,185 -20,165 Z" 
                fill="url(#foliage-tree-grad)" />

          <!-- Cluster 3: Mid bough (y: 190 - 300) -->
          <path d="M-15,215 
                   C5,200 35,198 60,212 
                   C85,210 106,230 108,255 
                   C108,280 90,300 68,302 
                   C45,304 22,295 5,280 
                   C-10,285 -18,265 -15,240 Z" 
                fill="url(#foliage-tree-grad)" />

          <!-- Cluster 4: Lower bough (y: 280 - 390) -->
          <path d="M-15,305 
                   C5,290 32,292 52,305 
                   C75,305 92,325 90,350 
                   C88,375 70,392 48,390 
                   C28,388 8,378 -5,362 
                   C-15,365 -18,345 -15,325 Z" 
                fill="url(#foliage-tree-grad)" />

          <!-- Stipple overlay for textured leaf flecks -->
          <g opacity="0.45" mix-blend-mode="multiply">
            <path d="M-20,60 C-10,40 15,35 35,48 C55,42 75,55 82,75 C88,95 78,115 65,125 C48,135 25,130 10,122 C-5,128 -18,115 -20,95 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-20,135 C-5,120 20,115 45,128 C68,122 92,138 96,162 C98,185 82,205 62,210 C40,215 15,208 0,195 C-12,200 -20,185 -20,165 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-15,215 C5,200 35,198 60,212 C85,210 106,230 108,255 C108,280 90,300 68,302 C45,304 22,295 5,280 C-10,285 -18,265 -15,240 Z" fill="url(#foliage-stipple-pattern)" />
            <path d="M-15,305 C5,290 32,292 52,305 C75,305 92,325 90,350 C88,375 70,392 48,390 C28,388 8,378 -5,362 C-15,365 -18,345 -15,325 Z" fill="url(#foliage-stipple-pattern)" />
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
