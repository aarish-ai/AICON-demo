export default function Footer() {
  return (
    <footer className="relative bg-aicon-ink text-aicon-bone py-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[50px]">
          <path d="M1200 0L0 0 0 120 1200 0z" className="fill-aicon-bone" />
        </svg>
      </div>

      <div className="container mx-auto px-6 mt-12 relative z-10 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-4xl font-black text-aicon-yellow uppercase tracking-tighter">
          AICON '26
        </div>
        
        <div className="flex gap-8 font-bold">
          <a href="#" className="hover:text-aicon-blue transition-colors">Twitter</a>
          <a href="#" className="hover:text-aicon-blue transition-colors">Instagram</a>
          <a href="#" className="hover:text-aicon-blue transition-colors">Discord</a>
        </div>
        
        <div className="text-sm font-medium text-gray-400">
          © {new Date().getFullYear()} AICON. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
