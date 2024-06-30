import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import { coop } from "@/constans";

const Partners = () => {
  return (
    <section
      id="partners"
      className="w-full  bg-gradient-to-b from-white to-[#f0f8ff] py-12  md:py-24 lg:py-32"
    >
      <div className="container flex flex-col items-center px-4 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-4">Współprace</h2>
          <p className="max-w-[40rem] text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">
            We are proud to work with leading companies in
            the architecture and construction industries.
          </p>
        </div>
        <Carousel
          opts={{ loop: true }}
          className="w-full max-w-3xl"
        >
          <CarouselContent>
            {coop.map((item) => (
              <CarouselItem
                key={item.name}
                className="basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Image
                    src="/assets/icons/yourlogo.svg"
                    width="140"
                    height="70"
                    alt="Partner Logo"
                    className="aspect-[3/1] w-full overflow-hidden rounded-lg bg-black object-contain object-center px-2 py-4 grayscale "
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex" />
          <CarouselNext className="hidden lg:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Partners;
