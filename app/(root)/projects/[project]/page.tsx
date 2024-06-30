import ProjectDetails from "@/components/shared/ProjectDetail";
import { projects } from "@/constans";
import React from "react";

const Project = ({
  params,
}: {
  params: { project: keyof typeof projects };
}) => {
  return (
    <section className="w-full py-14">
      <div className="container px-4 md:px-6">
        <ProjectDetails name={params.project} />
      </div>
    </section>
  );
};

export default Project;
