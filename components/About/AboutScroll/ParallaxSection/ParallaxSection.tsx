import Image from "next/image";

export default function ParallaxSection() {
  return (
    <div className="flex justify-between items-center relative">
      <div className="relative w-1/3">
        <div data-scroll data-scroll-speed="0.2">
          <Image
            src={"/About/1.jpg"}
            alt=""
            height={400}
            width={400}
            className="w-96"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
            To deliver innovative, user-friendly online solutions that empower
            individuals and businesses, including those without technical
            expertise, to thrive in the digital landscape.
          </p>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.3"
          className="absolute top-1/2 -left-20 text-8xl"
        >
          Mission
        </div>
      </div>

      <div className="relative mt-32 w-1/3">
        <div data-scroll data-scroll-speed="0.4">
          <Image
            src={"/About/2.jpg"}
            alt=""
            height={400}
            width={400}
            className="w-96"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
            To create a digital ecosystem where every individual and business,
            regardless of their background, can seamlessly access and benefit
            from online services to achieve growth and success.
          </p>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.5"
          className="absolute top-1/2 -left-20 text-8xl px-4"
        >
          Vision
        </div>
      </div>

      <div className="relative mt-64 w-1/3">
        <div data-scroll data-scroll-speed="0.6">
          <Image
            src={"/About/3.jpg"}
            alt=""
            height={400}
            width={400}
            className="w-96"
          />

          <p className="font-sans text-alt-white opacity-70 pt-4 text-xs w-96 text-justify">
            To simplify digital adoption for everyone, enabling businesses of
            all sizes to enhance their online presence, streamline operations,
            and achieve sustainable growth.
          </p>
        </div>

        <div
          data-scroll
          data-scroll-speed="0.7"
          className="absolute top-1/2 -left-20 text-8xl"
        >
          Goal
        </div>
      </div>
    </div>
  );
}
