import { useRef, useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroVideo from '../assets/krati/krati-hero.mp4';
import heroImage from '../assets/krati/krati-video-pause.png';
import { heroContent, socialLinks } from '../data/portfolioData';

const Hero = () => {
  const videoRef = useRef(null);
  const hasStoppedOnScrollRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: false,
      mirror: true,
      offset: 90,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    });

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => setIsPlaying(false));
    }

    const stopVideoAfterHero = () => {
      if (
        video &&
        !hasStoppedOnScrollRef.current &&
        window.scrollY > window.innerHeight * 0.45
      ) {
        video.pause();
        hasStoppedOnScrollRef.current = true;
      }
    };

    window.addEventListener('scroll', stopVideoAfterHero, { passive: true });
    return () => window.removeEventListener('scroll', stopVideoAfterHero);
  }, []);

  const toggleVideo = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const toggleSound = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMutedState = !videoRef.current.muted;
      videoRef.current.muted = nextMutedState;
      setIsMuted(nextMutedState);
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[720px] overflow-hidden bg-[#087F8C]">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        poster={heroImage}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onEnded={() => setIsPlaying(false)}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <img
        src={heroImage}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 z-[2] h-full w-full object-cover [filter:brightness(1.06)_contrast(0.97)_saturate(0.84)] transition-opacity duration-300 ${
          isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#043F46]/65 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-48 bg-gradient-to-t from-[#071114] to-transparent pointer-events-none" />
      <div className="absolute -left-24 top-1/3 z-10 h-72 w-72 rounded-full bg-teal-300/10 blur-[90px] pointer-events-none" />

      {/* Left Floating Social Bar for Large Screens */}
      <div className="hidden lg:flex flex-col gap-6 fixed left-6 top-1/2 -translate-y-1/2 z-50 mix-blend-difference">
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12.017 2z" clipRule="evenodd" />
          </svg>
        </a>
        <a 
          href={socialLinks.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-white/60 hover:text-white transition-all duration-300 transform hover:scale-125"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 px-6 pb-20 md:pb-[8%] md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-end md:justify-between items-start md:items-end text-left w-full">
        
        {/* Left Side: Text and Buttons */}
        <div className="flex flex-col items-start text-left max-w-2xl w-full">
          {/* Mobile / Hero inline socials */}
          <div 
            data-aos="fade-up"
            data-aos-delay="100"
            className="flex items-center gap-4 mb-4 lg:hidden"
          >
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12.017 2z" clipRule="evenodd" /></svg>
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>

          {/* Main Heading */}
          <h1 
            data-aos="fade-up"
            className="text-white text-4xl md:text-6xl lg:text-7xl font-black mb-5 tracking-[-0.04em] leading-[0.98] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]"
          >
            {heroContent.greeting}
            <span className="mt-2 block text-3xl md:text-5xl lg:text-6xl">
              <span className="text-white [-webkit-text-stroke:1.5px_#050505] [paint-order:stroke_fill] drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
                {heroContent.titleHighlight}
              </span>{' '}
              <span className="bg-gradient-to-r from-[#62B445] to-[#168FC7] bg-clip-text text-transparent [-webkit-text-stroke:1.5px_#050505] [paint-order:stroke_fill] drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)]">
                {heroContent.titleCompany}
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p 
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-xl mb-8 rounded-2xl border border-white/20 bg-[#043F46]/75 px-4 py-3 text-sm font-bold leading-relaxed text-white shadow-[0_12px_32px_rgba(0,0,0,0.28)] backdrop-blur-md md:px-5 md:py-4 md:text-lg"
          >
            {heroContent.subtitle}
          </p>

          {/* Buttons */}
          <div 
            data-aos="fade-up"
            data-aos-delay="400"
            className="flex flex-row flex-wrap items-center gap-3 w-full"
          >
            {/* Primary Button */}
            <a 
              href={heroContent.ctaPrimary.href}
              className="px-5 py-3 md:px-7 text-xs md:text-sm rounded-full bg-teal-300 text-[#043F46] font-black hover:bg-white transition-all duration-300 transform hover:-translate-y-1 shadow-[0_12px_35px_rgba(45,212,191,0.28)]"
            >
              {heroContent.ctaPrimary.text}
            </a>
            
            {/* Secondary Button - Glassmorphism style */}
            <a 
              href={heroContent.ctaSecondary.href}
              className="px-5 py-3 md:px-7 text-xs md:text-sm rounded-full bg-black/30 border border-white/30 text-white font-bold hover:bg-white hover:text-[#043F46] transition-all duration-300 backdrop-blur-md"
            >
              {heroContent.ctaSecondary.text}
            </a>

            {/* Resume Download Button */}
            <a 
              href={heroContent.ctaResume.href}
              download
              className="px-5 py-3 md:px-7 text-xs md:text-sm rounded-full bg-white border border-white text-[#043F46] font-black hover:-translate-y-1 hover:bg-teal-300 hover:border-teal-300 transition-all duration-300 flex items-center gap-2 shadow-[0_12px_35px_rgba(0,0,0,0.3)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {heroContent.ctaResume.text}
            </a>
          </div>
        </div>

        {/* Right Side: Play Video Button */}
        <div
          data-aos="zoom-in"
          data-aos-delay="600"
          className="mt-8 md:mt-0 flex items-center gap-3 self-start md:self-auto"
        >
          <div className="flex flex-col items-center gap-2 group">
            <button
              type="button"
              onClick={toggleVideo}
              className="w-12 h-12 md:w-20 md:h-20 rounded-full border border-white/30 bg-black/20 backdrop-blur-md flex justify-center items-center group-hover:scale-110 group-hover:bg-[#087F8C] transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_40px_rgba(8,127,140,0.6)]"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {!isPlaying ? (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white ml-0.5 md:ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 md:w-8 md:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              )}
            </button>
            <span className="text-white text-[10px] md:text-xs font-bold tracking-widest uppercase opacity-70">
              {!isPlaying ? "Play Reel" : "Pause"}
            </span>
          </div>

          <button
            type="button"
            onClick={toggleSound}
            className="px-4 py-3 rounded-full border border-white/30 bg-black/30 text-white text-[10px] md:text-xs font-black uppercase tracking-widest backdrop-blur-md hover:bg-[#087F8C] transition-all duration-300"
            aria-label={isMuted ? "Turn sound on" : "Mute video"}
          >
            {isMuted ? "Sound On" : "Mute"}
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        data-aos="fade-up"
        data-aos-delay="800"
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <div className="animate-bounce">
          <svg 
            className="w-6 h-6 text-black drop-shadow-[0_1px_2px_rgba(255,255,255,0.6)]" 
            fill="none" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="3" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
