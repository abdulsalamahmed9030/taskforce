"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [topPosition, setTopPosition] = useState("-60px"); // start hidden above viewport

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      // Slide from top (-60px) down to near bottom (calc viewport height minus button height + margin)
      setTopPosition("calc(100vh - 88px)"); // 88px = 48px height + 40px margin
    } else {
      // Slide offscreen below viewport (120vh)
      setTopPosition("120vh");
    }
  }, [visible]);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        top: topPosition,
        right: "1.5rem",
        width: "48px",
        height: "48px",
        transition: "top 0.5s ease",
      }}
      className="fixed bg-[#ffda08] text-black rounded-full p-4 shadow-lg z-50 flex items-center justify-center"
    >
      <ChevronUp size={24} strokeWidth={3} />
    </button>
  );
}
