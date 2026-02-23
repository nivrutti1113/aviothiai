import React from 'react';
import TRIVITA_SystemArchitecture from '../components/TRIVITA_SystemArchitecture';
import TRIVITA_Hero from '../components/TRIVITA_Hero';
import TRIVITA_3DModel from '../components/TRIVITA_3DModel';
import TRIVITA_N8N_Structured from '../components/TRIVITA_N8N_Structured';

const TRIVITADemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100">
      <TRIVITA_Hero />
      <div className="container mx-auto px-4 py-8">
        
        <div className="bg-white rounded-xl p-6 border border-pink-200 shadow-2xl">
          <TRIVITA_SystemArchitecture />
        </div>
        
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-xl p-8 border border-pink-200 shadow-lg">
            
            {/* Connection Animation Lines */}
            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-pink-200 via-purple-200 to-pink-200 opacity-30"></div>
              </div>
              <div className="relative flex justify-between px-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="relative">
                    <div className={`w-3 h-3 rounded-full bg-pink-500 animate-pulse ${i % 2 === 0 ? 'animate-bounce' : ''}`}
                         style={{ animationDelay: `${i * 0.2}s` }}>
                    </div>
                    {i < 4 && (
                      <div className="absolute top-1/2 left-full w-16 h-0.5 bg-gradient-to-r from-pink-300 to-purple-300 -translate-y-1/2 opacity-50">
                        <div className="w-full h-full bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-pulse"
                             style={{ animationDuration: '2s' }}></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* 3D Model Visualization */}
            <div className="mb-8">
              <TRIVITA_3DModel />
            </div>
            
            {/* n8n-style Architecture Diagram */}
            <div className="mb-8">
              <TRIVITA_N8N_Structured />
            </div>
            
            {/* Technical Specifications */}
            <div className="mt-8 pt-6 border-t border-pink-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">98.5%</div>
                  <div className="text-sm text-gray-600">Sensitivity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">95%</div>
                  <div className="text-sm text-gray-600">Specificity</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">&lt;1s</div>
                  <div className="text-sm text-gray-600">Inference Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">DICOM</div>
                  <div className="text-sm text-gray-600">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-pink-500/20"
          >
            Request Technical Documentation
          </button>
        </div>
        
        {/* Performance Metrics Section */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-2">Performance Benchmarks</h2>
              <p className="text-pink-100">Clinical validation results across multiple datasets</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">98.5%</div>
                <div className="text-pink-100 text-sm">Sensitivity</div>
                <div className="text-xs text-pink-200 mt-1">Breast Cancer Detection</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">95.2%</div>
                <div className="text-pink-100 text-sm">Specificity</div>
                <div className="text-xs text-pink-200 mt-1">False Positive Reduction</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">0.89</div>
                <div className="text-pink-100 text-sm">AUC-ROC</div>
                <div className="text-xs text-pink-200 mt-1">Area Under Curve</div>
              </div>
              
              <div className="text-center bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <div className="text-4xl font-bold mb-2">&lt;1s</div>
                <div className="text-pink-100 text-sm">Inference</div>
                <div className="text-xs text-pink-200 mt-1">Real-time Processing</div>
              </div>
            </div>
            

          </div>
        </div>
      </div>
    </div>
  );
};

export default TRIVITADemo;