/**
 * Camera System
 * Provides multi-layer coordinate transforms, zoom, pan, handheld drift, and shot presets.
 */
export class Camera {
  constructor(targetElement, options = {}) {
    this.targetElement = targetElement; // SVG <g> element wrapping the visual layers
    this.viewportWidth = options.viewportWidth || 720;
    this.viewportHeight = options.viewportHeight || 720;

    // Current transformed state
    this.state = {
      x: 0,
      y: 0,
      scale: 1.0,
      rotation: 0,
      pivotX: 360,
      pivotY: 360,
      shake: 0.5 // subtle natural handheld camera float
    };

    // Target state for smooth interpolation
    this.target = { ...this.state };

    // Built-in shot presets matching reference composition
    this.presets = {
      wide: {
        x: 0,
        y: 0,
        scale: 1.0,
        pivotX: 360,
        pivotY: 360
      },
      girlShot: {
        x: 135,
        y: 40,
        scale: 1.80,
        pivotX: 140,
        pivotY: 370
      },
      girl: {
        x: 135,
        y: 40,
        scale: 1.80,
        pivotX: 140,
        pivotY: 370
      },
      boyShot: {
        x: -140,
        y: -45,
        scale: 1.82,
        pivotX: 520,
        pivotY: 450
      },
      boy: {
        x: -140,
        y: -45,
        scale: 1.82,
        pivotX: 520,
        pivotY: 450
      }
    };

    this.mode = 'wide'; // 'wide' | 'girlShot' | 'boyShot' | 'manual' | 'timeline'
  }

  setMode(mode) {
    if (mode === 'girl') mode = 'girlShot';
    if (mode === 'boy') mode = 'boyShot';
    this.mode = mode;
    if (this.presets[mode]) {
      this.target = {
        ...this.target,
        ...this.presets[mode]
      };
    }
  }

  setTransform({ x, y, scale, rotation, pivotX, pivotY }) {
    if (x !== undefined) this.target.x = x;
    if (y !== undefined) this.target.y = y;
    if (scale !== undefined) this.target.scale = scale;
    if (rotation !== undefined) this.target.rotation = rotation;
    if (pivotX !== undefined) this.target.pivotX = pivotX;
    if (pivotY !== undefined) this.target.pivotY = pivotY;
    this.mode = 'manual';
  }

  /**
   * Update camera transform given current time or frame
   * @param {number} time In seconds
   * @param {number} lerpFactor Smoothing factor (0-1)
   */
  update(time, lerpFactor = 0.12) {
    // If running in timeline mode, compute shot transitions based on time
    if (this.mode === 'timeline') {
      if (time < 3.2) {
        // Scene 1: Wide shot of both characters
        Object.assign(this.target, this.presets.wide);
      } else if (time < 7.4) {
        // Scene 2: Girl close-up shot
        Object.assign(this.target, this.presets.girlShot);
      } else {
        // Scene 3: Boy shot with lyrics
        Object.assign(this.target, this.presets.boyShot);
      }
    }

    // Smooth interpolation towards target
    this.state.x += (this.target.x - this.state.x) * lerpFactor;
    this.state.y += (this.target.y - this.state.y) * lerpFactor;
    this.state.scale += (this.target.scale - this.state.scale) * lerpFactor;
    this.state.rotation += (this.target.rotation - this.state.rotation) * lerpFactor;
    this.state.pivotX += (this.target.pivotX - this.state.pivotX) * lerpFactor;
    this.state.pivotY += (this.target.pivotY - this.state.pivotY) * lerpFactor;

    // Organic micro-drift / breathing
    let driftX = 0;
    let driftY = 0;
    if (this.state.shake > 0) {
      driftX = Math.sin(time * 1.3) * 1.2 * this.state.shake;
      driftY = Math.cos(time * 1.8) * 0.9 * this.state.shake;
    }

    // Apply SVG transform matrix
    if (this.targetElement) {
      const cx = this.state.pivotX;
      const cy = this.state.pivotY;
      const tx = this.state.x + driftX;
      const ty = this.state.y + driftY;
      const s = this.state.scale;
      const rot = this.state.rotation;

      // Transform: translate to pivot, scale, rotate, translate back, plus camera pan
      const transformString = `translate(${cx + tx}, ${cy + ty}) scale(${s}) rotate(${rot}) translate(${-cx}, ${-cy})`;
      this.targetElement.setAttribute('transform', transformString);
    }
  }

  getTelemetry() {
    return {
      x: this.state.x.toFixed(1),
      y: this.state.y.toFixed(1),
      scale: this.state.scale.toFixed(2),
      mode: this.mode
    };
  }
}
