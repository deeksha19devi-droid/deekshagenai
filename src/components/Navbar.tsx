import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onApplyClick: () => void;
}

const NAV_LINKS = [
  { label: 'Academics', href: '#academics' },
  { label: 'Campus', href: '#campus' },
  { label: 'Placements', href: '#placements' },
  { label: 'Notices', href: '#notices' },
  { label: 'Admissions', href: '#admissions' },
];

export function Navbar({ onApplyClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#110715]/85 backdrop-blur-md border-b border-[#3B1E4A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#top"
          className="font-editorial text-lg sm:text-xl font-semibold tracking-tight text-[#FAF5F8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4"
        >
          Sri Krishna Arts &amp; Science
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#C8B0C2]"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#FAF5F8] hover:underline underline-offset-4 decoration-[#F7B8D6] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onApplyClick}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Apply Now
          </button>

          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#FAF5F8] hover:bg-[#23122C] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#3B1E4A] bg-[#160A1D]/95 backdrop-blur-md px-4 py-4 space-y-2">
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-[#FAF5F8] hover:bg-[#23122C] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#3B1E4A]">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onApplyClick();
              }}
              className="w-full py-2.5 px-4 text-sm font-semibold text-[#14071A] bg-[#F7B8D6] hover:bg-[#FBCBE2] rounded-md transition-colors cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
