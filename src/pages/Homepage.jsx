import React from "react";
import Navbar from "../components/Navbar";
import heroVideo from "../assets/Homepage.mp4";

function Homepage() {
  return (
    <div className="relative min-h-screen">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>

        <div className="relative z-20 text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            المركز السعودي للأعمال
          </h1>

          <p className="text-white/90 text-xl md:text-2xl">
            وجهة واحدة لبدء وممارسة وإنهاء أعمالك
          </p>
        </div>

      </section>
      

    </div>
  );
}

export default Homepage;
