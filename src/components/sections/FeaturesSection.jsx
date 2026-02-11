import React from 'react';
import { motion } from 'framer-motion';
import AIBrainIcon from '@/components/icons/AIBrainIcon';
import DocumentHeatmapIcon from '@/components/icons/DocumentHeatmapIcon';
import DoctorPatientIcon from '@/components/icons/DoctorPatientIcon';
import AIBrainGraphic from '@/components/illustrations/AIBrainGraphic';

const FeaturesSection = () => {
  const features = [
    {
      icon: <AIBrainIcon size={32} />,
      title: "Powerful AI-driven Analysis",
      description: "Advanced machine learning algorithms analyze medical data with precision and reliability to support clinical decision-making."
    },
    {
      icon: <DocumentHeatmapIcon size={32} />,
      title: "Workflow Integration & Automation",
      description: "Seamlessly integrates into existing clinical workflows to reduce manual tasks and streamline processes."
    },
    {
      icon: <DoctorPatientIcon size={32} />,
      title: "Real-time Insights & Monitoring",
      description: "Provides continuous monitoring and instant alerts for critical changes in patient data."
    },
    {
      icon: <AIBrainGraphic size={32} />,
      title: "Evidence-based Performance",
      description: "Backed by clinical studies showing measurable improvements in diagnostic accuracy and efficiency."
    }
  ];

  return (
    <section id="features" className="relative z-10 px-4 md:px-6 lg:px-20 py-12 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-16 text-center text-gray-900"
        >
          How It Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 p-3 bg-indigo-100 rounded-lg">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;