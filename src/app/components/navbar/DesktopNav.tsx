'use client';

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Our Equipments", href: "/manufacturing" },
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

function formatLabel(label: string) {
  const preserveUpper = ["FAQ", "CSR"];
  if (preserveUpper.includes(label.toUpperCase())) return label.toUpperCase();

  return label
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function DesktopNav() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="hidden md:flex justify-center w-full relative z-[10000]">
      <nav className="flex space-x-6 font-bold text-l tracking-wider font-oswald">
        {navItems.map((item, i) => {
          const isActive = pathname === item.href;

          if (item.dropdown) {
            const isDropdownActive = item.dropdown.some(
              (dropItem) => pathname === dropItem.href
            );

            return (
              <div
                key={i}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "transition-colors duration-200 flex items-center space-x-1",
                    isDropdownActive ? "text-[#ffda08]" : "hover:text-[#ffda08]",
                    item.label === "Home" && !isDropdownActive && "text-white"
                  )}
                >
                  <span>{formatLabel(item.label)}</span>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Link>

                {dropdownOpen && (
                  <div
                    className="absolute left-0 top-full mt-0 w-40 bg-black shadow-lg rounded-md py-2 z-[9999]"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.dropdown.map((dropItem, j) => {
                      const isDropActive = pathname === dropItem.href;

                      return (
                        <Link
                          key={j}
                          href={dropItem.href}
                          className={cn(
                            "block px-4 py-2 text-sm font-oswald",
                            isDropActive
                              ? "bg-yellow-300 text-black"
                              : "text-white hover:bg-yellow-300 hover:text-black"
                          )}
                        >
                          {formatLabel(dropItem.label)}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "relative font-oswald transition-all duration-300",
                isActive
                  ? "text-[#ffda08]"
                  : "hover:text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 bg-clip-text",
                item.label === "Home" && !isActive && "text-white"
              )}
            >
              {formatLabel(item.label)}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
