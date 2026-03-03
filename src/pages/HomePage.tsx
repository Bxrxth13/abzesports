import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import PageLayout from '../layout/PageLayout';
import { AnimatedCounter } from '../components/AnimatedCounter';
import Modal from '../components/Modal';
import ClickSpark from '../components/ClickSpark';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        const updateHoverState = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable = window.getComputedStyle(target).cursor === 'pointer' || target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('.cursor-pointer');
            setIsHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', updateHoverState);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', updateHoverState);
        };
    }, []);

    return (
        <div className="hidden lg:block pointer-events-none z-[10000]">
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-red-600 rounded-full pointer-events-none mix-blend-exclusion"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: 'spring', stiffness: 1000, damping: 28, mass: 0.1 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none mix-blend-screen"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                }}
                transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.5 }}
                style={{ border: isHovering ? '1px solid rgba(255, 10, 10, 0.8)' : '1px solid rgba(255, 10, 10, 0.4)' }}
            />
        </div>
    );
};

// Header Component - Stealth Navbar
const Header = ({ heroEl }: { heroEl: HTMLElement | null }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Check on mount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        setIsMenuOpen(false);
    };

    return (
        <motion.header
            animate={{
                opacity: 1,
                y: 0,
            }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 pt-[env(safe-area-inset-top)] pointer-events-auto transition-all duration-300 bg-gradient-to-r from-red-950 via-[#1a0000] to-black border-b-[2px] border-red-700/70 shadow-[0_4px_30px_rgba(180,0,0,0.25)] backdrop-blur-sm"
        >
            <nav className="container-safe">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center cursor-pointer pointer-events-auto" onClick={() => scrollToSection('hero')}>
                        <img src="/images/logos/Abz Logo Red.png" alt="Autobotz Logo" className="w-12 h-12 object-contain" />
                    </div>

                    {/* Nav Links */}
                    <div className="hidden lg:flex items-center space-x-10 pointer-events-auto">
                        {['HOME', 'GAMES', 'VICTORIES', 'FOUNDERS'].map(link => (
                            <div key={link} className="relative group cursor-pointer" onClick={() => scrollToSection(link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase())}>
                                <span className="text-gray-300 font-bold uppercase tracking-[0.15em] text-sm group-hover:text-white transition-colors">
                                    {link}
                                </span>
                                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></div>
                            </div>
                        ))}
                    </div>

                    {/* Join Squad CTA */}
                    <div className="hidden lg:block pointer-events-auto">
                        <button
                            onClick={() => scrollToSection('consultation')}
                            className="bg-red-600 text-white font-black px-8 py-3 text-sm tracking-[0.1em] uppercase transition shadow-[0_0_20px_rgba(220,38,38,0)] hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                        >
                            JOIN SQUAD
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button className="lg:hidden text-white p-2 pointer-events-auto" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className="text-2xl font-bold text-red-600">{isMenuOpen ? '✕' : '☰'}</span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-black/95 backdrop-blur-md border-b border-red-600 absolute top-full left-0 w-full pointer-events-auto flex flex-col p-6 gap-4">
                    {['HOME', 'GAMES', 'VICTORIES', 'FOUNDERS'].map(link => (
                        <div key={link} className="text-gray-300 font-bold uppercase tracking-[0.15em] text-sm py-2" onClick={() => scrollToSection(link.toLowerCase() === 'home' ? 'hero' : link.toLowerCase())}>
                            {link}
                        </div>
                    ))}
                    <button
                        onClick={() => scrollToSection('consultation')}
                        className="bg-red-600 text-white font-black px-8 py-3 text-sm tracking-[0.1em] uppercase w-max"
                        style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                    >
                        JOIN SQUAD
                    </button>
                </div>
            )}
        </motion.header>
    );
};

