export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  role: 'Player' | 'Club' | 'Agent' | 'Scout';
};

export const Users: User[] = [
  {
    id: 1,
    name: 'Alice Player',
    email: 'alice@player.com',
    password: 'player123',
    role: 'Player',
  },
  {
    id: 2,
    name: 'Bob Club',
    email: 'bob@club.com',
    password: 'club123',
    role: 'Club',
  },
  {
    id: 3,
    name: 'Charlie Agent',
    email: 'charlie@agent.com',
    password: 'agent123',
    role: 'Agent',
  },
  {
    id: 4,
    name: 'Diana Scout',
    email: 'diana@scout.com',
    password: 'scout123',
    role: 'Scout',
  },
];