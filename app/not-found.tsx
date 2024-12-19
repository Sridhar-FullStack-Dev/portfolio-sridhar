import { VelocityScroll } from "@/components/ui/scroll-based-velocity-2";
import Spline from "@splinetool/react-spline/next";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen w-screen relative">
      <Spline scene="https://prod.spline.design/l3e2Yz0hydL8rwNE/scene.splinecode" />

      <Link href={"/"} className="absolute bottom-0 left-0 w-full">
        <VelocityScroll
          text="🟒 Click here"
          default_velocity={3}
          className="text-4xl milker-font py-4 bg-alt-white text-alt-black"
        />
      </Link>
    </div>
  );
}
