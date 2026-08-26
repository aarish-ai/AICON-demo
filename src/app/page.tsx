import CustomCursor from '@/components/ui/CustomCursor';
import Navbar from '@/components/sections/Navbar';
import About from '@/components/sections/About';
import Events from '@/components/sections/Events';
import Schedule from '@/components/sections/Schedule';
import FAQ from '@/components/sections/FAQ';
import Registration from '@/components/sections/Registration';
import Footer from '@/components/sections/Footer';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="relative selection:bg-aicon-yellow selection:text-aicon-ink">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Events />
      <Schedule />
      <FAQ />
      <Registration />
      <Footer />
    </main>
  );
}
