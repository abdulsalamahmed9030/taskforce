"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Mr. Farruk Ali Khan",
    title: "MANAGING DIRECTOR",
    image: "/farruk.png",
  },
  {
    name: "Mr. Abid Ali Khan",
    title: "CEO",
    image: "/abid.jpeg",
  },
  {
    name: "Mr. Kashif Ali Khan",
    title: "DIRECTOR",
    image: "/kashif.png",
  },
];

export default function TeamSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="our-team" className="py-20 px-4 bg-white">
      {/* Section Title */}
      <div className="text-center mb-16">
        <p className="text-[#ffda08] font-bold tracking-widest">
          OUR PROFESSIONALS
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2">
  <span className="dark:text-black text-current">EXPERTS AND OUR</span> <br />
  <span className="text-[#ffda08]">TEAM MEMBERS</span>
</h2>

      </div>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        {teamMembers.map((member, index) => {
          const isHovered = hovered === index;

          return (
            <div
              key={index}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className="w-full max-w-sm relative transition-all duration-500"
            >
              {/* Clipped Background */}
              <div className="relative h-40 overflow-hidden">
                <div
                  className={`absolute inset-0 transition-colors duration-500 z-0 ${
                    isHovered ? "bg-black" : "bg-[#f9f4f1]"
                  }`}
                  style={{
                    clipPath: "polygon(0 0, 100% 30%, 100% 100%, 0% 100%)",
                  }}
                ></div>

                {/* Text content with dynamic color */}
                <div className="absolute bottom-4 left-4 z-10 transition-colors duration-300">
                  <p
                    className={`text-sm font-semibold mb-1 ${
                      isHovered ? "text-white" : "text-[#ffda08]"
                    }`}
                  >
                    {member.title}
                  </p>
                  <h3
                    className={`text-xl font-bold ${
                      isHovered ? "text-white" : "text-black"
                    }`}
                  >
                    {member.name}
                  </h3>
                </div>
              </div>

              {/* Image Section */}
              <div>
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-[300px] object-cover rounded-sm"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
