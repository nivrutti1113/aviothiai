import React from "react";
import { motion } from "framer-motion";

const TRIVITA_Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1120] text-white">
      {/* ===== BACKGROUND RADIAL GLOW ===== */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] 
                        bg-cyan-500/10 
                        rounded-full blur-[140px] 
                        top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        animate-pulse" />
      </div>

      {/* ===== GRID BACKGROUND ===== */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(#1E293B_1px,transparent_1px)] 
                        [background-size:40px_40px]" />
      </div>

      {/* ===== FLOATING PARTICLES ===== */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: ["0%", "100%"],
            }}
            transition={{
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 text-center px-6">
        {/* LOGO GLOW */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-2xl opacity-40 rounded-2xl animate-pulse" />
            <div className="relative w-20 h-20 rounded-2xl 
                            bg-gradient-to-br from-cyan-400 to-teal-400 
                            flex items-center justify-center 
                            shadow-xl shadow-cyan-500/30">
              <span className="text-3xl font-bold text-black">T</span>
            </div>
          </div>
        </motion.div>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-semibold tracking-tight mb-6"
        >
          TRIVITA
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed"
        >
          Triple-stage Representational Intelligence via 
          Vision-based Integrated Transformative Architecture
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center gap-6"
        >
          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 rounded-xl 
                       bg-cyan-500 hover:bg-cyan-400 
                       text-black font-medium 
                       transition-all duration-300 
                       shadow-lg shadow-cyan-500/30">
            View Architecture
          </button>

          <button 
            onClick={() => window.location.href = '/contact'}
            className="px-8 py-4 rounded-xl 
                       border border-slate-600 
                       hover:border-cyan-400 
                       text-slate-300 hover:text-white 
                       transition-all duration-300">
            Technical Documentation
          </button>
        </motion.div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-500 text-sm"
      >
        Scroll to Explore ↓
      </motion.div>
    </section>
  );
};

export default TRIVITA_Hero;