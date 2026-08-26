export const site = {
  name: 'First Defense Insulation',
  shortName: 'FD Insulation',
  tagline: "Houston's #1 Attic & Spray Foam Insulation Contractor",
  description:
    "First Defense Insulation is Houston's leading attic and spray foam insulation contractor with 35 years of combined experience. We improve home comfort, slash energy bills, and protect indoor air quality — BBB A-rated, free estimates, and financing available.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fdinsulation.com',
  phones: {
    houston: {
      display: '(713) 808-9853',
      href: 'tel:+17138089853',
      label: 'Houston',
    },
    dfw: { display: '(214) 295-1004', href: 'tel:+12142951004', label: 'DFW' },
  },
  // Primary phone for CTAs
  phone: '(713) 808-9853',
  phoneHref: 'tel:+17138089853',
  email: process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ?? 'info@fdinsulation.com',
  address: {
    city: 'Houston',
    state: 'TX',
  },
  stats: [
    { value: '35+', label: 'Years combined experience' },
    { value: 'BBB A', label: 'Rated & accredited' },
    { value: '1-Day', label: 'Most projects complete' },
    { value: 'Free', label: 'Estimates always' },
  ],
  badges: [
    'BBB A-Rated',
    '35+ Years Experience',
    'Licensed & Insured',
    'Financing Available',
  ],
  benefits: [
    {
      icon: 'DollarSign',
      title: 'Save on Utility Bills',
      body: 'Proper insulation and air sealing reduces heat transfer, cutting your heating and cooling costs significantly year-round.',
    },
    {
      icon: 'Thermometer',
      title: 'Increase Home Comfort',
      body: 'Enjoy consistent temperatures throughout every room — no more hot spots in summer or cold drafts in winter.',
    },
    {
      icon: 'Zap',
      title: 'Boost Energy Efficiency',
      body: 'With a well-insulated envelope, your HVAC works less to maintain comfort — saving energy and reducing wear on your system.',
    },
    {
      icon: 'Wind',
      title: 'Improve Indoor Air Quality',
      body: 'Sealing air leaks eliminates pathways for allergens, pollutants, and moisture that can lead to mold and poor air quality.',
    },
  ],
  hours: {
    weekdays: 'Monday – Friday: 8:00 AM – 5:00 PM',
    weekend: 'Saturday & Sunday: Closed',
    schema: [
      {
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
  },
  serviceAreas: [
    'Houston',
    'Katy',
    'Cypress',
    'Spring',
    'Humble',
    'Magnolia',
    'The Woodlands',
    'Conroe',
    'Dallas',
    'Ft. Worth',
  ],
} as const;

export const formsubmitEndpoint = `https://formsubmit.co/${site.email}`;

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#benefits', label: 'Why Insulate' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
