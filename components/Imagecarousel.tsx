"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const images = [
  "/carousel1.jpg",
  "/carousel2.jpg",
];

export default function SplitCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  );

  return (
    <div className="mt-16">
      <div
        className="overflow-hidden rounded-3xl"
        ref={emblaRef}
      >
        <div className="flex gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-[0_0_85%] md:flex-[0_0_75%]"
            >
              <Image
                src={src}
                alt={`slide-${index}`}
                width={1400}
                height={800}
                className="w-full h-[450px] object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}