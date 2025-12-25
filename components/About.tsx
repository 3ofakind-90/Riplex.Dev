import React from 'react';
import { Code, User } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';

const About: React.FC = () => {
  return (
    <section id="about" className="scroll-mt-24 py-16 md:py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <Reveal3D direction="left">
            <div className="relative">
              {/* Abstract Code/Visual Element */}
              <div className="w-full aspect-video md:aspect-square relative rounded-2xl overflow-hidden bg-brand-accent border border-gray-800 p-6 md:p-8 flex flex-col justify-between mb-6 shadow-2xl">
                 <div>
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent"></div>
                    <div className="font-mono text-xs md:text-sm text-gray-500 mb-4">
                        <span className="text-brand-red">const</span> agency = <span className="text-yellow-500">new</span> <span className="text-blue-400">RiplexDev</span>();<br/>
                        agency.<span className="text-yellow-500">initialize</span>(<span className="text-green-400">'Premium Quality'</span>);
                    </div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-4 mt-auto relative z-10">
                    <div className="p-3 md:p-4 bg-brand-dark rounded-lg border border-gray-700">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">3+</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 uppercase">Years Exp.</p>
                    </div>
                    <div className="p-3 md:p-4 bg-brand-dark rounded-lg border border-gray-700">
                        <h4 className="text-2xl md:text-3xl font-bold text-white mb-1">100%</h4>
                        <p className="text-[10px] md:text-xs text-gray-400 uppercase">Static Speed</p>
                    </div>
                 </div>

                 <Code className="absolute bottom-4 right-4 text-brand-red/10 w-24 h-24 md:w-32 md:h-32" />
              </div>

              {/* Leadership Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                {/* Founder Box */}
                <div className="group p-5 rounded-xl bg-gradient-to-br from-brand-accent to-black border border-gray-800 hover:border-brand-red transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/10">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-brand-red/10 rounded-md text-brand-red">
                            <User size={16} />
                        </div>
                        <p className="text-[10px] font-bold tracking-widest text-brand-red uppercase">Founder & CEO</p>
                    </div>
                    <h4 className="text-white font-display font-bold text-lg group-hover:translate-x-1 transition-transform">Edul Hassan Hridoy</h4>
                </div>

                {/* Senior Officer Box */}
                <div className="group p-5 rounded-xl bg-gradient-to-br from-brand-accent to-black border border-gray-800 hover:border-brand-red transition-all duration-300 hover:shadow-lg hover:shadow-brand-red/10">
                    <div className="flex items-center gap-3 mb-2">
                         <div className="p-1.5 bg-brand-red/10 rounded-md text-brand-red">
                            <User size={16} />
                        </div>
                        <p className="text-[10px] font-bold tracking-widest text-brand-red uppercase">Senior Officer</p>
                    </div>
                    <h4 className="text-white font-display font-bold text-lg group-hover:translate-x-1 transition-transform">Sakyf Jawad</h4>
                </div>
              </div>
              
              {/* Back decoration */}
              <div className="absolute -z-10 top-4 -left-4 md:top-8 md:-left-8 w-full h-full border-2 border-brand-red/30 rounded-2xl hidden md:block"></div>
            </div>
          </Reveal3D>

          <Reveal3D direction="right">
            <div className="text-center md:text-left">
              <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-2">About Riplex Dev</h2>
              <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                We Don't Just Write Code, <br/>
                We Architect Experiences.
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm md:text-base">
                Based in <span className="text-white font-semibold">Chondipul, Sylhet</span>, Riplex Dev leverages <strong>Modern AI Technology</strong> to craft unique, futuristic frontend designs that stand out.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
                We believe most businesses don't need expensive backends. You need a site that loads instantly and converts. We combine our 3+ years of expertise with cutting-edge AI tools to deliver <strong>Unique High-Performance Static Websites</strong>.
              </p>
            </div>
          </Reveal3D>

        </div>
      </div>
    </section>
  );
};

export default About;