import React from 'react';
import Hero from '../components/Hero';
import GamesGrid from '../components/GamesGrid';

interface HomeProps {
  onGameClick: (gameSlug: string) => void;
}

const Home: React.FC<HomeProps> = ({ onGameClick }) => {
  return (
    <>
      <Hero />
      <GamesGrid onGameClick={onGameClick} />
    </>
  );
};

export default Home;