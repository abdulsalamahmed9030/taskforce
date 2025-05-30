"use client";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Contact", href: "/contact" },
  {
    label: "More",
    href: "/",
    dropdown: [
      { label: "Our Clients", href: "/clients" },
      { label: "FAQ", href: "/faq" },
      { label: "CSR", href: "/csr" },
    ],
  },
];

function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export default function DesktopNav() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="hidden md:flex space-x-6 font-bold text-sm tracking-wider relative z-[10000]">
      {navItems.map((item, i) =>
        item.dropdown ? (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link
              href={item.href}
              className={cn(
                "transition-colors duration-200 hover:text-[#ffda08] cursor-pointer flex items-center space-x-1",
                item.label === "Home" && "text-[#ffda08]"
              )}
            >
              <span>{item.label.toUpperCase()}</span>
              <svg
                className={cn(
                  "w-3 h-3 transition-transform duration-200",
                  dropdownOpen ? "rotate-180 text-[#ffda08]" : "text-current"
                )}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div
                className="absolute left-0 top-full mt-0 w-40 bg-white shadow-lg rounded-md py-2 z-[9999]"
                onMouseEnter={() => setDropdownOpen(true)} // KEEP OPEN on hover
                onMouseLeave={() => setDropdownOpen(false)} // CLOSE on leave
              >
                {item.dropdown.map((dropItem, j) => (
                  <Link
                    key={j}
                    href={dropItem.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-300 hover:text-black"
                  >
                    {dropItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ) : (
          <Link
            key={i}
            href={item.href}
            className={cn(
              "transition-colors duration-200 hover:text-[#ffda08]",
              item.label === "Home" && "text-[#ffda08]"
            )}
          >
            {item.label.toUpperCase()}
          </Link>
        )
      )}
    </nav>
  );
}
