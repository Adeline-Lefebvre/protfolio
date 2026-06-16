import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";
import { Contact } from "@/components/contact";
import { Navigation } from "@/components/navigation";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main
        role="main"
        aria-label="Portfolio content"
        className="mx-auto max-w-6xl px-6 py-8 md:px-12 lg:px-16"
      >
        <Hero />
        <AnimatedSection>
          <TrustBar />
        </AnimatedSection>
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <AnimatedSection>
          <Projects />
        </AnimatedSection>
        <AnimatedSection>
          <About />
        </AnimatedSection>
        <AnimatedSection>
          <Testimonial />
        </AnimatedSection>
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
      </main>
      <Footer />
    </div>
  );
}
