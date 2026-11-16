import { useMemo, useState } from 'react';
import { ArrowUpRight, LayoutGrid, List, Search, X } from 'lucide-react';
import {
  ACADEMIC_PROGRAMMES,
  AcademicProgramme,
  AcademicSchool,
  ProgrammeLevel,
} from '../data/collegeData';

interface ProgrammesSectionProps {
  onApplyForProgramme: (programmeTitle: string, level: ProgrammeLevel) => void;
}

const LEVELS: Array<'All' | ProgrammeLevel> = ['All', 'Undergraduate', 'Postgraduate', 'Research'];

const SCHOOLS: Array<'All Schools' | AcademicSchool> = [
  'All Schools',
  'Computing & Information Sciences',
  'Commerce & Management',
  'Biosciences & Physical Sciences',
  'Humanities & Social Sciences',
];

export function ProgrammesSection({ onApplyForProgramme }: ProgrammesSectionProps) {
  const [selectedLevel, setSelectedLevel] = useState<'All' | ProgrammeLevel>('All');
  const [selectedSchool, setSelectedSchool] = useState<'All Schools' | AcademicSchool>('All Schools');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [activeProgramme, setActiveProgramme] = useState<AcademicProgramme | null>(null);

  const filteredProgrammes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return ACADEMIC_PROGRAMMES.filter((prog) => {
      const matchesLevel = selectedLevel === 'All' || prog.level === selectedLevel;
      const matchesSchool = selectedSchool === 'All Schools' || prog.school === selectedSchool;
      const matchesSearch =
        !query ||
        prog.title.toLowerCase().includes(query) ||
        prog.school.toLowerCase().includes(query) ||
        prog.code.toLowerCase().includes(query) ||
        prog.overview.toLowerCase().includes(query);
      return matchesLevel && matchesSchool && matchesSearch;
    });
  }, [selectedLevel, selectedSchool, searchQuery]);

  return (
    <section id="academics" className="py-16 lg:py-20 border-b border-[#3B1E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#3B1E4A]">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
              01. Academic Directory
            </p>
            <h2 className="mt-2.5 font-editorial text-3xl sm:text-4xl font-semibold text-[#FAF5F8] text-balance">
              Autonomous curricula designed with industry and research councils.
            </h2>
          </div>
          <p className="text-sm text-[#C8B0C2] max-w-md leading-relaxed">
            Inspect programme codes, credit durations, eligibility criteria, and core coursework
            across our four academic schools.
          </p>
        </div>

        {/* Interactive Dashboard Filter Toolbar */}
        <div className="py-5 flex flex-col xl:flex-row xl:items-center justify-between gap-4 border-b border-[#3B1E4A]">
          {/* Level Segmented Tabs */}
          <div
            role="tablist"
            aria-label="Filter programmes by degree level"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#1A0D21]/90 border border-[#3B1E4A] rounded-lg self-start"
          >
            {LEVELS.map((level) => {
              const isActive = selectedLevel === level;
              return (
                <button
                  key={level}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setSelectedLevel(level)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#F7B8D6] text-[#14071A] font-semibold'
                      : 'text-[#C8B0C2] hover:text-[#FAF5F8]'
                  }`}
                >
                  {level === 'All' ? 'All Levels' : level}
                </button>
              );
            })}
          </div>

          {/* School Select, Search & View Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <label htmlFor="school-filter" className="sr-only">
              Filter by Academic School
            </label>
            <select
              id="school-filter"
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value as 'All Schools' | AcademicSchool)}
              className="px-3.5 py-2.5 text-sm bg-[#1A0D21]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] focus:border-[#F7B8D6] cursor-pointer"
            >
              {SCHOOLS.map((school) => (
                <option key={school} value={school} className="bg-[#1A0D21] text-[#FAF5F8]">
                  {school}
                </option>
              ))}
            </select>

            <div className="relative">
              <Search
                className="w-4 h-4 text-[#C8B0C2] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search B.Sc., B.Com., AI..."
                aria-label="Search degree programmes"
                className="w-full sm:w-60 pl-10 pr-4 py-2.5 text-sm bg-[#1A0D21]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] placeholder:text-[#C8B0C2]/65 focus:border-[#F7B8D6]"
              />
            </div>

            {/* Grid / Table Dashboard Switch */}
            <div
              role="group"
              aria-label="Directory display layout"
              className="inline-flex items-center gap-1 p-1 bg-[#1A0D21]/90 border border-[#3B1E4A] rounded-lg self-start sm:self-auto"
            >
              <button
                type="button"
                aria-label="Card grid view"
                aria-pressed={viewMode === 'grid'}
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#2B1736] text-[#F7B8D6]'
                    : 'text-[#C8B0C2] hover:text-[#FAF5F8]'
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                type="button"
                aria-label="Compact table view"
                aria-pressed={viewMode === 'table'}
                onClick={() => setViewMode('table')}
                className={`p-2 rounded-md transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-[#2B1736] text-[#F7B8D6]'
                    : 'text-[#C8B0C2] hover:text-[#FAF5F8]'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Result Count & Reset */}
        <div className="py-4 flex items-center justify-between text-xs text-[#C8B0C2]">
          <span className="tabular-nums font-mono">
            Showing {filteredProgrammes.length} of {ACADEMIC_PROGRAMMES.length} featured degree
            programmes
          </span>
          {(selectedLevel !== 'All' || selectedSchool !== 'All Schools' || searchQuery) && (
            <button
              type="button"
              onClick={() => {
                setSelectedLevel('All');
                setSelectedSchool('All Schools');
                setSearchQuery('');
              }}
              className="text-[#F7B8D6] hover:underline underline-offset-4 font-medium cursor-pointer"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Programme Catalog Grid / Table (or Empty State) */}
        {filteredProgrammes.length === 0 ? (
          <div className="py-16 text-center border border-[#3B1E4A] rounded-xl bg-[#1A0D21]/80 backdrop-blur-md">
            <p className="font-editorial text-xl text-[#FAF5F8]">
              No programmes matched your current criteria.
            </p>
            <p className="mt-2 text-sm text-[#C8B0C2]">
              Try clearing your search term or switching back to all academic schools.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedLevel('All');
                setSelectedSchool('All Schools');
                setSearchQuery('');
              }}
              className="mt-5 px-5 py-2.5 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors cursor-pointer"
            >
              View All Programmes
            </button>
          </div>
        ) : viewMode === 'table' ? (
          <div className="overflow-x-auto rounded-xl border border-[#3B1E4A] bg-[#1A0D21]/85 backdrop-blur-md">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#3B1E4A] text-xs font-medium uppercase tracking-wider text-[#C8B0C2]">
                  <th className="py-3.5 px-5 font-mono">Code</th>
                  <th className="py-3.5 px-5">Programme Title</th>
                  <th className="py-3.5 px-5">Academic School</th>
                  <th className="py-3.5 px-5">Level</th>
                  <th className="py-3.5 px-5">Duration</th>
                  <th className="py-3.5 px-5 text-right font-mono">Intake</th>
                  <th className="py-3.5 px-5 text-right">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#3B1E4A]/70 text-sm">
                {filteredProgrammes.map((prog) => (
                  <tr
                    key={prog.id}
                    className="hover:bg-[#261330]/75 transition-colors"
                  >
                    <td className="py-3.5 px-5 font-mono text-xs text-[#F7B8D6] tabular-nums whitespace-nowrap">
                      {prog.code}
                    </td>
                    <td className="py-3.5 px-5 font-medium text-[#FAF5F8]">{prog.title}</td>
                    <td className="py-3.5 px-5 text-[#C8B0C2]">{prog.school}</td>
                    <td className="py-3.5 px-5 text-[#C8B0C2] whitespace-nowrap">{prog.level}</td>
                    <td className="py-3.5 px-5 text-[#C8B0C2] whitespace-nowrap">
                      {prog.duration}
                    </td>
                    <td className="py-3.5 px-5 text-right font-mono text-[#FAF5F8] tabular-nums whitespace-nowrap">
                      {prog.intake}
                    </td>
                    <td className="py-3.5 px-5 text-right whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => setActiveProgramme(prog)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-[#F7B8D6] hover:text-[#FBCBE2] hover:underline underline-offset-4 cursor-pointer"
                      >
                        <span>Syllabus</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProgrammes.map((prog) => (
              <article
                key={prog.id}
                className="group flex flex-col justify-between p-6 bg-[#1A0D21]/82 backdrop-blur-md border border-[#3B1E4A] rounded-xl hover:border-[#F7B8D6]/55 transition-colors"
              >
                <div>
                  {/* Quiet Unboxed Metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#C8B0C2] font-mono tabular-nums">
                    <span className="text-[#F7B8D6]">{prog.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans">{prog.level}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-sans">{prog.duration}</span>
                  </div>

                  <h3 className="mt-3 font-editorial text-xl font-semibold text-[#FAF5F8] leading-snug">
                    {prog.title}
                  </h3>

                  <p className="mt-1.5 text-xs font-medium text-[#E5A4C4]">{prog.school}</p>

                  <p className="mt-3 text-sm text-[#C8B0C2] leading-relaxed line-clamp-3">
                    {prog.overview}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#3B1E4A] flex items-center justify-between gap-4">
                  <span className="text-xs text-[#C8B0C2] font-mono tabular-nums">
                    Intake: {prog.intake} seats
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveProgramme(prog)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#F7B8D6] hover:text-[#FBCBE2] underline-offset-4 hover:underline cursor-pointer whitespace-nowrap shrink-0 py-1"
                  >
                    <span>Syllabus &amp; Eligibility</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      {/* Programme Detail Drawer Modal */}
      {activeProgramme && (
        <div
          className="fixed inset-0 z-50 flex justify-end bg-[#0B040E]/70 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="drawer-programme-title"
          onClick={() => setActiveProgramme(null)}
        >
          <div
            className="w-full max-w-xl bg-[#160A1D] h-full overflow-y-auto border-l border-[#3B1E4A] p-6 sm:p-8 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-start justify-between gap-4 pb-6 border-b border-[#3B1E4A]">
                <div>
                  <p className="text-xs font-mono text-[#F7B8D6] tabular-nums">
                    {activeProgramme.code} · {activeProgramme.level}
                  </p>
                  <h3
                    id="drawer-programme-title"
                    className="mt-2 font-editorial text-2xl sm:text-3xl font-semibold text-[#FAF5F8]"
                  >
                    {activeProgramme.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#E5A4C4] font-medium">
                    School of {activeProgramme.school}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProgramme(null)}
                  aria-label="Close programme details"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-md border border-[#3B1E4A] text-[#FAF5F8] hover:bg-[#261330] transition-colors cursor-pointer shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <dl className="mt-6 divide-y divide-[#3B1E4A] border-y border-[#3B1E4A] text-sm">
                <div className="py-3.5 flex justify-between gap-4">
                  <dt className="text-[#C8B0C2]">Duration</dt>
                  <dd className="font-medium text-[#FAF5F8] text-right">
                    {activeProgramme.duration}
                  </dd>
                </div>
                <div className="py-3.5 flex justify-between gap-4">
                  <dt className="text-[#C8B0C2]">Sanctioned Intake</dt>
                  <dd className="font-medium text-[#F7B8D6] font-mono tabular-nums text-right">
                    {activeProgramme.intake} Seats
                  </dd>
                </div>
                <div className="py-3.5 flex flex-col sm:flex-row sm:justify-between gap-2">
                  <dt className="text-[#C8B0C2] shrink-0">Eligibility</dt>
                  <dd className="font-medium text-[#FAF5F8] sm:text-right max-w-sm">
                    {activeProgramme.eligibility}
                  </dd>
                </div>
              </dl>

              <div className="mt-6">
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
                  Academic Overview
                </h4>
                <p className="mt-2.5 text-sm text-[#FAF5F8]/90 leading-relaxed">
                  {activeProgramme.overview}
                </p>
              </div>

              <div className="mt-7">
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
                  Core Curriculum Modules
                </h4>
                <ul className="mt-3 space-y-2 border-t border-[#3B1E4A] pt-3">
                  {activeProgramme.coreModules.map((mod, idx) => (
                    <li
                      key={mod}
                      className="flex items-baseline gap-3 text-sm text-[#FAF5F8] py-1"
                    >
                      <span className="font-mono text-xs text-[#F7B8D6] tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{mod}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <h4 className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
                  Graduate Career Pathways
                </h4>
                <p className="mt-2.5 text-sm text-[#FAF5F8]">
                  {activeProgramme.careerPathways.join('  ·  ')}
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#3B1E4A] flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setActiveProgramme(null)}
                className="px-4 py-2.5 text-sm font-medium text-[#FAF5F8] border border-[#3B1E4A] hover:bg-[#261330] rounded-md transition-colors cursor-pointer"
              >
                Back to Directory
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeProgramme.title;
                  const level = activeProgramme.level;
                  setActiveProgramme(null);
                  onApplyForProgramme(title, level);
                }}
                className="px-5 py-2.5 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors cursor-pointer"
              >
                Apply for this Programme
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
