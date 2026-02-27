"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Zap, ArrowRight, Star } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "~/components/ui/card";
import { Separator } from "~/components/ui/separator";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "Starter",
    tagline: "For early-stage founders",
    price: "$4,999",
    period: "/project",
    description:
      "Everything you need to validate your idea and ship a polished MVP to your first users.",
    badge: null,
    features: [
      "Up to 4 weeks delivery",
      "1 core product feature",
      "React / Next.js frontend",
      "REST API backend",
      "Basic CI/CD pipeline",
      "2 rounds of revisions",
      "30-day post-launch support",
    ],
    cta: "Start a Project",
    ctaVariant: "outline" as const,
    highlight: false,
  },
  {
    name: "Studio",
    tagline: "For scaling teams",
    price: "$12,999",
    period: "/month",
    description:
      "A dedicated team embedded in your workflow. The full VikLabs stack — engineering, design, and AI.",
    badge: "Most Popular",
    features: [
      "Ongoing monthly engagement",
      "Full-stack engineering",
      "AI / ML integration",
      "Design system & UI",
      "DevOps & cloud infra",
      "Weekly sprint demos",
      "Unlimited revisions",
      "Priority support (4-hr SLA)",
      "Dedicated Slack channel",
    ],
    cta: "Book a Call",
    ctaVariant: "default" as const,
    highlight: true,
  },
  {
    name: "Enterprise",
    tagline: "For large organisations",
    price: "Custom",
    period: "",
    description:
      "White-glove service with custom contracts, NDAs, compliance (SOC2/HIPAA), and a named CTO-level lead.",
    badge: null,
    features: [
      "Custom SLA & contract",
      "Dedicated team of 5+",
      "SOC2 / GDPR / HIPAA",
      "On-site workshops",
      "IP transfer & full ownership",
      "Executive monthly reviews",
      "24/7 critical support",
      "Custom integrations",
    ],
    cta: "Contact Us",
    ctaVariant: "outline" as const,
    highlight: false,
  },
];

const guarantees = [
  { icon: Check, text: "No lock-in contracts" },
  { icon: Star, text: "Money-back guarantee" },
  { icon: Zap, text: "First sprint free" },
];

export default function PricingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const guaranteeRef = useRef<HTMLDivElement>(null);

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
          scrollTrigger: { trigger: headerRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        cardsRef.current?.children ?? [],
        { y: 60, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        },
      );

      gsap.fromTo(
        guaranteeRef.current?.children ?? [],
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: guaranteeRef.current, start: "top 85%" },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative overflow-hidden bg-black px-6 py-24 md:py-32"
    >
      {/* Top border gradient */}
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-6 rounded-full border-white/10 bg-white/3 px-4 py-1.5 text-xs tracking-widest text-white/40 uppercase"
          >
            ◆ Transparent Pricing
          </Badge>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Simple, Honest Pricing
          </h2>
          <p className="mx-auto max-w-xl text-lg leading-relaxed font-light text-white/40">
            No hidden fees. No "call for pricing" runarounds. Pick the plan that
            fits, and we'll get to work immediately.
          </p>
        </div>

        {/* Cards grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 items-start gap-5 md:grid-cols-3"
        >
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={[
                "relative flex flex-col gap-0 rounded-2xl py-0 transition-all duration-300",
                plan.highlight
                  ? "scale-[1.02] border-white bg-white text-black shadow-2xl shadow-white/10"
                  : "border-white/8 bg-white/2 text-white hover:border-white/20",
              ].join(" ")}
            >
              {/* Popular badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <Badge className="rounded-full border border-white/20 bg-black px-3 py-1 text-xs tracking-widest text-white uppercase shadow-lg">
                    {plan.badge}
                  </Badge>
                </div>
              )}

              <CardHeader className="px-7 pt-8 pb-0">
                <div className="mb-3 flex items-start justify-between">
                  <div>
                    <CardTitle
                      className={[
                        "mb-1 text-xl font-black",
                        plan.highlight ? "text-black" : "text-white",
                      ].join(" ")}
                    >
                      {plan.name}
                    </CardTitle>
                    <CardDescription
                      className={
                        plan.highlight ? "text-black/50" : "text-white/30"
                      }
                    >
                      {plan.tagline}
                    </CardDescription>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 mb-2 flex items-baseline gap-1">
                  <span
                    className={[
                      "text-4xl font-black tracking-tight",
                      plan.highlight ? "text-black" : "text-white",
                    ].join(" ")}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className={[
                        "text-sm font-medium",
                        plan.highlight ? "text-black/40" : "text-white/30",
                      ].join(" ")}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                <p
                  className={[
                    "text-xs leading-relaxed font-light",
                    plan.highlight ? "text-black/50" : "text-white/30",
                  ].join(" ")}
                >
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="flex-1 px-7 pt-6 pb-0">
                <Separator
                  className={
                    plan.highlight ? "mb-5 bg-black/10" : "mb-5 bg-white/6"
                  }
                />
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5">
                      <div
                        className={[
                          "flex h-4 w-4 shrink-0 items-center justify-center rounded-full",
                          plan.highlight ? "bg-black" : "bg-white/8",
                        ].join(" ")}
                      >
                        <Check
                          className={[
                            "h-2.5 w-2.5",
                            plan.highlight ? "text-white" : "text-white/60",
                          ].join(" ")}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className={[
                          "text-xs font-medium",
                          plan.highlight ? "text-black/70" : "text-white/50",
                        ].join(" ")}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="px-7 pt-6 pb-8">
                <Button
                  asChild
                  variant={plan.highlight ? "default" : "outline"}
                  size="lg"
                  className={[
                    "group h-11 w-full rounded-xl text-sm font-bold",
                    plan.highlight
                      ? "border-0 bg-black text-white hover:bg-black/90"
                      : "border-white/15 bg-transparent text-white/70 hover:border-white/40 hover:text-white",
                  ].join(" ")}
                >
                  <Link href="#contact">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Guarantees strip */}
        <div
          ref={guaranteeRef}
          className="mt-14 flex flex-wrap items-center justify-center gap-10"
        >
          {guarantees.map((g) => {
            const Icon = g.icon;
            return (
              <div
                key={g.text}
                className="flex items-center gap-2 text-white/30"
              >
                <Icon className="h-4 w-4" />
                <span className="text-sm font-medium">{g.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
