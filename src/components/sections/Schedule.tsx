'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SCHEDULE = {
  1: [
    { time: '10:00 AM', title: 'Opening Keynote', desc: 'Welcome to AICON 26.' },
    { time: '11:30 AM', title: 'AI Engineering 101', desc: 'Fundamentals of building AI applications.' },
    { time: '01:00 PM', title: 'Lunch Break', desc: 'Networking and food.' },
    { time: '02:30 PM', title: 'Generative Models in Prod', desc: 'Deploying at scale.' },
  ],
  2: [
    { time: '09:00 AM', title: 'Hackathon Kickoff', desc: 'Start building your models.' },
    { time: '12:00 PM', title: 'Mentorship Sessions', desc: 'Get help from experts.' },
    { time: '05:00 PM', title: 'Closing Ceremony', desc: 'Awards and final thoughts.' },
  ]
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState<1|2>(1);
  const [expandedRow, setExpandedRow] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      if (progressLineRef.current && containerRef.current) {
        gsap.to(progressLineRef.current, {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'bottom center',
            scrub: true,
          }
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [activeDay]);

  return (
    <section className="py-20 bg-aicon-ink text-aicon-bone min-h-screen">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-aicon-yellow uppercase mb-12">Schedule</h2>
        
        <div className="flex gap-8 mb-16 sticky top-20 bg-aicon-ink py-4 z-20 border-b-2 border-gray-800">
          <button onClick={() => setActiveDay(1)} className={`text-3xl font-black pb-2 transition-colors ${activeDay === 1 ? 'text-aicon-blue border-b-4 border-aicon-blue' : 'text-gray-500 hover:text-aicon-bone'}`}>Day 1</button>
          <button onClick={() => setActiveDay(2)} className={`text-3xl font-black pb-2 transition-colors ${activeDay === 2 ? 'text-aicon-blue border-b-4 border-aicon-blue' : 'text-gray-500 hover:text-aicon-bone'}`}>Day 2</button>
        </div>

        <div ref={containerRef} className="relative pl-8 md:pl-16">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-800" />
          <div ref={progressLineRef} className="absolute left-0 top-0 w-1 bg-aicon-red h-0" />

          <div className="flex flex-col gap-8">
            {SCHEDULE[activeDay].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[37px] md:-left-[69px] top-2 w-4 h-4 rounded-full bg-aicon-ink border-2 border-aicon-yellow z-10" />
                <div 
                  className="cursor-pointer group"
                  onClick={() => setExpandedRow(expandedRow === idx ? null : idx)}
                >
                  <h4 className="text-xl md:text-2xl font-bold text-aicon-blue mb-1">{item.time}</h4>
                  <p className="text-2xl md:text-4xl font-black uppercase group-hover:text-aicon-yellow transition-colors">{item.title}</p>
                  
                  <AnimatePresence>
                    {expandedRow === idx && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }} 
                        animate={{ height: 'auto', opacity: 1 }} 
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-lg text-gray-300 bg-gray-900 p-6 border-l-4 border-aicon-red">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
