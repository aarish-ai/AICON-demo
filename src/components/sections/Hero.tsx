// src/components/sections/Hero.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
  const redShard = useRef(null);
  const blueBackground = useRef(null);
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Concept 3 Style Shard Animation for background elements
      tl.fromTo([blueBackground.current, redShard.current],
        { opacity: 0, scale: 1.5, rotation: 15 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1.2, ease: 'expo.out', stagger: 0.1 }
      )
      // Yellow line shoots across
      .fromTo(lineRef.current, 
        { width: 0, opacity: 0 },
        { width: '150vw', opacity: 1, duration: 1, ease: 'power4.out' },
        "-=0.5"
      )
      // Normal fade in for typography
      .fromTo(textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' },
        "-=0.8"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-aicon-ink flex items-center justify-center">
      {/* Blue Background Shard */}
      <div ref={blueBackground} className="absolute inset-0 bg-aicon-blue origin-center" />
      
      {/* Background Texture over Blue */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      {/* Top Left Red Triangle Slice Shard */}
      <div ref={redShard} className="absolute top-0 left-0 w-[60vw] h-[80vh] bg-aicon-red origin-top-left" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
           
      {/* Yellow Slash Line (Passing perfectly between the 2px gap) */}
      <div ref={lineRef} className="absolute h-[6px] bg-aicon-yellow z-10 origin-left" 
           style={{ top: 'calc(50% - 3px)', left: '-10%', transform: 'rotate(-15deg)' }} />

      {/* Chunky Typography with strict 2px gap on a single line */}
      <div ref={textRef} className="relative z-20 flex flex-col items-center justify-center h-full w-full">
        {/* Container to keep text perfectly centered */}
        <div className="relative flex items-center justify-center h-64 md:h-96 w-full px-4">
          
          {/* Top Half */}
          <h1 className="absolute text-[20vw] md:text-[14vw] font-black leading-none tracking-tighter whitespace-nowrap" 
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)', transform: 'translateY(-2px)' }}>
            <span className="text-white">AI</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '4px var(--color-aicon-yellow)' }}>CON '26</span>
          </h1>
          
          {/* Bottom Half */}
          <h1 className="absolute text-[20vw] md:text-[14vw] font-black leading-none tracking-tighter whitespace-nowrap" 
              style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)', transform: 'translateY(2px)' }}>
            <span className="text-white">AI</span>
            <span className="text-transparent" style={{ WebkitTextStroke: '4px var(--color-aicon-yellow)' }}>CON '26</span>
          </h1>
          
        </div>
      </div>
    </section>
  );
}
