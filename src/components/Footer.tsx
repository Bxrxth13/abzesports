import React from 'react';
import { motion } from 'framer-motion';

const footerLinks = [
  { category: 'Games', links: ['BGMI', 'Free Fire', 'Pokémon Unite', 'Indus'] },
  { category: 'Company', links: ['About Us', 'Founders', 'Careers', 'Contact'] },
  { category: 'Services', links: ['Team Management', 'Content Creation', 'Consultation', 'Tournaments'] },
  { category: 'Legal', links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'] },
];

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="relative overflow-hidden bg-black py-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-black opacity-60" />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 80%, #C8102E 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, #C8102E 0%, transparent 50%)',
              'radial-gradient(circle at 40% 40%, #C8102E 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 opacity-20 hidden sm:block"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top: Brand + Quick Links */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* Left: Brand */}
          <div>
            <img
              src="/images/logos/Abz Logo Red.png"
              alt="AUTOBOTZ ESPORTS Logo"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain mb-4 sm:mb-6"
            />
            <p className="text-gray-400 text-sm mb-5 sm:mb-6 italic">
              Building the future of esports through professional team management,
              content creation, and competitive excellence across all gaming platforms.
            </p>
            {/* Social Links */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.instagram.com/autobotz_esports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-l-4 border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://twitter.com/autobotzesports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-l-4 border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a
                href="https://youtube.com/@autobotzesports"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-900 border-l-4 border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-red-600 transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Quick Links Grid */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8 pl-0 lg:pl-20 pt-0 lg:pt-14">
            {footerLinks.map(({ category, links }) => (
              <div key={category}>
                <h3 className="text-white font-bold uppercase text-xs mb-5 border-l-4 border-red-600 pl-3 tracking-widest">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {links.map(link => (
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4 sm:pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm">
            <p className="text-gray-500">© 2026 AUTOBOTZ ESPORTS. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4 text-gray-500">
              <a href="#" className="hover:text-red-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-red-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-red-400 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
