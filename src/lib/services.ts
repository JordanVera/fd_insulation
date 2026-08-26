export type Service = {
  slug: string;
  name: string;
  formValue: string;
  eyebrow: string;
  description: string;
  icon: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "attic-insulation",
    name: "Attic Insulation",
    formValue: "Attic Insulation",
    eyebrow: "Spray Foam · Blown-In · Batt",
    description:
      "Attic insulation is your home's first line of defense against Houston's brutal heat. We block intense roof heat from entering your living space, reducing strain on your A/C and directly lowering summer energy bills.",
    icon: "Home",
    bullets: [
      "Spray foam, blown cellulose & fiberglass batt",
      "Radiant barrier installation",
      "Inspection every 5 years recommended",
      "Full replacement after 20–30 years or damage",
      "Most projects complete in 4–6 hours",
      "Free on-site comfort inspections",
    ],
  },
  {
    slug: "spray-foam",
    name: "Spray Foam Insulation",
    formValue: "Spray Foam Insulation",
    eyebrow: "Open Cell · Closed Cell",
    description:
      "Spray foam seals air leaks with precision, expanding to fill gaps, cracks, and voids other insulation can't reach — delivering superior R-values, moisture resistance, and structural reinforcement.",
    icon: "Layers",
    bullets: [
      "Open-cell and closed-cell foam options",
      "Seals gaps, cracks, and penetrations",
      "Highest R-value per inch available",
      "Moisture and vapor barrier properties",
      "Thermal barrier and conditioned attic applications",
      "Residential and commercial projects",
    ],
  },
  {
    slug: "air-sealing",
    name: "Air Sealing",
    formValue: "Air Sealing",
    eyebrow: "Energy Loss Prevention",
    description:
      "Air sealing closes the gaps and cracks that silently drain your heating and cooling dollars. It improves indoor comfort, enhances efficiency, and reduces temperature swings throughout your home.",
    icon: "Wind",
    bullets: [
      "Attic floor and ceiling penetrations sealed",
      "Around recessed lights, pipes, and wiring",
      "Crawl space and rim joist sealing",
      "Blower door testing compatible",
      "Reduces allergen and pollutant infiltration",
      "Pairs with any insulation type",
    ],
  },
  {
    slug: "duct-services",
    name: "Duct Insulation & Sealing",
    formValue: "Duct Services",
    eyebrow: "Repair · Sealing · Cleaning",
    description:
      "Leaky, uninsulated ducts can waste 20–30% of your conditioned air before it reaches the room. Our comprehensive duct services restore airflow efficiency, cut energy waste, and improve indoor air quality.",
    icon: "GitBranch",
    bullets: [
      "Duct leak detection and sealing",
      "Duct insulation installation and wrap",
      "Full ductwork repair and replacement",
      "Duct cleaning for air quality improvement",
      "Air balancing for consistent comfort",
      "Compatible with all HVAC systems",
    ],
  },
  {
    slug: "crawl-space",
    name: "Crawl Space Insulation",
    formValue: "Crawl Space Insulation",
    eyebrow: "Moisture · Mold · Comfort",
    description:
      "Before Houston's humidity reaches its peak, our team treats your crawl space to manage moisture levels — keeping your home drier, preventing mold, and protecting structural integrity.",
    icon: "ArrowDownToLine",
    bullets: [
      "Spray foam and rigid foam insulation",
      "Vapor barrier installation",
      "Moisture and mold management",
      "Improves floor comfort above",
      "Reduces energy loss through floor",
      "Protects structural wood framing",
    ],
  },
  {
    slug: "insulation-removal",
    name: "Insulation Removal",
    formValue: "Insulation Removal",
    eyebrow: "Old · Damaged · Contaminated",
    description:
      "Old, damaged, or contaminated insulation needs to be fully removed before a fresh installation can perform at its best. We handle complete removal safely and efficiently.",
    icon: "Trash2",
    bullets: [
      "Old blown-in and batt removal",
      "Damaged or water-stained insulation",
      "Rodent-contaminated material removal",
      "Attic cleaning and prep for reinstall",
      "Full disposal and haul-away",
      "Same-day removal and reinstall available",
    ],
  },
];
