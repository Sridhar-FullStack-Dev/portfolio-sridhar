import Link from "next/link";
import { RiShoppingBag4Line } from "react-icons/ri";

export default function Pricing() {
  return (
    <Link href={"/pricing"}>
      <RiShoppingBag4Line />
    </Link>
  );
}
