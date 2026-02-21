import React from 'react';
import { motion } from 'framer-motion';
import GovernmentSection from '../components/sections/GovernmentSection';
import WorldMapDots from '../components/sections/WorldMapDots';

const GovernmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white py-24 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 pt-8"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Supporting Government Breast Cancer Screening Programs
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Advanced AI platform for breast cancer detection designed to support public health screening initiatives
          </p>
        </motion.section>

        {/* Background: Breast Cancer Screening in India */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-pink-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Background: Breast Cancer Screening in India
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-red-600 mb-2">60-80%</div>
                <div className="text-gray-700 font-medium">Late-stage diagnosis rates</div>
                <div className="text-sm text-gray-600 mt-1">Majority of breast cancers detected at advanced stages</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1.3M+</div>
                <div className="text-gray-700 font-medium">Annual screening cases</div>
                <div className="text-sm text-gray-600 mt-1">High-volume screening demand across districts</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">1:10,000</div>
                <div className="text-gray-700 font-medium">Radiologist ratio</div>
                <div className="text-sm text-gray-600 mt-1">Critical shortage in rural and semi-urban areas</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-700 font-medium">Urban-rural gap</div>
                <div className="text-sm text-gray-600 mt-1">Significant disparity in screening access</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Global Impact Visualization */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Global Healthcare Impact Framework
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                While focusing on India's critical screening needs, our platform demonstrates how AI-assisted mammography can transform healthcare delivery across diverse global contexts, from resource-limited settings to established healthcare systems.
              </p>
            </div>
            
            <div className="mb-8 w-full">
              <WorldMapDots />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-5 border border-blue-200">
                <div className="text-2xl font-bold text-blue-700 mb-2">6 Continents</div>
                <div className="text-gray-700 font-medium">Global reach demonstration</div>
                <div className="text-sm text-gray-600 mt-1">Adaptable framework for diverse healthcare systems</div>
              </div>
              
              <div className="text-center bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-5 border border-purple-200">
                <div className="text-2xl font-bold text-purple-700 mb-2">15+ Regions</div>
                <div className="text-gray-700 font-medium">Strategic impact clusters</div>
                <div className="text-sm text-gray-600 mt-1">Highlighted deployment opportunities</div>
              </div>
              
              <div className="text-center bg-gradient-to-b from-green-50 to-green-100 rounded-lg p-5 border border-green-200">
                <div className="text-2xl font-bold text-green-700 mb-2">Scalable Model</div>
                <div className="text-gray-700 font-medium">Cloud-native architecture</div>
                <div className="text-sm text-gray-600 mt-1">Ready for rapid deployment anywhere</div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Where Current Screening Struggles */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/20 to-white py-8 -mx-4 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Current Screening Challenges
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.31 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Missed or Delayed Detection</h3>
                    <p className="text-gray-700 text-sm">Limited radiologist availability and high case volumes contribute to delayed or missed diagnoses, particularly in early stages.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Overburdened District Hospitals</h3>
                    <p className="text-gray-700 text-sm">District hospitals struggle with high patient loads and limited specialist resources for comprehensive screening interpretation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Inconsistent Readings</h3>
                    <p className="text-gray-700 text-sm">Variability in interpretation between radiologists affects screening reliability and standardization across centers.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Limited Access to Specialists</h3>
                    <p className="text-gray-700 text-sm">Rural and remote areas lack adequate access to experienced radiologists, creating barriers to comprehensive screening programs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Role of Aviothic AI in Government Programs */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-pink-50 to-teal-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Aviothic AI's Role in Government Programs
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">AI-Assisted Image Analysis</h3>
                <p className="text-gray-700 text-sm">
                  Provides clinical support to qualified medical professionals during mammography interpretation, helping identify areas that require further attention.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Designed for High Volume, Low Resources</h3>
                <p className="text-gray-700 text-sm">
                  Cloud-based architecture specifically designed for high-throughput screening with minimal infrastructure requirements for district-level deployment.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Existing Workflow Compatible</h3>
                <p className="text-gray-700 text-sm">
                  Seamless integration with established government screening protocols and PACS systems, maintaining existing workflow standards and practices.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Promises to Different Stakeholders */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/15 to-white py-8 -mx-4 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Commitment to All Stakeholders
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                To Public Hospitals & District Centers
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="float-left w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs font-bold">1</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-blue-900 mb-1">Improved Detection Consistency</h4>
                    <p className="text-blue-800 text-sm">Support for standardized interpretation across multiple radiologists and screening sessions.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs font-bold">2</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-blue-900 mb-1">Reduced Reporting Delays</h4>
                    <p className="text-blue-800 text-sm">Streamlined workflow assistance to help maintain screening program timelines and patient follow-up schedules.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs font-bold">3</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-blue-900 mb-1">Scalable Support</h4>
                    <p className="text-blue-800 text-sm">Enhanced screening capacity without requiring proportional increases in specialist staffing.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-blue-800 text-xs font-bold">4</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-blue-900 mb-1">Standardized Reporting Support</h4>
                    <p className="text-blue-800 text-sm">Assistance with structured reporting formats to maintain program quality standards.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-b from-green-50 to-green-100 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-green-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                To Radiologists & Medical Officers
              </h3>
              
              <div className="space-y-5">
                <div>
                  <div className="float-left w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-800 text-xs font-bold">1</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-green-900 mb-1">AI as Second Reader</h4>
                    <p className="text-green-800 text-sm">Independent analysis to support clinical decision-making without replacing professional judgment.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-800 text-xs font-bold">2</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-green-900 mb-1">Visual Explainability</h4>
                    <p className="text-green-800 text-sm">Region highlighting and visual indicators to support interpretation and case review.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-800 text-xs font-bold">3</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-green-900 mb-1">Confidence Support</h4>
                    <p className="text-green-800 text-sm">Assistance with borderline cases to help maintain diagnostic confidence in challenging interpretations.</p>
                  </div>
                </div>
                
                <div>
                  <div className="float-left w-6 h-6 bg-green-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-green-800 text-xs font-bold">4</span>
                  </div>
                  <div className="ml-9">
                    <h4 className="font-semibold text-green-900 mb-1">Reduced Cognitive Fatigue</h4>
                    <p className="text-green-800 text-sm">Pre-analysis support for high-volume screening to help manage workload and maintain attention quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-gradient-to-b from-purple-50 to-purple-100 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-purple-900 mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              To Patients (Urban & Rural)
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-5 border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-800 text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Earlier Identification</h4>
                    <p className="text-purple-800 text-sm">Enhanced screening support to help identify suspicious findings that might otherwise require additional review.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-800 text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Reduced Unnecessary Referrals</h4>
                    <p className="text-purple-800 text-sm">Improved specificity to reduce anxiety and resource burden from false positive results.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-800 text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Increased Trust</h4>
                    <p className="text-purple-800 text-sm">Transparent communication about AI assistance to build confidence in screening program outcomes.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-5 border border-purple-200">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-200 rounded-full flex items-center justify-center mr-3 mt-1">
                    <span className="text-purple-800 text-xs font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-purple-900 mb-1">Equitable Access</h4>
                    <p className="text-purple-800 text-sm">Consistent access to advanced screening support regardless of geographic location or economic status.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Ethical & Regulatory Alignment */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Ethical & Regulatory Alignment
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Human-in-the-Loop Approach
                </h3>
                <p className="text-gray-700 text-sm mb-6">
                  Our AI systems are designed to support qualified medical professionals, with final diagnostic decisions remaining the responsibility of licensed radiologists and clinicians.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Data Privacy Compliance
                </h3>
                <p className="text-gray-700 text-sm mb-6">
                  Full alignment with Indian data protection regulations and healthcare privacy requirements, ensuring patient confidentiality and secure data handling.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  No Autonomous Decisions
                </h3>
                <p className="text-gray-700 text-sm mb-6">
                  No AI system makes independent diagnostic or treatment recommendations. All outputs require qualified medical professional review and validation.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Bias Awareness & Fairness
                </h3>
                <p className="text-gray-700 text-sm">
                  Continuous monitoring and validation across diverse Indian populations to ensure equitable performance across different demographics, breast densities, and clinical presentations.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Long-Term Public Health Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-b from-pink-50/20 to-white py-8 -mx-4 px-4"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Long-Term Public Health Vision
            </h2>
            <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed">
              Supporting India's national early detection goals through sustainable, scalable AI assistance
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">National Early Detection Support</h3>
                <p className="text-sm opacity-90">
                  Contributing to government initiatives for population-based screening programs with consistent, quality-assured support across all implementation levels.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">District-Level Capacity Building</h3>
                <p className="text-sm opacity-90">
                  Strengthening screening capabilities at the district level to reduce urban-rural disparities and improve access to quality diagnostic services.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">Reducing Late-Stage Burden</h3>
                <p className="text-sm opacity-90">
                  Supporting early detection efforts to reduce the proportion of late-stage breast cancer presentations and improve overall survival outcomes.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-left">
                <h3 className="text-lg font-semibold mb-3">Data-Driven Policy Support</h3>
                <p className="text-sm opacity-90">
                  Enabling evidence-based program improvements through anonymized, privacy-protected data insights while maintaining strict patient confidentiality.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
        
        <GovernmentSection />
      </div>
    </div>
  );
};

export default GovernmentPage;