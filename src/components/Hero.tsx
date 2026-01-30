import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Button from './shared/Button';

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="
        relative isolate z-10 bg-black overflow-hidden
        pb-0 sm:pb-4 pt-2 sm:pt-4
        md:min-h-[64vh] lg:min-h-[80vh]
        flex items-center justify-center
      "
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/abzposter.jpg"
          alt="AUTOBOTZ Esports Hero"
          className="
            w-full h-full
            object-cover
            object-[center_15%] sm:object-[center_20%] md:object-center
            transition-transform duration-500
            md:scale-100
          "
        />

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/55 to-black/80 md:from-black/20 md:via-black/45 md:to-black/70" />

        {/* Subtle animated red wash (hidden on small screens) */}
        {!prefersReducedMotion && (
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 80%, rgba(200,16,46,0.35) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 20%, rgba(200,16,46,0.35) 0%, transparent 50%)',
                'radial-gradient(circle at 40% 40%, rgba(200,16,46,0.35) 0%, transparent 50%)',
              ],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-30 hidden sm:block"
          />
        )}

        {/* Animated Particles (desktop/tablet only) */}
        {!prefersReducedMotion && (
          <div className="hidden sm:block">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-red-500 rounded-full opacity-30"
                animate={{
                  x: [Math.random() * 1200, Math.random() * 1200],
                  y: [Math.random() * 800, Math.random() * 800],
                }}
                transition={{ duration: 15 + i * 2, repeat: Infinity, ease: 'linear' }}
                style={{ left: Math.random() * 100 + '%', top: Math.random() * 100 + '%' }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            AUTOBOTZ <span className="text-red-600">ESPORTS</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight"
        >
          We Build<span className="text-red-600">Teams</span>. We Create <span className="text-red-600">Legends</span>.
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"
        >
          {[
            { icon: '👥', label: 'Active Players', value: '100+' },
            { icon: '🏆', label: 'Tournaments', value: '30+' },
            { icon: '🎮', label: 'Games', value: '4' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl text-red-600 mx-auto mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
        >
          <Button variant="primary" size="lg" className="text-lg px-10 sm:px-12 py-4">
            Join a Team
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-10 sm:px-12 py-4">
            <span className="mr-2">▶️</span>
            Watch Live
          </Button>
        </motion.div>

        {/* Scroll Indicator (absolute – does not affect height) */}
        {!prefersReducedMotion && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-white rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Bottom blocker to ensure smooth transition on mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 sm:h-6 bg-black z-30" />
    </section>
  );
};

export default Hero;
