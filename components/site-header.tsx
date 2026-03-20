"use client";

import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/data/site-content";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-brand-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="#top"
          className="max-w-[17rem] text-brand-navy"
        >
          <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-brand-red">
            College Project 2026
          </span>
          <span className="mt-1 block text-sm font-semibold uppercase tracking-[0.18em]">
            Understanding Terrorism
          </span>
        </Link>

        <button
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((current) => !current)}
          className="rounded-full border border-brand-navy/15 px-4 py-2 text-sm font-semibold text-brand-navy transition hover:border-brand-red/30 hover:text-brand-red focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-red md:hidden"
        >
          Menu
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navigationItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="border-t border-brand-navy/10 bg-white/95 px-6 py-4 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
