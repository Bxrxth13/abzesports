import React from 'react';
import { Player } from '../../data/sampleData';

interface PlayerCardProps {
  player: Player;
  index: number;
  onClick: () => void;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player, index, onClick }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return '▶️';
      case 'twitch': return '📺';
      case 'instagram': return '📷';
      default: return null;
    }
  };

  return (
    <article
      onClick={onClick}
      className="group cursor-pointer relative bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300"
    >
      <div className="relative w-full overflow-hidden [aspect-ratio:3/4]">
        <img
          src={(player as any).poster ?? player.avatar}
          alt={player.name}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />

        {/* soft gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* name bar pinned to bottom */}
        <div className="absolute inset-x-0 bottom-0 bg-black/75 backdrop-blur-[1px] text-white text-sm sm:text-base font-semibold tracking-wide uppercase text-center py-2">
          {player.name}
        </div>
      </div>

      {/* BODY */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <div>
            <p className="text-red-500 font-semibold">@{player.handle}</p>
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full">{player.role}</span>
              <span className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">{player.rank}</span>
            </div>
          </div>
          <img src={player.avatar} alt={`${player.name} avatar`} className="w-10 h-10 rounded-full border-2 border-red-600 object-cover" />
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-3 sm:mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center mb-1.5"><span className="text-red-600 mr-1">📈</span></div>
            <div className="text-lg sm:text-2xl font-bold text-white">{player.stats.winRate}</div>
            <div className="text-[11px] sm:text-xs text-gray-400">Win Rate</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1.5"><span className="text-red-600 mr-1">🎯</span></div>
            <div className="text-lg sm:text-2xl font-bold text-white">{player.stats.kd}</div>
            <div className="text-[11px] sm:text-xs text-gray-400">K/D Ratio</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-1.5"><span className="text-red-600 mr-1">🏆</span></div>
            <div className="text-lg sm:text-2xl font-bold text-white">{player.stats.matches}</div>
            <div className="text-[11px] sm:text-xs text-gray-400">Matches</div>
          </div>
        </div>

        <p className="text-gray-400 text-sm line-clamp-2 mb-3 sm:mb-4">{player.bio}</p>

        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {Object.entries(player.socials).map(([platform, url]) => {
              const icon = getSocialIcon(platform);
              if (!icon || !url) return null;
              return (
                <a key={platform} href={url} className="text-gray-400 hover:text-red-600 transition-colors text-lg" onClick={(e) => e.stopPropagation()}>
                  {icon}
                </a>
              );
            })}
          </div>
          <button className="text-red-600 font-semibold text-sm hover:text-red-400 transition-colors">
            View Profile →
          </button>
        </div>
      </div>
    </article>
  );
};

export default PlayerCard;
