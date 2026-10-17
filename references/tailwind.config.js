/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx,html}',
    './pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './app/**/*.{js,ts,jsx,tsx,mdx,html}',
    './examples/**/*.{html,js}',
    './*.html',
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FBF9F6',
          100: '#F8F6F2', // Primary Canvas
          200: '#F4EFEA', // Subtle Card Dividers
          300: '#EAE2D8', // Active Tab / Border Tint
          400: '#D8CDC0', // Muted Borders
        },
        charcoal: {
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280', // Subtitles & Inactive Icons
          700: '#374151', // Section Titles & Labels
          800: '#1F2937', // Dark Card Gradient End
          900: '#111827', // Primary Ink & High-Priority CTAs
        },
        teal: {
          50: '#F0FDFA',  // Active Tab Tint
          600: '#0D9488', // Primary Brand Accent & Active Nav
          700: '#0F766E', // Hover State
        },
        emeraldMint: {
          text: '#10B981',
          bg: '#ECFDF5',
          border: '#D1FAE5',
        },
        crimsonCoral: {
          text: '#EF4444',
          bg: '#FEF2F2',
          border: '#FEE2E2',
        },
        amberSand: {
          text: '#F59E0B',
          bg: '#FFFBEB',
          border: '#FEF3C7',
        },
      },
      borderRadius: {
        '12': '12px',
        '16': '16px',
        '22': '22px', // Metric Summary Mini-Cards
        '26': '26px', // Standard Primary Cards
        '28': '28px', // Dark Hero & Settings Cards
        '32': '32px', // Modals & Bottom Sheets
        'logo': '22%', // App Brand Squircle
      },
      boxShadow: {
        'soft-card': '0 10px 30px -4px rgba(0, 0, 0, 0.04)',
        'soft-card-hover': '0 14px 34px -4px rgba(0, 0, 0, 0.07)',
        'pill-dock': '0 20px 40px -6px rgba(0, 0, 0, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.04)',
        'elevated-fab': '0 12px 24px -4px rgba(17, 24, 39, 0.28)',
        'modal-sheet': '0 25px 60px -12px rgba(0, 0, 0, 0.18)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
