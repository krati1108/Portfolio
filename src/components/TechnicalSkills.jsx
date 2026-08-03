import { technicalSkills } from '../data/portfolioData';

const SkillProgress = ({ name }) => (
  <span className="inline-flex px-3 py-2 rounded-full text-xs font-bold text-white/80 bg-white/5 border border-white/10 hover:bg-teal-500/20 hover:border-teal-500/40 transition-all duration-300">
    {name}
  </span>
);

const categoryMarks = ['DB', 'BI', 'ETL', 'ML', 'OPS', 'SYS'];

const SkillCard = ({ category, index }) => (
  <div 
    data-aos={index % 2 === 0 ? "flip-up" : "zoom-in-up"}
    data-aos-delay={index * 100}
    data-aos-duration="900"
    className="data-panel group bg-gradient-to-br from-[#0d2023]/95 to-black/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:-translate-y-1 hover:border-teal-300/40 hover:shadow-[0_24px_60px_rgba(8,127,140,0.2)] transition-all duration-500"
  >
    <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-teal-300/60">
          Capability 0{index + 1}
        </span>
        <h3 className="mt-1 text-lg font-black tracking-tight text-white uppercase">
          {category.title}
        </h3>
      </div>
      <span
        aria-hidden="true"
        className="grid h-11 w-11 place-items-center rounded-xl border border-teal-300/20 bg-teal-300/10 font-mono text-[10px] font-black text-teal-200 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:bg-teal-300 group-hover:text-[#052b30]"
      >
        {categoryMarks[index] || 'DA'}
      </span>
    </div>
    <div className="flex flex-wrap gap-2">
      {category.skills.map((skill) => (
        <SkillProgress key={skill} name={skill} />
      ))}
    </div>
  </div>
);

const TechnicalSkills = () => {
  return (
    <section id="skills" className="data-section bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      {/* Background visual elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-teal-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div data-aos="fade-up" className="mb-16 text-center">
          <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 shadow-sm bg-white/5 backdrop-blur-sm">
            Technical Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4 uppercase">
            My Skillset
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A comprehensive overview of my analytics, visualization, modeling, data-platform, and domain expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {technicalSkills.categories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechnicalSkills;
