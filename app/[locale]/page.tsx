import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects/projects";
import { About } from "@/components/about";
import { Testimonial } from "@/components/testimonial";
import { Contact } from "@/components/contact";
import { HomeNav } from "@/components/nav/site-nav";
import { AnimatedSection } from "@/components/animated-section";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HomeNav />
      {/* tabIndex -1 : sans lui, l'ancre du lien d'evitement fait defiler mais
          ne deplace pas le focus, qui repart du haut au Tab suivant.
          Le main n'impose plus de colonne : le hero et les projets vont
          jusqu'aux bords de l'ecran, les autres sections passent par
          Container. Les preuves (projets) viennent avant les offres. */}
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Container>
          <AnimatedSection>
            <TrustBar />
          </AnimatedSection>
        </Container>
        <Projects />
        <Container>
          <AnimatedSection>
            <Services />
          </AnimatedSection>
          <AnimatedSection>
            <Testimonial />
          </AnimatedSection>
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
