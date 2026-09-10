
/**
 * Deterministic 30 FPS Animation Engine
 * Handles precise timeline updates, frame stepping, playback rates, and audio sync.
 */
export class AnimationEngine {
  constructor(options = {}) {
    this.fps = options.fps || 30;
    this.duration = options.duration || 14.98; // Total animation duration in seconds
    this.totalFrames = Math.round(this.duration * this.fps); // 449 frames
    this.frameDuration = 1 / this.fps; // ~0.03333s

    this.currentTime = 0;
    this.currentFrame = 0;
    this.isPlaying = false;
    this.playbackRate = 1.0;
    this.loop = true;

    this.subscribers = new Set();
    this.lastTimestamp = null;
    this.animationFrameId = null;
    this.audioElement = options.audioElement || null;

    this._loop = this._loop.bind(this);
  }

  subscribe(callback) {
    this.subscribers.add(callback);
    // Initial call to set state
    callback({
      time: this.currentTime,
      frame: this.currentFrame,
      progress: this.currentTime / this.duration,
      duration: this.duration,
      totalFrames: this.totalFrames,
      isPlaying: this.isPlaying
    });
    return () => this.subscribers.delete(callback);
  }

  notify() {
    const payload = {
      time: this.currentTime,
      frame: this.currentFrame,
      progress: this.currentTime / this.duration,
      duration: this.duration,
      totalFrames: this.totalFrames,
      isPlaying: this.isPlaying
    };
    for (const callback of this.subscribers) {
      callback(payload);
    }
  }

  play() {
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.lastTimestamp = performance.now();
    if (this.audioElement && !this.audioElement.muted) {
      this.audioElement.currentTime = this.currentTime;
      this.audioElement.play().catch(() => {
        // Autoplay may be blocked until user interacts
      });
    }
    this.animationFrameId = requestAnimationFrame(this._loop);
    this.notify();
  }

  pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }

  togglePlay() {
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play();
    }
  }

  seek(time) {
    this.currentTime = Math.max(0, Math.min(this.duration, time));
    this.currentFrame = Math.min(this.totalFrames, Math.floor(this.currentTime * this.fps));
    if (this.audioElement && Math.abs(this.audioElement.currentTime - this.currentTime) > 0.08) {
      this.audioElement.currentTime = this.currentTime;
    }
    this.notify();
  }

  seekFrame(frame) {
    const targetFrame = Math.max(0, Math.min(this.totalFrames, frame));
    this.seek(targetFrame / this.fps);
  }

  setPlaybackRate(rate) {
    this.playbackRate = Math.max(0.1, Math.min(4.0, rate));
    if (this.audioElement) {
      this.audioElement.playbackRate = this.playbackRate;
    }
  }

  _loop(timestamp) {
    if (!this.isPlaying) return;

    const delta = (timestamp - this.lastTimestamp) / 1000;
    this.lastTimestamp = timestamp;

    // Advance time according to playback rate
    this.currentTime += delta * this.playbackRate;

    // Check bounds / looping
    if (this.currentTime >= this.duration) {
      if (this.loop) {
        this.currentTime = 0;
        if (this.audioElement) {
          this.audioElement.currentTime = 0;
          this.audioElement.play().catch(() => { });
        }
      } else {
        this.currentTime = this.duration;
        this.pause();
        return;
      }
    }

    // Update discrete frame number
    this.currentFrame = Math.min(this.totalFrames, Math.floor(this.currentTime * this.fps));

    // Periodic audio re-sync check (prevent drift)
    if (this.audioElement && !this.audioElement.paused && Math.abs(this.audioElement.currentTime - this.currentTime) > 0.15) {
      this.audioElement.currentTime = this.currentTime;
    }

    this.notify();
    this.animationFrameId = requestAnimationFrame(this._loop);
  }
}
