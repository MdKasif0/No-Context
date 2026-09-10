import { injectSvgFilters } from './visual/svg-filters.js?v=v10';
import { SkyAndCloudsLayer } from './visual/sky-clouds.js?v=v10';
import { CityscapeLayer } from './visual/cityscape.js?v=v10';
import { FoliageLayer } from './visual/foliage.js?v=v10';
import { RailingCarLayer } from './visual/railing-car.js?v=v10';
import { CharactersLayer } from './visual/characters.js?v=v10';
import { ParticlesLayer } from './visual/particles.js?v=v10';
import { LyricsLayer } from './visual/lyrics.js?v=v10';
import { PaperTextureEngine } from './visual/paper-texture.js?v=v10';
import { Camera } from './core/camera.js?v=v10';
import { AnimationEngine } from './core/engine.js?v=v10';

/**
 * Scene Compositor
 * Assembles the full layered environment, paper texture, camera, and animation systems.
 */
export class SceneCompositor {
  constructor(options = {}) {
    this.svg = options.svgElement || document.getElementById('scene-svg');
    this.grainCanvas = options.grainCanvas || document.getElementById('grain-canvas');
    this.audioElement = options.audioElement || document.getElementById('scene-audio');

    // 1. Inject SVG Filters (Turbulence, Displacement, Watercolor, Glow)
    injectSvgFilters(this.svg);

    // 2. Setup Master Camera Group inside the 720x720 coordinate system
    this.cameraGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.cameraGroup.id = 'camera-layer';
    this.svg.appendChild(this.cameraGroup);

    // 3. Initialize Camera System
    this.camera = new Camera(this.cameraGroup, {
      viewportWidth: 720,
      viewportHeight: 720
    });

    // 4. Build Layers in strict depth order
    this.skyClouds = new SkyAndCloudsLayer(this.cameraGroup);
    this.cityscape = new CityscapeLayer(this.cameraGroup);
    this.foliage = new FoliageLayer(this.cameraGroup);
    this.railingCar = new RailingCarLayer(this.cameraGroup);
    this.characters = new CharactersLayer(this.cameraGroup);
    this.particles = new ParticlesLayer(this.cameraGroup, 32);
    this.lyrics = new LyricsLayer(this.svg);

    // 5. Procedural Paper Texture & 30 FPS Film Grain Engine
    this.paperTexture = new PaperTextureEngine(this.grainCanvas, 720, 720);

    // Layer visibility state table
    this.layerToggles = {
      sky: { el: this.skyClouds.group, visible: true },
      city: { el: this.cityscape.group, visible: true },
      foliage: { el: this.foliage.group, visible: true },
      railingCar: { el: this.railingCar.group, visible: true },
      characters: { el: this.characters.group, visible: true },
      particles: { el: this.particles.group, visible: true },
      lyrics: { el: this.lyrics.group, visible: true },
      grain: { el: this.grainCanvas, visible: true },
      wobble: { active: true }
    };

    // 6. Deterministic 30 FPS Animation Engine
    this.engine = new AnimationEngine({
      fps: 30,
      duration: 14.98,
      audioElement: this.audioElement
    });

    // Subscribe scene updates to engine clock
    this.engine.subscribe(this.onEngineTick.bind(this));
  }

  /**
   * Main animation tick (30 FPS deterministic)
   */
  onEngineTick({ time, frame, isPlaying }) {
    if (!this.layerToggles) return;

    // 1. Update Camera
    if (this.camera) {
      this.camera.update(time);
    }

    // 2. Update Sky & Drifting Clouds
    if (this.layerToggles.sky.visible) {
      this.skyClouds.update(time);
    }

    // 3. Update Distant Cityscape Windows
    if (this.layerToggles.city.visible) {
      this.cityscape.update(time);
    }

    // 4. Update Trees Wind Sway
    if (this.layerToggles.foliage.visible) {
      this.foliage.update(time);
    }

    // 5. Update Characters (Breathing, Hair, Clothing Flutter, Head Tilt)
    if (this.layerToggles.characters.visible) {
      this.characters.update(time);
    }

    // 6. Update Drifting Sunset Particles / Petals
    if (this.layerToggles.particles.visible) {
      this.particles.update(time);
    }

    // 7. Update Lyrics
    if (this.layerToggles.lyrics.visible) {
      this.lyrics.update(time);
    }

    // 8. Render Dynamic Paper Grain & Film Noise
    if (this.layerToggles.grain.visible) {
      this.paperTexture.render(time, frame);
    }
  }

  /**
   * Toggle layer visibility
   */
  toggleLayer(layerKey) {
    if (!this.layerToggles[layerKey]) return;
    const item = this.layerToggles[layerKey];
    item.visible = !item.visible;

    if (layerKey === 'grain') {
      this.grainCanvas.style.display = item.visible ? 'block' : 'none';
    } else if (layerKey === 'wobble') {
      item.active = !item.active;
      const filterVal = item.active ? 'url(#ink-wobble-filter)' : 'none';
      this.characters.group.setAttribute('filter', filterVal);
      this.foliage.group.setAttribute('filter', filterVal);
      this.railingCar.group.setAttribute('filter', filterVal);
    } else if (item.el) {
      item.el.style.display = item.visible ? 'block' : 'none';
    }

    return item.visible ?? item.active;
  }
}
