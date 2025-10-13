import type { EnvSchema } from './env';
import type { DropdownItem, Icons, PROFILE } from './types';

export const MOCK_ENV: EnvSchema = {
  NODE_ENV: '',
  // # TURSO
  TURSO_DATABASE_URL: '',
  TURSO_AUTH_TOKEN: '',
  // # BETTER AUTH
  BETTER_AUTH_SECRET: '',
  BETTER_AUTH_URL: '',
  // # GITHUB
  AUTH_GITHUB_CLIENT_ID: '',
  AUTH_GITHUB_CLIENT_SECRET: '',
};

export const PROFILES: PROFILE[] = [
  { id: 'recruiter', icon: '102', name: 'Recruiter' },
  { id: 'engineer', icon: '161', name: 'Engineer' },
  { id: 'normal', icon: '93', name: 'Anonymous' },
  { id: 'kids', icon: '16', name: 'Kids' },
  { id: 'admin', icon: '133', name: 'Admin', requiresAuth: true },
];

export const USER_ITEMS: DropdownItem[] = [
  {
    icon: 'share',
    label: 'Exit Profile',
    classes: 'p-1',
    to: '/Signout',
  },

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
  // {
  //   icon: 'hire',
  //   label: 'Hire Me',
  //   to: '/hire',
  // },
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
  'share': 'fluent:share-16-filled',
  'gear': 'majesticons:settings-cog',
  'user': 'majesticons:user-circle',
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
  'share': 'fluent:share-16-regular',
  'gear': 'majesticons:settings-cog-line',
  'user': 'majesticons:user-circle-line',
};
