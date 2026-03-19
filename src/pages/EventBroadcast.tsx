// Removed unused react imports
import { motion, useReducedMotion } from 'framer-motion';
// Removed unused Button component
import Footer from '../components/Footer';
import SectorNav from '../components/SectorNav';

const SpotlightParticles = () => {
    const prefersReducedMotion = useReducedMotion();
    if (prefersReducedMotion) return null;
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
            {[...Array(22)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{
                        width: `${Math.random() * 4 + 1}px`,
                        height: `${Math.random() * 18 + 6}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 80}%`,
                        background: i % 4 === 0 ? 'rgba(251, 191, 36, 0.9)' : i % 4 === 1 ? 'rgba(52, 211, 153, 0.85)' : 'rgba(255, 255, 255, 0.7)',
                        boxShadow: `0 0 ${Math.random() * 12 + 4}px currentColor`,
                        rotate: `${Math.random() * 30 - 15}deg`,
                    }}
                    animate={{
                        y: [0, Math.random() * -300 - 100],
                        x: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 80],
                        opacity: [0, 0.85, 0],
                        scaleY: [1, Math.random() * 0.5 + 0.3, 0],
                    }}
                    transition={{
                        duration: Math.random() * 3 + 2,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    );
};

const EventBroadcast = () => {
    // removed prefersReducedMotion

    const capabilities = [
        { title: 'Live Broadcast', icon: '🎥', desc: '4K Multi-camera setups with real-time switching.' },
        { title: 'Stage Design', icon: '🏟️', desc: 'Custom structural stages, trussing, and immersive lighting rigs.' },
        { title: 'Shoutcasting', icon: '🎙️', desc: 'Professional tier-1 commentators and analysts.' },
        { title: 'VOD & Replays', icon: '🎬', desc: 'Instant replay generation and post-event cinematic reels.' }
    ];

    const pastEvents = [
        { name: 'BGIS LAN Finals', img: '/images/sectors/events.png', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-2' },
        { name: 'Upthrust Chillz Cup', img: '/images/sectors/competitive.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
        { name: 'BMPS Qualifiers', img: '/images/sectors/marketing.png', colSpan: 'md:col-span-1', rowSpan: 'md:row-span-1' },
        { name: 'Sky Championship', img: '/images/sectors/education.png', colSpan: 'md:col-span-2', rowSpan: 'md:row-span-1' }
    ];

    return (
        <div className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
            <SectorNav />

            {/* HERO - Centered Cinematic Approach */}
            <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center mt-12 bg-black overflow-hidden pt-20">
                <SpotlightParticles />
                <div className="absolute inset-0 z-0">
                    <img src="/images/sectors/events.png" alt="Broadcast Stage" className="w-full h-full object-cover mix-blend-luminosity opacity-40" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-black" />
                </div>

                <div className="relative z-10 container-safe px-4">
                    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 px-6 py-2 border border-amber-500/30 bg-amber-500/10 mb-8 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-amber-400 text-xs font-bold uppercase tracking-widest">LIVE BROADCAST DIVISION</span>
                    </motion.div>
                    <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-5xl md:text-8xl font-black uppercase tracking-wider md:tracking-widest mb-6 text-white drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]">
                        THE SPECTACLE <br />
                        <span className="text-amber-500 font-['Rajdhani',sans-serif] italic relative">
                            RE-ENGINEERED
                            <div className="absolute -inset-x-4 bottom-2 h-4 bg-amber-500/20 blur-xl -z-10" />
                        </span>
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed mb-10">
                        Stadium-scale LAN finals. High-fidelity online broadcasts. We produce the moments millions log in to watch.
                    </motion.p>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="bg-amber-500 text-black font-black uppercase tracking-widest px-10 py-4 hover:bg-amber-400 transition-colors shadow-[0_0_30px_rgba(245,158,11,0.5)]">
                            Book Our Stages
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* CAPABILITIES - Inline Flex Layout */}
            <section className="py-20 border-y border-amber-900/30">
                <div className="container-safe whitespace-nowrap overflow-x-auto hide-scrollbar flex gap-12 items-center px-4 md:justify-center">
                    {capabilities.map((cap, i) => (
                        <motion.div 
                            key={i} 
                            initial={{ opacity: 0, x: 20 }} 
                            whileInView={{ opacity: 1, x: 0 }} 
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-4 group min-w-[280px]"
                        >
                            <span className="text-4xl filter drop-shadow-[0_0_10px_rgba(251,191,36,0.5)] group-hover:scale-110 transition-transform">{cap.icon}</span>
                            <div>
                                <h4 className="text-amber-400 font-black uppercase tracking-wide text-sm">{cap.title}</h4>
                                <p className="text-gray-500 text-xs max-w-[200px] whitespace-normal mt-1 leading-tight">{cap.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* EVENT GALLERY - Masonry Style Grid */}
            <section className="py-24 relative bg-gradient-to-b from-[#050505] to-black">
                <div className="container-safe">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2 block">// PORTFOLIO</span>
                            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wider md:tracking-widest font-['Rajdhani',sans-serif]">Stages <span className="text-amber-500">Mastered</span></h2>
                        </div>
                        <p className="text-gray-500 max-w-md text-right hidden md:block mt-4 md:mt-0 leading-relaxed font-light">
                            From 500-seat auditoriums to grand arenas. Every LAN we touch is optimized for player comfort and audience roar.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                        {pastEvents.map((evt, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={`group relative overflow-hidden bg-gray-900 ${evt.colSpan} ${evt.rowSpan} cursor-pointer border border-amber-900/20 hover:border-amber-500/50 transition-colors`}
                            >
                                <img src={evt.img} alt={evt.name} className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 opacity-60 group-hover:opacity-100" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                                <div className="absolute inset-0 border-4 border-black group-hover:border-amber-500/20 transition-colors z-20 pointer-events-none" />
                                
                                <div className="absolute bottom-6 left-6 z-30">
                                    <h3 className="text-2xl font-black text-white uppercase tracking-wide translate-y-4 group-hover:translate-y-0 transition-transform duration-300 drop-shadow-md">{evt.name}</h3>
                                    <div className="w-12 h-1 bg-amber-500 mt-3 scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BROADCAST TECHNOLOGY */}
            <section className="py-24 bg-[#0a0a0a] relative border-t border-amber-900/20 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                
                <div className="container-safe relative z-10 px-4">
                    <div className="text-center mb-16">
                        <span className="text-amber-500 font-bold uppercase tracking-[0.3em] text-sm block mb-4">Infrastructure</span>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-wider md:tracking-widest font-['Rajdhani',sans-serif] text-white">
                            STUDIO-GRADE <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">PRODUCTION</span>
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
                            We deploy industry-leading broadcast technology to ensure zero-latency, high-fidelity streams that keep audiences glued to their screens.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: '4K SIGNAL PIPELINE', desc: 'End-to-end 4K resolution support with redundant fiber connections for zero downtime.', icon: '📡' },
                            { title: 'VIRTUAL STUDIOS', desc: 'Unreal Engine powered AR graphics, real-time 3D environments, and live player tracking.', icon: '👁️' },
                            { title: 'OBSERVER DESK', desc: 'Veteran in-game directors who catch every crucial rotation, clutch, and team fight.', icon: '🎯' },
                            { title: 'INSTANT REPLAY SYSTEM', desc: 'Multi-angle cinematic replays delivered within seconds of the action.', icon: '⏪' }
                        ].map((tech, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-black border border-white/5 hover:border-amber-500/40 p-8 transition-colors group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-4xl mb-6 grayscale group-hover:grayscale-0 transition-all">{tech.icon}</div>
                                <h3 className="text-lg font-black text-white uppercase tracking-wide mb-3">{tech.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EVENT METRICS */}
            <section className="py-20 bg-amber-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')] opacity-[0.15] mix-blend-overlay" />
                <div className="container-safe px-4 relative z-10 flex flex-col md:flex-row justify-around items-center gap-10">
                    {[
                        { label: 'PEAK CONCURRENT', value: '450K+' },
                        { label: 'HOURS WATCHED', value: '12M+' },
                        { label: 'EVENTS PRODUCED', value: '25+' },
                        { label: 'AVG RATING', value: '4.9/5' }
                    ].map((metric, i) => (
                        <motion.div 
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: 'spring' }}
                            className="text-center text-black"
                        >
                            <span className="block text-5xl md:text-6xl font-black font-['Rajdhani',sans-serif] mb-2">{metric.value}</span>
                            <span className="block text-sm font-bold uppercase tracking-widest bg-black text-amber-500 px-4 py-1.5 -skew-x-12 inline-block shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                                <span className="block skew-x-12">{metric.label}</span>
                            </span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-32 bg-black relative flex items-center justify-center text-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,black_70%)] pointer-events-none" />
                <div className="relative z-10 container-safe px-4">
                    <h2 className="text-5xl md:text-7xl font-black uppercase tracking-wider md:tracking-widest text-white mb-6">
                        MAKE YOUR NEXT EVENT <br />
                        <span className="text-amber-500 font-['Rajdhani',sans-serif] italic drop-shadow-[0_0_20px_rgba(245,158,11,0.4)]">UNFORGETTABLE</span>
                    </h2>
                    <p className="text-gray-400 text-xl font-light max-w-2xl mx-auto mb-10">
                        From conceptualizing stage designs to executing flawless 4K broadcasts, Autobotz is your end-to-end production partner.
                    </p>
                    <button className="bg-gradient-to-r from-amber-600 to-amber-400 text-black font-black uppercase tracking-widest px-14 py-5 text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.4)]">
                        REQUEST A QUOTE
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default EventBroadcast;
