
"use client";

import { X } from "lucide-react";
import Image from "next/image";

interface QuotePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuotePopup({ isOpen, onClose }: QuotePopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center px-4">
      <div className="bg-black border border-[#ffda08] rounded-lg p-6 w-full max-w-md relative text-white">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#ffda08] text-black flex items-center justify-center"
          aria-label="Close quote popup"
        >
          <X size={20} />
        </button>

        <div className="text-center mb-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={128} // width for w-32
            height={42} // maintain aspect ratio approx
            className="mx-auto mb-2"
          />
          <p className="text-sm text-gray-300">
            TASK FORCE INTERIOR (P) LTD. is managed by experienced
            professionals in civil engineering, interior design, and turnkey
            project execution.
          </p>
        </div>

        <h2 className="text-xl font-bold mb-4">Get a free quote</h2>

        <form className="space-y-3">
          <input
            type="text"
            placeholder="Your Name *"
            className="w-full p-2 rounded text-black"
            required
          />
          <input
            type="email"
            placeholder="Your Email *"
            className="w-full p-2 rounded text-black"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 rounded text-black"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-2 rounded text-black"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#ffda08] text-black font-bold w-full py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}


