import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const TRIVITA_3DModel = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    // Animation variables
    let rotationX = 0; // Horizontal rotation
    let rotationY = 0; // Vertical rotation
    let autoRotation = 0.002; // Auto-rotation speed
    let nodes = [];
    let connections = [];
    
    // Mouse interaction variables
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;
    
    // Create nodes for the 3D model
    const createNodes = () => {
      nodes = [];
      const stages = ['Input', 'Feature', 'Transformer', 'Clinical', 'Uncertainty', 'Core'];
      const colors = ['#ec4899', '#8b5cf6', '#6366f1', '#14b8a6', '#f59e0b', '#ef4444'];
      
      for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 120; // Increased radius for better spacing
        const x = canvas.width / 2 + Math.cos(angle) * radius;
        const y = canvas.height / 2 + Math.sin(angle) * radius;
        
        nodes.push({
          id: i,
          x,
          y,
          stage: stages[i],
          color: colors[i],
          originalX: x,
          originalY: y
        });
      }
      
      // Add central TRIVITA core node
      nodes.push({
        id: 6,
        x: canvas.width / 2,
        y: canvas.height / 2,
        stage: 'TRIVITA',
        color: '#06b6d4',
        originalX: canvas.width / 2,
        originalY: canvas.height / 2
      });
    };
    
    // Create connections between nodes
    const createConnections = () => {
      connections = [];
      for (let i = 0; i < 6; i++) {
        connections.push({ from: i, to: 6 }); // Connect each to center
        if (i > 0) {
          connections.push({ from: i-1, to: i }); // Connect adjacent
        }
      }
      connections.push({ from: 5, to: 0 }); // Close the loop
    };
    
    // Mouse event handlers
    const handleMouseDown = (e) => {
      isDragging = true;
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - lastMouseX;
      const deltaY = e.clientY - lastMouseY;
      
      // Update rotation based on mouse movement in both X and Y axes
      rotationX += deltaX * 0.01;
      rotationY += deltaY * 0.01;
      
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
      e.preventDefault();
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      
      const deltaX = e.touches[0].clientX - lastMouseX;
      const deltaY = e.touches[0].clientY - lastMouseY;
      
      // Update rotation based on touch movement in both X and Y axes
      rotationX += deltaX * 0.01;
      rotationY += deltaY * 0.01;
      
      lastMouseX = e.touches[0].clientX;
      lastMouseY = e.touches[0].clientY;
      e.preventDefault();
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    // Animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update rotation (only auto-rotate when not dragging)
      if (!isDragging) {
        rotationX += autoRotation;
        rotationY += autoRotation * 0.5; // Slightly slower vertical auto-rotation
      }
      
      // Draw connections
      connections.forEach(conn => {
        const fromNode = nodes[conn.from];
        const toNode = nodes[conn.to];
        
        // Calculate rotated positions using both X and Y rotations
        const fromX = fromNode.originalX + Math.cos(rotationX + conn.from) * 15 + Math.sin(rotationY + conn.from) * 8;
        const fromY = fromNode.originalY + Math.sin(rotationX + conn.from) * 15 + Math.cos(rotationY + conn.from) * 8;
        const toX = toNode.originalX + Math.cos(rotationX + conn.to) * 15 + Math.sin(rotationY + conn.to) * 8;
        const toY = toNode.originalY + Math.sin(rotationX + conn.to) * 15 + Math.cos(rotationY + conn.to) * 8;
        
        ctx.beginPath();
        ctx.moveTo(fromX, fromY);
        ctx.lineTo(toX, toY);
        ctx.strokeStyle = 'rgba(103, 232, 249, 0.3)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });
      
      // Draw nodes
      nodes.forEach(node => {
        // Apply rotation effect using both X and Y rotations
        const x = node.originalX + Math.cos(rotationX + node.id) * 15 + Math.sin(rotationY + node.id) * 8;
        const y = node.originalY + Math.sin(rotationX + node.id) * 15 + Math.cos(rotationY + node.id) * 8;
        
        // Draw glow effect
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 25);
        gradient.addColorStop(0, node.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw node
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.fill();
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Draw label with better positioning
        ctx.font = 'bold 12px Arial';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top'; // Position text from the top of the specified coordinates
        
        // Position text based on node stage with appropriate spacing
        const text = node.stage;
        let yOffset = 18; // Default offset
        
        // Adjust vertical position based on the node type
        if (text === 'TRIVITA') {
          ctx.font = 'bold 14px Arial';
          yOffset = 25; // Center the larger text
        }
        
        ctx.fillText(text, x, y + yOffset);
      });
      
      requestAnimationFrame(animate);
    };
    
    // Handle window resize
    const handleResize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createNodes();
      createConnections();
    };
    
    // Add event listeners
    canvas.addEventListener('mousedown', handleMouseDown);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', handleMouseUp);
    canvas.addEventListener('mouseleave', handleMouseUp);
    
    // Touch events for mobile devices
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', handleTouchEnd);
    
    window.addEventListener('resize', handleResize);
    
    // Initialize and start animation
    createNodes();
    createConnections();
    animate();
    
    return () => {
      // Clean up event listeners
      canvas.removeEventListener('mousedown', handleMouseDown);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
      canvas.removeEventListener('mouseleave', handleMouseUp);
      
      canvas.removeEventListener('touchstart', handleTouchStart);
      canvas.removeEventListener('touchmove', handleTouchMove);
      canvas.removeEventListener('touchend', handleTouchEnd);
      
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="w-full h-80 relative"> {/* Reduced height from 500px to h-80 (320px) */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full bg-slate-900 rounded-lg border border-cyan-500/30 cursor-grab active:cursor-grabbing"
      />
      {/* Dynamic text inside the visualization */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 bg-clip-text text-transparent animate-pulse">
            TRIVITA
          </div>
          <div className="text-sm md:text-base text-slate-300 mt-1">
            Architecture
          </div>
        </div>
      </div>
    </div>
  );
};

export default TRIVITA_3DModel;