/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { projectSteps } from "@/constans";
import { Progress } from "../ui/progress";

const StepByStep = () => {
  return (
    <section
      id="stepbystep"
      className="w-full bg-gradient-to-b from-[#f0f8ff] to-white pb-12 md:pb-24 lg:pb-32"
    >
      <div className="container px-8 md:px-6">
        <div className="mx-auto max-w-[75rem]">
          <div className="mb-10 text-center">
            <h2 className="mb-4">Krok po kroku</h2>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">
              Zapoznaj się z naszym procesem.
            </p>
          </div>

          <div className="flex w-full flex-col justify-around gap-10 lg:flex-row lg:gap-0">
            {projectSteps.map((project, i) => (
              <div
                key={i}
                className="flex w-full flex-col items-center gap-1 px-10 lg:w-2/5 lg:gap-4 lg:px-0"
              >
                <h3 className="text-3xl font-bold md:text-4xl">
                  {project.title}
                </h3>
                <div className="flex w-full flex-col gap-6">
                  {project.steps.map((step, j) => (
                    <div
                      key={j}
                      className="flex flex-col gap-2 lg:gap-4"
                    >
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="rounded-full bg-primary px-4 py-2 text-base font-bold text-primary-foreground md:text-xl">
                          {j + 1}
                        </div>
                        <h4 className="text-2xl font-bold leading-none">
                          {step}
                        </h4>
                      </div>
                      <Progress
                        max={project.steps.length}
                        value={
                          ((j + 1) * 100) /
                          project.steps.length
                        }
                        aria-label={`${j + 1}/${project.steps.length} complete`}
                        className="h-2 bg-gray-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
