/**
 * Scene 2 Vector Layer (~4.47s to ~8.95s)
 * 1:1 Procedural Vector Recreation of the Male Character Close-up Portrait & Sunset.
 * 
 * Features:
 * - Hand-drawn anime male character with upward-tilted profile facing screen-left.
 * - Sleek sculpted anime hair mop with distinct crown spikes and front brow lock.
 * - Clean boundary between head skin and hair (zero skin bleeding/artifacts).
 * - Upturned nose, delicate mouth slit, soft peach cheek blush, stylized ear, proportional neck.
 * - Crisp spread collar cream shirt open at throat with clean central placket down to trousers.
 * - Tailored dark plum blazer with notch lapel, natural silhouette, sleeve cuff buttons,
 *   radiating waist fold lines on right panel, and hand slipping into trouser pocket.
 * - Recomposed peach sunset sky, layered pink clouds, distant apartment towers with glowing amber windows,
 *   blooming purple tree silhouette on lower-right, and horizontal rooftop railing behind character.
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
      <!-- 5. MALE CHARACTER PORTRAIT (1:1 Ground-Truth Vector) -->
      <!-- ==================================================== -->
      <g id="s2-male-character" filter="url(#ink-wobble-filter)">
        
        <!-- Dark Plum Trousers (waistline to canvas bottom y: 630 to 740) -->
        <g id="s2-char-trousers">
          <path d="M250,638 
                   L450,646 
                   L455,740 
                   L240,740 Z" 
                fill="url(#s2-trousers-fabric)" stroke="#221721" stroke-width="2.2" />
          <!-- Central trouser fly / seam line -->
          <line x1="335" y1="644" x2="335" y2="740" stroke="#1A1119" stroke-width="1.6" />
        </g>

        <!-- Torso & Blazer (Root Group for Breathing Animation) -->
        <g id="s2-char-torso-group">
          
          <!-- 1. Left Jacket Panel / Draped Arm Silhouette (Gapless to Shirt) -->
          <g id="s2-jacket-left-panel">
            <path d="M344,288 
                     C330,330 318,370 304,410 
                     C280,445 252,475 232,505 
                     C216,540 210,565 214,590 
                     C224,615 244,634 270,642 
                     C274,600 282,560 292,520 
                     C302,475 312,430 322,385 
                     C330,345 338,310 344,288 Z" 
                  fill="url(#s2-suit-fabric)" stroke="#2E202B" stroke-width="2.4" />
            <!-- Inner contour shadow along coat drape -->
            <path d="M320,350 C298,420 282,490 286,550 C290,590 306,620 332,635" 
                  fill="none" stroke="#241822" stroke-width="1.8" opacity="0.55" />
          </g>

          <!-- 2. Cream Shirt Placket (Continuous Vertical Band) -->
          <g id="s2-shirt-placket">
            <path d="M344,288 
                     L376,278 
                     C366,325 350,375 334,425 
                     C320,475 308,520 300,560 
                     C296,590 294,610 294,628 
                     L270,642 
                     C274,600 282,560 292,520 
                     C302,475 312,430 322,385 
                     C330,345 338,310 344,288 Z" 
                  fill="url(#s2-shirt-fabric)" stroke="#382935" stroke-width="2.0" />
            <!-- Central shirt fold / placket line -->
            <path d="M360,285 C348,370 332,460 310,550 C302,580 296,610 294,628" 
                  fill="none" stroke="#D8CBBC" stroke-width="1.5" />
          </g>

          <!-- 3. White Spread Collar Wings (Open at throat in V) -->
          <g id="s2-shirt-collar">
            <!-- Left collar wing -->
            <path d="M350,274 L326,312 L356,305 L364,282 Z" 
                  fill="#FBF8F2" stroke="#342330" stroke-width="2.0" />
            <!-- Right collar wing -->
            <path d="M368,260 L416,274 L388,296 L376,278 Z" 
                  fill="#F7F2E9" stroke="#342330" stroke-width="2.0" />
            <!-- V opening throat shadow -->
            <path d="M364,282 L376,278 L370,298 Z" fill="#E5B59E" />
          </g>

          <!-- 4. Tailored Dark Plum Blazer / Right Chest, Notch Lapel & Arm -->
          <g id="s2-jacket-group">
            
            <!-- Main Right Jacket Body & Notch Lapel -->
            <g id="s2-jacket-main-body">
              <!-- Right Notch Lapel -->
              <path d="M376,278 
                       L424,312 
                       L410,320 
                       L438,368 
                       C400,430 365,500 335,560 
                       C315,600 300,620 294,628 
                       L334,425 
                       C350,375 366,325 376,278 Z" 
                    fill="#453641" stroke="#2E202B" stroke-width="2.2" />

              <!-- Main Jacket Body, Right Shoulder & Back Drape -->
              <path d="M395,268 
                       C430,278 475,296 505,325 
                       C524,355 528,400 526,450 
                       C524,495 516,540 495,585 
                       C482,610 465,626 445,630 
                       C420,638 360,634 294,628 
                       L376,278 
                       L395,268 Z" 
                    fill="url(#s2-suit-fabric)" stroke="#2E202B" stroke-width="2.4" />

              <!-- Outer Sleeve & Arm Fold Contour -->
              <path d="M505,325 
                       C524,355 528,400 526,450 
                       C524,495 516,540 495,585 
                       C482,610 465,626 445,630 
                       C460,590 472,545 478,495 
                       C482,450 476,410 460,380 
                       Z" 
                    fill="url(#s2-suit-fabric)" stroke="#2E202B" stroke-width="2.2" />

              <!-- Inner elbow crease lines -->
              <path d="M470,440 C480,465 488,495 484,525" fill="none" stroke="#281B25" stroke-width="1.8" />
              <path d="M455,470 C470,495 476,522 472,548" fill="none" stroke="#281B25" stroke-width="1.6" />

              <!-- 4 Radiating Fabric Creases on Right Jacket Panel Towards Pocket (frame_06.jpg) -->
              <path id="s2-crease-1" d="M326,505 C350,522 380,540 412,552" fill="none" stroke="#2B1D28" stroke-width="1.8" />
              <path id="s2-crease-2" d="M318,538 C345,556 380,572 414,582" fill="none" stroke="#2B1D28" stroke-width="1.8" />
              <path id="s2-crease-3" d="M310,570 C338,588 375,602 410,612" fill="none" stroke="#2B1D28" stroke-width="1.7" />
              <path id="s2-crease-4" d="M304,600 C332,615 368,626 402,634" fill="none" stroke="#2B1D28" stroke-width="1.6" />

              <!-- 2 Front Blazer Buttons -->
              <circle cx="320" cy="525" r="2.2" fill="#2B1D28" />
              <circle cx="310" cy="565" r="2.2" fill="#2B1D28" />

              <!-- 3 Cuff Buttons on Sleeve -->
              <circle cx="470" cy="595" r="1.4" fill="#6B5967" stroke="#281B25" stroke-width="0.8" />
              <circle cx="476" cy="603" r="1.4" fill="#6B5967" stroke="#281B25" stroke-width="0.8" />
              <circle cx="482" cy="611" r="1.4" fill="#6B5967" stroke="#281B25" stroke-width="0.8" />

              <!-- Hand Slipping into Trouser/Coat Pocket (frame_06.jpg) -->
              <g id="s2-hand-pocket">
                <!-- Diagonal Pocket Slit Line -->
                <path d="M382,616 L422,642" stroke="#221620" stroke-width="2.4" fill="none" />
                <!-- Peachy skin wrist and top of knuckles entering pocket opening -->
                <path d="M388,618 
                         C398,624 410,634 418,642 
                         C412,646 402,642 394,634 
                         C388,628 386,622 388,618 Z" 
                      fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="1.6" />
              </g>
            </g>
          </g>
        </g>

        <!-- ==================================================== -->
        <!-- HEAD & FACE (Upturned Gazing Screen-Left at Sunset)   -->
        <!-- ==================================================== -->
        <g id="s2-char-head-group">
          
          <!-- Head Base Skin Mass (Strictly matching frame_06.jpg profile) -->
          <path id="s2-head-skin"
                d="M338,144 
                   C334,152 331,160 334,166 
                   C332,168 322,170 318,172 
                   C322,178 326,184 324,188 
                   C322,192 322,196 325,198 
                   C320,204 319,210 322,216 
                   C328,226 342,234 354,236 
                   C362,236 370,232 376,226 
                   L374,204 
                   C388,200 400,210 398,224 
                   C396,234 386,240 376,234 
                   C384,248 396,264 410,276 
                   L350,285 
                   C344,265 338,245 334,226 
                   Z" 
                fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="2.2" />

          <!-- Soft Warm Peach Cheek Blush (frame_06.jpg) -->
          <ellipse id="s2-cheek-blush" cx="365" cy="168" rx="17" ry="11" 
                   fill="url(#s2-blush-grad)" opacity="0.65" />

          <!-- Tiny Dark Plum Eye (Gazing upward screen-left at x: 350, y: 152) -->
          <g id="s2-eye-group">
            <ellipse id="s2-eye-pupil" cx="350" cy="152" rx="3.5" ry="5.5" 
                     transform="rotate(-12, 350, 152)" 
                     fill="#221720" stroke="#3E2E39" stroke-width="0.8" />
            <!-- Soft upward anime eyebrow -->
            <path d="M343,141 C348,137 356,137 362,140" fill="none" stroke="#332430" stroke-width="1.8" stroke-linecap="round" />
          </g>

          <!-- Nose Bridge Accent & Mouth Slit -->
          <path d="M324,196 C326,197 329,197 331,196" fill="none" stroke="#4A3845" stroke-width="1.4" stroke-linecap="round" />

          <!-- Stylized Anime Ear (x: 374 to 400, y: 202 to 236) -->
          <g id="s2-ear-group">
            <path d="M374,204 
                     C388,200 400,210 398,224 
                     C396,234 386,240 376,234 Z" 
                  fill="url(#s2-skin-grad)" stroke="#3E2E39" stroke-width="2.0" />
            <path d="M380,214 C386,218 388,224 382,230" fill="none" stroke="#4D3B48" stroke-width="1.5" />
            <path d="M378,224 C382,226 384,230 380,233" fill="none" stroke="#4D3B48" stroke-width="1.2" />
          </g>

          <!-- Subtle Throat Tendon / Neck Shadow -->
          <path d="M346,242 C350,258 356,274 362,284" fill="none" stroke="#DEB7A2" stroke-width="1.4" />

          <!-- ==================================================== -->
          <!-- TOUSLED ANIME HAIR (1:1 with frame_06.jpg)           -->
          <!-- ==================================================== -->
          <g id="s2-hair-group">
            <!-- Main Hair Silhouette covering skull, crown & nape -->
            <path d="M346,128 
                     C344,112 354,98 372,88 
                     C392,78 414,72 430,70 
                     L437,65 
                     L444,76 
                     L454,82 
                     L450,92 
                     C474,98 496,118 506,144 
                     C516,168 518,195 510,222 
                     C504,238 494,254 482,256 
                     C472,256 462,246 456,238 
                     C430,240 405,236 394,226 
                     L384,204 
                     L376,176 Z" 
                  fill="#453E4E" stroke="#2E2230" stroke-width="2.4" />

            <!-- Dynamic Crown Spikes for Breeze Sway -->
            <g id="s2-crown-spikes">
              <!-- Highest crest spike at (437, 65) -->
              <path d="M430,70 L437,65 L444,76 Z" 
                    fill="#423A4A" stroke="#2E2230" stroke-width="1.8" />
              <!-- Back outward flick -->
              <path d="M470,105 C495,110 502,128 484,140 C478,132 474,122 470,114 Z" 
                    fill="#3E3646" stroke="#2E2230" stroke-width="1.8" />
            </g>

            <!-- Forehead Bangs & Loose Strands (frame_06.jpg) -->
            <g id="s2-front-bangs">
              <!-- Distinct Forward Flick Lock over brow -->
              <path id="s2-forward-flick" 
                    d="M346,128 C324,124 316,138 324,146 C332,142 342,136 348,132 Z" 
                    fill="#4A4253" stroke="#2E2230" stroke-width="2.0" />
              <!-- Center Lock framing eye -->
              <path d="M336,134 C330,146 332,156 342,162 C342,152 344,142 348,136 Z" 
                    fill="#463F50" stroke="#2E2230" stroke-width="2.0" />
              <!-- Forehead Sweep -->
              <path d="M348,132 C356,152 364,168 372,176 C370,162 372,148 376,138 Z" 
                    fill="#433C4D" stroke="#2E2230" stroke-width="2.0" />
              <!-- Sideburn Lock in front of ear -->
              <path d="M372,176 C374,192 372,204 376,210 C378,198 380,188 382,178 Z" 
                    fill="#3E3747" stroke="#2E2230" stroke-width="1.8" />
            </g>

            <!-- Flow & Volume Texture Lines inside Hair -->
            <path d="M410,95 C435,115 460,150 465,190" fill="none" stroke="#352937" stroke-width="1.8" />
            <path d="M380,115 C410,135 435,170 440,210" fill="none" stroke="#352937" stroke-width="1.6" />
          </g>
        </g>
      </g>
    `;

    // Cache animatable SVG DOM elements
    this.torsoGroup = this.group.querySelector('#s2-char-torso-group');
    this.headGroup = this.group.querySelector('#s2-char-head-group');
    this.crownSpikes = this.group.querySelector('#s2-crown-spikes');
    this.forwardFlick = this.group.querySelector('#s2-forward-flick');
    this.leftPanel = this.group.querySelector('#s2-jacket-left-panel');
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

    // 1. Organic Breathing Cycle (subtle chest rise and fall)
    const breath = Math.sin(s2Time * 1.6);
    if (this.torsoGroup) {
      const breathScaleY = 1.0 + breath * 0.004;
      const breathTransY = -breath * 0.4;
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
        headPitch = ease * 2.2; // Smooth tilt down towards horizon
      }
      const headBreath = Math.sin(s2Time * 1.6 + 0.3) * 0.35;
      const totalHeadRot = headPitch + headBreath;
      this.headGroup.setAttribute('transform', `rotate(${totalHeadRot.toFixed(2)}, 380, 275)`);
    }

    // 3. Hair Strands Catching Sunset Breeze
    if (this.crownSpikes) {
      const crownSway = Math.sin(s2Time * 2.6) * 1.2 + Math.cos(s2Time * 5.2) * 0.4;
      this.crownSpikes.setAttribute('transform', `rotate(${crownSway.toFixed(2)}, 435, 75)`);
    }

    if (this.forwardFlick) {
      const flickSway = Math.sin(s2Time * 3.1 + 0.4) * 1.4;
      this.forwardFlick.setAttribute('transform', `rotate(${flickSway.toFixed(2)}, 346, 128)`);
    }

    // 4. Subtle Left Coat Fabric Flutter & Pocket Shift
    if (this.leftPanel) {
      const jFlutter = Math.sin(s2Time * 2.1) * 0.4;
      this.leftPanel.setAttribute('transform', `rotate(${jFlutter.toFixed(2)}, 300, 480)`);
    }

    if (this.handPocket) {
      const pShift = Math.sin(s2Time * 1.6) * 0.25;
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
        `translate(350, 152) rotate(-12) scale(1, ${Math.max(0.1, eyeScaleY).toFixed(3)}) translate(-350, -152)`
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
