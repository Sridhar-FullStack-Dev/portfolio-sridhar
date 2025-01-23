import { useState } from "react";
import BackCard from "./BackCard";
import FrontCard from "./FrontCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { testimonialCardDetails } from "@/lib/const";

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

  const pagination = {
    clickable: true,
    renderBullet: function (_: unknown, className: string) {
      return `<span class="${className} custom-pagination-bullet"></span>`;
    },
  };

  return (
    <div className="px-16 mt-8">
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        loop={true}
        pagination={pagination}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 10 },
          1024: { slidesPerView: 4, spaceBetween: 10 },
          1280: { slidesPerView: 5, spaceBetween: 10 },
        }}
        modules={[Pagination]}
        className="mySwiper h-[29rem]"
      >
        {testimonialCardDetails.map((data, dataIndex) => (
          <SwiperSlide key={dataIndex}>
            <div
              className="relative w-full h-full"
              style={{ perspective: "2000px" }}
            >
              <div
                className={`relative transition-all duration-500 w-full h-full`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flippedCards[dataIndex]
                    ? "rotateY(180deg)"
                    : "rotateY(0deg)",
                }}
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
