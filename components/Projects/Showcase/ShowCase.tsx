import { IoMdArrowBack } from "react-icons/io";
import WoodBird from "./WoodBird";
import { useRouter } from "next/navigation";
import MinimalGoods from "./MinimalGoods";
import Minibricks from "./Minibricks";
import Framer from "./Framer";
import CinemaPoint from "./CinemaPoint";
import MariaCars from "./MariaCars";
import P8IO from "./P8IO";

interface Props {
  title: string | string[] | undefined;
}

export default function ShowCase({ title }: Props) {
  const router = useRouter();
  const titles = decodeURIComponent(title as string) as keyof typeof components;
  return (
    <div
      onContextMenu={(e: React.MouseEvent) => {
        e.preventDefault();
      }}
      className="h-screen w-screen flex justify-center items-center bg-black overflow-hidden relative"
    >
      {components[titles]}

      <div
        onClick={() => router.back()}
        className="text-alt-white absolute top-0 left-5 flex justify-center items-center pz-4 py-2 cursor-pointer"
      >
        <IoMdArrowBack className="mr-2" /> Go back
      </div>
    </div>
  );
}

const components = {
  "maria cars": <MariaCars />,
  "p8.io": <P8IO />,
  "Wood Bird": <WoodBird />,
  "Minimal Goods": <MinimalGoods />,
  "Mini Bricks": <Minibricks />,
  "Hold Work": <Minibricks />,
  Framer: <Framer />,
  "Cinema Point": <CinemaPoint />,
};
