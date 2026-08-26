'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroLivePoster() {
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, 
        { width: 0, opacity: 0 },
        { width: '150vw', opacity: 1, duration: 1.5, ease: 'power4.out', delay: 0.2 }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-aicon-blue flex items-center justify-center">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_#000_1px,_transparent_1px)] [background-size:20px_20px]" />
      
      {/* Top Left Red Triangle Slice */}
      <div className="absolute top-0 left-0 w-[60vw] h-[80vh] bg-aicon-red" 
           style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
           
      {/* Yellow Slash Line */}
      <div ref={lineRef} className="absolute h-2 bg-aicon-yellow z-10 origin-left" 
           style={{ top: '50%', left: '-10%', transform: 'rotate(-15deg)' }} />

      {/* Chunky Typography */}
      <div className="relative z-20 flex flex-col items-center">
        <h1 className="text-[12rem] md:text-[20rem] font-black text-white leading-none tracking-tighter" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 50%)' }}>
          AI
        </h1>
        <h1 className="text-[12rem] md:text-[20rem] font-black text-white leading-none tracking-tighter -mt-16" style={{ clipPath: 'polygon(0 50%, 100% 50%, 100% 100%, 0 100%)' }}>
          AI
        </h1>
        <h2 className="text-8xl md:text-[12rem] font-black text-aicon-yellow mt-4 uppercase drop-shadow-[10px_10px_0px_#14161A]">
          CON '26
        </h2>
      </div>
    </section>
  );
}
