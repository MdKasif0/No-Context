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
          <path d="M68,432 
                   C64,408 85,392 116,390 
                   C148,388 190,402 212,425 
                   C228,438 238,455 236,482 
                   C232,518 226,562 218,605 
                   C212,615 198,614 190,605 
                   C184,580 182,540 184,495 
                   C185,460 178,446 165,442 
                   C145,438 105,436 68,432 Z" 
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
            <path d="M214,444 C224,458 228,495 224,545 C220,580 215,604 210,610" fill="none" stroke="#4A3744" stroke-width="1.3" />
            <path d="M202,452 C210,470 212,510 210,555 C208,584 204,602 200,606" fill="none" stroke="#4A3744" stroke-width="1.1" />
            <path d="M185,438 C198,442 212,448 222,458" fill="none" stroke="#4A3744" stroke-width="1.2" />

            <!-- Rounded shoe resting gracefully right above the side mirror (x: 215 - 245, y: 608 - 624) -->
            <ellipse cx="225" cy="614" rx="16" ry="8.5" transform="rotate(18, 225, 614)" fill="#EDE0CF" stroke="#4A3744" stroke-width="1.6" />
            <path d="M214,619 C225,624 235,621 240,616" fill="none" stroke="#44323E" stroke-width="1.8" />
          </g>
        </g>

        <!-- Torso, Arm Supporting Body & Off-The-Shoulder Ruffle Capelet -->
        <g id="girl-torso">
          <!-- Arm supporting body: goes straight down, hand flat on car roof edge (matching girl_body.jpg) -->
          <path d="M146,346 C148,375 150,405 148,432 L136,432 C138,405 136,375 134,346 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />
          <!-- Hand planted flat on car roof edge with fingers curving over rim -->
          <path d="M134,432 C132,436 136,442 146,442 C156,442 160,436 158,432 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.5" />
          <!-- Finger division creases -->
          <line x1="142" y1="434" x2="142" y2="441" stroke="#4A3744" stroke-width="0.9" />
          <line x1="149" y1="434" x2="149" y2="441" stroke="#4A3744" stroke-width="0.9" />

          <!-- Bodice / Waist -->
          <path d="M96,335 C94,358 98,380 104,398 C124,400 154,395 168,388 C165,365 160,344 156,330 Z" 
                fill="url(#girl-cream-fabric)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Flared Off-The-Shoulder Ruffled Capelet (Folded boatneck collar + flared ruffle) -->
          <g id="girl-ruffle">
            <!-- Folded upper collar band around neckline -->
            <path d="M116,278 C135,274 160,274 182,282 L180,294 C158,286 135,286 114,290 Z" 
                  fill="#F8EFE4" stroke="#4A3744" stroke-width="1.4" />

            <!-- Bell-shaped flared ruffle capelet (y: 288 - 355) -->
            <path d="M78,332 
                     C95,306 122,288 150,284 
                     C165,282 178,288 184,305 
                     C194,324 196,342 186,350 
                     C174,356 152,358 132,358 
                     C112,358 92,356 78,348 
                     C70,344 72,338 78,332 Z" 
                  fill="url(#girl-collar-fabric)" stroke="#4A3744" stroke-width="1.8" />

            <!-- Radial vertical pleat creases down the ruffle capelet -->
            <path d="M98,312 L84,345" stroke="#4A3744" stroke-width="1.3" />
            <path d="M120,296 L112,354" stroke="#4A3744" stroke-width="1.3" />
            <path d="M144,292 L142,356" stroke="#4A3744" stroke-width="1.3" />
            <path d="M166,298 L172,350" stroke="#4A3744" stroke-width="1.3" />
          </g>
        </g>

        <!-- Girl Head & Hair (Breathes and tilts - exact girl_crop.jpg coordinates) -->
        <g id="girl-head">
          <!-- Slender Graceful Neck (Short 18px neck leaning forward ~15°) -->
          <path d="M156,258 C155,268 152,276 148,282 C158,284 168,282 174,278 C176,270 178,262 180,256 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.4" />

          <!-- Face Profile Shape (Leaning forward, sweet anime profile facing right) -->
          <path d="M168,202 
                   C185,204 198,210 206,218 
                   C211,224 213,230 212,236 
                   C208,242 205,246 206,248 
                   C205,254 200,258 194,258 
                   C182,260 172,256 166,246 
                   C158,236 158,218 168,202 Z" 
                fill="url(#anime-skin-soft)" stroke="#4A3744" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse id="girl-blush" cx="190" cy="236" rx="7.5" ry="4.5" fill="#F3A688" opacity="0.70" filter="url(#blush-soften)" />

          <!-- Facial Features -->
          <!-- Eye looking right toward boy with micro-blink -->
          <g id="girl-eye">
            <path d="M194,226 C197,224 200,225 202,228" fill="none" stroke="#3A2C37" stroke-width="1.8" stroke-linecap="round" />
            <circle cx="197" cy="228" r="1.3" fill="#2E212B" />
          </g>
          <!-- Eyebrow -->
          <path d="M192,218 C196,216 200,217 204,219" fill="none" stroke="#4A3744" stroke-width="1.1" stroke-linecap="round" />
          <!-- Dainty upturned nose tip -->
          <path d="M211,228 C213,230 212,232 210,233" fill="none" stroke="#4A3744" stroke-width="1.1" />
          <!-- Sweet gentle smile line -->
          <path d="M198,240 C202,242 206,240 207,238" fill="none" stroke="#4A3744" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M165,236 C162,234 160,240 162,246 C164,250 168,250 169,246" fill="none" stroke="#4A3744" stroke-width="1.2" />

          <!-- Hair System (Dark muted gray/plum anime hair with low bun) -->
          <g id="girl-hair">
            <!-- Full Back Hair Volume & Crown Silhouette -->
            <path d="M165,198 
                     C138,198 118,212 116,234 
                     C114,248 124,260 140,262 
                     C144,252 152,240 160,232 
                     C168,220 176,210 186,206 
                     C178,202 171,198 165,198 Z" 
                  fill="#47404A" stroke="#352834" stroke-width="1.6" />

            <!-- Low Bun at Nape of Neck (matching girl_crop.jpg) -->
            <g id="girl-bun">
              <ellipse cx="118" cy="238" rx="16" ry="14" fill="#3D3640" stroke="#352834" stroke-width="1.6" />
              <path d="M110,230 C118,234 124,242 122,250" fill="none" stroke="#544B57" stroke-width="1.4" />
              <!-- Hair tie detail -->
              <path d="M128,228 C130,236 129,246 126,252" fill="none" stroke="#2B1F2A" stroke-width="1.5" />
            </g>

            <!-- Front Bangs & Distinct Antenna Wisp (matching girl_crop.jpg) -->
            <g id="girl-hair-strand">
              <!-- Rounded forehead fringe arching over temple -->
              <path d="M165,198 C176,202 188,212 195,220 C186,218 176,214 166,210 Z" fill="#47404A" />
              <!-- Distinct stray antenna wisp sticking out horizontally to right -->
              <path d="M185,192 C202,190 222,192 228,195 C222,200 210,202 198,202" fill="none" stroke="#3D3640" stroke-width="1.6" stroke-linecap="round" />
              <path d="M182,214 C192,216 200,222 204,228" fill="none" stroke="#3D3640" stroke-width="1.2" stroke-linecap="round" />
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
          <path d="M468,575 
                   C464,615 460,665 456,720 
                   L496,720 
                   C500,665 500,615 498,575 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Right Leg (Back) -->
          <path d="M502,575 
                   C506,615 512,665 518,720 
                   L556,720 
                   C546,665 540,615 534,575 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Center Pressed Crease Lines -->
          <line x1="478" y1="585" x2="474" y2="718" stroke="#2B1F29" stroke-width="1.2" />
          <line x1="524" y1="585" x2="534" y2="718" stroke="#2B1F29" stroke-width="1.2" />
        </g>

        <!-- Torso, Shirt & Suit Jacket (Hands tucked in trouser pockets) -->
        <g id="boy-torso">
          <!-- White Collared Dress Shirt (y: 405 - 575) -->
          <path d="M472,408 
                   C486,405 510,404 528,408 
                   C522,450 514,510 504,575 
                   C492,573 478,571 465,570 
                   C468,515 470,455 472,408 Z" 
                fill="#FAF4ED" stroke="#65495A" stroke-width="1.4" />

          <!-- Open Spread Collar Wings framing neck (y: 395 - 425) -->
          <polygon points="484,396 468,422 490,414" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          <polygon points="508,396 524,422 502,414" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          
          <!-- Shirt placket & buttons -->
          <line x1="492" y1="420" x2="482" y2="570" stroke="#D5C5B8" stroke-width="1.2" />
          <circle cx="490" cy="445" r="1.4" fill="#65495A" />
          <circle cx="486" cy="480" r="1.4" fill="#65495A" />
          <circle cx="483" cy="515" r="1.4" fill="#65495A" />

          <!-- Suit Jacket Left Arm & Flap (Hand tucked inside pocket!) -->
          <g id="boy-jacket-left">
            <!-- Left arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M466,412 
                     C446,424 428,465 418,515 
                     C412,544 422,562 448,565 
                     C460,566 468,548 472,525 
                     C478,478 482,442 482,412 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Left -->
            <path d="M470,414 L452,470 L472,467 L460,530" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit -->
            <line x1="446" y1="555" x2="464" y2="553" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Suit Jacket Right Arm & Flap (Hand tucked inside pocket! Elbow bends back) -->
          <g id="boy-jacket-right">
            <!-- Right arm bends at elbow flaring out, hand tucked inside pocket -->
            <path d="M526,410 
                     C554,422 574,464 578,515 
                     C582,545 570,565 548,568 
                     C534,570 526,548 520,522 
                     C514,476 512,442 510,410 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Right -->
            <path d="M516,412 L530,468 L512,465 L520,526" fill="none" stroke="#2E212D" stroke-width="1.5" />
            <!-- Pocket slit -->
            <line x1="530" y1="558" x2="548" y2="556" stroke="#251923" stroke-width="2.2" stroke-linecap="round" />
          </g>

          <!-- Fabric folds around elbows -->
          <path d="M432,498 C444,510 456,515 468,512" fill="none" stroke="#2B1E29" stroke-width="1.2" />
          <path d="M538,495 C550,508 562,514 572,508" fill="none" stroke="#2B1E29" stroke-width="1.2" />
        </g>

        <!-- Boy Head & Authentic Tousled Anime Hair (Tilted upward gazing at girl - boy_crop.jpg) -->
        <g id="boy-head">
          <!-- Slanted Neck (slender 16px neck y: 375 - 395) -->
          <path d="M486,375 C484,385 482,392 480,396 C496,398 506,398 512,395 C508,388 506,380 504,375 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.5" />

          <!-- Face Profile (Tilted upward ~15°, looking left towards girl) -->
          <path d="M484,330 
                   C476,334 468,340 466,346 
                   C464,352 468,358 472,363 
                   C476,368 484,371 492,370 
                   C498,368 504,361 506,352 
                   C506,341 500,332 484,330 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse cx="478" cy="354" rx="6.5" ry="4.0" fill="var(--character-blush)" filter="url(#blush-soften)" />

          <!-- Eye looking affectionately left and up toward the girl -->
          <path d="M474,340 C478,338 482,339 484,342" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="478" cy="341" r="1.3" fill="#352632" />
          <!-- Eyebrow -->
          <path d="M472,333 C476,331 482,332 485,334" fill="none" stroke="#543C4C" stroke-width="1.2" stroke-linecap="round" />
          <!-- Soft nose profile -->
          <path d="M466,344 C464,346 465,348 467,349" fill="none" stroke="#65495A" stroke-width="1.1" />
          <!-- Sweet gentle smile -->
          <path d="M474,356 C478,358 482,356 484,354" fill="none" stroke="#65495A" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M498,344 C502,341 505,346 504,352 C502,357 498,356 497,353" fill="none" stroke="#65495A" stroke-width="1.2" />

          <!-- Tousled Messy Anime Hair (Matching boy_crop.jpg: compact shaggy cut with crown tufts) -->
          <g id="boy-hair">
            <!-- Solid hair mass with natural anime locks -->
            <path d="M468,334 
                     C458,322 464,304 478,296 
                     C484,285 496,282 506,286 
                     C516,282 526,284 532,292 
                     C540,292 546,298 545,310 
                     C548,322 546,342 538,356 
                     C530,366 520,372 510,370 
                     C508,362 506,354 504,348 
                     C500,338 494,332 486,328 
                     C480,326 474,330 468,334 Z" 
                  fill="#423540" stroke="#65495A" stroke-width="1.6" />

            <!-- Messy anime locks and crown tufts (matching boy_crop.jpg) -->
            <g id="boy-hair-spikes">
              <!-- Front lock flicking over brow towards girl -->
              <path d="M466,318 C456,326 454,336 462,342 C464,332 470,326 476,322 Z" fill="#382B37" />
              <!-- Second bang lock -->
              <path d="M476,310 C466,320 468,330 476,336 C478,326 484,320 490,316 Z" fill="#382B37" />
              <!-- Temple lock in front of ear -->
              <path d="M486,330 C482,340 481,350 484,353 C486,346 489,340 491,336 Z" fill="#382B37" />
              
              <!-- Crown tuft 1: flicking up-left (matching boy_crop.jpg) -->
              <path d="M492,284 C496,276 504,275 508,282" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
              <!-- Crown tuft 2: flicking up-right (matching boy_crop.jpg) -->
              <path d="M518,282 C524,275 532,278 534,286" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
              <!-- Nape flick -->
              <path d="M532,360 C538,356 542,350 544,344" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
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
      this.girlStrand.setAttribute('transform', `rotate(${strandSway}, 185, 192)`);
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
      this.girlEye.setAttribute('transform', `translate(197, 228) scale(1, ${Math.max(0.1, eyeScaleY)}) translate(-197, -228)`);
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
      this.boyHead.setAttribute('transform', `rotate(${bTilt}, 495, 370)`);
    }

    // 9. Boy hair tufts in the breeze
    if (this.boyHairSpikes) {
      const spikeSway = Math.sin(time * 2.8 + 0.3) * 1.3 + Math.cos(time * 5.4) * 0.5;
      this.boyHairSpikes.setAttribute('transform', `rotate(${spikeSway}, 500, 285)`);
    }

    // 10. Boy jacket subtle flutter in sunset breeze
    if (this.boyJacketLeft) {
      const jFlutterL = Math.sin(time * 2.1) * 0.8;
      this.boyJacketLeft.setAttribute('transform', `rotate(${jFlutterL}, 466, 412)`);
    }
    if (this.boyJacketRight) {
      const jFlutterR = Math.sin(time * 2.3 + 0.3) * 0.7;
      this.boyJacketRight.setAttribute('transform', `rotate(${jFlutterR}, 526, 410)`);
    }
  }
}

