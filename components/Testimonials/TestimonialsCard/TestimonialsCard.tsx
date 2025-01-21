import { useState } from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";

export default function TestimonialsCard() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => {
      const resetCards: { [key: number]: boolean } = {};
      resetCards[index] = !prev[index];
      
      return resetCards;
    });
  };

  return (
    <div className="px-16 mt-8 grid grid-cols-5 gap-8">
      {testimonialCardDetails.map((data, dataIndex) => (
        <div
          key={dataIndex}
          className={`relative transition-transform duration-700 preserve-3d ${
            flippedCards[dataIndex] ? "rotate-y-180" : ""
          }`}
          style={{ transformStyle: "preserve-3d" }}
        >
          <FrontCard
            data={data}
            dataIndex={dataIndex}
            flippedCards={flippedCards}
            handleFlip={handleFlip}
          />

          <BackCard
            data={data}
            dataIndex={dataIndex}
            handleFlip={handleFlip}
            flippedCards={flippedCards}
          />
        </div>
      ))}
    </div>
  );
}

export interface TestimonialCardDetails {
  name: string;
  position: string;
  src: string;
  blockquote: string;
  testimonialVideo: string;
}

const testimonialCardDetails: TestimonialCardDetails[] = [
  {
    name: "Mejules",
    position: "Founder & CEO, Maria Cars",
    src: "https://images.pexels.com/photos/30247059/pexels-photo-30247059/free-photo-of-close-up-portrait-of-a-domestic-tabby-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "This service transformed my business! The team was incredibly helpful, and the results speak for themselves. Highly recommended!",
    testimonialVideo: "/Testimonials/video.mp4",
  },
];
