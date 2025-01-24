import { cn } from "@/lib/utils";
import FirebaseSVG from "../SVGs/Firebase";
import NextjsSVG from "../SVGs/NextJS";
import NodeJsSVG from "../SVGs/NodeJS";
import ReactjsSVG from "../SVGs/ReactJS";
import TypescriptSVG from "../SVGs/Typescript";

export const SkillCardTwo = () => {
  return (
    <figure
      className={cn(
        "relative pointer-events-none cursor-pointer overflow-hidden rounded-xl p-4"
      )}
    >
      <div className="flex flex-row items-center gap-10">
        <NextjsSVG />
        <ReactjsSVG />
        <FirebaseSVG />
        <NodeJsSVG />
        <TypescriptSVG />
      </div>
    </figure>
  );
};