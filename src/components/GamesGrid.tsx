import React from 'react';
import GameCard from './GameCard';
import AnimatedSection from './shared/AnimatedSection';
import { games } from '../data/sampleData';

interface GamesGridProps {
  onGameClick: (gameSlug: string) => void;
}

const GamesGrid: React.FC<GamesGridProps> = ({ onGameClick }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            OUR <span className="text-red-600">GAMES</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From battle royales to MOBAs, we dominate every arena. Join our elite teams 
            and compete at the highest level across multiple gaming platforms.
          </p>
        </AnimatedSection>

        {/* 2-up on mobile, same md layout */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
          {games.map((game, index) => (
            <GameCard
              key={game.id}
              game={game}
              index={index}
              onClick={() => onGameClick(game.slug)}
            />
          ))}
        </div>

        <AnimatedSection delay={0.6} className="text-center mt-16">
          <div className="inline-block">
            <button className="bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-4 px-8 rounded-full hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-red-600/25">
              Explore All Teams
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default GamesGrid;
