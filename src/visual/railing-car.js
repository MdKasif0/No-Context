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
        <!-- Authentic warm beige-taupe vehicle paint gradient matching frame_01.jpg -->
        <linearGradient id="car-body-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#C2B2A6" />
          <stop offset="45%" stop-color="#AFA094" />
          <stop offset="100%" stop-color="#938478" />
        </linearGradient>

        <linearGradient id="car-roof-surface-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#C8B8AC" />
          <stop offset="60%" stop-color="#B8A89C" />
          <stop offset="100%" stop-color="#9E8E82" />
        </linearGradient>

        <!-- Car rear window soft muted purple tinted glass gradient -->
        <linearGradient id="car-window-glass-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#8A7A88" />
          <stop offset="60%" stop-color="#6E5E6C" />
          <stop offset="100%" stop-color="#4C3E4A" />
        </linearGradient>

        <!-- Railing metal gradient -->
        <linearGradient id="railing-metal-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#6A5361" />
          <stop offset="40%" stop-color="#553E4D" />
          <stop offset="100%" stop-color="#3E2B37" />
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

        <!-- Balusters (Vertical pickets) -->
        <g id="railing-balusters" stroke="#483442" stroke-width="2.2" stroke-linecap="round"></g>
      </g>

      <!-- VINTAGE CAR (Left foreground x: -30 to 260, y: 432 to 720 matching girl_body.jpg) -->
      <g id="vintage-car" filter="url(#ink-wobble-filter)">
        <!-- Car main body silhouette -->
        <path d="M-30,432 
                 C35,431 125,430 195,435 
                 C220,438 238,446 244,475 
                 C248,505 252,550 254,615 
                 C255,650 254,690 252,725 
                 L-30,725 Z" 
              fill="url(#car-body-grad)" stroke="#3E302B" stroke-width="2.2" />

        <!-- Car Roof Panel (Top platform where girl sits) -->
        <path d="M-25,432 
                 C35,431 125,430 195,435 
                 C218,438 232,444 238,452 
                 C225,456 125,454 35,455 
                 C-5,455 -25,454 -25,454 Z" 
              fill="url(#car-roof-surface-grad)" stroke="#3E302B" stroke-width="1.8" />

        <!-- Contact shadow under girl on car roof -->
        <ellipse cx="115" cy="437" rx="70" ry="5.5" fill="#3A2C28" opacity="0.45" />

        <!-- Car Rear Window Cutout Frame (Rounded trapezoid matching girl_body.jpg) -->
        <path d="M-20,466 
                 C25,464 115,465 175,472 
                 C195,475 204,488 200,525 
                 C196,562 192,592 184,614 
                 C178,620 168,622 140,622 
                 C65,623 -5,622 -20,622 Z" 
              fill="url(#car-window-glass-grad)" stroke="#382A26" stroke-width="2.4" />

        <!-- Interior Car Seats / Headrests visible inside -->
        <rect x="20" y="500" width="50" height="52" rx="12" ry="12" fill="#584856" stroke="#3C2C3A" stroke-width="1.5" />
        <rect x="90" y="504" width="50" height="48" rx="12" ry="12" fill="#584856" stroke="#3C2C3A" stroke-width="1.5" />
        <!-- Rear shelf -->
        <path d="M-15,565 C35,563 115,565 185,572 L180,615 C95,617 0,615 -15,615 Z" fill="#423440" />

        <!-- Window glass diagonal sunset reflections -->
        <path d="M20,468 L-15,530 L-15,500 L5,468 Z" fill="#FFF2E5" opacity="0.20" />
        <path d="M85,469 L15,595 L35,596 L105,469 Z" fill="#FFF2E5" opacity="0.16" />
        <path d="M155,473 L85,620 L105,620 L172,476 Z" fill="#FFF2E5" opacity="0.14" />

        <!-- Car body seams & vertical creases -->
        <path d="M-20,638 C65,637 155,641 245,652" fill="none" stroke="#5E4E46" stroke-width="1.6" />
        <path d="M-20,640 C65,639 155,643 245,654" fill="none" stroke="#DDD0C4" stroke-width="0.8" opacity="0.5" />

        <path d="M175,640 C172,662 168,692 166,725" fill="none" stroke="#5E4E46" stroke-width="1.4" />

        <!-- Stylized hand-drawn script badge on car flank matching frame_01.jpg -->
        <text x="195" y="688" font-family="'Caveat', cursive" font-size="14" fill="#3E302B" opacity="0.75">toots</text>

        <!-- Oval Side Mirror attached on right flank (matching girl_body.jpg: x: 220 - 275, y: 610 - 655) -->
        <g id="car-side-mirror">
          <!-- Mirror mount arm -->
          <path d="M205,628 L225,632" stroke="#3A2C26" stroke-width="4.5" stroke-linecap="round" />
          <!-- Rounded pill/oval mirror casing -->
          <rect x="220" y="614" width="54" height="38" rx="18" ry="18" fill="#C2B2A6" stroke="#3A2C26" stroke-width="2.2" />
          <!-- Inner mirror face with warm highlight -->
          <rect x="224" y="618" width="46" height="30" rx="14" ry="14" fill="#DDD0C4" />
          <path d="M232,624 C242,622 254,625 260,632" fill="none" stroke="#FFF7EE" stroke-width="2.0" stroke-linecap="round" />
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
