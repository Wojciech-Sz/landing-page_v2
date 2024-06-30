/* eslint-disable react/no-unescaped-entities */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar";
import { testimonials } from "@/constans";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-gradient-to-b from-[#f0f8ff] to-gray-100 py-12 md:py-24 lg:py-32"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="mb-10 text-center">
            Opinie Naszych Klientów
          </h2>
          <Carousel
            opts={{ loop: true }}
            className="w-full max-w-3xl"
          >
            <CarouselContent>
              {testimonials.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="rounded-lg bg-white p-4 shadow-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="size-16">
                        <AvatarImage src="" />
                        <AvatarFallback>
                          {item.firstName[0]}
                          {item.secondName[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-poppins text-lg font-bold">
                          {item.firstName} {item.secondName}
                        </p>
                        {item.job && (
                          <p className="text-sm text-muted-foreground">
                            {item.job}
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="mt-4 text-muted-foreground">
                      {item.testimonial}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
