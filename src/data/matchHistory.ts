export type MatchHistoryRecord = {
    date: string;
    placement: string;
    tier: string;
    tournament: string;
    prize: string;
};

// Organized by team ID
export const teamMatchHistory: Record<string, MatchHistoryRecord[]> = {
    'bgmi': [
        { date: '2026-02-01', placement: '6th', tier: 'Qualifier', tournament: 'Battlegrounds Mobile India Series 2026: The Grind', prize: '-' },
        { date: '2025-12-22', placement: '7th', tier: 'C-Tier', tournament: 'Skyesports Skirmish Series 2025', prize: '-' },
        { date: '2025-11-30', placement: '6th', tier: 'C-Tier', tournament: 'Reload Arena', prize: '-' },
        { date: '2025-11-16', placement: '12th', tier: 'B-Tier', tournament: 'Chennai Esports Global Championship 2025', prize: '-' },
        { date: '2025-10-09', placement: '18th', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Showdown 2025', prize: '-' },
        { date: '2025-09-07', placement: '7th', tier: 'Qualifier', tournament: 'BGMI Challengers Series', prize: '-' },
        { date: '2025-08-05', placement: '16th', tier: 'C-Tier', tournament: 'Survival Surge Chapter 1', prize: '-' },
        { date: '2025-07-21', placement: '9th', tier: 'B-Tier', tournament: 'G-League', prize: '-' },
        { date: '2025-07-20', placement: '1st', tier: 'C-Tier', tournament: 'Clash of Champions Season 2', prize: '-' },
        { date: '2025-06-28', placement: '6th', tier: 'D-Tier', tournament: 'Weltify Pro Clash', prize: '-' },
        { date: '2025-05-18', placement: '2nd', tier: 'B-Tier', tournament: 'Skyesports Championship 2024', prize: '-' },
        { date: '2025-05-11', placement: '1st', tier: 'C-Tier', tournament: 'Chillz Cup', prize: '-' },
        { date: '2025-02-23', placement: '56th', tier: 'Qualifier', tournament: 'Battlegrounds Mobile India Series 2025: The Grind', prize: '-' },
        { date: '2024-11-13', placement: '22nd', tier: 'C-Tier', tournament: '1M DYNASTY', prize: '-' },
        { date: '2024-10-24', placement: '28th', tier: 'B-Tier', tournament: 'THUG Invitational 2024', prize: '-' },
        { date: '2024-06-22', placement: '16th', tier: 'C-Tier', tournament: 'Battle For Revolution Season 3', prize: '-' },
        { date: '2024-05-22', placement: '20th', tier: 'B-Tier', tournament: 'RA Esports - Battle For Swaraj Season 1', prize: '-' },
        { date: '2024-05-08', placement: '27th', tier: 'C-Tier', tournament: 'Clash of Warriors Season 2', prize: '-' },
        { date: '2024-04-15', placement: '27th', tier: 'B-Tier', tournament: 'RA Esports - Champions Gala Season 1', prize: '-' },
        { date: '2024-03-19', placement: '9th', tier: 'C-Tier', tournament: 'Lidoma Masters Showdown', prize: '-' },
        { date: '2024-02-04', placement: '26th', tier: 'A-Tier', tournament: 'ESL Snapdragon Pro Series: 2024 BGMI', prize: '-' },
        { date: '2024-02-01', placement: '17th', tier: 'B-Tier', tournament: 'iQOO Pro Series 2024', prize: '-' },
        { date: '2024-01-31', placement: '3rd', tier: 'B-Tier', tournament: 'Upthrust Esports - The Patriot Cup', prize: '-' },
        { date: '2024-01-06', placement: '28th', tier: 'B-Tier', tournament: 'The World Of Battle: Winter Invitational', prize: '-' },
        { date: '2023-12-27', placement: '23rd', tier: 'B-Tier', tournament: 'APL Winter Showdown Season 2', prize: '-' },
        { date: '2023-12-17', placement: '15th', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Pro Series 2023', prize: '$1,204' },
        { date: '2023-11-05', placement: '23rd', tier: 'A-Tier', tournament: 'Skyesports Championship 5.0', prize: '-' },
        { date: '2023-07-13', placement: '11th', tier: 'B-Tier', tournament: 'Villager Esports Pro Invitational 2023', prize: '-' },
        { date: '2023-07-11', placement: '23rd', tier: 'C-Tier', tournament: 'Fight Night Season 5', prize: '-' },
        { date: '2023-07-02', placement: '16th', tier: 'B-Tier', tournament: 'IQOO Pro Series', prize: '-' },
        { date: '2023-06-18', placement: '19th', tier: 'B-Tier', tournament: 'Skyesports Champions Series', prize: '-' },
        { date: '2022-08-03', placement: '18th', tier: 'C-Tier', tournament: 'Rooter Invitational Series', prize: '-' },
        { date: '2022-07-24', placement: '22nd', tier: 'B-Tier', tournament: 'Battlegrounds Mobile India Showdown 2022', prize: '-' },
        { date: '2022-06-12', placement: '12th', tier: 'A-Tier', tournament: 'Battlegrounds Mobile India Pro Series - Season 1', prize: '$2,558' },
        { date: '2022-05-15', placement: '17th - 20th', tier: 'Qualifier', tournament: 'Battlegrounds Mobile India Open Challenge 2022', prize: '-' }
    ],
    'ff': [
        // Free fire matches will go here
    ],
    'pokemon': [
        // Pokemon unite matches will go here
    ],
    'indus': [
        // Indus matches will go here
    ]
};
