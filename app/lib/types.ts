import type { RouteLocationRaw } from 'vue-router';

export type PROFILE = {
  id: string;
  icon: string;
  name: string;
  requiresAuth?: boolean;
};

export type DropdownItem = {
  icon: string;
  label: string;
  to?: RouteLocationRaw;
  size?: string;
  onClick?: () => any;
};

export type Icons = {
  'home': string;
  'briefcase': string;
  'toolbox': string;
  'git': string;
  'comments': string;
  'human': string;
  'about': string;
  'hire': string;
  'chevron-up': string;
  'chevron-down': string;
  // navToggle: {
  //   left: string;
  //   right: string;
  // };
};