// Hero Component
const Hero = ({ onShowModal }: { onShowModal?: (title: string, message: string) => void }) => {
    const prefersReducedMotion = useReducedMotion();
    const routerNavigate = useNavigate();

    const sectors = [
        { title: 'COMPETITIVE', path: '/competitive' },
        { title: 'MARKETING', path: '/marketing' },
        { title: 'EDUCATION', path: '/education' },
        { title: 'EVENT', path: '/events' }
    ];

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <section id="hero" className="relative flex items-center justify-center overflow-hidden bg-[#050505] min-h-[100vh] cursor-none">
            <CustomCursor />
            {/* Background Layers */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {/* Radial Glow */}
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle,rgba(220,20,60,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[100px]" />

                {/* Perspective Grid */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 opacity-[0.04] bg-[linear-gradient(rgba(255,0,0,1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,1)_1px,transparent_1px)] bg-[size:50px_50px] [transform:perspective(500px)_rotateX(60deg)_translateY(50px)] [transform-origin:bottom]" />

                {/* Diagonal Accent */}
                <div className="absolute top-0 right-[20%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-red-600/20 to-transparent rotate-[35deg] transform-origin-top" />

                {/* CRT Scanline Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.1)_50%,rgba(0,0,0,0.1))] bg-[length:100%_4px] opacity-20 z-50 pointer-events-none" />

                {/* Noise/Grain */}
                <div className="absolute inset-0 opacity-[0.03] opacity-30 mix-blend-overlay pointer-events-none z-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png')]" />

                {/* Particles */}
                {!prefersReducedMotion && (
                    <div className="absolute inset-0">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-1 h-1 bg-red-600 rounded-full shadow-[0_0_8px_rgba(255,10,10,0.8)] pointer-events-none"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    bottom: `-10px`,
                                    opacity: Math.random() * 0.5 + 0.2
                                }}
                                animate={{
                                    y: [0, -Math.random() * 800 - 200],
                                    opacity: [0, 0.8, 0],
                                }}
                                transition={{
                                    duration: Math.random() * 5 + 3,
                                    repeat: Infinity,
                                    delay: Math.random() * 5,
                                    ease: 'linear'
                                }}
                            />
                        ))}
                    </div>
                )}
            </div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 sm:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-between gap-12 pt-16 -mt-8 sm:-mt-12 lg:-mt-24">
                {/* LEFT CONTENT */}
                <div className="flex-1 text-left flex flex-col gap-6 w-full lg:w-auto z-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <h1 className="flex flex-col text-6xl sm:text-7xl md:text-8xl lg:text-[8rem] font-['Orbitron',sans-serif] leading-[0.8] tracking-tighter">
                            <span className="text-white font-black drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">AUTOBOTZ</span>
                            <span className="text-transparent relative group font-black -mt-2 lg:-mt-4 inline-block w-fit" style={{ WebkitTextStroke: '2px #DC143C' }}>
                                ESPORTS
                                <span className="absolute left-0 top-0 text-red-600 opacity-0 group-hover:opacity-50 group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-all duration-75 mix-blend-screen -z-10" style={{ WebkitTextStroke: '0px' }}>ESPORTS</span>
                                {/* <span className="absolute left-0 top-0 text-red-500 opacity-0 group-hover:opacity-50 group-hover:-translate-x-[3px] group-hover:translate-y-[3px] transition-all duration-75 mix-blend-screen -z-10" style={{ WebkitTextStroke: '0px' }}>ESPORTS</span> */}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-lg sm:text-xl md:text-2xl font-light text-gray-300 max-w-xl font-['Rajdhani',sans-serif] tracking-wide"
                    >
                        We Build <span className="text-red-500 font-bold">Teams</span>. We Create <span className="text-red-500 font-bold">Legends</span>.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-5 mt-4"
                    >
                        <button
                            onClick={() => scrollToSection('consultation')}
                            className="group relative bg-[#FF0A0A] text-white font-black h-[56px] px-10 tracking-[0.1em] text-sm uppercase overflow-hidden flex items-center justify-center cursor-none"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                        >
                            <span className="relative z-10 leading-none mt-1">JOIN SQUAD</span>
                            {/* Shimmer */}
                            <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-700 ease-in-out z-0" />
                        </button>
                        <button
                            onClick={() => onShowModal && onShowModal('Live Stream', 'Transmission encrypted. Stand by.')}
                            className="group relative bg-transparent text-white font-black h-[56px] px-10 tracking-[0.1em] text-sm uppercase border border-red-600/50 hover:border-red-500 hover:bg-[rgba(255,10,10,0.05)] transition-all duration-300 flex items-center justify-center gap-3 cursor-none"
                            style={{ clipPath: 'polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%)' }}
                        >
                            <span className="w-0 h-0 border-t-[5px] border-t-transparent border-l-[8px] border-l-red-500 border-b-[5px] border-b-transparent group-hover:scale-110 transition-transform" />
                            <span className="leading-none mt-1">WATCH LIVE</span>
                        </button>
                    </motion.div>
                </div>

                {/* RIGHT SIDES PANEL */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="w-full lg:w-[380px] flex flex-col gap-3 shrink-0 z-20 mt-12 lg:mt-0"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-red-500 text-[10px] font-bold uppercase tracking-[0.2em]">System / Sectors</span>
                        <div className="h-[1px] bg-gradient-to-r from-red-600 to-transparent flex-1" />
                    </div>
                    {sectors.map((sector, i) => (
                        <motion.div
                            key={sector.title}
                            onClick={() => routerNavigate(sector.path)}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            className="group relative cursor-none h-[72px] bg-[rgba(10,10,10,0.7)] hover:bg-[rgba(255,10,10,0.05)] backdrop-blur-md border border-white/5 transition-all duration-300 flex items-center px-6 overflow-hidden shadow-lg shadow-black/50"
                        >
                            {/* Hover Active Left Border */}
                            <div className="absolute left-0 top-0 h-full w-[3px] bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />

                            <span className="text-2xl mr-4 text-gray-500 group-hover:text-red-500 transition-colors duration-300 grayscale group-hover:grayscale-0">{sector.icon}</span>
                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-300 group-hover:text-white transition-all duration-300 group-hover:-translate-x-1">
                                {sector.title}
                            </h3>
                            <span className="ml-auto text-red-600 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300 font-bold">
                                ➔
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Anchored Stats Bar 
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute bottom-0 w-full border-t border-white/5 bg-[rgba(5,5,5,0.85)] backdrop-blur-md z-20 py-4 hidden md:block"
            >
                <div className="container-safe flex justify-around items-center divide-x divide-white/10">
                    <div className="px-8 text-center flex-1">
                        <span className="block text-3xl font-['Orbitron',sans-serif] font-black text-white">45+</span>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">Active Assets</span>
                    </div>
                    <div className="px-8 text-center flex-1">
                        <span className="block text-3xl font-['Orbitron',sans-serif] font-black text-white">6</span>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">Elite Squads</span>
                    </div>
                    <div className="px-8 text-center flex-1">
                        <span className="block text-3xl font-['Orbitron',sans-serif] font-black text-white">12</span>
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-[0.2em]">Major Victories</span>
                    </div>
                </div>
            </motion.div>*/}

            {/* Right Side Vertical Nav 
            <div className="fixed right-6 top-1/2 -translate-y-1/2 pr-4 py-8 z-[9999] hidden lg:flex flex-col items-end gap-12 pointer-events-auto mix-blend-difference border-r border-white/10">
                {[
                    { id: 'hero', label: 'HOME' },
                    { id: 'about', label: 'ABOUT' },
                    { id: 'founders', label: 'FOUNDERS' },
                ].map((btn) => (
                    <button
                        key={btn.id}
                        onClick={() => scrollToSection(btn.id)}
                        className="group flex flex-col items-end cursor-none relative pointer-events-auto"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 group-hover:text-red-500 transition-colors duration-300 [writing-mode:vertical-lr] rotate-180">
                            {btn.label}
                        </span>
                        
                        <div className="absolute top-1/2 -translate-y-1/2 -right-[19px] w-[5px] h-[5px] bg-red-600 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_8px_rgba(255,0,0,0.8)]" />
                    </button>
                ))}
            </div>*/}
        </section>
    );
};

// Games Section with Player Cards
const GamesSection = () => {
    const [activeGame, setActiveGame] = useState<string | null>('BGMI');

    const playGunReloadSound = () => {
        const audio = new Audio('/gunsound.mp3');
        audio.volume = 0.4;
        audio.play().catch(() => { });
    };

    const games = [
        { id: 'BGMI', name: 'BGMI', color: 'from-green-500 to-emerald-600' },
        { id: 'FREEFIRE', name: 'FREE FIRE', color: 'from-blue-500 to-cyan-600' },
        { id: 'POKEMON', name: 'POKEMON UNITE', color: 'from-yellow-500 to-orange-600' },
        { id: 'INDUS', name: 'INDUS', color: 'from-purple-500 to-fuchsia-600' }
    ];

    const players = {
        BGMI: [
            { alias: 'AREEB', name: 'Areeb', image: '/images/players/bgmi/areeb.png' },
            { alias: 'LOBSTER', name: 'Lobster', image: '/images/players/bgmi/lobster.png' },
            { alias: 'RALPHIE', name: 'Ralphie', image: '/images/players/bgmi/ralphie.png' },
            { alias: 'RUSHBOY', name: 'Rushboy', image: '/images/players/bgmi/rushboy.png' },
            { alias: 'TOXIC', name: 'Toxic', image: '/images/players/bgmi/toxic.png' }
        ],
        FREEFIRE: [
            { alias: 'FIREFIST', name: 'Firefist', image: '/images/players/ff/firefist.png' },
            { alias: 'MAAC', name: 'Maac', image: '/images/players/ff/maac.png' },
            { alias: 'MAYANK', name: 'Mayank', image: '/images/players/ff/mayank.png' },
            { alias: 'SOHEL', name: 'Sohel', image: '/images/players/ff/sohel.png' },
            { alias: 'MYSTRIOUS', name: 'Mystrious', image: '/images/players/ff/mystrious.png' },
        ],
        POKEMON: [
            { alias: 'ZORO', name: 'Player One', image: '/images/players/pokemon/zoro.png' },
            { alias: 'JOYBOY', name: 'Player Two', image: '/images/players/pokemon/joyboy.png' },
            { alias: 'MAHE', name: 'Player Three', image: '/images/players/pokemon/mahe.png' },
            { alias: 'SQUAD', name: 'Player Four', image: '/images/players/pokemon/squad.png' },
            { alias: 'LUFFY', name: 'Player Five', image: '/images/players/pokemon/luffy.png' }
        ],
        INDUS: [
            { alias: 'VORTEX', name: 'Player Two', image: '/images/players/indus/Vortex.png' },
            { alias: 'ADITYA', name: 'Player Three', image: '/images/players/indus/Aditya.png' },
            { alias: 'ZALIM', name: 'Player Four', image: '/images/players/indus/Zalim.png' },
            { alias: 'NEPTUNE', name: 'Player Four', image: '/images/players/indus/Neptune.png' }
        ]
    };

    return (
        <section id="games" className="py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-black">
            <div className="container-safe">

                {/* Game Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6">
                    {games.map((game) => (
                        <motion.button
                            key={game.id}
                            onClick={() => {
                                playGunReloadSound();
                                setActiveGame(game.id);
                            }}
                            className={`px-4 sm:px-6 py-2.5 sm:py-3 font-bold text-xs sm:text-sm transition-all duration-300 border-l-4 uppercase tracking-wide ${activeGame === game.id
                                ? 'bg-red-600 text-white border-l-red-400 border-r border-t border-b border-red-500 shadow-lg shadow-red-600/40'
                                : 'bg-black/50 text-gray-300 border-l-gray-600 border-r border-t border-b border-gray-700 hover:bg-black/60 hover:text-white hover:border-l-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                                }`}
                            style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {game.name}
                        </motion.button>
                    ))}
                </div>

                {/* Player Cards Grid */}
                {activeGame ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 perspective">
                        {players[activeGame as keyof typeof players]?.map((player, index) => (
                            <PlayerCard key={player.alias} player={player} index={index} />
                        ))}
                    </div>
                ) : null}

            </div>
        </section>
    );
};

