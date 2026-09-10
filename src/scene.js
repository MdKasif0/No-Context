import { injectSvgFilters } from './visual/svg-filters.js?v=v16';
import { SkyAndCloudsLayer } from './visual/sky-clouds.js?v=v16';
import { CityscapeLayer } from './visual/cityscape.js?v=v16';
import { FoliageLayer } from './visual/foliage.js?v=v16';
import { RailingCarLayer } from './visual/railing-car.js?v=v16';
import { CharactersLayer } from './visual/characters.js?v=v16';
import { Scene2Layer } from './visual/scene2.js?v=v16';
import { ParticlesLayer } from './visual/particles.js?v=v16';
import { LyricsLayer } from './visual/lyrics.js?v=v16';
import { PaperTextureEngine } from './visual/paper-texture.js?v=v16';
import { Camera } from './core/camera.js?v=v16';
import { AnimationEngine } from './core/engine.js?v=v16';

/**
 * Scene Compositor
 * Assembles the full layered environment, paper texture, camera, and animation systems.
 * Manages abrupt hard cuts and clean scene transitions between Scene 1 (0-4.47s) and Scene 2 (4.47-8.95s).
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

    // 4. Dedicated Scene Containers for Abrupt Hard Cut Switching
    this.scene1Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.scene1Group.id = 'scene-1-container';
    this.cameraGroup.appendChild(this.scene1Group);

    this.scene2Group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.scene2Group.id = 'scene-2-container';
    this.scene2Group.style.display = 'none';
    this.cameraGroup.appendChild(this.scene2Group);

    // Build Scene 1 Layers
    this.skyClouds = new SkyAndCloudsLayer(this.scene1Group);
    this.cityscape = new CityscapeLayer(this.scene1Group);
    this.foliage = new FoliageLayer(this.scene1Group);
    this.railingCar = new RailingCarLayer(this.scene1Group);
    this.characters = new CharactersLayer(this.scene1Group);

    // Build Scene 2 Layer (Close portrait of male character & recomposed sunset)
    this.scene2 = new Scene2Layer(this.scene2Group);

    // Global Floating Particles & Lyrics
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
      scene2: { el: this.scene2.group, visible: true },
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

    // 2. Exact Hard Cut Scene Switching at 4.47s
    const isScene1 = time < 4.47;
    const isScene2 = time >= 4.47 && time < 8.95;

    this.scene1Group.style.display = isScene1 ? 'block' : 'none';
    if (this.layerToggles.scene2.visible) {
      this.scene2Group.style.display = isScene2 ? 'block' : 'none';
    }

    // 3. Update Scene 1 Layers
    if (isScene1) {
      if (this.layerToggles.sky.visible) this.skyClouds.update(time);
      if (this.layerToggles.city.visible) this.cityscape.update(time);
      if (this.layerToggles.foliage.visible) this.foliage.update(time);
      if (this.layerToggles.characters.visible) this.characters.update(time);
    }

    // 4. Update Scene 2 Layer
    if (isScene2 && this.layerToggles.scene2.visible) {
      this.scene2.update(time);
    }

    // 5. Update Floating Particles / Motes
    if (this.layerToggles.particles.visible) {
      this.particles.update(time);
    }

    // 6. Update Lyrics
    if (this.layerToggles.lyrics.visible) {
      this.lyrics.update(time);
    }

    // 7. Render Dynamic Paper Grain & Film Noise
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
      if (this.scene2) {
        const s2Tree = this.scene2.group.querySelector('#scene2-tree');
        const s2City = this.scene2.group.querySelector('#scene2-cityscape');
        const s2Char = this.scene2.group.querySelector('#scene2-male-character');
        const s2Rail = this.scene2.group.querySelector('#scene2-railing');
        if (s2Tree) s2Tree.setAttribute('filter', filterVal);
        if (s2City) s2City.setAttribute('filter', filterVal);
        if (s2Char) s2Char.setAttribute('filter', filterVal);
        if (s2Rail) s2Rail.setAttribute('filter', filterVal);
      }
    } else if (item.el) {
      item.el.style.display = item.visible ? 'block' : 'none';
    }

    return item.visible ?? item.active;
  }
}
