"use client";
import Image from "next/image";

interface HeroImageProps {
  image: string;
  subtitle: string;
}

export default function HeroImage({ image, subtitle }: HeroImageProps) {
  return (
    <div className="relative w-full h-full">
      {/* Responsive Positioned Hero Background */}
      <div className="absolute right-0 z-0 pointer-events-none 
        top-[25vh] sm:top-[30vh] lg:top-[25vh] xl:top-[25vh] 2xl:top-[10vh]">
        <div className="
          relative
          w-[300px] h-[300px]
          sm:w-[400px] sm:h-[350px]
          md:w-[460px] md:h-[400px]
          lg:w-[500px] lg:h-[420px]
          xl:w-[540px] xl:h-[450px]
          2xl:w-[580px] 2xl:h-[500px]
        ">
          <Image
            src="/555.png"
            alt="Background Shape"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Slide image */}
      <div className="relative w-1/4 h-full ml-auto">
        <Image
          src={image}
          alt={subtitle}
          fill
          className="object-contain object-right mt-20 z-10 sliderImage"
        />
      </div>
    </div>
  );
}
