import React from 'react';
import Button from './shared/Button';

const Hero: React.FC = () => {
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
          alt="ABZ Esports Hero"
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
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight">
            AUTOBOTZ <span className="text-red-600">ESPORTS</span>
          </h1>
        </div>

        <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white max-w-4xl mx-auto leading-tight">
          We Build <span className="text-red-600">Teams</span>. We Create <span className="text-red-600">Legends</span>.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto">
          {[
            { icon: '👥', label: 'Active Players', value: '100+' },
            { icon: '🏆', label: 'Tournaments', value: '30+' },
            { icon: '🎮', label: 'Games', value: '4' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center"
            >
              <div className="text-4xl text-red-600 mx-auto mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
          <Button variant="primary" size="lg" className="text-lg px-10 sm:px-12 py-4">
            Join a Team
          </Button>
          <Button variant="secondary" size="lg" className="text-lg px-10 sm:px-12 py-4">
            <span className="mr-2">▶️</span>
            Watch Live
          </Button>
        </div>
      </div>

      {/* Bottom blocker to ensure smooth transition on mobile */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-3 sm:h-6 bg-black z-30" />
    </section>
  );
};

export default Hero;
