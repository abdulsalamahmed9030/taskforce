"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-black text-white overflow-hidden">
      {/* Animated Background Image */}
      <motion.div
        className="absolute right-0 top-0 z-0 w-[800px] h-[600px]"
        animate={{ scale: isHovered ? 1.05 : 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/shape-01.png"
          alt="Background Shape"
          layout="fill"
          className="object-contain"
          priority
        />
      </motion.div>

      {/* Content Container */}
      <div
        className="relative z-10 grid md:grid-cols-2 items-center gap-10 px-5 md:px-20 py-16"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Main Feature Image Only */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="rounded-xl overflow-hidden shadow-lg w-full md:w-[600px] h-[400px] md:h-[500px]"
        >
          <div className="relative w-full h-full">
            <Image
              src="/img2.JPG"
              alt="Interior"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-6">
          <div className="text-[#ffda08] font-semibold flex items-center gap-2">
            <span className="text-xl tracking-wider">ABOUT US</span>
          </div>

          <h2 className="text-6xl font-extrabold leading-tight text-white">
            TASK FORCE INTERIORS <br />
            <span className="text-white text-stroke-white">DESIGN SERVICE</span>
          </h2>

          <p className="text-lg text-white max-w-xl">
            TASK FORCE INTERIOR (P) LTD. is an organization overseen by
            individuals with extensive experience in civil engineering, interior
            design, and the management of turnkey projects.
          </p>

          <p className="text-white max-w-xl">
            Analyze the available space and develop efficient floor plans that
            maximize functionality, flow, and utilization of the area.
          </p>

          <div className="grid grid-cols-2 gap-4 text-lg font-semibold text-[#ffda08]">
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Interior Design
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Execution as per
              Visualization
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Banquet Hall Design
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#ffda08]">✔</span> Room Space Planning
            </div>
          </div>

          {/* Signature */}
          <div className="flex items-center gap-4 pt-6">
            <Image
              src="/syed-adil.png"
              alt="Syed Adil"
              width={60}
              height={60}
              className="rounded-full border-2 border-white"
            />
            <div>
              <p className="font-bold">Syed Adil</p>
              <p className="text-sm text-gray-400">Design Coordinator</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
