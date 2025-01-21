import { FaHeart } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

export default function FooterMenu() {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="text-white py-3 px-12 flex justify-between items-center font-sans text-xs">
        <div className="text-left">
          @{new Date().getFullYear()} All rights reserved.
        </div>

        <div className="text-center">This website contains cookies</div>

        <div className="text-right flex justify-center items-center gap-2">
          Thank you for visiting my portfolio!
          <FaHeart className="text-red-600" />
        </div>
      </div>
    </div>
  );
}
