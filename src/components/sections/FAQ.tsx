'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQS = [
  { q: "Do I need to know AI to attend?", a: "Not at all. We have beginner-friendly workshops (AI Engineering 101) alongside advanced research talks." },
  { q: "Is the hackathon overnight?", a: "No, the hackathon runs during the day on Day 2 to ensure everyone gets a good night's rest." },
  { q: "Will there be food?", a: "Yes, lunch and snacks are provided on both days." },
  { q: "How much does it cost?", a: "AICON '26 is completely free for all students." },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="py-24 bg-aicon-bone">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-5xl font-black text-aicon-blue uppercase mb-12 text-center">FAQ</h2>
        
        <div className="flex flex-col border-t-4 border-aicon-ink">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`border-b-4 border-aicon-ink ${i % 2 === 0 ? 'bg-white' : 'bg-[#f7efe0]'}`}>
                <button 
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <span className="text-2xl font-bold">{faq.q}</span>
                  <span className={`text-3xl font-bold transition-transform ${isOpen ? 'rotate-45 text-aicon-red' : 'text-aicon-blue'}`}>+</span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-lg font-medium text-gray-800">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
