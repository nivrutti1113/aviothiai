import React from 'react';
import { motion } from 'framer-motion';
import AIBrainIcon from '@/components/icons/AIBrainIcon';
import DoctorPatientIcon from '@/components/icons/DoctorPatientIcon';
import DocumentHeatmapIcon from '@/components/icons/DocumentHeatmapIcon';

const PlatformArchitectureSection = () => {
  return (
    <section id="platform" className="relative z-10 px-4 md:px-6 lg:px-20 py-12 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-16 text-center text-gray-900"
        >
          Our Platform Architecture
        </motion.h2>
        
        <div className="flex flex-col items-center justify-center">
          {/* Central circle - Aviothic */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center mb-16">
            <div className="absolute w-full h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full blur-lg opacity-30"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full flex items-center justify-center z-10">
              <span className="text-white font-bold text-lg md:text-xl">AVIOTHIC</span>
            </div>
          </div>
          
          {/* Surrounding nodes in circular layout */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Workflow Automation */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-pink-400 mb-2"><AIBrainIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Workflow Automation</div>
              </div>
            </div>
            
            {/* Clinical Decision Support */}
            <div className="absolute top-1/4 right-0 transform translate-x-1/2 -translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-indigo-400 mb-2"><DoctorPatientIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Clinical Decision Support</div>
              </div>
            </div>
            
            {/* Performance Dashboards */}
            <div className="absolute bottom-1/4 right-0 transform translate-x-1/2 translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-blue-400 mb-2"><DocumentHeatmapIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Performance Dashboards</div>
              </div>
            </div>
            
            {/* Real World Evidence */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-green-400 mb-2"><AIBrainIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Real World Evidence</div>
              </div>
            </div>
            
            {/* Pathway Navigation */}
            <div className="absolute bottom-1/4 left-0 transform -translate-x-1/2 translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-yellow-400 mb-2"><AIBrainIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Pathway Navigation</div>
              </div>
            </div>
            
            {/* Academic Research */}
            <div className="absolute top-1/4 left-0 transform -translate-x-1/2 -translate-y-1/2 w-32 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
              <div className="text-center">
                <div className="text-purple-400 mb-2"><DocumentHeatmapIcon size={24} /></div>
                <div className="text-sm md:text-base font-medium">Academic Research</div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center max-w-2xl">
            <p className="text-lg text-white/90 mb-6">
              We are not just a tool, we are a comprehensive platform that connects all aspects of clinical decision support.
            </p>
            <div className="text-pink-400 font-semibold">
              "A unified ecosystem for healthcare AI"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformArchitectureSection;