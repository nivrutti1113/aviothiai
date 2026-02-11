import React from 'react';
import WorldMapDots from '../components/sections/WorldMapDots';

const WorldMapDemo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Global Impact Visualization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            World map showing strategic healthcare impact regions with purple highlights 
            indicating key deployment areas across six continents.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <WorldMapDots className="mx-auto" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Continent Coverage</h3>
            <p className="text-gray-600">
              6 continents represented with approximately 300-400 dots forming recognizable geographic shapes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Highlight Clusters</h3>
            <p className="text-gray-600">
              15 purple dots highlighting strategic impact regions across key global markets.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              SVG with viewBox 0 0 800 400 scales perfectly on all device sizes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorldMapDemo;