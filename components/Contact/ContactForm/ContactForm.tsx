import Link from "next/link";
import { PiPhoneCallBold } from "react-icons/pi";
import Left from "./Left/Left";
import { IoMenuOutline } from "react-icons/io5";
import { useLenis } from "lenis/react";
import Right from "./Right/Right";

export default function ContactForm() {
  const lenis = useLenis();
  const element = document.getElementById("formContent");

  return (
    <div
      id="formContent"
      className="houseMontage-font bg-alt-white text-black h-screen relative"
    >
      <div className="flex justify-between items-center h-full">
        <Left />
        <Right />
      </div>

      <div className="absolute top-2 left-5 font-sans text-gray-400 flex justify-between items-center w-1/2">
        <div className="flex justify-center items-center">
          <div className="rounded-full text-lg p-2">
            <PiPhoneCallBold />
          </div>

          <p className="ml-2 text-xs">
            For faster response{" "}
            <Link href={"tel: +919843849354"} className="underline font-bold">
              click here
            </Link>
          </p>
        </div>

        <div className="text-xs mr-14">
          <span className="text-sm text-red-600">*</span> Link not working? call{" "}
          <span className="underline font-bold">+919843849354</span>
        </div>
      </div>

      <div
        onClick={() => {
          if (element) {
            const targetPosition = element.offsetTop - 50;
            lenis?.scrollTo(targetPosition, { lerp: 0.02 });
          }
        }}
        className="text-black absolute bottom-5 left-1/2 cursor-pointer "
      >
        <IoMenuOutline className="text-xl text-gray-400" />
      </div>
    </div>
  );
}
