export type Review = {
  id: string;
  author: string;
  date: string;
  rating: number;
  service?: string;
  body: string;
};

/** Google Business Profile — used for “view more reviews” links */
export const googleReviews = {
  placeId: 'ChIJy-T6s1zNQIYRM15p-N0L5lU',
  rating: 5.0,
  count: 94,
  mapsUrl:
    'https://www.google.com/maps/place/?q=place_id:ChIJy-T6s1zNQIYRM15p-N0L5lU',
  writeReviewUrl:
    'https://search.google.com/local/writereview?placeid=ChIJy-T6s1zNQIYRM15p-N0L5lU',
} as const;

export const reviewsIntro =
  'Homeowners across Houston and DFW trust First Defense Insulation for attic insulation, spray foam, air sealing, crawl space work, and duct services. Here is what customers are saying on Google.';

/** Featured Google reviews — sourced from verified customer feedback */
export const reviews: Review[] = [
  {
    id: 'grace-matta',
    author: 'Grace Matta',
    date: 'August 2026',
    rating: 5,
    service: 'Air sealing & insulation',
    body: 'Amazing people who know what they are doing. If you want something that will last you a lifetime then look no further. Shad was super easy to talk and work with, very informative and honest. The crew on site, William and team were amazing and super nice! They work with conscience which is super rare these days.',
  },
  {
    id: 'randy-page',
    author: 'Randy Page',
    date: 'July 2026',
    rating: 5,
    service: 'Attic insulation',
    body: 'Shad and his team showed depth of knowledge and skill in addressing the humidity issues in my attic. Highly recommend.',
  },
  {
    id: 'scott-w',
    author: 'Scott W.',
    date: 'April 2026',
    rating: 5,
    service: 'Spray foam insulation',
    body: 'First Defense Insulation did a small spray foam insulation job for me and they are awesome! They worked me into their schedule due to my timeline and kept me informed about their arrival time the day of the job. Upon arrival, they checked the location, asked clarifying questions, and got to work. They also had me check the insulation after they got started to make sure I was happy with the thickness. Overall a great experience!',
  },
  {
    id: 'john-breeden',
    author: 'John Breeden',
    date: 'April 2026',
    rating: 5,
    service: 'Spray foam insulation',
    body: 'We had Shad and his team complete a complex, highly technical foam insulation job on our home, and the experience exceeded expectations from start to finish. Shad was incredibly responsive, communicative, and focused on delivering a top-tier customer experience. The workmanship was outstanding — so much so that our primary contractor specifically called out how impressed he was with the quality and precision of their work.',
  },
  {
    id: 'erik-kosobud',
    author: 'Erik Kosobud',
    date: 'March 2026',
    rating: 5,
    service: 'Crawl space & mold remediation',
    body: 'We have a 100-year-old pier-and-beam house and we have been dealing with some pretty significant mold problems over the past year. Shad was incredibly helpful in answering questions, explaining the process, and detailing the costs. When we went to trusted companies for referrals, they always sent us back to First Defense. Shad\'s team was up front about the moisture content in our home\'s framing and how being patient could lead to significant savings.',
  },
  {
    id: 'contractor-praise',
    author: 'Verified Google reviewer',
    date: 'April 2026',
    rating: 5,
    service: 'Spray foam insulation',
    body: 'What really set them apart was how they treated our home. They left the job site at least five times cleaner than when they arrived, which speaks volumes about their care and respect for the space. If you are looking for top-quality work you can truly depend on, look no further than Shad and his team.',
  },
];
