'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Countdown from '../ui/Countdown';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let ctx = gsap.matchMedia();
    
    ctx.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(titleRef.current, 
        { clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)', y: 50 },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)', y: 0, duration: 1.2, ease: 'power4.out' }
      );
    });

    ctx.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set(titleRef.current, { clipPath: 'none', y: 0 });
    });
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-screen bg-aicon-ink flex flex-col items-center justify-center overflow-hidden">
      <div className="grain-overlay" />
      <h1 ref={titleRef} className="text-7xl md:text-9xl font-black text-aicon-blue uppercase z-10">
        AICON '26
      </h1>
      <div className="z-10 mt-8">
        <Countdown targetDate="2026-10-24T00:00:00Z" />
      </div>
    </section>
  );
}
