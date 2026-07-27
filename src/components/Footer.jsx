import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => (
  <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[50vh]">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
      <div className="flex flex-col gap-1">
        {footerContent.taglines.map((line) => <p key={line}>{line}</p>)}
      </div>
      <div className="flex flex-col gap-1 md:items-center">
        <p>{footerContent.credential}</p>
        <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4">View Work</a>
      </div>
      <div className="flex flex-col gap-1 md:items-end">
        <p>{personalInfo.location}</p>
        <p>Available for opportunities · {new Date().getFullYear()}</p>
      </div>
    </div>

    <div className="w-full flex justify-center items-center py-20 md:py-24 overflow-hidden">
      <h2 className="text-[18vw] md:text-[16vw] leading-none font-sans font-bold tracking-tighter lowercase select-none text-[#f4f4f4] w-full text-center">
        {personalInfo.brandName.toLowerCase()}
      </h2>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
      <div className="flex flex-col gap-6">
        <a href="#contact" className="underline hover:text-white transition-colors underline-offset-4 font-bold">Contact</a>
        <p className="text-white/60 text-[9px] md:text-[10px]">{footerContent.copyright}</p>
      </div>
      <div className="flex flex-col gap-3 md:items-center">
        <a href={`mailto:${personalInfo.emails.primary}`} className="underline hover:text-white transition-colors underline-offset-4 lowercase">
          {personalInfo.emails.primary}
        </a>
        <a href={`tel:${personalInfo.phone.replace(/[^\d+]/g, '')}`} className="hover:text-white transition-colors">
          {personalInfo.phone}
        </a>
      </div>
      <div className="flex flex-col gap-1 md:items-end">
        <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4">
          Explore GitHub
        </a>
        <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors underline-offset-4">
          Connect on LinkedIn
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
