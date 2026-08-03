import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { skillsContent } from '../data/portfolioData';

const processLabels = ['Discover', 'Structure', 'Analyze', 'Activate'];

const ProcessCard = ({ card, index, isOpen, onToggle }) => (
  <motion.article
    layout
    initial={false}
    className={`process-paper group relative overflow-hidden rounded-[1.75rem] border transition-colors duration-500 ${
      isOpen
        ? 'border-teal-400/60 bg-[#f7fffd] shadow-[0_30px_80px_rgba(5,70,75,0.2)]'
        : 'border-slate-200 bg-[#f8faf9] shadow-[0_16px_45px_rgba(15,23,42,0.09)] hover:border-teal-500/35'
    }`}
  >
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      className="relative z-10 flex w-full items-start gap-5 p-6 text-left md:p-8"
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl border font-mono text-sm font-black transition-all duration-500 ${
          isOpen
            ? 'rotate-3 border-teal-500 bg-[#087F8C] text-white shadow-[0_10px_25px_rgba(8,127,140,0.3)]'
            : 'border-slate-200 bg-white text-[#087F8C] group-hover:-rotate-3 group-hover:border-teal-300'
        }`}
      >
        {card.number}
      </span>

      <span className="min-w-0 flex-1">
        <span className="font-mono text-[9px] font-black uppercase tracking-[0.22em] text-[#087F8C]">
          Phase {String(index + 1).padStart(2, '0')}
        </span>
        <span className="mt-1 block text-xl font-black tracking-tight text-slate-950 md:text-2xl">
          {card.title}
        </span>
        <span className="mt-2 block text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
          {processLabels[index]}
        </span>
      </span>

      <span
        aria-hidden="true"
        className={`mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-white text-lg font-light text-slate-700 transition-transform duration-500 ${
          isOpen ? 'rotate-45' : 'rotate-0'
        }`}
      >
        +
      </span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          key="content"
          initial={{ height: 0, opacity: 0, rotateX: -35 }}
          animate={{ height: 'auto', opacity: 1, rotateX: 0 }}
          exit={{ height: 0, opacity: 0, rotateX: -35 }}
          transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 origin-top overflow-hidden"
        >
          <div className="mx-6 border-t border-dashed border-teal-700/20 px-0 pb-7 pt-5 md:mx-8 md:pb-8">
            <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 md:text-base">
              {card.text}
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-px flex-1 bg-gradient-to-r from-teal-500/50 to-transparent" />
              <span className="font-mono text-[9px] font-black uppercase tracking-[0.2em] text-teal-700">
                Insight ready
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>

    <div className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:linear-gradient(115deg,transparent_0%,transparent_44%,rgba(8,127,140,0.16)_45%,transparent_46%,transparent_100%),linear-gradient(25deg,transparent_0%,transparent_68%,rgba(15,23,42,0.12)_69%,transparent_70%,transparent_100%)] [background-size:180px_150px,220px_190px]" />
    <div
      className={`pointer-events-none absolute inset-x-0 top-0 h-1 origin-left bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 transition-transform duration-700 ${
        isOpen ? 'scale-x-100' : 'scale-x-0'
      }`}
    />
  </motion.article>
);

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.25 });
  const [openCard, setOpenCard] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const cycle = window.setInterval(() => {
      setOpenCard((current) =>
        current === null ? 0 : (current + 1) % skillsContent.cards.length
      );
    }, 3200);

    return () => window.clearInterval(cycle);
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="data-section relative w-full overflow-hidden bg-[#eef7f5] px-6 py-24 font-sans md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute left-[-12rem] top-20 h-96 w-96 rounded-full bg-teal-400/20 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-cyan-400/15 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-end gap-8 border-b border-slate-900/10 pb-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div data-aos="fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-800/15 bg-white/70 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-teal-800 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-teal-500 shadow-[0_0_12px_rgba(20,184,166,0.8)]" />
              {skillsContent.badge}
            </div>
            <h2 className="max-w-3xl text-4xl font-black leading-[1.02] tracking-[-0.04em] text-slate-950 md:text-6xl">
              {skillsContent.heading}
            </h2>
          </div>

          <div data-aos="fade-up" data-aos-delay="120" className="lg:pb-1">
            <p className="max-w-xl text-sm font-semibold leading-7 text-slate-600 md:text-base">
              {skillsContent.description}
            </p>
            <p className="mt-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.18em] text-teal-800">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-teal-700 text-sm text-white">
                ↘
              </span>
              Select a phase to unfold it
            </p>
          </div>
        </div>

        <div className="relative mt-12 grid items-start gap-x-16 gap-y-8 md:grid-cols-2">
          <svg
            viewBox="0 0 1000 760"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 z-0 hidden h-full w-full md:block"
            aria-hidden="true"
          >
            <path
              d="M 250 85 C 430 85, 560 175, 750 205 C 900 230, 880 355, 700 385 C 530 415, 430 430, 250 500 C 120 550, 290 665, 750 690"
              fill="none"
              stroke="#94a3b8"
              strokeOpacity="0.28"
              strokeWidth="2"
              strokeDasharray="8 12"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d="M 250 85 C 430 85, 560 175, 750 205 C 900 230, 880 355, 700 385 C 530 415, 430 430, 250 500 C 120 550, 290 665, 750 690"
              fill="none"
              stroke="#087F8C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="8 12"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.8 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </svg>

          {skillsContent.cards.map((card, index) => (
            <motion.div
              key={card.number}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`relative z-10 ${
                index % 2 === 1 ? 'md:mt-24' : ''
              }`}
            >
              <ProcessCard
                card={card}
                index={index}
                isOpen={openCard === index}
                onToggle={() => setOpenCard(openCard === index ? null : index)}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-teal-900/10 bg-white/60 px-5 py-4 shadow-sm backdrop-blur md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-black text-slate-800">{skillsContent.endText}</p>
          <div className="flex items-center gap-2" aria-label="Four-phase analytics process">
            {skillsContent.cards.map((card, index) => (
              <button
                key={card.number}
                type="button"
                onClick={() => setOpenCard(index)}
                aria-label={`Open phase ${index + 1}: ${card.title}`}
                className={`h-2.5 rounded-full transition-all duration-500 ${
                  openCard === index
                    ? 'w-10 bg-[#087F8C]'
                    : 'w-2.5 bg-slate-300 hover:bg-teal-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
