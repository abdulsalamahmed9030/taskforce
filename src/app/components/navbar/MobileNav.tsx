"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Equipments", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
  { label: "Our Clients", href: "/clients" },
  { label: "FAQ", href: "/faq" },
  { label: "CSR", href: "/csr" },
];

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

// ✅ Capitalize first letter of each word except for special cases
function formatLabel(label: string) {
  const upperCasePreserve = ["FAQ", "CSR"];
  if (upperCasePreserve.includes(label.toUpperCase())) return label.toUpperCase();

  return label
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <div className="md:hidden z-30 fixed top-4 right-4">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="text-white" size={28} />
          ) : (
            <Menu className="text-white" size={28} />
          )}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sliding Drawer */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-black text-white z-30 transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "w-[80vw] max-w-sm p-6 flex flex-col space-y-6"
        )}
      >
        {/* Logo at the top */}
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Taskforce Interiors Logo"
            width={160}
            height={40}
            priority
          />
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-4 text-sm font-bold">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "transition-colors duration-200 hover:text-[#ffda08]",
                item.label === "Home" && "text-[#ffda08]"
              )}
            >
              {formatLabel(item.label)}
            </Link>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mt-auto text-xs space-y-1 pt-8 border-t border-gray-700">
          <p className="font-bold text-white">Contact Info</p>
          <p>#3-5-823, Ground Floor Hyderabad</p>
          <p>Business Center Hyderguda Hyderabad - 500029</p>
          <p>Phone: 040-23240629 / 040-66669067</p>
          <p>Email: info@taskforceinteriors.com</p>
        </div>
        <div className="mt-8 w-full px-16">
                      <div className="flex flex-row justify-between text-white text-2xl">
                        <a
                          href="#"
                          aria-label="Facebook"
                          className="hover:text-[#ffda08] transition-colors duration-200"
                        >
                          <FaFacebookF />
                        </a>
                        <a
                          href="#"
                          aria-label="Twitter/X"
                          className="hover:text-[#ffda08] transition-colors duration-200"
                        >
                          <FaXTwitter />
                        </a>
                        <a
                          href="https://www.linkedin.com/company/task-force-interiors/"
                          aria-label="LinkedIn"
                          className="hover:text-[#ffda08] transition-colors duration-200"
                        >
                          <FaLinkedinIn />
                        </a>
                        <a
                          href="https://www.instagram.com/taskforceinteriors17/?hl=en"
                          aria-label="Instagram"
                          className="hover:text-[#ffda08] transition-colors duration-200"
                        >
                          <FaInstagram />
                        </a>
                      </div>
                    </div>
      </div>
      
    </>
  );
}
