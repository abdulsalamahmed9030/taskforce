'use client';

import { useState } from 'react';
import { Mail, PhoneCall, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  const [clickedIcon, setClickedIcon] = useState<string | null>(null);

  const handleClick = (icon: string) => {
    setClickedIcon(icon);
    setTimeout(() => setClickedIcon(null), 200); // Reset after 200ms
  };

  return (
    <div className="px-6 py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* FORM */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold mb-2">Write a Message</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="bg-gray-100 p-3 rounded border outline-none text-black placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Enter your Email"
              className="bg-gray-100 p-3 rounded border outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="bg-gray-100 p-3 rounded border outline-none text-black placeholder-gray-500"
            />
            <input
              type="text"
              placeholder="Subject..."
              className="bg-gray-100 p-3 rounded border outline-none text-black placeholder-gray-500"
            />
          </div>
          <textarea
            placeholder="Enter your Message"
            rows={5}
            className="bg-gray-100 p-3 rounded border w-full outline-none text-black placeholder-gray-500"
          />
          <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold py-2 px-6 rounded inline-flex items-center">
            <Send size={16} className="mr-2" /> Send message
          </button>
        </div>

        {/* INFO SECTION */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold mb-2">Let’s work together</h2>

          {/* Phone */}
          <div
            className="flex items-start gap-4 cursor-pointer"
            onClick={() => handleClick('phone')}
          >
            <div
              className={`p-4 rounded transition-all ${
                clickedIcon === 'phone' ? 'bg-yellow-400' : 'bg-black hover:bg-yellow-400'
              }`}
            >
              <PhoneCall className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Have any question?</h3>
              <p className="text-sm">
                Phone: 040-23240629<br />040-66669067
              </p>
            </div>
          </div>

          {/* Email */}
          <div
            className="flex items-start gap-4 cursor-pointer"
            onClick={() => handleClick('email')}
          >
            <div
              className={`p-4 rounded transition-all ${
                clickedIcon === 'email' ? 'bg-yellow-400' : 'bg-black hover:bg-yellow-400'
              }`}
            >
              <Mail className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Send email</h3>
              <p className="text-sm">info@taskforceinteriors.com</p>
            </div>
          </div>

          {/* Address */}
          <div
            className="flex items-start gap-4 cursor-pointer"
            onClick={() => handleClick('address')}
          >
            <div
              className={`p-4 rounded transition-all ${
                clickedIcon === 'address' ? 'bg-yellow-400' : 'bg-black hover:bg-yellow-400'
              }`}
            >
              <MapPin className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Address</h3>
              <p className="text-sm">
                #3-5-823, Ground Floor,<br />
                Hyderabad Business Center,<br />
                Hyderguda, Hyderabad - 500029
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
