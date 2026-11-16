import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgrammesSection } from './components/ProgrammesSection';
import { ResearchCampusSection } from './components/ResearchCampusSection';
import { PlacementsNoticesSection } from './components/PlacementsNoticesSection';
import { AdmissionsSection } from './components/AdmissionsSection';
import { Footer } from './components/Footer';
import { HERO_MEDIA, ProgrammeLevel } from './data/collegeData';

export default function App() {
  const [selectedProgramme, setSelectedProgramme] = useState<string | undefined>(undefined);
  const [selectedLevel, setSelectedLevel] = useState<ProgrammeLevel | undefined>(undefined);
  const [backdropFailed, setBackdropFailed] = useState(false);

  const scrollToAdmissions = () => {
    const el = document.getElementById('admissions');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleApplyForProgramme = (programmeTitle: string, level: ProgrammeLevel) => {
    setSelectedProgramme(programmeTitle);
    setSelectedLevel(level);
    scrollToAdmissions();
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-[#110715] text-[#FAF5F8]">
      {/* Fixed Futuristic Dark Plum & Light Pink Ambient Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#110715]"
        aria-hidden="true"
      >
        {!backdropFailed && (
          <img
            src={HERO_MEDIA.futuristicPlumBackdrop}
            alt=""
            referrerPolicy="no-referrer"
            onError={() => setBackdropFailed(true)}
            className="w-full h-full object-cover object-center opacity-85"
          />
        )}
        {/* Luminous light-pink atmospheric aura + subtle geometric dashboard grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(247,184,214,0.16),transparent_46%),radial-gradient(circle_at_15%_75%,rgba(192,72,136,0.14),transparent_50%)]" />
        <div className="absolute inset-0 bg-futuristic-grid" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#110715]/45 via-[#110715]/70 to-[#110715]/92" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar onApplyClick={scrollToAdmissions} />
        <main className="flex-1">
          <HeroSection />
          <ProgrammesSection onApplyForProgramme={handleApplyForProgramme} />
          <ResearchCampusSection />
          <PlacementsNoticesSection />
          <AdmissionsSection
            preselectedProgramme={selectedProgramme}
            preselectedLevel={selectedLevel}
          />
        </main>
        <Footer />
      </div>
    </div>
  );
}
