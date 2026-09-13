export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Build Your Ideal
            <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-slate-600">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-full brand-gradient px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Explore Technologies
            </a>
            <a
              href="#about"
              className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            viewBox="0 0 320 320"
            className="w-full max-w-sm"
            role="img"
            aria-label="Isometric illustration of a layered technology stack"
          >
            <defs>
              <linearGradient id="heroGradA" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--brand-from)" />
                <stop offset="50%" stopColor="var(--brand-via)" />
                <stop offset="100%" stopColor="var(--brand-to)" />
              </linearGradient>
              <linearGradient id="heroGradDark" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#db2777" />
              </linearGradient>
            </defs>

            <ellipse cx="160" cy="295" rx="110" ry="14" fill="url(#heroGradA)" opacity="0.15" />

            <polygon points="160,180 268,232 160,284 52,232" fill="url(#heroGradA)" opacity="0.22" />
            <polygon points="52,232 160,284 160,306 52,254" fill="url(#heroGradDark)" opacity="0.85" />
            <polygon points="268,232 160,284 160,306 268,254" fill="url(#heroGradA)" opacity="0.7" />
            <polygon points="160,180 268,232 160,284 52,232" fill="url(#heroGradA)" opacity="0.35" stroke="white" strokeOpacity="0.4" strokeWidth="1" />

            <g stroke="white" strokeOpacity="0.5" strokeWidth="1.5" fill="none">
              <path d="M92 232 h30 l10 -8" />
              <path d="M228 232 h-30 l-10 8" />
              <path d="M160 200 v20" />
            </g>
            <circle cx="92" cy="232" r="3" fill="white" />
            <circle cx="228" cy="232" r="3" fill="white" />
            <circle cx="132" cy="224" r="3" fill="white" />

            <rect x="70" y="118" width="10" height="88" rx="5" fill="url(#heroGradDark)" opacity="0.8" />
            <rect x="240" y="118" width="10" height="88" rx="5" fill="url(#heroGradA)" opacity="0.8" />
            <circle cx="75" cy="118" r="7" fill="url(#heroGradA)" />
            <circle cx="245" cy="118" r="7" fill="url(#heroGradDark)" />

            <polygon points="160,58 234,98 160,138 86,98" fill="url(#heroGradA)" opacity="0.9" />
            <polygon points="86,98 160,138 160,158 86,118" fill="url(#heroGradDark)" />
            <polygon points="234,98 160,138 160,158 234,118" fill="url(#heroGradA)" />
            <polygon points="160,58 234,98 160,138 86,98" fill="none" stroke="white" strokeOpacity="0.5" strokeWidth="1" />

            <rect x="140" y="72" width="24" height="24" rx="5" fill="white" opacity="0.9" transform="skewX(-15) translate(-18,0)" />
            <text x="148" y="90" fontSize="13" fontWeight="700" fill="#7c3aed">Aa</text>
            <circle cx="190" cy="80" r="6" fill="white" opacity="0.85" />
            <circle cx="205" cy="90" r="4" fill="white" opacity="0.7" />
            <circle cx="118" cy="88" r="5" fill="white" opacity="0.7" />

            <circle cx="40" cy="150" r="5" fill="url(#heroGradA)" opacity="0.7" />
            <circle cx="280" cy="170" r="4" fill="url(#heroGradDark)" opacity="0.7" />
            <circle cx="260" cy="60" r="4" fill="url(#heroGradA)" opacity="0.6" />
          </svg>
        </div>
      </div>
    </section>
  );
}