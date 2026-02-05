import React, { useState } from "react";
import { Link } from "react-router-dom";
import sbcLogo from "../assets/SaudiBusinessCenter.png";
import visionLogo from "../assets/2030logo.png";

import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  QuestionMarkCircleIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
  HomeIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { path: "", label: "الرئيسية", icon: HomeIcon },
    { path: "about", label: "عن المركز", icon: BuildingOfficeIcon },
    { path: "services", label: "الخدمات الإلكترونية", icon: ComputerDesktopIcon },
    { path: "faq", label: "الأسئلة الشائعة", icon: QuestionMarkCircleIcon },
    { path: "contact", label: "تواصل معنا", icon: EnvelopeIcon },
  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#020617] backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] h-24 items-center text-white">

            {/* Logos */}
            <Link to="" className="flex items-center gap-4 hover:opacity-80 transition">
              <img src={sbcLogo} alt="SBC Logo" className="h-16 object-contain" />
              <div className="h-10 w-px bg-white/30" />
              <img src={visionLogo} alt="Vision 2030" className="h-16 object-contain" />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex justify-center gap-7">
              {links.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-md text-white/80 hover:text-sky-300 hover:bg-sky-500/15 transition"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-3 justify-end">
              <a
                href="https://www.saudibusiness.gov.sa/Identity/Account/Login"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded text-sm hover:bg-sky-500/20 transition"
              >
                منصة الأعمال
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>

              <button onClick={() => setIsSearchOpen(true)} className="p-2 rounded-full hover:bg-white/10">
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>

              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2">
                {isMenuOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed top-24 inset-x-0 bg-[#020617]/95 backdrop-blur-lg border-t border-white/10">
          <div className="flex flex-col items-center gap-5 py-6 text-white">
            {links.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 text-lg hover:text-sky-400"
                >
                  <Icon className="w-6 h-6" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-[60] bg-black/60" onClick={() => setIsSearchOpen(false)}>
          <div
            className="absolute top-28 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon className="w-6 h-6 text-white/70" />
              <input
                autoFocus
                type="text"
                placeholder="ابحث عن..."
                className="w-full bg-transparent outline-none text-white placeholder-white/60"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
