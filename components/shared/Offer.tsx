import React from "react";
import { offers } from "@/constans";

const Offer = () => {
  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-white to-[#f0f8ff] py-12 md:py-24 lg:py-32"
    >
      <div className="container px-8 md:px-6">
        <div className="mx-auto max-w-[75rem]">
          <div className="mb-10 text-center">
            <h2 className="mb-4">Nasza Oferta</h2>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">
              Sprawdź naszą kompleksową ofertę usług.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="flex cursor-default flex-col items-center gap-2 rounded-sm px-2 text-center duration-300  hover:-translate-y-5 hover:scale-105 hover:shadow-lg"
              >
                {offer.icon}
                <h3 className="mb-2 text-2xl font-bold leading-none md:text-3xl">
                  {offer.title}
                </h3>

                <p className="mb-4 text-balance text-lg text-gray-500 dark:text-gray-400 md:text-xl">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
