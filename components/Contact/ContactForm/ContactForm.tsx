import Link from "next/link";
import { PiPhoneCallBold } from "react-icons/pi";
import FormContent from "./FormContent/FormContent";

export default function ContactForm() {
  return (
    <div className="houseMontage-font bg-alt-white text-black h-fit relative rounded-3xl">
      <div className="flex justify-between items-center h-full">
        <FormContent />
      </div>

      <div className="absolute top-2 left-5 font-sans text-gray-400 flex justify-between items-center w-full">
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
    </div>
  );
}
