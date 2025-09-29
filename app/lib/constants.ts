import type { DropdownItem, Icons, PROFILE } from './types';

export const PROFILES: PROFILE[] = [
  { id: 'recruiter', icon: '102', name: 'Recruiter' },
  { id: 'engineer', icon: '161', name: 'Engineer' },
  { id: 'normal', icon: '93', name: 'Anonymous' },
  { id: 'kids', icon: '16', name: 'Kids' },
  { id: 'admin', icon: '133', name: 'Admin', requiresAuth: true },
];

export const NAVIGATION_ITEMS: DropdownItem[] = [
  {
    icon: 'home',
    label: 'Home',
    to: '/browse',
  },
  {
    icon: 'briefcase',
    label: 'Experience',
    to: '/experience',
  },
  {
    icon: 'toolbox',
    label: 'Skills',
    to: '/skills',
  },
  {
    icon: 'git',
    label: 'Projects',
    to: '/projects',
  },
  {
    icon: 'comments',
    label: 'Testimonials',
    to: '/testimonials',
  },
  {
    icon: 'about',
    label: 'About',
    to: '/about',
  },
  {
    icon: 'hire',
    label: 'Hire Me',
    to: '/hire',
  },
];

export const LIGHT_MODE_ICONS: Icons = {
  'home': 'material-symbols:house',
  'briefcase': 'tabler:briefcase-filled',
  'toolbox': 'material-symbols:service-toolbox',
  'git': 'majesticons:git-branch',
  'comments': 'majesticons:comments',
  'human': 'mdi:human-male-board-poll',
  'about': 'material-symbols:contact-mail',
  'hire': 'majesticons:paper-airplane',
  'chevron-up': 'majesticons:chevron-up-circle',
  'chevron-down': 'majesticons:chevron-down-circle',
};
export const DARK_MODE_ICONS: Icons = {
  'home': 'material-symbols:house-outline',
  'briefcase': 'tabler:briefcase-2',
  'toolbox': 'material-symbols:service-toolbox-outline',
  'git': 'majesticons:git-branch-line',
  'comments': 'majesticons:comments-line',
  'human': 'mdi:human-male-board',
  'about': 'material-symbols:contact-mail-outline',
  'hire': 'majesticons:paper-airplane-line',
  'chevron-up': 'majesticons:chevron-up-circle-line',
  'chevron-down': 'majesticons:chevron-down-circle-line',
};
