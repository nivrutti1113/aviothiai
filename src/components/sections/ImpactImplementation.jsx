import React from 'react';
import HubSpokeDiagram from './HubSpokeDiagram';

const ImpactImplementation = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: SVG Diagram */}
          <div className="flex items-center justify-center">
            <HubSpokeDiagram />
          </div>
          
          {/* Right Column: Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Impact & Implementation
            </h2>
            
            <p className="text-gray-700">
              Our entirely cloud-native and zero footprint approach to deployment maximizes capacity and existing infrastructure. The hub facility connects, supports, and builds the capacity of various satellite or spoke facilities at the local level.
            </p>
            
            <p className="text-gray-700">
              The hub serves as a center for AI processing, analysis, and interpretation of mammograms and for providing timely and accurate feedback and support to the spokes.
            </p>
            
            <p className="text-gray-700">
              In resource-constrained settings, this model provides an opportunity to develop public-private partnerships, connecting underutilized capacity of mammography scanners available in the private sector with public sector infrastructure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactImplementation;