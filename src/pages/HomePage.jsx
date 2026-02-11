import React from 'react';
import { motion } from 'framer-motion';
import PerformanceDashboardSection from '../components/sections/PerformanceDashboardSection';


const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden pt-24">
      {/* Liquid Background Blobs */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-pink-400/40 rounded-full blur-3xl"
        animate={{ x: [0, 50, -30], y: [0, 40, -20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-400/40 rounded-full blur-3xl"
        animate={{ x: [0, -40, 20], y: [0, -30, 10] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Hero Section - Enhanced for Hospitals & Radiologists */}
      <section className="relative z-10 px-6 md:px-20 py-16 md:py-24 bg-gradient-to-br from-pink-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-8"
            >
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-4">
                  CE Marked & FDA Pending
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  <span className="block">AI-Powered</span>
                  <span className="block text-indigo-600">Breast Cancer Detection</span>
                  <span className="block text-2xl sm:text-3xl text-gray-700 mt-2 font-normal">for Clinical Excellence</span>
                </h1>
              </div>
              
              <p className="text-xl text-gray-700 max-w-lg">
                Clinical-grade AI designed for real-world screening workflows in busy radiology departments.
                Proven to reduce reading time by 40% while maintaining 98.5% sensitivity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Clinical validation</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Workflow integrated</span>
                </div>
                <div className="flex items-center p-3 bg-white rounded-lg border border-gray-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">Regulatory compliant</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Schedule Demo
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-lg border border-indigo-200 hover:bg-indigo-50 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  View Clinical Studies
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-2xl w-full">
                <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-700">
                  <div className="flex items-center text-white">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <div className="text-sm font-medium">AI Analysis Dashboard</div>
                      <div className="text-xs opacity-90">Real-time mammography analysis</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="aspect-video bg-gray-900 rounded-xl border border-gray-200 flex items-center justify-center relative overflow-hidden">
                    {/* Simulated mammography scan with AI overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {/* Simulated breast tissue pattern */}
                        <div className="absolute w-4/5 h-3/5 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full opacity-80"></div>
                        
                        {/* Simulated mass/density */}
                        <div className="absolute w-1/5 h-1/5 bg-gradient-to-br from-red-500/30 to-red-600/20 rounded-full top-1/3 left-2/5 animate-pulse"></div>
                        
                        {/* AI analysis overlay */}
                        <div className="absolute inset-0" style={{background: 'conic-gradient(from 45deg, transparent, rgba(239, 68, 68, 0.1), transparent 70%)'}}></div>
                        
                        {/* Grid overlay for analysis */}
                        <div className="absolute inset-0 opacity-20">
                          <div className="w-full h-full grid grid-cols-8 grid-rows-6">
                            {Array.from({ length: 48 }).map((_, i) => (
                              <div key={i} className="border border-gray-600/30"></div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      HIGH RISK
                    </div>
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                      CONFIDENCE: 94%
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="font-semibold text-blue-900">Detection</div>
                      <div className="text-blue-700">BI-RADS 4A Suspicious</div>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="font-semibold text-green-900">Recommendation</div>
                      <div className="text-green-700">Biopsy Recommended</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Clinical Value Proposition - For Hospitals & Radiologists */}
      <section className="relative z-10 px-6 md:px-20 py-16 md:py-24 bg-gradient-to-b from-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Clinical Value for Healthcare Systems
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Evidence-based AI solutions designed to enhance clinical workflows, improve patient outcomes, and meet regulatory standards
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Improved Diagnostic Accuracy</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">98.5% sensitivity rate in clinical trials</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Reduces false negative rates by 15%</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Consistent performance across diverse populations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Standardized interpretation protocols</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Enhanced Workflow Efficiency</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">40% reduction in average reading time</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Prioritizes high-risk cases automatically</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Integrates seamlessly with existing PACS systems</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">Generates standardized BI-RADS reports</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              className="bg-white rounded-xl p-8 border border-gray-200 transition-all duration-300 cursor-default"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Regulatory & Quality Assurance</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">CE marked for European markets</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">FDA 510(k) pending approval</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">HIPAA compliant data handling</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm">ISO 13485 certified manufacturing</span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Clinical Metrics Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Proven Clinical Outcomes
              </h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Results from multi-center clinical studies demonstrating real-world impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">98.5%</div>
                <div className="text-gray-700 font-medium">Sensitivity Rate</div>
                <div className="text-sm text-gray-600 mt-1">Across 50,000+ screening mammograms</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">40%</div>
                <div className="text-gray-700 font-medium">Time Reduction</div>
                <div className="text-sm text-gray-600 mt-1">Average reading time decrease</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">15%</div>
                <div className="text-gray-700 font-medium">False Negative Reduction</div>
                <div className="text-sm text-gray-600 mt-1">Decrease in missed cancers</div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">2.3M+</div>
                <div className="text-gray-700 font-medium">Images Analyzed</div>
                <div className="text-sm text-gray-600 mt-1">Since clinical deployment</div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Radiologist Workflow Integration */}
      <section className="relative z-10 px-6 md:px-20 py-16 md:py-24 bg-gradient-to-b from-pink-50/20 to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seamless Integration for Radiologists
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Designed to complement your existing workflow without disruption
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-blue-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Assisted Reading Workflow</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-indigo-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Pre-analysis Review</h4>
                      <p className="text-gray-700">AI highlights suspicious regions and provides initial assessment with confidence scores</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-indigo-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Clinical Correlation</h4>
                      <p className="text-gray-700">Radiologist reviews AI findings alongside patient history and clinical data</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-indigo-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Final Interpretation</h4>
                      <p className="text-gray-700">Radiologist makes final determination with AI assistance, maintaining ultimate decision authority</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-indigo-600 font-bold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Report Generation</h4>
                      <p className="text-gray-700">Standardized BI-RADS reports with AI-generated recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinical Decision Support</h3>
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">Risk Stratification</h4>
                    <p className="text-blue-800 text-sm">Automated assessment of malignancy probability with BI-RADS categorization</p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-900 mb-2">Lesion Tracking</h4>
                    <p className="text-green-800 text-sm">Longitudinal comparison with previous studies for change detection</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">Quality Control</h4>
                    <p className="text-purple-800 text-sm">Image quality assessment and technical adequacy verification</p>
                  </div>
                  
                  <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                    <h4 className="font-semibold text-indigo-900 mb-2">Audit Trail</h4>
                    <p className="text-indigo-800 text-sm">Complete documentation of AI analysis and radiologist decisions for compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PerformanceDashboardSection />
    </div>
  );
};

export default HomePage;