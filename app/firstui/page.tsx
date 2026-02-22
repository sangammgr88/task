"use client";

import ImageCarousel from "@/components/Imagecarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Page() {
  return (
    <div className=" min-h-screen px-10 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-medium text-gray-700 leading-relaxed max-w-lg">
            Experience our expert solutions tailored to enhance your business
            with top-tier design, development, and animation.
          </h1>

          <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700">
            Services
          </Button>
        </div>

        <div className="space-y-4 ">
          <h1 className="text-3xl md:text-6xl font-semibold">UI & UX</h1>
          <h1 className="text-3xl md:text-6xl font-semibold">Development</h1>
          <h1 className="text-3xl md:text-6xl font-semibold">Blockchain</h1>
        </div>
      </div>

      <div className="mt-16">
       <ImageCarousel/>
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-500 mb-8">Our Partners</p>

        <div className="flex flex-wrap justify-center items-center gap-12 opacity-70">
          <Image src="/partnerslogo/patner1.png" alt="partner" width={100} height={50} />
          < Image src="/partnerslogo/image.png" alt="partner" width={100} height={50} />
          < Image src="/partnerslogo/patner3.png" alt="partner" width={100} height={50} />
          <Image src="/partnerslogo/pat4.png" alt="partner" width={100} height={50} />
          
        </div>
      </div>
    </div>
  );
}