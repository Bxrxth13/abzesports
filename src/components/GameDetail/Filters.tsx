import React from 'react';

interface FiltersProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  roleFilter: string;
  onRoleChange: (role: string) => void;
  rankFilter: string;
  onRankChange: (rank: string) => void;
}

const Filters: React.FC<FiltersProps> = ({
  searchTerm,
  onSearchChange,
  roleFilter,
  onRoleChange,
  rankFilter,
  onRankChange
}) => {
  const roles = ['All', 'Assault', 'Support', 'Sniper', 'IGL'];
  const ranks = ['All', 'Conqueror', 'Ace Master', 'Ace', 'Crown', 'Diamond'];

  return (
    <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
      <div className="flex items-center space-x-2 mb-4">
        <Filter className="w-5 h-5 text-red-600" />
        <h3 className="text-lg font-semibold text-white">Filters</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search players..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-red-600 transition-colors"
          />
        </div>
        
        {/* Role Filter */}
        <select
          value={roleFilter}
          onChange={(e) => onRoleChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
        >
          {roles.map((role) => (
            <option key={role} value={role} className="bg-gray-800">
              {role === 'All' ? 'All Roles' : role}
            </option>
          ))}
        </select>
        
        {/* Rank Filter */}
        <select
          value={rankFilter}
          onChange={(e) => onRankChange(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
        >
          {ranks.map((rank) => (
            <option key={rank} value={rank} className="bg-gray-800">
              {rank === 'All' ? 'All Ranks' : rank}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;