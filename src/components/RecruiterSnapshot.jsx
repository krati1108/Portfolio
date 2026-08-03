const impactMetrics = [
  { value: '3+', label: 'Years in analytics', change: 'Cross-industry', points: '2,34 18,30 34,31 50,20 66,23 82,12 98,8' },
  { value: '45 hrs', label: 'Weekly reporting time saved', change: 'Automated', points: '2,36 18,35 34,28 50,30 66,18 82,16 98,6' },
  { value: '20+', label: 'Stakeholders supported', change: 'Operational reach', points: '2,34 18,28 34,30 50,24 66,16 82,19 98,9' },
  { value: '5+', label: 'Production dashboards managed', change: 'Live reporting', points: '2,36 18,32 34,25 50,27 66,18 82,10 98,8' },
];

const focusAreas = [
  'Logistics analytics',
  'Dashboard automation',
  'KPI governance',
  'SQL & Python ETL',
];

const workflow = [
  { number: '01', label: 'Integrate', detail: 'Cross-functional data' },
  { number: '02', label: 'Analyze', detail: 'Patterns, KPIs & drivers' },
  { number: '03', label: 'Activate', detail: 'Decision-ready insights' },
];

const RecruiterSnapshot = () => (
  <section
    aria-labelledby="recruiter-snapshot-title"
    className="relative z-30 -mt-8 overflow-hidden bg-[#071114] px-6 pb-28 md:-mt-12 md:px-12"
  >
    <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-teal-400/10 blur-[110px]" />
    <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#087F8C]/20 blur-[130px]" />

    <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] border border-teal-200/20 bg-gradient-to-br from-[#0c2d31]/95 via-[#09191c]/95 to-[#050c0e]/95 shadow-[0_35px_100px_rgba(0,0,0,0.48)] backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-200/80 to-transparent" />
      <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border border-teal-300/10" />
      <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full border border-teal-300/10" />

      <div className="relative flex items-center justify-between border-b border-white/10 bg-black/20 px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-teal-300/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400/50" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/45">
            Portfolio intelligence / overview
          </span>
        </div>
        <div className="flex items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-wider text-teal-200">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-teal-300" />
          Results
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
        <div data-aos="fade-right" className="relative border-b border-white/10 p-7 md:p-11 lg:border-b-0 lg:border-r">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-300/10 px-3 py-1.5 text-[9px] font-black uppercase tracking-[0.24em] text-teal-200">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-300 shadow-[0_0_10px_rgba(94,234,212,0.9)]" />
            Impact at a glance
          </p>
          <h2
            id="recruiter-snapshot-title"
            className="max-w-md text-3xl font-black leading-[1.06] tracking-[-0.035em] text-white md:text-5xl"
          >
            Business questions turned into{' '}
            <span className="bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
              measurable results.
            </span>
          </h2>
          <p className="mt-4 max-w-lg text-sm font-medium leading-relaxed text-white/60 md:text-base">
            Analytics experience across logistics, higher education, hospitality,
            and applied machine learning.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {focusAreas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-teal-50 transition-all hover:-translate-y-0.5 hover:border-teal-300/40 hover:bg-teal-300/10"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <div className="grid sm:grid-cols-3">
              {workflow.map((step, index) => (
                <div
                  key={step.label}
                  className={`relative p-4 ${
                    index < workflow.length - 1
                      ? 'border-b border-white/10 sm:border-b-0 sm:border-r'
                      : ''
                  }`}
                >
                  <span className="text-[9px] font-black tracking-[0.2em] text-teal-300/70">
                    {step.number}
                  </span>
                  <p className="mt-1 text-sm font-black text-white">{step.label}</p>
                  <p className="mt-0.5 text-[10px] font-semibold leading-relaxed text-white/45">
                    {step.detail}
                  </p>
                  {index < workflow.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute -right-2 top-1/2 z-10 hidden h-4 w-4 -translate-y-1/2 rotate-45 border-r border-t border-teal-300/30 bg-[#0a2023] sm:block"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              data-aos="zoom-in"
              data-aos-delay={100 + index * 100}
              className={`group relative overflow-hidden p-6 transition-all hover:bg-teal-300/[0.07] md:p-9 ${
                index < 2 ? 'border-b border-white/10' : ''
              } ${index % 2 === 0 ? 'border-r border-white/10' : ''}`}
            >
              <span className="absolute right-4 top-2 text-6xl font-black text-white/[0.025] md:text-8xl" aria-hidden="true">
                0{index + 1}
              </span>
              <div className="mb-5 h-1 w-8 rounded-full bg-gradient-to-r from-teal-300 to-cyan-500 transition-all duration-500 group-hover:w-16" />
              <p className="relative text-3xl font-black tracking-tight text-teal-300 transition-all duration-500 group-hover:-translate-y-1 group-hover:text-teal-200 md:text-5xl">
                {metric.value}
              </p>
              <p className="relative mt-2 max-w-[12rem] text-xs font-bold leading-relaxed text-white/60 md:text-sm">
                {metric.label}
              </p>
              <div className="relative mt-5 flex items-end justify-between gap-4">
                <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-teal-200/60">
                  {metric.change}
                </span>
                <svg
                  viewBox="0 0 100 42"
                  className="h-9 w-24 overflow-visible"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id={`spark-${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#5eead4" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#5eead4" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <polyline
                    points={`${metric.points} 98,42 2,42`}
                    fill={`url(#spark-${index})`}
                    stroke="none"
                  />
                  <polyline
                    points={metric.points}
                    fill="none"
                    stroke="#5eead4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="98" cy={metric.points.split(' ').at(-1).split(',')[1]} r="2.5" fill="#99f6e4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default RecruiterSnapshot;
