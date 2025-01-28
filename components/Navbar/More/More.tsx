import { RiShoppingBag4Line } from "react-icons/ri";
import { GoVerified } from "react-icons/go";
import MobileMenus from "../Menus/MobileMenus/MobileMenus";

export default function More() {
  return (
    <div className="w-1/3 flex justify-end items-center gap-4">
      <RiShoppingBag4Line />
      {/* <GoVerified /> */}
      <MobileMenus />
    </div>
  );
}
