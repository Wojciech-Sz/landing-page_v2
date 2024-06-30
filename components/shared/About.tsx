"use client";
/* eslint-disable react/no-unescaped-entities */
import React from "react";

import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="w-full bg-gradient-to-b from-white to-[#f0f8ff] py-16 md:py-28"
    >
      <div className="container flex flex-col items-center gap-10 px-4 md:px-6">
        <h2 className="-mb-6">O Nas</h2>
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-[500px_1fr] lg:gap-12 xl:grid-cols-[600px_1fr]">
          <div>
            <Image
              src="/assets/images/house-inside.jpg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full md:self-center"
            />
          </div>
          <div className="flex flex-col justify-center text-center lg:text-left">
            <p className="text-xl text-gray-500 dark:text-gray-400 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
              Jesteśmy zespołem doświadczonych architektów z
              pasją do tworzenia wyjątkowych przestrzeni.
              Każdy projekt jest dla nas unikalnym
              wyzwaniem, które realizujemy z pełnym
              zaangażowaniem i dbałością o każdy detal.
              Wierzymy, że dobrze zaprojektowana przestrzeń
              może znacząco poprawić jakość życia, dlatego
              staramy się tworzyć projekty, które łączą
              estetykę z funkcjonalnością.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="text-center lg:text-left">
              <p className="text-xl text-gray-500 dark:text-gray-400 md:text-2xl/relaxed lg:text-xl/relaxed xl:text-2xl/relaxed">
                Jesteśmy zespołem doświadczonych architektów
                z pasją do tworzenia wyjątkowych
                przestrzeni. Każdy projekt jest dla nas
                unikalnym wyzwaniem, które realizujemy z
                pełnym zaangażowaniem i dbałością o każdy
                detal. Wierzymy, że dobrze zaprojektowana
                przestrzeń może znacząco poprawić jakość
                życia, dlatego staramy się tworzyć projekty,
                które łączą estetykę z funkcjonalnością.
              </p>
            </div>
          </div>
          <div className="order-first lg:order-last">
            <Image
              src="/assets/images/house-inside.jpg"
              width="550"
              height="310"
              alt="About"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full md:self-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
