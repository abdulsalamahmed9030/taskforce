"use client";

import { Mail, PhoneCall, MapPin, Send } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="px-6 py-16 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* FORM SECTION */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Write a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Subject..."
              className="bg-gray-100 p-3 rounded border border-gray-300 outline-none text-black placeholder-gray-500"
            />
          </div>

          <textarea
            placeholder="Enter your Message"
            rows={5}
            className="bg-gray-100 p-3 rounded border border-gray-300 w-full outline-none text-black placeholder-gray-500"
          />

          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-3 px-6 rounded inline-flex items-center transition-all duration-300 cursor-pointer">
            <Send size={18} className="mr-2" /> Send Message
          </button>
        </div>

        {/* CONTACT INFO SECTION */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Let’s work together
          </h2>

          {/* Phone */}
          <a
            href="tel:04023240629"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <PhoneCall className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Have any question?</h3>
              <p className="text-sm leading-relaxed">
                Phone: 040-23240629
                <br />
                040-66669067
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@taskforceinteriors.com"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <Mail className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Send email</h3>
              <p className="text-sm leading-relaxed">
                info@taskforceinteriors.com
              </p>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/place/3-5-823,+Hyderabad+Business+Centre,+Hyderguda,+Hyderabad,+500029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 group cursor-pointer"
          >
            <div className="p-4 rounded bg-black group-hover:bg-yellow-400 transition-all">
              <MapPin className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Address</h3>
              <p className="text-sm leading-relaxed">
                #3-5-823, Ground Floor,
                <br />
                Hyderabad Business Center,
                <br />
                Hyderguda, Hyderabad - 500029
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
