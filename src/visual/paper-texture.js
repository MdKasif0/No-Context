/**
 * Procedural Paper Texture & Vintage Film Grain
 * Generates analog paper tooth and subtle 30 FPS film grain jitter via pure Canvas math.
 * Zero external raster textures used.
 */
export class PaperTextureEngine {
  constructor(canvasElement, width = 720, height = 720) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d', { alpha: true });
    this.width = width;
    this.height = height;

    this.canvas.width = width;
    this.canvas.height = height;

    this.grainIntensity = 0.09;
    this.paperWarmth = 0.04;
    this.frameCounter = 0;

    // Generate static paper base tooth texture
    this.basePaperPattern = this.generateBasePaperPattern(256, 256);
  }

  /**
   * Generates an offscreen paper tooth pattern with subtle watercolor fibers
   */
  generateBasePaperPattern(w, h) {
    const offCanvas = document.createElement('canvas');
    offCanvas.width = w;
    offCanvas.height = h;
    const offCtx = offCanvas.getContext('2d');
    const imgData = offCtx.createImageData(w, h);
    const data = imgData.data;

    // Seeded organic noise for paper fibers
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 28;
      const warmShift = (Math.random() - 0.4) * 12;

      // Base warm cream/plum paper undertone
      data[i] = Math.min(255, Math.max(0, 245 + noise + warmShift));     // R
      data[i + 1] = Math.min(255, Math.max(0, 235 + noise));             // G
      data[i + 2] = Math.min(255, Math.max(0, 220 + noise - warmShift)); // B
      data[i + 3] = Math.floor(Math.random() * 25 + 30);                 // Alpha
    }

    offCtx.putImageData(imgData, 0, 0);
    return offCanvas;
  }

  /**
   * Renders paper texture and dynamic 30 FPS film speckle
   */
  render(time, frame) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Draw tiled paper fiber texture
    const pattern = ctx.createPattern(this.basePaperPattern, 'repeat');
    ctx.fillStyle = pattern;
    ctx.globalAlpha = 0.35;
    ctx.fillRect(0, 0, this.width, this.height);

    // 2. Dynamic analog film grain (regenerates jitter every 1-2 frames for cinema look)
    const grainData = ctx.createImageData(this.width, this.height);
    const gBuf = grainData.data;
    const step = 2; // Step 2 for high performance & authentic 70s-90s film grain granularity

    // Subtle random seed
    for (let y = 0; y < this.height; y += step) {
      for (let x = 0; x < this.width; x += step) {
        if (Math.random() > 0.48) {
          const val = Math.random() > 0.5 ? 255 : 0;
          const alpha = Math.floor(Math.random() * 26);

          for (let dy = 0; dy < step; dy++) {
            for (let dx = 0; dx < step; dx++) {
              const idx = ((y + dy) * this.width + (x + dx)) * 4;
              gBuf[idx] = val;
              gBuf[idx + 1] = Math.floor(val * 0.9);
              gBuf[idx + 2] = Math.floor(val * 0.8);
              gBuf[idx + 3] = alpha;
            }
          }
        }
      }
    }

    ctx.globalAlpha = 0.22;
    ctx.putImageData(grainData, 0, 0);

    // 3. Subtle warm vignette rim
    const grad = ctx.createRadialGradient(
      this.width / 2, this.height * 0.45, this.width * 0.35,
      this.width / 2, this.height / 2, this.width * 0.72
    );
    grad.addColorStop(0, 'rgba(247, 186, 130, 0)');
    grad.addColorStop(0.7, 'rgba(101, 73, 90, 0.05)');
    grad.addColorStop(1, 'rgba(68, 55, 66, 0.22)');

    ctx.globalAlpha = 0.6;
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.globalAlpha = 1.0;
  }
}
