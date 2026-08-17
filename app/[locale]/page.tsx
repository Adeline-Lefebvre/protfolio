import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";
import { Contact } from "@/components/contact";
import { HomeNav } from "@/components/nav/site-nav";
import { AnimatedSection } from "@/components/animated-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeNav />
      {/* tabIndex -1 : sans lui, l'ancre du lien d'evitement fait defiler mais
          ne deplace pas le focus, qui repart du haut au Tab suivant. */}
      <main
        id="main"
        tabIndex={-1}
        className="mx-auto max-w-6xl px-6 pt-20 outline-none md:px-12 lg:px-16"
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
