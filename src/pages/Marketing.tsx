import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Footer from '../components/Footer';
import SectorNav from '../components/SectorNav';

const GridLines = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.5)]" />
        <div className="absolute left-1/2 top-0 h-full w-[1px] bg-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
    </div>
);

const serviceTiers = [
    {
        name: 'BRAND INTEGRATION',
        icon: '🔗',
        desc: 'Seamless product placement within our live rosters across tier-1 tournaments. Tap into a hyper-engaged Gen-Z viewer base with >80% ad retention.',
        stats: ['2.4M IMPRESSIONS', '8% CTR'],
        color: 'from-violet-600 to-fuchsia-600',
        delay: 0
    },
    {
        name: 'CREATOR ACTIVATION',
        icon: '🎥',
        desc: 'Leverage our exclusive pool of 40+ gaming creators to build authentic, narrative-driven viral campaigns across YouTube and Instagram Reels.',
        stats: ['40+ CREATORS', '150M+ VIEWS'],
        color: 'from-cyan-500 to-blue-600',
        delay: 0.1
    },
    {
        name: 'EVENT SPONSORSHIP',
        icon: '🏟️',
        desc: 'Title sponsorships and physical booth activations at our flagship LAN events. Direct physical interaction paired with massive digital broadcast reach.',
        stats: ['5K FOOTFALL', '10M+ REACH'],
        color: 'from-pink-500 to-rose-600',
        delay: 0.2
    },
    {
        name: 'CUSTOM EXPERIENCES',
        icon: '🌌',
        desc: 'Bespoke metaverse integrations, custom tournament circuits, and white-label esports events designed entirely around your brand\'s IP.',
        stats: ['100% BESPOKE', 'ROI GUARANTEED'],
        color: 'from-emerald-400 to-teal-500',
        delay: 0.3
    }
];

const caseStudies = [
    {
        client: 'MONSTER ENERGY',
        title: 'FUELING THE CHAMPIONS',
        metric: '+300%',
        metricLabel: 'Engagement Spike',
        img: '/images/sectors/marketing_new.png' // Using the newly generated image as a cool futuristic placeholder
    },
    {
        client: 'ASUS ROG',
        title: 'THE GEAR OF GODS',
        metric: '5.2M',
        metricLabel: 'Live Viewers Reached',
        img: '/images/sectors/competitive.png'
    },
    {
        client: 'JIO 5G',
        title: 'ZERO PING INITIATIVE',
        metric: '12M+',
        metricLabel: 'Social Impressions',
        img: '/images/sectors/events.png'
    }
];

