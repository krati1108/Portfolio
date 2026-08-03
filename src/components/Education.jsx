import { education } from '../data/portfolioData';

const Education = () => (
  <section id="education" className="bg-[#0a0a0a] py-24 px-6 md:px-12 w-full relative overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]" />
    <div className="max-w-6xl mx-auto relative z-10">
      <div data-aos="fade-up" className="mb-12">
        <div className="inline-block border border-white/20 rounded-full px-5 py-1.5 text-sm text-white/60 font-bold mb-6 bg-white/5">
          Academic Foundation
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase">Education</h2>
      </div>
      <article data-aos="fade-up" data-aos-delay="150" className="rounded-3xl border border-white/10 bg-black/80 backdrop-blur-md p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white">{education.degree}</h3>
            <p className="text-sky-400 font-bold mt-2">{education.institution} · {education.location}</p>
          </div>
          <div className="md:text-right">
            <p className="text-white/60 font-mono text-sm">{education.duration}</p>
            {education.gpa && (
              <p className="text-white font-black mt-2">GPA {education.gpa}</p>
            )}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {education.coursework.map((course) => (
            <span key={course} className="px-4 py-2 rounded-full border border-white/10 bg-black/20 text-white/70 text-sm font-semibold">
              {course}
            </span>
          ))}
        </div>
      </article>
    </div>
  </section>
);

export default Education;
