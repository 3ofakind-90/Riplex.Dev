import React from 'react';
import { Smartphone, Layout, Zap, Globe, ShieldCheck, MousePointerClick } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Layout className="w-8 h-8 text-brand-red" />,
      title: "Static Website Development",
      description: "We use modern AI technology to craft unique, blazing fast, and unbreakable frontend websites. No backend maintenance required."
    },
    {
      icon: <Smartphone className="w-8 h-8 text-brand-red" />,
      title: "Mobile First Design",
      description: "Your site will look perfect on every device, from the smallest iPhone SE to large desktop 4K monitors."
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-red" />,
      title: "Speed Optimization",
      description: "We optimize images and code to ensure near-instant load times, boosting your SEO rankings."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-red" />,
      title: "SEO Friendly Structure",
      description: "Semantic HTML tags, meta descriptions, and Open Graph tags ready for Google indexing."
    },
    {
      icon: <MousePointerClick className="w-8 h-8 text-brand-red" />,
      title: "Interactive Elements",
      description: "Modern animations, hover effects, and 3D interactions to keep your visitors engaged."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-red" />,
      title: "Secure & Reliable",
      description: "Hosted on Cloudflare's global network. 99.99% uptime and protection against DDoS attacks."
    }
  ];

  return (
    <section id="services" className="scroll-mt-24 py-16 md:py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D width="100%">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-sm font-bold tracking-widest text-brand-red uppercase mb-2">What We Do</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Premium Services</h2>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Reveal3D key={index} delay={index * 0.1} className="h-full">
              <div className="group p-6 md:p-8 rounded-2xl bg-brand-accent border border-gray-800 hover:border-brand-red/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-red/10 hover:-translate-y-2 h-full flex flex-col items-center md:items-start text-center md:text-left">
                <div className="mb-6 p-4 bg-brand-dark rounded-xl inline-block w-fit group-hover:scale-110 transition-transform duration-300 border border-gray-800">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-red transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;