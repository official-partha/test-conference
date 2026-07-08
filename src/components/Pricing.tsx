import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Student / Scholar',
    id: 'tier-student',
    href: '#',
    price: { Indian: '₹2,500', Intl: '$150' },
    description: 'For full-time students and PhD scholars.',
    features: [
      'Access to all technical sessions',
      'Conference kit and proceedings',
      'Lunch and refreshments',
      'Certificate of participation',
      'Access to student networking events',
    ],
    featured: false,
  },
  {
    name: 'Academic / Faculty',
    id: 'tier-faculty',
    href: '#',
    price: { Indian: '₹5,000', Intl: '$300' },
    description: 'For university faculty and academic researchers.',
    features: [
      'Access to all technical sessions',
      'Conference kit and proceedings',
      'Gala dinner invitation',
      'Lunch and refreshments',
      'Publication opportunities',
      'Access to VIP lounge',
    ],
    featured: true,
  },
  {
    name: 'Industry Professional',
    id: 'tier-industry',
    href: '#',
    price: { Indian: '₹8,000', Intl: '$450' },
    description: 'For professionals from corporate and R&D sectors.',
    features: [
      'Access to all technical sessions',
      'Conference kit and proceedings',
      'Gala dinner invitation',
      'Industry networking sessions',
      'Company branding on badge',
      'Access to VIP lounge',
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <div id="register" className="bg-[#FAFAFA] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-royal-600">Registration</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
            Registration Fees
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
          Choose the appropriate category. Early bird discounts end on October 1st.
        </p>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-3xl p-8 ring-1 ${
                tier.featured 
                  ? 'bg-navy-900 ring-navy-900 text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white ring-gray-200 text-navy-900'
              } xl:p-10 flex flex-col`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className={`text-lg/8 font-semibold ${tier.featured ? 'text-white' : 'text-navy-900'}`}>
                  {tier.name}
                </h3>
                {tier.featured && (
                  <p className="rounded-full bg-royal-600 px-2.5 py-1 text-xs/5 font-semibold text-white">
                    Most Popular
                  </p>
                )}
              </div>
              <p className={`mt-4 text-sm/6 ${tier.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {tier.description}
              </p>
              
              <div className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-semibold tracking-tight ${tier.featured ? 'text-white' : 'text-navy-900'}`}>
                  {tier.price.Indian}
                </span>
                <span className={`text-sm/6 font-semibold ${tier.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                  / Indian
                </span>
              </div>
              <div className="mt-1 flex items-baseline gap-x-1">
                <span className={`text-2xl font-semibold tracking-tight ${tier.featured ? 'text-gray-200' : 'text-gray-700'}`}>
                  {tier.price.Intl}
                </span>
                <span className={`text-sm/6 ${tier.featured ? 'text-gray-400' : 'text-gray-500'}`}>
                  / International
                </span>
              </div>

              <a
                href={tier.href}
                className={`mt-8 block rounded-full px-3 py-3 text-center text-sm/6 font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  tier.featured
                    ? 'bg-royal-600 text-white hover:bg-royal-500 focus-visible:outline-royal-600 shadow-sm'
                    : 'bg-navy-900 text-white hover:bg-navy-800 focus-visible:outline-navy-900'
                }`}
              >
                Proceed to Register
              </a>
              
              <ul className={`mt-8 space-y-3 text-sm/6 sm:mt-10 ${tier.featured ? 'text-gray-300' : 'text-gray-600'} flex-1`}>
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className={`h-6 w-5 flex-none ${tier.featured ? 'text-royal-400' : 'text-royal-600'}`}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
