// Theme Configuration for HNSolutions
// TODO: Update with final brand colors

export const theme = {
  colors: {
    primary: {
      50: '#e0f7ff',
      100: '#b3ebff',
      200: '#80deff',
      300: '#4dd0ff',
      400: '#1ac5ff',
      500: '#00f0ff',
      600: '#00d9ff',
      700: '#00b8e6',
      800: '#0094cc',
      900: '#006699',
    },
    secondary: {
      50: '#ffe0f7',
      100: '#ffb3e6',
      200: '#ff80d4',
      300: '#ff4dc2',
      400: '#ff1ab0',
      500: '#ff00ff',
      600: '#ff0080',
      700: '#e60073',
      800: '#cc0066',
      900: '#99004d',
    },
    neutral: {
      50: '#1a1a1a',
      100: '#0f0f0f',
      200: 'var(--color-dark)',
      300: '#404040',
      400: '#525252',
      500: '#737373',
      600: '#a3a3a3',
      700: '#d4d4d4',
      800: '#e5e5e5',
      900: '#ffffff',
    },
  },
  fonts: {
    heading: ['Poppins', 'system-ui', 'sans-serif'],
    body: ['Inter', 'system-ui', 'sans-serif'],
  },
  spacing: {
    section: {
      sm: '3rem',
      md: '5rem',
      lg: '7rem',
    },
  },
  borderRadius: {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
};

export type Theme = typeof theme;