// Player Card with 3D Tilt Effect
const PlayerCard = ({ player, index }: { player: any; index: number }) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!cardRef.current || prefersReducedMotion) return;

        const card = cardRef.current;
        let timeoutId: NodeJS.Timeout;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
            card.style.transition = 'transform 0.1s ease-out';
        };

        const handleMouseLeave = () => {
            timeoutId = setTimeout(() => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                card.style.transition = 'transform 0.5s ease-out';
            }, 100);
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
            clearTimeout(timeoutId);
        };
    }, [prefersReducedMotion]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className="bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 hover:border-r-red-600 hover:border-t-red-600 hover:border-b-red-600 hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] transition-all duration-300 overflow-hidden rounded preserve-3d"
            style={{ transformStyle: 'preserve-3d' }}
        >
            {/* Full-image area */}
            <div
                className="relative h-64 sm:h-72 md:h-80 bg-gradient-to-b from-gray-900 to-black"
                style={player.image ? ({ backgroundImage: `url(${player.image})`, backgroundSize: 'cover', backgroundPosition: 'center top', transform: 'translateZ(20px)' } as React.CSSProperties) : { transform: 'translateZ(20px)' }}
            >
                <div className="absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-black/90 to-transparent" />
            </div>
            {/* Info overlay */}
            <div className="px-4 sm:px-5 py-3 sm:py-4 text-center" style={{ transform: 'translateZ(30px)' }}>
                <h3 className="text-white font-bold text-base sm:text-lg tracking-wide">{player.alias}</h3>
            </div>
        </motion.div>
    );
};

// About Section Component
const AboutSection = () => (
    <section id="about" className="pt-2 sm:pt-6 md:pt-10 lg:pt-16 pb-8 md:pb-[var(--sec-y-tablet)] lg:pb-[var(--sec-y-desktop)] bg-black">
        <div className="container-safe">
            <div className="text-center">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 sm:mb-6">
                    WHO ARE <span className="text-red-600">WE</span>
                </h2>
                <p className="text-base sm:text-xl text-gray-400 max-w-4xl mx-auto">
                    At Autobotz Esports, we believe great things happen where discipline meets imagination. We’re a fast-moving team of builders, creators, and competitors who turn ideas into high-impact experiences—on screen, on stage, and in the real world. From our earliest prototypes to today’s full-scale launches, we’ve kept one promise: make it simple, make it beautiful, and make it work every time.

                    We operate with a product-first mindset and a people-first culture. That means obsessing over details your audience will never notice—but will always feel: performance that stays smooth under pressure, design that holds its shape across devices, and stories that inspire action. We test, measure, and improve relentlessly so every release is stronger than the last.
                </p>
            </div>
        </div>
    </section>
);

