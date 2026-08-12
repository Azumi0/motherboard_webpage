import { createTheme, MantineColorsTuple } from '@mantine/core';

const brand: MantineColorsTuple = [
  '#e5f9ff',
  '#b8f2ff',
  '#85ebff',
  '#4de2ff',
  '#1adcfd',
  '#00d4fa',
  '#00f0ff', // primary vibrant cyan
  '#00a7ca',
  '#0086a4',
  '#00647c',
];

const darkSlate: MantineColorsTuple = [
  '#f1f5f9',
  '#e2e8f0',
  '#cbd5e1',
  '#94a3b8',
  '#64748b',
  '#475569',
  '#334155',
  '#1e293b',
  '#0f172a',
  '#0b0f19', // deep dark background
];

export const theme = createTheme({
  primaryColor: 'brand',
  colors: {
    brand,
    darkSlate,
  },
  defaultRadius: 'lg',
  fontFamily: 'var(--font-geist-sans), Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
  fontFamilyMonospace: 'var(--font-geist-mono), ui-monospace, SFMono-Regular, monospace',
  headings: {
    fontFamily: 'var(--font-geist-sans), Inter, system-ui, sans-serif',
    fontWeight: '700',
  },
  shadows: {
    glow: '0 0 20px rgba(0, 240, 255, 0.25)',
    card: '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
  },
});
