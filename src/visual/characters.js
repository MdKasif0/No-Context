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
        
        <!-- Seated Lower Body, Skirt & Dangling Legs -->
        <g id="girl-lower-body">
          <!-- Main Seated Skirt Mass over Lap & Thighs on Car Roof (y: 405 - 440, x: 70 - 235) -->
          <path d="M72,436 
                   C65,415 85,395 118,390 
                   C152,386 195,402 218,425 
                   C232,440 240,460 236,482 
                   C232,508 226,545 220,582 
                   C214,588 200,588 190,582 
                   C182,568 180,535 182,495 
                   C184,460 178,446 165,442 
                   C145,440 105,442 72,436 Z" 
                fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.8" />

          <!-- Back Leg & Foot (Dangling shin behind front drape) -->
          <g id="girl-leg-back">
            <path d="M198,460 
                     C204,490 205,528 202,562 
                     C200,572 192,576 186,575 
                     C178,574 176,560 178,532 
                     C180,498 185,475 190,460 Z" 
                  fill="#D8C5B0" stroke="#4A3744" stroke-width="1.5" />
            <!-- Back shoe -->
            <ellipse cx="192" cy="578" rx="14" ry="8" transform="rotate(16, 192, 578)" fill="#DAC5AF" stroke="#4A3744" stroke-width="1.5" />
            <path d="M182,583 C192,587 202,584 206,580" fill="none" stroke="#44323E" stroke-width="1.5" />
          </g>

          <!-- Foreground Leg, Knee & Draped Skirt Folds -->
          <g id="girl-leg-front">
            <!-- Curved knee silhouette draping smoothly over car roof edge (x: 210 - 242, y: 425 - 475) -->
            <path d="M168,426 
                     C196,418 225,424 238,442 
                     C246,456 242,482 236,520 
                     C230,558 224,582 214,586 
                     C202,588 198,568 202,530 
                     C206,488 210,460 202,445 
                     C192,438 178,435 168,435 Z" 
                  fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.8" />

            <!-- Flowing fabric crease lines down skirt drape -->
            <path d="M216,440 C228,452 232,480 228,525 C224,556 218,576 214,582" fill="none" stroke="#4A3744" stroke-width="1.3" />
            <path d="M204,450 C214,464 216,498 214,535 C211,560 206,575 204,578" fill="none" stroke="#4A3744" stroke-width="1.1" />
            <path d="M188,435 C202,438 216,445 225,455" fill="none" stroke="#4A3744" stroke-width="1.2" />

            <!-- Front shoe peeking out gracefully below skirt hem -->
            <ellipse cx="222" cy="590" rx="16" ry="9" transform="rotate(20, 222, 590)" fill="#EDE0CF" stroke="#4A3744" stroke-width="1.6" />
            <path d="M210,596 C222,601 232,598 237,592" fill="none" stroke="#44323E" stroke-width="1.8" />
          </g>
        </g>

        <!-- Torso, Arms & Off-The-Shoulder Ruffle Capelet -->
        <g id="girl-torso">
          <!-- Back Arm: straight down, leaning back on car roof supporting her weight -->
          <path d="M92,342 C84,368 76,400 70,432 L84,435 C88,405 96,375 104,350 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />
          <!-- Hand planted flat on car roof -->
          <path d="M64,432 C54,438 60,446 72,446 C82,446 86,438 84,432 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.5" />

          <!-- Bodice / Waist -->
          <path d="M96,330 C94,354 98,378 104,395 C124,397 154,392 168,385 C165,362 160,340 156,325 Z" 
                fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Foreground Arm: hangs down gracefully, hand resting on her knee/lap -->
          <path d="M152,345 C162,370 172,400 178,430 C180,438 174,444 166,442 C160,440 158,432 156,420 C150,392 144,364 140,345 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />
          <!-- Hand resting on lap/knee -->
          <path d="M168,432 C175,436 182,442 177,447 C170,450 164,446 162,438 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.4" />

          <!-- Flared Off-The-Shoulder Ruffled Capelet (Broad flowing poncho collar) -->
          <g id="girl-ruffle">
            <!-- Smooth bell-shaped capelet covering shoulders & chest -->
            <path d="M72,305 
                     C95,296 142,294 186,308 
                     C208,336 216,368 206,378 
                     C192,382 172,376 154,378 
                     C136,380 118,376 102,378 
                     C86,380 72,376 60,366 
                     C55,346 60,322 72,305 Z" 
                  fill="url(#girl-collar-fabric)" stroke="#4A3744" stroke-width="1.8" />

            <!-- Radial pleat creases flowing outward from neckline -->
            <path d="M95,300 L72,370" stroke="#4A3744" stroke-width="1.3" />
            <path d="M116,298 L108,374" stroke="#4A3744" stroke-width="1.3" />
            <path d="M142,298 L145,376" stroke="#4A3744" stroke-width="1.3" />
            <path d="M168,302 L185,372" stroke="#4A3744" stroke-width="1.3" />
          </g>
        </g>

        <!-- Girl Head & Hair (Breathes and tilts) -->
        <g id="girl-head">
          <!-- Slender Graceful Neck -->
          <path d="M144,265 C146,282 148,298 150,308 C158,308 166,306 172,300 C170,284 168,268 164,262 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.4" />

          <!-- Face Profile Shape (Delicate anime profile facing right) -->
          <path d="M152,218 
                   C168,218 184,226 194,236 
                   C199,241 202,246 198,252 
                   C195,256 190,260 186,264 
                   C178,272 166,274 158,272 
                   C146,268 142,256 142,242 
                   C142,228 146,220 152,218 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse id="girl-blush" cx="180" cy="248" rx="8" ry="4.8" fill="#F3A688" opacity="0.68" filter="url(#blush-soften)" />

          <!-- Facial Features -->
          <!-- Eye looking right toward boy with micro-blink -->
          <g id="girl-eye">
            <path d="M182,236 C186,234 190,235 192,238" fill="none" stroke="#3A2C37" stroke-width="1.8" stroke-linecap="round" />
            <circle cx="187" cy="238" r="1.3" fill="#2E212B" />
          </g>
          <!-- Eyebrow -->
          <path d="M180,229 C184,227 189,228 193,230" fill="none" stroke="#4A3744" stroke-width="1.1" stroke-linecap="round" />
          <!-- Dainty nose tip -->
          <path d="M197,242 C199,244 198,246 196,247" fill="none" stroke="#4A3744" stroke-width="1.1" />
          <!-- Warm sweet smile -->
          <path d="M185,254 C190,256 194,254 196,252" fill="none" stroke="#4A3744" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M152,245 C149,243 147,249 149,255 C151,259 155,259 156,255" fill="none" stroke="#4A3744" stroke-width="1.2" />

          <!-- Hair System (Dark muted gray/plum anime hair with low bun) -->
          <g id="girl-hair">
            <!-- Full Back Hair Volume & Crown Silhouette -->
            <path d="M150,214 
                     C126,215 110,232 112,256 
                     C114,272 126,282 142,282 
                     C146,270 152,256 158,246 
                     C164,232 172,222 182,218 
                     C172,214 160,213 150,214 Z" 
                  fill="#47404A" stroke="#352834" stroke-width="1.6" />

            <!-- Low Bun at Nape of Neck (frame_01.jpg: cute knot at back of head) -->
            <g id="girl-bun">
              <ellipse cx="112" cy="256" rx="16" ry="14" fill="#3D3640" stroke="#352834" stroke-width="1.6" />
              <path d="M104,248 C112,252 118,260 116,268" fill="none" stroke="#544B57" stroke-width="1.4" />
              <!-- Hair tie detail -->
              <path d="M122,246 C124,254 123,264 120,270" fill="none" stroke="#2B1F2A" stroke-width="1.5" />
            </g>

            <!-- Front Bangs & Loose Tendril Curling in Breeze -->
            <g id="girl-hair-strand">
              <!-- Rounded forehead fringe sweeping across -->
              <path d="M152,214 C164,218 178,228 184,238 C174,234 164,230 154,226 Z" fill="#47404A" />
              <!-- Loose wispy tendril curving gracefully into the breeze -->
              <path d="M168,236 C176,230 188,228 196,232" fill="none" stroke="#3D3640" stroke-width="1.8" stroke-linecap="round" />
              <path d="M184,228 C192,226 200,230 204,235" fill="none" stroke="#3D3640" stroke-width="1.2" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 2. BOY (Standing on right near railing, facing left) -->
      <!-- ==================================================== -->
      <g id="char-boy" filter="url(#ink-wobble-filter)">
        
        <!-- Tailored Suit Trousers & Legs (Standing, hands in pockets) -->
        <g id="boy-legs">
          <!-- Left Leg (Front) -->
          <path d="M472,558 
                   C468,602 464,655 460,720 
                   L500,720 
                   C504,660 504,610 502,558 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Right Leg (Back) -->
          <path d="M506,558 
                   C510,602 516,655 522,720 
                   L560,720 
                   C550,660 544,610 538,558 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Center Pressed Crease Lines -->
          <line x1="482" y1="568" x2="478" y2="718" stroke="#2B1F29" stroke-width="1.2" />
          <line x1="528" y1="568" x2="538" y2="718" stroke="#2B1F29" stroke-width="1.2" />
        </g>

        <!-- Torso, Shirt & Suit Jacket (Hands tucked in trouser pockets) -->
        <g id="boy-torso">
          <!-- White Collared Dress Shirt -->
          <path d="M472,416 
                   C486,412 512,410 532,414 
                   C526,458 516,515 506,562 
                   C492,560 478,558 464,556 
                   C467,508 470,460 472,416 Z" 
                fill="#FAF4ED" stroke="#65495A" stroke-width="1.4" />

          <!-- Open Spread Collar Wings framing neck -->
          <polygon points="486,412 470,436 492,428" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          <polygon points="512,412 528,436 506,428" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          
          <!-- Shirt placket & buttons -->
          <line x1="494" y1="432" x2="484" y2="555" stroke="#D5C5B8" stroke-width="1.2" />
          <circle cx="492" cy="456" r="1.4" fill="#65495A" />
          <circle cx="488" cy="488" r="1.4" fill="#65495A" />
          <circle cx="485" cy="522" r="1.4" fill="#65495A" />

          <!-- Suit Jacket Left Arm & Flap (Hand tucked inside pocket!) -->
          <g id="boy-jacket-left">
            <!-- Left arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M468,418 
                     C450,428 430,470 420,520 
                     C414,548 424,566 450,568 
                     C464,570 470,550 474,528 
                     C480,480 484,444 484,418 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Left -->
            <path d="M472,420 L454,476 L474,473 L462,538" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit -->
            <line x1="448" y1="560" x2="466" y2="558" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Suit Jacket Right Arm & Flap (Hand tucked inside pocket!) -->
          <g id="boy-jacket-right">
            <!-- Right arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M530,416 
                     C558,426 578,468 584,518 
                     C588,548 576,568 554,570 
                     C540,572 532,550 526,524 
                     C518,478 516,444 514,416 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Right -->
            <path d="M520,418 L534,475 L516,472 L524,534" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit -->
            <line x1="535" y1="562" x2="554" y2="560" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Fabric folds around elbows -->
          <path d="M435,502 C446,515 458,520 472,518" fill="none" stroke="#2B1E29" stroke-width="1.2" />
          <path d="M542,500 C554,512 566,518 576,512" fill="none" stroke="#2B1E29" stroke-width="1.2" />
        </g>

        <!-- Boy Head & Authentic Tousled Anime Hair (Tilted upward gazing at girl) -->
        <g id="boy-head">
          <!-- Slanted Neck -->
          <path d="M486,380 C484,396 482,410 480,418 C496,420 510,420 518,416 C514,402 510,392 506,380 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.5" />

          <!-- Face Profile (Tilted upward ~18°, looking left towards girl) -->
          <path d="M490,340 
                   C480,344 470,352 466,360 
                   C462,367 465,374 470,380 
                   C476,386 486,389 494,388 
                   C502,385 508,377 510,366 
                   C510,352 504,342 490,340 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse cx="478" cy="368" rx="6.5" ry="4.0" fill="var(--character-blush)" filter="url(#blush-soften)" />

          <!-- Eye looking affectionately left and up toward the girl -->
          <path d="M472,352 C476,350 480,351 482,354" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="476" cy="353" r="1.3" fill="#352632" />
          <!-- Eyebrow -->
          <path d="M470,345 C474,343 480,344 483,346" fill="none" stroke="#543C4C" stroke-width="1.2" stroke-linecap="round" />
          <!-- Soft nose profile -->
          <path d="M465,357 C463,359 464,361 466,362" fill="none" stroke="#65495A" stroke-width="1.1" />
          <!-- Sweet gentle smile -->
          <path d="M472,372 C476,374 481,372 483,370" fill="none" stroke="#65495A" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M500,358 C504,355 507,360 506,366 C504,371 500,370 499,367" fill="none" stroke="#65495A" stroke-width="1.2" />

          <!-- Tousled Messy Anime Hair (Natural spiky locks matching frame_01.jpg) -->
          <g id="boy-hair">
            <!-- Solid back of head & crown mass with anime lock peaks -->
            <path d="M470,348 
                     C458,336 462,316 478,308 
                     C484,295 498,292 508,298 
                     C518,292 530,295 536,306 
                     C546,305 556,312 555,326 
                     C560,342 558,365 548,380 
                     C538,392 524,398 514,395 
                     C512,386 512,376 510,368 
                     C506,356 500,348 492,344 
                     C484,340 476,344 470,348 Z" 
                  fill="#423540" stroke="#65495A" stroke-width="1.6" />

            <!-- Messy anime locks and bangs in the breeze -->
            <g id="boy-hair-spikes">
              <!-- Front lock flicking over brow towards girl -->
              <path d="M468,332 C458,340 456,350 464,356 C466,346 472,340 478,336 Z" fill="#382B37" />
              <!-- Second bang lock -->
              <path d="M478,324 C468,334 470,344 478,350 C480,340 486,334 492,330 Z" fill="#382B37" />
              <!-- Temple lock in front of ear -->
              <path d="M490,344 C486,354 485,364 488,367 C490,360 493,354 495,350 Z" fill="#382B37" />
              
              <!-- Crown tufts spiking in the sunset wind -->
              <path d="M498,296 C505,302 510,312 508,320" fill="none" stroke="#564554" stroke-width="1.3" />
              <path d="M524,296 C528,304 532,314 530,322" fill="none" stroke="#564554" stroke-width="1.3" />
              <path d="M542,310 C548,318 550,328 546,335" fill="none" stroke="#564554" stroke-width="1.3" />
              <!-- Nape flick -->
              <path d="M542,378 C548,375 554,368 556,360" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
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
      const gBreathScale = 1.0 + breathCycle * 0.006;
      this.girlTorso.setAttribute('transform', `scale(1, ${gBreathScale}) translate(0, ${-breathCycle * 0.5})`);
    }

    // 2. Girl head gentle drift
    if (this.girlHead) {
      const gTilt = Math.sin(time * 0.8) * 0.8;
      this.girlHead.setAttribute('transform', `rotate(${gTilt}, 150, 275)`);
    }

    // 3. Occasional tiny movement in the loose hair strand
    if (this.girlStrand) {
      // Resting sway with gentle organic puffs
      const strandSway = Math.sin(time * 2.4) * 1.6 + Math.sin(time * 5.1) * 0.8;
      this.girlStrand.setAttribute('transform', `rotate(${strandSway}, 165, 235)`);
    }

    // 4. Girl ruffle cloth soft flutter
    if (this.girlRuffle) {
      const ruffleFlutter = Math.sin(time * 2.2) * 0.9;
      this.girlRuffle.setAttribute('transform', `rotate(${ruffleFlutter}, 145, 300) scale(1, ${1 + ruffleFlutter * 0.004})`);
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
      this.girlEye.setAttribute('transform', `translate(187, 237) scale(1, ${Math.max(0.1, eyeScaleY)}) translate(-187, -237)`);
    }

    // 6. Subtle cheek blush warmth breathing
    if (this.girlBlush) {
      const blushOpacity = 0.65 + Math.sin(time * 1.45) * 0.08;
      this.girlBlush.setAttribute('opacity', blushOpacity.toFixed(2));
    }

    // 7. Boy breathing cycle
    if (this.boyTorso) {
      const bBreathScale = 1.0 + breathCycle * 0.007;
      this.boyTorso.setAttribute('transform', `scale(1, ${bBreathScale}) translate(0, ${-breathCycle * 0.5})`);
    }

    // 8. Boy head tilt upward gazing at woman
    if (this.boyHead) {
      const bTilt = Math.sin(time * 0.75 + 0.4) * 0.8;
      this.boyHead.setAttribute('transform', `rotate(${bTilt}, 494, 388)`);
    }

    // 9. Boy hair tufts in the breeze
    if (this.boyHairSpikes) {
      const spikeSway = Math.sin(time * 2.8 + 0.3) * 1.4 + Math.cos(time * 5.4) * 0.6;
      this.boyHairSpikes.setAttribute('transform', `rotate(${spikeSway}, 490, 310)`);
    }

    // 10. Boy jacket subtle flutter in sunset breeze
    if (this.boyJacketLeft) {
      const jFlutterL = Math.sin(time * 2.1) * 0.9;
      this.boyJacketLeft.setAttribute('transform', `rotate(${jFlutterL}, 468, 418)`);
    }
    if (this.boyJacketRight) {
      const jFlutterR = Math.sin(time * 2.3 + 0.3) * 0.8;
      this.boyJacketRight.setAttribute('transform', `rotate(${jFlutterR}, 530, 416)`);
    }
  }
}

