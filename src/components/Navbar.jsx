import { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#', id: 'home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll to make navbar more solid
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min((window.scrollY / scrollableHeight) * 100, 100)
          : 0
      );
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks
      .filter((link) => link.id !== 'home')
      .map((link) => link.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) setActiveSection(visible.target.id);
        else if (window.scrollY < window.innerHeight * 0.45) setActiveSection('home');
      },
      { rootMargin: '-25% 0px -58% 0px', threshold: [0, 0.15, 0.35] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const hireMeMailto = `mailto:${personalInfo.emails.primary}?subject=Portfolio%20Inquiry&body=Hello%20Krati%2C%0D%0A%0D%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20connect.%0D%0A%0D%0ABest%20regards%2C`;

  return (
    <nav 
      aria-label="Primary navigation"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isOpen 
          ? 'bg-[#064F58]/95 py-4 shadow-2xl backdrop-blur-xl'
          : isScrolled 
            ? 'bg-[#061316]/80 py-3 border-b border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-xl'
            : 'bg-transparent py-6'
      }`}
    >
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500 shadow-[0_0_14px_rgba(45,212,191,0.65)]"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* Left Side: Logo/Name */}
        <div className="flex items-center">
          <a href="#" className="flex items-center gap-3 text-white text-xl font-black tracking-tight whitespace-nowrap">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-teal-300/30 bg-teal-400/15 text-sm text-teal-100 shadow-[0_0_24px_rgba(45,212,191,0.16)]">KJ</span>
            <span>{personalInfo.brandName}<span className="text-teal-400">.</span></span>
          </a>
        </div>

        {/* Center: Desktop Menu Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-black/15 p-1.5 backdrop-blur-md">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              aria-current={activeSection === (link.id || link.href.slice(1)) ? 'page' : undefined}
              className={`px-4 py-2 rounded-full text-sm font-semibold relative group transition-all duration-300 ${
                activeSection === (link.id || link.href.slice(1))
                  ? 'bg-white/12 text-white shadow-[inset_0_0_0_1px_rgba(94,234,212,0.18)]'
                  : 'text-white/65 hover:text-white hover:bg-white/[0.07]'
              }`}
            >
              {link.label}
              <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-teal-300 rounded-full transition-all duration-300 ${
                activeSection === (link.id || link.href.slice(1)) ? 'w-4' : 'w-0 group-hover:w-4'
              }`} />
            </a>
          ))}
        </div>

        {/* Right Side: CTA Button */}
        <div className="hidden md:block">
          <a 
            href={hireMeMailto}
            className="px-6 py-2.5 rounded-full bg-teal-400 text-[#042f34] font-black hover:bg-teal-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(45,212,191,0.28)] transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Slide-Down Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4 opacity-100 bg-[#087F8C] shadow-2xl' : 'max-h-0 opacity-0 bg-transparent'
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`font-bold text-lg border-b pb-2 transition-colors ${
                activeSection === (link.id || link.href.slice(1))
                  ? 'border-teal-200 text-teal-100'
                  : 'border-white/20 text-white hover:text-teal-100'
              }`}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 pb-2">
             <a 
               href={hireMeMailto}
               onClick={() => setIsOpen(false)} 
               className="inline-block px-6 py-3 rounded-full bg-white text-[#087F8C] font-black hover:bg-black hover:text-white transition-colors w-full text-center shadow-lg"
             >
               Hire Me
             </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
