"use client";

import { useState, useEffect, useRef } from "react";
import { cn } from "~/lib/utils";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import Image from "next/image";
import { navLinks } from "~/lib/const";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!navRef.current) return;
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 },
    );
  }, []);

  useEffect(() => {
    if (!linksRef.current) return;
    const items = linksRef.current.querySelectorAll("li");
    gsap.fromTo(
      items,
      { y: -20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.6,
      },
    );
  }, []);

  return (
    <>
      <header
        ref={navRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-white/8 bg-black/70 shadow-2xl shadow-black/60 backdrop-blur-2xl"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="#" className="group flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden">
              <Image
                src="/LogoMiniDark.png"
                alt="VikLabs"
                width={36}
                height={36}
                className="object-contain invert"
              />
            </div>
            <span className="text-xl font-black tracking-tight text-white">
              Vik<span className="text-white/60">Labs</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul ref={linksRef} className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="group relative text-sm font-medium text-white/50 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition-all duration-200 hover:bg-white/90 md:inline-flex"
            >
              Get Started
            </Link>
            {/* Mobile hamburger */}
            <button
              className="text-white/70 transition-colors hover:text-white md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="border-t border-white/8 bg-black/95 px-6 py-4 backdrop-blur-2xl md:hidden">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        )}
      </header>
    </>
  );
}
