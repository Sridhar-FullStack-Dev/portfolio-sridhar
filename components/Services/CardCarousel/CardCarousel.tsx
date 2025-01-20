import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import Image from "next/image";
import { PiPhoneCallBold } from "react-icons/pi";
import Link from "next/link";
import { useLenis } from "lenis/react";

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
                  className="h-[45rem] w-[25rem] bg-white text-black rounded-3xl border-4 overflow-hidden relative flex-shrink-0 p-5"
                >
                  <h1 className="text-6xl h-16 sarcolenta-font capitalize">
                    {cards.heading}
                  </h1>

                  <DotLottieReact src={cards.src} loop autoplay />

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

interface CardCarouselData {
  src: string;
  heading: string;
  description: string;
}

const cardCarouselData: CardCarouselData[] = [
  {
    src: "https://lottie.host/13d7c02a-8070-4fe1-ac44-617151c8ee72/TIn3RoTP6Q.lottie",
    heading: "website designing",
    description: "",
  },
  {
    src: "https://lottie.host/31fbf91b-f14d-436a-a96b-f449267c093f/jITmGRvjEj.lottie",
    heading: "E-commerce Solutions",
    description: "",
  },
  {
    src: "https://lottie.host/cafaa3ff-69e1-4dd9-b07f-16e1d66843d7/8N1Z6wzNkn.lottie",
    heading: "Deployment and Hosting",
    description: "",
  },
  {
    src: "https://lottie.host/c25383ca-9288-4141-bd37-2d68e14b0282/pkma0hC5ov.lottie",
    heading: "C.M.S Management",
    description: "",
  },
  {
    src: "https://lottie.host/5cac3316-31a5-4213-9645-455edfe6fa75/FGUvnraSaJ.lottie",
    heading: "Boost Traffic with SEO",
    description: "",
  },
  {
    src: "https://lottie.host/63d2f59b-40b8-4240-a579-25d5c20eb253/Tg6ONBypmm.lottie",
    heading: "And much more...",
    description: "",
  },
];
