import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
                    <h1 className="text-6xl sarcolenta-font capitalize">
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
    src: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Web designing",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "Web Application development",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    heading: "SEO",
    description: "",
  },
  {
    src: "https://img.freepik.com/free-vector/hand-drawn-illustrations-collection_1096-260.jpg?t=st=1734958081~exp=1734961681~hmac=d82b862c269e501c27c9bbc1baeea6be42a4900b11b12c6d0e50531fcddf06c8&w=740",
    heading: "Digital Marketing",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Content Creation",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Content Creation",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Content Creation",
    description: "",
  },
  {
    src: "https://images.pexels.com/photos/2047914/pexels-photo-2047914.jpeg?auto=compress&cs=tinysrgb&w=600",
    heading: "Content Creation",
    description: "",
  },
];
