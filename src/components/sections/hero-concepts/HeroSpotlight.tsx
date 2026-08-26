'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  return (
    <section 
      className="relative min-h-screen bg-aicon-ink overflow-hidden flex items-center justify-center cursor-none"
      onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
    >
      {/* Scrolling Marquee Background */}
      <div className="absolute inset-0 flex flex-col justify-center opacity-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="text-8xl font-black text-aicon-bone whitespace-nowrap uppercase"
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20 + i * 2, ease: "linear" }}
          >
            ARTIFICIAL INTELLIGENCE CONFERENCE '26 ARTIFICIAL INTELLIGENCE CONFERENCE '26
          </motion.div>
        ))}
      </div>

      {/* Spotlight Effect (Reveals red/blue background) */}
      <motion.div
        className="absolute inset-0 z-10 mix-blend-color"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(252, 220, 88, 0.8), transparent 40%)`
        }}
      />

      {/* 3D Tilting Logo */}
      <motion.div
        className="z-20 w-64 h-64 md:w-96 md:h-96"
        whileHover={{ scale: 1.05 }}
        animate={{
          rotateX: (mousePosition.y - (typeof window !== 'undefined' ? window.innerHeight : 1000) / 2) / -20,
          rotateY: (mousePosition.x - (typeof window !== 'undefined' ? window.innerWidth : 1000) / 2) / 20
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        style={{ backgroundImage: 'url(/assets/AIcon.jpeg)', backgroundSize: 'cover', boxShadow: '20px 20px 0px rgba(125,2,2,1)' }}
      />
    </section>
  );
}
