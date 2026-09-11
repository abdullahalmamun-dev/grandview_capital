export interface ProgramDetail {
  id: string;
  number: string;
  shortTitle: string;
  title: string;
  description: string;
  tagline: string;
  stage: string;
  typicalRange: string;
  highlights: string[];
  bestFor: string;
  iconName: string;
}

export const programDetails: ProgramDetail[] = [
  {
    id: 'equity-financing',
    number: '01',
    shortTitle: 'Equity',
    title: 'Equity Financing',
    description: 'Strategic introductions and preparation for businesses considering growth capital in exchange for ownership participation.',
    tagline: 'BUILD FOR THE LONG TERM',
    stage: 'Growth & Scale Stage',
    typicalRange: '$2M – $25M+',
    highlights: [
      'Strategic valuation & narrative positioning',
      'Institutional growth equity network mapping',
      'Non-dilutive alignment & governance preparation'
    ],
    bestFor: 'Established businesses expanding market share without recurring debt service.',
    iconName: 'Compass'
  },
  {
    id: 'venture-capital',
    number: '02',
    shortTitle: 'Venture',
    title: 'Venture Capital',
    description: 'Readiness guidance for ambitious companies seeking institutional investors, from narrative refinement to opportunity positioning.',
    tagline: 'PREPARE TO SCALE',
    stage: 'Early to Mid-Stage',
    typicalRange: '$1M – $15M',
    highlights: ['Pitch deck narrative & thesis refinement', 'Financial model & unit economic stress testing', 'Data room structure & due diligence readiness'],
    bestFor: 'High-growth trajectory tech and innovation firms targeting venture syndicates.',
    iconName: 'Layers3'
  },
  {
    id: 'sba-term-lending',
    number: '03',
    shortTitle: 'SBA & Term',
    title: 'SBA & Term Lending',
    description: 'Guidance through established lending programs with clear requirements, structured payments, and longer planning horizons.',
    tagline: 'PLAN WITH STRUCTURE',
    stage: 'Mature / Cash-Flow Positive',
    typicalRange: '$350K – $5M',
    highlights: ['SBA 7(a) & 504 eligibility assessment', 'DSCR & debt capacity optimization', 'Preferred bank & non-bank lender matching'],
    bestFor: 'Profitable enterprises seeking structured, amortizing long-term capital.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'business-lines-of-credit',
    number: '04',
    shortTitle: 'Lines of Credit',
    title: 'Business Lines of Credit',
    description: 'Flexible capital access designed to support working needs, purchasing cycles, and unexpected opportunities.',
    tagline: 'STAY READY FOR OPPORTUNITY',
    stage: 'Active Operating Stage',
    typicalRange: '$100K – $2M',
    highlights: ['Revolving credit line structure analysis', 'Receivables & inventory gap planning', 'Fast drawdown positioning'],
    bestFor: 'Companies managing inventory inventory build, seasonal cash cycles, or growth surges.',
    iconName: 'TrendingUp'
  },
  {
    id: 'equipment-financing',
    number: '05',
    shortTitle: 'Equipment',
    title: 'Equipment Financing',
    description: 'Purpose-built financing options that help businesses acquire essential equipment while preserving operating liquidity.',
    tagline: 'INVEST IN WHAT MOVES YOU',
    stage: 'Asset & Expansion Phase',
    typicalRange: '$250K – $10M',
    highlights: ['Asset-backed collateral structures', 'Customized payback & seasonal schedules', 'Section 179 tax advantage alignment'],
    bestFor: 'Firms upgrading machinery, fleets, medical equipment, or technology infrastructure.',
    iconName: 'Cpu'
  },
  {
    id: 'strategic-capital-advisory',
    number: '06',
    shortTitle: 'Advisory',
    title: 'Strategic Capital Advisory',
    description: 'A practical review of your goals, financial profile, and available paths—so you can choose capital with confidence.',
    tagline: 'FIND YOUR DIRECTION',
    stage: 'All Strategic Milestones',
    typicalRange: 'Custom Advisory Scope',
    highlights: ['Comprehensive capital stack evaluation', 'Refinancing & restructuring options', 'Unbiased independent advisory'],
    bestFor: 'Founders and CFOs seeking expert perspective before making capital commitments.',
    iconName: 'MoveUpRight'
  }
];

export const programs: [string, string, string][] = programDetails.map((p) => [
  p.title,
  p.description,
  p.tagline,
]);
