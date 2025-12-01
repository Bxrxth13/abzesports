export interface Player {
  id: string;
  name: string;
  handle: string;
  role: string;
  rank: string;
  game: string;
  avatar: string;
  stats: {
    winRate: string;
    kd: string;
    matches: number;
  };
  bio: string;
  socials: {
    youtube?: string;
    twitch?: string;
    instagram?: string;
  };
}

export interface Creator {
  id: string;
  name: string;
  handle: string;
  game: string;
  avatar: string;
  platform: 'youtube' | 'twitch' | 'both';
  subscribers: string;
  latestVideo: {
    title: string;
    thumbnail: string;
    views: string;
  };
  socials: {
    youtube?: string;
    twitch?: string;
    instagram?: string;
  };
}

export interface Game {
  id: string;
  title: string;
  slug: string;
  image: string;
  playerCount: number;
  tournamentCount: number;
  description: string;
}

export const games: Game[] = [
  {
    id: '1',
    title: 'BGMI',
    slug: 'bgmi',
    image: 'https://images.pexels.com/photos/7862614/pexels-photo-7862614.jpeg',
    playerCount: 24,
    tournamentCount: 12,
    description: 'Battlegrounds Mobile India - Battle Royale Excellence'
  },
  {
    id: '2',
    title: 'Free Fire',
    slug: 'free-fire',
    image: 'https://images.pexels.com/photos/7862613/pexels-photo-7862613.jpeg',
    playerCount: 18,
    tournamentCount: 8,
    description: 'Fast-paced Battle Royale Action'
  },
  {
    id: '3',
    title: 'Pokémon Unite',
    slug: 'pokemon-unite',
    image: 'https://images.pexels.com/photos/9072313/pexels-photo-9072313.jpeg',
    playerCount: 12,
    tournamentCount: 6,
    description: 'Strategic MOBA Pokemon Battles'
  },
  {
    id: '4',
    title: 'Indus',
    slug: 'indus',
    image: 'https://images.pexels.com/photos/7862471/pexels-photo-7862471.jpeg',
    playerCount: 15,
    tournamentCount: 4,
    description: 'Next-Gen Indian Battle Royale'
  }
];

export const players: Player[] = [
  {
    id: '1',
    name: 'Arjun "Thunder" Sharma',
    handle: 'ThunderStrike',
    role: 'Assault',
    rank: 'Conqueror',
    game: 'BGMI',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    stats: { winRate: '78%', kd: '3.2', matches: 1250 },
    bio: 'Professional BGMI player with 3+ years of competitive experience.',
    socials: { youtube: 'https://youtube.com', twitch: 'https://twitch.tv' }
  },
  {
    id: '2',
    name: 'Priya "Phoenix" Patel',
    handle: 'PhoenixRise',
    role: 'Support',
    rank: 'Ace Master',
    game: 'BGMI',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
    stats: { winRate: '82%', kd: '2.8', matches: 980 },
    bio: 'Strategic support player specializing in team coordination.',
    socials: { instagram: 'https://instagram.com', twitch: 'https://twitch.tv' }
  },
  {
    id: '3',
    name: 'Rajesh "Viper" Kumar',
    handle: 'ViperStrike',
    role: 'Sniper',
    rank: 'Heroic',
    game: 'Free Fire',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    stats: { winRate: '75%', kd: '4.1', matches: 2100 },
    bio: 'Long-range specialist with precision shooting skills.',
    socials: { youtube: 'https://youtube.com' }
  }
];

export const creators: Creator[] = [
  {
    id: '1',
    name: 'Gaming Guru',
    handle: 'GamingGuruOfficial',
    game: 'BGMI',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    platform: 'youtube',
    subscribers: '250K',
    latestVideo: {
      title: 'Top 10 BGMI Tips for Season 3',
      thumbnail: 'https://images.pexels.com/photos/7862614/pexels-photo-7862614.jpeg',
      views: '45K'
    },
    socials: { youtube: 'https://youtube.com', instagram: 'https://instagram.com' }
  },
  {
    id: '2',
    name: 'StreamQueen',
    handle: 'StreamQueenLive',
    game: 'Free Fire',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
    platform: 'twitch',
    subscribers: '120K',
    latestVideo: {
      title: 'Epic Free Fire Squad Wins',
      thumbnail: 'https://images.pexels.com/photos/7862613/pexels-photo-7862613.jpeg',
      views: '28K'
    },
    socials: { twitch: 'https://twitch.tv', instagram: 'https://instagram.com' }
  }
];

export const founders = [
  {
    id: '1',
    name: 'Vikram Autobot',
    title: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    quote: 'Building the future of esports, one team at a time.',
    bio: 'Former professional gamer turned entrepreneur with 8+ years in the esports industry.',
    milestones: [
      { year: '2018', event: 'Founded Autobotz' },
      { year: '2019', event: 'Signed first professional team' },
      { year: '2021', event: 'Expanded to content creation' },
      { year: '2023', event: 'Reached 100+ managed players' }
    ],
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com',
      instagram: 'https://instagram.com'
    }
  },
  {
    id: '2',
    name: 'Ananya Tech',
    title: 'COO & Co-Founder',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg',
    quote: 'Excellence in esports requires precision in operations.',
    bio: 'Operations expert with MBA from IIM and passion for competitive gaming.',
    milestones: [
      { year: '2018', event: 'Co-founded Autobotz' },
      { year: '2020', event: 'Launched training programs' },
      { year: '2022', event: 'International tournament partnerships' },
      { year: '2024', event: 'AI-powered player analytics launch' }
    ],
    socials: {
      twitter: 'https://twitter.com',
      linkedin: 'https://linkedin.com'
    }
  }
];