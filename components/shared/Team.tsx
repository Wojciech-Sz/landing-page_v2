"use client";
import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import { team } from "@/constans";

const Team = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f0f8ff] to-white pb-12 dark:bg-gray-800 md:pb-24 lg:pb-32">
      <div className="container px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <h2 className="mb-4">Nasz Zespół</h2>
          <p className="text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">
            Meet the talented individuals behind our
            success.
          </p>
        </div>
        <div className="flex  flex-wrap items-center justify-center gap-8  md:gap-10 md:px-0">
          {team.map((member, i) => (
            <div
              key={i}
              className="flex cursor-default flex-col items-center rounded-lg p-4 duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-lg"
            >
              <Avatar className="mb-4 size-20">
                <AvatarImage src="" />
                <AvatarFallback className="text-2xl">
                  {member.firstName[0]}
                  {member.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div className="flex h-20 flex-col items-center gap-5">
                <h3 className="font-['Montserrat'] text-2xl font-semibold">
                  {member.firstName} {member.lastName}
                </h3>
                <p className="font-['Montserrat'] text-2xl italic text-gray-500 dark:text-gray-400">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
