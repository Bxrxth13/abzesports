import { motion } from 'framer-motion';
import Button from '../components/shared/Button';
import Footer from '../components/Footer';

const EventBroadcast = () => {

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
                        Event & <span className="text-red-600">Broadcast</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Tournament hosting. Live streaming. Studio production. We bring esports to life.
                    </motion.p>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-black">
                <div className="container-safe grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-black mb-6 uppercase border-l-4 border-red-600 pl-4">Production Capabilities</h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            Autobotz has the technical infrastructure and experienced personnel to run flawless LAN events and high-fidelity live streams. From shoutcasting talent to complex broadcast engineering, we control the entire production pipeline.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl mb-2">🎤</span>
                                <span className="text-white font-bold text-sm uppercase">Shoutcasting</span>
                            </div>
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl mb-2">🎥</span>
                                <span className="text-white font-bold text-sm uppercase">Live Production</span>
                            </div>
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl mb-2">🏟️</span>
                                <span className="text-white font-bold text-sm uppercase">LAN Events</span>
                            </div>
                            <div className="bg-gray-900/50 p-4 border border-red-600/20 rounded">
                                <span className="block text-3xl mb-2">⚡</span>
                                <span className="text-white font-bold text-sm uppercase">Custom Overlays</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative h-96 bg-gray-900 border border-red-900/50 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.15)] group">
                        <img src="/images/sectors/events.png" alt="Event Broadcast Studio" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-black/60 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden text-center bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
                <div className="relative z-10 container-safe">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">Host your next major</h2>
                    <Button variant="primary" size="lg" className="text-lg px-12 py-4 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        Book Event
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default EventBroadcast;
