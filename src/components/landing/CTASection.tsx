"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  MapPin,
  Github,
  Twitter,
  Linkedin,
  CalendarDays,
  ArrowRight,
} from "lucide-react";
import LightPillar from "~/components/LightPillar";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  // Gate Calendly embed to client-only — avoids SSR/client hydration mismatch
  // (Calendly mutates the div immediately: adds data-processed, iframe, spinner)
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
      gsap.fromTo(
        calendarRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Mark as mounted (client-only); then trigger inline widget init
  useEffect(() => {
    setMounted(true);
  }, []);

  // Once the calendly div is in the DOM, tell Calendly to initialise it
  useEffect(() => {
    if (!mounted) return;
    // Give Calendly's script a tick to attach, then call initInlineWidgets
    const initInline = () => {
      const cal = (window as any).Calendly;
      if (cal?.initInlineWidgets) {
        cal.initInlineWidgets();
      }
    };
    // If already loaded, call immediately; else poll until it's ready
    const t = setTimeout(initInline, 300);
    return () => clearTimeout(t);
  }, [mounted]);

  // Inject Calendly badge widget script + stylesheet once
  useEffect(() => {
    // Load Calendly stylesheet
    if (!document.getElementById("calendly-css")) {
      const link = document.createElement("link");
      link.id = "calendly-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    // Load Calendly widget script
    if (!document.getElementById("calendly-js")) {
      const script = document.createElement("script");
      script.id = "calendly-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        (window as any).Calendly?.initBadgeWidget({
          url: "https://calendly.com/tanishbasu/30min",
          text: "Schedule time with me",
          color: "#1f2123",
          textColor: "#ffffff",
          branding: true,
        });
        // Also init inline widgets in case the div is already mounted
        (window as any).Calendly?.initInlineWidgets?.();
      };
      document.body.appendChild(script);
    } else {
      // Script already present — init badge manually if not already done
      (window as any).Calendly?.initBadgeWidget?.({
        url: "https://calendly.com/tanishbasu/30min",
        text: "Schedule time with me",
        color: "#1f2123",
        textColor: "#ffffff",
        branding: true,
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      {/* ── LightPillar — white atmospheric glow ── */}
      <div className="pointer-events-none absolute inset-0">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#666666"
          intensity={0.32}
          rotationSpeed={0.2}
          pillarWidth={4.0}
          pillarHeight={0.3}
          glowAmount={0.003}
          noiseIntensity={0.3}
          quality="medium"
          mixBlendMode="screen"
        />
      </div>

      {/* Secondary offset pillar */}
      <div className="pointer-events-none absolute inset-0 opacity-35">
        <LightPillar
          topColor="#cccccc"
          bottomColor="#111111"
          intensity={0.22}
          rotationSpeed={0.1}
          pillarWidth={2.8}
          pillarHeight={0.45}
          glowAmount={0.002}
          pillarRotation={50}
          quality="low"
          mixBlendMode="screen"
        />
      </div>

      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/50 via-black/30 to-black/65" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
          {/* ── Left: copy + contact info ── */}
          <div ref={contentRef} className="flex flex-col gap-6">
            <Badge
              variant="outline"
              className="flex w-fit items-center gap-2 rounded-full border-white/10 bg-white/3 px-4 py-1.5 text-xs tracking-widest text-white/40 uppercase"
            >
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
              Available for Projects
            </Badge>

            <h2 className="text-4xl leading-[1.05] font-black tracking-tight text-white md:text-5xl">
              Let's Build
              <br />
              Something Great
            </h2>

            <p className="max-w-md text-lg leading-relaxed font-light text-white/40">
              Pick a time that works for you and let's talk about your project.
              We'll share initial ideas and a rough plan — completely free, no
              strings attached.
            </p>

            {/* Contact info */}
            <div className="mt-1 flex flex-col gap-3">
              {[
                { icon: Mail, label: "hello@viklabs.dev" },
                { icon: MapPin, label: "Remote-first · Worldwide" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="group flex cursor-pointer items-center gap-3"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/8 bg-white/4 transition-all duration-300 group-hover:border-white group-hover:bg-white">
                      <Icon className="h-4 w-4 text-white/40 transition-colors duration-300 group-hover:text-black" />
                    </div>
                    <span className="text-sm text-white/50 transition-colors duration-200 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <Separator className="my-1 bg-white/6" />

            {/* Inline book button */}
            <Button
              asChild
              size="lg"
              className="group h-12 w-fit rounded-xl bg-white px-7 font-bold text-black hover:bg-white/90"
            >
              <Link
                href="https://calendly.com/tanishbasu/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarDays className="h-4 w-4" />
                Book a Free 30-min Call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>

            {/* Socials */}
            <div className="mt-1 flex items-center gap-2">
              {[
                { icon: Github, label: "GitHub" },
                { icon: Twitter, label: "Twitter" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <Button
                    key={s.label}
                    variant="ghost"
                    size="icon-sm"
                    asChild
                    className="rounded-lg border border-white/8 bg-white/4 text-white/30 hover:border-white/20 hover:bg-white/10 hover:text-white"
                  >
                    <Link href="#" aria-label={s.label}>
                      <Icon className="h-4 w-4" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>

          {/* ── Right: Calendly inline embed (client-only to avoid hydration mismatch) ── */}
          <div
            ref={calendarRef}
            className="relative min-h-[680px] overflow-hidden rounded-2xl border border-white/8 bg-white/2"
          >
            {mounted ? (
              /* Only rendered after client hydration — Calendly mutates this div immediately */
              <div
                className="calendly-inline-widget h-full min-h-[680px] w-full"
                data-url="https://calendly.com/tanishbasu/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=ffffff"
                style={{ minWidth: "320px", height: "680px" }}
              />
            ) : (
              /* SSR / pre-hydration placeholder — matches no DOM output from Calendly */
              <div className="flex min-h-[680px] w-full items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-white/20">
                  <CalendarDays className="h-10 w-10 animate-pulse" />
                  <span className="text-sm font-medium">Loading calendar…</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
