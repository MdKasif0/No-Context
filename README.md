# no context 🌅

> an unreasonably dramatic 1:1 anime sunset rooftop animation that runs entirely in your browser because someone decided an mp4 wasn't complicated enough.

[![License: MIT](https://img.shields.io/badge/license-MIT-purple.svg)](https://opensource.org/licenses/MIT)
[![Pure Vanilla](https://img.shields.io/badge/dependencies-zero-orange.svg)](#under-the-hood)
[![FPS](https://img.shields.io/badge/fps-30%20deterministic-f8c18f.svg)](#under-the-hood)

---

### what even is this?

someone is sitting on the roof of a vintage car at golden hour. someone else is standing by the railing looking painfully contemplative in an oversized dark coat. distant apartment windows flicker on in the purple evening haze. wind blows drifting petals across the sky. lyrics gently fade into existence. feelings happen.

we rebuilt this entire aesthetic experience into pure, lightweight web technology—layered vector artwork, a real-time paper grain canvas shader, smooth organic animations, and sample-accurate audio sync.

no heavy 3d engines. no 500mb `node_modules` black hole. no react reconciliation existential crises. just html, css, svg, javascript, and pure unadulterated longing.

---

### the timeline breakdown

* **0.00s – 4.46s (scene 1: the wide rooftop stare-down)**  
  she is perched sideways on the vehicle roof, dress flowing softly against the metal. he stands near the railing pretending he didn't spend twenty minutes figuring out how to casually put his hands in his pockets. warm peach gradients stretch across the sky, distant apartments light up one by one, and a slender tree sways in the evening breeze.

* **4.47s – 14.98s (scene 2: the abrupt dramatic hard cut)**  
  an immediate hard cut straight to a close portrait of him looking upward toward the evening horizon. suddenly the world is eighty percent warm peach sunset and twenty percent him reflecting on every unresolved conversation he has ever had. glowing petals drift by, and the lyrics float across the sky in timed handwriting.

---

### features that had no business being this detailed

* **1:1 square cinematic frame with rounded edges**  
  contained in an elegant 28px rounded viewport with multi-layered ambient drop shadows, so it floats cleanly on your screen like a living polaroid.

* **pristine extracted character artwork**  
  characters are preserved directly from the original reference animation frames—every hair strand, blush tone, and coat fold is intact (and yes, we painstakingly inpainted the random watermark off his jacket so it is completely invisible).

* **living vector environment**  
  * **procedural sunset sky**: multi-stop peach and orange gradient meshes with drifting cloud strata.
  * **living cityscape**: silhouette towers whose windows gently pulse with warm golden light like someone is working late on a spreadsheet.
  * **floating particles**: wind-blown petals and glowing dust motes governed by smooth sinusoidal wave math.
  * **analog paper texture**: a real-time 30 fps paper grain canvas overlay that makes digital pixels feel like physical watercolor paper.

* **audio that actually respects you**  
  * audio is unmuted and set to full volume by default.
  * if your browser throws a tantrum about unmuted autoplay, a tiny floating pill lets you tap anywhere to wake it up.
  * tapping or clicking anywhere will *never* pause the video—it simply turns on the sound and lets the scene keep rolling.

* **zero interface junk**  
  no scrubbers, no progress bars, no diagnostic overlays, and no watermarks cluttering your view. the mouse cursor even politely fades away if you stop moving it.

---

### controls (for people who refuse to just sit back and watch)

| input | what it does |
|---|---|
| `tap / click anywhere` | wakes up the audio immediately, keeps the animation rolling, refuses to pause |
| `space` | pauses or resumes the drama (if you need a second to process your feelings) |
| `double click` or `F` | enters full-screen mode so your entire monitor turns into a sunset |
| `M` | toggles mute (in case someone walks behind you) |

---

### how to run this locally in 5 seconds

no build steps. no vite. no bundlers. no thirty-minute dependency installations.

1. clone the repository:
   ```bash
   git clone https://github.com/MdKasif0/No-Context.git
   cd "No Context"
   ```

2. start the lightweight zero-cache server:
   ```bash
   python3 server.py
   ```

3. open your browser:
   ```
   http://localhost:8766
   ```

put your headphones on, lean back, and pretend you're on a rooftop overlooking the city in 2004.

---

### under the hood

```
No Context/
├── index.html              # the minimalist fullscreen stage
├── server.py               # lightweight zero-cache local server
├── audio.mp3               # high-fidelity synchronized soundtrack
├── styles/
│   ├── main.css            # rounded 1:1 viewport, smooth drop shadows, clean dark backdrop
│   └── anime-theme.css     # watercolor tint washes and paper textures
├── src/
│   ├── scene.js            # master compositor connecting all visual layers
│   ├── core/
│   │   ├── engine.js       # deterministic 30 fps timeline locked to the audio clock
│   │   └── camera.js       # smooth handheld camera drift coordinator
│   └── visual/
│       ├── sky-clouds.js   # sunset gradient mesh & cloud strata
│       ├── cityscape.js    # evening city skyline with glowing apartment windows
│       ├── foliage.js      # wind-swaying trees and branches
│       ├── railing-car.js  # rooftop railing and vintage car body
│       ├── characters.js   # scene 1 character layer
│       ├── scene2.js       # scene 2 cinematic portrait & backdrop
│       ├── particles.js    # drifting petals and dust motes
│       ├── lyrics.js       # timed floating song lyrics
│       └── paper-texture.js# procedural paper tooth and analog film grain
└── assets/
    ├── female-character.png # pristine extracted artwork (bun, blush, and hair wisp intact)
    └── male-character.png   # pristine extracted artwork (watermark cleanly removed)
```

---

### license & vibes

built with patience, math, and an unreasonable appreciation for golden hour lighting. do whatever you want with it, just don't make the corners square again.
