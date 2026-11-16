export type ProgrammeLevel = 'Undergraduate' | 'Postgraduate' | 'Research';

export type AcademicSchool =
  | 'Computing & Information Sciences'
  | 'Commerce & Management'
  | 'Biosciences & Physical Sciences'
  | 'Humanities & Social Sciences';

export interface AcademicProgramme {
  id: string;
  code: string;
  title: string;
  level: ProgrammeLevel;
  school: AcademicSchool;
  duration: string;
  intake: number;
  eligibility: string;
  overview: string;
  coreModules: string[];
  careerPathways: string[];
}

export interface CampusFacility {
  id: string;
  figureNumber: string;
  title: string;
  category: string;
  image: string;
  caption: string;
  summary: string;
  highlights: { label: string; value: string }[];
}

export interface PlacementStat {
  label: string;
  value: string;
  context: string;
}

export interface AlumniStory {
  id: string;
  name: string;
  batch: string;
  role: string;
  organization: string;
  outcome: string;
}

export interface CampusNotice {
  id: string;
  category: 'Admissions' | 'Examinations' | 'Events' | 'Scholarships';
  date: string;
  title: string;
  summary: string;
  reference: string;
}

export const HERO_MEDIA = {
  courtyard: '/src/assets/images/skasc_courtyard_hero_1794810242961.jpg',
  lakeBackdrop: '/src/assets/images/skasc_lake_backdrop_1794811014451.jpg',
  futuristicPlumBackdrop: '/src/assets/images/plum_futuristic_horizon_1794811955936.jpg',
  caption:
    'Fig. 01 — The Sugunapuram Academic Quadrangle at Kuniyamuthur, Coimbatore, housing the Schools of Computing, Commerce, and Life Sciences.',
};

export const INSTITUTION_METRICS = [
  { value: '1997', label: 'Year Established', detail: 'VLB Trust Heritage' },
  { value: '38+', label: 'Degree Programmes', detail: 'UG, PG & Doctoral' },
  { value: 'NAAC A', label: 'Accredited Status', detail: 'Autonomous Since 2011' },
  { value: '94.6%', label: 'Placement Outcome', detail: '2025–26 Graduating Class' },
];

