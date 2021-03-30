import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string;
      black: string;
      lightGreen: string;
      darkGreen: string;
      lightBlue: string;
      darkBlue: string;
      red: string;
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

export const defaultTheme: DefaultTheme = {
  colors: {
    white: '#ffffff',
    black: '#000000',
    lightGreen: '#1B998B',
    darkGreen: '#003B36',
    lightBlue: '#446DF6',
    darkBlue: '#0D0630',
    red: '#e02c2c',
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
