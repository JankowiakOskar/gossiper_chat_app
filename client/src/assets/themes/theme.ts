import { DefaultTheme } from 'styled-components';

interface MediaQueryProps {
  [key: string]: number;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    mediaQuery: { [key: string]: string };
    colors: {
      white: string;
      black: string;
      lightGreen: string;
      darkGreen: string;
      lightBlue: string;
      darkBlue: string;
      red: string;
      grey: string;
      darkGrey: string;
      textGrey: string;
      goldenYellow: string;
    };
    font: {
      size: {
        small: string;
        medium: string;
        large: string;
        xl: string;
        huge: string;
      };
    };
    boxShadow: string;
  }
}

export const breakpoints: MediaQueryProps = {
  smallPhone: 320,
  bigPhone: 400,
  tablet: 767,
  bigTablet: 1020,
  desktop: 1150,
  bigDesktop: 1440,
};

export const mediaQuery = Object.keys(breakpoints).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
  return acc;
}, {} as Record<keyof MediaQueryProps, string>);

export const defaultTheme: DefaultTheme = {
  mediaQuery,
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightGreen: '#1B998B',
    darkGreen: '#003B36',
    lightBlue: '#446DF6',
    darkBlue: '#0D0630',
    red: '#F24949',
    grey: '#eaeaea',
    darkGrey: '#ABA3A3',
    textGrey: '#807474',
    goldenYellow: '#F4B844',
  },
  font: {
    size: {
      small: '1.5rem',
      medium: '1.7rem',
      large: '2.2rem',
      xl: '3rem',
      huge: '5.5rem',
    },
  },
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
};
