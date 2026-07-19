import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Certifications />

      {/* Later */}
      {/* Experience */}
      {/* Resume */}
      {/* Contact */}

      <Footer />
    </main>
  );
}