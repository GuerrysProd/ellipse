/** Motif décoratif : des ellipses en rotation lente, en écho au logo. À placer dans un conteneur positionné. */
export function Orbits({ className = '' }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <svg viewBox="0 0 600 600" className="size-full overflow-visible">
        <defs>
          <linearGradient id="orbit-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="0.5" stopColor="#8395a1" stopOpacity="0.6" />
            <stop offset="1" stopColor="#8395a1" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="animate-orbit" style={{ transformOrigin: '300px 300px' }}>
          <g transform="rotate(-28 300 300)">
            <path id="orbit-path" d="M 20,300 a 280,150 0 1,0 560,0 a 280,150 0 1,0 -560,0" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1.2" />
            <circle r="4" fill="#d6d8db" className="motion-reduce:hidden">
              <animateMotion dur="22s" repeatCount="indefinite">
                <mpath href="#orbit-path" />
              </animateMotion>
            </circle>
          </g>
        </g>
        <g className="animate-orbit-reverse" style={{ transformOrigin: '300px 300px' }}>
          <ellipse cx="300" cy="300" rx="230" ry="110" fill="none" stroke="url(#orbit-stroke)" strokeWidth="1" transform="rotate(34 300 300)" />
        </g>
        <g className="animate-orbit" style={{ transformOrigin: '300px 300px', animationDuration: '140s' }}>
          <ellipse cx="300" cy="300" rx="295" ry="205" fill="none" stroke="url(#orbit-stroke)" strokeWidth="0.8" transform="rotate(8 300 300)" />
        </g>
      </svg>
    </div>
  );
}
