"use client";

import Hero from "@/components/hero/hero";
import About from "@/components/about/about";
import ProjectsGallery from "@/components/projects/projects-gallery";
import Projects from "@/components/projects/Projects";
import Certifications from "@/components/certifications/Certifications";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main>
      {/* Hero Section - Introduction */}
      <Hero />

      {/* About Section - Your Story */}
      <About />

      {/* NEW: Circular Gallery - Interactive 3D Project Showcase */}
      {/* Eye-catching, modern way to display your best projects */}
      <section id="projects-showcase" className="relative w-full">
        <ProjectsGallery />
      </section>

      {/* EXISTING: Traditional Grid Layout - Detailed Project Information */}
      {/* Provides comprehensive project details, tech stacks, and links */}
     
      {/* Certifications Section - Credentials & Learning */}
      <Certifications />

      {/* Future Sections - Coming Soon */}
      {/* <Experience /> - Your professional experience timeline */}
      {/* <Resume /> - Downloadable resume section */}
      {/* <Contact /> - Contact form or contact information */}

      {/* Footer - Navigation & Social Links */}
      <Footer />
    </main>
  );
}
