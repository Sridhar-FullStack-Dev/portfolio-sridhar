import { cardCarouselData } from "@/lib/const";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { PiPhoneCallBold } from "react-icons/pi";

export default function CardCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const carousel = carouselRef.current;
    if (!carousel) return;

    gsap.to(carousel, {
      x: () => -(carousel.scrollWidth - window.innerWidth) * 1.5,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=128",
        pin: true,
        scrub: 3,
        end: () =>
          `+=${(carousel.scrollWidth - window.innerWidth) * 1.5 + 200}`,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="mt-14">
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
                  className="h-[45rem] w-[25rem] bg-white text-black rounded-3xl border-4 overflow-hidden relative flex-shrink-0 p-5"
                >
                  <h1 className="text-6xl h-16 sarcolenta-font capitalize">
                    {cards.heading}
                  </h1>

                  <DotLottieReact src={cards.src} loop autoplay />

                  {cardsIndex !== 5 && (
                    <Link
                      href={"#contacts"}
                      onClick={() => {
                        lenis?.scrollTo("#contacts", { lerp: 0.02 });
                      }}
                      className="w-full flex justify-center items-center absolute bottom-3 left-0 z-30"
                    >
                      <p className="px-8">{cards?.description}</p>
                    </Link>
                  )}

                  {cardsIndex === 5 && (
                    <Link
                      href={"#contacts"}
                      onClick={() => {
                        lenis?.scrollTo("#contacts", { lerp: 0.02 });
                      }}
                      className="w-full flex justify-center items-center absolute bottom-3 left-0 z-30"
                    >
                      <div className="bg-alt-black text-white rounded-full text-lg p-2">
                        <PiPhoneCallBold />
                      </div>

                      <p className="ml-2">
                        For more enquiry feel free to{" "}
                        <span className="underline font-medium">contact</span>{" "}
                        me
                      </p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


