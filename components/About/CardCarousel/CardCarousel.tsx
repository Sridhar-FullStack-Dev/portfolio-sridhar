import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function CardCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const carousel = carouselRef.current;
    if (!carousel) return;

    gsap.to(carousel, {
      x: () => -(carousel.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=128",
        pin: true,
        scrub: 1,
        end: () => `+=${carousel.scrollWidth - window.innerWidth + 100}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="container mt-14">
      <div ref={sectionRef} className="h-screen">
        <div>
          <div
            ref={carouselRef}
            className="flex items-center justify-start gap-8 ml-[10%]"
          >
            {cardCarouselData.map((cards, cardsIndex) => {
              return (
                <div
                  key={cardsIndex}
                  className="h-[45rem] w-[25rem] rounded-3xl overflow-hidden relative flex-shrink-0"
                >
                  <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-black/50 to-white/10" />

                  <Image
                    src={cards.src}
                    alt={cards.heading}
                    height={1920}
                    width={2880}
                    priority={true}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute top-10 left-10 z-10 text-white">
                    <h1 className="text-6xl sarcolenta-font lowercase">
                      {cards.heading}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

interface CardCarouselData {
  src: string;
  heading: string;
  description: string;
}

const cardCarouselData: CardCarouselData[] = [
  {
    src: "https://images.pexels.com/photos/4195342/pexels-photo-4195342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "entreprenuer",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2102416/pexels-photo-2102416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "developer",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "designer",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/5439460/pexels-photo-5439460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "friendliness",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "trending",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "designer",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/5439460/pexels-photo-5439460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "friendliness",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "trending",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/5439460/pexels-photo-5439460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "friendliness",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/433333/pexels-photo-433333.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "trending",
    description: "",
  },
];
