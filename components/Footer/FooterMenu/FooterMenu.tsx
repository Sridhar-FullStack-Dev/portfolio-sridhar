export default function FooterMenu() {
  return (
    <div className="h-12 absolute bottom-0 left-0 w-full">
      <div className="bg-alt-black py-3 px-12 flex justify-between items-center milker-font tracking-wider text-[10px]">
        <div className="text-left bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
          @{new Date().getFullYear()} All rights reserved.
        </div>

        <div className="text-right bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
          This website contains cookies
        </div>

        <div className="text-right bg-clip-text text-transparent bg-gradient-to-r from-neutral-200 to-neutral-600">
          Thank you for visiting my portfolio!
        </div>
      </div>
    </div>
  );
}
