export function Footer() {
  return (
    <footer className="bg-[#110715]/90 backdrop-blur-md py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3B1E4A]">
          <div className="md:col-span-5 space-y-3">
            <p className="font-editorial text-xl font-semibold text-[#FAF5F8]">
              Sri Krishna Arts and Science College
            </p>
            <p className="text-xs uppercase tracking-widest text-[#F7B8D6]">
              Autonomous · Affiliated to Bharathiar University · NAAC Accredited
            </p>
            <p className="text-sm text-[#C8B0C2] leading-relaxed max-w-sm">
              Managed by the VLB Trust. Sugunapuram, Kuniyamuthur Post, Coimbatore – 641008, Tamil
              Nadu, India.
            </p>
          </div>

          <div className="md:col-span-3 space-y-2.5 text-sm">
            <p className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
              Navigation
            </p>
            <ul className="space-y-2 text-[#FAF5F8]">
              <li>
                <a
                  href="#academics"
                  className="hover:text-[#F7B8D6] hover:underline underline-offset-4"
                >
                  Academic Directory
                </a>
              </li>
              <li>
                <a
                  href="#campus"
                  className="hover:text-[#F7B8D6] hover:underline underline-offset-4"
                >
                  Research &amp; Campus
                </a>
              </li>
              <li>
                <a
                  href="#placements"
                  className="hover:text-[#F7B8D6] hover:underline underline-offset-4"
                >
                  Placements &amp; Alumni
                </a>
              </li>
              <li>
                <a
                  href="#notices"
                  className="hover:text-[#F7B8D6] hover:underline underline-offset-4"
                >
                  Official Circulars
                </a>
              </li>
              <li>
                <a
                  href="#admissions"
                  className="hover:text-[#F7B8D6] hover:underline underline-offset-4"
                >
                  Admissions 2026–27
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-2.5 text-sm">
            <p className="text-xs font-medium uppercase tracking-widest text-[#C8B0C2]">
              Institutional Contacts
            </p>
            <dl className="space-y-2 text-[#C8B0C2]">
              <div className="flex justify-between gap-4">
                <dt>Admissions Office</dt>
                <dd className="font-mono text-[#F7B8D6] tabular-nums">+91 422 267 8400</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Controller of Exams</dt>
                <dd className="font-mono text-[#F7B8D6] tabular-nums">+91 422 267 8404</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>General Enquiries</dt>
                <dd className="text-[#FAF5F8]">info@skasc.ac.in</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt>Admissions Email</dt>
                <dd className="text-[#FAF5F8]">admissions@skasc.ac.in</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#C8B0C2]">
          <p>
            © {new Date().getFullYear()} Sri Krishna Arts and Science College, Coimbatore. All
            rights reserved.
          </p>
          <p>Kuniyamuthur Campus · Tamil Nadu, India</p>
        </div>
      </div>
    </footer>
  );
}
