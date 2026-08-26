export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceBenefit = {
  title: string;
  body: string;
};

export type ServiceSection = {
  title: string;
  body: string;
};

export type Service = {
  slug: string;
  href: string;
  name: string;
  formValue: string;
  eyebrow: string;
  description: string;
  heroHeadline: string;
  heroSubhead: string;
  intro: string[];
  image: string;
  imageAlt: string;
  icon: string;
  bullets: string[];
  benefits: ServiceBenefit[];
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  includeInForm: boolean;
  metaTitle: string;
  metaDescription: string;
};

export const services: Service[] = [
  {
    slug: 'cellulose',
    href: '/attic-insulation/cellulose',
    name: 'Cellulose Insulation',
    formValue: 'Cellulose Insulation',
    eyebrow: 'Blown-In · Recycled · High R-Value',
    description:
      'Premium blown-in cellulose that fills every gap in your attic, delivering a superior R-value, quieter rooms, and lower energy bills — made from recycled materials.',
    heroHeadline: 'Blown-in cellulose insulation for Houston attics',
    heroSubhead:
      'A dense thermal blanket that keeps heat out in summer, warmth in during winter, and energy costs under control.',
    intro: [
      'Upgrade your home with blown-in cellulose insulation designed for Texas heat. Cellulose delivers a high R-value, consistent indoor temperatures, and lower heating and cooling costs — without the gaps that fiberglass batts leave behind.',
      'Our crews air seal first, then blow cellulose to recommended depths so every corner of the attic is covered. The result is a quieter, more comfortable home and a material that is made primarily from recycled newspaper.',
    ],
    image: '/services/cellulose-insulation.jpg',
    imageAlt: 'Blown-in cellulose insulation covering a residential attic floor',
    icon: 'Home',
    bullets: [
      'Superior R-value vs. traditional fiberglass batts',
      'Blown over existing insulation in many attics',
      'Class-1 fire rating with borate treatment',
      'Mold, pest, and moisture resistant',
      'Excellent soundproofing',
      'Most projects complete in 4–6 hours',
    ],
    benefits: [
      {
        title: 'Effective',
        body: 'Cellulose offers a higher R-value than fiberglass batts and holds its loft over time. It will not compress the way batts do, and pests are far less likely to damage it.',
      },
      {
        title: 'Quick installation',
        body: 'In many homes cellulose can be blown over existing insulation — no messy full tear-out. Air sealing is still done first so the new material actually performs.',
      },
      {
        title: 'Safe',
        body: 'Treated with a non-toxic borate solution, cellulose carries a Class-1 fire rating — the highest available — and resists mold and pests.',
      },
      {
        title: 'Environmentally friendly',
        body: 'Cellulose is a green product made primarily from recycled newspaper. Combined with energy savings, it is a strong choice for eco-conscious homeowners.',
      },
    ],
    sections: [
      {
        title: 'How we install blown-in cellulose',
        body: 'We use a professional blower to fill the attic to recommended insulation levels. The blanket creates a continuous thermal barrier. Where homeowners use the attic for storage, cellulose can be installed behind plywood dams while air sealing foam closes remaining gaps in the attic floor.',
      },
      {
        title: 'Built-in fire resistance and moisture control',
        body: 'Borate treatment gives cellulose fire resistance and helps limit mold and mildew. Whether you need attic coverage or wall-cavity fill, loose-fill application reaches corners batts miss.',
      },
      {
        title: 'Recommended R-value for Houston homes',
        body: 'The Department of Energy recommends attic insulation between R-38 and R-49 depending on climate. Blown cellulose is one of the most efficient ways to reach that target in existing Houston homes.',
      },
    ],
    faqs: [
      {
        question: 'Can cellulose be installed over existing insulation?',
        answer:
          'Often yes. Cellulose is commonly blown over existing material after air sealing. If the old insulation is wet, moldy, pest-contaminated, or contains vermiculite, we recommend removal first.',
      },
      {
        question: 'Is cellulose messy?',
        answer:
          'Professional installation is contained to the attic. We protect living spaces, use a blower for speed, and clean up the job site before we leave.',
      },
      {
        question: 'Does cellulose settle over time?',
        answer:
          'We install to a density that accounts for settling so you still meet the target R-value after the material finds its place.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Blown-In Cellulose Insulation Houston TX',
    metaDescription:
      'Professional blown-in cellulose insulation in Houston and DFW. High R-value, recycled materials, air sealing included. Free estimates from First Defense Insulation.',
  },
  {
    slug: 'radiant-barriers',
    href: '/radiant-barriers',
    name: 'Radiant Barriers',
    formValue: 'Radiant Barriers',
    eyebrow: 'Reflective Foil · Texas Heat',
    description:
      'Reflective foil installed under the roof deck that blocks 95–97% of radiant heat before it cooks your attic — a must in Houston summers.',
    heroHeadline: "Houston's radiant barrier insulation contractor",
    heroSubhead:
      'Stop attic heat at the roof. A radiant barrier reflects solar energy before it loads your insulation and your A/C.',
    intro: [
      'Houston attics regularly climb past 140°F. A radiant barrier is a sheet of highly reflective material — typically aluminum — installed under the roof to bounce solar heat away from the living space.',
      'By stapling reflective foil to the underside of the rafters, we reduce heat gain, ease the load on your HVAC system, and help indoor temperatures stay more stable through Texas summers.',
    ],
    image: '/services/radiant-barrier.jpg',
    imageAlt: 'Radiant barrier foil installed on the underside of attic roof rafters',
    icon: 'Sun',
    bullets: [
      'Reflects 95–97% of radiant heat',
      'Lowers attic temperatures and cooling costs',
      'Works with existing attic insulation',
      'Ideal for asphalt shingles and unshaded roofs',
      'Must face an open air space to perform',
      'ASTM E84 Class A fire-rated materials',
    ],
    benefits: [
      {
        title: 'Lower energy bills',
        body: 'Cooler attics mean your air conditioner runs less and uses less energy during Houston’s longest, hottest months.',
      },
      {
        title: 'Pairs with insulation',
        body: 'Radiant barriers do not replace R-value. They work alongside cellulose or spray foam to stop radiant heat that insulation alone cannot block.',
      },
      {
        title: 'More even comfort',
        body: 'Less heat radiating through the ceiling means fewer upstairs hot rooms and less thermostat chasing.',
      },
      {
        title: 'HVAC protection',
        body: 'Ducts and air handlers in the attic operate in a milder environment, which reduces wear and wasted cooling.',
      },
    ],
    sections: [
      {
        title: 'How a radiant barrier works',
        body: 'A radiant barrier functions as a heat mirror. It reflects 95–97% of the sun’s radiant waves so they are not absorbed by attic insulation and the home’s structure. Performance is measured by reflectivity, not R-value — a radiant barrier has no meaningful R-value of its own.',
      },
      {
        title: 'Where it should be installed',
        body: 'We staple the barrier to the underside of the roof rafters so it faces an open air space. Installation must not block attic ventilation, and material is kept clear of electrical wiring and heat-producing fixtures. Building codes require ASTM E84 Class A fire ratings.',
      },
      {
        title: 'Radiant barrier vs. spray foam',
        body: 'They solve different problems. Spray foam provides high R-value and a full air seal. A radiant barrier is the more affordable way to specifically block summer radiant heat in hot climates. Many Houston homes benefit from both as part of a complete attic system.',
      },
    ],
    faqs: [
      {
        question: 'Does a radiant barrier really work in Houston?',
        answer:
          'Yes. In sunny, hot climates it significantly lowers attic temperatures and summer cooling costs by reflecting most of the sun’s radiant heat.',
      },
      {
        question: 'What are the limitations?',
        answer:
          'It provides almost no winter insulation value. Dust can reduce performance over time. It is ineffective unless it faces an open air space.',
      },
      {
        question: 'Will it replace my attic insulation?',
        answer:
          'No. A radiant barrier is a complement, not a substitute. Homes still need proper R-value and air sealing for year-round performance.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Radiant Barrier Installation Houston TX',
    metaDescription:
      'Professional radiant barrier installation in Houston. Reflect 95–97% of attic heat, lower cooling bills, and stay comfortable. Free estimates from First Defense Insulation.',
  },
  {
    slug: 'air-sealing',
    href: '/air-sealing',
    name: 'Air Sealing',
    formValue: 'Air Sealing',
    eyebrow: 'Energy Loss Prevention',
    description:
      'We find and seal the gaps that let conditioned air escape into the attic — the first step toward real efficiency, not just more insulation.',
    heroHeadline: 'Expert attic air sealing in Houston',
    heroSubhead:
      'Insulation cannot do its job if air is leaking through the attic floor. We close those paths so your HVAC stops wasting energy.',
    intro: [
      'Gaps and cracks in the attic are part of every home. Without air sealing, that leakage quietly drives up bills and creates rooms that never feel right. First Defense Insulation identifies problem areas and seals them so air no longer moves freely between living space and attic.',
      'If you have high heating and cooling costs or uncomfortable rooms, air sealing is usually the highest-impact first step — and we include it before adding insulation.',
    ],
    image: '/services/air-sealing.jpg',
    imageAlt: 'Expanding foam air sealing around attic penetrations and a recessed light',
    icon: 'Wind',
    bullets: [
      'Attic floor and ceiling penetrations sealed',
      'Recessed lights, pipes, and wiring',
      'Chimney chases, hatches, and drop stairs',
      'HVAC chases, vents, and registers',
      'Reduces allergen and humidity infiltration',
      'Always recommended before adding insulation',
    ],
    benefits: [
      {
        title: 'Winter savings',
        body: 'Warm air rises. Without a sealed attic floor, heated air leaks into the attic and your furnace runs longer to keep up.',
      },
      {
        title: 'Summer comfort',
        body: 'Hot, humid attic air otherwise migrates into the rooms below. Sealing those paths keeps upstairs bedrooms from baking.',
      },
      {
        title: 'Healthier indoor air',
        body: 'Closing leaks also limits dust, pollen, and moisture that travel with uncontrolled air movement.',
      },
      {
        title: 'Insulation that actually works',
        body: 'Air moving through insulation deposits dirt and cuts R-value. Air sealing first protects the performance of whatever you install next.',
      },
    ],
    sections: [
      {
        title: 'How we seal an attic',
        body: 'We inspect and identify leak points, then use expanding foam and the right materials for each detail. Recessed can lights that cannot be covered with batts by code are a classic example — leaving them open allows major airflow. Sealing around the fixture the right way stops that loss without violating code.',
      },
      {
        title: 'Common leak locations',
        body: 'Plumbing and wiring penetrations, HVAC duct chases, chimney chases, attic hatches and drop-down stairs, recessed lights, and exhaust fans. Most Houston homes have several of these, even after a previous insulation job.',
      },
    ],
    faqs: [
      {
        question: 'Do I still need air sealing if I add more insulation?',
        answer:
          'Yes. Adding insulation over leaks is like putting on a heavier coat with the zipper open. Air sealing first is what makes the new R-value count.',
      },
      {
        question: 'Is foam around recessed lights safe?',
        answer:
          'We use methods appropriate to the fixture type and code. Insulation-contact-rated lights and proper dams or foam details keep the assembly safe and effective.',
      },
      {
        question: 'How long does air sealing take?',
        answer:
          'It depends on attic size and the number of penetrations. It is typically completed the same day as insulation on residential jobs.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Attic Air Sealing Houston TX',
    metaDescription:
      'Professional attic air sealing in Houston and DFW. Stop energy loss through gaps, recessed lights, and chases. Free estimates from First Defense Insulation.',
  },
  {
    slug: 'how-insulation-works',
    href: '/how-insulation-works',
    name: 'How Insulation Works',
    formValue: 'Attic Insulation',
    eyebrow: 'Building Science',
    description:
      'Understand R-value, heat transfer, and why voids, compression, air leaks, and moisture quietly destroy insulation performance.',
    heroHeadline: 'How insulation actually works',
    heroSubhead:
      'The science behind comfort and efficiency — and what goes wrong in Houston attics when insulation is installed poorly or left unsealed.',
    intro: [
      'Insulation exists to slow heat transfer: keeping paid-for heating inside during winter and keeping hot, humid outdoor air from driving indoor temperatures in summer. When you understand how it works, it is easier to see why some attics fail even after a previous “insulation job.”',
      'First Defense Insulation uses building science — not guesswork — to specify air sealing, attic insulation, and duct work that match your home and Houston’s climate.',
    ],
    image: '/services/how-insulation-works.jpg',
    imageAlt: 'Attic insulation layers showing how thermal barriers slow heat transfer',
    icon: 'BookOpen',
    bullets: [
      'R-value measures resistance to heat flow',
      'DOE recommends R-38 to R-49 in attics',
      'Voids, compression, air, and moisture kill performance',
      'Air sealing is essential before adding material',
      'Cellulose is an efficient way to hit target R-value',
      'Every home needs a site-specific plan',
    ],
    benefits: [
      {
        title: 'Voids',
        body: 'Missing insulation — from poor install or code gaps around non-IC recessed lights — lets heat move by convection and radiation. Research has shown a 4% void in fiberglass batts can cut effectiveness by about 50%.',
      },
      {
        title: 'Compression',
        body: 'When fiberglass batts are stuffed or crushed, the trapped air pockets that provide R-value disappear. Compressed batts do not perform at their labeled rating.',
      },
      {
        title: 'Air movement',
        body: 'Air passing through insulation deposits dirt in those air pockets and reduces resistance to heat flow. Clean, still air is what insulation needs — which is why air sealing comes first.',
      },
      {
        title: 'Moisture',
        body: 'Wet insulation loses R-value because water fills the air pockets that should resist heat. Houston humidity makes this a year-round risk in leaky attics and crawl spaces.',
      },
    ],
    sections: [
      {
        title: 'What R-value really means',
        body: 'R-value is resistance to heat flow. Higher R-value means more insulating power. It is described both per inch and as a total assembly. The Department of Energy recommends attic insulation between R-38 and R-49 depending on climate. Blown cellulose is one of the most efficient ways to reach that range in existing homes.',
      },
      {
        title: 'Insulation is only half the system',
        body: 'A thick layer over a leaky attic floor still allows conditioned air to escape. We combine the right material, the right depth, and air sealing — plus duct work when attic ducts are wasting cooled air — so the whole envelope performs.',
      },
    ],
    faqs: [
      {
        question: 'Is more insulation always better?',
        answer:
          'Only if air leaks are sealed and the material is installed to the correct density and coverage. Piling insulation over voids, wet material, or leaky cans will not deliver the R-value on the bag.',
      },
      {
        question: 'What R-value do Houston homes need?',
        answer:
          'Most Houston attics should target the DOE range of R-38 to R-49. We confirm the right depth for the product we install during the free inspection.',
      },
      {
        question: 'Why not just add batts?',
        answer:
          'Batts leave gaps at edges, wiring, and irregular framing. They also compress easily. Blown cellulose or spray foam typically covers those details more completely in existing attics.',
      },
    ],
    includeInForm: false,
    metaTitle: 'How Insulation Works | Attic R-Value Houston',
    metaDescription:
      'Learn how attic insulation works, what R-value means, and why voids, air leaks, and moisture ruin performance. First Defense Insulation, Houston & DFW.',
  },
  {
    slug: 'crawl-space-insulation',
    href: '/crawl-space-insulation',
    name: 'Crawl Space Insulation',
    formValue: 'Crawl Space Insulation',
    eyebrow: 'Moisture · Mold · Comfort',
    description:
      'Closed-cell spray foam, encapsulation, and dehumidification that stop cold floors, musty air, and energy loss from Houston crawl spaces.',
    heroHeadline: 'Crawl space insulation for Houston homes',
    heroSubhead:
      'Humid, leaky crawl spaces waste energy and damage indoor air. We insulate, seal, and dry them the right way.',
    intro: [
      'Crawl spaces are easy to ignore until floors feel cold, bills climb, or the house smells musty. Pier-and-beam homes in Houston leak outside air under the floor — hot and humid in summer, chilly in winter — which leads to discomfort, mold risk, and wasted HVAC.',
      'First Defense Insulation specializes in crawl space insulation and encapsulation. We evaluate the space and recommend closed-cell spray foam, rigid foam, vapor barriers, and dehumidification based on how your home is built.',
    ],
    image: '/services/crawl-space-insulation.jpg',
    imageAlt: 'Encapsulated crawl space with spray foam walls and a vapor barrier floor liner',
    icon: 'ArrowDownToLine',
    bullets: [
      'Closed-cell spray foam for high R-value and moisture control',
      'Crawl space encapsulation with heavy-duty liner',
      'Rim joist sealing and wall insulation',
      'Drainage and dehumidifier options',
      'Warmer floors and better indoor air',
      'Free crawl space evaluations',
    ],
    benefits: [
      {
        title: 'Stop outside air',
        body: 'Summer humidity condenses on cool wood and old fiberglass. Winter air chills floors. Sealing and insulating the crawl space keeps that air out of the home.',
      },
      {
        title: 'Protect structure',
        body: 'Chronic moisture feeds mold and wood rot. Left alone, that can sag floors and push odors into living space.',
      },
      {
        title: 'Deny pests a home',
        body: 'Termites, rodents, and insects thrive on shelter and moisture. A sealed, dry crawl space removes both.',
      },
      {
        title: 'Replace failed batts',
        body: 'Old fiberglass between joists absorbs moisture, sags, and creates thermal bypass. Closed-cell foam and encapsulation do not fail that way.',
      },
    ],
    sections: [
      {
        title: 'Closed-cell spray foam',
        body: 'Closed-cell foam delivers high R-value per inch and resists moisture drive in Texas humidity. About two inches at the rim and walls can cut infiltration and help control vapor. It is also a strong option where codes require a vented crawl for flood considerations.',
      },
      {
        title: 'Encapsulation',
        body: 'When the goal is a fully conditioned, dry crawl, we address water first, then insulate walls, install a heavy-duty liner over floors and walls, seal vents and rim joists, and add dehumidification to hold relative humidity in a healthy range.',
      },
      {
        title: 'The right sequence matters',
        body: 'Drainage and standing water come first. Mold should be treated before you seal a space closed. Then vapor barrier, vent sealing, insulation, and a dehumidifier. Skipping steps is how crawl space jobs fail.',
      },
    ],
    faqs: [
      {
        question: 'Should a Houston crawl space stay vented?',
        answer:
          'It depends on code, flood design, and the home. Some spaces must remain vented; others perform far better encapsulated. We inspect and recommend the path that matches your house.',
      },
      {
        question: 'Will this fix cold floors?',
        answer:
          'Insulating and air sealing the crawl space is one of the most effective ways to warm floors and stabilize rooms above.',
      },
      {
        question: 'Do I need a dehumidifier?',
        answer:
          'On encapsulated crawls, a dedicated dehumidifier is often what keeps humidity low enough that mold cannot take hold year-round.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Crawl Space Insulation Houston TX',
    metaDescription:
      'Crawl space insulation and encapsulation in Houston. Closed-cell spray foam, vapor barriers, and moisture control. Free evaluations from First Defense Insulation.',
  },
  {
    slug: 'insulation-removal',
    href: '/insulation-removal',
    name: 'Insulation Removal',
    formValue: 'Insulation Removal',
    eyebrow: 'Old · Damaged · Contaminated',
    description:
      'Safe vacuum removal of wet, moldy, pest-damaged, or outdated attic and crawl space insulation — then a clean surface ready for a proper reinstall.',
    heroHeadline: 'Insulation removal in Houston attics, crawl spaces, and walls',
    heroSubhead:
      'When insulation is wet, dirty, or hiding air leaks, adding more on top will not fix the problem. We remove it the right way.',
    intro: [
      'If insulation has been damaged by leaks, mold, rodents, fire, smoke, or years of dust and debris, it has already lost the properties you paid for. Removal is often the only honest next step before a high-performance install.',
      'Attic and crawl space tear-outs are hot, tight, and unpleasant. First Defense Insulation uses industrial vacuums, containment, and trained crews so living spaces stay protected and contaminated material leaves the property.',
    ],
    image: '/services/insulation-removal.jpg',
    imageAlt: 'Industrial vacuum hose removing old insulation from a residential attic',
    icon: 'Trash2',
    bullets: [
      'Industrial vacuum removal of blown-in material',
      'Batt removal by vacuum or bagged by hand',
      'Protection from dust and debris in living space',
      'Prep for air sealing and new insulation',
      'Proper landfill or hazardous-waste disposal',
      'Same-day removal and reinstall available',
    ],
    benefits: [
      {
        title: 'Performance restored',
        body: 'Damaged insulation cannot stop heat, resists moisture poorly, and is more prone to mold. Clean removal lets the new system perform as designed.',
      },
      {
        title: 'Hidden problems found',
        body: 'Old insulation often covers missing air sealing, roof leaks, or pest damage. Removal is how those issues get fixed instead of buried.',
      },
      {
        title: 'Health and safety',
        body: 'Attics can exceed 140°F. Professional equipment and PPE keep contaminants out of the house and crews working safely.',
      },
      {
        title: 'Not a DIY bargain',
        body: 'Equipment rental, dumpsters, disposal, and two days of attic work add up. Crews typically remove 1,000–1,300 square feet in a day with the right vacuum.',
      },
    ],
    sections: [
      {
        title: 'Can I just add insulation over the old stuff?',
        body: 'Sometimes. More often, problems are hidden underneath. If air sealing was never done, more insulation will not stop the leaks. Vermiculite may contain asbestos and requires professional handling. When in doubt, we evaluate for free.',
      },
      {
        title: 'How blown-in material is removed',
        body: 'A large industrial vacuum pulls old insulation through a hose into removal bags — similar in idea to vacuuming a car, at job-site scale. That containment also limits airborne dust and allergens in the home.',
      },
      {
        title: 'Where the old insulation goes',
        body: 'Contaminated insulation cannot be reused. There are no local recycling options for this material in Houston. We haul it to the landfill. If asbestos is present, it goes to a hazardous-waste facility.',
      },
    ],
    faqs: [
      {
        question: 'How long does removal take?',
        answer:
          'It depends on debris, roof pitch, and ductwork in the way. Clean material is faster. Professionals typically clear 1,000–1,300 square feet per day.',
      },
      {
        question: 'Will you reinstall the same day?',
        answer:
          'Often yes. Many residential jobs combine removal, air sealing, and new cellulose or foam in a single visit.',
      },
      {
        question: 'What about asbestos?',
        answer:
          'Suspect vermiculite or other hazardous materials are tested and handled under proper protocols. Never disturb that material yourself.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Insulation Removal Houston TX | Attic & Crawl Space',
    metaDescription:
      'Professional insulation removal in Houston. Vacuum tear-out of damaged, wet, or contaminated attic and crawl space insulation. Free evaluations.',
  },
  {
    slug: 'duct-sealing',
    href: '/duct-insulation/duct-sealing',
    name: 'Duct Sealing',
    formValue: 'Duct Sealing',
    eyebrow: 'Mastic · Spray Foam · Efficiency',
    description:
      'Leaky ducts can dump 20–30% of your cooled air into the attic. We seal joints with mastic or spray foam so air reaches the rooms you pay to condition.',
    heroHeadline: 'Duct sealing that stops wasted air',
    heroSubhead:
      'Joints, screws, and gaps make most duct systems leaky. We close those leaks so your HVAC stops heating and cooling the attic.',
    intro: [
      'Ductwork is a huge part of comfort and energy use. Because of joints, screw holes, and disconnected runs, many systems leak conditioned air before it ever reaches a register. That means longer HVAC cycles, hot and cold rooms, and higher bills.',
      'First Defense Insulation evaluates the system and seals it with duct mastic, spray foam encapsulation, or both — then recommends duct insulation so the air you paid to cool stays at temperature on the way to each room.',
    ],
    image: '/services/duct-sealing.jpg',
    imageAlt: 'HVAC duct joints sealed with mastic in a residential attic',
    icon: 'GitBranch',
    bullets: [
      'Mastic sealing at joints and connections',
      'Spray foam encapsulation for full coverage',
      'Leak detection before we work',
      'Pairs with duct insulation for best results',
      'Compatible with existing HVAC systems',
      'Cuts wasted energy and uneven rooms',
    ],
    benefits: [
      {
        title: 'Air that reaches the room',
        body: 'Sealed ducts deliver the volume your system was designed to move, so rooms come to temperature faster.',
      },
      {
        title: 'Lower bills',
        body: 'When 20–30% of airflow is not leaking into a 140°F attic, the equipment does not have to run as long.',
      },
      {
        title: 'Two professional methods',
        body: 'Duct mastic is formulated for joints and gaps. Spray foam seals the entire run and adds insulation in one step.',
      },
      {
        title: 'Better indoor air',
        body: 'Return leaks can pull attic dust and humidity into the system. Sealing those paths protects air quality too.',
      },
    ],
    sections: [
      {
        title: 'Duct mastic',
        body: 'A thick sealing compound applied at joints, takeoffs, and other leakage points. It stays flexible and is the standard for lasting mechanical seals.',
      },
      {
        title: 'Spray foam encapsulation',
        body: 'The full duct system is coated to close leaks and keep duct temperature more stable as air travels through a hot or cold attic.',
      },
      {
        title: 'Seal and insulate together',
        body: 'Sealing without insulation still lets attic heat soak into the airstream. We recommend pairing both so airflow and temperature hold until the register.',
      },
    ],
    faqs: [
      {
        question: 'How do I know my ducts are leaking?',
        answer:
          'High bills, rooms that never catch up, dusty attics around returns, and visible gaps at connections are common signs. We can inspect and show you what we find.',
      },
      {
        question: 'Is tape enough?',
        answer:
          'Cloth duct tape fails in attic heat. We use mastic and professional foam systems designed for HVAC sealing.',
      },
      {
        question: 'Do you replace ducts or only seal them?',
        answer:
          'We seal and insulate existing runs when they are sound. Damaged, crushed, or undersized ductwork can be repaired or replaced as part of the same visit.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Duct Sealing Houston TX | Attic HVAC Leaks',
    metaDescription:
      'Professional duct sealing in Houston using mastic and spray foam. Stop 20–30% air loss from leaky attic ducts. Free estimates from First Defense Insulation.',
  },
  {
    slug: 'duct-cleaning',
    href: '/duct-insulation/duct-cleaning',
    name: 'Duct Cleaning',
    formValue: 'Duct Cleaning',
    eyebrow: 'Air Quality · Allergens · Dust',
    description:
      'Professional duct cleaning that pulls dust, pollen, and debris out of the system so your HVAC is not circulating it through every room.',
    heroHeadline: 'Complete duct cleaning for healthier indoor air',
    heroSubhead:
      'Your ducts move more than air. Dust, pollen, and allergens build up and get blown through the house every time the system runs.',
    intro: [
      'Indoor air quality matters — especially in homes with asthma, allergies, or other respiratory concerns. Ductwork collects dust and pollen that the HVAC fan then distributes room to room.',
      'First Defense Insulation provides thorough duct cleaning to reduce that load, cut dust on surfaces and vents, and help the system move air the way it was designed to.',
    ],
    image: '/services/duct-cleaning.jpg',
    imageAlt: 'Professional HVAC duct cleaning vacuum attached to a floor vent',
    icon: 'Sparkles',
    bullets: [
      'Removes dust, pollen, and debris from duct runs',
      'Helps households managing allergies and asthma',
      'Reduces dust at vents and on indoor surfaces',
      'Improves airflow when buildup is restricting ducts',
      'Pairs well with sealing after cleaning',
      'Free estimates for Houston and DFW homes',
    ],
    benefits: [
      {
        title: 'Health',
        body: 'Allergens and pollen traveling through ducts aggravate respiratory issues. Cleaning reduces how much of that load is recirculated.',
      },
      {
        title: 'Cleanliness',
        body: 'Dust piling on furniture and black buildup on vent covers is a classic sign the ducts need attention.',
      },
      {
        title: 'Efficiency',
        body: 'Heavy debris can restrict airflow. When ducts cannot deliver full volume, the HVAC runs longer and costs more.',
      },
    ],
    sections: [
      {
        title: 'When cleaning makes sense',
        body: 'After renovations, pest activity, water or mold events, or years of never having the system cleaned — especially if occupants are sensitive to indoor air. Cleaning is also a smart prep step before sealing so contaminants are not locked into the system.',
      },
      {
        title: 'A system approach',
        body: 'Cleaning, sealing, insulation, and air balancing solve different problems. Many homeowners get the best result by combining cleaning with sealing so leaks do not pull attic dust back in.',
      },
    ],
    faqs: [
      {
        question: 'How often should ducts be cleaned?',
        answer:
          'It depends on pets, renovations, indoor smoking, and allergy concerns. We inspect and recommend based on what we see — not a one-size calendar.',
      },
      {
        question: 'Will cleaning fix a musty smell?',
        answer:
          'Sometimes. Odors can also come from crawl space moisture, dirty coils, or return leaks. We look at the whole picture.',
      },
      {
        question: 'Should I clean or seal first?',
        answer:
          'Cleaning first, then sealing, is the usual sequence so you are not encapsulating debris and so new seals are not pulling dirty attic air.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Duct Cleaning Houston TX | Indoor Air Quality',
    metaDescription:
      'Professional HVAC duct cleaning in Houston. Reduce dust, pollen, and allergens circulating through your home. Free estimates from First Defense Insulation.',
  },
  {
    slug: 'air-balancing',
    href: '/air-balancing',
    name: 'Air Balancing',
    formValue: 'Air Balancing',
    eyebrow: 'Airflow · Comfort · Pressure',
    description:
      'Uneven rooms, closed-door pressure problems, and long duct runs get diagnosed and corrected so supply and return air move the way they should.',
    heroHeadline: 'Air balancing for even comfort in every room',
    heroSubhead:
      'If some rooms never catch up while the thermostat is satisfied, the system may be unbalanced — not just under-insulated.',
    intro: [
      'HVAC systems have two branches: supply that delivers heated or cooled air, and return that brings air back to the equipment. Air balancing makes sure those volumes stay proportional so the house runs at a slight positive pressure instead of fighting itself.',
      'Long attic duct runs, single-return layouts, and closed bedroom doors are common in Houston homes. The result is hot and cold rooms, higher bills, and unfiltered outdoor air pulled through cracks.',
    ],
    image: '/services/air-balancing.jpg',
    imageAlt: 'Technician measuring airflow at a ceiling supply register with a balancing hood',
    icon: 'Gauge',
    bullets: [
      'Room-by-room airflow measurement',
      'Damper adjustments and leak correction',
      'Return additions where layout allows',
      'Transfer grilles and jumper ducts',
      'Helps two-story and long-run homes',
      'Improves comfort without oversized equipment',
    ],
    benefits: [
      {
        title: 'Even temperatures',
        body: 'Rooms far from the air handler often starve for airflow. Balancing restores volume so you are not cranking the thermostat for one bedroom.',
      },
      {
        title: 'Closed-door comfort',
        body: 'A house with one central return can pressurize bedrooms when doors close, cutting supply air and pulling outdoor humidity through leaks.',
      },
      {
        title: 'Better air quality',
        body: 'Imbalanced pressure pulls unfiltered air from the attic, garage, or crawl space. Correct flow keeps more of that air out.',
      },
      {
        title: 'Safer combustion',
        body: 'Severe depressurization can contribute to backdrafting of gas appliances. Proper pressure is a comfort issue and a safety issue.',
      },
    ],
    sections: [
      {
        title: 'How we diagnose it',
        body: 'A technician measures airflow in each room. Easier fixes include adjusting internal dampers and sealing duct leaks. Bigger layout issues may need new returns, transfer grilles, or jumper ducts.',
      },
      {
        title: 'Adding returns',
        body: 'If construction allows, dedicated returns in bedrooms that lack them is often the best long-term fix for closed-door pressure problems.',
      },
      {
        title: 'Transfer grilles and jumper ducts',
        body: 'A transfer grille in a wall or over a door gives air a path back to the central return. A jumper duct connects a pressurized room to the return through the attic so supply air can keep flowing when the door is shut.',
      },
    ],
    faqs: [
      {
        question: 'Is my system unbalanced if rooms feel uneven?',
        answer:
          'It is a leading cause — along with leaky ducts and poor insulation. We measure airflow rather than guessing, then recommend the smallest effective fix.',
      },
      {
        question: 'Is one return a problem?',
        answer:
          'It can be, especially with closed bedroom doors or a two-story home that only returns on one floor. Air needs a path back to the unit.',
      },
      {
        question: 'Will balancing replace a new A/C?',
        answer:
          'Often it restores comfort without new equipment. If the system is undersized or failing, we will say so — but many “weak A/C” complaints are actually airflow.',
      },
    ],
    includeInForm: true,
    metaTitle: 'Air Balancing Houston TX | Uneven Room Temperatures',
    metaDescription:
      'Professional air balancing in Houston. Fix hot and cold rooms, closed-door pressure issues, and poor airflow. Free estimates from First Defense Insulation.',
  },
];

export const serviceNavGroups: { label: string; slugs: string[] }[] = [
  {
    label: 'Attic Insulation',
    slugs: ['cellulose', 'radiant-barriers', 'air-sealing', 'how-insulation-works'],
  },
  {
    label: 'Crawl Space',
    slugs: ['crawl-space-insulation'],
  },
  {
    label: 'Insulation Removal',
    slugs: ['insulation-removal'],
  },
  {
    label: 'Ductwork Repair',
    slugs: ['duct-sealing', 'duct-cleaning', 'air-balancing'],
  },
];

const serviceBySlug = new Map(services.map((service) => [service.slug, service]));

export function getService(slug: string): Service | undefined {
  return serviceBySlug.get(slug);
}

export function formServices(): Service[] {
  return services.filter((service) => service.includeInForm);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  const group = serviceNavGroups.find((item) => item.slugs.includes(slug));
  const grouped = (group?.slugs ?? [])
    .filter((item) => item !== slug)
    .map((item) => getService(item))
    .filter((item): item is Service => Boolean(item));
  const rest = services.filter(
    (service) => service.slug !== slug && !grouped.some((item) => item.slug === service.slug),
  );
  return [...grouped, ...rest].slice(0, count);
}

export function isServicePath(pathname: string): boolean {
  return services.some((service) => pathname === service.href || pathname.startsWith(`${service.href}/`));
}
