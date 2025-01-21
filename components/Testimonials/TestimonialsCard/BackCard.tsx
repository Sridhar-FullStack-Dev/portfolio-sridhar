import Image from "next/image";
import { TestimonialCardDetails } from "./TestimonialsCard";
import { motion, AnimatePresence } from "framer-motion";

interface BackCardProps {
  data: TestimonialCardDetails;
  dataIndex: number;
  flippedCards: { [key: number]: boolean };
  handleFlip: (index: number) => void;
}

export default function BackCard({
  data,
  dataIndex,
  handleFlip,
  flippedCards,
}: BackCardProps) {
  return (
    <div
      onClick={() => handleFlip(dataIndex)}
      className="absolute h-96 inset-0 rotate-y-180 backface-hidden rounded-3xl overflow-hidden cursor-pointer"
    >
      <AnimatePresence mode="wait">
        {flippedCards[dataIndex] && (
          <motion.div
            className="relative h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.video
              autoPlay
              className="w-full h-full object-cover filter brightness-110 contrast-125 saturate-150"
              src={data.testimonialVideo}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              exit={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              Your browser does not support the video tag.
            </motion.video>

            <motion.div
              className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
