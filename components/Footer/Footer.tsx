import FooterMenu from "./FooterMenu/FooterMenu";

export default function Footer() {
  return (
    <div
      className="relative h-[800px]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[calc(100vh+800px)] -top-[100vh]">
        <div className="h-[800px] sticky top-[calc(100vh-800px)]">
          <div className="bg-alt-black text-alt-white py-8 px-12 h-full w-full flex flex-col justify-between relative">
            <FooterMenu />
          </div>
        </div>
      </div>
    </div>
  );
}
