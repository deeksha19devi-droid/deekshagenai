import { useMemo, useState } from 'react';
import {
  ALUMNI_OUTCOMES,
  CAMPUS_NOTICES,
  CampusNotice,
  PLACEMENT_METRICS,
  RECRUITING_PARTNERS,
} from '../data/collegeData';
import { X } from 'lucide-react';

const NOTICE_CATEGORIES: Array<'All' | CampusNotice['category']> = [
  'All',
  'Admissions',
  'Examinations',
  'Events',
  'Scholarships',
];

export function PlacementsNoticesSection() {
  const [noticeFilter, setNoticeFilter] = useState<'All' | CampusNotice['category']>('All');
  const [selectedNotice, setSelectedNotice] = useState<CampusNotice | null>(null);

  const visibleNotices = useMemo(() => {
    if (noticeFilter === 'All') return CAMPUS_NOTICES;
    return CAMPUS_NOTICES.filter((n) => n.category === noticeFilter);
  }, [noticeFilter]);

  return (
    <>
      {/* Placements & Alumni Outcomes */}
      <section id="placements" className="py-16 lg:py-20 border-b border-[#3B1E4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-12 border-b border-[#3B1E4A]">
            <div className="lg:col-span-5">
              <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
                03. Career &amp; Placement Cell
              </p>
              <h2 className="mt-2.5 font-editorial text-3xl sm:text-4xl font-semibold text-[#FAF5F8] text-balance">
                Consistent graduate transitions into global technology, finance, and biosciences.
              </h2>
              <p className="mt-4 text-sm text-[#C8B0C2] leading-relaxed max-w-prose">
                Our Training and Placement Directorate conducts technical readiness workshops,
                aptitude clinics, and structured corporate interviews starting in the fourth
                semester.
              </p>
            </div>

            {/* 4-Card Quantitative Proof Grid Adjacent to Claim */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {PLACEMENT_METRICS.map((stat) => (
                <div
                  key={stat.label}
                  className="p-6 bg-[#1A0D21]/82 backdrop-blur-md border border-[#3B1E4A] rounded-xl flex flex-col justify-between"
                >
                  <p className="font-editorial text-3xl font-semibold text-[#F7B8D6] tabular-nums">
                    {stat.value}
                  </p>
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-[#FAF5F8]">{stat.label}</p>
                    <p className="mt-1 text-xs text-[#C8B0C2]">{stat.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recruiting Partners Strip */}
          <div className="py-10 border-b border-[#3B1E4A]">
            <p className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
              Selected Campus Recruiting Organisations
            </p>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-6">
              {RECRUITING_PARTNERS.map((partner) => (
                <p key={partner} className="text-sm font-medium text-[#FAF5F8]">
                  {partner}
                </p>
              ))}
            </div>
          </div>

          {/* Attributable Alumni Outcomes */}
          <div className="pt-12">
            <p className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2] mb-6">
              Graduate Voices &amp; Career Outcomes
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ALUMNI_OUTCOMES.map((story) => (
                <blockquote
                  key={story.id}
                  className="flex flex-col justify-between p-6 border border-[#3B1E4A] rounded-xl bg-[#1A0D21]/82 backdrop-blur-md"
                >
                  <p className="text-sm text-[#FAF5F8]/95 leading-relaxed">
                    &ldquo;{story.outcome}&rdquo;
                  </p>
                  <footer className="mt-6 pt-4 border-t border-[#3B1E4A]">
                    <p className="text-sm font-semibold text-[#FAF5F8]">{story.name}</p>
                    <p className="text-xs text-[#F7B8D6] mt-0.5">{story.batch}</p>
                    <p className="text-xs text-[#C8B0C2] mt-1">
                      {story.role} · {story.organization}
                    </p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Circulars & Notices */}
      <section id="notices" className="py-16 lg:py-20 bg-[#140919]/65 border-b border-[#3B1E4A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#3B1E4A]">
            <div>
              <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
                04. Official Circulars &amp; Calendar
              </p>
              <h2 className="mt-2.5 font-editorial text-3xl font-semibold text-[#FAF5F8]">
                Campus announcements &amp; academic notices.
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter campus notices"
              className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#1A0D21]/90 border border-[#3B1E4A] rounded-lg self-start"
            >
              {NOTICE_CATEGORIES.map((category) => {
                const isActive = noticeFilter === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    type="button"
                    onClick={() => setNoticeFilter(category)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-[#F7B8D6] text-[#14071A] font-semibold'
                        : 'text-[#C8B0C2] hover:text-[#FAF5F8]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-[#3B1E4A] bg-[#1A0D21]/82 backdrop-blur-md divide-y divide-[#3B1E4A]">
            {visibleNotices.map((notice) => (
              <div
                key={notice.id}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-[#23122C]/55 transition-colors"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#C8B0C2]">
                    <span className="font-mono tabular-nums">{notice.date}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-medium text-[#F7B8D6]">{notice.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{notice.reference}</span>
                  </div>
                  <h3 className="font-editorial text-xl font-semibold text-[#FAF5F8]">
                    {notice.title}
                  </h3>
                  <p className="text-sm text-[#C8B0C2] leading-relaxed">{notice.summary}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedNotice(notice)}
                  className="self-start md:self-center px-4 py-2 text-xs font-medium text-[#F7B8D6] border border-[#3B1E4A] bg-[#140919]/80 hover:border-[#F7B8D6] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Read Circular
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice Circular Modal */}
      {selectedNotice && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B040E]/75 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="notice-modal-title"
          onClick={() => setSelectedNotice(null)}
        >
          <div
            className="w-full max-w-lg bg-[#160A1D] border border-[#3B1E4A] rounded-xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-[#3B1E4A]">
              <div>
                <p className="text-xs font-mono text-[#F7B8D6] tabular-nums">
                  {selectedNotice.reference} · {selectedNotice.date}
                </p>
                <h3
                  id="notice-modal-title"
                  className="mt-2 font-editorial text-2xl font-semibold text-[#FAF5F8]"
                >
                  {selectedNotice.title}
                </h3>
              </div>
              <button
                type="button"
                aria-label="Close circular"
                onClick={() => setSelectedNotice(null)}
                className="w-9 h-9 inline-flex items-center justify-center rounded-md border border-[#3B1E4A] text-[#FAF5F8] hover:bg-[#261330] cursor-pointer shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="mt-5 space-y-4 text-sm text-[#FAF5F8]/90 leading-relaxed">
              <p>{selectedNotice.summary}</p>
              <p className="text-[#C8B0C2]">
                Issued by the Office of the Principal, Sri Krishna Arts and Science College
                (Autonomous), Kuniyamuthur, Coimbatore – 641008. For clarifications, contact the
                academic helpdesk at{' '}
                <span className="font-medium text-[#FAF5F8]">admissions@skasc.ac.in</span> or{' '}
                <span className="font-mono text-[#F7B8D6] tabular-nums">+91 422 267 8400</span>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#3B1E4A] flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedNotice(null)}
                className="px-4 py-2 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md cursor-pointer"
              >
                Close Circular
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