export const ACADEMIC_PROGRAMMES: AcademicProgramme[] = [
  {
    id: 'bsc-cs',
    code: 'SK-CS101',
    title: 'B.Sc. Computer Science',
    level: 'Undergraduate',
    school: 'Computing & Information Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    eligibility: 'Pass in Higher Secondary (+2) with Mathematics or Computer Science.',
    overview:
      'Foundational training in algorithms, operating systems, cloud architecture, and full-stack software engineering backed by industry-aligned laboratory practicums.',
    coreModules: [
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Distributed Cloud Architecture',
      'Software Testing & DevOps',
    ],
    careerPathways: ['Software Engineer', 'Systems Analyst', 'Cloud Infrastructure Associate'],
  },
  {
    id: 'bsc-aiml',
    code: 'SK-AI104',
    title: 'B.Sc. Artificial Intelligence & Machine Learning',
    level: 'Undergraduate',
    school: 'Computing & Information Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    eligibility: 'Pass in Higher Secondary (+2) with Mathematics and Physics / Computer Science.',
    overview:
      'Rigorous undergraduate curriculum combining statistical learning theory, neural architectures, computer vision, and ethical AI deployment.',
    coreModules: [
      'Linear Algebra & Probability',
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Applied Computer Vision',
    ],
    careerPathways: ['Machine Learning Engineer', 'Applied AI Developer', 'Data Engineering Analyst'],
  },
  {
    id: 'bca',
    code: 'SK-CA108',
    title: 'Bachelor of Computer Applications (BCA)',
    level: 'Undergraduate',
    school: 'Computing & Information Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    eligibility: 'Pass in Higher Secondary (+2) in any stream with Mathematics / Business Mathematics.',
    overview:
      'Application-centric computing degree emphasizing enterprise software development, mobile ecosystems, UI engineering, and cybersecurity.',
    coreModules: [
      'Enterprise Java & Spring',
      'Web Application Frameworks',
      'Information Security Essentials',
      'Mobile Application Studio',
    ],
    careerPathways: ['Full-Stack Developer', 'Application Consultant', 'QA Automation Engineer'],
  },
  {
    id: 'bcom-pa',
    code: 'SK-CM201',
    title: 'B.Com. Professional Accounting',
    level: 'Undergraduate',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    eligibility: 'Pass in Higher Secondary (+2) with Commerce and Accountancy.',
    overview:
      'Structured alongside national chartered and cost accounting frameworks, integrating corporate taxation, auditing standards, and financial reporting.',
    coreModules: [
      'Corporate Financial Accounting',
      'Direct & Indirect Taxation',
      'Cost & Management Auditing',
      'Indian Financial Markets',
    ],
    careerPathways: ['Audit Associate', 'Tax Advisory Analyst', 'CA / CMA Pathway Scholar'],
  },
  {
    id: 'bcom-ca',
    code: 'SK-CM204',
    title: 'B.Com. Computer Applications',
    level: 'Undergraduate',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 180,
    eligibility: 'Pass in Higher Secondary (+2) with Commerce, Accountancy, or Mathematics.',
    overview:
      'Blends commercial accounting principles with enterprise ERP workflows, financial analytics, and relational database automation.',
    coreModules: [
      'Financial Accounting & Tally ERP',
      'Business Intelligence & SQL',
      'E-Commerce & Digital Banking',
      'Corporate Law & Governance',
    ],
    careerPathways: ['Financial Operations Analyst', 'ERP Functional Consultant', 'Banking Officer'],
  },
  {
    id: 'bba',
    code: 'SK-MG210',
    title: 'Bachelor of Business Administration (BBA)',
    level: 'Undergraduate',
    school: 'Commerce & Management',
    duration: '3 Years (6 Semesters)',
    intake: 120,
    eligibility: 'Pass in Higher Secondary (+2) in any recognized discipline.',
    overview:
      'Case-study driven management education building competence in organizational leadership, supply chain strategy, consumer research, and entrepreneurship.',
    coreModules: [
      'Organizational Behaviour',
      'Operations & Supply Chain Management',
      'Digital Marketing Analytics',
      'Strategic Entrepreneurship',
    ],
    careerPathways: ['Management Trainee', 'Business Development Lead', 'Operations Coordinator'],
  },
  {
    id: 'bsc-biotech',
    code: 'SK-BS301',
    title: 'B.Sc. Biotechnology',
    level: 'Undergraduate',
    school: 'Biosciences & Physical Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Pass in Higher Secondary (+2) with Biology, Chemistry, and Physics.',
    overview:
      'Laboratory-intensive training across molecular biology, recombinant DNA techniques, bioprocess engineering, and bioinformatics.',
    coreModules: [
      'Molecular Genetics',
      'Recombinant DNA Technology',
      'Bioprocess & Fermentation',
      'Computational Bioinformatics',
    ],
    careerPathways: ['Bioprocess Research Associate', 'Clinical QC Specialist', 'Genomics Analyst'],
  },
  {
    id: 'bsc-cdf',
    code: 'SK-BS309',
    title: 'B.Sc. Costume Design & Fashion',
    level: 'Undergraduate',
    school: 'Biosciences & Physical Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Pass in Higher Secondary (+2) in any recognized academic stream.',
    overview:
      'Anchored in Coimbatore’s textile heritage, uniting garment construction, sustainable dyeing, CAD pattern drafting, and apparel merchandising.',
    coreModules: [
      'Textile Science & Fibre Chemistry',
      'Pattern Drafting & Draping',
      'CAD Apparel Illustration',
      'Apparel Export Merchandising',
    ],
    careerPathways: ['Apparel Merchandiser', 'Textile Quality Specialist', 'Fashion Technical Designer'],
  },
  {
    id: 'ba-english',
    code: 'SK-HM401',
    title: 'B.A. English Literature',
    level: 'Undergraduate',
    school: 'Humanities & Social Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Pass in Higher Secondary (+2) with strong proficiency in English.',
    overview:
      'Critical study of classical, postcolonial, and contemporary literatures alongside linguistics, technical editorial craft, and cultural theory.',
    coreModules: [
      'Indian Writing in English',
      'Literary Criticism & Theory',
      'Phonetics & Applied Linguistics',
      'Editorial Publishing & Journalism',
    ],
    careerPathways: ['Editorial Writer', 'Academic Researcher', 'Corporate Communications Specialist'],
  },
  {
    id: 'bsc-psych',
    code: 'SK-HM405',
    title: 'B.Sc. Psychology',
    level: 'Undergraduate',
    school: 'Humanities & Social Sciences',
    duration: '3 Years (6 Semesters)',
    intake: 60,
    eligibility: 'Pass in Higher Secondary (+2) in Science or Humanities.',
    overview:
      'Empirical foundation in cognitive psychology, psychometric assessment, developmental counselling, and organizational behaviour.',
    coreModules: [
      'Cognitive & Experimental Psychology',
      'Psychometric Testing Practicum',
      'Counselling & Mental Health',
      'Social & Organizational Dynamics',
    ],
    careerPathways: ['HR & Talent Specialist', 'Counselling Trainee', 'Behavioural Research Assistant'],
  },
  {
    id: 'msc-cs',
    code: 'SK-PG501',
    title: 'M.Sc. Computer Science',
    level: 'Postgraduate',
    school: 'Computing & Information Sciences',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'B.Sc. Computer Science / BCA / B.Sc. IT with minimum 55% aggregate.',
    overview:
      'Advanced postgraduate specialization in distributed computing, deep learning pipelines, cryptography, and peer-reviewed capstone research.',
    coreModules: [
      'Advanced Machine Learning',
      'Cryptographic Network Protocols',
      'Cloud-Native Microservices',
      'Research Methodology & Thesis',
    ],
    careerPathways: ['Senior Software Engineer', 'ML Research Engineer', 'Solutions Architect'],
  },
  {
    id: 'msc-ss',
    code: 'SK-PG504',
    title: 'M.Sc. Software Systems (5-Year Integrated)',
    level: 'Postgraduate',
    school: 'Computing & Information Sciences',
    duration: '5 Years (10 Semesters)',
    intake: 60,
    eligibility: 'Pass in Higher Secondary (+2) with Mathematics and Computer Science / Physics.',
    overview:
      'Flagship five-year integrated postgraduate degree featuring two full-semester industrial internships and full-lifecycle systems engineering.',
    coreModules: [
      'Systems Architecture & Compilers',
      'Enterprise Cloud Security',
      'Full-Semester Industry Residency I & II',
      'Large-Scale Distributed Systems',
    ],
    careerPathways: ['Product Engineer', 'Site Reliability Engineer', 'Technical Architect'],
  },
  {
    id: 'mcom',
    code: 'SK-PG510',
    title: 'Master of Commerce (M.Com.)',
    level: 'Postgraduate',
    school: 'Commerce & Management',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'B.Com. / B.Com. CA / BBA or allied commerce undergraduate degree.',
    overview:
      'Postgraduate analytical rigour in international financial reporting, corporate valuation, econometrics, and empirical commerce research.',
    coreModules: [
      'International Financial Reporting',
      'Corporate Valuation & Derivatives',
      'Quantitative Business Econometrics',
      'Taxation Planning & Governance',
    ],
    careerPathways: ['Corporate Finance Analyst', 'University Lecturer', 'Investment Operations Lead'],
  },
  {
    id: 'msc-biotech',
    code: 'SK-PG515',
    title: 'M.Sc. Biotechnology',
    level: 'Postgraduate',
    school: 'Biosciences & Physical Sciences',
    duration: '2 Years (4 Semesters)',
    intake: 30,
    eligibility: 'B.Sc. Biotechnology, Microbiology, Biochemistry, or Life Sciences.',
    overview:
      'Translational research degree focused on proteomics, industrial enzyme engineering, immunology, and laboratory thesis publication.',
    coreModules: [
      'Genetic Engineering & CRISPR',
      'Immunology & Diagnostics',
      'Downstream Bioprocessing',
      'Bioinformatics & Structural Biology',
    ],
    careerPathways: ['R&D Scientist', 'Biopharma Quality Lead', 'Doctoral Research Fellow'],
  },
  {
    id: 'msw',
    code: 'SK-PG520',
    title: 'Master of Social Work (MSW)',
    level: 'Postgraduate',
    school: 'Humanities & Social Sciences',
    duration: '2 Years (4 Semesters)',
    intake: 40,
    eligibility: 'Bachelor’s degree in any discipline from a recognized university.',
    overview:
      'Fieldwork-anchored professional degree with specializations in Human Resource Management, Medical & Psychiatric Social Work, and Community Development.',
    coreModules: [
      'Labour Legislation & Industrial Relations',
      'Concurrent Fieldwork Practicum',
      'Rural & Urban Community Planning',
      'Clinical & Psychiatric Intervention',
    ],
    careerPathways: ['HR Business Partner', 'CSR Programme Manager', 'Medical Social Worker'],
  },
  {
    id: 'phd-cs',
    code: 'SK-RD601',
    title: 'Ph.D. in Computer Science',
    level: 'Research',
    school: 'Computing & Information Sciences',
    duration: '3–5 Years (Full-Time / Part-Time)',
    intake: 12,
    eligibility: 'M.Sc. / MCA / M.Phil. with 55% aggregate and Bharathiar University CET qualification.',
    overview:
      'Recognized Bharathiar University doctoral research centre supporting original investigation in computer vision, IoT security, and healthcare AI.',
    coreModules: [
      'Doctoral Colloquium & Ethics',
      'Grant Writing & Indexed Publishing',
      'Applied Computational Research',
      'Dissertation & Viva Voce',
    ],
    careerPathways: ['Principal Research Scientist', 'Assistant Professor', 'AI Lab Lead'],
  },
  {
    id: 'phd-comm',
    code: 'SK-RD604',
    title: 'Ph.D. in Commerce & Management',
    level: 'Research',
    school: 'Commerce & Management',
    duration: '3–5 Years (Full-Time / Part-Time)',
    intake: 10,
    eligibility: 'M.Com. / MBA with 55% aggregate and Bharathiar University CET qualification.',
    overview:
      'Empirical research supervision in MSME finance, sustainable supply chains, capital market efficiency, and rural financial inclusion.',
    coreModules: [
      'Econometric Modelling & SPSS/R',
      'Systematic Literature Synthesis',
      'Empirical Field Investigation',
      'Doctoral Thesis Defence',
    ],
    careerPathways: ['Academic Faculty', 'Policy & Economic Analyst', 'Corporate Strategy Advisor'],
  },
  {
    id: 'phd-bio',
    code: 'SK-RD608',
    title: 'Ph.D. in Biosciences',
    level: 'Research',
    school: 'Biosciences & Physical Sciences',
    duration: '3–5 Years (Full-Time / Part-Time)',
    intake: 8,
    eligibility: 'M.Sc. Biotechnology / Microbiology with 55% aggregate and CET / UGC-NET.',
    overview:
      'Funded laboratory investigations in microbial biopolymers, phytochemistry, antimicrobial resistance, and agricultural biotechnology.',
    coreModules: [
      'Spectroscopy & Molecular Assays',
      'Research Ethics & Biosafety',
      'Peer-Reviewed Manuscript Preparation',
      'Doctoral Dissertation',
    ],
    careerPathways: ['Postdoctoral Fellow', 'Biotech Principal Investigator', 'University Faculty'],
  },
];

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'labs',
    figureNumber: 'Fig. 02',
    title: 'Computational & Life Sciences Laboratories',
    category: 'Research & Innovation',
    image: '/src/assets/images/academic_science_lab_1794810227983.jpg',
    caption: 'Fig. 02 — Interdisciplinary Biotechnology and Data Computing Wing, Academic Block B.',
    summary:
      'Twenty-four specialized laboratories supporting genomics, microbiology, high-performance GPU computing, and electronics prototyping under faculty supervision.',
    highlights: [
      { label: 'Workstations', value: '1,450+ Connected Nodes' },
      { label: 'Funded Projects', value: 'INR 4.2 Cr Active Grants' },
      { label: 'Patents Filed', value: '62 Institutional Filings' },
    ],
  },
  {
    id: 'library',
    figureNumber: 'Fig. 03',
    title: 'Central Library & Digital Archive',
    category: 'Knowledge Commons',
    image: '/src/assets/images/campus_central_library_1794810228077.jpg',
    caption: 'Fig. 03 — The Two-Tier Central Reading Room & Reference Collection.',
    summary:
      'Open-access academic library housing print monographs, bound periodicals, INFLIBNET e-journals, and dedicated quiet study alcoves for postgraduate scholars.',
    highlights: [
      { label: 'Print Volumes', value: '68,400+ Books' },
      { label: 'Digital Access', value: 'IEEE, Springer & JSTOR' },
      { label: 'Reading Hours', value: '08:00 – 20:00 Mon–Sat' },
    ],
  },
  {
    id: 'auditorium',
    figureNumber: 'Fig. 04',
    title: 'Convocation Hall & Performing Arts',
    category: 'Culture & Convocation',
    image: '/src/assets/images/campus_cultural_auditorium_1794810229125.jpg',
    caption: 'Fig. 04 — Main Academic Auditorium during Annual Convocation & National Symposiums.',
    summary:
      'Acoustically engineered 1,200-seat auditorium hosting annual graduations, national conferences, classical arts festivals, and student-led literary debates.',
    highlights: [
      { label: 'Seating Capacity', value: '1,200 Tiered Seats' },
      { label: 'Student Clubs', value: '28 Cultural & NCC Units' },
      { label: 'Annual Symposia', value: '40+ National Colloquia' },
    ],
  },
  {
    id: 'sports',
    figureNumber: 'Fig. 05',
    title: 'Athletics Track & Sports Pavilion',
    category: 'Athletics & Wellness',
    image: '/src/assets/images/campus_sports_pavilion_1794810229174.jpg',
    caption: 'Fig. 05 — The Sugunapuram Athletic Oval, Cricket Pitch, and Sports Pavilion.',
    summary:
      'Standard 400-metre synthetic athletics track, turf cricket oval, indoor badminton courts, and dedicated sports scholarship mentorship for university athletes.',
    highlights: [
      { label: 'Campus Grounds', value: '12-Acre Sports Complex' },
      { label: 'University Blues', value: '46 Inter-Varsity Medallists' },
      { label: 'Hostel Facilities', value: 'Separate Men & Women Residences' },
    ],
  },
];

