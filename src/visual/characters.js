/**
 * Characters Vector Layer
 * High-fidelity anime vectors recreating the girl and boy from the reference animation (frame_01.jpg).
 * Features true anatomical anime posing:
 * - Girl: Seated on car roof with horizontal thighs, knees bent over roof rim, dangling shins, 
 *   arm braced back on roof, front hand on knee, flared off-the-shoulder ruffled capelet.
 *   Profile facing right, delicate stylized features, dark muted gray-plum low bun with loose strands.
 * - Boy: Relaxed anime silhouette, upward-tilted profile looking at girl, tousled messy anime locks, 
 *   tailored blazer with notch lapels, white shirt open at collar, hands tucked inside pockets.
 */
export class CharactersLayer {
  constructor(parentGroup) {
    this.group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.group.id = 'layer-characters';
    parentGroup.appendChild(this.group);

    this.render();
  }

  render() {
    this.group.innerHTML = `
      <defs>
        <!-- Soft watercolor anime skin gradient -->
        <linearGradient id="anime-skin-soft" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FFF5ED" />
          <stop offset="65%" stop-color="#FEE8D8" />
          <stop offset="100%" stop-color="#F3CEB6" />
        </linearGradient>

        <linearGradient id="girl-cream-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FAF5EE" />
          <stop offset="60%" stop-color="#F3E6D4" />
          <stop offset="100%" stop-color="#DECDB7" />
        </linearGradient>

        <linearGradient id="girl-collar-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCF7F1" />
          <stop offset="65%" stop-color="#F5EBDE" />
          <stop offset="100%" stop-color="#E2D4C3" />
        </linearGradient>

        <linearGradient id="boy-suit-fabric" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#55444F" />
          <stop offset="50%" stop-color="#463742" />
          <stop offset="100%" stop-color="#362933" />
        </linearGradient>

        <linearGradient id="boy-trouser-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#40323D" />
          <stop offset="100%" stop-color="#2B1F28" />
        </linearGradient>
      </defs>

      <!-- ==================================================== -->
      <!-- 1. GIRL (Sitting on Car Roof, Facing Right)          -->
      <!-- ==================================================== -->
      <g id="char-girl" filter="url(#ink-wobble-filter)">
        
        <!-- Seated Lower Body, Long Skirt & Dangling Legs (Matching girl_body.jpg) -->
        <g id="girl-lower-body">
          <!-- Main Seated Skirt Mass over Lap & Thighs on Car Roof (y: 420 - 440, x: 65 - 225) -->
          <path d="M65,432 
                   C62,402 82,385 112,382 
                   C146,380 188,396 214,422 
                   C232,436 242,452 238,478 
                   C234,514 228,558 222,604 
                   C218,614 206,614 196,606 
                   C190,576 188,536 190,490 
                   C192,456 184,444 170,440 
                   C145,436 105,436 65,432 Z" 
                fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.8" />

          <!-- Dangling Legs & Skirt Drape over Car Roof Edge -->
          <g id="girl-leg-front">
            <!-- Long skirt draping down from knees towards side mirror (y: 425 - 612) -->
            <path d="M165,428 
                     C195,424 222,430 234,448 
                     C242,464 238,495 232,538 
                     C226,576 220,608 210,612 
                     C198,614 194,592 198,550 
                     C202,504 206,468 198,448 
                     C188,440 175,436 165,436 Z" 
                  fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.8" />

            <!-- Flowing fabric crease lines down skirt drape -->
            <path d="M228,450 C236,475 238,520 234,568 C232,592 228,606 224,612" fill="none" stroke="#4A3744" stroke-width="1.3" />
            <path d="M214,456 C220,485 222,530 220,575 C218,596 214,608 210,612" fill="none" stroke="#4A3744" stroke-width="1.1" />
            <path d="M185,438 C198,442 212,448 222,458" fill="none" stroke="#4A3744" stroke-width="1.2" />

            <!-- Rounded shoe resting gracefully right above the side mirror (matching girl_body.jpg) -->
            <ellipse cx="230" cy="615" rx="15" ry="8" transform="rotate(16, 230, 615)" fill="#EDE0CF" stroke="#4A3744" stroke-width="1.6" />
            <path d="M220,620 C230,625 240,622 244,617" fill="none" stroke="#44323E" stroke-width="1.8" />
          </g>
        </g>

        <!-- Torso, Arm Supporting Body & Off-The-Shoulder Ruffle Capelet -->
        <g id="girl-torso">
          <!-- Arm supporting body: straight vertical down, hand flat on roof edge (matching girl_body.jpg) -->
          <path d="M138,348 L138,432 L148,432 L148,348 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.5" />
          <!-- Hand planted flat on car roof edge with fingers curving over rim -->
          <path d="M134,432 C132,437 138,442 148,442 C156,442 160,437 158,432 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.4" />
          <!-- Finger division creases -->
          <line x1="142" y1="433" x2="142" y2="441" stroke="#4A3744" stroke-width="0.9" />
          <line x1="150" y1="433" x2="150" y2="441" stroke="#4A3744" stroke-width="0.9" />

          <!-- Bodice / Waist -->
          <path d="M96,335 C94,358 98,380 104,398 C124,400 154,395 168,388 C165,365 160,344 156,330 Z" 
                fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Flared Off-The-Shoulder Ruffled Capelet (Folded boatneck collar + flared ruffle) -->
          <g id="girl-ruffle">
            <!-- Folded upper collar band around neckline -->
            <path d="M112,276 C135,270 165,270 190,278 L188,290 C165,282 135,282 110,288 Z" 
                  fill="#F8EFE4" stroke="#4A3744" stroke-width="1.4" />

            <!-- Bell-shaped flared ruffle capelet (y: 288 - 355) -->
            <path d="M76,332 
                     C94,304 122,286 150,282 
                     C168,280 182,286 188,304 
                     C198,324 200,344 188,352 
                     C176,358 152,360 132,360 
                     C112,360 90,358 76,348 
                     C68,342 70,336 76,332 Z" 
                  fill="url(#girl-collar-fabric)" stroke="#4A3744" stroke-width="1.8" />

            <!-- Radial vertical pleat creases down the ruffle capelet -->
            <path d="M96,312 L82,345" stroke="#4A3744" stroke-width="1.3" />
            <path d="M118,296 L110,354" stroke="#4A3744" stroke-width="1.3" />
            <path d="M144,292 L142,356" stroke="#4A3744" stroke-width="1.3" />
            <path d="M168,298 L174,350" stroke="#4A3744" stroke-width="1.3" />
          </g>
        </g>

        <!-- Girl Head & Hair (Breathes and tilts - exact girl_crop.jpg coordinates) -->
        <g id="girl-head">
          <!-- Slender Graceful Neck (Seamless skin connection without horizontal borders) -->
          <path d="M164,256 C166,264 168,272 170,278 L188,278 C186,272 184,266 182,258 Z" 
                fill="url(#anime-skin-soft)" stroke="none" />
          <path d="M182,258 C184,266 186,272 188,278" fill="none" stroke="#4A3744" stroke-width="1.4" />
          <path d="M164,256 C166,264 168,272 170,278" fill="none" stroke="#4A3744" stroke-width="1.4" />

          <!-- Face Profile Shape (Leaning forward, sweet anime profile facing right - girl_crop.jpg) -->
          <path d="M172,222 
                   C184,226 194,232 198,238 
                   C202,242 203,245 201,248 
                   C197,251 196,254 198,256 
                   C196,260 192,263 186,264 
                   C176,266 166,263 162,256 
                   C156,248 158,236 172,222 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse id="girl-blush" cx="182" cy="248" rx="6.5" ry="4.0" fill="#F3A688" opacity="0.75" filter="url(#blush-soften)" />

          <!-- Facial Features -->
          <!-- Eye looking right toward boy with micro-blink -->
          <g id="girl-eye">
            <path d="M186,239 C189,237 193,238 195,241" fill="none" stroke="#3A2C37" stroke-width="1.8" stroke-linecap="round" />
            <circle cx="190" cy="240.5" r="1.3" fill="#2E212B" />
          </g>
          <!-- Eyebrow -->
          <path d="M183,232 C187,230 191,231 195,233" fill="none" stroke="#4A3744" stroke-width="1.0" stroke-linecap="round" />
          <!-- Dainty upturned nose tip -->
          <path d="M201,245 C202,246 201,248 199,249" fill="none" stroke="#4A3744" stroke-width="1.1" />
          <!-- Sweet gentle smile line -->
          <path d="M190,254 C193,256 196,255 198,253" fill="none" stroke="#4A3744" stroke-width="1.2" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M162,245 C159,243 158,249 160,255 C162,259 165,259 166,255" fill="none" stroke="#4A3744" stroke-width="1.2" />

          <!-- Hair System (Dark muted gray/plum anime hair with low bun) -->
          <g id="girl-hair">
            <!-- Full Back Hair Volume & Crown Silhouette -->
            <path d="M165,214 
                     C138,214 120,228 118,250 
                     C116,264 124,276 138,278 
                     C144,268 152,256 160,248 
                     C166,236 174,226 182,222 
                     C176,218 170,214 165,214 Z" 
                  fill="#47404A" stroke="#352834" stroke-width="1.6" />

            <!-- Low Bun at Nape of Neck (matching girl_crop.jpg) -->
            <g id="girl-bun">
              <ellipse cx="120" cy="252" rx="15" ry="13" fill="#3D3640" stroke="#352834" stroke-width="1.6" />
              <!-- Flyaway hair loop above bun -->
              <path d="M120,240 C110,244 110,258 118,264" fill="none" stroke="#352834" stroke-width="1.4" stroke-linecap="round" />
              <!-- Hair tie detail -->
              <path d="M128,242 C130,250 129,258 126,264" fill="none" stroke="#2B1F2A" stroke-width="1.5" />
            </g>

            <!-- Front Bangs & Distinct Antenna Wisp (matching girl_crop.jpg) -->
            <g id="girl-hair-strand">
              <!-- Forehead fringe sweep -->
              <path d="M165,214 C174,218 184,226 190,234 C182,232 174,228 166,224 Z" fill="#47404A" />
              <!-- Side lock in front of ear -->
              <path d="M164,232 C166,242 164,250 158,256" fill="none" stroke="#47404A" stroke-width="1.3" stroke-linecap="round" />
              <!-- Distinct stray antenna wisp flicking horizontally to right (matching girl_crop.jpg) -->
              <path d="M178,212 C192,208 206,207 218,209" fill="none" stroke="#47404A" stroke-width="1.8" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 2. BOY (Standing on right near railing, facing left) -->
      <!-- ==================================================== -->
      <g id="char-boy" filter="url(#ink-wobble-filter)">
        
        <!-- Tailored Suit Trousers & Legs (Standing, hands in pockets matching boy_body.jpg) -->
        <g id="boy-legs">
          <!-- Left Leg (Front) -->
          <path d="M466,575 
                   C462,615 458,665 454,720 
                   L494,720 
                   C498,665 498,615 496,575 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Right Leg (Back) -->
          <path d="M500,575 
                   C504,615 510,665 516,720 
                   L554,720 
                   C544,665 538,615 532,575 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Center Pressed Crease Lines -->
          <line x1="476" y1="585" x2="472" y2="718" stroke="#2B1F29" stroke-width="1.2" />
          <line x1="522" y1="585" x2="532" y2="718" stroke="#2B1F29" stroke-width="1.2" />
        </g>

        <!-- Torso, Shirt & Suit Jacket (Hands tucked in trouser pockets) -->
        <g id="boy-torso">
          <!-- White Collared Dress Shirt (y: 395 - 575) -->
          <path d="M470,394 
                   C484,392 508,392 524,394 
                   C518,445 512,508 504,575 
                   C492,573 478,571 465,570 
                   C468,515 470,455 470,394 Z" 
                fill="#FAF4ED" stroke="#65495A" stroke-width="1.4" />

          <!-- Open Spread Collar Wings framing neck (y: 378 - 402) -->
          <polygon points="486,378 468,402 490,394" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          <polygon points="504,378 518,400 500,394" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          
          <!-- Shirt placket & buttons -->
          <line x1="492" y1="406" x2="482" y2="570" stroke="#D5C5B8" stroke-width="1.2" />
          <circle cx="490" cy="432" r="1.4" fill="#65495A" />
          <circle cx="486" cy="468" r="1.4" fill="#65495A" />
          <circle cx="483" cy="506" r="1.4" fill="#65495A" />

          <!-- Suit Jacket Left Arm & Flap (Hand tucked inside pocket!) -->
          <g id="boy-jacket-left">
            <!-- Left arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M464,400 
                     C444,414 428,455 418,505 
                     C412,538 422,558 448,562 
                     C460,564 468,548 472,525 
                     C478,475 480,435 480,400 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Left -->
            <path d="M466,402 L448,452 L466,448 L456,515" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit with wrist tucked inside -->
            <line x1="444" y1="552" x2="462" y2="550" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Suit Jacket Right Arm & Flap (Hand tucked inside pocket! Elbow bends back) -->
          <g id="boy-jacket-right">
            <!-- Right arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M526,398 
                     C552,412 572,454 576,505 
                     C580,538 568,558 548,562 
                     C534,565 526,548 520,522 
                     C514,475 512,435 510,398 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Right -->
            <path d="M518,400 L532,452 L514,448 L522,515" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit with wrist tucked inside -->
            <line x1="530" y1="555" x2="548" y2="553" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Fabric folds around elbows -->
          <path d="M432,490 C444,502 456,507 468,504" fill="none" stroke="#2B1E29" stroke-width="1.2" />
          <path d="M538,488 C550,500 562,506 572,500" fill="none" stroke="#2B1E29" stroke-width="1.2" />
        </g>

        <!-- Boy Head & Authentic Tousled Anime Hair (Tilted upward gazing at girl - boy_crop.jpg) -->
        <g id="boy-head">
          <!-- Slanted Neck (Seamless skin connection without horizontal borders) -->
          <path d="M482,352 C485,360 488,370 490,378 L504,378 C506,370 508,360 508,352 Z" 
                fill="url(#anime-skin-soft)" stroke="none" />
          <path d="M482,352 C485,360 488,370 490,378" fill="none" stroke="#65495A" stroke-width="1.4" />
          <path d="M508,352 C508,360 506,370 504,378" fill="none" stroke="#65495A" stroke-width="1.4" />

          <!-- Face Profile (Tilted upward ~20°, looking left towards girl) -->
          <path d="M484,324 
                   C476,328 468,334 466,340 
                   C464,346 468,352 472,357 
                   C476,362 484,365 492,364 
                   C498,362 504,355 506,346 
                   C506,335 500,326 484,324 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse cx="478" cy="348" rx="6.5" ry="4.0" fill="var(--character-blush)" filter="url(#blush-soften)" />

          <!-- Eye looking affectionately left and up toward the girl -->
          <path d="M474,334 C478,332 482,333 484,336" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="478" cy="335" r="1.3" fill="#352632" />
          <!-- Eyebrow -->
          <path d="M472,327 C476,325 482,326 485,328" fill="none" stroke="#543C4C" stroke-width="1.2" stroke-linecap="round" />
          <!-- Soft nose profile -->
          <path d="M466,338 C464,340 465,342 467,343" fill="none" stroke="#65495A" stroke-width="1.1" />
          <!-- Sweet gentle smile -->
          <path d="M474,350 C478,352 482,350 484,348" fill="none" stroke="#65495A" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M498,338 C502,335 505,340 504,346 C502,351 498,350 497,347" fill="none" stroke="#65495A" stroke-width="1.2" />

          <!-- Tousled Messy Anime Hair (Matching boy_crop.jpg: compact shaggy cut with crown tufts) -->
          <g id="boy-hair">
            <!-- Solid hair mass with natural anime locks -->
            <path d="M466,322 
                     C458,308 466,294 478,290 
                     C488,286 504,286 514,290 
                     C524,296 528,306 526,320 
                     C528,330 524,342 516,350 
                     C512,354 508,354 504,350 
                     C500,340 496,334 488,330 
                     C482,328 474,324 466,322 Z" 
                  fill="#423540" stroke="#65495A" stroke-width="1.6" />

            <!-- Messy anime locks and crown tufts (matching boy_crop.jpg) -->
            <g id="boy-hair-spikes">
              <!-- Front lock flicking over brow towards girl -->
              <path d="M466,316 C458,324 456,334 464,338 C466,330 470,324 476,320 Z" fill="#382B37" />
              <!-- Second bang lock -->
              <path d="M476,308 C468,318 470,328 476,334 C478,324 484,318 490,314 Z" fill="#382B37" />
              <!-- Temple lock in front of ear -->
              <path d="M486,326 C482,336 481,346 484,349 C486,342 489,336 491,332 Z" fill="#382B37" />
              
              <!-- Crown tuft 1: flicking up-left (matching boy_crop.jpg) -->
              <path d="M480,288 C482,279 488,278 492,285" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
              <!-- Crown tuft 2: flicking up-right (matching boy_crop.jpg) -->
              <path d="M502,286 C506,278 514,279 516,287" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
              <!-- Nape flick -->
              <path d="M518,348 C522,344 526,338 528,332" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </g>
    `;

    // Cache elements for transforms
    this.girlHead = this.group.querySelector('#girl-head');
    this.girlBun = this.group.querySelector('#girl-bun');
    this.girlStrand = this.group.querySelector('#girl-hair-strand');
    this.girlRuffle = this.group.querySelector('#girl-ruffle');
    this.girlTorso = this.group.querySelector('#girl-torso');
    this.girlEye = this.group.querySelector('#girl-eye');
    this.girlBlush = this.group.querySelector('#girl-blush');

    this.boyHead = this.group.querySelector('#boy-head');
    this.boyHairSpikes = this.group.querySelector('#boy-hair-spikes');
    this.boyJacketLeft = this.group.querySelector('#boy-jacket-left');
    this.boyJacketRight = this.group.querySelector('#boy-jacket-right');
    this.boyTorso = this.group.querySelector('#boy-torso');
  }

