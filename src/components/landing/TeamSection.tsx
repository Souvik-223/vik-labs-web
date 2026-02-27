"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { team } from "~/lib/const";
import { Badge } from "~/components/ui/badge";
import { Card, CardContent } from "~/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        cardsRef.current?.children ?? [],
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="team"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 border-y border-white/6" />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/10 bg-white/3 px-4 py-1.5 text-xs tracking-widest text-white/40 uppercase"
          >
            ◆ The Team
          </Badge>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Built by Builders
          </h2>
          <p className="mx-auto max-w-xl text-lg font-light text-white/40">
            A small, elite team with big-company experience. We care deeply
            about craft and take pride in every line of code.
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {team.map((member) => (
            <Card
              key={member.name}
              className="group cursor-pointer gap-0 rounded-2xl border-white/8 bg-white/2 py-0 transition-all duration-300 hover:border-white/20 hover:bg-white/4"
            >
              <CardContent className="p-6">
                {/* Avatar */}
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-white/8 transition-all duration-300 group-hover:border-white/20">
                  <span className="text-base font-black tracking-tight text-white">
                    {member.initials}
                  </span>
                </div>

                {/* Info */}
                <h3 className="mb-0.5 text-base font-bold text-white">
                  {member.name}
                </h3>
                <p className="mb-4 text-xs font-medium tracking-wider text-white/35 uppercase">
                  {member.role}
                </p>
                <p className="mb-5 text-xs leading-relaxed font-light text-white/30">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {member.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="rounded-full border-white/8 px-2 py-0.5 text-[10px] text-white/25"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
