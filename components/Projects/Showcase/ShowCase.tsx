import { IoMdArrowBack } from "react-icons/io";
import WoodBird from "./WoodBird";
import { useRouter } from "next/navigation";
import MinimalGoods from "./MinimalGoods";

interface Props {
  title: string | string[] | undefined;
}

export default function ShowCase({ title }: Props) {
  const router = useRouter();
  const titles = decodeURIComponent(title as string);

  return (
    <div
      onContextMenu={(e: React.MouseEvent) => {
        e.preventDefault();
      }}
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden relative"
    >
      {titles === "Wood Bird" && <WoodBird />}
      {titles === "Minimal Goods" && <MinimalGoods />}

      <div
        onClick={() => router.back()}
        className="text-alt-white absolute top-0 left-5 flex justify-center items-center pz-4 py-2 cursor-pointer"
      >
        <IoMdArrowBack className="mr-2" /> Go back
      </div>
    </div>
  );
}
