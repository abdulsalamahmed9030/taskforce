"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Transparent backdrop overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={onClose}
            aria-label="Close popup by clicking outside"
          />

          {/* Sidebar Panel - 25% on large screens */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative z-10 bg-black border-r border-[#ffda08] h-full w-full sm:w-[75%] md:w-[45%] lg:w-[25%] p-6 text-white overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ffda08] text-black flex items-center justify-center"
              aria-label="Close quote popup"
            >
              <X size={20} />
            </button>

            {/* Logo and Description */}
            <div className="text-center mb-6 mt-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={128}
                height={42}
                className="mx-auto mb-2"
              />
              <p className="text-sm text-gray-300">
                TASK FORCE INTERIOR (P) LTD. is managed by experienced professionals in
                civil engineering, interior design, and turnkey project execution.
              </p>
            </div>

            {/* Form */}
            <h2 className="text-xl font-bold mb-4 text-center">Get a Free Quote</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name *"
                className="w-full p-3 rounded text-white bg-gray-800 placeholder-white"
                required
              />
              <input
                type="email"
                placeholder="Your Email *"
                className="w-full p-3 rounded text-white bg-gray-800 placeholder-white"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 rounded text-white bg-gray-800 placeholder-white"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-3 rounded text-white bg-gray-800 placeholder-white"
                rows={4}
              />
              <button
                type="submit"
                className="bg-[#ffda08] text-black font-bold w-full py-3 rounded"
              >
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
