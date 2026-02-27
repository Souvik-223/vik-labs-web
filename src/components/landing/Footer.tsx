"use client";

import Image from "next/image";
import { Twitter, Github, Linkedin, Youtube } from "lucide-react";
import { footerLinks, socials } from "~/lib/const";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-black px-6 pt-16 pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid grid-cols-2 gap-8 md:grid-cols-6">
          {/* Brand */}
          <div className="col-span-2">
            <a href="#" className="group mb-5 flex w-fit items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden">
                <Image
                  src="/LogoMiniDark.png"
                  alt="VikLabs"
                  width={32}
                  height={32}
                  className="object-contain invert"
                />
              </div>
              <span className="text-lg font-bold tracking-tight text-white">
                Vik<span className="text-white/40">Labs</span>
              </span>
            </a>
            <p className="mb-6 max-w-xs text-sm leading-relaxed font-light text-white/30">
              An independent technology studio. We build products people love —
              with precision, craft, and relentless attention to detail.
            </p>
            <div className="flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/8 bg-white/4 text-white/25 transition-all duration-200 hover:border-white/15 hover:bg-white/8 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-4 text-xs font-semibold tracking-widest text-white uppercase">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm font-light text-white/25 transition-colors duration-200 hover:text-white/70"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 md:flex-row">
          <p className="text-sm text-white/20">
            © {new Date().getFullYear()} VikLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-white/40" />
            <span className="text-sm text-white/20">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
