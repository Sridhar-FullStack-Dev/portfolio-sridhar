"use client";
import Cursor from "@/components/Cursor/Cursor";
import Doodle from "@/components/Doodle/Doodle";
import Hero from "@/components/Hero/Hero";
import Intro from "@/components/Intro/Intro";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Cursor />
      <Intro />
      <Doodle />
      {/* <Hero /> */}
      {/* <Testimonials /> */}
    </div>
  );
}
