import React, { useState } from 'react';
import { Check } from 'lucide-react';

const pricingData = [
  {
    title: 'Free',
    price: 0,
    period: 'month',
    description: 'Perfect for beginners to try out web scraping',
    features: [
      '5 pages per scraper',
      '100 scrapes per month',
      'Basic data extraction',
      'CSV export',
      'Email support'
    ],
    cta: 'Start for Free',
    highlight: false,
    mostPopular: false
  },
  {
    title: 'Pro',
    price: 29,
    period: 'month',
    description: 'For professionals who need more power',
    features: [
      'Unlimited pages per scraper',
      '1,000 scrapes per month',
      'Advanced data extraction',
      'All export formats',
      'Scheduled scraping',
      'API access',
      'Priority support'
    ],
    cta: 'Get Started',
    highlight: true,
    mostPopular: true
  },
  {
    title: 'Business',
    price: 99,
    period: 'month',
    description: 'For teams and high-volume needs',
    features: [
      'Unlimited pages per scraper',
      '10,000 scrapes per month',
      'Advanced data extraction',
      'All export formats',
      'Scheduled scraping',
      'API access',
      'Dedicated support',
      'Custom features',
      'Team collaboration'
    ],
    cta: 'Contact Sales',
    highlight: false,
    mostPopular: false
  }
];

const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-indigo-100 px-4 py-2 rounded-full text-indigo-700 font-medium text-sm mb-4">
            <span>Simple Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose the Plan That's Right for You
          </h2>
          <p className="text-lg text-gray-600">
            Whether you're just getting started or need advanced features, we have a plan that fits your needs.
          </p>
          
          <div className="mt-8 inline-flex p-1 bg-gray-100 rounded-lg">
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'monthly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                billingPeriod === 'yearly' 
                  ? 'bg-white text-gray-900 shadow-sm' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly <span className="text-green-600 font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? 'bg-gradient-to-b from-indigo-50 to-white border-2 border-indigo-500 shadow-xl scale-105 z-10' 
                  : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute top-0 inset-x-0 bg-indigo-600 text-white text-center text-sm font-medium py-1.5">
                  Most Popular
                </div>
              )}
              
              <div className={`p-8 ${plan.mostPopular ? 'pt-12' : ''}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h3>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    ${billingPeriod === 'yearly' ? (plan.price * 0.8).toFixed(0) : plan.price}
                  </span>
                  <span className="text-gray-600 ml-2">per {plan.period}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <a 
                  href="#cta" 
                  className={`block w-full py-3 rounded-lg text-center font-medium transition-colors ${
                    plan.highlight 
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </a>
                
                <div className="mt-8">
                  <p className="font-medium text-gray-900 mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gray-100 rounded-2xl p-8 md:p-12 max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Need a custom solution?</h3>
              <p className="text-gray-600">
                Contact our sales team for enterprise solutions, custom development, or special requirements.
              </p>
            </div>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium whitespace-nowrap"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;