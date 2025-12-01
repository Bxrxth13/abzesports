import React, { useState, useMemo } from 'react';
import GameHeader from '../components/GameDetail/GameHeader';
import TabSwitcher from '../components/GameDetail/TabSwitcher';
import Filters from '../components/GameDetail/Filters';
import PlayerCard from '../components/GameDetail/PlayerCard';
import CreatorCard from '../components/GameDetail/CreatorCard';
import Modal from '../components/shared/Modal';
import { games, players, creators, Player, Creator } from '../data/sampleData';

interface GamePageProps {
  gameSlug: string;
  onBack: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ gameSlug, onBack }) => {
  const [activeTab, setActiveTab] = useState<'players' | 'creators'>('players');
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [rankFilter, setRankFilter] = useState('All');
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null);
  const [selectedCreator, setSelectedCreator] = useState<Creator | null>(null);

  const game = games.find(g => g.slug === gameSlug);
  
  if (!game) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Game Not Found</h2>
          <button
            onClick={onBack}
            className="text-red-600 hover:text-red-400 transition-colors"
          >
            ← Back to Games
          </button>
        </div>
      </div>
    );
  }

  const filteredPlayers = useMemo(() => {
    return players.filter(player => {
      const matchesSearch = player.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          player.handle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesRole = roleFilter === 'All' || player.role === roleFilter;
      const matchesRank = rankFilter === 'All' || player.rank === rankFilter;
      const matchesGame = player.game === game.title;
      
      return matchesSearch && matchesRole && matchesRank && matchesGame;
    });
  }, [searchTerm, roleFilter, rankFilter, game.title]);

  const filteredCreators = useMemo(() => {
    return creators.filter(creator => {
      const matchesSearch = creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          creator.handle.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesGame = creator.game === game.title;
      
      return matchesSearch && matchesGame;
    });
  }, [searchTerm, game.title]);

  return (
    <div className="min-h-screen bg-black">
      <GameHeader game={game} onBack={onBack} />
      
      <section className="py-[var(--sec-y-mobile)] md:py-[var(--sec-y-tablet)] lg:py-[var(--sec-y-desktop)] bg-gradient-to-b from-black to-gray-900">
        <div className="container-safe">
          <TabSwitcher activeTab={activeTab} onTabChange={setActiveTab} />
          
          {activeTab === 'players' && (
            <Filters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              roleFilter={roleFilter}
              onRoleChange={setRoleFilter}
              rankFilter={rankFilter}
              onRankChange={setRankFilter}
            />
          )}
          
          {activeTab === 'players' ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 auto-rows-auto">
              {filteredPlayers.map((player, index) => (
                <PlayerCard
                  key={player.id}
                  player={player}
                  index={index}
                  onClick={() => setSelectedPlayer(player)}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {filteredCreators.map((creator, index) => (
                <CreatorCard
                  key={creator.id}
                  creator={creator}
                  index={index}
                  onClick={() => setSelectedCreator(creator)}
                />
              ))}
            </div>
          )}
          
          {((activeTab === 'players' && filteredPlayers.length === 0) ||
            (activeTab === 'creators' && filteredCreators.length === 0)) && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-xl">
                No {activeTab} found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Player Modal */}
      <Modal
        isOpen={!!selectedPlayer}
        onClose={() => setSelectedPlayer(null)}
        title={selectedPlayer ? `${selectedPlayer.name} Profile` : ''}
      >
        {selectedPlayer && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedPlayer.avatar}
                alt={selectedPlayer.name}
                className="w-20 h-20 rounded-full border-4 border-red-600 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedPlayer.name}</h3>
                <p className="text-red-600 font-semibold">@{selectedPlayer.handle}</p>
                <div className="flex space-x-2 mt-2">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {selectedPlayer.role}
                  </span>
                  <span className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {selectedPlayer.rank}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 bg-gray-800 rounded-lg p-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPlayer.stats.winRate}</div>
                <div className="text-gray-400 text-sm">Win Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPlayer.stats.kd}</div>
                <div className="text-gray-400 text-sm">K/D Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white">{selectedPlayer.stats.matches}</div>
                <div className="text-gray-400 text-sm">Matches</div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold">Bio</h4>
              <p className="text-gray-300">{selectedPlayer.bio}</p>
            </div>
            
            <div className="flex space-x-4">
              {Object.entries(selectedPlayer.socials).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors capitalize"
                  >
                    {platform}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </Modal>

      {/* Creator Modal */}
      <Modal
        isOpen={!!selectedCreator}
        onClose={() => setSelectedCreator(null)}
        title={selectedCreator ? `${selectedCreator.name} Profile` : ''}
      >
        {selectedCreator && (
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img
                src={selectedCreator.avatar}
                alt={selectedCreator.name}
                className="w-20 h-20 rounded-full border-4 border-red-600 object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">{selectedCreator.name}</h3>
                <p className="text-red-600 font-semibold">@{selectedCreator.handle}</p>
                <p className="text-gray-400">{selectedCreator.subscribers} subscribers</p>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-4">
              <h4 className="text-white font-semibold">Latest Video</h4>
              <div className="aspect-video rounded-lg overflow-hidden mb-3">
                <img
                  src={selectedCreator.latestVideo.thumbnail}
                  alt={selectedCreator.latestVideo.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h5 className="text-white font-medium">{selectedCreator.latestVideo.title}</h5>
              <p className="text-gray-400 text-sm">{selectedCreator.latestVideo.views} views</p>
            </div>
            
            <div className="flex space-x-4">
              {Object.entries(selectedCreator.socials).map(([platform, url]) => {
                if (!url) return null;
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors capitalize"
                  >
                    {platform}
                  </a>
                );
              })}
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                Contact for Collab
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GamePage;