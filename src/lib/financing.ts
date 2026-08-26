export type FinancingOption = {
  id: string;
  name: string;
  provider: string;
  summary: string;
  highlights: string[];
  applyUrl: string;
  applyLabel: string;
  disclaimer: string;
};

export const financingIntro =
  'Insulation upgrades pay for themselves over time — but the upfront cost should not keep you from a more comfortable, efficient home. First Defense Insulation partners with trusted lenders so you can spread payments over terms that fit your budget.';

export const financingOptions: FinancingOption[] = [
  {
    id: 'enerbank-prequalification',
    name: 'Prequalification',
    provider: 'EnerBank USA',
    summary:
      'See what you may qualify for with a soft credit check. Prequalification helps you plan your project budget before you commit — with no hard inquiry as part of the initial step.',
    highlights: [
      'Soft credit pull for prequalification',
      'Unsecured home improvement loans',
      'Terms from 12 to 144 months',
      'Ideal for attic, crawl space, and spray foam projects',
    ],
    applyUrl:
      'https://prequalification.enerbank.com/apply/loanproduct?sponsorPhoneNumber=8003275165&contractorNumber=601&loanCode=DMH4322',
    applyLabel: 'Start prequalification',
    disclaimer:
      'Credit and loans provided by Regions Bank d/b/a EnerBank USA, Member FDIC, (650 S Main St, Suite 1000, Salt Lake City, UT 84101) on approved credit, for a limited time. 8.99% to 24.49% fixed APR, subject to change. Minimum loan amounts apply. Interest starts accruing when funds are disbursed. Open line period payments due 90 days after origination and monthly thereafter during open line period. When open line period ends, the balance becomes a fixed rate installment loan; repayment terms vary from 12 to 144 months. Actual loan term may be shorter if less than the full approved amount of credit is used. First monthly loan payment due 30 days from the end of the open line period. Minimum monthly payments vary between $11.37 and $94.80 per $1,000 borrowed. The minimum monthly payment will be no less than $50.00.',
  },
  {
    id: 'enerbank-installment',
    name: 'Traditional Installment Loan',
    provider: 'EnerBank USA',
    summary:
      'Fixed-rate installment financing through EnerBank USA, a specialty home improvement lender backed by Regions Bank. Apply when you are ready to move forward with your insulation project.',
    highlights: [
      'Fixed APR from 8.99% to 24.49%',
      'Repayment terms from 12 to 144 months',
      'No home equity required',
      'Funds disbursed directly for approved projects',
    ],
    applyUrl:
      'https://application.enerbank.com/#/link?spnum=8003275165&cid=601&promo=DMH4322&loamt=',
    applyLabel: 'Apply for financing',
    disclaimer:
      'Credit and loans provided by Regions Bank d/b/a EnerBank USA, Member FDIC, (650 S Main St, Suite 1000, Salt Lake City, UT 84101) on approved credit, for a limited time. 8.99% to 24.49% fixed APR, subject to change. Minimum loan amounts apply. Interest starts accruing when funds are disbursed. Open line period payments due 90 days after origination and monthly thereafter during open line period. When open line period ends, the balance becomes a fixed rate installment loan; repayment terms vary from 12 to 144 months. Actual loan term may be shorter if less than the full approved amount of credit is used. First monthly loan payment due 30 days from the end of the open line period. Minimum monthly payments vary between $11.37 and $94.80 per $1,000 borrowed. The minimum monthly payment will be no less than $50.00.',
  },
  {
    id: 'foundation-finance',
    name: 'Retail Installment Financing',
    provider: 'Foundation Finance Company',
    summary:
      'Flexible retail installment contracts with promotional options that may include same-as-cash programs, subject to approval. Prequalification uses a soft credit pull so you can explore terms with less impact on your score.',
    highlights: [
      'Soft credit pull for prequalification',
      'Multiple promotional programs available',
      'Terms vary by creditworthiness',
      'Contact us to discuss the best offer for your project',
    ],
    applyUrl:
      'https://www.ffcapplication.com/?i=jXHyUu2sqwuEDIUa9RP9jZ6kho0qY1TU3l1CAXkmP2g=',
    applyLabel: 'Prequalify with Foundation Finance',
    disclaimer:
      'Financing subject to credit approval and acceptance by your contractor. Terms and conditions may apply and may vary. Contact your contractor to discuss available offers and to receive appropriate terms and disclosures upon approval. Prequalification is a soft credit pull. Upon the receipt of your completed credit application and signed financing documents a hard inquiry on your credit (that may affect your credit score) will occur.',
  },
];
