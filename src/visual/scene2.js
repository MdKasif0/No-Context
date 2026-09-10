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
      <!-- 5. MALE CHARACTER PORTRAIT (Extracted PNG Asset)      -->
      <!-- ==================================================== -->
      <g id="s2-male-character" filter="url(#ink-wobble-filter)">
        <!-- Root group for breathing / torso animation -->
        <g id="s2-char-torso-group">
          <image 
            id="s2-male-sprite" 
            href="assets/male-character.png" 
            x="0" y="0" 
            width="720" height="720" 
            preserveAspectRatio="xMidYMid meet" 
          />
        </g>
      </g>
    `;

    // Cache animatable SVG DOM elements
    this.torsoGroup = this.group.querySelector('#s2-char-torso-group');
    this.maleSprite = this.group.querySelector('#s2-male-sprite');
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

    // 1. Organic Breathing Cycle (subtle chest rise and fall on the whole character sprite)
    const breath = Math.sin(s2Time * 1.6);
    if (this.torsoGroup) {
      const breathScaleY = 1.0 + breath * 0.003;
      const breathTransY = -breath * 0.35;
      // Gentle micro-drift for living illustration feel
      const microDriftX = Math.sin(s2Time * 0.75 + 0.4) * 0.3;
      this.torsoGroup.setAttribute(
        'transform',
        `translate(${microDriftX.toFixed(2)}, ${breathTransY.toFixed(2)}) scale(1, ${breathScaleY.toFixed(4)})`
      );
    }

    // 2. Slow Cloud Drift across sky
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
