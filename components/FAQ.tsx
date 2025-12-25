import React from 'react';
import { HelpCircle } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is a Static Website?",
      answer: "A static website is made up of fixed HTML files that are delivered to the user's browser exactly as stored. Unlike dynamic sites that require a database and server-side processing for every request, static sites load instantly, are more secure, and cost significantly less to host."
    },
    {
      question: "Why should I choose Riplex Dev?",
      answer: "We combine years of coding expertise with modern AI tools to deliver websites that are not only beautiful but engineered for performance. We focus on 'Mobile First' design, ensuring your site looks perfect on phones, and we include essential features like SEO structure and speed optimization in every package."
    },
    {
      question: "Do I need to pay monthly fees?",
      answer: "No! Our development packages are one-time payments. You will only need to renew your Domain name and Hosting annually, which is standard for all websites. We guide you through the hosting setup process to keep your running costs minimal."
    },
    {
      question: "How long will it take to build my site?",
      answer: "We pride ourselves on speed. Our Basic Package is delivered within 24 hours. The Standard Package takes approximately 48 hours, depending on the content you provide. We work efficiently to get your business online as fast as possible."
    },
    {
      question: "Is SEO included in the packages?",
      answer: "Yes, we build every website with an SEO-friendly structure. This includes proper semantic HTML tags (H1, H2, etc.), meta descriptions, and Open Graph tags so your site looks great when shared on social media. This gives you a strong foundation for Google rankings."
    },
    {
      question: "Can I update the content myself?",
      answer: "For static websites, content updates typically require a developer. However, since we write clean, organized code, minor text changes are straightforward. If you anticipate needing frequent updates, let us know, and we can discuss a maintenance arrangement or hybrid solution."
    }
  ];

  return (
    <section id="faq" className="scroll-mt-24 py-16 md:py-24 bg-brand-dark relative border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal3D width="100%">
          <div className="text-center mb-12 md:mb-16">
            <div className="text-sm font-bold tracking-widest text-brand-red uppercase mb-2">Common Questions</div>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">Frequently Asked Questions</h2>
          </div>
        </Reveal3D>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {faqs.map((faq, index) => (
            <Reveal3D key={index} delay={index * 0.1}>
              <div className="h-full p-6 md:p-8 rounded-2xl bg-brand-accent border border-gray-800 hover:border-brand-red/30 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="mt-1 p-2 bg-brand-red/10 rounded-lg text-brand-red flex-shrink-0">
                    <HelpCircle size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal3D>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;