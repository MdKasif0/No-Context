/**
 * Railing & Car Layer
 * Rooftop safety railing and vintage cream automobile roof where the girl sits.
 */
export class RailingCarLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-railing-car';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Vintage car paint gradient -->
        <linearGradient id="car-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#E5D6C5" />
          <stop offset="40%" stop-color="#DAC7B3" />
          <stop offset="100%" stop-color="#C2AD97" />
        </linearGradient>

        <linearGradient id="car-roof-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ECE0D2" />
          <stop offset="60%" stop-color="#DAC6B1" />
          <stop offset="100%" stop-color="#C8B39D" />
        </linearGradient>

        <!-- Car rear window gradient -->
        <linearGradient id="car-window-glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#554452" />
          <stop offset="65%" stop-color="#463643" />
          <stop offset="100%" stop-color="#372935" />
        </linearGradient>

        <!-- Railing metal gradient -->
        <linearGradient id="railing-metal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#675060" />
          <stop offset="40%" stop-color="#543E4E" />
          <stop offset="100%" stop-color="#3F2D3A" />
        </linearGradient>
      </defs>

      <!-- ROOFTOP RAILING (Spanning from behind car x: 230 to far right edge) -->
      <g id="rooftop-railing" filter="url(#ink-wobble-filter)">
        <!-- Horizontal Top Handrail -->
        <rect x="235" y="605" width="700" height="9" rx="3" ry="3" fill="url(#railing-metal-grad)" stroke="#493543" stroke-width="1.2" />
        <!-- Handrail Top Specular Highlight -->
        <line x1="236" y1="606" x2="935" y2="606" stroke="#846B7D" stroke-width="1.1" opacity="0.6" />

        <!-- Second Horizontal Sub-rail -->
        <rect x="235" y="622" width="700" height="6" rx="2" ry="2" fill="url(#railing-metal-grad)" stroke="#493543" stroke-width="1.1" />

        <!-- Bottom Ground Curb / Base Railing Rim -->
        <rect x="-200" y="710" width="1200" height="200" fill="#3B2A36" stroke="#493543" stroke-width="1.2" />

        <!-- Main Vertical Support Posts with Finials -->
        <!-- Post 1 (near car x: 260) -->
        <rect x="256" y="602" width="10" height="118" fill="url(#railing-metal-grad)" stroke="#45313F" stroke-width="1.2" />
        <rect x="254" y="600" width="14" height="6" rx="2" ry="2" fill="#6A5262" />

        <!-- Post 2 (mid left x: 380) -->
        <rect x="376" y="602" width="10" height="118" fill="url(#railing-metal-grad)" stroke="#45313F" stroke-width="1.2" />
        <rect x="374" y="600" width="14" height="6" rx="2" ry="2" fill="#6A5262" />

        <!-- Post 3 (behind boy x: 575) -->
        <rect x="572" y="602" width="10" height="118" fill="url(#railing-metal-grad)" stroke="#45313F" stroke-width="1.2" />
        <rect x="570" y="600" width="14" height="6" rx="2" ry="2" fill="#6A5262" />

        <!-- Post 4 (far right x: 695) -->
        <rect x="692" y="602" width="10" height="118" fill="url(#railing-metal-grad)" stroke="#45313F" stroke-width="1.2" />
        <rect x="690" y="600" width="14" height="6" rx="2" ry="2" fill="#6A5262" />

        <!-- Post 5 (extended off-screen right x: 815) -->
        <rect x="812" y="602" width="10" height="118" fill="url(#railing-metal-grad)" stroke="#45313F" stroke-width="1.2" />
        <rect x="810" y="600" width="14" height="6" rx="2" ry="2" fill="#6A5262" />

        <!-- Balusters (Vertical pickets) -->
        <g id="railing-balusters" stroke="#483442" stroke-width="2.2" stroke-linecap="round"></g>
      </g>

      <!-- VINTAGE CAR (Left foreground x: -30 to 275, y: 430 to 720) -->
      <g id="vintage-car" filter="url(#ink-wobble-filter)">
        <!-- Car main body silhouette -->
        <path d="M-30,432 
                 C40,428 140,427 210,434 
                 C240,437 255,448 262,475 
                 C268,505 272,550 274,620 
                 C275,655 272,695 270,725 
                 L-30,725 Z" 
              fill="url(#car-body-grad)" stroke="#553F4F" stroke-width="2.2" />

        <!-- Car Roof Panel (Top platform where girl sits) -->
        <path d="M-25,432 
                 C35,429 135,428 205,435 
                 C230,437 245,444 250,455 
                 C240,458 135,455 35,456 
                 C-5,456 -25,455 -25,455 Z" 
              fill="url(#car-roof-surface-grad)" stroke="#553F4F" stroke-width="1.8" />

        <!-- Contact shadow under girl on car roof -->
        <ellipse cx="145" cy="442" rx="75" ry="7" fill="#8B7363" opacity="0.45" />

        <!-- Car Rear Window Cutout Frame -->
        <path d="M-20,465 
                 C30,463 125,464 185,470 
                 C205,472 215,485 212,525 
                 C208,565 204,595 195,618 
                 C190,625 180,626 150,627 
                 C70,628 -5,627 -20,627 Z" 
              fill="url(#car-window-glass-grad)" stroke="#4A3744" stroke-width="2.4" />

        <!-- Interior Car Seats / Headrests visible inside -->
        <rect x="25" y="505" width="48" height="52" rx="10" ry="10" fill="#3D2E3A" stroke="#2D1F2A" stroke-width="1.5" />
        <rect x="95" y="510" width="48" height="48" rx="10" ry="10" fill="#3D2E3A" stroke="#2D1F2A" stroke-width="1.5" />
        <!-- Rear seat shelf -->
        <path d="M-15,570 C40,568 120,570 195,578 L190,620 C100,622 0,620 -15,620 Z" fill="#32242F" />

        <!-- Window glass diagonal sunset reflections -->
        <path d="M20,466 L-15,530 L-15,500 L5,466 Z" fill="#8D7588" opacity="0.35" />
        <path d="M90,467 L15,595 L35,596 L112,467 Z" fill="#8D7588" opacity="0.25" />
        <path d="M165,472 L85,626 L105,626 L182,475 Z" fill="#8D7588" opacity="0.2" />

        <!-- Car body seams & crease lines -->
        <!-- Side beltline crease -->
        <path d="M-20,638 C70,637 170,642 268,655" fill="none" stroke="#685161" stroke-width="1.6" />
        <path d="M-20,640 C70,639 170,644 268,657" fill="none" stroke="#F1E4D6" stroke-width="0.8" opacity="0.5" />

        <!-- Vertical body panel seam -->
        <path d="M190,642 C186,665 182,695 180,725" fill="none" stroke="#685161" stroke-width="1.4" />

        <!-- Oval Side Mirror (x: 232 - 262, y: 575 - 612) -->
        <g id="car-side-mirror">
          <!-- Mirror mount arm -->
          <path d="M225,590 L242,593" stroke="#483644" stroke-width="4" stroke-linecap="round" />
          <!-- Oval mirror casing -->
          <ellipse cx="250" cy="593" rx="15" ry="18" fill="#D3BEA8" stroke="#4F3B4A" stroke-width="2.2" />
          <!-- Inner mirror glass bevel -->
          <ellipse cx="249" cy="593" rx="11" ry="14" fill="#634F5E" />
          <path d="M244,583 C252,586 256,595 254,603" fill="none" stroke="#B8A2B4" stroke-width="1.5" opacity="0.7" />
        </g>
      </g>
    `;

    this.renderBalusters();
  }

  renderBalusters() {
    const balusterGroup = this.group.querySelector('#railing-balusters');
    let html = '';
    // Generate pickets between x: 270 and 920, skipping posts
    for (let x = 278; x <= 920; x += 19) {
      // Skip near posts
      if (Math.abs(x - 380) < 14 || Math.abs(x - 575) < 14 || Math.abs(x - 695) < 14 || Math.abs(x - 815) < 14) continue;
      
      // Slight hand-drawn wobble per picket
      const wobble = (Math.sin(x * 12) * 0.6).toFixed(1);
      html += `<line x1="${x}" y1="626" x2="${(x + parseFloat(wobble)).toFixed(1)}" y2="710" />`;
    }
    balusterGroup.innerHTML = html;
  }
}
