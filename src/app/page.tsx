import { type Metadata } from "next";
import Navbar from "~/components/landing/Navbar";
import HeroSection from "~/components/landing/HeroSection";
import StatsSection from "~/components/landing/StatsSection";
import ServicesSection from "~/components/landing/ServicesSection";
import ProcessSection from "~/components/landing/ProcessSection";
import WorkSection from "~/components/landing/WorkSection";
import TeamSection from "~/components/landing/TeamSection";
import PricingSection from "~/components/landing/PricingSection";
import CTASection from "~/components/landing/CTASection";
import Footer from "~/components/landing/Footer";

export const metadata: Metadata = {
  title: "VikLabs — Independent Technology Studio",
  description:
    "VikLabs is an independent technology studio crafting exceptional digital products — from concept to code to launch. Full-stack development, AI integration, and design systems.",
  keywords: [
    "VikLabs",
    "technology studio",
    "software development",
    "AI integration",
    "product engineering",
    "design systems",
    "full stack",
    "React",
    "Next.js",
  ],
  metadataBase: new URL("https://viklabs.dev"),
  openGraph: {
    title: "VikLabs — Independent Technology Studio",
    description:
      "Where ideas become products. We build exceptional digital products with engineering precision and creative ambition.",
    type: "website",
    images: ["/Logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VikLabs — Independent Technology Studio",
    description:
      "Where ideas become products. We build exceptional digital products.",
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "apple-touch-icon", url: "/LogoMiniDark.png" },
  ],
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <TeamSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
