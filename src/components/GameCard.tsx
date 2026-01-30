import React from 'react';
import { Users, Trophy, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Game } from '../data/sampleData';

interface GameCardProps {
  game: Game;
  index: number;
  onClick: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, index, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
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
      <motion.div
        className="absolute inset-0 backdrop-blur-[1px] bg-black/20 border border-red-600/20 group-hover:border-red-600/60 transition-all duration-500"
        whileHover={{ backdropFilter: 'blur(2px)' }}
      />

      {/* Content */}
      <div className="relative z-10 p-8 h-80 flex flex-col justify-between">
        <div>
          <motion.h3
            className="text-3xl font-black text-white mb-3 group-hover:text-red-400 transition-colors"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.3 }}
          >
            {game.title}
          </motion.h3>
          <motion.p
            className="text-gray-300 group-hover:text-white transition-colors"
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.4 }}
          >
            {game.description}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2 text-gray-300">
              <Users size={16} />
              <span>{game.playerCount} Players</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Trophy size={16} />
              <span>{game.tournamentCount} Tournaments</span>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.6 }}
          >
            <span className="text-white font-semibold group-hover:text-red-400 transition-colors">
              View Players & Creators
            </span>
            <motion.div
              whileHover={{ x: 5 }}
              className="text-red-600 group-hover:text-red-400"
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(circle at center, rgba(200, 16, 46, 0.3) 0%, transparent 70%)'
        }}
      />
    </motion.div>
  );
};

export default GameCard;