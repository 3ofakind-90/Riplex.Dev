import React from 'react';
import { Check, Star } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';
import { PricingTier } from '../types';

const Pricing: React.FC = () => {
  const tiers: PricingTier[] = [
    {
      id: 'basic',
      name: 'BASIC',
      price: '2,999৳',
      description: 'Perfect for personal portfolios or landing pages.',
      features: [
        '1 Page Website',
        'Mobile Responsive',
        'Call / WhatsApp Button',
        'Google Map Integration',
        'Delivery: 24 Hours'
      ],
      delay: 0
    },
    {
      id: 'standard',
      name: 'STANDARD',
      price: '4,999৳',
      description: 'Our most popular package for small businesses.',
      features: [
        '5 Pages Website',
        'SEO Friendly Structure',
        'Contact Form (Email-based)',
        'Free Hosting Guide',
        'Delivery: 48 Hours'
      ],
      recommended: true,
      delay: 0.2
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      price: '7,999৳',
      description: 'High-end design with 3D elements and interactions.',
      features: [
        '3D-style Frontend Dev',
        'Speed Optimization',
        'Image Optimization',
        'Domain Setup Guide',
        '7 Days Free Support'
      ],
      delay: 0.4
    }
  ];

  return (
    <section id="pricing" className="scroll-mt-24 py-16 md:py-24 bg-brand-accent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal3D width="100%">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-sm font-bold tracking-widest text-brand-red uppercase mb-2">Our Packages</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Transparent Pricing</h2>
            <p className="mt-4 text-gray-400">No hidden fees. One-time payment.</p>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <Reveal3D key={tier.id} delay={tier.delay}>
              <div className={`relative p-8 rounded-2xl transition-all duration-300 group flex flex-col items-center md:items-start
                ${tier.recommended 
                  ? 'bg-brand-dark border-2 border-brand-red shadow-2xl shadow-brand-red/20 scale-100 md:scale-105 md:-mt-4' 
                  : 'bg-brand-dark/50 border border-gray-800 hover:border-gray-600'
                }
              `}>
                {tier.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-red text-white px-4 py-1 rounded-full text-xs font-bold tracking-widest flex items-center gap-1 shadow-lg whitespace-nowrap">
                    <Star size={12} fill="white" /> MOST SOLD
                  </div>
                )}

                <h3 className={`text-xl font-bold font-display tracking-wider mb-2 ${tier.recommended ? 'text-brand-red' : 'text-white'}`}>
                  {tier.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-black text-white">{tier.price}</span>
                </div>
                <p className="text-sm text-gray-400 mb-8 h-auto min-h-[2.5rem] text-center md:text-left">{tier.description}</p>

                <ul className="space-y-4 mb-8 w-full">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300 text-sm">
                      <Check className="w-5 h-5 text-brand-red mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a 
                  href={`https://wa.me/8801843489299?text=Hi, I am interested in the ${tier.name} package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 rounded-lg text-center font-bold text-sm tracking-wide transition-all duration-300
                    ${tier.recommended
                      ? 'bg-brand-red text-white hover:bg-red-700 hover:shadow-lg hover:shadow-brand-red/30'
                      : 'bg-white text-brand-dark hover:bg-gray-200'
                    }
                  `}
                >
                  CHOOSE PLAN
                </a>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;