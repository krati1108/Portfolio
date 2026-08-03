import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => (
  <footer className="border-t border-white/10 bg-[#071114] px-6 py-8 text-white/60 md:px-12">
    <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
      <div>
        <p className="text-sm font-black tracking-tight text-white">{personalInfo.brandName}</p>
        <p className="mt-1 text-[10px] font-medium tracking-wide">{footerContent.copyright}</p>
      </div>
      <div className="flex items-center gap-5 text-xs font-bold">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4">
          GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4">
          LinkedIn
        </a>
        <a href="#" className="text-teal-300 hover:text-white transition-colors" aria-label="Back to top">
          Back to top ↑
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
