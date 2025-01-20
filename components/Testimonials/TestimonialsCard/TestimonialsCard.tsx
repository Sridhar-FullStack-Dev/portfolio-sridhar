import { CardSpotlight } from "@/components/ui/card-spotlight";
import Image from "next/image";
import { IoPlay } from "react-icons/io5";

export default function TestimonialsCard() {
  return (
    <div className="px-16 mt-8 grid grid-cols-5 gap-8">
      {testimonialCardDetails.map((data, dataIndex) => (
        <CardSpotlight
          key={dataIndex}
          className="h-96 w-auto text-alt-white rounded-3xl overflow-hidden p-4 relative"
        >
          <Image
            src={
              "https://images.pexels.com/photos/30247059/pexels-photo-30247059/free-photo-of-close-up-portrait-of-a-domestic-tabby-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt="logo"
            width={50}
            height={50}
            className="w-12 h-12 object-cover rounded-full shadow-lg relative z-20"
          />

          <blockquote className="mt-8 relative z-20">
            <p className="text-lg">"{data.blockquote}"</p>

            <footer className="mt-4">
              <cite className="testimonial">
                <p className="font-medium">Mejules</p>
              </cite>
              <span className="text-sm text-gray-600 italic">
                - Founder & CEO, Maria Cars
              </span>
            </footer>
          </blockquote>

          <div className="absolute right-4 bottom-4 z-20 bg-white px-4 py-2 bg-opacity-5 backdrop-blur-sm cursor-pointer rounded-2xl">
            <IoPlay className="text-2xl" />
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
}

const testimonialCardDetails = [
  {
    name: "Mejules",
    position: "Founder & CEO, Maria Cars",
    blockquote:
      "This service transformed my business! The team was incredibly helpful, and the results speak for themselves. Highly recommended!",
    testimonial:
      "This service transformed my business! The team was incredibly helpful, and the results speak for themselves. Highly recommended!",
  },
];
