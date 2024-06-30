import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { projects } from "@/constans";
import Image from "next/image";

export default function ProjectDetails({
  name,
}: {
  name: keyof typeof projects;
}) {
  console.log("name: ", name);
  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      {projects[name].map((project, i) => (
        <div className="pb-12 md:pb-24 lg:pb-32" key={i}>
          <h2 className="mb-6 text-center">
            {project.label}
          </h2>
          <Carousel className="mb-8">
            <CarouselContent>
              {Array.isArray(project?.images) &&
                project?.images.map((image, i) => (
                  <CarouselItem
                    key={i}
                    className="flex w-full items-center justify-center"
                  >
                    <Image
                      src={image}
                      width={800}
                      height={500}
                      alt="Project Image 1"
                      className="aspect-video rounded-md object-cover"
                    />
                  </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
              <h3 className="mb-4 text-xl font-bold">
                Informacje o Projekcie
              </h3>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span>Pow. użytkowa mieszkalna:</span>
                  <span>{project?.details?.livingUA}</span>
                </li>
                <li className="flex justify-between">
                  <span>Pow. użytkowa całkowita :</span>
                  <span>{project?.details?.totalUA}</span>
                </li>
                <li className="flex justify-between">
                  <span>Pow. zabudowy :</span>
                  <span>
                    {project?.details?.buildingArea}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Kubatura:</span>
                  <span>{project?.details?.volume}</span>
                </li>
                <li className="flex justify-between">
                  <span>Lokalizacja:</span>
                  <span>
                    {project?.details?.localization}
                  </span>
                </li>
                <li className="flex justify-between">
                  <span>Cena:</span>
                  <span>{project?.details?.price} PLN</span>
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-950">
              <h3 className="mb-4 text-xl font-bold">
                Opis Projektu
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {project?.details?.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
