import Image from "next/image";
import { TestimonialCardDetails } from "./TestimonialsCard";

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
      className="absolute inset-0 rotate-y-180 backface-hidden rounded-3xl overflow-hidden cursor-pointer"
    >
      {flippedCards[dataIndex] && (
        <div className="relative h-full">
          <video
            autoPlay
            className="w-full h-full object-cover filter brightness-110 contrast-125 saturate-150"
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
  );
}
