import React from 'react';
import { motion } from 'framer-motion';

const AboutPage = () => {
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
            About Aviothic AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Advancing breast cancer screening through clinical-grade artificial intelligence
          </p>
        </motion.section>

        {/* Who We Are */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-pink-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Who We Are
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg leading-relaxed">
                Aviothic AI is a healthcare technology company dedicated to transforming breast cancer screening through clinically validated artificial intelligence. Our mission centers on developing AI systems that augment human expertise, enhance diagnostic accuracy, and accelerate early detection without compromising patient safety or clinical judgment.
              </p>
              <p className="text-lg leading-relaxed">
                We believe that artificial intelligence should serve as a powerful tool for radiologists, not a replacement. Our approach emphasizes human-in-the-loop decision making, where AI provides evidence-based insights and recommendations while preserving the critical role of clinical expertise in patient care.
              </p>
              <p className="text-lg leading-relaxed">
                Built on rigorous clinical validation and regulatory compliance, our platform ensures that every algorithm serves the fundamental purpose of improving patient outcomes through earlier, more accurate detection of breast cancer.
              </p>
            </div>
          </div>
        </motion.section>

        {/* The Problem We Are Solving */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/20 to-white py-8 -mx-4 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            The Problem We Are Solving
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.31 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Missed Cancers</h3>
              <p className="text-gray-700 text-sm">
                Human error in mammography interpretation leads to approximately 10-30% of cancers being missed in initial screenings, with higher rates in challenging cases.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Radiologist Workload</h3>
              <p className="text-gray-700 text-sm">
                Increasing case volumes and time pressures contribute to diagnostic fatigue and potential oversight of subtle findings in screening mammography.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Late Diagnosis in LMICs</h3>
              <p className="text-gray-700 text-sm">
                Limited access to specialized radiologists in low- and middle-income countries results in delayed diagnosis and poorer outcomes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Variability in Readings</h3>
              <p className="text-gray-700 text-sm">
                Inter-observer variability among radiologists can lead to inconsistent interpretations and recommendations for patient care.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Our Promise */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Our Promise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-blue-600 mb-4">To Hospitals & Screening Centers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>98.5% sensitivity rate</strong> in clinical validation studies</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>40% reduction</strong> in average reading time per case</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Regulatory compliant</strong> with CE marking and FDA 510(k) pending</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Seamless PACS integration</strong> with existing hospital systems</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-green-600 mb-4">To Radiologists & Clinicians</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Explainable AI</strong> with visual heatmaps and confidence scores</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Decision support</strong> without automation bias</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Reduced cognitive load</strong> through pre-analysis assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Enhanced diagnostic confidence</strong> through second-opinion AI</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-purple-600 mb-4">To Patients</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Earlier detection</strong> of breast cancer through enhanced screening</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Fewer unnecessary recalls</strong> through improved specificity</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Equitable access</strong> to advanced screening technology</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-sm"><strong>Enhanced safety</strong> through reduced missed cancers</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.section>

        {/* What We Offer */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/15 to-white py-8 -mx-4 px-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What We Offer
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-blue-600 mb-6">For Hospitals & Screening Centers</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Improved Detection Rates</h4>
                  <p className="text-gray-700 text-sm">Our AI system achieves 98.5% sensitivity in clinical validation studies, helping detect cancers that might otherwise be missed during routine screening.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Reduced False Positives</h4>
                  <p className="text-gray-700 text-sm">Advanced algorithms reduce false positive rates by 25%, decreasing unnecessary biopsies and patient anxiety while optimizing resource allocation.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Seamless PACS Compatibility</h4>
                  <p className="text-gray-700 text-sm">Native integration with existing PACS systems and hospital networks, requiring minimal workflow disruption and IT infrastructure changes.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Scalable AI for High-Volume Screening</h4>
                  <p className="text-gray-700 text-sm">Cloud-based architecture designed to handle thousands of screenings daily while maintaining consistent performance and accuracy standards.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-green-600 mb-6">For Radiologists</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">AI as Second Reader</h4>
                  <p className="text-gray-700 text-sm">Our system operates as an independent second reader, providing additional perspective without influencing initial radiologist interpretation.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Explainable Outputs</h4>
                  <p className="text-gray-700 text-sm">Visual heatmaps, region-of-interest highlighting, and confidence scores that support clinical decision-making with transparent AI reasoning.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Reduced Fatigue and Cognitive Load</h4>
                  <p className="text-gray-700 text-sm">Pre-analysis review and case prioritization help manage workload and reduce the mental strain of high-volume screening practice.</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Decision Support, Not Automation Bias</h4>
                  <p className="text-gray-700 text-sm">Designed to enhance human judgment rather than replace it, maintaining radiologist autonomy and clinical expertise in patient care.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-purple-600 mb-6 text-center">For Patients</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Earlier Detection</h4>
                <p className="text-gray-700 text-sm">Enhanced screening capabilities increase the likelihood of detecting breast cancer at earlier, more treatable stages.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Fewer Unnecessary Recalls</h4>
                <p className="text-gray-700 text-sm">Improved specificity reduces the number of patients recalled for additional imaging or biopsies due to false positive results.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Transparency and Trust</h4>
                <p className="text-gray-700 text-sm">Clear communication about AI involvement in screening and diagnostic processes, with full disclosure to patients.</p>
              </div>
              
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Equitable Access</h4>
                <p className="text-gray-700 text-sm">Expanding access to advanced screening technology regardless of geographic location or economic status.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Clinical Challenges from Radiologist Perspective */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-pink-50 to-indigo-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Clinical Challenges in Breast Cancer Screening
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Daily Clinical Challenges</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-orange-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Subtle Imaging Findings
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Early-stage cancers and subtle architectural distortions can be challenging to detect consistently, particularly in dense breast tissue where sensitivity may be reduced.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Cognitive Fatigue
                    </h4>
                    <p className="text-gray-700 text-sm">
                      High-volume screening environments contribute to diagnostic fatigue, potentially affecting attention to detail and consistency in interpretation over long reading sessions.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Interpretation Variability
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Inter-observer variability in BI-RADS classification and lesion assessment can lead to inconsistent recommendations and patient management decisions.
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow Pressures</h3>
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Time Constraints
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Pressure to maintain high throughput while ensuring thorough evaluation can create tension between efficiency and diagnostic accuracy.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      Longitudinal Comparison
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Tracking subtle changes over time and comparing with prior studies requires careful attention to ensure accurate assessment of progression or stability.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      Sensitivity vs Specificity Balance
                    </h4>
                    <p className="text-gray-700 text-sm">
                      Maintaining optimal balance between detecting true cancers and minimizing false positives requires careful judgment and experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How Aviothic AI Supports Clinicians */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/10 to-white py-8 -mx-4 px-4"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Supporting Clinical Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Designed by clinicians, for clinicians – to enhance rather than replace expert judgment
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Clinical Decision Support</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    Attention to Subtle Findings
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Visual highlighting of regions that warrant careful review, helping to ensure that subtle architectural changes and early lesions receive appropriate attention during interpretation.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Consistent Second Reading
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Independent analysis that provides an additional perspective, supporting consistency in interpretation without influencing the primary radiologist's clinical judgment.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-purple-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    BI-RADS Consistency Support
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Decision support tools that help maintain consistency in BI-RADS classification and terminology, reducing variability in reporting and recommendations.
                  </p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Workflow Enhancement</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6 border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-orange-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Case Prioritization
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Intelligent case sorting that helps identify studies requiring immediate attention, supporting efficient workflow management during high-volume periods.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                    Quantitative Analysis
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Objective measurements for lesion characteristics and follow-up recommendations, providing quantitative data to support clinical decision-making.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-indigo-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    Reduced Cognitive Load
                  </h4>
                  <p className="text-gray-700 text-sm">
                    Pre-analysis assistance that helps manage the mental workload associated with high-volume screening, allowing radiologists to maintain focus on complex cases.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Clinical Role and Responsibility */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Clinical Role and Responsibility
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                Maintaining the fundamental principles of medical practice while embracing technological advancement
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Assistive, Not Authoritative</h3>
                <p className="text-gray-700 text-sm">
                  Our AI system provides evidence-based insights and recommendations designed to support clinical expertise, not replace it. The technology serves as an additional tool in the diagnostic process.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Clinical Decision-Making</h3>
                <p className="text-gray-700 text-sm">
                  Final diagnostic decisions and patient management recommendations remain the responsibility of qualified radiologists and clinicians. AI outputs require professional interpretation and validation.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Enhanced Expertise</h3>
                <p className="text-gray-700 text-sm">
                  Designed to reduce the cognitive burden associated with high-volume screening while preserving and enhancing the critical role of clinical expertise in patient care decisions.
                </p>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1 mr-4">
                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Commitment to Clinical Excellence</h4>
                  <p className="text-gray-700 text-sm">
                    We are committed to supporting, not replacing, the irreplaceable human elements of clinical judgment, patient empathy, and professional responsibility that form the foundation of excellent medical care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Clinical Responsibility & Ethics */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-pink-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-pink-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Clinical Responsibility & Ethics
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
                  Our AI systems are designed to augment human expertise, not replace it. Final diagnostic decisions remain with qualified radiologists, ensuring that clinical judgment and patient care are never compromised.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Regulatory Awareness
                </h3>
                <p className="text-gray-700 text-sm mb-6">
                  We maintain full compliance with medical device regulations, including CE marking for European markets and FDA 510(k) submission for US clearance. Our systems meet ISO 13485 quality management standards.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  Data Privacy
                </h3>
                <p className="text-gray-700 text-sm mb-6">
                  Patient data protection is paramount. We implement HIPAA-compliant data handling, encrypted transmission, and strict access controls to ensure patient confidentiality and privacy rights.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Bias Reduction and Fairness
                </h3>
                <p className="text-gray-700 text-sm">
                  Our algorithms are trained on diverse datasets representing varied demographics, breast densities, and clinical presentations to minimize bias and ensure equitable performance across all patient populations.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Our Leadership */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 bg-gradient-to-b from-pink-50/10 to-white py-8 -mx-4 px-4"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Leadership</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our leadership team combines expertise in AI, healthcare, and public health to advance breast cancer screening. With a focus on responsible innovation, clinical excellence, and ethical deployment, we're committed to delivering technology that enhances healthcare delivery across diverse settings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* CEO & Founder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nivrutti Chavan </h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer & Founder</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Nivrutti Chavan leads Aviothic AI with a focus on building responsible, research-driven healthcare AI systems. With a strong background in artificial intelligence, data science, and system design, he oversees the company's vision, clinical alignment, and long-term strategy. His work emphasizes ethical AI deployment, real-world validation, and collaboration with clinicians and public health stakeholders.
              </p>
            </motion.div>

            {/* CTO & Co-Founder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ram Kumar</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer & Co-Founder</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ram Kumar is responsible for Aviothic AI's core technology and platform architecture. He leads the development of scalable, secure, and reliable AI systems for medical imaging. His expertise spans machine learning infrastructure, backend systems, and production-grade deployment, ensuring the platform performs effectively in real clinical environments.
              </p>
            </motion.div>

            {/* Director of ML */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Kamesh P</h3>
              <p className="text-blue-600 font-medium mb-4">Director of Machine Learning</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Kamesh P leads the machine learning and model development efforts at Aviothic AI. He focuses on deep learning for breast imaging, model robustness, explainability, and continuous evaluation. His work ensures that AI outputs remain transparent, interpretable, and aligned with clinical decision-support requirements.
              </p>
            </motion.div>

            {/* Chief Public Health Officer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ajay Vardhrajan</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Public Health Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ajay Vardhrajan brings public health expertise to Aviothic AI, with a focus on population-scale screening and healthcare delivery in resource-limited settings. He guides the platform's alignment with national screening programs, public health priorities, and ethical deployment in diverse communities across India.
              </p>
            </motion.div>

            {/* Chief Research Officer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-100 overflow-hidden border border-gray-200 flex items-center justify-center transition-all duration-200 hover:bg-gray-50">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Dr. Prashant Patil</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Research Officer</p>
              <p className="text-gray-700 text-sm leading-relaxed">
                Dr. Prashant Patil leads clinical and translational research at Aviothic AI. His role focuses on clinical validation, evidence generation, and collaboration with medical institutions. He ensures that Aviothic AI's research roadmap remains scientifically rigorous and aligned with evolving standards in breast cancer screening and imaging.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Vision */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-b from-pink-50/20 to-white py-8 -mx-4 px-4"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Vision
            </h2>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              To make early breast cancer detection universally accessible, ensuring that every woman receives the highest standard of screening regardless of her location or economic circumstances.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">National Screening Programs</h3>
                <p className="text-sm opacity-90">
                  Supporting government-led initiatives to expand population-based breast cancer screening programs with scalable AI technology.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Global Accessibility</h3>
                <p className="text-sm opacity-90">
                  Bringing advanced screening capabilities to underserved regions where specialist radiologist access is limited.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Clinical Excellence</h3>
                <p className="text-sm opacity-90">
                  Advancing the standard of care through evidence-based AI that enhances human expertise and clinical decision-making.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;