const Marketing = () => {
    const prefersReducedMotion = useReducedMotion();
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
    
    // Parallax values
    const yHeroText = useTransform(scrollYProgress, [0, 1], [0, 300]);
    const scaleBg = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

    return (
        <div ref={containerRef} className="min-h-screen bg-[#03010a] text-white overflow-x-hidden font-['Rajdhani',sans-serif] selection:bg-violet-600 selection:text-white">
            <SectorNav />

            {/* CYBERPUNK HERO */}
            <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden">
                <motion.div 
                    style={{ scale: prefersReducedMotion ? 1 : scaleBg }}
                    className="absolute inset-0 z-0"
                >
                    {/* Replaced with the new generated synthwave/cyberpunk image */}
                    <img src="/images/sectors/marketing_new.png" className="w-full h-full object-cover opacity-30 select-none mix-blend-screen" alt="Digital Marketing" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#03010a] via-[#03010a]/80 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-violet-950/80 via-transparent to-cyan-950/80" />
                </motion.div>

                <GridLines />

                <div className="container-safe relative z-10 px-6 pt-32">
                    <motion.div style={{ y: prefersReducedMotion ? 0 : yHeroText }} className="max-w-5xl">
                        <motion.div initial={{ opacity: 0, width: 0 }} animate={{ opacity: 1, width: '100px' }} transition={{ duration: 0.8 }} className="h-1 bg-violet-500 mb-8 shadow-[0_0_20px_rgba(139,92,246,0.8)]" />
                        
                        <div className="flex items-center gap-4 mb-4">
                            <span className="animate-pulse w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,1)]" />
                            <h2 className="text-cyan-400 font-bold uppercase tracking-[0.4em] text-sm font-['Orbitron',sans-serif]">Autobotz Marketing Division</h2>
                        </div>
                        
                        <h1 className="text-6xl md:text-[8rem] font-black uppercase leading-[0.85] mb-8 font-['Orbitron',sans-serif]">
                            CAPTURE <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 drop-shadow-lg">THE CULTURE</span>
                        </h1>
                        
                        <p className="text-xl md:text-3xl text-violet-100/70 max-w-3xl font-light leading-relaxed mb-12 border-l-2 border-violet-500/50 pl-6 backdrop-blur-sm bg-violet-950/10 py-2">
                            Traditional ads format are dead. We inject your brand into the bloodstream of Web3, Esports, and Gaming. Don't just buy impressions— <strong className="text-white">buy relevance.</strong>
                        </p>
                        
                        <div className="flex gap-6 items-center">
                            {/* <button className="relative group overflow-hidden bg-violet-600 text-white font-black uppercase tracking-widest px-10 py-5 hover:scale-105 transition-transform shadow-[0_0_30px_rgba(139,92,246,0.4)]">
                                <span className="relative z-10">Initiate Campaign</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
                            </button> */}
                            {/* <button className="text-cyan-400 uppercase font-bold tracking-widest hover:text-white transition-colors flex items-center gap-2 group">
                                <span className="w-10 h-10 rounded-full border border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all">↓</span>
                                <span>Explore Grid</span>
                            </button> */}
                        </div>
                    </motion.div>
                </div>

                {/* Vertical Scrolling Marquee Text */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4 text-violet-500/20 font-black uppercase text-8xl leading-none writing-vertical-rl pointer-events-none select-none font-['Orbitron',sans-serif]">
                    INFLUENCE
                </div>
            </section>

            {/* LIVE DATA TICKER */}
            <div className="w-full bg-black/80 backdrop-blur-md border-y border-white/5 py-4 overflow-hidden z-20 relative">
                <motion.div animate={{ x: [0, -1000] }} transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} className="whitespace-nowrap flex text-sm font-bold uppercase tracking-widest text-violet-300 font-['Orbitron',sans-serif]">
                    {[...Array(4)].map((_, i) => (
                        <span key={i} className="mx-6 flex items-center gap-6">
                            <span>TOTAL REACH: <span className="text-white text-lg">250M+</span></span> <span className="text-violet-600">///</span>
                            <span>CAMPAIGNS DELIVERED: <span className="text-white text-lg">120+</span></span> <span className="text-violet-600">///</span>
                            <span>AVG ROI: <span className="text-white text-lg">4.2X</span></span> <span className="text-violet-600">///</span>
                            <span>SPONSORED EVENTS: <span className="text-white text-lg">45</span></span> <span className="text-violet-600">///</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* THE ARCHITECTURE GRID (SERVICES) */}
            <section className="py-32 relative bg-[#03010a] z-10">
                <div className="container-safe px-6">
                    <div className="text-center mb-24 relative">
                        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-3/4 h-32 bg-violet-600/10 blur-[100px] -z-10" />
                        <h2 className="text-5xl md:text-7xl font-black uppercase font-['Orbitron',sans-serif] text-white">
                            THE ACTIVATION <span className="text-transparent bg-clip-text bg-gradient-to-b from-violet-400 to-cyan-600">MATRIX</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-medium mt-6 tracking-wide max-w-2xl mx-auto">
                            Four distinct pillars designed to intercept attention where traditional media fails.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {serviceTiers.map((tier, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.6, delay: tier.delay }}
                                className="group relative bg-[#0a0514] border border-violet-900/30 p-10 hover:border-violet-500/50 transition-all duration-500 overflow-hidden"
                            >
                                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${tier.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-10 blur-[80px] rounded-full transition-opacity duration-700`} />
                                
                                <div className="relative z-10">
                                    <div className="flex justify-between items-start mb-8">
                                        <span className="text-6xl drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]">{tier.icon}</span>
                                        <span className="text-violet-500/30 text-8xl font-black font-['Orbitron',sans-serif] leading-none absolute -top-4 right-0 group-hover:text-violet-500/10 transition-colors pointer-events-none select-none">
                                            0{i+1}
                                        </span>
                                    </div>
                                    
                                    <h3 className="text-3xl font-black uppercase text-white tracking-wide mb-4 font-['Orbitron',sans-serif]">{tier.name}</h3>
                                    <p className="text-violet-200/60 text-lg font-light leading-relaxed mb-8 h-24">
                                        {tier.desc}
                                    </p>
                                    
                                    <div className="grid grid-cols-2 gap-4 border-t border-violet-900/50 pt-6">
                                        {tier.stats.map((stat, idx) => (
                                            <div key={idx} className="flex flex-col">
                                                <span className="text-white font-black text-xl font-['Orbitron',sans-serif]">{stat}</span>
                                                <span className="text-[10px] text-cyan-500 uppercase font-bold tracking-widest">{idx === 0 ? 'AVG YIELD' : 'PERFORMANCE'}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BRAND CASE STUDIES - HORIZONTAL SCROLL OR STACKED */}
            <section className="py-32 bg-[#020005] relative border-t border-white/5">
                <div className="container-safe px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-cyan-500 font-bold uppercase tracking-[0.3em] text-sm block mb-4 border-l-2 border-cyan-500 pl-4">DATA ARCHIVE</span>
                            <h2 className="text-5xl md:text-6xl font-black uppercase font-['Orbitron',sans-serif] text-white">
                                PERFORMANCE <br className="hidden md:block"/> LOGS
                            </h2>
                        </div>
                        <button className="bg-transparent border border-violet-600 text-violet-400 hover:bg-violet-900/30 font-bold uppercase tracking-widest px-8 py-4 transition-colors">
                            View All Cases
                        </button>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        {caseStudies.map((caseStudy, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="group flex-1 relative h-[500px] overflow-hidden bg-black border border-white/10 cursor-pointer"
                            >
                                <img src={caseStudy.img} className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 select-none grayscale group-hover:grayscale-0" alt={caseStudy.client} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none" />
                                
                                <div className="absolute inset-x-6 bottom-6 z-10">
                                    <div className="h-1 w-12 bg-cyan-400 mb-6 scale-x-50 origin-left group-hover:scale-x-100 transition-transform duration-500" />
                                    
                                    <p className="text-violet-400 text-xs font-bold uppercase tracking-widest mb-1">{caseStudy.client}</p>
                                    <h3 className="text-3xl font-black uppercase text-white leading-tight font-['Orbitron',sans-serif] mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                                        {caseStudy.title}
                                    </h3>
                                    
                                    <div className="flex flex-col transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                                        <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 font-['Orbitron',sans-serif]">{caseStudy.metric}</span>
                                        <span className="text-white/50 text-xs font-bold uppercase tracking-widest">{caseStudy.metricLabel}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* HIGH IMPACT CTA */}
            <section className="py-40 relative bg-[#03010a] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15)_0%,#03010a_60%)] pointer-events-none" />
                <div className="max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-6xl md:text-[6rem] font-black uppercase mb-8 font-['Orbitron',sans-serif] text-white">
                        READY TO <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-cyan-500">GO VIRAL?</span>
                    </h2>
                    <p className="text-xl md:text-2xl text-violet-200/50 mb-12 font-light max-w-2xl mx-auto">
                        Stop yelling into the void. Partner with Autobotz and engineer a culture-shifting campaign. 
                    </p>
                    <button className="bg-white text-[#03010a] font-black uppercase tracking-widest px-14 py-6 text-xl hover:bg-violet-400 hover:text-white transition-colors duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]">
                        TRANSMIT SIGNAL
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Marketing;
