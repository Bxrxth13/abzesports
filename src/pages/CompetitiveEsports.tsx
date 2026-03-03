import { motion } from 'framer-motion';
import Button from '../components/shared/Button';
import Footer from '../components/Footer';

const CompetitiveEsports = () => {

    return (
        <div className="min-h-screen bg-black text-white pt-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 md:py-24 border-b border-red-900/50">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-red-600 via-transparent to-transparent" />
                <div className="container-safe relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-6 tracking-tight uppercase"
                    >
                        Competitive <span className="text-red-600">Esports</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Elite divisions. Professional rosters. Championship mentality. We compete to win at every level.
                    </motion.p>
                </div>
            </section>

            {/* Roster & About Section */}
            <section className="py-20 bg-black">
                <div className="container-safe grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-black mb-6 uppercase border-l-4 border-red-600 pl-4">The Division</h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            Autobotz Esports fields top-tier teams across multiple competitive titles including BGMI, Free Fire, Pokémon Unite, and Indus. Our athletes undergo rigorous training, strategic development, and high-pressure scrims to dominate tournaments globally.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl font-black text-white">4+</span>
                                <span className="text-red-500 font-bold text-sm uppercase">Active Rosters</span>
                            </div>
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl font-black text-white">20+</span>
                                <span className="text-red-500 font-bold text-sm uppercase">Pro Players</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative h-96 bg-gray-900 border border-red-900/50 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.15)] group">
                        <img src="/images/sectors/competitive.png" alt="Competitive Roster" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-black/60 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden text-center bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
                <div className="relative z-10 container-safe">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">Ready to compete?</h2>
                    <Button variant="primary" size="lg" className="text-lg px-12 py-4 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        Join Competitive Team
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default CompetitiveEsports;
