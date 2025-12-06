import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };



  const footerLinks = {
    Games: ['BGMI', 'Free Fire', 'Pokémon Unite', 'Indus'],
    Company: ['About Us', 'Founders', 'Careers', 'Contact'],
    Services: ['Team Management', 'Content Creation', 'Consultation', 'Tournaments'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR']
  };

  return (
    <footer id="footer" className="relative bg-black border-t-4 border-red-600 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="mb-6">
              <img 
                src="/images/logos/Abz Logo Red.png" 
                alt="ABZ ESPORTS Logo" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <p className="text-gray-400 mb-6 text-sm">
              Building the future of esports through professional team management, 
              content creation, and competitive excellence across all gaming platforms.
            </p>

            {/* Contact */}
            <div className="space-y-2 mb-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <span>📞</span>
                <span>+91 XXXX-XXXX-XX</span>
              </div>
            </div>
            
            {/* Social Links */}
            {/* <div className="flex items-center space-x-3">
              {[
                { label: 'YouTube', href: '#', icon: '▶' },
                { label: 'Twitter', href: '#', icon: '🐦' },
                { label: 'Instagram', href: '#', icon: '📷' },
                { label: 'Discord', href: '#', icon: '💬' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-900 border-l-4 border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all"
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div> */}
          </div>
          
          {/* Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-white font-bold uppercase text-xs mb-4 border-l-4 border-red-600 pl-3">
                  {category}
                </h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-red-400 transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-12">
          <div className="max-w-3xl mx-auto bg-gray-900/50 border-2 border-red-600/50 p-8">
            <div className="text-center mb-6">
              <h3 className="text-white font-black text-2xl uppercase mb-2">
                JOIN THE <span className="text-red-600">SQUAD</span>
              </h3>
              <p className="text-gray-400 text-sm">Get exclusive updates and tournament news</p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="YOUR EMAIL ADDRESS"
                  required
                  className="w-full bg-black border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white font-bold px-8 py-3 uppercase hover:bg-red-700 transition-colors border-l-4 border-red-400 flex items-center gap-2"
              >
                SUBSCRIBE
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-2 border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <div className="text-gray-500">
              © 2025 Autobotz Esports. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-red-400 transition-colors">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
