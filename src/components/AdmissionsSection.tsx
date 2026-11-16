import { FormEvent, useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { ACADEMIC_PROGRAMMES, ProgrammeLevel } from '../data/collegeData';

interface AdmissionsSectionProps {
  preselectedProgramme?: string;
  preselectedLevel?: ProgrammeLevel;
}

interface FormState {
  fullName: string;
  email: string;
  phone: string;
  level: ProgrammeLevel;
  programme: string;
  percentage: string;
  hostelRequired: 'Day Scholar' | 'Campus Hostel';
}

export function AdmissionsSection({
  preselectedProgramme,
  preselectedLevel,
}: AdmissionsSectionProps) {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    email: '',
    phone: '',
    level: preselectedLevel ?? 'Undergraduate',
    programme: preselectedProgramme ?? 'B.Sc. Computer Science',
    percentage: '',
    hostelRequired: 'Day Scholar',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgramme || preselectedLevel) {
      setForm((prev) => ({
        ...prev,
        level: preselectedLevel ?? prev.level,
        programme: preselectedProgramme ?? prev.programme,
      }));
      setSubmittedRef(null);
    }
  }, [preselectedProgramme, preselectedLevel]);

  const availableProgrammes = ACADEMIC_PROGRAMMES.filter((p) => p.level === form.level);

  const numericScore = Number.parseFloat(form.percentage);
  const scholarshipNote =
    !Number.isNaN(numericScore) && numericScore >= 90 && numericScore <= 100
      ? 'Eligible for VLB Trust Tier-I Merit Tuition Concession assessment (90%+).'
      : !Number.isNaN(numericScore) && numericScore >= 80 && numericScore < 90
      ? 'Eligible for Tier-II Academic Merit Fee Consideration (80%–89.9%).'
      : null;

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter the applicant’s full legal name.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, ''))) {
      nextErrors.phone = 'Enter a valid 10-digit Indian mobile number.';
    }
    if (form.percentage.trim()) {
      const val = Number.parseFloat(form.percentage);
      if (Number.isNaN(val) || val < 35 || val > 100) {
        nextErrors.percentage = 'Aggregate score must be between 35 and 100.';
      }
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const referenceCode = `SKASC-2026-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmittedRef(referenceCode);
  };

  return (
    <section id="admissions" className="py-16 lg:py-20 border-b border-[#3B1E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Admissions Overview & Timeline */}
          <div className="lg:col-span-5">
            <p className="text-xs font-medium tracking-widest uppercase text-[#F7B8D6]">
              05. Admissions 2026–27
            </p>
            <h2 className="mt-2.5 font-editorial text-3xl sm:text-4xl font-semibold text-[#FAF5F8] text-balance">
              Begin your application to Sri Krishna Arts and Science College.
            </h2>
            <p className="mt-4 text-sm text-[#C8B0C2] leading-relaxed">
              Admissions follow Bharathiar University and Government of Tamil Nadu merit norms.
              Submit an inquiry below to receive the official prospectus, counselling appointment,
              and merit scholarship review.
            </p>

            <dl className="mt-8 divide-y divide-[#3B1E4A] border-y border-[#3B1E4A] text-sm">
              <div className="py-4 flex justify-between gap-4">
                <dt className="text-[#C8B0C2]">Application Window</dt>
                <dd className="font-medium text-[#FAF5F8] font-mono tabular-nums">
                  Nov 2026 – May 2027
                </dd>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <dt className="text-[#C8B0C2]">Campus Counselling Hours</dt>
                <dd className="font-medium text-[#FAF5F8] font-mono tabular-nums">
                  09:00 – 16:30 IST
                </dd>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <dt className="text-[#C8B0C2]">Admissions Desk</dt>
                <dd className="font-mono text-[#F7B8D6] tabular-nums">+91 422 267 8400</dd>
              </div>
              <div className="py-4 flex justify-between gap-4">
                <dt className="text-[#C8B0C2]">Campus Address</dt>
                <dd className="font-medium text-[#FAF5F8] text-right">
                  Sugunapuram, Kuniyamuthur, Coimbatore 641008
                </dd>
              </div>
            </dl>
          </div>

          {/* Right Column: Validated Admissions Application Inquiry Form */}
          <div className="lg:col-span-7 bg-[#1A0D21]/85 backdrop-blur-md border border-[#3B1E4A] rounded-xl p-6 sm:p-8">
            {submittedRef ? (
              <div className="py-8 space-y-5">
                <div className="flex items-center gap-3 text-[#F7B8D6]">
                  <CheckCircle2 className="w-6 h-6 shrink-0" />
                  <h3 className="font-editorial text-2xl font-semibold text-[#FAF5F8]">
                    Application Inquiry Recorded
                  </h3>
                </div>
                <p className="text-sm text-[#C8B0C2] leading-relaxed">
                  Thank you, <span className="font-semibold text-[#FAF5F8]">{form.fullName}</span>.
                  Your interest in{' '}
                  <span className="font-semibold text-[#FAF5F8]">{form.programme}</span> (
                  {form.level}) has been logged with the Admissions Office.
                </p>
                <div className="p-4 bg-[#140919] border border-[#3B1E4A] rounded-lg text-sm space-y-1">
                  <p className="text-xs text-[#C8B0C2] uppercase tracking-wider">
                    Provisional Inquiry Reference
                  </p>
                  <p className="font-mono text-base font-medium text-[#F7B8D6] tabular-nums">
                    {submittedRef}
                  </p>
                </div>
                {scholarshipNote && (
                  <p className="text-xs font-medium text-[#F7B8D6]">{scholarshipNote}</p>
                )}
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmittedRef(null);
                      setForm({
                        fullName: '',
                        email: '',
                        phone: '',
                        level: 'Undergraduate',
                        programme: 'B.Sc. Computer Science',
                        percentage: '',
                        hostelRequired: 'Day Scholar',
                      });
                    }}
                    className="px-5 py-2.5 text-sm font-medium text-[#FAF5F8] border border-[#3B1E4A] hover:border-[#F7B8D6] rounded-md transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="pb-4 border-b border-[#3B1E4A]">
                  <h3 className="font-editorial text-2xl font-semibold text-[#FAF5F8]">
                    Admissions &amp; Prospectus Request
                  </h3>
                  <p className="mt-1 text-xs text-[#C8B0C2]">
                    All fields marked * are required for academic counselling verification.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-name"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      Applicant Full Name *
                    </label>
                    <input
                      id="applicant-name"
                      type="text"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="e.g. Aaravind Sundaram"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] placeholder:text-[#C8B0C2]/55 focus:border-[#F7B8D6]"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-[#F7B8D6]">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-phone"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      Mobile Number (10 Digits) *
                    </label>
                    <input
                      id="applicant-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] placeholder:text-[#C8B0C2]/55 font-mono tabular-nums focus:border-[#F7B8D6]"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-[#F7B8D6]">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-email"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      Email Address *
                    </label>
                    <input
                      id="applicant-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="student@example.com"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] placeholder:text-[#C8B0C2]/55 focus:border-[#F7B8D6]"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-[#F7B8D6]">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-percentage"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      +2 / UG Aggregate % (Optional)
                    </label>
                    <input
                      id="applicant-percentage"
                      type="number"
                      min="35"
                      max="100"
                      step="0.1"
                      value={form.percentage}
                      onChange={(e) => setForm({ ...form, percentage: e.target.value })}
                      placeholder="e.g. 91.5"
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] placeholder:text-[#C8B0C2]/55 font-mono tabular-nums focus:border-[#F7B8D6]"
                    />
                    {errors.percentage && (
                      <p className="mt-1 text-xs text-[#F7B8D6]">{errors.percentage}</p>
                    )}
                    {scholarshipNote && !errors.percentage && (
                      <p className="mt-1 text-xs font-medium text-[#F7B8D6]">{scholarshipNote}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="applicant-level"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      Degree Level
                    </label>
                    <select
                      id="applicant-level"
                      value={form.level}
                      onChange={(e) => {
                        const nextLevel = e.target.value as ProgrammeLevel;
                        const firstMatch = ACADEMIC_PROGRAMMES.find((p) => p.level === nextLevel);
                        setForm({
                          ...form,
                          level: nextLevel,
                          programme: firstMatch?.title ?? '',
                        });
                      }}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] focus:border-[#F7B8D6] cursor-pointer"
                    >
                      <option value="Undergraduate" className="bg-[#1A0D21]">
                        Undergraduate (UG)
                      </option>
                      <option value="Postgraduate" className="bg-[#1A0D21]">
                        Postgraduate (PG)
                      </option>
                      <option value="Research" className="bg-[#1A0D21]">
                        Doctoral Research (Ph.D.)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="applicant-programme"
                      className="block text-xs font-medium text-[#FAF5F8] mb-1.5"
                    >
                      Preferred Programme
                    </label>
                    <select
                      id="applicant-programme"
                      value={form.programme}
                      onChange={(e) => setForm({ ...form, programme: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-[#140919]/90 border border-[#3B1E4A] rounded-lg text-[#FAF5F8] focus:border-[#F7B8D6] cursor-pointer"
                    >
                      {availableProgrammes.map((p) => (
                        <option key={p.id} value={p.title} className="bg-[#1A0D21]">
                          {p.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <span className="block text-xs font-medium text-[#FAF5F8] mb-2">
                    Accommodation Preference
                  </span>
                  <div className="inline-flex items-center gap-1 p-1 bg-[#140919] border border-[#3B1E4A] rounded-lg">
                    {(['Day Scholar', 'Campus Hostel'] as const).map((option) => {
                      const isActive = form.hostelRequired === option;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setForm({ ...form, hostelRequired: option })}
                          className={`px-4 py-1.5 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                            isActive
                              ? 'bg-[#F7B8D6] text-[#14071A] font-semibold'
                              : 'text-[#C8B0C2] hover:text-[#FAF5F8]'
                          }`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#3B1E4A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#C8B0C2]">
                    Admissions team responds within one working day.
                  </p>
                  <button
                    type="submit"
                    className="px-6 py-3 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    Request Prospectus &amp; Apply
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
