import React from 'react';
import Button from '../shared/Button';
import { Game } from '../../data/sampleData';

interface GameHeaderProps {
  game: Game;
  onBack: () => void;
}

const GameHeader: React.FC<GameHeaderProps> = ({ game, onBack }) => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${game.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors mb-8"
        >
          <span>← Back to Games</span>
        </button>
        
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4">
              {game.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl">
              {game.description}
            </p>
            
            {/* Stats */}
            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-300">
                <Users className="w-5 h-5 text-red-600" />
                <span>{game.playerCount} Active Players</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Trophy className="w-5 h-5 text-red-600" />
                <span>{game.tournamentCount} Tournaments</span>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {<Button variant="primary" size="lg">
              Join Team
            </Button> }
            { <Button variant="secondary" size="lg">
              Follow Creators
            </Button> }
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameHeader;