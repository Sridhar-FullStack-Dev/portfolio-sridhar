import { RiShoppingBag4Line } from "react-icons/ri";
import { GoVerified } from "react-icons/go";

interface MoreProps {
  isContactSection: boolean;
}

export default function More({ isContactSection }: MoreProps) {
  return (
    <div
      className={`w-1/3 flex justify-end items-center gap-4 ${
        isContactSection ? "text-alt-black" : "text-alt-white"
      }`}
    >
      <RiShoppingBag4Line />
      <GoVerified />
    </div>
  );
}
