import { motion } from 'framer-motion';
import Button from '../components/shared/Button';
import Footer from '../components/Footer';

const Marketing = () => {

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
                        Esports <span className="text-red-600">Marketing</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto"
                    >
                        Brand sponsorships. Influencer growth. Digital dominance. Elevating the Autobotz footprint.
                    </motion.p>
                </div>
            </section>

            {/* Brand Collab & Sponsorship Seciton */}
            <section className="py-20 bg-black">
                <div className="container-safe grid md:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                        <h2 className="text-4xl font-black mb-6 uppercase border-l-4 border-red-600 pl-4">Brand Collaboration</h2>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                            We connect brands to the highly-engaged esports audience. Our marketing arm focuses on securing endemic and non-endemic sponsorships, organizing structured influencer campaigns, and increasing our team and content creators' overall branding power.
                        </p>
                        <div className="flex flex-col gap-4 mt-8">
                            <div className="bg-gray-900/40 p-5 border-l border-red-500 rounded flex justify-between items-center group hover:bg-gray-800 transition">
                                <div>
                                    <h3 className="text-white font-black text-lg uppercase">Sponsorship Deck Preview</h3>
                                    <p className="text-gray-500 text-sm">Download our latest proposals</p>
                                </div>
                                <span className="text-red-500 font-bold group-hover:translate-x-2 transition-transform">→</span>
                            </div>
                        </div>
                    </motion.div>
                    <div className="relative h-96 bg-gray-900 border border-red-900/50 rounded-lg overflow-hidden flex items-center justify-center shadow-[0_0_20px_rgba(220,38,38,0.15)] group">
                        <img src="/images/sectors/marketing.png" alt="Marketing Gallery" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-gradient-to-tr from-red-900/40 via-transparent to-black/60 pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden text-center bg-zinc-950">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-black to-black" />
                <div className="relative z-10 container-safe">
                    <h2 className="text-4xl md:text-5xl font-black mb-8 uppercase">Partner with Us</h2>
                    <Button variant="primary" size="lg" className="text-lg px-12 py-4 shadow-[0_0_30px_rgba(220,38,38,0.5)]">
                        Contact for Collaboration
                    </Button>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Marketing;