  update(time) {
    const breathCycle = Math.sin(time * 1.45);

    // 1. Girl subtle breathing & posture sway (very gentle)
    if (this.girlTorso) {
      const gBreathScale = 1.0 + breathCycle * 0.005;
      this.girlTorso.setAttribute('transform', `scale(1, ${gBreathScale}) translate(0, ${-breathCycle * 0.4})`);
    }

    // 2. Girl head gentle drift
    if (this.girlHead) {
      const gTilt = Math.sin(time * 0.8) * 0.7;
      this.girlHead.setAttribute('transform', `rotate(${gTilt}, 165, 260)`);
    }

    // 3. Occasional tiny movement in the loose hair strand
    if (this.girlStrand) {
      // Resting sway with gentle organic puffs
      const strandSway = Math.sin(time * 2.4) * 1.5 + Math.sin(time * 5.1) * 0.7;
      this.girlStrand.setAttribute('transform', `rotate(${strandSway}, 178, 212)`);
    }

    // 4. Girl ruffle cloth soft flutter
    if (this.girlRuffle) {
      const ruffleFlutter = Math.sin(time * 2.2) * 0.8;
      this.girlRuffle.setAttribute('transform', `rotate(${ruffleFlutter}, 130, 310) scale(1, ${1 + ruffleFlutter * 0.003})`);
    }

    // 5. Subtle eye/face variation: delicate micro-blink around 2.15s and 3.85s
    if (this.girlEye) {
      let eyeScaleY = 1.0;
      // Blink 1 at 2.10s - 2.22s
      if (time >= 2.10 && time <= 2.22) {
        const p = (time - 2.10) / 0.12;
        eyeScaleY = Math.abs(Math.sin(p * Math.PI - Math.PI / 2));
      }
      // Blink 2 at 3.80s - 3.92s
      else if (time >= 3.80 && time <= 3.92) {
        const p = (time - 3.80) / 0.12;
        eyeScaleY = Math.abs(Math.sin(p * Math.PI - Math.PI / 2));
      }
      this.girlEye.setAttribute('transform', `translate(190, 240.5) scale(1, ${Math.max(0.1, eyeScaleY)}) translate(-190, -240.5)`);
    }

    // 6. Subtle cheek blush warmth breathing
    if (this.girlBlush) {
      const blushOpacity = 0.65 + Math.sin(time * 1.45) * 0.08;
      this.girlBlush.setAttribute('opacity', blushOpacity.toFixed(2));
    }

    // 7. Boy breathing cycle
    if (this.boyTorso) {
      const bBreathScale = 1.0 + breathCycle * 0.006;
      this.boyTorso.setAttribute('transform', `scale(1, ${bBreathScale}) translate(0, ${-breathCycle * 0.4})`);
    }

    // 8. Boy head tilt upward gazing at woman
    if (this.boyHead) {
      const bTilt = Math.sin(time * 0.75 + 0.4) * 0.7;
      this.boyHead.setAttribute('transform', `rotate(${bTilt}, 495, 360)`);
    }

    // 9. Boy hair tufts in the breeze
    if (this.boyHairSpikes) {
      const spikeSway = Math.sin(time * 2.8 + 0.3) * 1.3 + Math.cos(time * 5.4) * 0.5;
      this.boyHairSpikes.setAttribute('transform', `rotate(${spikeSway}, 495, 290)`);
    }

    // 10. Boy jacket subtle flutter in sunset breeze
    if (this.boyJacketLeft) {
      const jFlutterL = Math.sin(time * 2.1) * 0.8;
      this.boyJacketLeft.setAttribute('transform', `rotate(${jFlutterL}, 464, 400)`);
    }
    if (this.boyJacketRight) {
      const jFlutterR = Math.sin(time * 2.3 + 0.3) * 0.7;
      this.boyJacketRight.setAttribute('transform', `rotate(${jFlutterR}, 526, 398)`);
    }
  }
}

