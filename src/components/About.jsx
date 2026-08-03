import stackImage from '../assets/krati/krati-hero.png';
import { aboutContent, personalInfo } from '../data/portfolioData';

const stackIcons = {
  SQL: { label: "SQL", color: "#111827" },
  Python: { label: "PY", color: "#3776AB" },
  "Power BI": { label: "BI", color: "#F2C811" },
};

const About = () => (
  <section id="about" className="data-section bg-[radial-gradient(circle_at_80%_20%,#0f9ba5_0%,#087F8C_36%,#05606a_100%)] pt-24 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
      <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
        <div data-aos="zoom-in-right" data-aos-duration="1100" className="relative flex justify-center w-full">
          <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0" />
          <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]" />
          <div className="data-panel bg-[#071114]/90 w-full max-w-[290px] rounded-[2rem] p-3 border border-white/15 shadow-[0_30px_80px_rgba(0,0,0,0.42)] relative z-20 transform -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-500">
            <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
              <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner" />
            </div>
            <div className="w-full aspect-[3/4] overflow-hidden rounded-[1.4rem] bg-gray-800 border border-white/10">
              <img
                src={stackImage}
                alt={`${personalInfo.name} — ${personalInfo.title}`}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" data-aos-delay="180" data-aos-duration="1000" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-teal-50 mb-5">About me</div>
        <h2 className="text-4xl md:text-6xl font-black text-[#061316] mb-5 tracking-tight">{aboutContent.heading}</h2>
        <p
          className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-teal-50"
          dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
        />
        <div className="flex flex-wrap items-center gap-6 mt-8">
          {aboutContent.techStack.map((technology, index) => (
            <div
              key={technology}
              data-aos="zoom-in"
              data-aos-delay={300 + index * 150}
              className="hover:scale-110 transition-transform duration-300"
            >
              <div className="flex flex-col items-center gap-2">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl border-2 border-black/15 shadow-xl flex items-center justify-center text-2xl font-black"
                  style={{ backgroundColor: stackIcons[technology].color, color: technology === "Power BI" ? "#111" : "#fff" }}
                >
                  {stackIcons[technology].label}
                </div>
                <span className="text-xs font-bold text-white/80 uppercase tracking-wider">{technology}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
      <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 fill-[#0a0a0a]">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </div>
    <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse text-5xl">✦</div>
    <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse text-4xl" style={{ animationDelay: '1s' }}>✦</div>
  </section>
);

export default About;
