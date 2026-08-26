export type ServiceAreaFaq = {
  question: string;
  answer: string;
};

export type ServiceAreaPoint = {
  title: string;
  body: string;
};

export type ServiceArea = {
  slug: string;
  href: string;
  name: string;
  shortName: string;
  state: 'TX';
  region: 'houston' | 'dfw';
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  intro: string[];
  highlights: string[];
  whyTitle: string;
  why: ServiceAreaPoint[];
  housingTitle: string;
  housing: string;
  neighborhoodsTitle: string;
  neighborhoods: string[];
  servicesIntro: string;
  featuredServiceSlugs: string[];
  faqs: ServiceAreaFaq[];
  image: string;
  imageAlt: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'houston-tx',
    href: '/houston-tx',
    name: 'Houston, TX',
    shortName: 'Houston',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Houston TX Attic Insulation | Spray Foam & Air Sealing',
    metaDescription:
      'First Defense Insulation is Houston’s attic and spray foam contractor. Cellulose, radiant barriers, air sealing, and duct work. BBB A-rated. Free estimates.',
    heroHeadline: 'Houston attic insulation built for Gulf Coast heat',
    heroSubhead:
      'From Memorial bungalows to Energy Corridor two-stories, we air seal, insulate, and protect Houston homes so attics stop cooking the rooms below.',
    intro: [
      'Houston is home base for First Defense Insulation. After 35 years of combined experience in this climate, we know what 140°F attics, Gulf humidity, and leaky 1970s ranch houses actually do to comfort and electric bills.',
      'A free on-site comfort inspection shows where heat, air, and moisture are moving. Then we specify cellulose, spray foam, radiant barriers, crawl space work, or duct sealing — not a one-size attic dump — so the system matches how your house is built.',
    ],
    highlights: [
      'Local Houston crews, not a national franchise',
      'Air sealing before any new insulation is added',
      'Cellulose, radiant barriers, spray foam, and ducts',
      'Most residential projects finished in one day',
      'BBB A-rated, licensed, and insured',
      'Financing available after your free estimate',
    ],
    whyTitle: 'Why Houston homes lose so much energy through the attic',
    why: [
      {
        title: 'Attics that behave like ovens',
        body: 'Dark shingles, little shade, and long cooling seasons push Houston attics well past 140°F. Without enough R-value and a radiant barrier, that heat soaks into upstairs bedrooms all afternoon.',
      },
      {
        title: 'Humidity rides in with the leaks',
        body: 'Unsealed can lights, plumbing chases, and attic hatches let hot, wet air into living space. That drives up A/C run-time and feeds dust, allergens, and occasional mold on the attic side of the ceiling.',
      },
      {
        title: 'Housing stock that was never air sealed',
        body: 'Much of Houston was built when energy was cheap. Batts with gaps, missing insulation at eaves, and leaky attic ducts are the norm in Heights bungalows, Meyerland ranches, and 1990s two-stories alike.',
      },
      {
        title: 'Ducts cooking in the attic',
        body: 'Most Houston systems sit in the attic. Leaky, uninsulated ducts dump 20–30% of cooled air into the hottest part of the house. Sealing and insulating those runs is often as important as the attic floor.',
      },
    ],
    housingTitle: 'Insulation that fits Houston construction',
    housing:
      'Houston is not one housing type. We regularly work in pier-and-beam bungalows, slab-on-grade ranches, townhomes, and newer infill. The right spec might be blown cellulose over a sealed attic floor in a Memorial ranch, closed-cell foam in a humid crawl, or a radiant barrier under a west-facing roof in the Energy Corridor. We inspect first so the material matches the house — not a generic “Houston package.”',
    neighborhoodsTitle: 'Neighborhoods we serve across Houston',
    neighborhoods: [
      'Memorial',
      'The Heights',
      'Bellaire',
      'West University',
      'Spring Branch',
      'Meyerland',
      'Garden Oaks',
      'Energy Corridor',
      'Montrose',
      'Oak Forest',
    ],
    servicesIntro:
      'Houston homeowners typically start with an attic inspection, then combine air sealing and cellulose — and add a radiant barrier or duct sealing when the roof and HVAC demand it.',
    featuredServiceSlugs: [
      'cellulose',
      'radiant-barriers',
      'air-sealing',
      'crawl-space-insulation',
      'insulation-removal',
      'duct-sealing',
    ],
    faqs: [
      {
        question: 'What R-value does a Houston attic need?',
        answer:
          'The Department of Energy recommends roughly R-38 to R-49 for this climate zone. We measure existing depth on the inspection and blow cellulose (or specify foam) to hit that range after air sealing.',
      },
      {
        question: 'Do I need a radiant barrier in Houston?',
        answer:
          'In this sun load, a radiant barrier is one of the highest-impact add-ons. It does not replace R-value — it reflects radiant heat that insulation alone cannot stop. Many Houston jobs pair cellulose with a radiant barrier.',
      },
      {
        question:
          'Can you work around an existing Houston HVAC system in the attic?',
        answer:
          'Yes. We protect equipment, seal and insulate ducts when needed, and install around air handlers without shutting your home down for days. Most jobs wrap in 4–6 hours.',
      },
      {
        question: 'Do you only serve inside the Loop?',
        answer:
          'No. We work across Greater Houston — including Katy, Cypress, Spring, Humble, Magnolia, The Woodlands, and Conroe — plus Dallas and Fort Worth.',
      },
    ],
    image: '/services/cellulose-insulation.jpg',
    imageAlt: 'Blown-in cellulose covering a Houston residential attic floor',
  },
  {
    slug: 'katy-tx-attic-insulation',
    href: '/katy-tx-attic-insulation',
    name: 'Katy, TX',
    shortName: 'Katy',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Katy TX Attic Insulation Contractors | Free Estimates',
    metaDescription:
      'Premier attic insulation in Katy, TX. Cellulose, spray foam, air sealing, and radiant barriers for Cinco Ranch, Cross Creek Ranch, and beyond. Free estimates.',
    heroHeadline: 'Premier attic insulation services in Katy, TX',
    heroSubhead:
      'Elevate comfort and cut cooling costs in Cinco Ranch, Cross Creek Ranch, Firethorne, and throughout Katy with insulation built for west-Houston heat.',
    intro: [
      'Katy homes look tight from the curb, but many still run original attic insulation that cannot keep up with west-Houston sun and long A/C seasons. First Defense Insulation brings 35 years of combined experience to Katy attics — air sealing, cellulose, radiant barriers, and duct work included.',
      'Whether you are in a 2000s two-story or a newer master-planned build, a free comfort inspection shows where heat is leaking upstairs and what it takes to stabilize rooms without cranking the thermostat.',
    ],
    highlights: [
      'Katy and west-Houston specialists',
      'Cinco Ranch, Cross Creek Ranch, Firethorne, Cane Island',
      'Blown cellulose, spray foam, and radiant barriers',
      'Air sealing included before we add material',
      'Attic insulation removal when the old layer has failed',
      'Free on-site estimates — no obligation',
    ],
    whyTitle: 'Why Katy homeowners call us for attic work',
    why: [
      {
        title: 'Upstairs rooms that never catch up',
        body: 'Two-story Katy plans put bedrooms under a dark roof with long duct runs. Thin original insulation and leaky attic ducts are why the second floor feels like a different climate from the kitchen.',
      },
      {
        title: 'Energy bills that spike every summer',
        body: 'Katy’s cooling season is long. When attic R-value is low and air leaks around cans and chases, the air conditioner runs through the afternoon and still cannot hold 75°F upstairs.',
      },
      {
        title: 'New-construction gaps',
        body: 'Even recent builds can miss target R-value at the eaves, leave bath fans unsealed, or skip mastic on duct takeoffs. We inspect rather than assume a “new” attic is finished.',
      },
      {
        title: 'A full system, not just blown-in fill',
        body: 'Katy jobs often combine air sealing, cellulose, a radiant barrier, and duct sealing. That is how you stop heat at the roof, the attic floor, and the supply trunks at once.',
      },
    ],
    housingTitle: 'Built around Katy’s master-planned communities',
    housing:
      'Cinco Ranch, Cross Creek Ranch, Firethorne, and Cane Island share a pattern: large two-stories, attic HVAC, and west-facing roofs that load heat all afternoon. We measure existing insulation, seal penetrations, and specify cellulose or foam to DOE-recommended depth — then add a radiant barrier when the roof deck is cooking the attic. Removal comes first if the original layer is dirty, wet, or pest-damaged.',
    neighborhoodsTitle: 'Katy communities we serve',
    neighborhoods: [
      'Cinco Ranch',
      'Cross Creek Ranch',
      'Firethorne',
      'Cane Island',
      'Falcon Landing',
      'Katy Trails',
      'Cinco Ranch Southwest',
      'Pin Oak Village',
    ],
    servicesIntro:
      'Most Katy projects start with air sealing and blown-in cellulose. Radiant barriers and duct sealing are the usual next step when upstairs rooms still lag the rest of the house.',
    featuredServiceSlugs: [
      'cellulose',
      'radiant-barriers',
      'air-sealing',
      'insulation-removal',
      'duct-sealing',
      'air-balancing',
    ],
    faqs: [
      {
        question: 'Do newer Katy homes still need attic insulation?',
        answer:
          'Often yes. Builder-grade batts and incomplete air sealing are common even in the 2010s. A quick attic look — and our free inspection — tells you whether you are in the DOE R-38 to R-49 range.',
      },
      {
        question: 'Can you remove old insulation in a Katy two-story?',
        answer:
          'Yes. We vacuum damaged or contaminated material, air seal, and reinstall — frequently in a single day so you are not living with an open attic project.',
      },
      {
        question: 'Is spray foam available in Katy?',
        answer:
          'We specify spray foam where it is the right tool — crawl spaces, rim joists, and some attic applications — and cellulose where a blown blanket is the better value. The inspection decides, not a sales script.',
      },
      {
        question: 'Do you serve all of Katy ISD / Fort Bend side as well?',
        answer:
          'Yes. We work throughout Katy on both the Harris County and Fort Bend County sides of town.',
      },
    ],
    image: '/services/radiant-barrier.jpg',
    imageAlt:
      'Radiant barrier foil installed on attic rafters in a Katy, TX home',
  },
  {
    slug: 'cypress-tx',
    href: '/cypress-tx',
    name: 'Cypress, TX',
    shortName: 'Cypress',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Cypress TX Attic Insulation | Air Sealing & Cellulose',
    metaDescription:
      'Attic insulation and air sealing in Cypress, TX. Bridgeland, Towne Lake, Fairfield, and Cy-Fair homes. BBB A-rated. Free on-site estimates from First Defense Insulation.',
    heroHeadline: 'Attic insulation and air sealing for Cypress, TX homes',
    heroSubhead:
      'Northwest Houston heat, 1980s–2000s housing, and attic HVAC — we bring Cypress attics up to a depth and seal that actually holds comfort.',
    intro: [
      'Cypress sits in one of Houston’s hottest suburban belts, with a mix of 1980s–2000s homes and newer Bridgeland and Towne Lake construction. Original fiberglass in those older attics is often thin, gappy, and sitting over unsealed cans and plumbing chases.',
      'First Defense Insulation inspects Cypress attics the same way we do inside the Loop: find the leaks, remove failed material when needed, then blow cellulose and add radiant or duct work so upstairs rooms stop fighting the thermostat.',
    ],
    highlights: [
      'Cypress, Cy-Fair, Bridgeland, and Towne Lake',
      'Ideal for 80s–2000s homes with original batts',
      'Air sealing around cans, fans, and chases',
      'Blown cellulose to recommended R-value',
      'Duct sealing for attic air handlers',
      'Free estimates · most jobs in one day',
    ],
    whyTitle: 'What we see in Cypress attics',
    why: [
      {
        title: 'Original insulation that has settled',
        body: 'Homes from the 80s and 90s often still have the first layer of batts or a light blown-in job. Settling, pest traffic, and HVAC techs walking the joists leave voids you can see from the hatch.',
      },
      {
        title: 'Cy-Fair two-stories with hot west bedrooms',
        body: 'Afternoon sun on west elevations plus a weak attic floor is a classic Cypress complaint. Air sealing and proper depth usually do more than a new thermostat.',
      },
      {
        title: 'Attic ducts that were never mastic-sealed',
        body: 'Takeoffs, boots, and joints in Cypress attics commonly leak. We seal with mastic or foam so the air you pay to cool is not dumped above the insulation.',
      },
      {
        title: 'New master-planned homes still miss details',
        body: 'Bridgeland and Towne Lake builds can still leave bath fans open to the attic or under-insulate tight eaves. We treat “new” as a starting point, not a finished envelope.',
      },
    ],
    housingTitle: 'From Fairfield ranches to Bridgeland two-stories',
    housing:
      'Cypress housing spans slab ranches with low-pitch roofs, two-story plans with long trunk lines, and newer energy-code homes that still benefit from air sealing. Low-pitch roofs need careful baffles and blown depth so soffit vents keep working. We map that on the inspection instead of forcing the same spec on every street.',
    neighborhoodsTitle: 'Cypress communities we serve',
    neighborhoods: [
      'Bridgeland',
      'Towne Lake',
      'Fairfield',
      'Coles Crossing',
      'Cypress Creek Lakes',
      'Lakewood Forest',
      'Cypress Mill',
      'Stablewood Farms',
    ],
    servicesIntro:
      'Cypress jobs most often combine air sealing and cellulose. We add duct sealing when the air handler lives in the attic — which is most of this market.',
    featuredServiceSlugs: [
      'air-sealing',
      'cellulose',
      'radiant-barriers',
      'duct-sealing',
      'insulation-removal',
      'duct-cleaning',
    ],
    faqs: [
      {
        question:
          'My Cypress home is from the 90s. Should I add more or start over?',
        answer:
          'If the existing layer is dry and reasonably even, we often air seal and blow cellulose over it. If it is wet, moldy, vermiculite, or full of gaps from years of attic traffic, removal first is the honest path.',
      },
      {
        question: 'Do you work in Bridgeland HOA homes?',
        answer:
          'Yes. Attic work is interior to the roof, so curb appeal and HOA exterior rules are not an issue. We protect living spaces and leave the job site clean.',
      },
      {
        question: 'Will this help a room over the garage?',
        answer:
          'Bonus rooms and garage-adjacent bedrooms are often the weakest spots. We look at the attic above, any knee walls, and duct volume to that room as part of the same visit.',
      },
    ],
    image: '/services/air-sealing.jpg',
    imageAlt:
      'Air sealing foam around attic penetrations in a Cypress, TX home',
  },
  {
    slug: 'spring-tx',
    href: '/spring-tx',
    name: 'Spring, TX',
    shortName: 'Spring',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Spring TX Attic Insulation Services',
    metaDescription:
      'Expert Spring TX attic insulation. Customized cellulose, spray foam, air sealing, and removal for north Houston homes. 35 years experience. Free estimates.',
    heroHeadline: 'Expert Spring TX attic insulation solutions',
    heroSubhead:
      'Thirty-five years of insulation expertise for Spring homeowners who want cooler upstairs rooms, lower bills, and an attic that finally matches Texas heat.',
    intro: [
      'At First Defense Insulation, we understand the unique needs of homeowners and businesses in Spring, Texas. North Houston heat, a mix of older ranch homes and newer subdivisions, and attics that were never air sealed all show up on Spring comfort inspections.',
      'Our goal is to turn uncomfortable spaces into efficient ones — with a tailored spec, not a generic blow-in. Whether you need cellulose, spray foam, removal, or duct work, the free inspection is how we match the system to your house.',
    ],
    highlights: [
      'Decades of insulation experience in Spring',
      'Custom specs for ranches and two-story plans',
      'Comprehensive attic inspections before we quote',
      'Removal and replacement of failed insulation',
      'Cellulose, foam, radiant barriers, and ducts',
      'Free on-site comfort inspections',
    ],
    whyTitle: 'Why Spring homeowners choose First Defense',
    why: [
      {
        title: 'Decades of insulation expertise',
        body: 'With 35 years in the industry, our crews know north Houston attics — low pitches, scattered batts, and HVAC that was installed after the original insulation went in.',
      },
      {
        title: 'Customized for your Spring home',
        body: 'Gleannloch Farms two-stories and 1970s Klein-area ranches do not take the same spec. We inspect depth, leaks, moisture, and ducts, then write a plan for that house.',
      },
      {
        title: 'Proven energy savings',
        body: 'Sealing the attic floor and hitting recommended R-value cuts the load on your A/C. Spring summers are long enough that those savings show up on the bill, not just in a brochure.',
      },
      {
        title: 'Removal when adding more would hide a problem',
        body: 'Wet, pest-damaged, or paper-thin insulation should come out. We vacuum it, air seal, and replace it so you are not paying to bury the original failure.',
      },
    ],
    housingTitle: 'Spring’s mix of ranches and master-planned streets',
    housing:
      'Spring and Klein straddle older north Harris County housing and newer subdivisions. Ranch attics are often wide, hot, and easy to under-insulate at the eaves. Two-stories stack bedrooms under the roof with long duct runs. We look at both the attic floor and the duct system so you are not insulating around leaks that still dump air into a 140°F attic.',
    neighborhoodsTitle: 'Spring communities we serve',
    neighborhoods: [
      'Gleannloch Farms',
      'Spring Trails',
      'Northampton',
      'Memorial Northwest',
      'Klein',
      'Auburn Lakes',
      'Spring Lakes',
      'Champion Forest area',
    ],
    servicesIntro:
      'Spring projects usually start with a full attic inspection, then air sealing and cellulose. Removal, radiant barriers, and duct sealing are added when the existing system cannot be saved or the roof load is extreme.',
    featuredServiceSlugs: [
      'cellulose',
      'air-sealing',
      'insulation-removal',
      'radiant-barriers',
      'duct-sealing',
      'crawl-space-insulation',
    ],
    faqs: [
      {
        question: 'How do I know if my Spring attic needs an upgrade?',
        answer:
          'Rising summer bills, upstairs rooms that will not cool, and insulation you can see is below the joists are the usual signs. Ice dams are rare here — heat and humidity are the tells. We confirm with a free inspection.',
      },
      {
        question: 'What R-value should I have in Spring?',
        answer:
          'Plan on the DOE range of R-38 to R-49. We measure what you have now and install to the right depth for the product, accounting for settling on blown cellulose.',
      },
      {
        question: 'Do you handle commercial spaces in Spring as well?',
        answer:
          'Yes. We work with homeowners and businesses. Tell us about the building on the estimate form and we will schedule the right inspection.',
      },
    ],
    image: '/services/how-insulation-works.jpg',
    imageAlt: 'Attic insulation layers in a Spring, TX residential roof',
  },
  {
    slug: 'humble-tx',
    href: '/humble-tx',
    name: 'Humble, TX',
    shortName: 'Humble',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Humble TX Attic Insulation | Atascocita & Kingwood Area',
    metaDescription:
      'Attic insulation, air sealing, and removal in Humble, TX and nearby Atascocita. Fix hot rooms and high bills. Free estimates from First Defense Insulation.',
    heroHeadline: 'Attic insulation for Humble, TX and Atascocita homes',
    heroSubhead:
      'Northeast Houston humidity, 1970s–1990s housing, and attic HVAC — we seal, remove, and reinsulate Humble attics so comfort reaches every room.',
    intro: [
      'Humble and Atascocita homes sit in a humid northeast Houston belt, with a lot of 1970s–1990s construction that still has the first generation of attic insulation. Thin batts, leaky cans, and ducts that were never sealed are the usual findings.',
      'First Defense Insulation provides free comfort inspections in Humble, then air seals and installs cellulose — or removes contaminated material first — so you are not adding a new layer over a failed one.',
    ],
    highlights: [
      'Humble, Atascocita, and nearby northeast Houston',
      'Strong option for 70s–90s housing stock',
      'Vacuum removal of damaged insulation',
      'Air sealing and blown cellulose',
      'Duct sealing for attic systems',
      'Free estimates · BBB A-rated',
    ],
    whyTitle: 'Humble attic problems we fix every week',
    why: [
      {
        title: 'Housing that predates modern energy codes',
        body: 'Many Humble and Atascocita homes were insulated once, decades ago. Depth is short of R-38, and nobody sealed the attic floor. Adding more without sealing is only a partial fix.',
      },
      {
        title: 'Humidity from trees, lakes, and leaky envelopes',
        body: 'Northeast Houston stays wet. Attic leaks pull that humidity into the house and onto dusty insulation. Sealing penetrations is as much an air-quality job as an energy job.',
      },
      {
        title: 'Pest and moisture damage',
        body: 'Older attics pick up rodent debris, roof-leak staining, and packed-down batts. When we see that, we recommend removal so the new system starts clean.',
      },
      {
        title: 'Long duct runs to far bedrooms',
        body: 'Ranch and split plans in this area often starve the last bedroom. We check duct leaks and airflow along with the attic floor so one visit covers both.',
      },
    ],
    housingTitle: 'Northeast Houston construction, done right',
    housing:
      'Humble-area attics are often hot, low, and full of HVAC. We work around existing equipment, protect living space during removal, and rebuild the thermal layer to current recommendations. Lake Houston–adjacent neighborhoods get the same moisture-aware approach we use on crawl spaces farther north — seal first, then insulate.',
    neighborhoodsTitle: 'Humble-area communities we serve',
    neighborhoods: [
      'Atascocita',
      'Eagle Springs',
      'Summerwood',
      'Walden',
      'Fall Creek area',
      'Humble city proper',
      'Lakeshore',
      'Balmoral area',
    ],
    servicesIntro:
      'Humble projects frequently include removal plus air sealing and cellulose, especially when the original layer is dirty or too thin to save.',
    featuredServiceSlugs: [
      'insulation-removal',
      'cellulose',
      'air-sealing',
      'duct-sealing',
      'radiant-barriers',
      'duct-cleaning',
    ],
    faqs: [
      {
        question: 'Do you serve Kingwood as well as Humble?',
        answer:
          'Yes. Kingwood and Atascocita are part of the same northeast Houston route. If you are unsure whether you are in-area, request the estimate and we will confirm.',
      },
      {
        question:
          'The insulation in my hatch looks gray and thin. Is that normal?',
        answer:
          'Gray, dusty, or below-the-joist insulation is a sign it has aged and may be underperforming. We inspect for moisture and pests, then recommend top-off versus full removal.',
      },
      {
        question: 'Can you finish removal and new insulation the same day?',
        answer:
          'Often yes on typical Humble ranch and modest two-story attics. Larger or heavily obstructed attics may need a planned sequence — we will tell you up front.',
      },
    ],
    image: '/services/insulation-removal.jpg',
    imageAlt: 'Vacuum removal of old attic insulation in a Humble, TX home',
  },
  {
    slug: 'magnolia-tx',
    href: '/magnolia-tx',
    name: 'Magnolia, TX',
    shortName: 'Magnolia',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Magnolia TX Attic & Crawl Space Insulation',
    metaDescription:
      'Attic and crawl space insulation in Magnolia, TX. Cellulose, spray foam, and encapsulation for acreage and suburban homes. Free estimates from First Defense Insulation.',
    heroHeadline: 'Attic and crawl space insulation in Magnolia, TX',
    heroSubhead:
      'Acreage homes, pier-and-beam floors, and hot attics — Magnolia needs more than a city-lot blow-in. We insulate the envelope you actually have.',
    intro: [
      'Magnolia sits northwest of Houston with a different housing mix: larger lots, more crawl spaces, metal buildings, and attics over one-story ranches that bake all afternoon. First Defense Insulation treats attic and crawl space as one comfort system.',
      'If floors feel cold, the house smells musty, or the A/C cannot keep up, the problem is often below the house as much as above it. A free inspection covers both.',
    ],
    highlights: [
      'Magnolia, Tomball-adjacent, and northwest Harris/Montgomery',
      'Crawl space foam and encapsulation',
      'Attic cellulose, air sealing, and radiant barriers',
      'Experience with acreage and outbuilding envelopes',
      'Moisture-first approach in humid crawls',
      'Free on-site evaluations',
    ],
    whyTitle: 'Why Magnolia homes need a different insulation plan',
    why: [
      {
        title: 'Crawl spaces that leak like chimneys',
        body: 'Pier-and-beam and vented crawls pull in humid air, chill floors in winter, and feed musty odors. Closed-cell foam and encapsulation are often the real fix — not another attic blow-in alone.',
      },
      {
        title: 'Bigger attics, longer duct runs',
        body: 'Ranch and custom homes on acreage spread HVAC over more roof. Leaky trunks in a hot attic waste a lot of capacity before air reaches the last bedroom.',
      },
      {
        title: 'Metal roofs and shops',
        body: 'Metal buildings and some custom homes need a spec that respects condensation and radiant load. We do not treat them like a production two-story in Katy.',
      },
      {
        title: 'Trees, pollen, and pest pressure',
        body: 'Wooded lots mean more debris in attics and crawls. Contaminated insulation should come out before you seal the space up.',
      },
    ],
    housingTitle: 'Northwest county construction, not inner-loop defaults',
    housing:
      'Magnolia jobs range from suburban subdivisions to homes on several acres. We budget extra time for access, longer hose runs, and crawl work when the house is off-grade. If drainage or standing water is present, we talk about that before anyone sprays foam — sealing a wet crawl is how jobs fail.',
    neighborhoodsTitle: 'Magnolia-area communities we serve',
    neighborhoods: [
      'High Meadow Ranch',
      'Magnolia Reserve',
      'Mostyn Manor',
      'Decker Woods',
      'Woodlands Hills area',
      'Tomball-adjacent Magnolia',
      'FM 1488 corridor',
      'FM 1774 corridor',
    ],
    servicesIntro:
      'Magnolia estimates often include crawl space insulation or encapsulation alongside attic cellulose and air sealing. Tell us how the house is built when you request a visit.',
    featuredServiceSlugs: [
      'crawl-space-insulation',
      'cellulose',
      'air-sealing',
      'insulation-removal',
      'radiant-barriers',
      'duct-sealing',
    ],
    faqs: [
      {
        question:
          'My Magnolia home is pier-and-beam. Do I still insulate the attic?',
        answer:
          'Yes. Heat still leaves and enters through the roof. The crawl and the attic are both parts of the envelope. We inspect both so you are not cooling a house that leaks under the floor.',
      },
      {
        question: 'Should a Magnolia crawl space stay vented?',
        answer:
          'It depends on code, flood design, and how the house was built. Some crawls must remain vented; others perform far better encapsulated. We recommend after we see the space.',
      },
      {
        question: 'Do you insulate metal buildings or shops?',
        answer:
          'We evaluate shop and barndominium envelopes case by case. Bring photos or a description on the estimate form so we can schedule the right visit.',
      },
    ],
    image: '/services/crawl-space-insulation.jpg',
    imageAlt: 'Encapsulated crawl space with spray foam in a Magnolia, TX home',
  },
  {
    slug: 'woodlands-tx-attic-insulation',
    href: '/woodlands-tx-attic-insulation',
    name: 'The Woodlands, TX',
    shortName: 'The Woodlands',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Attic Insulation The Woodlands, TX',
    metaDescription:
      'Premier attic insulation in The Woodlands, TX. Cellulose, spray foam, and professional installation for Cochran’s Crossing, Sterling Ridge, and Creekside Park. Free estimates.',
    heroHeadline: 'Attic insulation in The Woodlands, TX',
    heroSubhead:
      'Quiet, efficient, year-round comfort for Woodlands homes — professional assessment, the right material, and installation that respects how this community is built.',
    intro: [
      'The Woodlands asks a lot of an attic: tree cover that still cannot stop radiant heat, two-story plans, and homeowners who care about energy use and indoor comfort. First Defense Insulation specifies cellulose, spray foam, or a hybrid after we see the roof deck, the existing layer, and the ducts.',
      'Proper insulation here is not only about bills. It is how upstairs bedrooms stay even, how the HVAC stops short-cycling, and how the house feels in August without living under the register.',
    ],
    highlights: [
      'The Woodlands villages and Creekside Park',
      'Fiberglass, cellulose, and spray foam options',
      'Expert assessment before any install',
      'Air sealing included with attic upgrades',
      'Competitive pricing and financing',
      'Free estimates · BBB A-rated',
    ],
    whyTitle: 'Why insulate your attic in The Woodlands?',
    why: [
      {
        title: 'Boost energy efficiency',
        body: 'A sealed, properly deep attic cuts the energy needed to hold indoor temperature. That lowers bills and reduces how hard the air conditioner works through Montgomery County summers.',
      },
      {
        title: 'Enhance home comfort',
        body: 'Woodlands summers are long and winters still get cool. Attic insulation damps the swings so you are not chasing hot upstairs rooms and downstairs cold spots.',
      },
      {
        title: 'Match the material to the attic',
        body: 'Open joist bays with few obstructions can take batts; irregular framing and wiring favor blown cellulose; air sealing and some assemblies favor spray foam. We choose after the inspection.',
      },
      {
        title: 'Local experience with Woodlands construction',
        body: 'Village two-stories, attic HVAC, and HOA-era builds are familiar territory. We install around existing systems and leave homes as clean as we found them.',
      },
    ],
    housingTitle: 'Choosing the right insulation for a Woodlands attic',
    housing:
      'Fiberglass batts work when joist spacing is regular and the attic is easy to access — but they leave gaps at wiring and edges. Spray foam air-seals and insulates in one step at a higher cost. Loose-fill cellulose is the workhorse for existing Woodlands attics: it fills around obstacles and reaches recommended R-value without a full foam package. Many homes also benefit from a radiant barrier on the roof deck.',
    neighborhoodsTitle: 'Woodlands villages we serve',
    neighborhoods: [
      "Cochran's Crossing",
      'Sterling Ridge',
      'Creekside Park',
      'Indian Springs',
      'Panther Creek',
      'Alden Bridge',
      "Grogan's Mill",
      'College Park area',
    ],
    servicesIntro:
      'Woodlands projects typically pair air sealing with blown cellulose. Spray foam and radiant barriers are specified when the inspection shows they will pay off.',
    featuredServiceSlugs: [
      'cellulose',
      'radiant-barriers',
      'air-sealing',
      'crawl-space-insulation',
      'duct-sealing',
      'air-balancing',
    ],
    faqs: [
      {
        question: 'Will attic work affect my Woodlands HOA?',
        answer:
          'Attic insulation is inside the roof. We do not change exterior appearance. Crews use existing access, protect floors, and haul debris off site.',
      },
      {
        question: 'Is spray foam worth it in The Woodlands?',
        answer:
          'It can be, especially for air sealing and crawl spaces. For many existing attics, cellulose after air sealing hits the R-value target at a better price. We will say so if foam is not the best spend.',
      },
      {
        question: 'Do you offer financing for Woodlands projects?',
        answer:
          'Yes. After the free estimate you can review EnerBank USA and Foundation Finance Company options on our financing page.',
      },
    ],
    image: '/services/cellulose-insulation.jpg',
    imageAlt: 'Blown-in cellulose insulation in a The Woodlands, TX attic',
  },
  {
    slug: 'conroe-tx',
    href: '/conroe-tx',
    name: 'Conroe, TX',
    shortName: 'Conroe',
    state: 'TX',
    region: 'houston',
    metaTitle: 'Conroe TX Attic Insulation | Lake Conroe Homes',
    metaDescription:
      'Attic insulation, air sealing, and duct work in Conroe, TX and Lake Conroe. Cellulose, radiant barriers, and crawl space services. Free estimates.',
    heroHeadline: 'Attic insulation for Conroe and Lake Conroe homes',
    heroSubhead:
      'Fast-growing Montgomery County heat, lake humidity, and mixed housing — we bring Conroe attics and ducts up to a spec that holds comfort all summer.',
    intro: [
      'Conroe has exploded with new subdivisions while Lake Conroe homes deal with humidity and sun off the water. Both need attics that are sealed and filled to the right R-value, and many still have leaky ductwork above the insulation.',
      'First Defense Insulation inspects Conroe properties the same way we do Houston: find air leaks, measure existing depth, check ducts, and only then recommend cellulose, foam, a radiant barrier, or removal.',
    ],
    highlights: [
      'Conroe, Grand Central Park, and Lake Conroe',
      'New-construction punch lists and older homes',
      'Humidity-aware air sealing',
      'Duct sealing for long attic runs',
      'Crawl space options for off-grade homes',
      'Free estimates · one-day residential installs',
    ],
    whyTitle: 'Conroe-specific comfort problems',
    why: [
      {
        title: 'Lake humidity plus a leaky attic',
        body: 'Moisture does not stay at the shoreline. Unsealed attic floors let humid air into living space, which makes the A/C work harder and can stain or mildew dusty insulation.',
      },
      {
        title: 'Brand-new still can be underdone',
        body: 'Rapid growth means some attics get a minimum code layer and incomplete mastic on ducts. We inspect new Conroe homes as carefully as 1980s ranches.',
      },
      {
        title: 'Vacation and second homes',
        body: 'Lake properties that sit closed up still need a tight envelope so you are not returning to a swampy, expensive-to-cool house.',
      },
      {
        title: 'Long supply runs in sprawling plans',
        body: 'Larger Conroe and lake houses push air a long way through hot attics. Sealing and insulating ducts is often the missing half of an “insulation” complaint.',
      },
    ],
    housingTitle: 'From downtown Conroe to the lake',
    housing:
      'We work in historic and in-town Conroe, Grand Central Park, and lake communities such as April Sound and Bentwater. Roof pitch, HVAC location, and whether the house is slab or crawl all change the spec. Lake-adjacent jobs get extra attention on air sealing so humidity is not invited in through the attic floor.',
    neighborhoodsTitle: 'Conroe communities we serve',
    neighborhoods: [
      'Grand Central Park',
      'April Sound',
      'Bentwater',
      'Lake Conroe',
      'Downtown Conroe',
      'Cut and Shoot area',
      'Panorama Village area',
      'FM 2854 corridor',
    ],
    servicesIntro:
      'Conroe and Lake Conroe jobs usually combine air sealing, cellulose, and duct sealing. Crawl space foam is added when the house is off-grade or floors feel wrong.',
    featuredServiceSlugs: [
      'cellulose',
      'air-sealing',
      'duct-sealing',
      'radiant-barriers',
      'crawl-space-insulation',
      'air-balancing',
    ],
    faqs: [
      {
        question: 'Do you serve the west side of Lake Conroe?',
        answer:
          'Yes. Lake communities around Conroe are in-area. If you are farther out, still request an estimate — we will confirm the visit.',
      },
      {
        question:
          'My Conroe home is less than five years old. Is this worth it?',
        answer:
          'If upstairs rooms lag or bills feel high for the square footage, yes. We often find incomplete air sealing and duct leaks even in recent builds.',
      },
      {
        question: 'Can you help with a musty smell after rain?',
        answer:
          'Sometimes the attic is the path; sometimes it is the crawl or the ducts. We inspect rather than guess, then recommend sealing, removal, or crawl work as needed.',
      },
    ],
    image: '/services/duct-sealing.jpg',
    imageAlt: 'Mastic-sealed HVAC ducts in a Conroe, TX attic',
  },
  {
    slug: 'dallas-tx',
    href: '/dallas-tx',
    name: 'Dallas, TX',
    shortName: 'Dallas',
    state: 'TX',
    region: 'dfw',
    metaTitle: 'Dallas TX Attic Insulation | DFW Spray Foam & Air Sealing',
    metaDescription:
      'Attic insulation in Dallas, TX. Cellulose, air sealing, radiant barriers, and duct work for North Texas homes. Call (214) 295-1004. Free estimates from First Defense Insulation.',
    heroHeadline: 'Dallas attic insulation for North Texas heat',
    heroSubhead:
      'North Texas summers load attics hard. We air seal, insulate, and fix leaky ducts so Dallas homes stay even without oversized air conditioners.',
    intro: [
      'First Defense Insulation serves Dallas with the same building-science approach we use in Houston — local DFW phone, crews who understand North Texas housing, and specs that start with air sealing rather than a pile of batts.',
      'Dallas attics see intense sun, clay-soil houses that shift, and a mix of 1920s–1950s bungalows, ranch homes, and newer infill. Each of those envelopes fails in different places. The free inspection is how we find yours.',
    ],
    highlights: [
      'Dedicated DFW line: (214) 295-1004',
      'Dallas proper and nearby in-area homes',
      'Air sealing and cellulose as the core upgrade',
      'Radiant barriers for west-facing roofs',
      'Duct sealing in attic-based HVAC',
      'Financing available after your estimate',
    ],
    whyTitle: 'What Dallas attics need that generic “blow-in” misses',
    why: [
      {
        title: 'North Texas radiant load',
        body: 'Dallas summers are brutal even without Houston’s humidity. A radiant barrier plus proper R-value stops heat at the roof and the attic floor instead of asking the A/C to outrun it.',
      },
      {
        title: 'Older housing with original plaster and cans',
        body: 'Lakewood, Oak Cliff, and similar neighborhoods often have knob-and-tube-era framing details, later can lights, and insulation that was never brought up to modern depth.',
      },
      {
        title: 'Ranch attics that look fine from the hatch',
        body: 'A glance at the opening does not show eave voids or duct leaks 30 feet away. We get into the attic and measure, then quote what will actually change comfort.',
      },
      {
        title: 'Ducts that leak into unconditioned space',
        body: 'Many Dallas systems still live in the attic. Mastic sealing and duct insulation keep supply air from picking up 130°F attic heat on the way to the register.',
      },
    ],
    housingTitle: 'Dallas construction from bungalows to infill',
    housing:
      'We work in historic districts, mid-century ranches, and newer Dallas builds. Older homes may need careful air sealing around chimneys and later electrical. Newer homes still miss mastic on takeoffs. Crawl and pier-and-beam details show up in parts of Oak Cliff and East Dallas — we inspect those as well as the attic.',
    neighborhoodsTitle: 'Dallas areas we serve',
    neighborhoods: [
      'Lakewood',
      'Preston Hollow',
      'Lake Highlands',
      'Oak Lawn',
      'Kessler Park',
      'Bishop Arts / North Oak Cliff',
      'Far North Dallas',
      'Casa Linda area',
    ],
    servicesIntro:
      'Dallas jobs typically start with air sealing and cellulose, then add a radiant barrier or duct sealing when the roof orientation and HVAC layout call for it.',
    featuredServiceSlugs: [
      'air-sealing',
      'cellulose',
      'radiant-barriers',
      'duct-sealing',
      'insulation-removal',
      'crawl-space-insulation',
    ],
    faqs: [
      {
        question: 'Do you have a Dallas phone number?',
        answer:
          'Yes. Call (214) 295-1004 for DFW estimates. Houston-area customers should use (713) 808-9853.',
      },
      {
        question: 'Is Dallas in a different climate zone than Houston?',
        answer:
          'Slightly drier, still a cooling-dominated climate. Recommended attic R-values stay in the same DOE ballpark. We still air seal first — North Texas heat will exploit every gap.',
      },
      {
        question: 'Do you serve Plano, Frisco, or Arlington from this page?',
        answer:
          'Our listed DFW cities are Dallas and Fort Worth. If you are in an adjacent suburb, request an estimate and we will confirm whether we can schedule a visit.',
      },
    ],
    image: '/services/air-balancing.jpg',
    imageAlt: 'Technician measuring airflow at a Dallas, TX supply register',
  },
  {
    slug: 'ft-worth-tx',
    href: '/ft-worth-tx',
    name: 'Ft. Worth, TX',
    shortName: 'Ft. Worth',
    state: 'TX',
    region: 'dfw',
    metaTitle: 'Fort Worth TX Attic Insulation | Ft. Worth Air Sealing',
    metaDescription:
      'Attic insulation and air sealing in Fort Worth, TX. Cellulose, crawl space foam, and duct work. Call (214) 295-1004. Free estimates from First Defense Insulation.',
    heroHeadline: 'Fort Worth attic insulation that can handle West Texas sun',
    heroSubhead:
      'Historic bungalows, west-side heat, and attic HVAC — we seal and insulate Ft. Worth homes so rooms stay even without running the A/C into the ground.',
    intro: [
      'Fort Worth combines older central neighborhoods with fast-growing edges and a sun load that is unforgiving. First Defense Insulation serves Ft. Worth on our DFW line with the same process: inspect, air seal, then insulate to a depth that matches how the house is built.',
      'If you have original batts, a hot west bedroom, or ducts that were never sealed, a free comfort inspection is the fastest way to see whether cellulose, foam, removal, or duct work should come first.',
    ],
    highlights: [
      'Dedicated DFW line: (214) 295-1004',
      'Fort Worth historic and suburban homes',
      'Air sealing before new insulation',
      'Crawl space foam where houses sit off-grade',
      'Duct sealing and insulation in hot attics',
      'BBB A-rated · financing available',
    ],
    whyTitle: 'Ft. Worth attic and crawl issues we plan for',
    why: [
      {
        title: 'West-facing heat on older roofs',
        body: 'Fort Worth sun is intense. Thin insulation and no radiant control turn upstairs rooms into afternoon ovens. We pair R-value with air sealing — and a radiant barrier when the roof deck is the problem.',
      },
      {
        title: 'Craftsman and bungalow details',
        body: 'Near-southside and TCU-area homes have knee walls, small hatches, and later mechanicals stuffed into old attics. Those need a careful install, not a rushed blow-and-go.',
      },
      {
        title: 'Off-grade floors in older stock',
        body: 'Some Ft. Worth houses leak under the floor as much as through the attic. Crawl insulation and air sealing belong in the same conversation as the roof.',
      },
      {
        title: 'Suburban edges with attic air handlers',
        body: 'Alliance-area and west-side two-stories repeat the same DFW pattern: long ducts, leaky takeoffs, builder-grade depth. We treat ducts as part of the insulation job.',
      },
    ],
    housingTitle: 'From Ridglea to new west-side builds',
    housing:
      'Fort Worth is not a single attic type. We specify around plaster-era framing in older neighborhoods and around production two-stories on the edge of town. If vermiculite or damaged insulation is present, we talk about professional removal before anyone adds a new layer.',
    neighborhoodsTitle: 'Fort Worth areas we serve',
    neighborhoods: [
      'TCU / Mistletoe Heights',
      'Arlington Heights',
      'Westover Hills',
      'Ridglea',
      'Near Southside',
      'Cultural District area',
      'Alliance area',
      'Wedgwood area',
    ],
    servicesIntro:
      'Ft. Worth projects usually combine air sealing and cellulose, with crawl space foam or duct sealing when the inspection shows leaks below or in the attic mechanicals.',
    featuredServiceSlugs: [
      'cellulose',
      'air-sealing',
      'crawl-space-insulation',
      'radiant-barriers',
      'duct-sealing',
      'insulation-removal',
    ],
    faqs: [
      {
        question: 'Is it Fort Worth or Ft. Worth on your site?',
        answer:
          'We use Ft. Worth in navigation to match our service-area list, but we serve Fort Worth, Texas. Call (214) 295-1004 for a DFW estimate.',
      },
      {
        question: 'Do you work in historic Fort Worth neighborhoods?',
        answer:
          'Yes. We are used to tight hatches, knee walls, and protecting finished interiors. Attic work does not change the street appearance of the home.',
      },
      {
        question: 'Can I finance a Fort Worth insulation project?',
        answer:
          'Yes. Review EnerBank USA and Foundation Finance Company options after your free estimate, or see our financing page for program details.',
      },
    ],
    image: '/services/crawl-space-insulation.jpg',
    imageAlt: 'Crawl space spray foam insulation in a Fort Worth, TX home',
  },
];

const areaBySlug = new Map(serviceAreas.map((area) => [area.slug, area]));

export function getServiceArea(slug: string): ServiceArea | undefined {
  return areaBySlug.get(slug);
}

export function getNearbyServiceAreas(slug: string, count = 5): ServiceArea[] {
  const current = getServiceArea(slug);
  if (!current) return serviceAreas.slice(0, count);
  const sameRegion = serviceAreas.filter(
    (area) => area.slug !== slug && area.region === current.region,
  );
  const otherRegion = serviceAreas.filter(
    (area) => area.slug !== slug && area.region !== current.region,
  );
  return [...sameRegion, ...otherRegion].slice(0, count);
}

export function isServiceAreaPath(pathname: string): boolean {
  return serviceAreas.some((area) => pathname === area.href);
}
