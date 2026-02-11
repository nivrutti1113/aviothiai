import React from 'react';
import { motion } from 'framer-motion';
import ImpactDiagram from '../components/sections/ImpactDiagram';
import ImpactImplementation from '../components/sections/ImpactImplementation';

const ImpactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-24 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Approach to Breast Cancer Screening
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Supporting early detection pathways with end-to-end system visibility and policy-aligned infrastructure
          </p>
        </motion.div>
        
        {/* Early Detection Pathway */}
        <div className="mb-16 bg-gradient-to-b from-pink-50/20 to-white py-8 -mx-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Supporting Population-Based Early Detection
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Population Capture</h3>
              <p className="text-gray-700">
                Eligible population identification through health system integration and community outreach programs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Pathway Guidance</h3>
              <p className="text-gray-700">
                Structured screening pathways with automated scheduling and patient navigation systems.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">Referral Management</h3>
              <p className="text-gray-700">
                Coordinated follow-up care with integrated referral tracking and outcome monitoring.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Measurable Impact Blocks */}
        <div className="mb-16 bg-gradient-to-b from-pink-50/15 to-white py-8 -mx-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            System-Level Outcomes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-lg p-6 border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">1.2M+</div>
              <h3 className="font-semibold text-gray-900 mb-2">Screenings Processed</h3>
              <p className="text-gray-600 text-sm">
                Across diverse populations with varying risk factors and demographics.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-lg p-6 border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">40%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Earlier Detection Rate</h3>
              <p className="text-gray-600 text-sm">
                Improved early-stage identification compared to baseline screening programs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-lg p-6 border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">25%</div>
              <h3 className="font-semibold text-gray-900 mb-2">False Positive Reduction</h3>
              <p className="text-gray-600 text-sm">
                Decreased unnecessary biopsies and patient anxiety through improved specificity.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-lg p-6 border border-gray-200 text-center"
            >
              <div className="text-3xl font-bold text-indigo-600 mb-2">60%</div>
              <h3 className="font-semibold text-gray-900 mb-2">Reading Time Efficiency</h3>
              <p className="text-gray-600 text-sm">
                Reduced interpretation time while maintaining diagnostic accuracy.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Deployment Model */}
        <div className="mb-16 bg-gradient-to-b from-pink-50/10 to-white py-8 -mx-4 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Hub-and-Spoke Deployment for Maximum Capacity
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <p className="text-gray-700 mb-4 text-lg">
                Our cloud-native architecture enables centralized AI processing hubs that connect to distributed spoke facilities, increasing screening capacity in resource-constrained settings while maintaining quality standards.
              </p>
              <p className="text-gray-700 mb-4 text-lg">
                This model allows rural and underserved areas to access subspecialty-level screening capabilities without requiring on-site radiologist availability.
              </p>
              <p className="text-gray-700 text-lg">
                Public-private partnerships leverage this infrastructure to rapidly expand screening programs, enabling ambitious policy goals to be met within realistic timelines.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200"
            >
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">Implementation Benefits</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Centralized AI expertise distributed to remote locations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Scalable capacity without proportional infrastructure costs</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Quality assurance through centralized monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Cost-effective expansion of screening access</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Impact & Implementation - Network Diagram */}
        <div className="mb-16 bg-white py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center"
          >
            Impact & Implementation
          </motion.h2>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 w-full">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Evidence-Based Impact</h3>
                  <p className="text-gray-700">Our platform demonstrates measurable improvements in screening accuracy, efficiency, and patient outcomes across multiple clinical settings.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Integration</h3>
                  <p className="text-gray-700">Seamlessly integrates with existing workflows to enhance rather than disrupt established screening protocols.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable Implementation</h3>
                  <p className="text-gray-700">Designed for deployment across diverse healthcare settings, from academic centers to community clinics.</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hyper-focused screening with hub and spoke</h3>
                  <p className="text-gray-700">Our entirely cloud-native and zero footprint approach to deployment maximizes capacity and existing infrastructure. The hub facility connects, supports, and builds the capacity of various satellite or spoke facilities at the local level. The hub serves as a center for AI processing, analysis, and interpretation of mammograms and for providing timely and accurate feedback and support to the spokes.</p>
                  <p className="text-gray-700 mt-2">In resource-constrained settings, this model provides an opportunity to develop public-private partnerships, connecting underutilized capacity of mammography scanners available in the private sector with public sector infrastructure.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full flex justify-center">
              <ImpactDiagram />
            </div>
          </div>
        </div>
        
        {/* Hub and Spoke Implementation */}
        <ImpactImplementation />
      </div>
    </div>
  );
};

export default ImpactPage;