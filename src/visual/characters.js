/**
 * Characters Vector Layer
 * High-fidelity anime vectors recreating the girl and boy from the reference animation.
 * Features true anatomical anime posing:
 * - Girl: Seated on car roof with horizontal thighs, knees bent over roof rim, dangling shins, 
 *   arm braced back on roof, front hand on knee, flared off-the-shoulder ruffled capelet.
 * - Boy: Relaxed anime silhouette, upward-tilted profile looking at girl, tousled locks, 
 *   tailored blazer with notch lapels, white shirt open at collar, hands in pockets.
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
          <stop offset="0%" stop-color="#FFF4EB" />
          <stop offset="70%" stop-color="#FEE8D6" />
          <stop offset="100%" stop-color="#F4D0B5" />
        </linearGradient>

        <linearGradient id="girl-cream-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FAF1E6" />
          <stop offset="55%" stop-color="#F4D6AF" />
          <stop offset="100%" stop-color="#DEC097" />
        </linearGradient>

        <linearGradient id="girl-collar-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#FCEDE1" />
          <stop offset="65%" stop-color="#F5D7B2" />
          <stop offset="100%" stop-color="#E2C19A" />
        </linearGradient>

        <linearGradient id="boy-suit-fabric" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#544452" />
          <stop offset="45%" stop-color="#443742" />
          <stop offset="100%" stop-color="#322631" />
        </linearGradient>

        <linearGradient id="boy-trouser-fabric" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#423440" />
          <stop offset="100%" stop-color="#2B1E29" />
        </linearGradient>
      </defs>

      <!-- ==================================================== -->
      <!-- 1. GIRL (Sitting on Car Roof, Facing Right)          -->
      <!-- ==================================================== -->
      <g id="char-girl" filter="url(#ink-wobble-filter)">
        
        <!-- Seated Lower Body & Dangling Legs -->
        <g id="girl-lower-body">
          <!-- Seated Hips & Horizontal Thighs on Car Roof -->
          <path d="M74,428 
                   C66,396 84,364 116,360 
                   C146,358 172,374 192,398 
                   C205,418 214,432 210,442 
                   C204,446 130,446 74,442 Z" 
                fill="url(#girl-cream-fabric)" stroke="#65495A" stroke-width="1.8" />

          <!-- Background Leg (Right leg: knee bends at roof rim, shin dangles down) -->
          <g id="girl-leg-back">
            <!-- Thigh to knee bend -->
            <path d="M142,425 C160,422 178,426 195,438 C198,446 195,455 190,460 C175,450 155,446 138,442 Z" 
                  fill="#DFC097" />
            <!-- Dangling shin -->
            <path d="M192,442 
                     C196,470 198,510 195,548 
                     C194,562 188,568 180,568 
                     C172,566 170,550 172,518 
                     C174,482 178,458 182,442 Z" 
                  fill="#DFC097" stroke="#65495A" stroke-width="1.6" />
            <!-- Back shoe -->
            <ellipse cx="186" cy="572" rx="14" ry="8" transform="rotate(15, 186, 572)" fill="#DBC6B0" stroke="#65495A" stroke-width="1.5" />
            <path d="M176,577 C186,581 196,578 200,574" fill="none" stroke="#543C4C" stroke-width="1.5" />
          </g>

          <!-- Foreground Leg (Left leg: draped cream fabric curving over knee and dangling) -->
          <g id="girl-leg-front">
            <!-- Knee bend curving smoothly over car roof edge (x: 200 - 225, y: 425 - 460) -->
            <path d="M152,422 
                     C178,418 208,424 222,440 
                     C228,452 225,472 220,505 
                     C214,545 208,572 198,576 
                     C188,578 185,558 188,522 
                     C192,482 196,456 190,440 
                     C182,434 165,432 152,432 Z" 
                  fill="url(#girl-cream-fabric)" stroke="#65495A" stroke-width="1.8" />

            <!-- Soft fluid creases draping over knee and down shin -->
            <path d="M198,436 C210,445 214,472 210,518 C206,548 202,568 198,572" fill="none" stroke="#65495A" stroke-width="1.3" />
            <path d="M188,446 C198,456 200,488 198,525 C196,550 192,565 190,568" fill="none" stroke="#65495A" stroke-width="1.0" />
            <path d="M174,432 C185,434 198,440 205,450" fill="none" stroke="#65495A" stroke-width="1.2" />

            <!-- Front shoe -->
            <ellipse cx="204" cy="580" rx="16" ry="9" transform="rotate(18, 204, 580)" fill="#F4D6AF" stroke="#65495A" stroke-width="1.6" />
            <path d="M192,586 C204,591 214,588 219,582" fill="none" stroke="#543C4C" stroke-width="1.8" />
          </g>
        </g>

        <!-- Torso, Arms & Off-The-Shoulder Ruffle Capelet -->
        <g id="girl-torso">
          <!-- Back Arm: straight down, leaning back on car roof -->
          <path d="M96,335 C88,360 76,392 72,425 L86,427 C90,396 98,368 108,342 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />
          <!-- Hand resting flat on car roof -->
          <path d="M68,425 C58,432 64,442 74,442 C84,442 88,434 86,425 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.5" />

          <!-- Bodice / Waist -->
          <path d="M98,320 C95,344 98,368 102,384 C122,386 148,382 160,376 C158,354 154,332 150,316 Z" 
                fill="url(#girl-cream-fabric)" stroke="#65495A" stroke-width="1.6" />

          <!-- Foreground Arm: hangs down gracefully, hand resting on her knee/lap -->
          <path d="M148,332 C158,358 168,388 176,424 C178,434 172,440 164,438 C158,436 156,426 154,415 C148,382 142,352 138,332 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />
          <!-- Hand resting on knee -->
          <path d="M165,426 C172,430 178,436 174,442 C168,446 162,442 160,435 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.4" />

          <!-- Flared Off-The-Shoulder Ruffled Capelet (Poncho collar) -->
          <g id="girl-ruffle">
            <!-- Smooth bell-shaped capelet covering shoulders & chest -->
            <path d="M84,286 
                     C104,278 144,276 178,290 
                     C196,318 205,348 198,360 
                     C186,364 168,358 152,360 
                     C136,362 120,358 106,360 
                     C92,362 78,358 68,350 
                     C64,330 70,305 84,286 Z" 
                  fill="url(#girl-collar-fabric)" stroke="#65495A" stroke-width="1.8" />

            <!-- Radial pleat creases flowing outward from neckline -->
            <path d="M104,282 L82,352" stroke="#65495A" stroke-width="1.3" />
            <path d="M122,280 L112,356" stroke="#65495A" stroke-width="1.3" />
            <path d="M142,280 L145,358" stroke="#65495A" stroke-width="1.3" />
            <path d="M162,284 L178,356" stroke="#65495A" stroke-width="1.3" />
          </g>
        </g>

        <!-- Girl Head & Hair (Breathes and tilts) -->
        <g id="girl-head">
          <!-- Slender Graceful Neck -->
          <path d="M126,254 C128,270 130,285 132,294 C138,294 146,292 150,288 C148,272 146,256 142,252 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.4" />

          <!-- Face Profile Shape -->
          <path d="M132,216 
                   C145,216 158,225 164,238 
                   C167,244 168,250 165,256 
                   C162,260 158,264 155,268 
                   C148,276 138,278 132,276 
                   C122,272 120,260 120,246 
                   C120,232 124,220 132,216 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse cx="154" cy="254" rx="6.5" ry="4" fill="var(--character-blush)" filter="url(#blush-soften)" />

          <!-- Facial Features -->
          <!-- Eye looking right toward boy -->
          <path d="M154,240 C157,238 160,239 162,242" fill="none" stroke="#543C4C" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="158" cy="242" r="1.3" fill="#423540" />
          <!-- Eyebrow -->
          <path d="M152,234 C156,232 160,233 163,235" fill="none" stroke="#65495A" stroke-width="1.1" stroke-linecap="round" />
          <!-- Nose tip -->
          <path d="M166,246 C167,248 166,250 164,251" fill="none" stroke="#65495A" stroke-width="1.1" />
          <!-- Warm sweet smile -->
          <path d="M156,258 C160,260 164,258 165,256" fill="none" stroke="#65495A" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M130,246 C127,244 125,250 127,256 C129,260 133,260 134,256" fill="none" stroke="#65495A" stroke-width="1.2" />

          <!-- Hair System (Dark plum anime hair with low bun) -->
          <g id="girl-hair">
            <!-- Full Back Hair Volume -->
            <path d="M130,212 
                     C108,214 92,232 94,258 
                     C96,274 108,285 124,285 
                     C126,272 132,258 136,248 
                     C140,232 146,222 154,217 
                     C146,213 136,211 130,212 Z" 
                  fill="#423540" stroke="#65495A" stroke-width="1.6" />

            <!-- Low Bun at Nape of Neck -->
            <g id="girl-bun">
              <ellipse cx="94" cy="260" rx="14" ry="12" fill="#3A2C37" stroke="#65495A" stroke-width="1.6" />
              <path d="M88,252 C94,256 100,264 98,270" fill="none" stroke="#5C4757" stroke-width="1.3" />
            </g>

            <!-- Front Bangs & Loose Tendril Curling in Breeze -->
            <g id="girl-hair-strand">
              <!-- Rounded forehead fringe -->
              <path d="M132,212 C142,216 152,226 156,236 C148,232 140,228 132,224 Z" fill="#423540" />
              <!-- Tendril curving into wind -->
              <path d="M142,238 C148,232 158,230 166,234" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
            </g>
          </g>
        </g>
      </g>

      <!-- ==================================================== -->
      <!-- 2. BOY (Standing on right near railing, facing left) -->
      <!-- ==================================================== -->
      <g id="char-boy" filter="url(#ink-wobble-filter)">
        
        <!-- Tailored Suit Trousers & Legs -->
        <g id="boy-legs">
          <!-- Left Leg (Front) -->
          <path d="M482,578 
                   C478,620 475,668 472,720 
                   L512,720 
                   C515,670 514,626 512,578 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Right Leg (Back) -->
          <path d="M516,578 
                   C520,620 526,668 532,720 
                   L570,720 
                   C560,670 554,624 548,578 Z" 
                fill="url(#boy-trouser-fabric)" stroke="#382B36" stroke-width="1.8" />

          <!-- Center Crease Lines -->
          <line x1="492" y1="588" x2="489" y2="718" stroke="#2B1F29" stroke-width="1.2" />
          <line x1="538" y1="588" x2="548" y2="718" stroke="#2B1F29" stroke-width="1.2" />
        </g>

        <!-- Torso, Shirt & Suit Jacket -->
        <g id="boy-torso">
          <!-- White Collared Dress Shirt -->
          <path d="M468,410 
                   C480,408 504,406 524,410 
                   C518,455 508,515 498,575 
                   C484,572 470,570 455,568 
                   C458,515 463,460 468,410 Z" 
                fill="#FAF4ED" stroke="#65495A" stroke-width="1.4" />

          <!-- Open Spread Collar Wings -->
          <polygon points="484,406 470,432 490,424" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          <polygon points="506,406 520,432 500,424" fill="#FFFFFF" stroke="#65495A" stroke-width="1.4" />
          
          <!-- Shirt placket & buttons -->
          <line x1="490" y1="428" x2="478" y2="565" stroke="#D5C5B8" stroke-width="1.2" />
          <circle cx="488" cy="452" r="1.4" fill="#65495A" />
          <circle cx="484" cy="484" r="1.4" fill="#65495A" />
          <circle cx="480" cy="518" r="1.4" fill="#65495A" />

          <!-- Suit Jacket Left Flap & Arm -->
          <g id="boy-jacket-left">
            <path d="M464,414 
                     C448,424 434,464 424,512 
                     C418,542 422,572 440,578 
                     C452,580 460,558 464,532 
                     C472,482 478,442 480,414 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Notched Lapel Left -->
            <path d="M470,416 L454,476 L473,473 L460,542" fill="none" stroke="#2E212D" stroke-width="1.5" />
          </g>

          <!-- Suit Jacket Right Flap, Arm & Hand in Pocket -->
          <g id="boy-jacket-right">
            <path d="M524,412 
                     C550,422 573,458 580,508 
                     C584,538 573,566 556,572 
                     C544,576 534,552 526,522 
                     C516,478 512,442 510,412 Z" 
                  fill="url(#boy-suit-fabric)" stroke="#382B36" stroke-width="1.8" />

            <!-- Hand in Trouser Pocket -->
            <path d="M542,560 C550,566 556,573 548,578 C538,580 532,570 534,562 Z" 
                  fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.4" />
            <!-- Notched Lapel Right -->
            <path d="M516,414 L530,473 L514,470 L522,532" fill="none" stroke="#2E212D" stroke-width="1.5" />
          </g>

          <!-- Fabric folds -->
          <path d="M454,494 C466,510 478,516 493,514" fill="none" stroke="#2B1E29" stroke-width="1.2" />
          <path d="M518,490 C530,504 542,512 553,508" fill="none" stroke="#2B1E29" stroke-width="1.2" />
        </g>

        <!-- Boy Head & Authentic Tousled Anime Hair -->
        <g id="boy-head">
          <!-- Slanted Neck -->
          <path d="M480,378 C478,394 476,406 474,414 C490,416 504,416 512,412 C508,400 504,390 500,378 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.5" />

          <!-- Face Profile (Tilted upward, looking left towards girl) -->
          <path d="M484,338 
                   C476,341 466,348 463,355 
                   C460,362 462,368 466,374 
                   C471,380 480,384 488,383 
                   C496,381 502,374 504,364 
                   C504,352 498,342 484,338 Z" 
                fill="url(#anime-skin-soft)" stroke="#65495A" stroke-width="1.6" />

          <!-- Soft Warm Peach Blush -->
          <ellipse cx="472" cy="364" rx="6" ry="3.8" fill="var(--character-blush)" filter="url(#blush-soften)" />

          <!-- Eye looking affectionately left and up -->
          <path d="M468,350 C471,348 474,349 475,352" fill="none" stroke="#423540" stroke-width="1.8" stroke-linecap="round" />
          <circle cx="472" cy="351" r="1.3" fill="#352632" />
          <!-- Eyebrow -->
          <path d="M466,343 C470,341 475,342 477,344" fill="none" stroke="#543C4C" stroke-width="1.2" stroke-linecap="round" />
          <!-- Soft nose profile -->
          <path d="M462,354 C460,356 461,358 463,359" fill="none" stroke="#65495A" stroke-width="1.1" />
          <!-- Sweet gentle smile -->
          <path d="M468,368 C472,370 476,368 478,366" fill="none" stroke="#65495A" stroke-width="1.3" stroke-linecap="round" />

          <!-- Ear -->
          <path d="M494,354 C498,351 501,356 500,362 C498,367 494,366 493,363" fill="none" stroke="#65495A" stroke-width="1.2" />

          <!-- Tousled Anime Hair System (Continuous organic silhouette matching reference) -->
          <g id="boy-hair">
            <!-- Solid back of head & crown hair mass with natural anime locks -->
            <path d="M464,346 
                     C456,334 466,316 480,310 
                     C486,298 498,296 506,302 
                     C514,296 524,298 528,308 
                     C536,306 544,312 542,324 
                     C548,338 546,360 538,375 
                     C530,388 518,394 508,392 
                     C506,384 506,374 504,366 
                     C502,355 496,346 488,342 
                     C480,338 472,342 464,346 Z" 
                  fill="#423540" stroke="#65495A" stroke-width="1.6" />

            <!-- Forehead bangs falling naturally -->
            <g id="boy-hair-spikes">
              <!-- Front lock curving over brow -->
              <path d="M462,330 C456,338 458,346 464,352 C464,344 468,338 472,334 Z" fill="#382B37" />
              <!-- Second bang strand -->
              <path d="M472,324 C466,334 468,342 474,348 C476,340 480,334 484,330 Z" fill="#382B37" />
              <!-- Crown tuft accent lines -->
              <path d="M496,302 C502,308 506,316 504,324" fill="none" stroke="#564554" stroke-width="1.2" />
              <path d="M518,304 C522,310 526,318 524,326" fill="none" stroke="#564554" stroke-width="1.2" />
              <!-- Nape flick -->
              <path d="M532,374 C538,372 542,366 544,358" fill="none" stroke="#423540" stroke-width="2.2" stroke-linecap="round" />
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

    this.boyHead = this.group.querySelector('#boy-head');
    this.boyHairSpikes = this.group.querySelector('#boy-hair-spikes');
    this.boyJacketLeft = this.group.querySelector('#boy-jacket-left');
    this.boyJacketRight = this.group.querySelector('#boy-jacket-right');
    this.boyTorso = this.group.querySelector('#boy-torso');
  }

  update(time) {
    const breathCycle = Math.sin(time * 1.45);

    // Girl subtle breathing & posture sway
    if (this.girlTorso) {
      const gBreathScale = 1.0 + breathCycle * 0.008;
      this.girlTorso.setAttribute('transform', `scale(1, ${gBreathScale}) translate(0, ${-breathCycle * 0.6})`);
    }

    // Girl head tilt
    if (this.girlHead) {
      const gTilt = Math.sin(time * 0.9) * 1.4;
      this.girlHead.setAttribute('transform', `rotate(${gTilt}, 132, 276)`);
    }

    // Girl hair loose strand sway
    if (this.girlStrand) {
      const strandSway = Math.sin(time * 3.2) * 2.8 + Math.sin(time * 5.7) * 1.2;
      this.girlStrand.setAttribute('transform', `rotate(${strandSway}, 142, 230)`);
    }

    // Girl ruffle cloth flutter
    if (this.girlRuffle) {
      const ruffleFlutter = Math.sin(time * 2.8) * 1.5;
      this.girlRuffle.setAttribute('transform', `rotate(${ruffleFlutter}, 130, 280) scale(1, ${1 + ruffleFlutter * 0.006})`);
    }

    // Boy breathing cycle
    if (this.boyTorso) {
      const bBreathScale = 1.0 + breathCycle * 0.009;
      this.boyTorso.setAttribute('transform', `scale(1, ${bBreathScale}) translate(0, ${-breathCycle * 0.7})`);
    }

    // Boy head tilt
    if (this.boyHead) {
      const bTilt = Math.sin(time * 0.85 + 0.5) * 1.2;
      this.boyHead.setAttribute('transform', `rotate(${bTilt}, 488, 383)`);
    }

    // Boy hair tufts in the wind
    if (this.boyHairSpikes) {
      const spikeSway = Math.sin(time * 3.5 + 0.3) * 2.0 + Math.cos(time * 6.1) * 1.0;
      this.boyHairSpikes.setAttribute('transform', `rotate(${spikeSway}, 485, 310)`);
    }

    // Boy jacket flutter in sunset breeze
    if (this.boyJacketLeft) {
      const jFlutterL = Math.sin(time * 2.4) * 1.2;
      this.boyJacketLeft.setAttribute('transform', `rotate(${jFlutterL}, 464, 414)`);
    }
    if (this.boyJacketRight) {
      const jFlutterR = Math.sin(time * 2.6 + 0.4) * 1.0;
      this.boyJacketRight.setAttribute('transform', `rotate(${jFlutterR}, 524, 412)`);
    }
  }
}
