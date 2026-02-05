import React from "react";
import Navbar from "../components/Navbar"; 

import aboutBg from "../assets/AboutUssbc.jpg";

import { 
  UserGroupIcon, 
  CheckCircleIcon,
  PresentationChartBarIcon 
} from "@heroicons/react/24/outline";

function AboutUs() {
  return (
    <div className="relative min-h-screen bg-[#0f172a] text-white">

      <Navbar />

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        
        {/* Background img */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutBg}
            alt="About Background"
            className="w-full h-full object-cover opacity-20" 
          />

          <div className="absolute inset-0 bg-gradient-to-l from-[#0f172a] via-[#0f172a]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
           
             {/* Goals */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            
            <h2 className="text-3xl font-bold text-center lg:text-right mb-4 border-r-4 border-sky-500 pr-4 text-[#0A0D5C]">
              الأهداف
            </h2>
             
             <div className="flex items-center justify-end gap-6 group">
              <span className="text-lg font-medium text-right max-w-[250px] text-[#0A0D5C]">
                تسهيل بدء وممارسة الأعمال الاقتصادية.
              </span>

              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl shrink-0 transition-transform group-hover:scale-110">
                <UserGroupIcon className="w-12 h-12 text-sky-700" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-6 group">
              <span className="text-lg font-medium text-right max-w-[250px] text-[#0A0D5C]">
                تحسين جودة المتطلبات الحكومية.
              </span>

              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl shrink-0 transition-transform group-hover:scale-110">
                <CheckCircleIcon className="w-12 h-12 text-sky-700" />
              </div>
            </div>

            <div className="flex items-center justify-end gap-6 group">
              <span className="text-lg font-medium text-right max-w-[250px] text-[#0A0D5C]">
                المساعدة في اتخاذ القرارات بناءً على دراسة ومعالجة البيانات.
              </span>

              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-2xl shrink-0 transition-transform group-hover:scale-110">
                <PresentationChartBarIcon className="w-12 h-12 text-sky-700" />
              </div>
            </div>

          </div>


          <div className="flex flex-col gap-10 order-1 lg:order-2 text-right">

            {/* About */}

            <div>
              <h2 className="text-sky-400 text-2xl font-bold mb-4">
                عن المركز
              </h2>

              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl">

                <p className="text-lg leading-relaxed text-[#0A0D5C]">
                  مركز يُعنى بتيسير إجراءات بدء الأعمال الاقتصادية، ومزاولتها، وإنهائها، وتقديم جميع الخدمات ذات الصلة؛ وفقًا لأفضل الممارسات الدولية. وقد أُسس المركز بموجب قرار مجلس الوزراء رقم (456)، الصادر بتاريخ 11 شعبان 1440هـ، وبموجبه يرتبط تنظيميًا بمجلس الشؤون الاقتصادية والتنمية.
                </p>

              </div>
            </div>

            {/* Mission */}
            <div>
              <h2 className="text-sky-400 text-2xl font-bold mb-2">
                الرسالة
              </h2>

              <p className="text-lg text-[#0A0D5C]">
                خلق بيئة أعمال جاذبة، وتقديم نموذج خدمات يعزز القدرة التنافسية، والاستثمار، والنمو، في المملكة العربية السعودية
              </p>
            </div>

            {/* Vision */}
            <div>
              <h2 className="text-sky-400 text-2xl font-bold mb-2">
                الرؤية
              </h2>

              <p className="text-lg text-[#0A0D5C]">
                أن تصبح المملكة العربية السعودية إحدى الدول العشر الرائدة في العالم: في جودة وسلاسة وكفاءة الخدمات الحكومية الموجهة لقطاع الأعمال.
              </p>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}


export default AboutUs;
