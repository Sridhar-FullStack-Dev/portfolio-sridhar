"use client";
import CardCarousel from "./CardCarousel/CardCarousel";
import { VelocityScroll } from "../ui/scroll-based-velocity";

export default function Services() {
  return (
    <div id="services" className="mt-64">
      <VelocityScroll
        text="✦ Services"
        default_velocity={3}
        className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
      />

      <CardCarousel />
    </div>
  );
}
