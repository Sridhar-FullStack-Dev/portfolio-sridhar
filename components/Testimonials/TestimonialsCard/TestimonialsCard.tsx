import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function TestimonialsCard() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
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
          <CardSpotlight className="h-96 w-auto text-alt-white rounded-3xl overflow-hidden p-4 relative backface-hidden">
            <Image
              src={data.src}
              alt="logo"
              width={50}
              height={50}
              className="w-12 h-12 object-cover rounded-full shadow-lg relative z-20"
            />

            <AnimatePresence mode="wait">
              {!flippedCards[dataIndex] && (
                <motion.blockquote
                  className="mt-8 relative z-20"
                  initial={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p
                    className="text-lg"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    "{data.blockquote}"
                  </motion.p>

                  <motion.footer
                    className="mt-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <cite className="testimonial">
                      <p className="font-medium">{data.name}</p>
                    </cite>
                    <span className="text-sm text-gray-600 italic">
                      - {data.position}
                    </span>
                  </motion.footer>
                </motion.blockquote>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {!flippedCards[dataIndex] && (
                <motion.div
                  onClick={() => handleFlip(dataIndex)}
                  className="absolute right-4 bottom-4 z-20 bg-white px-4 py-2 bg-opacity-5 backdrop-blur-sm cursor-pointer rounded-2xl"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoPlay className="text-2xl" />
                </motion.div>
              )}
            </AnimatePresence>
          </CardSpotlight>

          <div
            onClick={() => handleFlip(dataIndex)}
            className="absolute inset-0 rotate-y-180 backface-hidden rounded-3xl overflow-hidden cursor-pointer"
          >
            {flippedCards[dataIndex] && (
              <div className="relative h-full">
                <video
                  autoPlay
                  className="w-full h-full object-cover"
                  src={data.testimonialVideo}
                >
                  Your browser does not support the video tag.
                </video>

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                  <div className="flex items-center gap-3">
                    <Image
                      src={data.src}
                      alt="logo"
                      width={50}
                      height={50}
                      className="w-12 h-12 object-cover rounded-full shadow-lg"
                    />
                    <div>
                      <h3 className="font-medium text-white">{data.name}</h3>
                      <p className="text-sm text-gray-200">{data.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

const testimonialCardDetails = [
  {
    name: "Mejules",
    position: "Founder & CEO, Maria Cars",
    src: "https://images.pexels.com/photos/30247059/pexels-photo-30247059/free-photo-of-close-up-portrait-of-a-domestic-tabby-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    blockquote:
      "This service transformed my business! The team was incredibly helpful, and the results speak for themselves. Highly recommended!",
    testimonialVideo: "/Testimonials/video.mp4",
  },
];
