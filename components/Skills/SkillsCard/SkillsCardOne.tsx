import { cn } from "@/lib/utils";
import AWSSVG from "../SVGs/AWS";
import GithubSVG from "../SVGs/Github";
import MongodbSVG from "../SVGs/MongoDB";
import TailwindSvg from "../SVGs/TailwindCSS";

export const SkillCardOne = () => {
  return (
    <figure
      className={cn(
        "relative pointer-events-none cursor-pointer overflow-hidden rounded-xl p-4"
      )}
    >
      <div className="flex flex-row items-center gap-10">
        
      <MongodbSVG />
        <TailwindSvg />
        <AWSSVG />
        <GithubSVG />
      </div>
    </figure>
  );
};