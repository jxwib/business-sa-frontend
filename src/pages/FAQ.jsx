import React, { useState } from "react";
import Navbar from "../components/Navbar";
import bgImage from "../assets/AboutUssbc.jpg"; 

function FAQ() {
  const faqData = [
    {
      question: "ما هو المركز السعودي للأعمال؟",
      answer: "مركز حكومي يُعنى بتيسير بدء وممارسة وإنهاء العمل الاقتصادي في المملكة للمستثمرين ورواد الأعمال. وتم تأسيس المركز بموجب قرار مجلس الوزراء رقم (456) الصادر بتاريخ 11 شعبان 1440 هـ، الذي نصّ على تأسيس المركز السعودي للأعمال الاقتصادية واعتماد تنظيمه، وبموجبه يرتبط تنظيميًا بمجلس الشؤون الاقتصادية والتنمية."
    },
    {
      question: "ما أهداف المركز السعودي للأعمال؟",
      answer: "يهدف المركز إلى تيسير إجراءات بدء الأعمال الاقتصادية ومزاولتها وإنهائها، وتقديم جميع الخدمات والأعمال ذات الصلة بها وفقًا لأفضل الممارسات الدولية."
    },
    {
      question: "ما هي رؤية المركز السعودي للأعمال؟",
      answer: "أن تصبح المملكة إحدى الدول العشر الرائدة في العالم في جودة وسلاسة وكفاءة الخدمات الحكومية الموجهة لقطاع الأعمال."
    },
    {
      question: "من هم المستفيدين من خدمات المركز السعودي للأعمال؟",
      answer: "المستثمرون ورواد الأعمال."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />

      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 pt-32 pb-20 px-6 max-w-4xl mx-auto text-right">
        <h1 className="text-4xl font-bold text-center text-[#0A0D5C] mb-12 drop-shadow-sm">
          الأسئلة الشائعة
        </h1>

        <div className="space-y-5">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className="bg-white/90 backdrop-blur-md rounded-3xl shadow-lg border border-white/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button 
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-right flex items-center justify-between group"
              >
                <span className="text-xl font-bold text-[#0A0D5C] leading-snug ml-4">
                  {item.question}
                </span>
                <span className={`text-[#0A0D5C] text-2xl font-bold transition-transform duration-500 ${activeIndex === index ? 'rotate-45' : ''}`}>
                   +
                </span>
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="border-t border-gray-100 pt-5">
                  <p className="text-[#0A0D5C]/90 text-lg leading-relaxed italic">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;