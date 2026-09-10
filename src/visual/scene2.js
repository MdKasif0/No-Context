/**
 * Scene 2 Vector Layer (~4.47s to ~8.95s)
 * High-fidelity close portrait of the male character and recomposed sunset environment.
 * 
 * Features:
 * - Center-right close-up male portrait with upturned gaze, tousled pointed hair locks,
 *   cream collar shirt, tailored dark plum blazer with hand in pocket, dark trousers.
 * - Recomposed peach sunset sky with drifting layered pink clouds.
 * - Distant apartment buildings on lower-left/lower-middle with glowing amber windows.
 * - Horizontal rooftop railing crossing bottom behind the character.
 * - Blooming dark purple tree silhouette entering from lower-right.
 * - Living illustration animation: breathing cycle, micro head tilt transition,
 *   breeze-displaced hair locks, subtle jacket fabric flutter, and micro-blink.
 */

export class Scene2Layer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-scene2';
    // Initially hidden until 4.47s hard cut
    this.group.style.display = 'none';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Recomposed Peach Sunset Sky Gradient -->
        <linearGradient id="scene2-sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F7966F" />
          <stop offset="35%" stop-color="#FAA277" />
          <stop offset="65%" stop-color="#FDB283" />
          <stop offset="90%" stop-color="#FEC696" />
          <stop offset="100%" stop-color="#FEDCB0" />
        </linearGradient>

        <!-- Soft Cloud Gradients -->
        <linearGradient id="scene2-cloud-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E89684" stop-opacity="0.35" />
          <stop offset="50%" stop-color="#DF8776" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#EAA190" stop-opacity="0.3" />
        </linearGradient>

        <linearGradient id="scene2-cloud-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EAA08F" stop-opacity="0.4" />
          <stop offset="50%" stop-color="#E48E7C" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#F0B0A0" stop-opacity="0.35" />
        </linearGradient>

        <!-- Anime Skin Gradient for Close-up Portrait -->
        <linearGradient id="scene2-skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF5EE" />
          <stop offset="60%" stop-color="#FEE8D8" />
          <stop offset="100%" stop-color="#F9CEB8" />
        </linearGradient>

        <!-- Cheek Blush Soft Gradient -->
        <radialGradient id="scene2-blush-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FF9D85" stop-opacity="0.75" />
          <stop offset="60%" stop-color="#FFAE99" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#FEE8D8" stop-opacity="0" />
        </radialGradient>

        <!-- Dark Muted Plum/Brown Suit Fabric -->
        <linearGradient id="scene2-suit-fabric" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#55444E" />
          <stop offset="45%" stop-color="#473842" />
          <stop offset="100%" stop-color="#362933" />
        </linearGradient>

        <!-- Dark Plum Trousers -->
        <linearGradient id="scene2-trousers-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3D3039" />
          <stop offset="100%" stop-color="#281D25" />
        </linearGradient>

        <!-- Cream / White Shirt Fabric -->
        <linearGradient id="scene2-shirt-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCF8F2" />
          <stop offset="65%" stop-color="#F4ECE0" />
          <stop offset="100%" stop-color="#E4D7C7" />
        </linearGradient>

        <!-- Window Glow -->
        <filter id="scene2-window-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- ==================================================== -->
      <!-- 1. SUNSET SKY & LAYERED PINK CLOUDS                  -->
      <!-- ==================================================== -->
      <g id="scene2-sky-group">
        <rect width="720" height="720" fill="url(#scene2-sky-gradient)" />

        <!-- Layered irregular pink cloud bands drifting horizontally across sky -->
        <g id="scene2-clouds" filter="url(#watercolor-paper-filter)">
          <!-- Cloud 1 (High sky) -->
          <path id="scene2-cloud-1" 
                d="M-30,115 C90,85 240,110 380,95 C520,80 640,105 760,90 C660,135 480,120 340,130 C180,140 60,125 -30,115 Z" 
                fill="url(#scene2-cloud-grad-1)" />

          <!-- Cloud 2 (Mid-high sky) -->
          <path id="scene2-cloud-2" 
                d="M-50,225 C110,195 280,215 440,200 C600,185 680,220 770,205 C680,250 510,235 360,250 C210,265 80,240 -50,225 Z" 
                fill="url(#scene2-cloud-grad-2)" />

          <!-- Cloud 3 (Mid-low horizon bank) -->
          <path id="scene2-cloud-3" 
                d="M-30,360 C150,335 340,350 520,335 C660,320 720,345 760,340 C670,390 490,375 320,385 C160,395 50,380 -30,360 Z" 
                fill="url(#scene2-cloud-grad-1)" />

          <!-- Cloud 4 (Lower soft warm band) -->
          <path id="scene2-cloud-4" 
                d="M-20,440 C140,415 310,430 480,415 C620,400 700,425 760,420 C660,465 470,455 310,465 C150,475 60,460 -20,440 Z" 
                fill="url(#scene2-cloud-grad-2)" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 2. DISTANT CITYSCAPE & GLOWING WINDOWS (Lower-Left)  -->
      <!-- ==================================================== -->
      <g id="scene2-cityscape" filter="url(#ink-wobble-filter)">
        <!-- Far Left Stepped Apartment Tower (x: -10 to 65, y: 420 to 720) -->
        <g id="s2-bldg-1">
          <!-- Main Tower Body -->
          <path d="M-10,430 L55,430 L55,720 L-10,720 Z" 
                fill="#967E8F" stroke="#483645" stroke-width="1.8" />
          <!-- Rooftop elevator box -->
          <path d="M0,414 L38,414 L38,430 L0,430 Z" 
                fill="#8A7283" stroke="#483645" stroke-width="1.6" />
          <!-- Architectural shadow on right edge -->
          <path d="M45,430 L55,430 L55,720 L45,720 Z" fill="#7C6575" opacity="0.6" />

          <!-- Glowing Yellow Windows in Vertical Columns -->
          <g filter="url(#scene2-window-glow)" fill="#FFDF8C" stroke="#E5B852" stroke-width="0.5">
            <!-- Column 1 -->
            <rect x="6" y="455" width="7" height="15" rx="1" />
            <rect x="6" y="488" width="7" height="15" rx="1" />
            <rect x="6" y="522" width="7" height="15" rx="1" />
            <rect x="6" y="556" width="7" height="15" rx="1" />
            <rect x="6" y="590" width="7" height="15" rx="1" />
            <rect x="6" y="624" width="7" height="15" rx="1" />
            <!-- Column 2 -->
            <rect x="25" y="455" width="7" height="15" rx="1" />
            <rect x="25" y="488" width="7" height="15" rx="1" />
            <rect x="25" y="522" width="7" height="15" rx="1" />
            <rect x="25" y="556" width="7" height="15" rx="1" />
            <rect x="25" y="590" width="7" height="15" rx="1" />
            <rect x="25" y="624" width="7" height="15" rx="1" />
          </g>
        </g>

        <!-- Adjacent Mid-Low Building (x: 55 to 118, y: 580 to 720) -->
        <g id="s2-bldg-2">
          <path d="M55,582 L118,582 L118,720 L55,720 Z" 
                fill="#8C7485" stroke="#483645" stroke-width="1.8" />
          <path d="M55,582 L118,582 L118,590 L55,590 Z" fill="#755E6F" />
        </g>

        <!-- Tall Center-Left Apartment Tower with Glowing Windows (x: 155 to 285, y: 440 to 720) -->
        <g id="s2-bldg-3">
          <!-- Rooftop water tank structure -->
          <rect x="180" y="420" width="34" height="22" rx="1" fill="#7A6473" stroke="#483645" stroke-width="1.5" />
          <line x1="197" y1="412" x2="197" y2="420" stroke="#483645" stroke-width="1.5" />

          <!-- Main Building Body -->
          <path d="M155,442 L285,442 L285,720 L155,720 Z" 
                fill="#947B8C" stroke="#483645" stroke-width="2.0" />
          
          <!-- Shadow side pane on right -->
          <path d="M268,442 L285,442 L285,720 L268,720 Z" fill="#796272" opacity="0.65" />
          <!-- Vertical panel lines -->
          <line x1="210" y1="442" x2="210" y2="720" stroke="#483645" stroke-width="0.8" opacity="0.4" />

          <!-- Lit Glowing Windows Matching Reference (frame_06.jpg) -->
          <g filter="url(#scene2-window-glow)" fill="#FFDF8C" stroke="#E5B852" stroke-width="0.5">
            <!-- Window Column 1 -->
            <rect x="175" y="475" width="8" height="16" rx="1" />
            <rect x="175" y="515" width="8" height="16" rx="1" />
            <rect x="175" y="555" width="8" height="16" rx="1" />
            <rect x="175" y="595" width="8" height="16" rx="1" />
            <rect x="175" y="635" width="8" height="16" rx="1" />
            
            <!-- Window Column 2 -->
            <rect x="202" y="475" width="8" height="16" rx="1" />
            <rect x="202" y="515" width="8" height="16" rx="1" />
            <rect x="202" y="555" width="8" height="16" rx="1" />
            <rect x="202" y="595" width="8" height="16" rx="1" />
            <rect x="202" y="635" width="8" height="16" rx="1" />

            <!-- Window Column 3 -->
            <rect x="238" y="500" width="8" height="16" rx="1" />
            <rect x="238" y="540" width="8" height="16" rx="1" />
            <rect x="238" y="580" width="8" height="16" rx="1" />
            <rect x="238" y="620" width="8" height="16" rx="1" />
          </g>
        </g>

        <!-- Lower building blocks behind character (x: 285 to 370, y: 550 to 720) -->
        <g id="s2-bldg-4">
          <path d="M285,550 L365,550 L365,720 L285,720 Z" 
                fill="#887080" stroke="#483645" stroke-width="1.8" />
          <!-- Windows -->
          <g filter="url(#scene2-window-glow)" fill="#FEDB85" opacity="0.85">
            <rect x="300" y="575" width="7" height="14" rx="1" />
            <rect x="300" y="610" width="7" height="14" rx="1" />
            <rect x="325" y="575" width="7" height="14" rx="1" />
            <rect x="325" y="610" width="7" height="14" rx="1" />
          </g>
        </g>

        <!-- Distant Right Building behind character (x: 485 to 565, y: 620 to 720) -->
        <g id="s2-bldg-5">
          <path d="M485,622 L565,622 L565,720 L485,720 Z" 
                fill="#7E6877" stroke="#483645" stroke-width="1.8" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 3. LOWER-RIGHT BLOOMING TREE SILHOUETTE              -->
      <!-- ==================================================== -->
      <g id="scene2-tree" filter="url(#ink-wobble-filter)">
        <!-- Beautiful clustered blooming purple tree entering from lower right (x: 580 to 720, y: 460 to 720) -->
        <g id="scene2-tree-foliage">
          <!-- Back deeper shadow layer -->
          <path d="M585,720 
                   C580,680 595,650 615,630 
                   C605,615 608,590 625,575 
                   C615,555 628,530 650,515 
                   C642,495 655,475 675,465 
                   C695,455 715,465 725,485 
                   L725,720 Z" 
                fill="#543E51" />

          <!-- Main Foliage Mass with Scalloped Anime Leaves -->
          <path d="M590,720 
                   C595,690 608,665 628,655 
                   C618,635 630,605 648,595 
                   C638,575 650,545 672,535 
                   C660,515 675,485 700,475 
                   C718,468 732,482 740,505 
                   L740,720 Z" 
                fill="#6A5167" stroke="#3D293B" stroke-width="1.6" />

          <!-- Intricate decorative stippled leaf lobes matching reference -->
          <circle cx="700" cy="478" r="10" fill="#755C72" />
          <circle cx="688" cy="492" r="12" fill="#6A5167" />
          <circle cx="712" cy="495" r="13" fill="#785F75" />
          <circle cx="670" cy="515" r="11" fill="#6A5167" />
          <circle cx="685" cy="530" r="14" fill="#755C72" />
          <circle cx="715" cy="528" r="16" fill="#6A5167" />
          <circle cx="642" cy="565" r="12" fill="#755C72" />
          <circle cx="660" cy="580" r="16" fill="#6A5167" />
          <circle cx="690" cy="570" r="17" fill="#7C6379" />
          <circle cx="720" cy="565" r="18" fill="#6A5167" />
          <circle cx="625" cy="615" r="13" fill="#6A5167" />
          <circle cx="650" cy="630" r="17" fill="#785F75" />
          <circle cx="680" cy="625" r="19" fill="#6A5167" />
          <circle cx="715" cy="620" r="20" fill="#755C72" />
          <circle cx="605" cy="670" r="14" fill="#6A5167" />
          <circle cx="635" cy="680" r="18" fill="#785F75" />
          <circle cx="670" cy="675" r="21" fill="#6A5167" />
          <circle cx="705" cy="670" r="22" fill="#755C72" />

          <!-- Edge leaf flicks -->
          <path d="M690,470 C680,460 670,472 675,482" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M660,505 C650,495 640,510 648,520" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M635,550 C625,540 615,555 622,568" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M610,600 C600,590 590,608 600,620" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M592,648 C582,640 575,658 588,668" fill="none" stroke="#3D293B" stroke-width="1.5" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 4. ROOFTOP RAILING (Crossing Bottom Behind Character)-->
      <!-- ==================================================== -->
      <g id="scene2-railing" filter="url(#ink-wobble-filter)">
        <!-- Horizontal Top Rail (y: 671 to 685) -->
        <path d="M-20,671 L740,671 L740,685 L-20,685 Z" 
              fill="#52424E" stroke="#372834" stroke-width="1.8" />
        <!-- Top rail highlight -->
        <line x1="-20" y1="673" x2="740" y2="673" stroke="#7A6876" stroke-width="1.2" />

        <!-- Horizontal Lower Rail (y: 713 to 723) -->
        <path d="M-20,713 L740,713 L740,723 L-20,723 Z" 
              fill="#4A3B46" stroke="#372834" stroke-width="1.8" />

        <!-- Vertical Balusters / Pickets Spaced Along Width -->
        <g id="scene2-balusters" fill="#4C3C48" stroke="#372834" stroke-width="1.4">
          <rect x="15" y="685" width="8" height="35" rx="1" />
          <rect x="48" y="685" width="8" height="35" rx="1" />
          <rect x="82" y="685" width="8" height="35" rx="1" />
          <rect x="116" y="685" width="8" height="35" rx="1" />
          <rect x="150" y="685" width="8" height="35" rx="1" />
          <rect x="184" y="685" width="8" height="35" rx="1" />
          <rect x="218" y="685" width="8" height="35" rx="1" />
          <rect x="252" y="685" width="8" height="35" rx="1" />
          <rect x="286" y="685" width="8" height="35" rx="1" />
          <rect x="320" y="685" width="8" height="35" rx="1" />
          <rect x="354" y="685" width="8" height="35" rx="1" />
          <rect x="388" y="685" width="8" height="35" rx="1" />
          <rect x="422" y="685" width="8" height="35" rx="1" />
          <rect x="456" y="685" width="8" height="35" rx="1" />
          <rect x="490" y="685" width="8" height="35" rx="1" />
          <rect x="524" y="685" width="8" height="35" rx="1" />
          <rect x="558" y="685" width="8" height="35" rx="1" />
          <rect x="592" y="685" width="8" height="35" rx="1" />
          <rect x="626" y="685" width="8" height="35" rx="1" />
          <rect x="660" y="685" width="8" height="35" rx="1" />
          <rect x="694" y="685" width="8" height="35" rx="1" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 5. LARGE MALE CHARACTER PORTRAIT (Center-Right)     -->
      <!-- ==================================================== -->
      <g id="scene2-male-character" filter="url(#ink-wobble-filter)">
        
        <!-- Dark Trousers Extending Below Frame (y: 640 to 740) -->
        <g id="s2-char-trousers">
          <path d="M370,642 
                   L392,642 
                   C396,656 405,682 410,740 
                   L365,740 Z" 
                fill="url(#scene2-trousers-fabric)" stroke="#2C2028" stroke-width="2.2" />
          <path d="M392,642 
                   L485,642 
                   C520,680 540,710 550,740 
                   L410,740 
                   C405,682 396,656 392,642 Z" 
                fill="url(#scene2-trousers-fabric)" stroke="#2C2028" stroke-width="2.2" />
          <path d="M428,642 C430,670 435,705 440,740" fill="none" stroke="#261A23" stroke-width="1.6" />
        </g>

        <!-- Torso & Blazer Root Group for Living Breathing Cycle -->
        <g id="s2-char-torso-group">
          
          <!-- Back Neck / Under Collar -->
          <path d="M362,310 
                   C365,340 372,365 378,385 
                   L455,375 
                   C448,340 438,310 435,305 Z" 
                fill="url(#scene2-skin-grad)" stroke="#3E2E39" stroke-width="1.8" />

          <!-- Cream Shirt Undercoat Placket (Visible down center-left) -->
          <g id="s2-shirt-placket">
            <path d="M370,365 
                     L425,365 
                     L405,645 
                     L372,645 Z" 
                  fill="url(#scene2-shirt-fabric)" stroke="#43353F" stroke-width="1.6" />
            <path d="M395,385 C390,440 388,520 385,630" fill="none" stroke="#D3C5B5" stroke-width="1.5" />
          </g>

          <!-- White Spread Collar Wings (Open at throat in V) -->
          <g id="s2-shirt-collar">
            <!-- Left collar flap (viewer's left) -->
            <path d="M368,368 
                     L345,408 
                     L375,420 
                     L386,374 Z" 
                  fill="url(#scene2-shirt-fabric)" stroke="#362632" stroke-width="2.0" />
            <!-- Right collar flap (viewer's right) -->
            <path d="M395,374 
                     L436,412 
                     L455,386 
                     L430,362 Z" 
                  fill="url(#scene2-shirt-fabric)" stroke="#362632" stroke-width="2.0" />
            <!-- Throat shadow in V notch -->
            <path d="M386,374 L395,374 L390,392 Z" fill="#E8BFA8" />
          </g>

          <!-- Main Tailored Dark Plum Blazer / Jacket -->
          <g id="s2-jacket-group">
            
            <!-- Left coat body / integrated arm silhouette (viewer's left) -->
            <g id="s2-jacket-left-bulge">
              <path d="M345,408 
                       C320,445 285,490 278,540 
                       C270,590 285,630 328,655 
                       C348,666 375,662 388,642 
                       L368,408 Z" 
                    fill="url(#scene2-suit-fabric)" stroke="#32222E" stroke-width="2.4" />
              <path d="M338,425 C315,480 300,535 305,585 C310,615 325,640 350,652" 
                    fill="none" stroke="#2B1D28" stroke-width="1.8" opacity="0.6" />
            </g>

            <!-- Main Jacket Front & Right Sleeve Mass -->
            <g id="s2-jacket-main-body">
              <!-- Notch Lapel on viewer's right -->
              <path d="M430,362 
                       L475,415 
                       L450,425 
                       L485,485 
                       L415,585 
                       L390,374 Z" 
                    fill="#443540" stroke="#32222E" stroke-width="2.2" />

              <!-- Main Jacket Back & Right Shoulder (viewer's right) -->
              <path d="M430,362 
                       C470,368 515,385 538,418 
                       C552,438 548,485 540,540 
                       C532,590 522,630 505,655 
                       C492,672 475,678 450,668 
                       C435,662 420,652 405,642 
                       L430,362 Z" 
                    fill="url(#scene2-suit-fabric)" stroke="#32222E" stroke-width="2.4" />

              <!-- Right Arm & Sleeve Outer Contour -->
              <path d="M538,418 
                       C555,465 548,525 536,580 
                       C526,620 515,648 495,662 
                       L460,650 
                       C485,615 500,565 510,510 
                       C518,465 515,435 505,420 Z" 
                    fill="url(#scene2-suit-fabric)" stroke="#32222E" stroke-width="2.2" />

              <!-- Sleeve inner fold crease lines where elbow bends -->
              <path d="M485,485 C495,505 505,530 500,560" fill="none" stroke="#2E202B" stroke-width="1.8" />
              <path d="M470,515 C485,535 492,560 488,585" fill="none" stroke="#2E202B" stroke-width="1.6" />

              <!-- 4 Radiating Fabric Creases Spreading Across Waist towards Pocket -->
              <path id="s2-crease-1" d="M352,545 C380,560 415,578 448,590" fill="none" stroke="#2C1E29" stroke-width="1.8" />
              <path id="s2-crease-2" d="M346,580 C378,595 418,612 445,622" fill="none" stroke="#2C1E29" stroke-width="1.8" />
              <path id="s2-crease-3" d="M340,612 C370,626 405,640 435,648" fill="none" stroke="#2C1E29" stroke-width="1.7" />
              <path id="s2-crease-4" d="M332,638 C358,648 390,658 420,664" fill="none" stroke="#2C1E29" stroke-width="1.6" />

              <!-- Sleeve Cuff 3 Decorative Button Stitches -->
              <circle cx="488" cy="635" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />
              <circle cx="494" cy="643" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />
              <circle cx="500" cy="651" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />

              <!-- Hand Slipping into Pocket (Left hand / viewer's right) -->
              <g id="s2-hand-pocket">
                <path d="M418,642 L460,674" stroke="#241721" stroke-width="2.4" fill="none" />
                <path d="M422,642 
                         C428,648 438,658 448,668 
                         C442,674 435,672 426,662 
                         C420,654 416,648 418,642 Z" 
                      fill="url(#scene2-skin-grad)" stroke="#3E2E39" stroke-width="1.6" />
              </g>
            </g>
          </g>
        </g>

        <!-- ==================================================== -->
        <!-- HEAD & FACE GROUP (Tilted Upward, Gazing Screen-Left)-->
        <!-- ==================================================== -->
        <g id="s2-char-head-group">
          
          <!-- Head Base Skin Mass (Profile Facing Up-Left) -->
          <path id="s2-head-skin"
                d="M362,310 
                   C350,305 342,298 338,290 
                   C334,282 342,274 345,268 
                   C342,260 338,252 333,234 
                   C330,222 338,210 342,198 
                   C346,182 355,160 375,145 
                   C405,125 450,130 480,165 
                   C510,200 505,250 485,285 
                   C465,305 440,312 425,305 
                   C405,308 380,312 362,310 Z" 
                fill="url(#scene2-skin-grad)" stroke="#3E2E39" stroke-width="2.2" />

          <!-- Soft Warm Peach Cheek Blush (frame_06.jpg) -->
          <ellipse id="s2-cheek-blush" cx="378" cy="246" rx="22" ry="14" 
                   fill="url(#scene2-blush-grad)" opacity="0.65" />

          <!-- Tiny Dark Plum Eye (Gazing upward and screen-left) -->
          <g id="s2-eye-group">
            <ellipse id="s2-eye-pupil" cx="362" cy="227" rx="3.6" ry="6.5" 
                     transform="rotate(-18, 362, 227)" 
                     fill="#221720" stroke="#3E2E39" stroke-width="0.8" />
            <path d="M352,208 C358,202 368,202 374,206" fill="none" stroke="#332430" stroke-width="1.6" stroke-linecap="round" />
          </g>

          <!-- Nose Tip & Subtle Mouth Slit -->
          <path d="M344,272 C347,274 350,274 353,273" fill="none" stroke="#4A3845" stroke-width="1.5" stroke-linecap="round" />

          <!-- Stylized Anime Ear (x: 408 to 442, y: 248 to 295) -->
          <g id="s2-ear-group">
            <path d="M410,252 
                     C428,245 442,258 440,276 
                     C438,292 426,300 416,295 
                     C410,290 408,275 410,252 Z" 
                  fill="url(#scene2-skin-grad)" stroke="#3E2E39" stroke-width="2.0" />
            <path d="M422,260 C430,265 432,278 426,285" fill="none" stroke="#4D3B48" stroke-width="1.5" />
            <path d="M418,272 C424,275 425,282 420,286" fill="none" stroke="#4D3B48" stroke-width="1.2" />
          </g>

          <!-- ==================================================== -->
          <!-- TOUSLED ANIME HAIR WITH POINTED LOCKS & CROWN SPIKES -->
          <!-- ==================================================== -->
          <g id="s2-hair-group">
            
            <!-- Main Hair Base Silhouette -->
            <path d="M342,198 
                     C338,185 342,165 352,148 
                     C365,128 385,110 415,102 
                     C438,96 468,105 490,128 
                     C515,155 528,190 522,230 
                     C518,258 502,285 475,308 
                     C460,318 445,315 438,300 
                     C442,275 440,245 418,242 
                     C410,242 402,248 398,258 
                     C390,245 378,225 365,222 
                     C355,220 348,228 342,235 
                     C342,215 344,205 342,198 Z" 
                  fill="#453E4E" stroke="#302432" stroke-width="2.4" />

            <!-- Distinct Dynamic Crown Spikes (Top Crest of Hair) -->
            <g id="s2-crown-spikes">
              <path d="M375,120 C368,95 385,82 405,92 C395,105 390,118 388,128 Z" 
                    fill="#484152" stroke="#302432" stroke-width="2.0" />
              <path d="M415,102 C425,72 448,78 452,102 C440,112 432,120 428,130 Z" 
                    fill="#433C4C" stroke="#302432" stroke-width="2.0" />
              <path d="M472,118 C498,108 518,128 495,148 C488,140 480,132 472,128 Z" 
                    fill="#3F3847" stroke="#302432" stroke-width="2.0" />
              <path d="M512,168 C535,175 538,205 515,215 C512,200 512,185 508,175 Z" 
                    fill="#3E3746" stroke="#302432" stroke-width="2.0" />
            </g>

            <!-- Front Bangs & Forehead Locks Over Face -->
            <g id="s2-front-bangs">
              <path id="s2-forward-flick" 
                    d="M352,148 C330,140 322,158 335,172 C342,168 348,160 355,155 Z" 
                    fill="#4A4253" stroke="#302432" stroke-width="2.0" />
              <path d="M365,138 C358,165 352,192 360,205 C366,192 372,175 378,160 Z" 
                    fill="#463F50" stroke="#302432" stroke-width="2.0" />
              <path d="M385,142 C382,175 385,208 395,225 C398,205 402,185 405,165 Z" 
                    fill="#433C4D" stroke="#302432" stroke-width="2.0" />
              <path d="M405,235 C402,255 405,272 410,285 C414,272 416,258 415,245 Z" 
                    fill="#3E3747" stroke="#302432" stroke-width="1.8" />
            </g>

            <!-- Nape Locks at back of neck -->
            <path d="M465,290 C472,310 460,325 448,318 C455,308 458,298 460,292 Z" 
                  fill="#3A3342" stroke="#302432" stroke-width="1.8" />
          </g>
        </g>
      </g>
    `;

    // Cache animatable SVG DOM references
    this.torsoGroup = this.group.querySelector('#s2-char-torso-group');
    this.headGroup = this.group.querySelector('#s2-char-head-group');
    this.crownSpikes = this.group.querySelector('#s2-crown-spikes');
    this.forwardFlick = this.group.querySelector('#s2-forward-flick');
    this.jacketBulge = this.group.querySelector('#s2-jacket-left-bulge');
    this.handPocket = this.group.querySelector('#s2-hand-pocket');
    this.eyePupil = this.group.querySelector('#s2-eye-pupil');
    this.cheekBlush = this.group.querySelector('#s2-cheek-blush');
    this.cloud1 = this.group.querySelector('#scene2-cloud-1');
    this.cloud2 = this.group.querySelector('#scene2-cloud-2');
    this.cloud3 = this.group.querySelector('#scene2-cloud-3');
    this.cloud4 = this.group.querySelector('#scene2-cloud-4');
    this.cityscape = this.group.querySelector('#scene2-cityscape');
    this.railing = this.group.querySelector('#scene2-railing');
    this.tree = this.group.querySelector('#scene2-tree');
  }

  /**
   * Deterministic 30 FPS update for living illustration feel
   * @param {number} time Playback timestamp in seconds
   */
  update(time) {
    // Only active during Scene 2 range (~4.47s to ~8.95s)
    if (time < 4.47 || time >= 8.95) {
      this.group.style.display = 'none';
      return;
    }

    this.group.style.display = 'block';

    const s2Time = time - 4.47;

    // 1. Organic Breathing Cycle (nearly imperceptible)
    const breath = Math.sin(s2Time * 1.6);
    if (this.torsoGroup) {
      const breathScaleY = 1.0 + breath * 0.005;
      const breathTransY = -breath * 0.35;
      this.torsoGroup.setAttribute(
        'transform',
        `translate(0, ${breathTransY.toFixed(2)}) scale(1, ${breathScaleY.toFixed(4)})`
      );
    }

    // 2. Micro Head Movement
    // Between 4.47s and 6.2s: gazing upward at peach sky
    // Around ~6.2s - 7.5s: head smoothly lowers slightly (~2.5 deg) as gaze shifts slightly towards horizon
    if (this.headGroup) {
      let headPitch = 0;
      if (s2Time > 1.7) {
        const pitchProgress = Math.min(1.0, (s2Time - 1.7) / 1.4);
        const ease = pitchProgress * pitchProgress * (3 - 2 * pitchProgress);
        headPitch = ease * 2.8; // 0 to 2.8 deg downward tilt
      }
      // Breathing micro-oscillation of head
      const headBreath = Math.sin(s2Time * 1.6 + 0.3) * 0.45;
      const totalHeadRot = headPitch + headBreath;
      this.headGroup.setAttribute('transform', `rotate(${totalHeadRot.toFixed(2)}, 430, 310)`);
    }

    // 3. Hair Strands Catching Sunset Breeze
    if (this.crownSpikes) {
      const crownSway = Math.sin(s2Time * 2.6) * 1.5 + Math.cos(s2Time * 5.2) * 0.6;
      this.crownSpikes.setAttribute('transform', `rotate(${crownSway.toFixed(2)}, 430, 105)`);
    }

    if (this.forwardFlick) {
      const flickSway = Math.sin(s2Time * 3.1 + 0.4) * 1.8;
      this.forwardFlick.setAttribute('transform', `rotate(${flickSway.toFixed(2)}, 352, 148)`);
    }

    // 4. Subtle Jacket Fabric Flutter & Pocket Shift
    if (this.jacketBulge) {
      const jFlutter = Math.sin(s2Time * 2.1) * 0.6;
      this.jacketBulge.setAttribute('transform', `rotate(${jFlutter.toFixed(2)}, 330, 520)`);
    }

    if (this.handPocket) {
      const pShift = Math.sin(s2Time * 1.6) * 0.3;
      this.handPocket.setAttribute('transform', `translate(0, ${pShift.toFixed(2)})`);
    }

    // 5. Delicate Micro-Blink around ~5.9s and ~7.9s
    if (this.eyePupil) {
      let eyeScaleY = 1.0;
      if (time >= 5.85 && time <= 5.97) {
        const p = (time - 5.85) / 0.12;
        eyeScaleY = Math.abs(Math.sin(p * Math.PI - Math.PI / 2));
      } else if (time >= 7.85 && time <= 7.97) {
        const p = (time - 7.85) / 0.12;
        eyeScaleY = Math.abs(Math.sin(p * Math.PI - Math.PI / 2));
      }
      this.eyePupil.setAttribute(
        'transform',
        `translate(362, 227) rotate(-18) scale(1, ${Math.max(0.1, eyeScaleY).toFixed(3)}) translate(-362, -227)`
      );
    }

    // 6. Subtle Cheek Blush Warmth Breathing
    if (this.cheekBlush) {
      const blushOp = 0.65 + Math.sin(s2Time * 1.6) * 0.08;
      this.cheekBlush.setAttribute('opacity', blushOp.toFixed(3));
    }

    // 7. Slow Cloud Drift across sky
    if (this.cloud1) {
      const drift1 = (s2Time * 4.5) % 80;
      this.cloud1.setAttribute('transform', `translate(${drift1.toFixed(1)}, 0)`);
    }
    if (this.cloud2) {
      const drift2 = (s2Time * 3.2) % 80;
      this.cloud2.setAttribute('transform', `translate(${drift2.toFixed(1)}, 0)`);
    }
    if (this.cloud3) {
      const drift3 = (s2Time * 2.2) % 80;
      this.cloud3.setAttribute('transform', `translate(${drift3.toFixed(1)}, 0)`);
    }
    if (this.cloud4) {
      const drift4 = (s2Time * 1.5) % 80;
      this.cloud4.setAttribute('transform', `translate(${drift4.toFixed(1)}, 0)`);
    }
  }
}
