import React from "react";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "../Icons";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-gray-100 to-[#f0f8ff] py-12 dark:bg-gray-800 md:py-24 lg:py-32"
    >
      <div className="container flex justify-center px-4 md:px-6">
        <div className="flex max-w-4xl flex-col gap-10">
          <div className="flex flex-col gap-4 text-center">
            <h2>Kontakt</h2>
            <p className="text-xl font-medium text-gray-600 dark:text-gray-400 md:text-2xl">
              Skontaktuj się z naszym zespołem.
            </p>
          </div>
          <div className="flex flex-col-reverse gap-6 md:flex-row md:gap-10 lg:gap-20">
            <div className="flex flex-col gap-2 text-center md:gap-4 md:text-left">
              <h3 className="text-xl font-bold md:text-2xl">
                Informacje Kontaktowe
              </h3>
              <div className="flex flex-col gap-1 space-y-1 text-lg max-md:items-center">
                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 dark:text-gray-400">
                  <PhoneIcon className="size-5 shrink-0" />
                  <a
                    href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
                    className=""
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-500 hover:text-gray-800 dark:text-gray-400 ">
                  <MailIcon className="size-5 shrink-0 " />
                  <a
                    href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`}
                    className=""
                  >
                    info@acme.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <MapPinIcon className="size-5 shrink-0 " />
                  <p className="">
                    123 Main St, Anytown USA
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <ClockIcon className="size-5 shrink-0 " />
                  <div className="flex gap-2">
                    <p className="">pon - pt:</p>
                    <p className="">8:00 - 16:00</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
