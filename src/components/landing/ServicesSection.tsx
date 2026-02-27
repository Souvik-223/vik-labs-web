"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "~/lib/const";
import { Badge } from "~/components/ui/badge";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        gridRef.current?.children ?? [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      {/* Background texture */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute top-0 right-0 left-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/10 bg-white/3 px-4 py-1.5 text-xs tracking-widest text-white/40 uppercase"
          >
            ◆ What We Build
          </Badge>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed font-light text-white/40">
            End-to-end capability across the full product lifecycle — from
            initial concept to ongoing iteration and scale.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/6 bg-white/6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative cursor-pointer bg-black p-6 transition-all duration-300 hover:bg-white/3"
              >
                {/* Hover line */}
                <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-white transition-transform duration-500 group-hover:scale-x-100" />

                <div className="mb-5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/5 transition-all duration-300 group-hover:border-white group-hover:bg-white">
                    <Icon className="h-5 w-5 text-white/50 transition-colors duration-300 group-hover:text-black" />
                  </div>
                  <Badge
                    variant="outline"
                    className="rounded-full border-white/8 px-2 py-0.5 text-[10px] font-semibold tracking-widest text-white/20 uppercase"
                  >
                    {service.tag}
                  </Badge>
                </div>

                <h3 className="mb-2 text-sm leading-snug font-bold text-white">
                  {service.title}
                </h3>
                <p className="text-xs leading-relaxed text-white/30">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
