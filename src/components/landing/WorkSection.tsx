"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { projects } from "~/lib/const";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function WorkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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

      const rows = sectionRef.current?.querySelectorAll(".project-row");
      if (rows) {
        gsap.fromTo(
          rows,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector(".project-list"),
              start: "top 75%",
            },
          },
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-16">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/10 bg-white/3 px-4 py-1.5 text-xs tracking-widest text-white/40 uppercase"
          >
            ◆ Selected Work
          </Badge>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              What We've Built
            </h2>
            <Button
              variant="ghost"
              asChild
              className="group px-0 text-sm font-medium text-white/40 hover:bg-transparent hover:text-white"
            >
              <Link href="#contact">
                See all projects
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Project list */}
        <div className="project-list">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`project-row group flex cursor-pointer flex-col gap-6 border-b border-white/6 py-8 transition-all duration-300 md:flex-row md:items-center ${
                hoveredId && hoveredId !== project.id
                  ? "opacity-30"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Number */}
              <span className="w-10 shrink-0 font-mono text-sm font-black text-white/15">
                {project.id}
              </span>

              {/* Title */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-3">
                  <h3 className="text-xl font-black text-white transition-colors group-hover:text-white md:text-2xl">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-white/0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/60" />
                </div>
                <p className="max-w-lg text-sm font-light text-white/30">
                  {project.description}
                </p>
              </div>

              {/* Category */}
              <div className="shrink-0 md:w-40">
                <span className="text-xs font-medium tracking-wider text-white/30 uppercase">
                  {project.category}
                </span>
              </div>

              {/* Tech stack */}
              <div className="flex shrink-0 flex-wrap gap-1.5 md:w-52">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="outline"
                    className="rounded-full border-white/8 px-2 py-0.5 text-[10px] font-medium text-white/25"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Year */}
              <span className="shrink-0 text-right font-mono text-xs font-medium text-white/20 md:w-10">
                {project.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
