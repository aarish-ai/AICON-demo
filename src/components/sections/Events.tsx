'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = ['Workshops', 'Talks', 'Hackathon', 'Networking'];
const EVENTS = [
  { id: 1, title: 'AI Engineering 101', category: 'Workshops', time: '10:00 AM' },
  { id: 2, title: 'Future of GenArt', category: 'Talks', time: '1:00 PM' },
  { id: 3, title: 'Build a RAG app', category: 'Hackathon', time: '3:00 PM' },
  { id: 4, title: 'Mixer', category: 'Networking', time: '6:00 PM' },
];

export default function Events() {
  const [filter, setFilter] = useState('Workshops');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-aicon-bone">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-black text-aicon-blue uppercase mb-12">Events</h2>
        <div className="flex gap-4 mb-8 overflow-x-auto pb-4">
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setFilter(cat)} className={`px-6 py-2 font-bold whitespace-nowrap transition-colors ${filter === cat ? 'bg-aicon-blue text-aicon-bone' : 'bg-transparent text-aicon-ink border-2 border-aicon-ink hover:bg-aicon-yellow'}`}>
              {cat}
            </button>
          ))}
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {EVENTS.filter(e => e.category === filter).map(e => (
              <motion.div 
                key={e.id} 
                layoutId={`card-${e.id}`}
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
                onClick={() => setExpandedId(expandedId === e.id ? null : e.id)}
                className="bg-aicon-ink text-aicon-bone p-6 h-64 flex flex-col justify-between cursor-pointer border-b-8 border-aicon-red"
                style={{ perspective: 1000 }}
              >
                <div>
                  <div className="text-aicon-yellow font-bold text-sm mb-2 uppercase">{e.category}</div>
                  <motion.h3 layoutId={`title-${e.id}`} className="text-3xl font-bold leading-tight">{e.title}</motion.h3>
                </div>
                <div className="flex justify-between items-end mt-4">
                  <div className="text-lg font-mono">{e.time}</div>
                  <div className="text-aicon-blue font-bold">+</div>
                </div>
                {expandedId === e.id && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-4 text-gray-400">
                    Join us for an deep dive into {e.title}.
                  </motion.div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
