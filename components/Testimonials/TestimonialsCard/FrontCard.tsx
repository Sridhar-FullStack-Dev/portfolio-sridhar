import { CardSpotlight } from "@/components/ui/card-spotlight";
import { IoPlay } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { TestimonialCardDetails } from "./TestimonialsCard";

interface FrontCardProps {
  data: TestimonialCardDetails;
  flippedCards: { [key: number]: boolean };
  handleFlip: (index: number) => void;
  dataIndex: number;
}

export default function FrontCard({
  data,
  handleFlip,
  flippedCards,
  dataIndex,
}: FrontCardProps) {
  return (
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
  );
}
