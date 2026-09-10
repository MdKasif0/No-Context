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

    this.mode = 'timeline'; // 'timeline' | 'wide' | 'girlShot' | 'boyShot' | 'manual'
    this.lastTime = 0;
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
      if (time < 4.47) {
        // Scene 1: 0.00s to 4.47s
        // 0.00s: Wide establishing shot showing both characters and vehicle
        // 0.00s - 2.00s: Very subtle slow push-in, gradually favoring the woman
        // 2.00s - 4.47s: Continue slow dreamy push toward woman; woman becomes visual focal point
        const t = Math.max(0, Math.min(4.47, time));
        let s, x, y;
        if (t <= 2.0) {
          const p = t / 2.0;
          const ease = p * p * (3 - 2 * p); // smooth cubic ease
          s = 1.0 + ease * 0.12;           // 1.00 -> 1.12
          x = ease * 38;                   // 0 -> 38 (favors woman on left)
          y = ease * 10;                   // 0 -> 10
        } else {
          const p = (t - 2.0) / (4.47 - 2.0);
          const ease = p * p * (3 - 2 * p);
          s = 1.12 + ease * 0.18;          // 1.12 -> 1.30
          x = 38 + ease * 52;              // 38 -> 90
          y = 10 + ease * 12;              // 10 -> 22
        }

        this.target.scale = s;
        this.target.x = x;
        this.target.y = y;
        this.target.pivotX = 360;
        this.target.pivotY = 360;
        this.target.rotation = 0;

        // Instant deterministic assignment for Scene 1 (zero drift / lag)
        this.state.x = this.target.x;
        this.state.y = this.target.y;
        this.state.scale = this.target.scale;
        this.state.pivotX = this.target.pivotX;
        this.state.pivotY = this.target.pivotY;
        this.state.rotation = this.target.rotation;
      } else if (time < 8.95) {
        // ========================================================
        // Scene 2: 4.47s to 8.95s (Male Character Close-up Portrait)
        // Instantaneous hard cut at 4.47s.
        // Stable framing with slow 2D push-in and tiny vertical drift.
        // No camera shake.
        // ========================================================
        const s2Duration = 8.95 - 4.47;
        const p = Math.max(0, Math.min(1.0, (time - 4.47) / s2Duration));
        const smoothP = p * p * (3 - 2 * p);

        // Very slow 2D push-in (1.000 -> 1.035) focused on the male character
        const s = 1.00 + smoothP * 0.035;
        // Tiny cinematic vertical drift
        const driftY = Math.sin((time - 4.47) * 0.8) * 1.6;
        const driftX = Math.sin((time - 4.47) * 0.4) * 0.6;

        this.target.scale = s;
        this.target.x = driftX;
        this.target.y = driftY;
        this.target.pivotX = 420;
        this.target.pivotY = 340;
        this.target.rotation = 0;

        // Instant hard cut snap at 4.47s (zero lerp latency)
        if (this.lastTime < 4.47 || Math.abs(time - 4.47) < 0.05) {
          this.state.x = this.target.x;
          this.state.y = this.target.y;
          this.state.scale = this.target.scale;
          this.state.pivotX = this.target.pivotX;
          this.state.pivotY = this.target.pivotY;
          this.state.rotation = 0;
        } else {
          this.state.x = this.target.x;
          this.state.y = this.target.y;
          this.state.scale = this.target.scale;
          this.state.pivotX = this.target.pivotX;
          this.state.pivotY = this.target.pivotY;
          this.state.rotation = 0;
        }
      } else {
        // Post Scene 2: Hold stable framing
        this.state.x = 0;
        this.state.y = 0;
        this.state.scale = 1.0;
        this.state.pivotX = 360;
        this.state.pivotY = 360;
        this.state.rotation = 0;
      }
    } else {
      // Manual preset mode: smooth interpolation towards target
      this.state.x += (this.target.x - this.state.x) * lerpFactor;
      this.state.y += (this.target.y - this.state.y) * lerpFactor;
      this.state.scale += (this.target.scale - this.state.scale) * lerpFactor;
      this.state.rotation += (this.target.rotation - this.state.rotation) * lerpFactor;
      this.state.pivotX += (this.target.pivotX - this.state.pivotX) * lerpFactor;
      this.state.pivotY += (this.target.pivotY - this.state.pivotY) * lerpFactor;
    }

    this.lastTime = time;

    // Organic micro-drift / handheld breathing float
    let driftX = 0;
    let driftY = 0;
    // Camera shake is disabled during Scene 2 for cinematic stability
    if (this.state.shake > 0 && (this.mode !== 'timeline' || time < 4.47)) {
      driftX = Math.sin(time * 1.3) * 0.9 * this.state.shake;
      driftY = Math.cos(time * 1.8) * 0.7 * this.state.shake;
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
