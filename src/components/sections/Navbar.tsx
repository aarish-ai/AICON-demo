'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-40 transition-colors duration-300 ${scrolled ? 'bg-aicon-ink text-aicon-bone' : 'bg-transparent text-aicon-bone'}`}>
      <div className="flex justify-between items-center p-6">
        <div className="flex items-center">
          <Image src="/assets/AIcon.jpeg" alt="AICON '26 Logo" width={48} height={48} className="object-cover rounded-md" />
        </div>
        <Link href="#registration">
          <button className="bg-aicon-yellow text-aicon-ink px-6 py-2 font-bold hover:bg-aicon-bone transition-colors">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
