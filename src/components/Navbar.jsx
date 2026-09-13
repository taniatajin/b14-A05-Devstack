import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandLogo() {
  return (
    <a href="#home" className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg brand-gradient text-sm font-bold text-white">
        DS
      </span>
      <span className="text-lg font-bold text-slate-900">
        Dev<span className="brand-gradient-text">Stack</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          className="md:hidden -ml-2 rounded-lg p-2 text-slate-700"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div className="md:flex-1">
          <BrandLogo />
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={
                  i === 0
                    ? "text-sm font-medium text-pink-600"
                    : "text-sm font-medium text-slate-600 transition hover:text-slate-900"
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-4">
          <a href="#signin" className="text-sm font-medium text-slate-700 hover:text-slate-900">
            Sign In
          </a>
          <a
            href="#signup"
            className="rounded-full brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 sm:px-5"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {isMenuOpen && (
        <ul className="space-y-1 border-t border-slate-100 bg-white px-4 pb-4 pt-2 md:hidden">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}