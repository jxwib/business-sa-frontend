import React, { useState } from "react";
import { Link } from "react-router-dom";
import sbcLogo from "../assets/SaudiBusinessCenter.png";
import visionLogo from "../assets/2030logo.png";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon, ق
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [SearchFunction, SetSearch] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // حالة فتح وإغلاق قائمة الجوال

  const links = [
    { path: "/", label: "الرئيسية", icon: HomeIcon },
    { path: "/about", label: "عن المركز", icon: BuildingOfficeIcon },
    { path: "/services", label: "الخدمات الإلكترونية", icon: ComputerDesktopIcon },
    { path: "/faq", label: "الأسئلة الشائعة", icon: QuestionMarkCircleIcon },
    { path: "/contact", label: "تواصل معنا", icon: EnvelopeIcon },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] h-24 items-center text-white">
            
            <Link to="/" className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition">
              <img src={sbcLogo} className="h-10 md:h-16 object-contain" />
              <div className="h-8 w-px bg-white/30 hidden sm:block" />
              <img src={visionLogo} className="h-10 md:h-16 object-contain hidden sm:block" />
            </Link>

            <div className="hidden lg:flex justify-center gap-7">
              {links.map((item) => (
                <Link key={item.path} to={item.path} className="flex flex-col items-center gap-1 px-3 py-2 rounded-md text-white/80 transition hover:text-sky-300 hover:bg-sky-500/15">
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs whitespace-nowrap">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-end gap-3">
              <a
                href="https://www.saudibusiness.gov.sa/Identity/Account/Login"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded text-sm transition hover:bg-sky-500/20 hover:text-sky-300"
              >
                منصة الأعمال
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>

              <button onClick={() => SetSearch(true)} className="p-2 rounded-full hover:bg-white/10">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>

              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="lg:hidden p-2 rounded-md hover:bg-white/10"
              >
                {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0f172a]/fb border-b border-white/10 ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
          <div className="flex flex-col p-4 gap-2">
            {links.map((item) => (
              <Link 
                key={item.path} 
                to={item.path} 
                onClick={() => setIsMenuOpen(false)} 
                className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 text-white/90"
              >
                <item.icon className="w-6 h-6 text-sky-400" />
                <span className="text-sm">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {SearchFunction && (
        <div className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm" onClick={() => SetSearch(false)}>
          <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon className="w-6 h-6 text-white/70" />
              <input autoFocus type="text" placeholder="ابحث عن..." className="w-full bg-transparent outline-none text-white placeholder-white/60 text-sm" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
