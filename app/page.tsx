"use client";
import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Cursor from "@/components/Cursor/Cursor";
import Doodle from "@/components/Doodle/Doodle";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  return (
    <main>
      <Cursor />
      <Intro />
      {/* <Hero /> */}
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Doodle />
      <Footer />
    </main>
  );
}
