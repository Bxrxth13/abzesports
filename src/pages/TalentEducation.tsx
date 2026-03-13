import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from '../components/shared/Button';
import Footer from '../components/Footer';
import SectorNav from '../components/SectorNav';

const DataFlowParticles = () => {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion) return null;
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 flex space-x-2">
            {[...Array(30)].map((_, i) => (
                <div key={i} className="flex-1 flex justify-center items-start h-full">
                    <motion.div
                        className="w-[2px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent"
                        style={{
                            height: `${Math.random() * 40 + 20}%`,
                            opacity: Math.random() * 0.5 + 0.1,
                        }}
                        animate={{
                            y: ['-100%', '300%'],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 3,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: 'linear',
                        }}
                    />
                </div>
            ))}
        </div>
    );
};

const TalentEducation = () => {
    const prefersReducedMotion = useReducedMotion();

    const curriculum = [
        { phase: '01', title: 'Foundation Diagnostics', desc: 'Deep technical analysis of crosshairs placement, APM, and reaction speeds using proprietary software.' },
        { phase: '02', title: 'Tactical Realignment', desc: '1-on-1 VOD reviews dissecting macro-rotations, economy management, and situational positioning.' },
        { phase: '03', title: 'Pressure Conditioning', desc: 'High-stakes simulated scrim blocks against established Tier 2 rosters to build tournament resilience.' },
        { phase: '04', title: 'Roster Integration', desc: 'The final trial. Seamlessly communicating and executing within a verified 5-stack environment.' }
    ];

    const tracks = [
        { name: 'MECHANICAL MASTER', icon: '⚡', color: 'from-cyan-500 to-blue-500' },
        { name: 'IGL LEADERSHIP', icon: '🧠', color: 'from-teal-500 to-emerald-500' },
        { name: 'ANALYST PATHWAY', icon: '📊', color: 'from-blue-500 to-indigo-500' }
    ];

    return (
        <div className="min-h-screen bg-[#020813] text-white overflow-x-hidden font-['Orbitron',sans-serif]">
            <SectorNav />

            {/* HERO - Minimalist Centered Grid */}
            <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center mt-20 px-4">
                <DataFlowParticles />
                
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-cyan-950/30 to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10 w-full max-w-5xl mx-auto">
                    <p className="text-cyan-400 uppercase tracking-[0.5em] text-xs md:text-sm font-bold mb-6">EST. 2024 / ACADEMY DIVISION</p>
                    
                    <h1 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.85] tracking-tighter mb-8 break-words text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-teal-700">
                        HACK YOUR <br/> <span className="text-white">POTENTIAL</span>
                    </h1>
                    
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-3/4 mx-auto mb-8" />
                    
                    <p className="text-lg md:text-xl text-cyan-100/60 max-w-2xl mx-auto font-light leading-relaxed mb-12 font-['Rajdhani',sans-serif]">
                        Stop grinding blindly. Our data-driven curriculum isolates your weaknesses, optimizes your input, and engineers you into a lethal, tier-1 competitor.
                    </p>
                    
                    <button className="relative group overflow-hidden bg-transparent border-2 border-cyan-500 px-12 py-5 font-bold uppercase tracking-widest hover:text-black transition-colors">
                        <span className="relative z-10">Initialize Training</span>
                        <div className="absolute inset-0 bg-cyan-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0" />
                    </button>
                </motion.div>
                
                <div className="absolute bottom-10 animate-bounce text-cyan-500/50 hidden md:block z-10">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
                </div>
            </section>

            {/* CURRICULUM ROADMAP - Vertical Timeline Pattern */}
            <section className="py-24 relative bg-[#01040a]">
                <div className="container-safe max-w-4xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-black text-center mb-20 uppercase tracking-wide text-cyan-500 drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">The Simulation Phase</h2>
                    
                    <div className="relative border-l-2 border-cyan-900/40 md:border-l-0">
                        {/* Center Timeline Line for MD+ */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-900/10 via-cyan-500/50 to-cyan-900/10 -translate-x-1/2" />
                        
                        {curriculum.map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className={`relative flex flex-col md:flex-row items-center mb-16 last:mb-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-[-9px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-black border-2 border-cyan-400 rounded-full z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]" />
                                
                                <div className={`ml-8 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16 text-left' : 'md:pr-16 md:text-right'}`}>
                                    <div className="bg-gradient-to-b from-cyan-950/20 to-black border border-cyan-900/30 p-8 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all group rounded-sm relative overflow-hidden">
                                        <div className="absolute top-0 right-0 p-4 text-7xl font-black text-white/5 pointer-events-none group-hover:text-cyan-500/10 transition-colors uppercase select-none">{item.phase}</div>
                                        <h3 className="text-2xl font-bold uppercase text-white mb-3 tracking-wide">{item.title}</h3>
                                        <p className="text-cyan-100/60 font-['Rajdhani',sans-serif] text-lg font-light leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TRACK CARDS - Hover Reveal Layout */}
            <section className="py-24 border-t border-cyan-900/30">
                <div className="container-safe">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-teal-500 mb-2 block">// SPECIALIZATIONS</span>
                        <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Select Your <span className="text-cyan-500">Vector</span></h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {tracks.map((track, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="group relative h-80 bg-gray-900 border border-cyan-900/20 flex flex-col items-center justify-center p-8 overflow-hidden cursor-pointer"
                            >
                                {/* Background Gradient Hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                                
                                <span className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(0,0,0,0.5)]">{track.icon}</span>
                                <h3 className="text-2xl font-black uppercase text-center relative z-10 group-hover:tracking-wider transition-all duration-300">{track.name}</h3>
                                
                                {/* Bottom Accent Line */}
                                <div className="absolute bottom-0 left-0 h-1 bg-cyan-400 w-full scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                            </motion.div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center mt-12">
                         <button className="text-cyan-400 uppercase tracking-widest font-bold text-sm hover:text-white transition-colors border-b border-cyan-400/50 pb-1 hover:border-white">View Full Syllabus ➔</button>
                    </div>
                </div>
            </section>

            {/* LARGE QUOTE BLOCK */}
            <section className="py-20 bg-cyan-950/20 relative">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.02] mix-blend-overlay" />
                <div className="container-safe text-center px-4 relative z-10">
                    <span className="text-8xl text-cyan-500/20 font-serif absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/4 pointer-events-none">"</span>
                    <h3 className="text-3xl md:text-4xl font-light italic leading-relaxed max-w-4xl mx-auto text-cyan-50 font-['Rajdhani',sans-serif]">
                        "Talent is a myth. Consistency, data, and ruthless execution determine the difference between a pub-stomper and a world champion."
                    </h3>
                    <p className="mt-8 text-cyan-400 font-bold uppercase tracking-widest">— Abz Academy Head Coach</p>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default TalentEducation;
