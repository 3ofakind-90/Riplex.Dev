import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Reveal3D } from './UI/Reveal3D';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    package: 'Standard',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New Inquiry from ${formData.name} - ${formData.package} Package`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APackage: ${formData.package}%0D%0AMessage: ${formData.message}`;
    window.location.href = `mailto:hassanehr9009@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="scroll-mt-24 py-16 md:py-24 bg-brand-accent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Reveal3D width="100%">
            <div className="text-center mb-12 md:mb-16">
            <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-2">Get In Touch</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-white">Let's Build Something Great</h3>
            </div>
        </Reveal3D>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          <Reveal3D delay={0.2} direction="left">
            <div className="bg-brand-dark p-6 md:p-8 rounded-2xl border border-gray-800 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-accent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-accent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="package" className="block text-sm font-medium text-gray-400 mb-2">Interested Package</label>
                  <select
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-accent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-red transition-colors appearance-none"
                  >
                    <option value="Basic">Basic - 2,999৳</option>
                    <option value="Standard">Standard - 4,999৳</option>
                    <option value="Premium">Premium - 7,999৳</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-brand-accent border border-gray-700 rounded-lg text-white focus:outline-none focus:border-brand-red transition-colors"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-brand-red text-white font-bold rounded-lg hover:bg-red-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  SEND MESSAGE
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </Reveal3D>

          <Reveal3D delay={0.4} direction="right">
            <div className="space-y-6 md:space-y-8 h-full flex flex-col">
              <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-accent p-3 rounded-lg text-brand-red">
                  <MapPin />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Visit Us</h4>
                  <p className="text-gray-400 text-sm">Chondipul, Sylhet, Bangladesh</p>
                </div>
              </div>

              <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-accent p-3 rounded-lg text-brand-red">
                  <Mail />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">Email Us</h4>
                  <a href="mailto:hassanehr9009@gmail.com" className="text-gray-400 text-sm hover:text-white transition-colors">hassanehr9009@gmail.com</a>
                </div>
              </div>

              <div className="bg-brand-dark p-6 rounded-xl border border-gray-800 flex items-start gap-4 hover:border-brand-red/50 transition-colors">
                <div className="bg-brand-accent p-3 rounded-lg text-brand-red">
                  <Phone />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-gray-400 text-sm">+880 1843 489299</p>
                </div>
              </div>

              {/* Google Map */}
              <div className="flex-grow w-full h-64 lg:h-auto rounded-2xl overflow-hidden border border-gray-800 grayscale hover:grayscale-0 transition-all duration-500">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.464166669911!2d91.8687!3d24.8864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375054d3d270329f%3A0xf58ef93431f6738!2sSylhet!5e0!3m2!1sen!2sbd!4v1629827364123!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  title="Agency Location"
                ></iframe>
              </div>
            </div>
          </Reveal3D>

        </div>
      </div>
    </section>
  );
};

export default Contact;