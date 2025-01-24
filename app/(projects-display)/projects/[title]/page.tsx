"use client";
import ShowCase from "@/components/Projects/Showcase/ShowCase";
import { useParams } from "next/navigation";

const ProjectPage = () => {
  const params = useParams();
  const { title } = params;

  return <ShowCase title={title} />;
};

export default ProjectPage;