export const PLACEMENT_METRICS: PlacementStat[] = [
  {
    value: '1,840+',
    label: 'Job Offers Extended',
    context: '2025–26 Campus Recruitment Drive',
  },
  {
    value: '185+',
    label: 'Recruiting Partners',
    context: 'IT, Finance, Biotech & Core Engineering',
  },
  {
    value: 'INR 12.5 LPA',
    label: 'Highest Annual Package',
    context: 'Software Systems & Product Engineering',
  },
  {
    value: 'INR 4.6 LPA',
    label: 'Median Graduate Package',
    context: 'Across UG & PG Placement Cohorts',
  },
];

export const RECRUITING_PARTNERS = [
  'Tata Consultancy Services',
  'Zoho Corporation',
  'Deloitte India',
  'Infosys',
  'Cognizant',
  'Accenture',
  'Ernst & Young',
  'Amazon Development Centre',
  'Federal Bank',
  'Bosch Global Software',
  'KPMG',
  'Biocon Biologics',
];

export const ALUMNI_OUTCOMES: AlumniStory[] = [
  {
    id: 'al-1',
    name: 'Kavya Subramanian',
    batch: 'M.Sc. Software Systems, Class of 2023',
    role: 'Member Technical Staff',
    organization: 'Zoho Corporation, Chennai',
    outcome:
      'Completed two six-month industry residencies during semesters seven and ten, transitioning directly from capstone architecture review to core product engineering.',
  },
  {
    id: 'al-2',
    name: 'Pranav Natarajan',
    batch: 'B.Com. Professional Accounting, Class of 2024',
    role: 'Audit & Assurance Associate',
    organization: 'Deloitte Haskins & Sells, Bengaluru',
    outcome:
      'Paired autonomous curriculum papers in corporate taxation with the campus CA mentorship cell, clearing intermediate stages alongside graduation.',
  },
  {
    id: 'al-3',
    name: 'Nandhini Krishnan',
    batch: 'M.Sc. Biotechnology, Class of 2023',
    role: 'Upstream Bioprocess Associate',
    organization: 'Biocon Biologics, Bengaluru',
    outcome:
      'Published undergraduate and postgraduate microbial fermentation findings in peer-reviewed journals using the Academic Block B bioreactors.',
  },
];

