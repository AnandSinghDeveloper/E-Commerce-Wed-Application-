import React from "react";
import bainer1 from "../../assets/img1.jpg";
import bainer2 from "../../assets/img2.jpg";
import bainer3 from "../../assets/img3.jpg";

import bainer5 from "../../assets/img5.webp";
import bainer6 from "../../assets/img-6.webp";
import bainer7 from "../../assets/img7.webp";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ShopingHome = () => {
  const slides = [bainer1, bainer2, bainer3, bainer5, bainer6, bainer7];
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative w-full h-[500px] ">
        {slides.map((slide, index) => {
          return (
            <img
              src={slide}
              key={index}
              className=" absolute top-0 left-0 w-full h-full z-10 object-cover object-center rounded-xl  transition-opacity duration-1000"
            />
          );
        })}
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-1/2 left-4 ml-6 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/65"
        >
          <ChevronLeftIcon className="w-6 h-6" />
        </Button>
        <Button
          variant={"outline"}
          size={"icon"}
          className="absolute top-1/2 right-4 transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white/65"
        >
          <ChevronRightIcon className="w-6 h-6" />
        </Button>
      </div>
      <selection className="py-12 bg-gray-50 text-zinc-800 font-[ubuntu]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Cetorery</h2>
        </div>

      </selection>
    </div>
  );
};

export default ShopingHome;
