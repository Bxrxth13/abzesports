import React from 'react';
import { Game } from '../data/sampleData';

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, index, onClick }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${game.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent group-hover:from-red-900/80 transition-all duration-500" />
      
      {/* Glassmorphism Effect */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-black/20 border border-red-600/20 group-hover:border-red-600/60 transition-all duration-500" />
      
      {/* Content */}
      <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
        <div>
          <h3 className="text-3xl font-black text-white mb-3 group-hover:text-red-400 transition-colors">
            {game.title}
          </h3>
          <p className="text-gray-300 group-hover:text-white transition-colors">
            {game.description}
          </p>
        </div>
        
        {/* Stats */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-300">
              <span>👥</span>
              <span>{game.playerCount} Players</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span>🏆</span>
              <span>{game.tournamentCount} Tournaments</span>
            </div>
          </div>
          
          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-white font-semibold group-hover:text-red-400 transition-colors">
              View Players & Creators
            </span>
            <div className="text-red-600 group-hover:text-red-400">
              →
            </div>
          </div>
        </div>
      </div>
      
      {/* Hover Glow Effect */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(200, 16, 46, 0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  );
};

export default GameCard;