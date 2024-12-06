"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cursor from "@/components/Cursor/Cursor";
import Doodle from "@/components/Doodle/Doodle";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Services from "@/components/Services/Services";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {

  return (
    <div>
      <Cursor />
      <Intro />
      <Hero />
      <About />
      <Services />
      <Doodle />
      <Contact />
      <Testimonials />
    </div>
  );
}
