import React from "react";
import Navbar from "../components/Navbar";
import icon1 from "../assets/icon1.gif";
import icon2 from "../assets/icon2.gif";
import icon3 from "../assets/icon3.gif";
import deepblue from "../assets/deepblue.jpg";

function Services() {

  const serviceList = [
    { title: "خدمة بدء الأعمال", gif: icon1 },
    { title: "خدمة ممارسة الأعمال", gif: icon2 },
    { title: "خدمة إنهاء الأعمال", gif: icon3 },
  ];

  return (
    <div className="relative min-h-screen">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={deepblue}
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>


      <div className="relative z-10 pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center">


        <h1 className="text-4xl md:text-6xl font-bold mb-20 text-[#0A0D5C] text-center drop-shadow-lg">
          الخدمات الإلكترونية
        </h1>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-5xl">

          {serviceList.map((service, index) => (

            <div
              key={index}
              className="
                bg-white/90
                rounded-2xl
                p-10
                flex
                flex-col
                items-center
                justify-between
                text-center
                min-h-[420px]
                transition
                duration-300
                cursor-pointer
              "
            >
              <div className="w-28 h-28 flex items-center justify-center overflow-hidden rounded-full">
                <img
                  src={service.gif}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>


              <h3 className="text-xl font-bold text-[#0A0D5C] mt-6">
                {service.title}
              </h3>

              <button
                className="
                  mt-6
                  px-8
                  py-2.5
                  bg-[#0A0D5C]
                  text-white
                  rounded-full
                  font-semibold
                  hover:bg-blue-900
                  transition
                "
              >
                المزيد
              </button>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default Services;
