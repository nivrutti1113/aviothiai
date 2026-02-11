import React from 'react';

const NeuralNetworkGraphic = ({ className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 200 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Neural Network Nodes */}
        <circle cx="50" cy="50" r="8" fill="#8B5CF6" className="animate-pulse" />
        <circle cx="100" cy="40" r="8" fill="#EC4899" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
        <circle cx="150" cy="60" r="8" fill="#3B82F6" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
        <circle cx="80" cy="100" r="8" fill="#10B981" className="animate-pulse" style={{ animationDelay: '0.1s' }} />
        <circle cx="120" cy="120" r="8" fill="#F59E0B" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="60" cy="150" r="8" fill="#EF4444" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        <circle cx="140" cy="160" r="8" fill="#6366F1" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        
        {/* Neural Connections */}
        <line x1="50" y1="50" x2="100" y2="40" stroke="#8B5CF6" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="100" y1="40" x2="150" y2="60" stroke="#EC4899" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="50" y1="50" x2="80" y2="100" stroke="#10B981" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="100" y1="40" x2="80" y2="100" stroke="#EC4899" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="150" y1="60" x2="120" y2="120" stroke="#3B82F6" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="80" y1="100" x2="120" y2="120" stroke="#10B981" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="80" y1="100" x2="60" y2="150" stroke="#10B981" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="120" y1="120" x2="140" y2="160" stroke="#6366F1" strokeWidth="1" opacity="0.6" className="animate-pulse" />
        <line x1="60" y1="150" x2="140" y2="160" stroke="#EF4444" strokeWidth="1" opacity="0.6" className="animate-pulse" />
      </svg>
    </div>
  );
};

export default NeuralNetworkGraphic;