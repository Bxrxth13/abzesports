import React from 'react';

interface TabSwitcherProps {
  activeTab: 'players' | 'creators';
  onTabChange: (tab: 'players' | 'creators') => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex bg-gray-800 rounded-full p-1 max-w-xs mx-auto mb-8">
      {[
        { id: 'players', label: 'Players' },
        { id: 'creators', label: 'Creators' }
      ].map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id as 'players' | 'creators')}
          className="relative flex-1 py-3 px-6 text-sm font-semibold transition-colors duration-300 rounded-full"
        >
          {activeTab === tab.id && (
            <div className="absolute inset-0 bg-red-600 rounded-full" />
          )}
          <span
            className={`relative z-10 ${
              activeTab === tab.id ? 'text-white' : 'text-gray-400'
            }`}
          >
            {tab.label}
          </span>
        </button>
      ))}
    </div>
  );
};

export default TabSwitcher;