// Our Victories Section - Cinematic Stadium Intro Screen with Parallax
const VictoriesSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const prefersReducedMotion = useReducedMotion();

    useEffect(() => {
        if (!sectionRef.current || prefersReducedMotion) return;

        try {
            const { gsap } = require('./animations/gsap');

            // Parallax effect on background elements
            gsap.to(sectionRef.current.querySelectorAll('.parallax-bg'), {
                y: -50,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1,
                },
            });
        } catch (error) {
            console.warn('Parallax animation failed:', error);
        }
    }, [prefersReducedMotion]);

    const victories = [
        { tournament: 'UPTHRUST CHILLZ CUP 25', result: 'CHAMPIONS', rank: 'gold' },
        { tournament: 'SKY CHAMPIONSHIP 25', result: 'RUNNER-UP', rank: 'silver' },
        { tournament: 'UPTHRUST THE PATRIOT CUP 24', result: '2ND RUNNER-UP', rank: 'bronze' },
        { tournament: 'BGIS 25', result: 'QUARTER FINALS, WILDCARD', rank: 'normal' },
        { tournament: 'BMPS 24', result: 'R3', rank: 'normal' },
        { tournament: 'BGIS 24', result: 'R3', rank: 'normal' },
        { tournament: 'BMPS 23', result: 'LAN FINALIST', rank: 'normal' },
        { tournament: 'BGIS 23', result: 'SEMI FINALIST', rank: 'normal' },
        { tournament: 'BMPS 22', result: 'FINALIST', rank: 'normal' },
        { tournament: 'BMSD 22', result: 'SEMI FINALIST', rank: 'normal' }
    ];

    const getResultStyle = (rank: string) => {
        switch (rank) {
            case 'gold': return { gradient: 'from-yellow-300 via-yellow-500 to-yellow-600', glow: 'rgba(234, 179, 8, 0.6)' };
            case 'silver': return { gradient: 'from-gray-200 via-gray-400 to-gray-500', glow: 'rgba(156, 163, 175, 0.6)' };
            case 'bronze': return { gradient: 'from-orange-300 via-orange-500 to-orange-700', glow: 'rgba(249, 115, 22, 0.6)' };
            case 'ongoing': return { gradient: 'from-red-400 via-red-600 to-red-500', glow: 'rgba(239, 68, 68, 0.6)' };
            default: return { gradient: 'from-red-300 via-red-500 to-red-400', glow: 'rgba(239, 68, 68, 0.5)' };
        }
    };

    return (
        <section ref={sectionRef} id="victories" className="relative overflow-hidden py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-black">
            {/* Subtle Background Effects with Parallax */}
            <div className="absolute inset-0 overflow-hidden opacity-20 hidden sm:block">
                <div className="parallax-bg absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px]"></div>
                <div className="parallax-bg absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative w-full container-safe">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                    className="text-center flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-10"
                >
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-wide text-white">
                        OUR <span className="text-red-600">VICTORIES</span>
                    </h2>
                    <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-r from-transparent to-red-600"></div>
                        <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        <div className="h-px w-12 sm:w-16 bg-gradient-to-l from-transparent to-red-600"></div>
                    </div>
                </motion.div>

                {/* Dynamic Victory Headlines */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 sm:gap-y-3 max-w-6xl mx-auto my-6 sm:my-8">
                    {victories.map((victory, index) => {
                        const style = getResultStyle(victory.rank);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, amount: 0.25, margin: '-10%' }}
                                transition={{ type: 'spring', stiffness: 110, damping: 16, delay: index * 0.05 }}
                                whileHover={{ scale: 1.02, y: -4 }}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative group cursor-pointer"
                            >
                                {['gold', 'silver', 'bronze'].includes(victory.rank) && (
                                    <motion.div
                                        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.04, 1] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                                        className="absolute -inset-1 rounded-sm"
                                        style={{
                                            background: `radial-gradient(circle, ${style.glow} 0%, transparent 70%)`,
                                            filter: 'blur(8px)'
                                        }}
                                    />
                                )}

                                <motion.div
                                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute -inset-0.5 rounded-sm"
                                    style={{
                                        background: `linear-gradient(135deg, ${style.glow}, transparent)`,
                                        filter: 'blur(6px)'
                                    }}
                                />

                                <div className="relative bg-gradient-to-br from-gray-900/90 via-black/95 to-gray-900/90 border-l-4 border-r-2 border-t-2 border-b-2 border-gray-800 hover:border-l-red-600 hover:border-r-red-600/40 hover:border-t-red-600/40 hover:border-b-red-600/40 transition-all duration-300 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3 group overflow-hidden min-h-[54px] sm:min-h-[60px] rounded">
                                    <motion.div
                                        initial={{ x: '-100%', opacity: 0 }}
                                        animate={{
                                            x: hoveredIndex === index ? '200%' : '-100%',
                                            opacity: hoveredIndex === index ? 0.1 : 0
                                        }}
                                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                                        className="absolute inset-y-0 w-10 sm:w-12 bg-gradient-to-r from-transparent via-red-500/40 to-transparent skew-x-12"
                                    />

                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        whileInView={{ scale: 1, rotate: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ type: 'spring', stiffness: 200, delay: 0.12 + index * 0.06 }}
                                        className={`w-2 h-2 rounded-full flex-shrink-0 ${victory.rank === 'gold' ? 'bg-yellow-500' :
                                            victory.rank === 'silver' ? 'bg-gray-400' :
                                                victory.rank === 'bronze' ? 'bg-orange-500' :
                                                    victory.rank === 'ongoing' ? 'bg-red-500' :
                                                        'bg-red-700'
                                            }`}
                                        style={{ boxShadow: `0 0 8px ${style.glow}` }}
                                    />

                                    <div className="flex-1 text-left min-w-0">
                                        <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-2">
                                            <motion.span
                                                className="text-sm md:text-base font-black uppercase tracking-wide text-white group-hover:text-red-400 transition-colors truncate"
                                                whileHover={{ x: 2 }}
                                            >
                                                {victory.tournament}
                                            </motion.span>
                                            <motion.span
                                                className="hidden md:inline text-red-600 font-black text-sm flex-shrink-0"
                                                animate={{ rotate: hoveredIndex === index ? 360 : 0 }}
                                                transition={{ duration: 0.5 }}
                                            >
                                                ⬥
                                            </motion.span>
                                            <motion.span
                                                className={`text-[11px] sm:text-xs md:text-sm font-black uppercase tracking-wider bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent whitespace-nowrap`}
                                                style={{ filter: hoveredIndex === index ? `drop-shadow(0 0 8px ${style.glow})` : 'none' }}
                                            >
                                                {victory.result}
                                            </motion.span>
                                        </div>
                                    </div>

                                </div>

                                <motion.div
                                    initial={{ scaleX: 0, originX: 0 }}
                                    animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                                    transition={{ duration: 0.4, ease: 'easeOut' }}
                                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-transparent"
                                    style={{ boxShadow: hoveredIndex === index ? '0 0 10px rgba(220, 38, 38, 0.6)' : 'none' }}
                                />
                            </motion.div>
                        );
                    })}
                </div>

                {/* Stats Counter Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto mt-8 sm:mt-12"
                >
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-600/30 rounded">
                        <div className="text-3xl sm:text-4xl font-black text-red-500 mb-2">
                            <AnimatedCounter end={11} suffix="+" />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Tournaments</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-yellow-500/30 rounded">
                        <div className="text-3xl sm:text-4xl font-black text-yellow-500 mb-2">
                            <AnimatedCounter end={3} />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Podium Finishes</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-600/30 rounded">
                        <div className="text-3xl sm:text-4xl font-black text-red-500 mb-2">
                            <AnimatedCounter end={4} suffix="+" />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Active Games</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-gray-900/50 to-black/50 border border-red-600/30 rounded">
                        <div className="text-3xl sm:text-4xl font-black text-red-500 mb-2">
                            <AnimatedCounter end={20} suffix="+" />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-400 uppercase tracking-wide">Team Members</div>
                    </div>
                </motion.div>

                {/* Footer Tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
                    className="text-center mt-6 sm:mt-10"
                >
                    <p className="text-lg sm:text-2xl text-gray-400 font-semibold">
                        Rising stronger every season — <span className="text-red-500 font-bold">Autobotz Legacy Continues</span> ⚡
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

// Founders Page Component - Premium Esports Design with Parallax
const FoundersPage = () => {
    const prefersReducedMotion = useReducedMotion();
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!sectionRef.current || prefersReducedMotion) return;

        try {
            const { gsap } = require('./animations/gsap');

            // Parallax on background orbs
            gsap.to(sectionRef.current.querySelectorAll('.parallax-orb'), {
                y: 100,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1.5,
                },
            });
        } catch (error) {
            console.warn('Founders parallax animation failed:', error);
        }
    }, [prefersReducedMotion]);

    return (
        <section ref={sectionRef} id="founders" className="relative overflow-hidden flex items-center justify-center py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] md:min-h-[64vh] lg:min-h-[80vh]" style={{ backgroundColor: '#0a0a0a' }}>
            {/* Futuristic Background System */}
            <div className="absolute inset-0 overflow-hidden">
                {!prefersReducedMotion && (
                    <motion.div
                        animate={{
                            background: [
                                'linear-gradient(135deg, #0a0a0a 0%, #1a0505 50%, #0a0a0a 100%)',
                                'linear-gradient(135deg, #0a0a0a 0%, #0a0a0a 50%, #1a0505 100%)',
                                'linear-gradient(135deg, #1a0505 0%, #0a0a0a 50%, #0a0a0a 100%)',
                            ]
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 hidden sm:block"
                    />
                )}

                <div className="absolute inset-0 opacity-10 hidden sm:block" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%23FF1E1E' stroke-width='1'/%3E%3C/svg%3E")`,
                    backgroundSize: '60px 60px'
                }}></div>

                {!prefersReducedMotion && (
                    <motion.div
                        animate={{ x: ['-100%', '200%'] }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear', repeatDelay: 3 }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent skew-x-12 hidden sm:block"
                        style={{ width: '50%' }}
                    />
                )}

                <div className="parallax-orb absolute top-0 left-0 w-80 sm:w-96 h-80 sm:h-96 bg-red-600/5 rounded-full blur-3xl"></div>
                <div className="parallax-orb absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-red-500/5 rounded-full blur-3xl"></div>
                <div className="parallax-orb absolute bottom-0 left-1/3 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] bg-red-600/10 rounded-full blur-3xl"></div>

                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-32 sm:h-64 bg-gradient-to-b from-red-900/10 to-transparent"></div>
            </div>

            <div className="relative container-safe">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center flex flex-col gap-3 sm:gap-4 mb-6 sm:mb-10"
                >
                    <motion.h2
                        className="text-4xl md:text-6xl lg:text-7xl font-black tracking-wide"
                        style={{
                            color: '#ffffff',
                            textShadow: '0 0 30px rgba(255, 30, 30, 0.3), 0 0 60px rgba(255, 30, 30, 0.1)'
                        }}
                    >
                        MEET OUR <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">FOUNDERS</span>
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-1 w-24 sm:w-32 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto"
                    />
                    <p className="text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
                        The visionaries driving <span className="text-red-500 font-semibold">innovation</span> and nurturing <span className="text-red-500 font-semibold">champions</span> in esports.
                    </p>
                </motion.div>

                {/* Founder Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
                    {[
                        { name: 'Maruthachala Moorthy', title: 'CEO & Founder', color: 'from-red-600 to-orange-600' },
                        { name: 'Prakash Ramasamy', title: 'Co-Founder', color: 'from-red-500 to-red-700' },
                        { name: 'Prashath Krishnan', title: 'Co-Founder', color: 'from-orange-600 to-red-600' }
                    ].map((founder, index) => (
                        <motion.div
                            key={founder.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group relative"
                        >
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-red-600 via-red-500 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-500"
                                animate={{ opacity: [0.25, 0.35, 0.25] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <motion.div
                                className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition duration-500"
                                animate={{
                                    background: [
                                        'linear-gradient(45deg, rgba(255, 30, 30, 0) 0%, rgba(255, 30, 30, 0.3) 50%, rgba(255, 255, 255, 0.2) 100%)',
                                        'linear-gradient(225deg, rgba(255, 30, 30, 0) 0%, rgba(255, 30, 30, 0.3) 50%, rgba(255, 255, 255, 0.2) 100%)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{ filter: 'blur(20px)' }}
                            />

                            <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-red-600/30 group-hover:border-red-500 rounded-lg overflow-hidden transition-all duration-500 min-h-[480px]">
                                <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 via-transparent to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative flex flex-col items-center pt-12 px-6 pb-8">
                                    <motion.div
                                        className="relative mb-6"
                                        whileHover={{ scale: 1.03 }}
                                    >
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-600 to-red-500 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                                        <div className="relative w-32 h-32 rounded-full ring-4 ring-red-600/70 group-hover:ring-red-500 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transition-all duration-300">
                                            <span className="text-5xl">👤</span>
                                        </div>
                                        <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-red-600 rounded-full flex items-center justify-center ring-4 ring-black">
                                            <img
                                                src="/images/logos/Abz Logo Red.png"
                                                alt="AUTOBOTZ"
                                                className="w-8 h-8 object-contain"
                                            />
                                        </div>
                                    </motion.div>

                                    <h3 className="text-white font-black text-xl mb-2 text-center tracking-wide">
                                        {founder.name}
                                    </h3>

                                    <p
                                        className={`text-transparent bg-gradient-to-r ${founder.color} bg-clip-text font-bold text-sm uppercase tracking-wider mb-6`}
                                    >
                                        {founder.title}
                                    </p>

                                    <p className="text-gray-400 text-sm text-center leading-relaxed mb-6 px-2">
                                        Leading with vision and expertise, shaping the future of competitive gaming and team excellence.
                                    </p>

                                    <div className="flex items-center justify-center gap-3 mt-auto">
                                        {['🐦', '💼', '📸', '🎮'].map((emoji, i) => (
                                            <motion.button
                                                key={i}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="w-10 h-10 bg-gradient-to-br from-gray-8 00 to-gray-900 border border-red-600/30 hover:border-red-500 text-xl flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,30,30,0.5)] rounded"
                                                aria-label="social link"
                                            >
                                                {emoji}
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Consultation Page Component
interface ConsultationFormData {
    name: string;
    email: string;
    phone: number;
    gameInterest: string;
    message: string;
}

const ConsultationPage = ({ onShowModal }: { onShowModal: (title: string, message: string) => void }) => {
    const [formData, setFormData] = useState<ConsultationFormData>({
        name: '',
        email: '',
        phone: 0,
        gameInterest: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Use local server for development
            const response = await fetch('http://localhost:3000/api/consultation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (data.success) {
                onShowModal('Mission Acknowledged', 'Thank you for your inquiry! Check your email for confirmation. We will get back to you within 24 hours.');
                setFormData({ name: '', email: '', phone: 0, gameInterest: '', message: '' });
            } else {
                onShowModal('Communication Error', data.message || 'Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            onShowModal('Connection Refused', 'Could not reach the server. Please ensure the backend is running.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="consultation" className="relative bg-black overflow-hidden flex items-center justify-center py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] md:min-h-[50vh] lg:min-h-[60vh]">
            <div className="absolute inset-0 bg-black"></div>

            <div className="relative w-full container-safe">
                {/* Main Title */}
                <div className="text-center flex flex-col gap-1.5 sm:gap-2 mb-6 sm:mb-10 pt-12 sm:pt-16 md:pt-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl lg:text-7xl font-black text-white"
                    >
                        REACH <span className="text-red-600">US</span> NOW!
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto"
                    >
                        Drop your details and we'll get back within 24 hours.
                    </motion.p>
                </div>

                {/* Sporty Form Container */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="relative">
                        {/* Decorative corner accents */}
                        <div className="absolute -top-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-4 border-t-4 border-red-600"></div>
                        <div className="absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-4 border-t-4 border-red-600"></div>
                        <div className="absolute -bottom-2 -left-2 w-6 h-6 sm:w-8 sm:h-8 border-l-4 border-b-4 border-red-600"></div>
                        <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 border-r-4 border-b-4 border-red-600"></div>

                        {/* Form card */}
                        <div className="bg-gradient-to-br from-black/60 via-gray-900/60 to-black/60 backdrop-blur-2xl border-2 border-red-600/50 shadow-[0_0_40px_rgba(220,38,38,0.35)] p-6 sm:p-8 md:p-10 relative overflow-hidden rounded">
                            <div className="absolute inset-0 opacity-5" style={{
                                backgroundImage: `repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(220,38,38,0.5) 20px,rgba(220,38,38,0.5) 22px)`
                            }}></div>
                            <form onSubmit={handleSubmit} className="relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                                    <div className="relative group">
                                        <input
                                            type="text"
                                            value={formData.name}
                                            onChange={(e) => {
                                                const lettersOnly = e.target.value.replace(/[^A-Za-z\s]/g, '');
                                                setFormData({ ...formData, name: lettersOnly });
                                            }}
                                            className="w-full bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 sm:px-5 py-3.5 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 font-medium rounded"
                                            placeholder="FULL NAME *"
                                            pattern="[A-Za-z\s]+"
                                            title="Name should only contain letters and spaces"
                                            maxLength={50}
                                            required
                                        />
                                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 sm:px-5 py-3.5 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 font-medium rounded"
                                            placeholder="EMAIL ADDRESS *"
                                            maxLength={100}
                                            required
                                        />
                                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 mb-4 sm:mb-5">
                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            value={formData.phone || ''}
                                            onChange={(e) => {
                                                const digitsOnly = e.target.value.replace(/\D/g, '');
                                                setFormData({ ...formData, phone: digitsOnly ? parseInt(digitsOnly, 10) : 0 });
                                            }}
                                            className="w-full bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 sm:px-5 py-3.5 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 font-medium rounded"
                                            placeholder="MOBILE NUMBER *"
                                            pattern="^[0-9]{10}$"
                                            title="Please enter exactly 10 digits for your mobile number"
                                            maxLength={10}
                                            required
                                        />
                                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>

                                    <div className="relative group">
                                        <select
                                            value={formData.gameInterest}
                                            onChange={(e) => setFormData({ ...formData, gameInterest: e.target.value })}
                                            className="w-full h-full bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 sm:px-5 py-3.5 sm:py-4 text-white focus:outline-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 font-medium uppercase text-sm rounded appearance-none"
                                            required
                                        >
                                            <option value="">GAME OF INTEREST</option>
                                            <option value="BGMI">BGMI</option>
                                            <option value="Valorant">VALORANT</option>
                                            <option value="Free Fire">FREE FIRE</option>
                                            <option value="Pokémon Unite">POKÉMON UNITE</option>
                                            <option value="Indus">INDUS</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-red-500">
                                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                        </div>
                                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                    </div>
                                </div>

                                <div className="relative group mb-5">
                                    <textarea
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        rows={6}
                                        maxLength={500}
                                        className="w-full bg-black/50 border-l-4 border-red-600 border-r border-t border-b border-gray-700 px-4 sm:px-5 py-3.5 sm:py-4 text-white placeholder-gray-500 focus:outline-none focus:border-red-500 focus:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all duration-300 resize-none font-medium rounded"
                                        placeholder="LEAVE US A MESSAGE (Max 500 characters)..."
                                        required
                                    />
                                    <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`group relative w-full bg-gradient-to-r from-red-600 via-red-700 to-red-600 text-white font-black py-4 sm:py-5 uppercase tracking-widest text-base sm:text-lg overflow-hidden transition-all duration-300 border-l-4 border-red-400 border-r-2 border-t-2 border-b-2 border-r-red-500 border-t-red-500 border-b-red-500 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-[0_0_40px_rgba(220,38,38,0.6)]'}`}
                                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)' }}
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2.5 sm:gap-3">
                                        <span>{isSubmitting ? 'TRANSMITTING...' : 'SUBMIT'}</span>
                                        {!isSubmitting && <span className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform">→</span>}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </button>
                            </form>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

function HomePage() {
    const [heroEl, setHeroEl] = useState<HTMLElement | null>(null);
    const [activePopup, setActivePopup] = useState<'privacy' | 'terms' | 'support' | null>(null);
    const [modal, setModal] = useState({ isOpen: false, title: '', message: '' });

    const showModal = (title: string, message: string) => {
        setModal({ isOpen: true, title, message });
    };

    useEffect(() => {
        const el = document.getElementById('hero') as HTMLElement | null;
        setHeroEl(el);
    }, []);

    const scrollToSection = (sectionId: string) => {
        console.log('Scrolling to:', sectionId); // Debug log
        const element = document.getElementById(sectionId);
        console.log('Found element:', element); // Debug log

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <div className="min-h-[100svh] bg-black text-white overflow-x-hidden" style={{ backgroundColor: '#000000' }}>
            {/* Global Click Spark Effect */}
            <ClickSpark
                sparkColor="#ff0000"
                sparkSize={4}
                sparkRadius={7}
                sparkCount={6}
                duration={250}
                easing="ease-out"
                extraScale={1}
            />
            <PageLayout
                header={<Header heroEl={heroEl} />}
                footer={
                    <footer id="footer" className="relative overflow-hidden py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-black">
                        <div className="absolute inset-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900 via-black to-black opacity-60"></div>
                            <motion.div
                                animate={{
                                    background: [
                                        'radial-gradient(circle at 20% 80%, #C8102E 0%, transparent 50%)',
                                        'radial-gradient(circle at 80% 20%, #C8102E 0%, transparent 50%)',
                                        'radial-gradient(circle at 40% 40%, #C8102E 0%, transparent 50%)',
                                    ]
                                }}
                                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 opacity-20 hidden sm:block"
                            />
                        </div>

                        <div className="relative container-safe">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-10">
                                <div>
                                    <img src="/images/logos/Abz Logo Red.png" alt="AUTOBOTZ Logo" className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6" />
                                    <p className="text-gray-400 text-sm mb-5 sm:mb-6">
                                        Building the future of esports through professional team management,
                                        content creation, and competitive excellence across all gaming platforms.
                                    </p>
                                    {/* Social Links */}
                                    <div className="flex items-center space-x-4 mb-6">
                                        <a
                                            href="https://www.instagram.com/autobotz_esports?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-gray-900 border-l-4 border-red-600 flex items-center justify-center text-gray-400 hover:text-white transition-all transform hover:scale-110"
                                            aria-label="Instagram"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 w-full ml-auto mt-6 sm:mt-8 lg:mt-12">
                                    <div className="max-w-xl lg:ml-auto">
                                        <h3 className="text-white font-bold text-base sm:text-lg uppercase">Subscribe</h3>
                                        <p className="text-gray-400 text-sm mb-3 sm:mb-4">
                                            Don’t miss to subscribe to our new feeds, kindly fill the form below.
                                        </p>
                                        <form
                                            onSubmit={async (e) => {
                                                e.preventDefault();
                                                const emailInput = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                                                try {
                                                    const response = await fetch('http://localhost:3000/api/consultation', {
                                                        method: 'POST',
                                                        headers: { 'Content-Type': 'application/json' },
                                                        body: JSON.stringify({
                                                            name: 'Newsletter Subscriber',
                                                            email: emailInput,
                                                            gameInterest: 'Newsletter Subscription',
                                                            message: 'User subscribed to newsletter'
                                                        }),
                                                    });
                                                    const data = await response.json();
                                                    if (data.success) {
                                                        showModal('Subscribed', 'You have successfully joined our squad! Check your email for confirmation.');
                                                        (e.target as HTMLFormElement).reset();
                                                    } else {
                                                        showModal('Error', data.message || 'Communication failed. Please try again.');
                                                    }
                                                } catch (err) {
                                                    showModal('Offline', 'Could not reach the server. Please check your connection.');
                                                }
                                            }}
                                            className="flex flex-col sm:flex-row items-stretch gap-3"
                                        >
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                placeholder="Email Address"
                                                className="flex-1 bg-black/70 border border-gray-700 text-gray-200 placeholder-gray-500 px-4 py-3 focus:outline-none focus:border-red-500 rounded"
                                            />
                                            <button
                                                type="submit"
                                                className="px-5 py-3 bg-red-600 hover:bg-red-500 text-white font-bold transition-colors"
                                                style={{ clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%)' }}
                                            >
                                                Subscribe
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="border-t-2 border-gray-800 pt-4 sm:pt-6">
                                <div className="flex flex-col items-center gap-2 sm:gap-3 text-sm">
                                    <div className="flex flex-wrap items-center justify-center gap-4 sm:space-x-6 text-gray-500">
                                        <button
                                            onClick={() => setActivePopup('privacy')}
                                            className="hover:text-red-400 transition-colors cursor-pointer"
                                        >
                                            Privacy
                                        </button>
                                        <button
                                            onClick={() => setActivePopup('terms')}
                                            className="hover:text-red-400 transition-colors cursor-pointer"
                                        >
                                            Terms
                                        </button>
                                        <button
                                            onClick={() => setActivePopup('support')}
                                            className="hover:text-red-400 transition-colors cursor-pointer"
                                        >
                                            Support
                                        </button>
                                    </div>
                                    <p className="text-gray-500">© 2025 AUTOBOTZ ESPORTS. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </footer>
                }
                className="pt-16 sm:pt-14 lg:pt-16"
            >
                <Hero onShowModal={showModal} />
                <AboutSection />
                <HeroCarousel />
                <GamesSection />
                <VictoriesSection />
                <FoundersPage />
                <ConsultationPage onShowModal={showModal} />
            </PageLayout>

            {/* Global Custom Modal */}
            <Modal
                isOpen={modal.isOpen}
                onClose={() => setModal({ ...modal, isOpen: false })}
                title={modal.title}
                message={modal.message}
            />

            {/* Navigation Buttons 
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="fixed bottom-4 right-0 z-[9999] flex flex-col space-y-1.5 pr-2 pointer-events-auto"
            >
                {[
                    { id: 'hero', label: 'Home' },
                    { id: 'about', label: 'About' },
                    { id: 'founders', label: 'Founders' },
                ].map(btn => (
                    <button
                        key={btn.id}
                        onClick={() => scrollToSection(btn.id)}
                        className="px-3 py-1.5 text-xs font-bold transition-all duration-300 bg-black/90 backdrop-blur-sm text-gray-300 hover:text-white hover:bg-red-600 hover:shadow-lg hover:shadow-red-600/25 border-l-4 border-l-gray-700 border-r border-t border-b border-gray-700 hover:border-l-red-400 hover:border-r-red-500 hover:border-t-red-500 hover:border-b-red-500 uppercase tracking-wide cursor-pointer"
                        style={{ clipPath: 'polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%)', borderRadius: '4px 0 0 4px' }}
                    >
                        {btn.label}
                    </button>
                ))}
            </motion.div>*/}

            {/* Popup Modals */}
            {activePopup === 'privacy' && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-red-600 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">Privacy Policy</h2>
                                <button
                                    onClick={() => setActivePopup(null)}
                                    className="text-red-600 hover:text-red-400 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
                                <p>
                                    At AUTOBOTZ ESPORTS, we are committed to protecting your privacy and personal information.
                                    This Privacy Policy explains how we collect, use, and safeguard your data.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Information We Collect</h3>
                                <p>
                                    We collect information you provide directly to us, such as when you create an account,
                                    subscribe to our newsletter, or contact us for support.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">How We Use Your Information</h3>
                                <p>
                                    We use the information we collect to provide, maintain, and improve our services,
                                    communicate with you, and ensure the security of our platform.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Contact Us</h3>
                                <p>
                                    If you have any questions about this Privacy Policy, please contact us at
                                    privacy@autobotzesports.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'terms' && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-red-600 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">Terms of Service</h2>
                                <button
                                    onClick={() => setActivePopup(null)}
                                    className="text-red-600 hover:text-red-400 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
                                <p>
                                    Welcome to AUTOBOTZ ESPORTS. These Terms of Service govern your use of our website
                                    and services. By using our platform, you agree to these terms.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Acceptable Use</h3>
                                <p>
                                    You agree to use our services only for lawful purposes and in accordance with
                                    these Terms of Service. You may not use our services in any way that could
                                    damage, disable, or impair our platform.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Intellectual Property</h3>
                                <p>
                                    All content on our platform, including text, graphics, logos, and software,
                                    is the property of AUTOBOTZ ESPORTS and is protected by copyright and other
                                    intellectual property laws.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Contact Us</h3>
                                <p>
                                    If you have any questions about these Terms of Service, please contact us at
                                    legal@autobotzesports.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {activePopup === 'support' && (
                <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
                    <div className="bg-gray-900 border-2 border-red-600 max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4 sm:mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-white">Support</h2>
                                <button
                                    onClick={() => setActivePopup(null)}
                                    className="text-red-600 hover:text-red-400 text-2xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                            <div className="text-gray-300 space-y-3 sm:space-y-4 text-sm sm:text-base">
                                <p>
                                    Need help? We're here to assist you with any questions or issues you may have
                                    regarding our esports services and platform.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Contact Support</h3>
                                <p>
                                    <strong>Email:</strong> support@autobotzesports.com<br />
                                    <strong>Phone:</strong> +91 XXXX-XXXX-XX<br />
                                    <strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM IST
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Frequently Asked Questions</h3>
                                <p>
                                    Check our FAQ section for quick answers to common questions about our services,
                                    team management, and tournament participation.
                                </p>
                                <h3 className="text-lg sm:text-xl font-semibold text-white">Technical Support</h3>
                                <p>
                                    For technical issues with our platform or services, please provide detailed
                                    information about the problem you're experiencing for faster resolution.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default HomePage;
