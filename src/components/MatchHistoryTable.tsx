import { motion } from 'framer-motion';
import { MatchHistoryRecord } from '../data/matchHistory';

export default function MatchHistoryTable({ matches }: { matches: MatchHistoryRecord[] }) {
    if (!matches || matches.length === 0) {
        return (
            <div className="flex justify-center items-center py-32 border-y border-zinc-900 bg-black/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.05)_0%,transparent_70%)]" />
                <span className="text-zinc-700 font-black uppercase tracking-widest text-2xl font-['Orbitron',sans-serif] italic z-10">Data Incoming...</span>
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-900/30 to-transparent" />
            </div>
        );
    }

    return (
        <div className="w-full overflow-x-auto hide-scrollbar border border-zinc-800 bg-[#020202] shadow-[0_0_30px_rgba(220,38,38,0.05)] relative max-h-[600px] overflow-y-auto custom-scrollbar">
            <table className="w-full text-left border-collapse min-w-[800px]">
                <thead className="sticky top-0 z-20 shadow-md">
                    <tr className="bg-gradient-to-r from-red-950 via-[#1a0505] to-black border-b border-red-900">
                        <th className="p-5 border border-red-900/40 text-red-500 font-black uppercase tracking-[0.2em] text-xs font-['Orbitron',sans-serif] whitespace-nowrap sticky left-0 z-10 bg-[#1a0505]">Date</th>
                        <th className="p-5 border border-red-900/40 text-red-500 font-black uppercase tracking-[0.2em] text-xs font-['Orbitron',sans-serif] whitespace-nowrap">Tournament</th>
                        <th className="p-5 border border-red-900/40 text-red-500 font-black uppercase tracking-[0.2em] text-xs font-['Orbitron',sans-serif] whitespace-nowrap">Placement</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map((match, idx) => {
                        let placementColor = 'text-white';
                        let rowBg = 'hover:bg-zinc-900/60 bg-transparent';
                        let borderClass = 'border-b border-zinc-800/50';
                        let glowClass = '';
                        
                        // "1st" logic
                        if (match.placement === '1st') {
                            placementColor = 'text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]';
                            rowBg = 'hover:bg-yellow-950/20 bg-yellow-950/10';
                            borderClass = 'border-b border-yellow-900/30';
                            glowClass = 'absolute left-0 top-0 bottom-0 w-1 bg-yellow-500 shadow-[0_0_10px_rgba(250,204,21,0.5)]';
                        } 
                        // "2nd" logic
                        else if (match.placement === '2nd') {
                            placementColor = 'text-zinc-200 drop-shadow-[0_0_8px_rgba(212,212,216,0.4)]';
                            rowBg = 'hover:bg-zinc-800/30 bg-zinc-900/30';
                            glowClass = 'absolute left-0 top-0 bottom-0 w-1 bg-zinc-400 shadow-[0_0_10px_rgba(212,212,216,0.3)]';
                        } 
                        // "3rd" logic
                        else if (match.placement === '3rd') {
                            placementColor = 'text-amber-600 drop-shadow-[0_0_8px_rgba(217,119,6,0.5)]';
                            rowBg = 'hover:bg-amber-950/20 bg-amber-950/10';
                            borderClass = 'border-b border-amber-900/30';
                            glowClass = 'absolute left-0 top-0 bottom-0 w-1 bg-amber-600 shadow-[0_0_10px_rgba(217,119,6,0.5)]';
                        }

                        return (
                            <motion.tr 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                                transition={{ delay: Math.min(idx * 0.05, 0.5), duration: 0.3 }}
                                className={`group transition-colors ${rowBg} ${borderClass} relative`}
                            >
                                <td className="p-5 border border-red-900/40 text-zinc-400 text-sm font-medium tracking-wider whitespace-nowrap group-hover:text-zinc-300 transition-colors">
                                    {glowClass && <div className={glowClass} />}
                                    {match.date}
                                </td>
                                <td className="p-5 border border-red-900/40 text-zinc-100 text-sm font-bold uppercase tracking-wider group-hover:text-red-400 transition-colors">{match.tournament}</td>
                                <td className={`p-5 border border-red-900/40 font-black text-2xl italic font-['Orbitron',sans-serif] ${placementColor}`}>
                                    {match.placement}
                                </td>
                            </motion.tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
