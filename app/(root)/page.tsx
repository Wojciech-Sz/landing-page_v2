import About from "@/components/shared/About";
import Contact from "@/components/shared/Contact";
import Hero from "@/components/shared/Hero";
import Offer from "@/components/shared/Offer";
import Partners from "@/components/shared/Partners";
import Projects from "@/components/shared/Projects";
import Team from "@/components/shared/Team";
import Testimonials from "@/components/shared/Testimonials";

export default function Home() {
  return (
    <section>
      <Hero />
      <About />
      <Team />
      <Offer />
      <Projects />
      <Partners />
      <Testimonials />
      <Contact />
    </section>
  );
}
