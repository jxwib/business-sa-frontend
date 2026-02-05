import React from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/AboutUssbc.jpg";

import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

function Contact() {
  const contacts = [
    { label: "داخل المملكة العربية السعودية",
      value: "199080",
      type: "phone",
      icon: MapPinIcon,
    },
    { label: "خارج المملكة العربية السعودية",
      value: "+966112762666",
      type: "phone",
      icon: PhoneIcon,
    },
    { label: "للاقتراحات والشكاوى",
      value: "care@bc.gov.sa",
      type: "email",
      icon: EnvelopeIcon,
    },
  ];

  const handleClick = (item) => {
    if (item.type === "phone") {
      window.location.href = `tel:${item.value}`;
    }

    if (item.type === "email") {
      window.location.href = `mailto:${item.value}`;
    }
  };

  return (
    <div className="w-full overflow-hidden">

      <Navbar />
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6">

        {/* Background Image */}
        <div className="absolute inset-0 z-0">

          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="relative z-10 w-full flex flex-col items-center">

          <h1 className="text-5xl md:text-6xl font-bold text-white text-center mb-20 drop-shadow-2xl">
            تواصل معنا
          </h1>

          {/* the Cards */}
          <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">

            {contacts.map((item, i) => {

              const Icon = item.icon;

              return (

                <div
                  key={i}
                  onClick={() => handleClick(item)}
                  className="
                    bg-white/95
                    backdrop-blur
                    p-9
                    rounded-2xl
                    border
                    border-gray-200
                    text-center
                    cursor-pointer
                    transition-all
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >

                  <div className="mx-auto mb-5 w-16 h-16 flex items-center justify-center rounded-xl bg-[#0A0D5C]/10">
                    <Icon className="w-8 h-8 text-[#0A0D5C]" />
                  </div>

                  <p className="text-gray-500 text-sm mb-2">
                    {item.label}
                  </p>

                  <p className="text-xl font-semibold text-[#0A0D5C] break-all">
                    {item.value}
                  </p>

                </div>

              );
            })}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;
