"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { clients, stats } from "~/lib/const";
import { Separator } from "~/components/ui/separator";

gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate stats
      gsap.fromTo(
        statsRef.current?.children ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
          },
        },
      );

      // Animate client logos
      gsap.fromTo(
        logosRef.current?.children ?? [],
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          scrollTrigger: {
            trigger: logosRef.current,
            start: "top 85%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-y border-white/6 bg-black px-6 py-20"
    >
      {/* Horizontal rule decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-1/2 left-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-5"
          style={{
            background: "radial-gradient(ellipse, #ffffff 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Stats */}
        <div
          ref={statsRef}
          className="mb-20 grid grid-cols-2 gap-10 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group text-center">
              <div className="mb-2 text-4xl font-black text-white transition-transform duration-300 group-hover:scale-105 md:text-5xl">
                {stat.value}
              </div>
              <div className="mb-1 text-sm font-semibold text-white">
                {stat.label}
              </div>
              <div className="text-xs text-white/25">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Separator */}
        <Separator className="mb-12 bg-white/6" />

        {/* Client logos */}
        <p className="mb-8 text-center text-xs font-semibold tracking-widest text-white/20 uppercase">
          Trusted by teams at forward-thinking companies
        </p>
        <div
          ref={logosRef}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-14"
        >
          {clients.map((client) => (
            <span
              key={client}
              className="cursor-default text-sm font-bold tracking-widest text-white/15 uppercase transition-colors duration-300 hover:text-white/50"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
