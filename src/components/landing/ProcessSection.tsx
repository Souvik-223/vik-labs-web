"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { steps } from "~/lib/const";

gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

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

      // Animate connecting line
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 70%",
          },
        },
      );

      // Stagger steps
      gsap.fromTo(
        stepsRef.current?.children ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 75%",
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/40 uppercase">
            ◆ How We Work
          </div>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Our Process
          </h2>
          <p className="mx-auto max-w-xl text-lg font-light text-white/40">
            A battle-tested 4-step system that transforms your vision into
            shipping software — with full transparency throughout.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line */}
          <div
            ref={lineRef}
            className="absolute top-12 right-0 left-0 hidden h-px origin-left bg-white/8 lg:block"
          />

          <div
            ref={stepsRef}
            className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="group flex flex-col items-center text-center"
                >
                  {/* Icon */}
                  <div className="relative mb-8">
                    <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-white/3 transition-all duration-500 group-hover:border-white/30 group-hover:bg-white/6">
                      <Icon className="h-8 w-8 text-white/40 transition-colors duration-300 group-hover:text-white" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black">
                      <span className="text-xs font-black text-white/40">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-black text-white">
                    {step.title}
                  </h3>
                  <p className="max-w-xs text-sm leading-relaxed font-light text-white/35">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
