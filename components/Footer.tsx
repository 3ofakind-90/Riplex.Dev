import React from 'react';
import { Code2 } from 'lucide-react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-dark border-t border-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="bg-brand-red p-1.5 rounded-lg">
                <Code2 className="text-white h-5 w-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">
                RIPLEX<span className="text-brand-red">.</span>DEV
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              We build unique, high-performance static websites in Sylhet using <strong>Modern AI Technology</strong>. 
              No databases, no headaches. Just pure speed and design.
            </p>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-gray-400 hover:text-brand-red transition-colors text-sm">Home</a></li>
              <li><a href="#services" onClick={(e) => handleScroll(e, 'services')} className="text-gray-400 hover:text-brand-red transition-colors text-sm">Services</a></li>
              <li><a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')} className="text-gray-400 hover:text-brand-red transition-colors text-sm">Packages</a></li>
              <li><a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-gray-400 hover:text-brand-red transition-colors text-sm">About Us</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Connect</h4>
            <ul className="space-y-2">
              <li><a href="https://wa.me/8801843489299" className="text-gray-400 hover:text-brand-red transition-colors text-sm">WhatsApp</a></li>
              <li><a href="mailto:hassanehr9009@gmail.com" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Email</a></li>
              <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-gray-400 hover:text-brand-red transition-colors text-sm">Book a Call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Riplex Dev Agency. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs flex items-center gap-1">
            Built with <span className="text-brand-red">♥</span> in Sylhet, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;