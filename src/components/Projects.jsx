import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from '../data/portfolioData';

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ProjectCard = ({ project }) => (
  <div 
    className={`relative rounded-2xl p-[1px] group transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-gradient-to-br from-sky-500/50 via-white/10 to-sky-500/30 hover:from-sky-500 hover:via-sky-400/30 hover:to-sky-500/60'
        : 'bg-white/10 hover:bg-white/20'
    }`}
  >
    <div className={`rounded-2xl p-4 md:p-5 h-full backdrop-blur-md transition-all duration-500 ${
      project.isFlagship 
        ? 'bg-[#0f0f0f]/95 group-hover:bg-[#0f0f0f]/90' 
        : 'bg-[#111111]/90 group-hover:bg-[#111111]/80'
    }`}>
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-black border border-white/10">
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
        />
      </div>
      {/* Badge */}
      {project.badge && (
        <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 mb-3">
          {project.badge}
        </span>
      )}

      {/* Number + Title */}
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-3xl font-black text-white/10 font-serif italic">{project.number}</span>
        <h3 className="text-lg md:text-xl font-black text-white tracking-tight leading-tight">{project.title}</h3>
      </div>

      {/* Description */}
      <p className="text-white/60 text-xs md:text-sm leading-relaxed mb-4 font-medium line-clamp-4">
        {project.description}
      </p>

      {/* Tech Tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techTags.slice(0, 4).map((tag) => (
          <span 
            key={tag}
            className="px-2.5 py-1 text-[10px] font-bold text-white/70 bg-white/5 rounded-full border border-white/10 hover:bg-sky-500/20 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-300 cursor-default"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        {project.links.github && (
          <a 
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white hover:text-black transition-all duration-300 group/btn"
          >
            <GitHubIcon />
            GitHub
          </a>
        )}

        {/* Live Demo (single) */}
        {project.links.demo !== undefined && (
          <a 
            href={project.links.demo || '#'}
            target={project.links.demo ? "_blank" : undefined}
            rel={project.links.demo ? "noopener noreferrer" : undefined}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              project.links.demo 
                ? 'bg-[#0274A1] text-white hover:bg-sky-600 hover:shadow-[0_0_20px_rgba(2,116,161,0.4)]'
                : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'
            }`}
          >
            <ExternalLinkIcon />
            {project.links.demo ? 'Live Demo' : 'Demo Coming Soon'}
          </a>
        )}

        {/* Frontend Demo (Karigar) */}
        {project.links.frontendDemo && (
          <a 
            href={project.links.frontendDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#0274A1] text-white text-sm font-semibold hover:bg-sky-600 hover:shadow-[0_0_20px_rgba(2,116,161,0.4)] transition-all duration-300"
          >
            <ExternalLinkIcon />
            Frontend Demo
          </a>
        )}

        {/* Backend API (Karigar) */}
        {project.links.backendApi && (
          <a 
            href={project.links.backendApi}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all duration-300"
          >
            <ExternalLinkIcon />
            Backend API
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const rotateTo = (nextIndex) => {
    setActiveIndex((nextIndex + projects.length) % projects.length);
  };

  const rotate = (step) => rotateTo(activeIndex + step);

  useEffect(() => {
    if (!isAutoPlaying) return undefined;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [isAutoPlaying]);

  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      rotate(-1);
    }
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      rotate(1);
    }
  };

  return (
    <section id="projects" className="bg-[#0a0a0a] pt-24 pb-32 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 md:mb-20">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-8 shadow-sm bg-white/5 backdrop-blur-sm">
            Featured Projects
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 tracking-tight">
            Work that speaks <br className="hidden md:block" />for itself
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-lg font-medium leading-relaxed">
            Drag, swipe, or use the controls to explore analytics and machine-learning work.
          </p>
        </div>

        {/* Interactive 3D Project Carousel */}
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
          tabIndex={0}
          onKeyDown={handleKeyDown}
        >
          <div
            className="relative h-[540px] sm:h-[580px] md:h-[620px] flex items-center justify-center [perspective:1400px]"
            style={{ touchAction: 'pan-y' }}
          >
            <AnimatePresence initial={false}>
              {[-1, 0, 1].map((slot) => {
                const projectIndex = (activeIndex + slot + projects.length) % projects.length;
                const isActive = slot === 0;
                return (
                  <motion.div
                    key={`${activeIndex}-${projects[projectIndex].id}-${slot}`}
                    initial={{
                      x: `${slot * 62}%`,
                      y: 18,
                      z: -260,
                      rotateY: slot * -34,
                      scale: 0.68,
                      opacity: 0,
                      filter: 'brightness(0.35) blur(5px)',
                    }}
                    animate={{
                      x: slot === 0 ? '0%' : `${slot * 48}%`,
                      y: isActive ? 0 : 10,
                      z: isActive ? 0 : -150,
                      rotateY: slot * -18,
                      scale: isActive ? 1 : 0.78,
                      opacity: isActive ? 1 : 0.52,
                      filter: isActive ? 'brightness(1) blur(0px)' : 'brightness(0.58) blur(1px)',
                    }}
                    exit={{
                      x: `${slot * -58}%`,
                      y: 22,
                      z: -280,
                      rotateY: slot * 36,
                      scale: 0.66,
                      opacity: 0,
                      filter: 'brightness(0.3) blur(6px)',
                    }}
                    transition={{
                      x: { type: 'spring', stiffness: 180, damping: 24, mass: 0.85 },
                      y: { duration: 0.45, ease: 'easeOut' },
                      z: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                      rotateY: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                      scale: { duration: 0.45, ease: 'easeOut' },
                      opacity: { duration: 0.32, ease: 'easeInOut' },
                      filter: { duration: 0.38, ease: 'easeInOut' },
                    }}
                    drag={isActive ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.14}
                    whileHover={isActive ? { scale: 1.015, z: 18 } : { opacity: 0.72 }}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -70 || info.velocity.x < -500) rotate(1);
                      if (info.offset.x > 70 || info.velocity.x > 500) rotate(-1);
                    }}
                    onClick={() => {
                      if (!isActive) rotate(slot);
                    }}
                    className={`absolute w-[290px] sm:w-[350px] md:w-[420px] [transform-style:preserve-3d] [backface-visibility:hidden] ${
                      isActive ? 'z-30 cursor-grab active:cursor-grabbing' : 'z-10 cursor-pointer'
                    }`}
                    style={{ transformOrigin: slot < 0 ? 'right center' : 'left center' }}
                    aria-hidden={!isActive}
                    aria-live={isActive ? 'polite' : 'off'}
                  >
                    <div className={!isActive ? 'pointer-events-none' : ''}>
                      <ProjectCard project={projects[projectIndex]} />
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          <div className="relative mt-6 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => rotate(-1)}
                className="w-12 h-12 rounded-full bg-black border border-white/15 text-white hover:bg-[#0274A1] hover:border-sky-300 transition-all duration-300 flex items-center justify-center"
                aria-label="Previous project"
              >
                <span aria-hidden="true" className="text-2xl">←</span>
              </button>
              <button
                type="button"
                onClick={() => rotate(1)}
                className="w-12 h-12 rounded-full bg-black border border-white/15 text-white hover:bg-[#0274A1] hover:border-sky-300 transition-all duration-300 flex items-center justify-center"
                aria-label="Next project"
              >
                <span aria-hidden="true" className="text-2xl">→</span>
              </button>
              <button
                type="button"
                onClick={() => setIsAutoPlaying((playing) => !playing)}
                className="h-12 px-5 rounded-full bg-black border border-white/15 text-white text-xs font-black uppercase tracking-widest hover:border-sky-300 transition-all duration-300"
                aria-pressed={isAutoPlaying}
              >
                {isAutoPlaying ? 'Pause rotation' : 'Auto rotate'}
              </button>
            </div>

            <div className="flex items-center gap-3" role="tablist" aria-label="Choose project">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show project ${index + 1}: ${project.title}`}
                  onClick={() => rotateTo(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-10 bg-[#0274A1]' : 'w-2.5 bg-white/25 hover:bg-white/60'
                  }`}
                />
              ))}
            </div>

            <p className="text-white/40 text-xs font-mono uppercase tracking-widest">
              {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
