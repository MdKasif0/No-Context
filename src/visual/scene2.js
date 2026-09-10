/**
 * Scene 2 Vector Layer (~4.47s to ~8.95s)
 * 1:1 Procedural Vector Recreation of the Male Character Close-up Portrait & Sunset.
 * 
 * Accurately models every anatomical and artistic detail from the reference:
 * - Hand-drawn anime head tilted upward gazing screen-left, sleek tousled mop with crown spikes.
 * - Forehead bangs with distinct forward flick lock, small upturned nose, subtle mouth slit,
 *   warm peach cheek blush, stylized anime ear, and proportional neck.
 * - Spread collar cream shirt open at throat with central placket.
 * - Tailored dark plum blazer with notch lapels, natural front coat drape, right sleeve with cuff buttons,
 *   4 radiating waist fold lines, and hand slipping into trouser pocket.
 * - Recomposed peach sunset sky, layered pink clouds, distant apartment towers with glowing amber windows,
 *   blooming purple tree silhouette on lower-right, and horizontal rooftop railing behind the character.
 * - Living illustration animation: breathing cycle, micro head movement transition, breeze hair sway,
 *   subtle jacket fabric flutter, and micro-blink.
 */

export class Scene2Layer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-scene2';
    this.group.style.display = 'none';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Sunset Peach Sky Gradient -->
        <linearGradient id="s2-sky-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#F5946C" />
          <stop offset="30%" stop-color="#FAA277" />
          <stop offset="60%" stop-color="#FDB485" />
          <stop offset="85%" stop-color="#FEC697" />
          <stop offset="100%" stop-color="#FEDCB2" />
        </linearGradient>

        <!-- Soft Cloud Gradients -->
        <linearGradient id="s2-cloud-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#E89684" stop-opacity="0.32" />
          <stop offset="50%" stop-color="#DE8675" stop-opacity="0.5" />
          <stop offset="100%" stop-color="#EAA190" stop-opacity="0.28" />
        </linearGradient>

        <linearGradient id="s2-cloud-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#EAA08F" stop-opacity="0.38" />
          <stop offset="50%" stop-color="#E28D7B" stop-opacity="0.52" />
          <stop offset="100%" stop-color="#F0B0A0" stop-opacity="0.32" />
        </linearGradient>

        <!-- Anime Skin Gradient -->
        <linearGradient id="s2-skin-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF6F0" />
          <stop offset="60%" stop-color="#FEE9DB" />
          <stop offset="100%" stop-color="#F8CFBA" />
        </linearGradient>

        <!-- Soft Peach Cheek Blush -->
        <radialGradient id="s2-blush-grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#FF9C84" stop-opacity="0.75" />
          <stop offset="55%" stop-color="#FFAE9A" stop-opacity="0.4" />
          <stop offset="100%" stop-color="#FEE8D8" stop-opacity="0" />
        </radialGradient>

        <!-- Dark Muted Plum/Brown Suit Fabric -->
        <linearGradient id="s2-suit-fabric" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#55444E" />
          <stop offset="50%" stop-color="#473842" />
          <stop offset="100%" stop-color="#362933" />
        </linearGradient>

        <!-- Dark Plum Trousers -->
        <linearGradient id="s2-trousers-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#3D3039" />
          <stop offset="100%" stop-color="#281D25" />
        </linearGradient>

        <!-- Cream / White Shirt Fabric -->
        <linearGradient id="s2-shirt-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCF9F4" />
          <stop offset="65%" stop-color="#F5EEE2" />
          <stop offset="100%" stop-color="#E5D9C9" />
        </linearGradient>

        <!-- Glowing Window Filter -->
        <filter id="s2-window-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- ==================================================== -->
      <!-- 1. RECOMPOSED SUNSET SKY & LAYERED PINK CLOUDS       -->
      <!-- ==================================================== -->
      <g id="s2-sky-layer">
        <rect width="720" height="720" fill="url(#s2-sky-gradient)" />

        <g id="s2-clouds-group" filter="url(#watercolor-paper-filter)">
          <path id="s2-cloud-1" 
                d="M-30,105 C90,75 240,100 380,85 C520,70 640,95 760,80 C660,125 480,110 340,120 C180,130 60,115 -30,105 Z" 
                fill="url(#s2-cloud-grad-1)" />

          <path id="s2-cloud-2" 
                d="M-50,215 C110,185 280,205 440,190 C600,175 680,210 770,195 C680,240 510,225 360,240 C210,255 80,230 -50,215 Z" 
                fill="url(#s2-cloud-grad-2)" />

          <path id="s2-cloud-3" 
                d="M-30,350 C150,325 340,340 520,325 C660,310 720,335 760,330 C670,380 490,365 320,375 C160,385 50,370 -30,350 Z" 
                fill="url(#s2-cloud-grad-1)" />

          <path id="s2-cloud-4" 
                d="M-20,430 C140,405 310,420 480,405 C620,390 700,415 760,410 C660,455 470,445 310,455 C150,465 60,450 -20,430 Z" 
                fill="url(#s2-cloud-grad-2)" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 2. DISTANT CITYSCAPE & GLOWING WINDOWS (Lower-Left)  -->
      <!-- ==================================================== -->
      <g id="s2-cityscape" filter="url(#ink-wobble-filter)">
        <!-- Far Left Stepped Apartment Tower (x: -10 to 65, y: 420 to 720) -->
        <g id="s2-bldg-far-left">
          <path d="M-10,430 L55,430 L55,720 L-10,720 Z" 
                fill="#967E8F" stroke="#483645" stroke-width="1.8" />
          <path d="M0,414 L38,414 L38,430 L0,430 Z" 
                fill="#8A7283" stroke="#483645" stroke-width="1.6" />
          <path d="M45,430 L55,430 L55,720 L45,720 Z" fill="#7C6575" opacity="0.6" />

          <!-- Lit Glowing Windows -->
          <g filter="url(#s2-window-glow)" fill="#FFDF8C" stroke="#E5B852" stroke-width="0.5">
            <rect x="6" y="455" width="7" height="15" rx="1" />
            <rect x="6" y="488" width="7" height="15" rx="1" />
            <rect x="6" y="522" width="7" height="15" rx="1" />
            <rect x="6" y="556" width="7" height="15" rx="1" />
            <rect x="6" y="590" width="7" height="15" rx="1" />
            <rect x="6" y="624" width="7" height="15" rx="1" />
            
            <rect x="25" y="455" width="7" height="15" rx="1" />
            <rect x="25" y="488" width="7" height="15" rx="1" />
            <rect x="25" y="522" width="7" height="15" rx="1" />
            <rect x="25" y="556" width="7" height="15" rx="1" />
            <rect x="25" y="590" width="7" height="15" rx="1" />
            <rect x="25" y="624" width="7" height="15" rx="1" />
          </g>
        </g>

        <!-- Mid-Low Building (x: 55 to 118, y: 580 to 720) -->
        <g id="s2-bldg-mid-left">
          <path d="M55,582 L118,582 L118,720 L55,720 Z" 
                fill="#8C7485" stroke="#483645" stroke-width="1.8" />
          <path d="M55,582 L118,582 L118,590 L55,590 Z" fill="#755E6F" />
        </g>

        <!-- Tall Center-Left Tower with Windows (x: 155 to 285, y: 440 to 720) -->
        <g id="s2-bldg-tower">
          <rect x="180" y="420" width="34" height="22" rx="1" fill="#7A6473" stroke="#483645" stroke-width="1.5" />
          <line x1="197" y1="412" x2="197" y2="420" stroke="#483645" stroke-width="1.5" />

          <path d="M155,442 L285,442 L285,720 L155,720 Z" 
                fill="#947B8C" stroke="#483645" stroke-width="2.0" />
          <path d="M268,442 L285,442 L285,720 L268,720 Z" fill="#796272" opacity="0.65" />
          <line x1="210" y1="442" x2="210" y2="720" stroke="#483645" stroke-width="0.8" opacity="0.4" />

          <g filter="url(#s2-window-glow)" fill="#FFDF8C" stroke="#E5B852" stroke-width="0.5">
            <rect x="175" y="475" width="8" height="16" rx="1" />
            <rect x="175" y="515" width="8" height="16" rx="1" />
            <rect x="175" y="555" width="8" height="16" rx="1" />
            <rect x="175" y="595" width="8" height="16" rx="1" />
            <rect x="175" y="635" width="8" height="16" rx="1" />
            
            <rect x="202" y="475" width="8" height="16" rx="1" />
            <rect x="202" y="515" width="8" height="16" rx="1" />
            <rect x="202" y="555" width="8" height="16" rx="1" />
            <rect x="202" y="595" width="8" height="16" rx="1" />
            <rect x="202" y="635" width="8" height="16" rx="1" />

            <rect x="238" y="500" width="8" height="16" rx="1" />
            <rect x="238" y="540" width="8" height="16" rx="1" />
            <rect x="238" y="580" width="8" height="16" rx="1" />
            <rect x="238" y="620" width="8" height="16" rx="1" />
          </g>
        </g>

        <!-- Lower blocks behind boy (x: 285 to 370, y: 550 to 720) -->
        <g id="s2-bldg-behind">
          <path d="M285,550 L365,550 L365,720 L285,720 Z" 
                fill="#887080" stroke="#483645" stroke-width="1.8" />
          <g filter="url(#s2-window-glow)" fill="#FEDB85" opacity="0.85">
            <rect x="300" y="575" width="7" height="14" rx="1" />
            <rect x="300" y="610" width="7" height="14" rx="1" />
            <rect x="325" y="575" width="7" height="14" rx="1" />
            <rect x="325" y="610" width="7" height="14" rx="1" />
          </g>
        </g>

        <!-- Distant Right Building (x: 485 to 565, y: 620 to 720) -->
        <g id="s2-bldg-right">
          <path d="M485,622 L565,622 L565,720 L485,720 Z" 
                fill="#7E6877" stroke="#483645" stroke-width="1.8" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 3. LOWER-RIGHT BLOOMING TREE SILHOUETTE              -->
      <!-- ==================================================== -->
      <g id="s2-tree" filter="url(#ink-wobble-filter)">
        <g id="s2-tree-foliage">
          <path d="M585,720 
                   C580,680 595,650 615,630 
                   C605,615 608,590 625,575 
                   C615,555 628,530 650,515 
                   C642,495 655,475 675,465 
                   C695,455 715,465 725,485 
                   L725,720 Z" 
                fill="#543E51" />

          <path d="M590,720 
                   C595,690 608,665 628,655 
                   C618,635 630,605 648,595 
                   C638,575 650,545 672,535 
                   C660,515 675,485 700,475 
                   C718,468 732,482 740,505 
                   L740,720 Z" 
                fill="#6A5167" stroke="#3D293B" stroke-width="1.6" />

          <!-- Intricate decorative stippled leaf lobes -->
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

          <path d="M690,470 C680,460 670,472 675,482" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M660,505 C650,495 640,510 648,520" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M635,550 C625,540 615,555 622,568" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M610,600 C600,590 590,608 600,620" fill="none" stroke="#3D293B" stroke-width="1.5" />
          <path d="M592,648 C582,640 575,658 588,668" fill="none" stroke="#3D293B" stroke-width="1.5" />
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 4. ROOFTOP RAILING (Passing Behind Character at Base)-->
      <!-- ==================================================== -->
      <g id="s2-railing" filter="url(#ink-wobble-filter)">
        <!-- Upper Rail (y: 671 to 685) -->
        <path d="M-20,671 L740,671 L740,685 L-20,685 Z" 
              fill="#52424E" stroke="#372834" stroke-width="1.8" />
        <line x1="-20" y1="673" x2="740" y2="673" stroke="#7A6876" stroke-width="1.2" />

        <!-- Lower Rail (y: 713 to 723) -->
        <path d="M-20,713 L740,713 L740,723 L-20,723 Z" 
              fill="#4A3B46" stroke="#372834" stroke-width="1.8" />

        <!-- Vertical Balusters -->
        <g id="s2-balusters" fill="#4C3C48" stroke="#372834" stroke-width="1.4">
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
      <!-- 5. MALE CHARACTER PORTRAIT (True 1:1 Vector Art)    -->
      <!-- ==================================================== -->
      <g id="s2-male-character" filter="url(#ink-wobble-filter)">
        
        <!-- Dark Plum Trousers Overlapping Railing (y: 630 to 740) -->
        <g id="s2-char-trousers">
          <path d="M365,635 
                   L395,635 
                   C398,655 405,685 410,740 
                   L360,740 Z" 
                fill="url(#s2-trousers-fabric)" stroke="#2B1F27" stroke-width="2.2" />
          <path d="M395,635 
                   L485,635 
                   C520,675 540,705 550,740 
                   L410,740 
                   C405,685 398,655 395,635 Z" 
                fill="url(#s2-trousers-fabric)" stroke="#2B1F27" stroke-width="2.2" />
          <path d="M428,635 C430,665 435,700 440,740" fill="none" stroke="#231820" stroke-width="1.6" />
        </g>

        <!-- Torso & Blazer (Root Group for Breathing Animation) -->
        <g id="s2-char-torso-group">
          
          <!-- Back Neck / Upper Chest Skin Under Collar -->
          <path d="M348,252 
                   C346,275 352,295 355,305 
                   L445,305 
                   C438,280 430,265 422,260 Z" 
                fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="1.8" />

          <!-- Cream Shirt Undercoat Placket (Visible down center of open coat) -->
          <g id="s2-shirt-placket">
            <path d="M362,310 
                     L425,310 
                     L405,640 
                     L372,640 Z" 
                  fill="url(#s2-shirt-fabric)" stroke="#43353F" stroke-width="1.6" />
            <path d="M388,325 C385,410 382,510 380,635" fill="none" stroke="#D5C7B7" stroke-width="1.5" />
          </g>

          <!-- White Spread Collar Wings (Open at throat in V) -->
          <g id="s2-shirt-collar">
            <!-- Left collar wing -->
            <path d="M355,296 
                     L332,335 
                     L362,348 
                     L375,306 Z" 
                  fill="url(#s2-shirt-fabric)" stroke="#342330" stroke-width="2.0" />
            <!-- Right collar wing -->
            <path d="M384,306 
                     L422,345 
                     L445,322 
                     L418,296 Z" 
                  fill="url(#s2-shirt-fabric)" stroke="#342330" stroke-width="2.0" />
            <!-- V opening shadow -->
            <path d="M375,306 L384,306 L380,322 Z" fill="#E5B59E" />
          </g>

          <!-- Tailored Dark Plum Blazer / Coat -->
          <g id="s2-jacket-group">
            
            <!-- Left coat body / folded arm drape silhouette (viewer's left) -->
            <g id="s2-jacket-left-bulge">
              <!-- Smooth natural contour sloping from shoulder down to hip (frame_06.jpg) -->
              <path d="M332,335 
                       C310,380 275,445 258,505 
                       C246,550 255,595 285,632 
                       C305,650 338,655 365,642 
                       L360,345 Z" 
                    fill="url(#s2-suit-fabric)" stroke="#32222E" stroke-width="2.4" />
              <!-- Inner shadow along coat fold -->
              <path d="M320,365 C295,430 278,500 282,560 C288,600 305,630 335,642" 
                    fill="none" stroke="#2B1D28" stroke-width="1.8" opacity="0.65" />
            </g>

            <!-- Main Jacket Body, Notch Lapels & Right Sleeve -->
            <g id="s2-jacket-main-body">
              <!-- Right Notch Lapel -->
              <path d="M418,296 
                       L465,355 
                       L442,365 
                       L475,425 
                       L408,540 
                       L384,306 Z" 
                    fill="#443540" stroke="#32222E" stroke-width="2.2" />

              <!-- Main Jacket Back & Right Shoulder -->
              <path d="M418,296 
                       C455,302 505,325 530,358 
                       C545,380 545,430 538,490 
                       C530,550 518,600 500,635 
                       C485,655 465,662 440,652 
                       C425,646 410,638 395,630 
                       L418,296 Z" 
                    fill="url(#s2-suit-fabric)" stroke="#32222E" stroke-width="2.4" />

              <!-- Right Arm & Sleeve Outer Contour -->
              <path d="M530,358 
                       C550,410 545,475 532,535 
                       C522,580 508,618 485,636 
                       L450,622 
                       C478,585 492,530 502,470 
                       C508,420 505,385 495,365 Z" 
                    fill="url(#s2-suit-fabric)" stroke="#32222E" stroke-width="2.2" />

              <!-- Inner elbow crease lines -->
              <path d="M475,445 C485,470 495,498 490,528" fill="none" stroke="#2E202B" stroke-width="1.8" />
              <path d="M460,475 C475,498 482,525 478,552" fill="none" stroke="#2E202B" stroke-width="1.6" />

              <!-- 4 Radiating Fabric Creases Spreading Across Waist towards Pocket -->
              <path id="s2-crease-1" d="M338,510 C368,528 405,548 440,560" fill="none" stroke="#2C1E29" stroke-width="1.8" />
              <path id="s2-crease-2" d="M332,548 C365,565 408,582 438,594" fill="none" stroke="#2C1E29" stroke-width="1.8" />
              <path id="s2-crease-3" d="M326,582 C356,598 395,612 425,622" fill="none" stroke="#2C1E29" stroke-width="1.7" />
              <path id="s2-crease-4" d="M318,612 C345,624 380,634 410,642" fill="none" stroke="#2C1E29" stroke-width="1.6" />

              <!-- 3 Cuff Buttons on Sleeve -->
              <circle cx="478" cy="610" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />
              <circle cx="484" cy="618" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />
              <circle cx="490" cy="626" r="1.4" fill="#6A5866" stroke="#2A1D27" stroke-width="0.8" />

              <!-- Left Hand Slipping into Pocket (Viewer's Right) -->
              <g id="s2-hand-pocket">
                <!-- Diagonal Pocket Slit Line -->
                <path d="M410,622 L452,656" stroke="#241721" stroke-width="2.4" fill="none" />
                <!-- Peachy skin wrist and top of knuckles entering pocket opening -->
                <path d="M415,624 
                         C422,630 432,640 442,650 
                         C436,656 428,654 420,644 
                         C414,636 410,630 415,624 Z" 
                      fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="1.6" />
              </g>
            </g>
          </g>
        </g>

        <!-- ==================================================== -->
        <!-- HEAD & FACE (Upturned Gazing Screen-Left, Anime Art) -->
        <!-- ==================================================== -->
        <g id="s2-char-head-group">
          
          <!-- Head Base Skin Mass (Neck starts at collar, jawline to chin) -->
          <path id="s2-head-skin"
                d="M355,295 
                   C350,285 348,265 345,255 
                   C338,252 328,248 323,240 
                   C320,234 324,228 326,224 
                   C324,220 320,214 326,204 
                   C330,192 338,182 344,175 
                   C365,145 405,130 440,145 
                   C475,160 495,195 490,230 
                   C485,255 465,275 442,285 
                   C435,275 425,265 422,260 
                   C430,280 438,295 445,305 
                   L355,295 Z" 
                fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="2.2" />

          <!-- Soft Warm Peach Cheek Blush (frame_06.jpg) -->
          <ellipse id="s2-cheek-blush" cx="366" cy="225" rx="19" ry="12" 
                   fill="url(#s2-blush-grad)" opacity="0.65" />

          <!-- Tiny Dark Plum Eye (Tilted upward gazing screen-left) -->
          <g id="s2-eye-group">
            <ellipse id="s2-eye-pupil" cx="350" cy="208" rx="3.4" ry="6.2" 
                     transform="rotate(-20, 350, 208)" 
                     fill="#221720" stroke="#3E2E39" stroke-width="0.8" />
            <!-- Soft upward anime eyebrow -->
            <path d="M340,192 C346,186 355,186 362,190" fill="none" stroke="#332430" stroke-width="1.6" stroke-linecap="round" />
          </g>

          <!-- Nose Tip & Mouth Slit -->
          <path d="M325,230 C328,232 332,232 334,231" fill="none" stroke="#4A3845" stroke-width="1.4" stroke-linecap="round" />

          <!-- Stylized Anime Ear (x: 395 to 430, y: 232 to 275) -->
          <g id="s2-ear-group">
            <path d="M398,236 
                     C416,230 430,242 428,260 
                     C426,274 415,280 405,275 
                     C398,270 396,256 398,236 Z" 
                  fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="2.0" />
            <path d="M410,245 C418,250 420,260 415,268" fill="none" stroke="#4D3B48" stroke-width="1.5" />
            <path d="M406,256 C412,258 414,264 410,268" fill="none" stroke="#4D3B48" stroke-width="1.2" />
          </g>

          <!-- ==================================================== -->
          <!-- TOUSLED ANIME HAIR (Single Unified Sculpted Silhouette)-->
          <!-- ==================================================== -->
          <g id="s2-hair-group">
            <!-- Main Sleek Tousled Hair with Sculpted Crown Spikes -->
            <path d="M344,175 
                     C338,162 342,142 352,126 
                     C365,108 382,92 410,85 
                     C425,68 448,72 452,92 
                     C465,82 488,92 485,115 
                     C508,115 525,138 510,165 
                     C525,185 520,215 500,235 
                     C490,260 470,275 448,275 
                     C440,255 435,245 428,235 
                     C418,230 408,236 400,248 
                     C392,235 380,218 368,215 
                     C358,212 350,220 344,228 
                     C342,205 344,190 344,175 Z" 
                  fill="#453E4E" stroke="#302432" stroke-width="2.4" />

            <!-- Dynamic Crown Spikes for Wind Oscillation -->
            <g id="s2-crown-spikes">
              <!-- Highest crest spike -->
              <path d="M422,86 C432,64 452,68 450,92 C440,98 432,104 425,110 Z" 
                    fill="#433C4C" stroke="#302432" stroke-width="2.0" />
              <!-- Back outward flick -->
              <path d="M475,105 C500,98 515,118 495,135 C488,128 480,120 472,118 Z" 
                    fill="#3F3847" stroke="#302432" stroke-width="2.0" />
            </g>

            <!-- Forehead Bangs & Loose Strands -->
            <g id="s2-front-bangs">
              <!-- Distinct Forward Flick Lock over brow -->
              <path id="s2-forward-flick" 
                    d="M348,150 C325,142 320,160 334,172 C340,166 346,160 352,156 Z" 
                    fill="#4A4253" stroke="#302432" stroke-width="2.0" />
              <!-- Center Bang Lock framing eye -->
              <path d="M360,135 C352,160 348,185 355,198 C360,185 365,170 370,155 Z" 
                    fill="#463F50" stroke="#302432" stroke-width="2.0" />
              <!-- Right Bang Lock -->
              <path d="M378,138 C375,168 378,198 388,212 C390,195 394,178 396,160 Z" 
                    fill="#433C4D" stroke="#302432" stroke-width="2.0" />
              <!-- Sideburn Lock in front of ear -->
              <path d="M398,225 C395,245 398,260 402,272 C406,260 408,248 406,235 Z" 
                    fill="#3E3747" stroke="#302432" stroke-width="1.8" />
            </g>

            <!-- Nape Lock at back of neck -->
            <path d="M455,270 C462,290 450,305 440,298 C446,288 448,278 450,272 Z" 
                  fill="#3A3342" stroke="#302432" stroke-width="1.8" />
          </g>
        </g>
      </g>
    `;

    // Cache animatable SVG DOM elements
    this.torsoGroup = this.group.querySelector('#s2-char-torso-group');
    this.headGroup = this.group.querySelector('#s2-char-head-group');
    this.crownSpikes = this.group.querySelector('#s2-crown-spikes');
    this.forwardFlick = this.group.querySelector('#s2-forward-flick');
    this.jacketBulge = this.group.querySelector('#s2-jacket-left-bulge');
    this.handPocket = this.group.querySelector('#s2-hand-pocket');
    this.eyePupil = this.group.querySelector('#s2-eye-pupil');
    this.cheekBlush = this.group.querySelector('#s2-cheek-blush');
    this.cloud1 = this.group.querySelector('#s2-cloud-1');
    this.cloud2 = this.group.querySelector('#s2-cloud-2');
    this.cloud3 = this.group.querySelector('#s2-cloud-3');
    this.cloud4 = this.group.querySelector('#s2-cloud-4');
  }

  /**
   * Deterministic 30 FPS update for living illustration feel
   * @param {number} time Playback timestamp in seconds
   */
  update(time) {
    if (time < 4.47) {
      this.group.style.display = 'none';
      return;
    }

    this.group.style.display = 'block';

    const s2Time = time - 4.47;

    // 1. Organic Breathing Cycle (nearly imperceptible expansion)
    const breath = Math.sin(s2Time * 1.6);
    if (this.torsoGroup) {
      const breathScaleY = 1.0 + breath * 0.005;
      const breathTransY = -breath * 0.35;
      this.torsoGroup.setAttribute(
        'transform',
        `translate(0, ${breathTransY.toFixed(2)}) scale(1, ${breathScaleY.toFixed(4)})`
      );
    }

    // 2. Micro Head Movement: gaze transition from high sky to slight horizon
    if (this.headGroup) {
      let headPitch = 0;
      if (s2Time > 1.8) {
        const pitchProgress = Math.min(1.0, (s2Time - 1.8) / 1.5);
        const ease = pitchProgress * pitchProgress * (3 - 2 * pitchProgress);
        headPitch = ease * 2.5; // Smooth 2.5 deg tilt
      }
      const headBreath = Math.sin(s2Time * 1.6 + 0.3) * 0.4;
      const totalHeadRot = headPitch + headBreath;
      this.headGroup.setAttribute('transform', `rotate(${totalHeadRot.toFixed(2)}, 410, 260)`);
    }

    // 3. Hair Strands Catching Sunset Breeze
    if (this.crownSpikes) {
      const crownSway = Math.sin(s2Time * 2.6) * 1.4 + Math.cos(s2Time * 5.2) * 0.5;
      this.crownSpikes.setAttribute('transform', `rotate(${crownSway.toFixed(2)}, 430, 95)`);
    }

    if (this.forwardFlick) {
      const flickSway = Math.sin(s2Time * 3.1 + 0.4) * 1.6;
      this.forwardFlick.setAttribute('transform', `rotate(${flickSway.toFixed(2)}, 348, 150)`);
    }

    // 4. Subtle Jacket Fabric Flutter & Pocket Shift
    if (this.jacketBulge) {
      const jFlutter = Math.sin(s2Time * 2.1) * 0.5;
      this.jacketBulge.setAttribute('transform', `rotate(${jFlutter.toFixed(2)}, 310, 500)`);
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
        `translate(350, 208) rotate(-20) scale(1, ${Math.max(0.1, eyeScaleY).toFixed(3)}) translate(-350, -208)`
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
