import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";





export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Column 1: Logo + Description */}
        <div>
          <Image
            src="/logo.png" // Update with your logo path
            alt="Taskforce Interiors Logo"
            width={250}
            height={140}
            priority
          />
          <p className="mt-4 text-lg leading-relaxed max-w-xs text-justify">
            TASK FORCE INTERIOR (P) LTD. is an organization overseen by individuals with extensive experience in civil engineering, interior design, and the management of turnkey projects.
          </p>
        </div>

        {/* Column 2: Interior Design */}
        <div>
          <h3 className="font-bold uppercase mb-4 tracking-wide text-xl">INTERIOR DESIGN</h3>
          <address className="not-italic text-lg leading-relaxed max-w-xs space-y-2">
            <p>#3-5-823, Ground Floor,</p>
            <p>Hyderabad Business Center,</p>
            <p>Hyderguda, Hyderabad - 500029</p>
            <p>
              <strong>Phone:</strong> 040-23240629 / 040-66669067
            </p>
            <p>
              <strong>Email:</strong> info@taskforceinteriors.com
            </p>
          </address>
        </div>

        {/* Column 3: Links */}
        <div>
          <h3 className="font-bold uppercase mb-4 tracking-wide text-xl">LINKS</h3>
          <ul className="space-y-2 text-sm max-w-xs">
            {[
              "About Us",
              "Services",
              "Portfolio",
              "Manufacturing",
              "Clients",
              "FAQS",
              "CSR",
              "Contact Us",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-[#ffda08] transition-colors duration-200">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
  <h3 className="font-bold uppercase mb-4 tracking-wide text-xl">FOLLOW US</h3>
  <div className="flex flex-col space-y-4 text-white text-lg">
    <a href="#" aria-label="Facebook" className="hover:text-[#ffda08] transition-colors duration-200">
      <FaFacebookF />
    </a>
    <a href="#" aria-label="Twitter" className="hover:text-[#ffda08] transition-colors duration-200">
      <FaTwitter />
    </a>
    <a href="#" aria-label="LinkedIn" className="hover:text-[#ffda08] transition-colors duration-200">
      <FaLinkedinIn />
    </a>
    <a href="#" aria-label="Instagram" className="hover:text-[#ffda08] transition-colors duration-200">
      <FaInstagram />
    </a>
  </div>
</div>

      </div>
    
    </footer>
  
  );
}
