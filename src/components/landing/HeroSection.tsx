"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import LightPillar from "~/components/LightPillar";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });

      tl.fromTo(
        badgeRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
      )
        .fromTo(
          headlineRef.current,
          { y: 70, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          subRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power3.out" },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.4",
        )
        .fromTo(
          logoRef.current,
          { scale: 0.75, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1.4, ease: "elastic.out(1,0.6)" },
          "-=1.4",
        )
        .fromTo(
          statsRef.current?.children ?? [],
          { y: 20, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            stagger: 0.08,
          },
          "-=0.6",
        )
        .fromTo(
          scrollHintRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2",
        );

      // Scroll hint bounce
      gsap.to(scrollHintRef.current, {
        y: 8,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "sine.inOut",
        delay: 2,
      });

      // Logo parallax on scroll
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        onUpdate: (self) => {
          gsap.set(logoRef.current, {
            y: self.progress * 100,
            opacity: 1 - self.progress * 0.6,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black"
    >
      {/* ── LightPillar — top white beam ── */}
      <div className="pointer-events-none absolute inset-0">
        <LightPillar
          topColor="#ffffff"
          bottomColor="#888888"
          intensity={1}
          rotationSpeed={1}
          pillarWidth={3.5}
          pillarHeight={0.28}
          glowAmount={0.004}
          noiseIntensity={0.4}
          quality="medium"
          mixBlendMode="screen"
        />
      </div> 

      {/* ── Secondary dimmer pillar ── */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <LightPillar
          topColor="#cccccc"
          bottomColor="#333333"
          intensity={0.5}
          rotationSpeed={0.75}
          pillarWidth={2.5}
          pillarHeight={0.22}
          glowAmount={0.003}
          quality="low"
          mixBlendMode="screen"
          pillarRotation={30}
        />
      </div>

      {/* ── Subtle grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* ── Radial vignette ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 30%, black 100%)",
        }}
      />

      {/* ── Bottom fade ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-32 pb-20 text-center">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/55 uppercase backdrop-blur-sm"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
          Independent Technology Studio
        </div>

        {/* Logo mark */}
        <div ref={logoRef} className="mb-8">
          <div
            className="relative mx-auto h-20 w-20"
            style={{ filter: "drop-shadow(0 0 50px rgba(255,255,255,0.12))" }}
          >
            <Image
              src="/LogoMiniDark.png"
              alt="VikLabs"
              width={80}
              height={80}
              className="object-contain invert"
              priority
            />
          </div>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="mb-6 text-5xl leading-[1.02] font-black tracking-tight text-white md:text-7xl lg:text-[5.5rem]"
        >
          Where Ideas
          <br />
          <span className="text-white/20">Become </span>
          <span className="text-white">Products</span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-white/40 md:text-xl"
        >
          VikLabs is an independent studio crafting exceptional digital products
          — from concept to code to launch. Engineering precision meets creative
          ambition.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-black shadow-2xl shadow-white/10 transition-all duration-200 hover:bg-white/90"
          >
            View Our Work
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/65 backdrop-blur-sm transition-all duration-200 hover:border-white/40 hover:text-white"
          >
            Start a Project
          </Link>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {[
            { value: "50+", label: "Products Shipped" },
            { value: "12", label: "Team Members" },
            { value: "6", label: "Years Active" },
            { value: "100%", label: "Open Source Friendly" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-2xl font-black text-white">{item.value}</div>
              <div className="mt-1 text-xs font-medium text-white/25">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-white/20"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">
          Scroll
        </span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </section>
  );
}
