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
        { 
            name: 'MECHANICAL MASTER', 
            icon: '⚡', 
            color: 'from-cyan-500 to-blue-500', 
            focus: ['Aim Consistency', 'Movement Tech', 'Crosshair Placement', 'Entry Fragging'],
            desc: 'For the highly aggressive player seeking maximum raw output. We rebuild your mechanics from the ground up until headshots become subconscious.',
            alumni: '85%'
        },
        { 
            name: 'IGL LEADERSHIP', 
            icon: '🧠', 
            color: 'from-teal-500 to-emerald-500', 
            focus: ['Macro strategy', 'Mid-round Calls', 'Economy Management', 'Tilt Control'],
            desc: 'Designed for the tactician. Learn how to read the map, control the tempo of a match, and lead a squad through high-pressure situations.',
            alumni: '92%'
        },
        { 
            name: 'ANALYST PATHWAY', 
            icon: '📊', 
            color: 'from-blue-500 to-indigo-500', 
            focus: ['VOD Dissection', 'Heatmap reading', 'Draft Strategy', 'Opponent Profiling'],
            desc: 'Become the brain behind the scenes. Master data aggregation software, learn to find the micro-mistakes, and prepare championship-winning anti-strats.',
            alumni: '99%'
        }
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
                    
                    <h1 className="text-6xl md:text-[7rem] font-black uppercase leading-[0.85] mb-8 break-words text-transparent bg-clip-text bg-gradient-to-br from-cyan-300 via-white to-teal-700">
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

            {/* SPECIALIZATION TRACKS - Detailed Class Selection Layout */}
            <section className="py-32 border-t border-cyan-900/30 relative bg-[#010306] overflow-hidden z-10">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
                
                <div className="container-safe px-4">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                        <div className="max-w-xl">
                            <span className="text-cyan-400 font-bold uppercase tracking-[0.3em] text-sm block mb-4 border-l-2 border-cyan-500 pl-4">CLASS SYSTEM</span>
                            <h2 className="text-5xl md:text-6xl font-black uppercase font-['Orbitron',sans-serif] text-white">
                                SELECT YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">VECTOR</span>
                            </h2>
                        </div>
                        <p className="text-gray-400 max-w-md md:text-right mt-6 md:mt-0 font-['Rajdhani',sans-serif] text-lg lg:text-xl">
                            We don't do general training. You must commit to a primary role matrix to optimize your neural output.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {tracks.map((track, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.15 }}
                                className="group relative bg-[#02050a] border border-cyan-900/40 hover:border-cyan-500/60 p-8 flex flex-col h-full transform transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(6,182,212,0.15)]"
                            >
                                {/* Background Hex/Grid texture */}
                                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoNiwgMTgyLCAyMTIsIDAuMDUpIi8+PC9zdmc+')] opacity-50 z-0 pointer-events-none" />
                                
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${track.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-700 z-0`} />
                                
                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex justify-between items-center mb-8 pb-6 border-b border-cyan-900/30">
                                        <div className={`w-16 h-16 rounded flex items-center justify-center text-3xl bg-gradient-to-br ${track.color} bg-opacity-10 border border-white/10 group-hover:scale-110 transition-transform`}>
                                            <span style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>{track.icon}</span>
                                        </div>
                                        <div className="text-right">
                                            <span className="block text-3xl font-black text-white font-['Orbitron',sans-serif] group-hover:text-cyan-400 transition-colors uppercase">{track.alumni}</span>
                                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Success Rate</span>
                                        </div>
                                    </div>
                                    
                                    <h3 className="text-2xl xl:text-3xl font-black uppercase text-white mb-4 font-['Orbitron',sans-serif]">{track.name}</h3>
                                    
                                    <p className="text-cyan-100/60 font-['Rajdhani',sans-serif] text-base lg:text-lg leading-relaxed mb-8 flex-grow">
                                        {track.desc}
                                    </p>
                                    
                                    <div className="mt-auto">
                                        <h4 className="text-xs text-cyan-500 font-bold uppercase tracking-widest mb-4">Core Focus Matrix</h4>
                                        <ul className="space-y-3">
                                            {track.focus.map((item, idx) => (
                                                <li key={idx} className="flex items-center text-sm lg:text-base text-gray-300 font-medium font-['Rajdhani',sans-serif]">
                                                    <span className="w-1.5 h-1.5 bg-cyan-500 mr-3 shadow-[0_0_5px_rgba(6,182,212,0.8)]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <button className="mt-10 w-full py-4 bg-transparent border border-cyan-900/50 text-cyan-400 font-bold uppercase tracking-widest text-sm group-hover:bg-cyan-950/30 group-hover:border-cyan-500 transition-colors">
                                        View Curriculum
                                    </button>
                                </div>
                                
                                {/* Bottom Accent */}
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center pointer-events-none" />
                            </motion.div>
                        ))}
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
