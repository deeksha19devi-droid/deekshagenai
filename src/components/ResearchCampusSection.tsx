import { useState } from 'react';
import { CAMPUS_FACILITIES } from '../data/collegeData';
import { CampusImage } from './CampusImage';

export function ResearchCampusSection() {
  const [selectedFacilityId, setSelectedFacilityId] = useState(CAMPUS_FACILITIES[0].id);

  const activeFacility =
    CAMPUS_FACILITIES.find((f) => f.id === selectedFacilityId) ?? CAMPUS_FACILITIES[0];

  return (
    <section id="campus" className="py-16 lg:py-20 bg-[#140919]/65 border-b border-[#3B1E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#3B1E4A]">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
              02. Campus &amp; Research Infrastructure
            </p>
            <h2 className="mt-2.5 font-editorial text-3xl sm:text-4xl font-semibold text-[#FAF5F8] text-balance">
              Spaces built for laboratory inquiry, quiet reading, and collegiate life.
            </h2>
          </div>
          <p className="text-sm text-[#C8B0C2] max-w-md leading-relaxed">
            Set across a landscaped Kuniyamuthur campus, our academic blocks integrate wet
            biotechnology labs, high-speed computing clusters, residential halls, and athletic
            grounds.
          </p>
        </div>

        {/* Interactive Asymmetric Showcase */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Rail: Interactive Facility Selector */}
          <div className="lg:col-span-5 rounded-xl border border-[#3B1E4A] bg-[#1A0D21]/80 backdrop-blur-md divide-y divide-[#3B1E4A] overflow-hidden">
            {CAMPUS_FACILITIES.map((facility, idx) => {
              const isSelected = facility.id === activeFacility.id;
              return (
                <button
                  key={facility.id}
                  type="button"
                  onClick={() => setSelectedFacilityId(facility.id)}
                  className={`w-full text-left py-5 px-5 transition-colors cursor-pointer ${
                    isSelected ? 'bg-[#261330]/90' : 'hover:bg-[#23122C]/55'
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-mono text-xs text-[#F7B8D6] tabular-nums">
                      0{idx + 1} · {facility.category}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isSelected ? 'text-[#F7B8D6]' : 'text-[#C8B0C2]'
                      }`}
                    >
                      {isSelected ? 'Active' : 'Inspect'}
                    </span>
                  </div>
                  <h3 className="mt-2 font-editorial text-xl font-semibold text-[#FAF5F8]">
                    {facility.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#C8B0C2] leading-relaxed">{facility.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Right Stage: Viewport & Technical Highlights */}
          <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl border border-[#3B1E4A] bg-[#1A0D21]/82 backdrop-blur-md">
            <div className="overflow-hidden rounded-lg border border-[#3B1E4A]">
              <CampusImage
                src={activeFacility.image}
                alt={activeFacility.caption}
                aspectClass="aspect-[4/3]"
                fallbackTitle={activeFacility.title}
              />
            </div>
            <p className="mt-3 text-xs text-[#C8B0C2]">{activeFacility.caption}</p>

            {/* Hairline Metric Strip */}
            <dl className="mt-5 pt-5 border-t border-[#3B1E4A] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {activeFacility.highlights.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs text-[#C8B0C2]">{item.label}</dt>
                  <dd className="mt-1 text-base font-semibold text-[#F7B8D6] font-mono tabular-nums">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
