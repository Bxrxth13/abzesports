import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer';
import SectorNav from '../components/SectorNav';
import MatchHistoryTable from '../components/MatchHistoryTable';
import { teamMatchHistory } from '../data/matchHistory';

const teams = [
    {
        id: 'bgmi',
        title: 'BATTLEGROUNDS MOBILE INDIA',
        short: 'BGMI',
        achievements: 'BGIS 2024 Champions'
    },
    {
        id: 'ff',
        title: 'FREE FIRE',
        short: 'FREE FIRE',
        achievements: 'FFIC Finalists'
    },
    {
        id: 'pokemon',
        title: 'POKÉMON UNITE',
        short: 'P. UNITE',
        achievements: 'WCS Regional Champs'
    },
    {
        id: 'indus',
        title: 'INDUS BATTLE ROYALE',
        short: 'INDUS',
        achievements: 'Pre-Season Invites'
    }
];

// Removed generic static match history for the dynamic table

const CompetitiveEsports = () => {
    const [activeTeam, setActiveTeam] = useState(teams[0]);

    return (
        <div className="min-h-screen bg-[#050505] text-white font-['Rajdhani',sans-serif] selection:bg-red-600 selection:text-white pb-0">
            <SectorNav />

            {/* HERO SECTION - APEX PREDATOR VIBE */}
            <section className="relative pt-40 pb-32 overflow-hidden flex flex-col justify-center min-h-[90vh]">
                {/* Dynamic Sporty Background */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute inset-0 bg-[url('/images/sectors/competitive.png')] bg-cover bg-center opacity-20 mix-blend-luminosity grayscale" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-red-950/20 to-transparent" />
                    
                    {/* Diagonal Slash Elements */}
                    <div className="absolute -top-[20%] right-[-10%] w-[50%] h-[150%] bg-red-600/10 skew-x-[-25deg] blur-2xl" />
                    <div className="absolute bottom-[0%] left-[-20%] w-[40%] h-[100%] bg-orange-600/5 skew-x-[-25deg] blur-3xl opacity-50" />
                    <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: '200%' }} 
                        transition={{ duration: 1.5, ease: "circOut" }}
                        className="absolute -top-[50%] right-[15%] w-[2px] bg-red-500 skew-x-[-25deg] shadow-[0_0_15px_rgba(220,38,38,1)]" 
                    />
                     <motion.div 
                        initial={{ height: 0 }} 
                        animate={{ height: '200%' }} 
                        transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                        className="absolute -top-[50%] right-[18%] w-[1px] bg-red-500/50 skew-x-[-25deg]" 
                    />
                </div>

                <div className="container-safe relative z-10 px-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-4xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="w-12 h-1 bg-red-600 skew-x-[-45deg] inline-block" />
                            <h2 className="text-red-500 font-bold uppercase tracking-[0.3em] text-sm md:text-base">Elite Competition Division</h2>
                        </div>
                        
                        <h1 className="text-7xl md:text-[9rem] font-black uppercase leading-[0.8] mb-8 font-['Orbitron',sans-serif] italic text-white drop-shadow-2xl">
                            CHAMPIONS <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-800" style={{ WebkitTextStroke: '1px rgba(220, 38, 38, 0.4)' }}>NEVER REST</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-snug font-medium mb-10 border-l-4 border-red-600 pl-6">
                            Constructing dynasties across India's premier battlegrounds. We don't just participate; we set the meta and shatter the competition.
                        </p>
                        
                        <div className="flex flex-wrap gap-4">
                            <button className="bg-red-600 hover:bg-red-500 text-white font-black uppercase tracking-widest px-10 py-5 text-lg transition-all transform hover:-translate-y-1" style={{ clipPath: 'polygon(15px 0, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px)' }}>
                                View Match Schedule
                            </button>
                            <button className="bg-transparent border-2 border-zinc-800 hover:border-red-600 text-white font-bold uppercase tracking-widest px-10 py-5 text-lg transition-all" style={{ clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))' }}>
                                Trophy Room
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* SPORTY TICKER TAPE */}
            <div className="w-full bg-red-600 text-black overflow-hidden py-3 transform -rotate-1 scale-105 z-20 relative shadow-[0_0_30px_rgba(220,38,38,0.4)]">
                <motion.div 
                    animate={{ x: [0, -1000] }} 
                    transition={{ duration: 15, repeat: Infinity, ease: 'linear' }} 
                    className="whitespace-nowrap flex text-2xl font-black uppercase tracking-widest font-['Orbitron',sans-serif]"
                >
                    {/* Repeated Ticker content */}
                    {[...Array(3)].map((_, i) => (
                        <span key={i} className="mx-4 flex items-center">
                            BGIS 2024 CHAMPIONS <span className="mx-6 text-xl">✦</span> 
                            FFIC SPRING RUNNERS UP <span className="mx-6 text-xl">✦</span> 
                            WCS INDIA WINNERS <span className="mx-6 text-xl">✦</span> 
                            INDUS INVITEES <span className="mx-6 text-xl">✦</span>
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* ACTIVE ROSTERS SELECTION */}
            <section className="pt-16 pb-0 bg-[#050505] relative z-10 px-4">
                <div className="container-safe max-w-7xl mx-auto">
                    <div className="flex justify-end mb-8">
                        <div className="flex gap-2 bg-zinc-900/50 p-1 rounded-sm border border-zinc-800 w-full md:w-auto overflow-x-auto hide-scrollbar">
                            {teams.map(team => (
                                <button
                                    key={team.id}
                                    onClick={() => setActiveTeam(team)}
                                    className={`px-6 py-3 font-black uppercase tracking-widest text-sm transition-colors whitespace-nowrap ${
                                        activeTeam.id === team.id 
                                        ? 'bg-red-600 text-white shadow-lg' 
                                        : 'text-zinc-500 hover:text-white hover:bg-zinc-800'
                                    }`}
                                    style={{ clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)' }}
                                >
                                    {team.short}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Team Details Header */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTeam.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="flex items-center gap-4 mb-0">
                                <h3 className="text-3xl font-black text-red-500 tracking-wider uppercase font-['Orbitron',sans-serif]">{activeTeam.title}</h3>
                                <span className="px-3 py-1 bg-red-950/50 border border-red-900 text-red-400 text-xs font-bold tracking-widest uppercase">{activeTeam.achievements}</span>
                            </div>


                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* LIVE SCOREBOARD / MATCH HISTORY */}
            <section className="py-16 relative bg-zinc-950 border-y border-zinc-900 overflow-hidden">
                {/* Scoreboard Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] z-0" />
                
                <div className="container-safe relative z-10 px-4 max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-black uppercase font-['Orbitron',sans-serif] inline-block bg-zinc-900 px-8 py-2 border-2 border-zinc-800 text-white shadow-[0_4px_20px_rgba(0,0,0,0.5)] skew-x-[-10deg]">
                            <span className="block skew-x-[10deg]">MATCH CENTER</span>
                        </h2>
                    </div> 
                    <div className="flex flex-col gap-3">
                        <MatchHistoryTable matches={teamMatchHistory[activeTeam.id] || []} />
                    </div>
                </div>
            </section>

                {/* HIGH PERFORMANCE FACILITY CTA */}
            <section className="py-32 bg-black relative flex items-center justify-center px-4 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.1)_0%,black_70%)]" />
                </div>
                
                <div className="max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">Train Like <span className="text-red-600 font-['Orbitron',sans-serif] italic">Professionals</span></h2>
                    <p className="text-xl text-gray-400 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                        Think you have the mechanics to compete under the banner? Participate in our public combine events and prove you are tier-1 material.
                    </p>
                    <button className="bg-red-600 hover:bg-white hover:text-red-700 text-white font-black uppercase tracking-widest px-12 py-6 text-xl transition-colors shadow-[0_0_40px_rgba(220,38,38,0.5)]" style={{ clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)' }}>
                        ENTER COMBINE DRAFT
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CompetitiveEsports;