export const CAMPUS_NOTICES: CampusNotice[] = [
  {
    id: 'n-1',
    category: 'Admissions',
    date: '18 Nov 2026',
    title: 'Admissions Open for Academic Year 2026–27 (UG & PG)',
    summary:
      'Online applications and campus counselling appointments are now open across all 38+ autonomous degree programmes. Early merit scholarship assessments begin 02 December 2026.',
    reference: 'CIR/ADM/2026-14',
  },
  {
    id: 'n-2',
    category: 'Examinations',
    date: '14 Nov 2026',
    title: 'Odd Semester End-Term Timetable Released',
    summary:
      'Autonomous examination schedules for Undergraduate (Semesters I, III, V) and Postgraduate (Semesters I, III) cohorts are published through the Controller of Examinations office.',
    reference: 'COE/TT/2026-09',
  },
  {
    id: 'n-3',
    category: 'Events',
    date: '27 Nov 2026',
    title: 'National Symposium on Applied AI & Sustainable Biosciences',
    summary:
      'Hosted jointly by the Schools of Computing and Biosciences at the Main Auditorium. Paper abstracts invited from faculty and postgraduate scholars.',
    reference: 'RES/SYM/2026-03',
  },
  {
    id: 'n-4',
    category: 'Scholarships',
    date: '30 Nov 2026',
    title: 'VLB Trust Merit & Sports Fee Concession Window',
    summary:
      'Applicants securing above 90% in Higher Secondary examinations or national/state inter-university sports representation may submit concession dossiers during admission counselling.',
    reference: 'FIN/SCH/2026-05',
  },
];
