import { ArrowRight } from 'lucide-react';
import { HERO_MEDIA, INSTITUTION_METRICS } from '../data/collegeData';
import { CampusImage } from './CampusImage';

export function HeroSection() {
  return (
    <section id="top" className="border-b border-[#3B1E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-14 lg:pt-16 lg:pb-20">
        {/* Editorial Dashboard Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Proposition Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-[#1A0D21]/82 backdrop-blur-md border border-[#3B1E4A]">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
                Kuniyamuthur, Coimbatore · Autonomous · Bharathiar University
              </p>

              <h1
                className="mt-5 font-editorial font-semibold text-[#FAF5F8] tracking-tight leading-[1.1] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.25rem)' }}
              >
                Scholarship grounded in inquiry, built for the contemporary world.
              </h1>

              <p className="mt-5 text-sm sm:text-base text-[#C8B0C2] leading-relaxed max-w-xl">
                Established in 1997 by the VLB Trust, Sri Krishna Arts and Science College unites
                autonomous academic rigour across computing, commerce, biosciences, and humanities
                with industry-embedded research in Coimbatore.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3B1E4A] flex flex-wrap items-center gap-6">
              <a
                href="#academics"
                className="inline-flex items-center gap-2.5 px-6 py-3 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors whitespace-nowrap shrink-0"
              >
                <span>Explore Programmes</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#admissions"
                className="text-sm font-medium text-[#FAF5F8] hover:text-[#F7B8D6] underline underline-offset-4 decoration-[#F7B8D6]/60 transition-colors whitespace-nowrap shrink-0 py-2"
              >
                Admissions 2026–27
              </a>
            </div>
          </div>

          {/* Right Column: Framed Campus Visual */}
          <div className="lg:col-span-7 flex flex-col p-2.5 rounded-xl bg-[#1A0D21]/78 backdrop-blur-md border border-[#3B1E4A]">
            <div className="flex-1 overflow-hidden rounded-lg border border-[#3B1E4A]/70">
              <CampusImage
                src={HERO_MEDIA.courtyard}
                alt="Sri Krishna Arts and Science College sandstone academic quadrangle and palm-lined courtyard at golden hour"
                aspectClass="aspect-[16/9] lg:h-full"
                fallbackTitle="Sri Krishna Arts and Science College Courtyard"
              />
            </div>
            <p className="mt-3 px-2 pb-1 text-xs text-[#C8B0C2]">{HERO_MEDIA.caption}</p>
          </div>
        </div>

        {/* Full-Width 4-Column Dashboard KPI Strip */}
        <div className="mt-8 lg:mt-10 rounded-xl bg-[#1A0D21]/85 backdrop-blur-md border border-[#3B1E4A] grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[#3B1E4A]">
          {INSTITUTION_METRICS.map((item) => (
            <div key={item.label} className="p-6 space-y-1.5">
              <p className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F7B8D6] tabular-nums">
                {item.value}
              </p>
              <p className="text-sm font-medium text-[#FAF5F8]">{item.label}</p>
              <p className="text-xs text-[#C8B0C2]">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
