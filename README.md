# Romantic Sunset Anime Animation — Procedural 1:1 Engine

A responsive, procedural 1:1 anime animation engine built from scratch using pure **HTML5, CSS3, JavaScript ES modules, SVG vector layers, and HTML5 Canvas**. 

Everything visual is generated procedurally from vector paths, organic Bezier curves, layered gradient meshes, SVG displacement filters, and procedural canvas noise with **zero raster images or frame traces**.

---

## Technical Specifications

- **Logical Dimensions**: Exactly 720 × 720 pixels
- **Aspect Ratio**: Locked 1:1 square composition (`aspect-ratio: 1 / 1; width: min(84vmin, 720px)`)
- **Target Playback**: 30 FPS deterministic loop (`1/30 = 0.03333s` per frame)
- **Duration**: Exactly 14.98 seconds (449 frames total)
- **Palette**: Warm romantic sunset tones
  - Dominant Sunset Peach/Orange: `#F7BA82`
  - Lighter Warm Peach: `#F8C18F`
  - Pinkish Cloud Tones: `#EFA98A`
  - Deep Muted Plum Foliage & Outlines: `#65495A`
  - Character Dark Suit: `#443742`
  - Warm Cream Dress: `#F4D6AF`
  - Warm Off-White Lyrics: `#FDF8F2`

---

## Architectural Highlights

1. **Layered Environment Vector System (`src/visual/`)**:
   - `sky-clouds.js`: Sunset gradient mesh with two independent drifting horizontal cloud strata bands.
   - `cityscape.js`: Distant apartment towers with procedural lit windows and sinusoidal luminance breathing.
   - `foliage.js`: Slender branching boughs with fine stipple leaf patterns and wind sway kinematics.
   - `railing-car.js`: Detailed rooftop safety railing and vintage cream car body with window reflections and side mirror.
   - `characters.js`: High-fidelity vector artwork for the girl (seated on car roof, ruffled capelet, low bun, cheek blush) and the boy (upward-tilted profile, tousled locks, spread-collar white shirt, tailored dark plum blazer, hands in pockets).
   - `particles.js`: Wind-blown floating petals and glowing dust motes with deterministic sinusoidal wave physics.
   - `lyrics.js`: Screen-space handwriting typography with timed cue markers and soft atmospheric glow filter.

2. **Hand-Drawn Texture & Shading**:
   - `svg-filters.js`: `feTurbulence` + `feDisplacementMap` simulating imperfect hand-drawn ink outlines and watercolor edge dispersion.
   - `paper-texture.js`: Canvas procedural paper fibers and real-time 30 FPS analog film grain jitter.

3. **Camera Coordinator (`src/core/camera.js`)**:
   - Multi-axis pan, zoom, and handheld micro-drift coordinator.
   - Presets for **Master Wide Shot** (`1.00×`), **Girl Close-up** (`1.80×`), **Boy Close-up** (`1.82×`), and **Auto Timeline Track**.

4. **Director HUD & Playback System (`src/core/engine.js`, `index.html`)**:
   - Play/Pause with spacebar shortcut.
   - Timeline scrubber with real-time frame readout (`0 / 449`).
   - Single-frame stepping (`◀ Frame` and `Frame ▶`).
   - Playback speed control (`0.5×`, `1.0×`, `2.0×`).
   - Synchronized audio hook (`audio.mp3`) with mute toggle.
   - Layer visibility inspector pills to isolate individual layers.
   - Live camera telemetry (scale, pan coordinates, active shot).

---

## Getting Started

Run the lightweight zero-cache Python server:

```bash
python3 server.py
```

Then open your browser to:

```
http://localhost:8766
```

### Controls

| Key / Control | Action |
|---|---|
| `Space` | Play / Pause |
| `←` / `→` | Step back / forward 1 frame |
| `Slider` | Scrub timeline anywhere between 0.0s and 14.98s |
| `Camera Dropdown` | Switch between Master Wide, Girl Close-up, Boy Close-up, or Auto Timeline |
| `Speed Dropdown` | Toggle 0.5× slow motion, 1.0× normal, or 2.0× fast |
| `Sound Toggle` | Mute or unmute synchronized soundtrack |
| `Inspector Pills` | Toggle visibility of individual layers or shaders |
