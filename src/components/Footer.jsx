import React from "react";
import { 
  FaInstagram, 
  FaYoutube, 
  FaXTwitter, 
  FaWhatsapp, 
  FaLinkedinIn 
} from "react-icons/fa6";

function Footer() {
  const socialLinks = [
    { id: 1, icon: FaInstagram, url: "https://www.instagram.com/bcgovsa/" },
    { id: 2, icon: FaYoutube, url: "https://www.youtube.com/channel/UC1mSbR2yfVqz6nn5sSBYa9g" },
    { id: 3, icon: FaXTwitter, url: "https://x.com/BCgov_Care" },
    { id: 4, icon: FaWhatsapp, url: "https://api.whatsapp.com/send/?phone=00966112822881&text&type=phone_number&app_absent=0" },
    { id: 5, icon: FaLinkedinIn, url: "https://www.linkedin.com/company/bcgovsa?originalSubdomain=sa" },
  ];

  return (
    <footer className="relative z-20 w-full py-10 bg-white/5 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        <div className="flex gap-6 mb-8">
          {socialLinks.map((social) => (
            <a 
              key={social.id}
              href={social.url}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white hover:text-[#0A0D5C] hover:-translate-y-2 shadow-lg"
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* the footer*/}
        <div className="text-center">
          <p className="text-white/80 text-lg font-medium tracking-wide">
                     المركز السعودي للأعمال © 2026 جميع الحقوق محفوظة           </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;