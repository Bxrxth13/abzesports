import React from 'react';
import { Creator } from '../../data/sampleData';

interface CreatorCardProps {
  creator: Creator;
  index: number;
  onClick: () => void;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ creator, index, onClick }) => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'youtube': return Youtube;
      case 'twitch': return Twitch;
      case 'instagram': return Instagram;
      default: return null;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'youtube': return 'text-red-500';
      case 'twitch': return 'text-purple-500';
      default: return 'text-red-600';
    }
  };

  return (
    <div
      className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-red-600 transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Latest Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={creator.latestVideo.thumbnail}
          alt={creator.latestVideo.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-white text-2xl">▶</span>
          </div>
        </div>
        
        {/* Video Info */}
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white font-semibold text-sm line-clamp-1 mb-1">
            {creator.latestVideo.title}
          </h4>
          <div className="flex items-center space-x-2 text-xs text-gray-300">
            <Eye className="w-3 h-3" />
            <span>{creator.latestVideo.views} views</span>
          </div>
        </div>
      </div>
      
      {/* Creator Info */}
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-12 h-12 rounded-full border-2 border-red-600 object-cover"
          />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors">
              {creator.name}
            </h3>
            <p className="text-gray-400 text-sm">@{creator.handle}</p>
          </div>
          
          {/* Platform Badge */}
          <div className={`p-2 rounded-full ${getPlatformColor(creator.platform)}`}>
            {creator.platform === 'youtube' && <Youtube className="w-5 h-5" />}
            {creator.platform === 'twitch' && <Twitch className="w-5 h-5" />}
          </div>
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <Users className="w-4 h-4 text-red-600" />
            <span className="text-white font-semibold">{creator.subscribers}</span>
            <span className="text-gray-400 text-sm">subscribers</span>
          </div>
          <span className="text-sm bg-gray-800 text-gray-300 px-2 py-1 rounded-full capitalize">
            {creator.game}
          </span>
        </div>
        
        {/* Social Links & CTA */}
        <div className="flex items-center justify-between">
          <div className="flex space-x-3">
            {Object.entries(creator.socials).map(([platform, url]) => {
              const Icon = getSocialIcon(platform);
              if (!Icon || !url) return null;
              
              return (
                <a
                  key={platform}
                  href={url}
                  className="text-gray-400 hover:text-red-600 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          
          <button
            className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatorCard;