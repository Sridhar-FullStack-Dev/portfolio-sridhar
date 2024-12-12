import Left from "./Left/Left";
import Right from "./Right/Right";

export default function ContactForm() {
  return (
    <div className="houseMontage-font bg-alt-white text-black h-screen">
      <div className="flex justify-between items-center h-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}
