'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function HeroGlitch() {
  const containerRef = useRef(null);
  const redShard = useRef(null);
  const blueShard = useRef(null);
  const yellowShard = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo([redShard.current, blueShard.current, yellowShard.current],
        { opacity: 0, scale: 2, rotation: 45 },
        { opacity: 1, scale: 1, rotation: 0, duration: 1, ease: 'expo.out', stagger: 0.1 }
      )
      .fromTo('.glitch-text', 
        { x: -50, opacity: 0, skewX: 20 },
        { x: 0, opacity: 1, skewX: 0, duration: 0.5, ease: 'back.out(1.7)' },
        "-=0.5"
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-aicon-ink overflow-hidden flex items-center justify-center">
      {/* Giant Shards Assembling */}
      <div ref={redShard} className="shard absolute top-0 left-0 w-1/2 h-[120%] bg-aicon-red origin-top-left" style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }} />
      <div ref={blueShard} className="shard absolute bottom-0 right-0 w-full h-[120%] bg-aicon-blue" style={{ clipPath: 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)' }} />
      <div ref={yellowShard} className="shard absolute top-1/2 left-0 w-[150vw] h-8 bg-aicon-yellow -translate-y-1/2 rotate-12" />

      <div className="z-20 text-center mix-blend-difference">
        <h1 className="glitch-text text-[15vw] font-black text-white uppercase leading-none tracking-tighter mix-blend-exclusion">
          AICON
        </h1>
        <h2 className="glitch-text text-[8vw] font-black text-aicon-yellow uppercase leading-none">
          '26
        </h2>
      </div>
    </section>
  );
}
