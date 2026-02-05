import React, { useState } from "react";
import sbcLogo from "../assets/SaudiBusinessCenter.png";
import visionLogo from "../assets/2030logo.png";
import {
  MagnifyingGlassIcon,
  Bars3Icon,
  ArrowTopRightOnSquareIcon,
  EnvelopeIcon,
  BuildingStorefrontIcon,
  QuestionMarkCircleIcon,
  ClipboardDocumentCheckIcon,
  ComputerDesktopIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline"; {/* used Heroicons */}


const Navbar = () => {
  const [SearchFunction, SetSearch] = useState(false);

  const linksDetectionResult = [

    { key: "contact", label: "تواصل معنا", icon: EnvelopeIcon },
    { key: "directory", label: "دليل الأعمال", icon: BuildingStorefrontIcon },
    { key: "faq", label: "الأسئلة الشائعة", icon: QuestionMarkCircleIcon },
    { key: "guides", label: "الأدلة الإرشادية", icon: ClipboardDocumentCheckIcon },
    { key: "services", label: "الخدمات الإلكترونية", icon: ComputerDesktopIcon },
    { key: "about", label: "عن المركز", icon: BuildingOfficeIcon },

  ];

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/70 via-black/40 to-black/10 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-[auto_1fr_auto] h-24 items-center text-white">


            
             {/* logos */}

            <div className="flex items-center gap-4">
              <img src={sbcLogo} className="h-16 object-contain" />
              <div className="h-10 w-px bg-white/30" />
              <img src={visionLogo} className="h-16 object-contain" />
            </div>


            <div className="hidden lg:flex justify-center gap-7">
              {linksDetectionResult.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.key}
                    href={`#${item.key}`}
                    className="flex flex-col items-center gap-1 px-3 py-2 rounded-md text-white/80 transition hover:text-sky-300 hover:bg-sky-500/15 active:scale-95"
                  >
                    <Icon className="w-6 h-6" />
                    <span className="text-xs">{item.label}</span>
                  </a>
                );
              })}
            </div>


            {/* buttons */}

            <div className="flex items-center justify-end gap-3">
              <a
                href="https://www.saudibusiness.gov.sa/Identity/Account/Login?returnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3DInvestorPortal%26redirect_uri%3Dhttps%253A%252F%252Fe2.business.sa%252Fauth%252Fcallback%26response_type%3Dcode%26scope%3DSchoolLicenseAPI%2520RatingApi%2520userprofileapis%2520ReserveTradeNameAPI%2520QRApis%2520InvestorPortalApi%2520proxyapi%2520openid%2520profile%2520roles%2520offline_access%2520servicecatalogapis%2520delegationapi%2520requestapi%2520lookupapis%2520api%2520EAuthenticateAPI%2520AttachmentAPI%2520RecipientsCrNotificationsApi%2520notificationapi"
                target="_blank"
                rel="noreferrer"
                className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/30 rounded text-sm transition hover:bg-sky-500/20 hover:border-sky-400 hover:text-sky-300 active:scale-95"
              >
                منصة الأعمال
                <ArrowTopRightOnSquareIcon className="w-5 h-5" />
              </a>

              <button
                onClick={() => SetSearch(true)}
                className="p-2 rounded-full hover:bg-white/10"
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>

              <button className="px-3 py-2 border border-white/30 rounded text-sm hover:bg-white/10">
                En
              </button>

              <button className="lg:hidden p-2">
                <Bars3Icon className="w-6 h-6" />
              </button>
            </div>

          </div>
        </div>
      </nav>

      {SearchFunction && (
        <div
          className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm"
          onClick={() => SetSearch(false)}
        >
          <div
            className="absolute top-28 left-1/2 -translate-x-1/2 w-[92%] max-w-3xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-4">
              <MagnifyingGlassIcon className="w-6 h-6 text-white/70" />
              <input
                autoFocus
                type="text"
                placeholder="ابحث عن..."
                className="w-full bg-transparent outline-none text-white placeholder-white/60 text-sm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
