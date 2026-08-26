'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ end, label }: { end: number, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // 2 seconds
      const startTime = performance.now();

      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (easeOutExpo)
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        
        setCount(Math.floor(easeProgress * end));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <span className="text-6xl font-black text-aicon-yellow mb-2">{count}+</span>
      <span className="text-xl font-bold uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section className="relative bg-aicon-bone min-h-[80vh] flex flex-col md:flex-row overflow-hidden">
      <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center z-10">
        <h2 className="text-5xl font-black text-aicon-red uppercase mb-8">The Premier Student AI Conference</h2>
        <p className="text-2xl font-medium leading-relaxed text-aicon-ink mb-6">
          AICON '26 brings together the brightest minds in artificial intelligence. 
          From foundational models to generative art, we explore the cutting edge of what's possible.
        </p>
        <p className="text-xl font-medium text-gray-700">
          Two days of workshops, talks, and hacking. No fluff. Just builders.
        </p>
      </div>

      <div className="w-full md:w-1/2 relative bg-aicon-blue flex items-center justify-center p-12 min-h-[400px]">
        {/* Diagonal cut separating the sections */}
        <div className="hidden md:block absolute top-0 -left-[10vw] w-[20vw] h-full bg-aicon-bone" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%, 0 100%)' }} />
             
        <div className="relative z-10 grid grid-cols-2 gap-12 text-aicon-bone">
          <Counter end={500} label="Attendees" />
          <Counter end={24} label="Workshops" />
          <Counter end={48} label="Hours" />
          <Counter end={10} label="Speakers" />
        </div>
      </div>
    </section>
  );
}
