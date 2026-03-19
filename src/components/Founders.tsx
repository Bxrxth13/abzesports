import React from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './shared/AnimatedSection';
import { founders } from '../data/sampleData';

const Founders: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative overflow-hidden font-['Rajdhani',sans-serif]">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-red-900/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container-safe mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm block mb-4">The Visionaries</span>
          <h2 className="text-5xl md:text-7xl font-black text-white uppercase font-['Orbitron',sans-serif] tracking-wider md:tracking-widest mb-6">
            MEET THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">FOUNDERS</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 font-medium max-w-2xl mx-auto">
            The masterminds behind Autobotz Esports. Driving the culture forward and setting the gold standard in competitive excellence.
          </p>
        </AnimatedSection>

        <div className="flex flex-col lg:flex-row justify-center gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group w-full lg:w-1/2 rounded-2xl overflow-hidden bg-zinc-900/50 border border-zinc-800 hover:border-red-600/50 transition-all duration-500"
            >
              <div className="relative h-[450px] md:h-[550px] overflow-hidden">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-red-900/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-black text-white uppercase font-['Orbitron',sans-serif] tracking-widest mb-1">
                      {founder.name}
                    </h3>
                    <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
                      {founder.title}
                    </p>
                    
                    <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden mt-4">
                      <p className="text-gray-300 leading-relaxed mb-6 font-medium italic border-l-2 border-red-600 pl-4">
                        "{founder.quote}"
                      </p>
                      
                      <div className="flex gap-4">
                        {Object.entries(founder.socials).map(([platform, url]) => {
                          if (!url) return null;
                          return (
                            <a
                              key={platform}
                              href={url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-12 h-12 rounded-full bg-zinc-800/80 backdrop-blur border border-zinc-700 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110"
                              aria-label={platform}
                            >
                              {platform === 'twitter' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                </svg>
                              )}
                              {platform === 'linkedin' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                                </svg>
                              )}
                              {platform === 'instagram' && (
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                </svg>
                              )}
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;