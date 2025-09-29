import type { PROFILE } from './types';

export const PROFILES: PROFILE[] = [
  { id: 'recruiter', icon: '102', name: 'Recruiter' },
  { id: 'engineer', icon: '161', name: 'Engineer' },
  { id: 'normal', icon: '93', name: 'Anonymous' },
  { id: 'kids', icon: '16', name: 'Kids' },
  { id: 'admin', icon: '133', name: 'Admin', requiresAuth: true },
];
