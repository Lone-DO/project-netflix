import { mockNuxtImport } from '@nuxt/test-utils/runtime';
import { vi } from 'vitest';

type ColorModeInstance = {
  preference: string;
  value: string;
  unknown: boolean;
  forced: boolean;
};

// Create a hoisted mock for useColorMode
const { useColorModeMock } = vi.hoisted(() => ({
  useColorModeMock: vi.fn(() => ({ value: 'light' } as ColorModeInstance)),
}));

mockNuxtImport('useColorMode', () => useColorModeMock);
