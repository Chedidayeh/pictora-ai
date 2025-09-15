"use client"
import CallToAction from "@/components/call-to-action";
import FooterSection from "@/components/footer";
import { Guide } from "@/components/Guide";
import { Pricing } from "@/components/pricing";
import { Testimonials } from "@/components/testimonials";
import { Features } from "@/components/features";
import { Hero } from "@/components/Hero";
import { TextHoverEffect } from "@/components/TextHoverEffect";
import { Showcase } from "@/components/Showcase";
import { useView } from "@/hooks/use-inViews";

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const [ref, isInView] = useView({ threshold: 0.1 })
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 transform ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
    >
      {children}
    </div>
  )
}

export default function Home() {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      <AnimatedSection>
        <Guide />
      </AnimatedSection>

      <AnimatedSection>
        <Features />
      </AnimatedSection>

      {/* <Showcase/> */}

      <AnimatedSection>
        <Pricing />
      </AnimatedSection>

      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>

      <AnimatedSection>
        <CallToAction />
      </AnimatedSection>

      <FooterSection />
      <TextHoverEffect />
    </>
  );
}
