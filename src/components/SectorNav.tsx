import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

const sectors = [
    { label: 'Competitive', path: '/competitive' },
    { label: 'Marketing', path: '/marketing' },
    { label: 'Events', path: '/events' },
    { label: 'Education', path: '/education' },
];

const SectorNav = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => { setMenuOpen(false); }, [location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
            style={{
                background: scrolled
                    ? 'linear-gradient(90deg, rgba(10,0,0,0.97) 0%, rgba(15,5,5,0.97) 50%, rgba(10,0,0,0.97) 100%)'
                    : 'linear-gradient(180deg, rgba(0,0,0,0.72) 0%, transparent 100%)',
                borderBottom: scrolled ? '1px solid rgba(220,38,38,0.25)' : 'none',
                backdropFilter: scrolled ? 'blur(14px)' : 'none',
                boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
            }}
        >
            <nav className="container-safe">
                <div className="flex items-center justify-between h-16 lg:h-20">

                    {/* ── Logo / Home ── */}
                    <button
                        onClick={() => navigate('/')}
                        className="flex items-center gap-3 group shrink-0"
                        aria-label="Back to Home"
                    >
                        <img
                            src="/images/logos/Abz Logo Red.png"
                            alt="Autobotz"
                            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
                        />
                        <span className="hidden sm:block text-white font-black uppercase tracking-[0.15em] text-sm group-hover:text-red-400 transition-colors duration-200">
                            Autobotz
                        </span>
                    </button>

                    {/* ── Desktop sector links ── */}
                    <div className="hidden lg:flex items-center gap-1">
                        {sectors.map((s) => (
                            <button
                                key={s.path}
                                onClick={() => navigate(s.path)}
                                className={`relative px-5 py-2 text-xs font-black uppercase tracking-[0.15em] transition-colors duration-200 ${isActive(s.path)
                                    ? 'text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                {s.label}
                                {/* Active indicator */}
                                {isActive(s.path) && (
                                    <motion.span
                                        layoutId="sector-active"
                                        className="absolute bottom-0 left-2 right-2 h-[2px] bg-red-600 rounded-full"
                                        style={{ boxShadow: '0 0 8px rgba(220,38,38,0.7)' }}
                                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                                    />
                                )}
                                {/* Hover underline (non-active) */}
                                {!isActive(s.path) && (
                                    <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-red-600/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full" />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* ── Desktop CTA ── */}
                    <div className="hidden lg:flex items-center gap-4">
                        <button
                            onClick={() => navigate('/')}
                            className="text-xs font-bold text-gray-400 hover:text-white uppercase tracking-widest transition-colors duration-200 flex items-center gap-1.5"
                        >
                            <span className="text-red-500">←</span> Home
                        </button>
                        <button
                            onClick={() => navigate('/')}
                            className="relative font-black text-xs uppercase tracking-widest h-10 px-6 text-white overflow-hidden transition-all duration-300 group"
                            style={{
                                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                                clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
                                boxShadow: '0 0 18px rgba(220,38,38,0.35)',
                            }}
                        >
                            <span className="relative z-10">Join Squad</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-600" />
                        </button>
                    </div>

                    {/* ── Mobile hamburger ── */}
                    <button
                        onClick={() => setMenuOpen((v) => !v)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px] group"
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>
            </nav>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="lg:hidden overflow-hidden"
                        style={{
                            background: 'rgba(5,0,0,0.97)',
                            borderTop: '1px solid rgba(220,38,38,0.2)',
                            backdropFilter: 'blur(16px)',
                        }}
                    >
                        <div className="container-safe py-5 flex flex-col gap-1">
                            {/* Sector links */}
                            {sectors.map((s, i) => (
                                <motion.button
                                    key={s.path}
                                    initial={{ opacity: 0, x: -16 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06 }}
                                    onClick={() => navigate(s.path)}
                                    className={`flex items-center justify-between w-full px-4 py-3 text-sm font-black uppercase tracking-[0.1em] border-l-2 transition-all duration-200 ${isActive(s.path)
                                        ? 'text-white border-red-600 bg-red-600/8'
                                        : 'text-gray-400 border-transparent hover:text-white hover:border-red-600/50'
                                        }`}
                                >
                                    {s.label}
                                    {isActive(s.path) && (
                                        <span className="text-red-500 text-xs">●</span>
                                    )}
                                </motion.button>
                            ))}

                            {/* Divider */}
                            <div className="h-px bg-gray-800/60 my-2 mx-4" />

                            {/* Back home */}
                            <motion.button
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: sectors.length * 0.06 }}
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2 px-4 py-3 text-sm font-bold text-gray-500 hover:text-white uppercase tracking-widest transition-colors duration-200"
                            >
                                <span className="text-red-500">←</span> Back to Home
                            </motion.button>

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: (sectors.length + 1) * 0.06 }}
                                className="px-4 pt-2 pb-3"
                            >
                                <button
                                    onClick={() => navigate('/')}
                                    className="w-full font-black text-sm uppercase tracking-widest h-12 text-white transition-all duration-300"
                                    style={{
                                        background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                                        clipPath: 'polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)',
                                    }}
                                >
                                    Join Squad
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};

export default SectorNav;
