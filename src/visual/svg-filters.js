/**
 * SVG Filter Pipeline
 * Injects procedural displacement and watercolor diffusion filters for hand-drawn aesthetic.
 */
export function injectSvgFilters(svgElement) {
  let defs = svgElement.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svgElement.insertBefore(defs, svgElement.firstChild);
  }

  defs.innerHTML += `
    <!-- Organic hand-drawn ink line wobble filter -->
    <filter id="ink-wobble-filter" x="-10%" y="-10%" width="120%" height="120%" filterUnits="userSpaceOnUse">
      <feTurbulence id="ink-turbulence" type="fractalNoise" baseFrequency="0.038" numOctaves="2" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.4" xChannelSelector="R" yChannelSelector="G" result="displaced" />
      <feMerge>
        <feMergeNode in="displaced" />
      </feMerge>
    </filter>

    <!-- Subtle watercolor pigment dispersion filter for clouds and foliage -->
    <filter id="watercolor-filter" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="turbulence" baseFrequency="0.015" numOctaves="3" result="turb" />
      <feDisplacementMap in="SourceGraphic" in2="turb" scale="4.5" xChannelSelector="R" yChannelSelector="B" result="disp" />
      <feGaussianBlur in="disp" stdDeviation="0.4" result="blurred" />
      <feMerge>
        <feMergeNode in="blurred" />
        <feMergeNode in="disp" opacity="0.6" />
      </feMerge>
    </filter>

    <!-- Warm atmospheric glow filter for window lights and sunset haze -->
    <filter id="warm-glow-filter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3.2" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>

    <!-- Soft blush filter -->
    <filter id="blush-soften" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="2.8" />
    </filter>
  `;
}
