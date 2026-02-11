import React from 'react';
import { motion } from 'framer-motion';

const PlatformPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const fadeInUp = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const floatAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const scaleHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };

  const pulseAnimation = {
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  const slideInLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  const slideInRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <motion.div 
      initial="hidden" 
      animate="visible" 
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-br from-pink-900 via-gray-900 to-indigo-900 py-24 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          className="text-center mb-16 pt-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Clinical Intelligence Platform
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-blue-200 max-w-4xl mx-auto"
          >
            Enterprise-grade AI infrastructure with advanced deep learning capabilities for precision breast cancer screening
          </motion.p>
        </motion.div>

        {/* Core AI Architecture */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={staggerItem}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <motion.div 
              variants={pulseAnimation}
              className="flex items-center mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Deep Learning Architecture</h2>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Multi-Modal CNN Ensemble</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• ResNet-152 backbone with attention mechanisms</li>
                  <li>• DenseNet-201 for feature extraction</li>
                  <li>• EfficientNet-B7 for scale invariance</li>
                  <li>• Inception-v4 for multi-scale analysis</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Transformer Architecture</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Vision Transformer (ViT-L/16) with 24 layers</li>
                  <li>• Patch size: 16×16 pixels</li>
                  <li>• Embedding dimension: 1024</li>
                  <li>• Multi-head attention with 16 heads</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <motion.div 
              variants={pulseAnimation}
              className="flex items-center mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Performance Metrics</h2>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">98.7%</div>
                  <div className="text-xs text-gray-400">Sensitivity</div>
                  <div className="text-xs text-gray-500">95% CI: 98.2-99.1</div>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">96.3%</div>
                  <div className="text-xs text-gray-400">Specificity</div>
                  <div className="text-xs text-gray-500">95% CI: 95.8-96.7</div>
                </motion.div>
              </div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">Processing Performance</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Inference time: 1.47 ± 0.23 seconds</li>
                  <li>• GPU utilization: NVIDIA A100 (40GB)</li>
                  <li>• Batch processing: 32 images simultaneously</li>
                  <li>• Memory footprint: 8.2 GB VRAM</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <motion.div 
              variants={pulseAnimation}
              className="flex items-center mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Security & Compliance</h2>
            </motion.div>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-purple-300 mb-2">Data Protection</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• AES-256 encryption at rest</li>
                  <li>• TLS 1.3 for data in transit</li>
                  <li>• Zero-trust architecture</li>
                  <li>• Key rotation every 90 days</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-purple-300 mb-2">Regulatory Compliance</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• FDA 510(k) Class II Medical Device</li>
                  <li>• CE Marking: MDR 2017/745</li>
                  <li>• HIPAA Business Associate Agreement</li>
                  <li>• ISO 13485:2016 Quality Management</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Technical Infrastructure */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Enterprise Infrastructure
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-blue-900/30 to-gray-800 rounded-xl border border-blue-700/50"
            >
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <h3 className="font-semibold text-white mb-2">System Availability</h3>
              <p className="text-blue-200 text-sm">Multi-region deployment with automatic failover and 99.99% SLA guarantee</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">AWS</span>
                <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">Azure</span>
                <span className="text-xs bg-blue-900 text-blue-300 px-2 py-1 rounded">GCP</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-green-900/30 to-gray-800 rounded-xl border border-green-700/50"
            >
              <div className="text-4xl font-bold text-green-400 mb-2">187ms</div>
              <h3 className="font-semibold text-white mb-2">99th Percentile Latency</h3>
              <p className="text-green-200 text-sm">Global CDN with edge computing nodes for sub-200ms response times</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">CDN</span>
                <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Edge</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-gray-800 rounded-xl border border-purple-700/50"
            >
              <div className="text-4xl font-bold text-purple-400 mb-2">12.8TB</div>
              <h3 className="font-semibold text-white mb-2">Daily Processing Capacity</h3>
              <p className="text-purple-200 text-sm">High-throughput pipeline processing 50,000+ mammograms per day</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">Kubernetes</span>
                <span className="text-xs bg-purple-900 text-purple-300 px-2 py-1 rounded">Auto-scale</span>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-orange-900/30 to-gray-800 rounded-xl border border-orange-700/50"
            >
              <div className="text-4xl font-bold text-orange-400 mb-2">256-bit</div>
              <h3 className="font-semibold text-white mb-2">Military-Grade Encryption</h3>
              <p className="text-orange-200 text-sm">End-to-end encryption with hardware security modules (HSMs)</p>
              <div className="mt-3 flex flex-wrap justify-center gap-1">
                <span className="text-xs bg-orange-900 text-orange-300 px-2 py-1 rounded">AES-256</span>
                <span className="text-xs bg-orange-900 text-orange-300 px-2 py-1 rounded">HSM</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Advanced Technical Features */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div
            variants={staggerItem}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6 flex items-center"
            >
              <svg className="w-8 h-8 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Advanced Analytics Engine
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Multi-Dimensional Risk Stratification</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Bayesian network modeling with 127 clinical variables</li>
                  <li>• Temporal risk progression analysis</li>
                  <li>• Population-based risk calibration</li>
                  <li>• Individualized risk prediction scores</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Longitudinal Analysis</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Automated prior study comparison</li>
                  <li>• Lesion growth rate calculation</li>
                  <li>• Stability assessment algorithms</li>
                  <li>• Change detection with 99.2% accuracy</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-blue-300 mb-2">Uncertainty Quantification</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Monte Carlo dropout sampling (100 iterations)</li>
                  <li>• Epistemic uncertainty measurement</li>
                  <li>• Aleatoric uncertainty quantification</li>
                  <li>• Confidence interval estimation (95%)</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={staggerItem}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-2xl font-bold text-white mb-6 flex items-center"
            >
              <svg className="w-8 h-8 text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
              </svg>
              Integration & Interoperability
            </motion.h2>
            <motion.div 
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">DICOM Standards Compliance</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• DICOM 3.0 Part 10 for image format</li>
                  <li>• DICOMweb RESTful services</li>
                  <li>• WADO-RS for image retrieval</li>
                  <li>• QIDO-RS for query operations</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">Healthcare Data Exchange</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• HL7 FHIR R4 Implementation Guide</li>
                  <li>• SMART on FHIR authentication</li>
                  <li>• OAuth 2.0 with OpenID Connect</li>
                  <li>• IHE profiles: RAD, PDQ, PIX</li>
                </ul>
              </motion.div>
              <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                <h3 className="font-semibold text-green-300 mb-2">API & Development</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• RESTful API with OpenAPI 3.0 specification</li>
                  <li>• GraphQL endpoint for complex queries</li>
                  <li>• WebSocket for real-time notifications</li>
                  <li>• SDKs: Python, JavaScript, Java, C#</li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Report Generation & Explainability */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700 shadow-2xl mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Intelligent Report Generation & Explainability
          </motion.h2>
          
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            {/* Grad-CAM Explainability */}
            <motion.div
              variants={staggerItem}
              whileHover="hover"
              className="bg-gradient-to-br from-blue-900/30 to-gray-800 rounded-xl p-6 border border-blue-700/50"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold text-white mb-4 flex items-center"
              >
                <svg className="w-6 h-6 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Grad-CAM Explainability
              </motion.h3>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Visual Attention Mapping</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Gradient-weighted Class Activation Mapping (Grad-CAM++)</li>
                    <li>• Layer-wise Relevance Propagation (LRP) integration</li>
                    <li>• Attention visualization with heat intensity scaling</li>
                    <li>• Multi-layer feature attribution analysis</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Technical Specifications</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Resolution: 512×512 pixel attention maps</li>
                    <li>• Color mapping: Viridis colormap for optimal perception</li>
                    <li>• Overlay opacity: Configurable 0.3-0.7 range</li>
                    <li>• Real-time generation: &lt;200ms per image</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-300 mb-2">Clinical Validation</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Correlation with radiologist attention: r=0.87</li>
                    <li>• Inter-observer agreement improvement: 23%</li>
                    <li>• False positive reduction: 18% with visual guidance</li>
                    <li>• Training time impact: 12% faster learning curves</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* BI-RADS Classification */}
            <motion.div
              variants={staggerItem}
              whileHover="hover"
              className="bg-gradient-to-br from-purple-900/30 to-gray-800 rounded-xl p-6 border border-purple-700/50"
            >
              <motion.h3 
                variants={itemVariants}
                className="text-xl font-bold text-white mb-4 flex items-center"
              >
                <svg className="w-6 h-6 text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                BI-RADS Classification Engine
              </motion.h3>
              <motion.div 
                variants={staggerContainer}
                className="space-y-4"
              >
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Comprehensive BI-RADS Support</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Full BI-RADS 5th Edition compliance</li>
                    <li>• Automated category assignment (0-6)</li>
                    <li>• Confidence scoring for each classification</li>
                    <li>• Recommendation generation for follow-up</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Advanced Classification Features</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• Multi-view consensus analysis</li>
                    <li>• Density-adjusted risk stratification</li>
                    <li>• Temporal stability assessment</li>
                    <li>• Lesion characterization with descriptors</li>
                  </ul>
                </motion.div>
                <motion.div variants={staggerItem} className="bg-gray-700 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-300 mb-2">Performance Metrics</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    <li>• BI-RADS 0 accuracy: 99.1%</li>
                    <li>• BI-RADS 4/5 sensitivity: 98.7%</li>
                    <li>• Inter-category agreement: κ=0.89</li>
                    <li>• Report generation time: &lt;300ms</li>
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Report Generation Features */}
          <motion.div 
            variants={staggerContainer}
            className="mt-8 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-xl p-6 border border-indigo-700/50"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-xl font-bold text-white mb-6 text-center"
            >
              Automated Report Generation
            </motion.h3>
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <motion.div 
                variants={staggerItem}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Structured Reporting</h4>
                <p className="text-indigo-200 text-sm">Automated generation of standardized radiology reports with embedded visual explanations and BI-RADS classifications</p>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Multi-Format Export</h4>
                <p className="text-green-200 text-sm">Export reports in PDF, DICOM SR, HL7 CDA, and FHIR formats with customizable templates and institutional branding</p>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-white mb-2">Real-time Integration</h4>
                <p className="text-purple-200 text-sm">Seamless integration with PACS/RIS systems for automatic report insertion and clinician notifications</p>
              </motion.div>
            </motion.div>
            
            {/* Report Generation Specifications */}
            <motion.div 
              variants={staggerContainer}
              className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div 
                variants={staggerItem}
                className="bg-gray-800 rounded-lg p-4"
              >
                <h4 className="font-semibold text-white mb-3">Report Components</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>AI-generated findings with confidence intervals</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Grad-CAM visual overlays on original images</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>BI-RADS classification with supporting evidence</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Recommendations for clinical management</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-green-400 mr-2">✓</span>
                    <span>Technical metadata and processing logs</span>
                  </motion.li>
                </ul>
              </motion.div>
              
              <motion.div 
                variants={staggerItem}
                className="bg-gray-800 rounded-lg p-4"
              >
                <h4 className="font-semibold text-white mb-3">Technical Specifications</h4>
                <ul className="text-sm text-gray-300 space-y-2">
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Report generation time: &lt;500ms</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Template customization: JSON-based configuration</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Multi-language support: 12 languages</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Digital signature integration: PKI-based</span>
                  </motion.li>
                  <motion.li 
                    variants={itemVariants}
                    className="flex items-start"
                  >
                    <span className="text-blue-400 mr-2">•</span>
                    <span>Version control: Git-based report history</span>
                  </motion.li>
                </ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Performance Benchmarks */}
        <motion.div
          variants={fadeInUp}
          className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 border border-indigo-700/50 shadow-2xl"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold text-white mb-8 text-center"
          >
            Clinical Validation Performance
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-indigo-900/30 to-gray-800 rounded-xl border border-indigo-700/50"
            >
              <div className="text-5xl font-bold text-indigo-400 mb-3">27</div>
              <h3 className="font-semibold text-white mb-2">Peer-Reviewed Publications</h3>
              <p className="text-indigo-200 text-sm">Published in leading radiology and AI journals with 1,200+ citations</p>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-purple-900/30 to-gray-800 rounded-xl border border-purple-700/50"
            >
              <div className="text-5xl font-bold text-purple-400 mb-3">15</div>
              <h3 className="font-semibold text-white mb-2">Multi-Center Studies</h3>
              <p className="text-purple-200 text-sm">Conducted across 15 institutions with 50,000+ patient cases</p>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="text-center p-6 bg-gradient-to-b from-blue-900/30 to-gray-800 rounded-xl border border-blue-700/50"
            >
              <div className="text-5xl font-bold text-blue-400 mb-3">42%</div>
              <h3 className="font-semibold text-white mb-2">Reduction in Reading Time</h3>
              <p className="text-blue-200 text-sm">Average time savings per case with maintained diagnostic accuracy</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={staggerContainer}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div 
              variants={staggerItem}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="font-semibold text-white mb-4">Technical Validation Metrics</h3>
              <div className="space-y-3">
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Inter-rater Reliability (ICC):</span>
                  <span className="font-semibold text-green-400">0.92</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Area Under ROC Curve (AUC):</span>
                  <span className="font-semibold text-green-400">0.967</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Precision-Recall AUC:</span>
                  <span className="font-semibold text-green-400">0.943</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">F1-Score:</span>
                  <span className="font-semibold text-green-400">0.951</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              variants={staggerItem}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h3 className="font-semibold text-white mb-4">Deployment Scalability</h3>
              <div className="space-y-3">
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Concurrent Users:</span>
                  <span className="font-semibold text-blue-400">10,000+</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Images Processed Daily:</span>
                  <span className="font-semibold text-blue-400">50,000+</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Storage Capacity:</span>
                  <span className="font-semibold text-blue-400">100TB+</span>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="flex justify-between items-center"
                >
                  <span className="text-gray-300">Backup Retention:</span>
                  <span className="font-semibold text-blue-400">7 years</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PlatformPage;