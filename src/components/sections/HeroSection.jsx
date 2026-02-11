import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="hero" className="relative z-10 px-6 md:px-20 py-20 md:py-28 pt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center relative">
        {/* Left: Text Content */}
        <div className="order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 text-gray-900"
          >
            AI-Powered Clinical Decision Support for Breast Cancer Screening
          </motion.h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 md:mb-8 max-w-full lg:max-w-2xl">
            Aviothic assists radiologists and oncologists by analyzing mammograms to identify suspicious regions and provide explainable insights, helping improve diagnostic accuracy while maintaining the physician's central role in patient care.
          </p>
          
          {/* POSITIONING STATEMENT */}
          <div className="mb-8 p-6 bg-gray-100 rounded-xl border border-gray-200">
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">Built by IIT Madras engineers with direct input from practicing radiologists, Aviothic integrates seamlessly into existing clinical workflows to support—not replace—medical judgment.</h3>
          </div>
          
          <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
              <span className="text-base md:text-lg">FDA-style structured reports with BI-RADS classification</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></div>
              <span className="text-lg">Explainable AI with heatmap visualization showing areas of concern</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              <span className="text-lg">Integration-ready API for PACS and hospital systems</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              <span className="text-lg">Clinician-trusted assistance, not automated diagnosis</span>
            </div>
          </div>
          
          {/* Supporting Statistics - BIG NUMBERS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
            <div className="p-4 bg-gray-100 rounded-lg">
              <div className="text-xl md:text-2xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-gray-700">AI accuracy in detecting suspicious regions</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">40%</div>
              <div className="text-sm text-gray-700">Improvement in early-stage detection sensitivity</div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <div className="text-2xl font-bold text-indigo-600">Explainable</div>
              <div className="text-sm text-gray-700">Results with uncertainty quantification</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 lg:gap-4">
            <Button className="rounded-full px-4 sm:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg bg-indigo-600 text-white hover:bg-indigo-700">
              Get Started
            </Button>
            <Button variant="outline" className="rounded-full px-4 sm:px-6 py-3 md:py-4 text-sm md:text-base lg:text-lg border-gray-300 text-gray-900 hover:bg-gray-100">
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Right: Real doctor image with soft lighting */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div className="relative">
            {/* Soft purple/blue gradient glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl" />
            
            {/* Rounded image container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200 bg-gray-200">
              {/* Real doctor image */}
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71eaefec4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Doctor using Aviothic AI system"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;