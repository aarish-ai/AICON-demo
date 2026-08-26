'use client';
import { useState } from 'react';
import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Events from '@/components/sections/Events';
import Schedule from '@/components/sections/Schedule';
import FAQ from '@/components/sections/FAQ';
import Registration from '@/components/sections/Registration';
import Footer from '@/components/sections/Footer';

// Use the existing Hero component for now until the concepts are built
import Hero from '@/components/sections/Hero';

export default function Home() {
  const [activeHero, setActiveHero] = useState<1 | 2 | 3>(1);

  return (
    <main className="relative selection:bg-aicon-yellow selection:text-aicon-ink">
      <CustomCursor />
      <Navbar />
      
      <Hero /> {/* Temporary placeholder until Tasks 2-4 */}

      <About />
      <Events />
      <Schedule />
      <FAQ />
      <Registration />
      <Footer />

      <div className="fixed bottom-4 right-4 z-[100] bg-aicon-ink p-2 rounded-lg border-2 border-aicon-bone flex gap-2 shadow-xl">
        {[1, 2, 3].map((num) => (
          <button
            key={num}
            onClick={() => setActiveHero(num as 1 | 2 | 3)}
            className={`px-4 py-2 font-bold text-sm transition-colors ${activeHero === num ? 'bg-aicon-yellow text-aicon-ink' : 'bg-transparent text-aicon-bone hover:bg-gray-800'}`}
          >
            Concept {num}
          </button>
        ))}
      </div>
    </main>
  );
}
