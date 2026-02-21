import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How does Aviothic's AI technology work?",
      answer: "Our advanced AI algorithms analyze mammogram images using deep learning neural networks to detect early signs of breast cancer with high accuracy. The system identifies suspicious patterns and provides radiologists with detailed analysis reports."
    },
    {
      question: "What makes Aviothic different from traditional screening methods?",
      answer: "Unlike traditional methods, Aviothic provides real-time analysis, reduces false positives by 40%, and can detect abnormalities that might be missed by human eyes. Our platform integrates seamlessly with existing hospital systems."
    },
    {
      question: "What is the regulatory status of the AI system?",
      answer: "Our AI system is currently in the regulatory pathway development phase. We are actively working toward compliance with relevant medical device regulations including FDA and CDSCO requirements. The system is designed to align with regulatory standards and is undergoing validation processes."
    },
    {
      question: "How long does the analysis take?",
      answer: "Our AI completes analysis in under 30 seconds, providing immediate preliminary results while maintaining the highest accuracy standards. This significantly reduces patient wait times."
    },
    {
      question: "Can Aviothic integrate with our existing PACS system?",
      answer: "Absolutely. Our platform is designed for seamless integration with all major PACS systems and hospital information systems through standard DICOM protocols and HL7 interfaces."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer 24/7 technical support, comprehensive training programs for medical staff, regular software updates, and dedicated account management to ensure smooth implementation and operation."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium text-slate-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Everything you need to know about Aviothic's AI-powered breast cancer detection platform
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                >
                  <span className="text-lg font-medium text-slate-700">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">
            Still have questions? Contact our team via WhatsApp or email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://chat.whatsapp.com/JjNmOl4CwCc24aUTzGVMVM"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white font-medium rounded-lg hover:bg-violet-700 transition-colors"
            >
              Contact on WhatsApp
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="mailto:founder@aviothic.in"
              className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition-colors"
            >
              Email Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;