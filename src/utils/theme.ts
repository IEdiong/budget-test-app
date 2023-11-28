import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';
import Text from './text';
import Container from './container';

// Colors
const colors = {
  bdg: {
    primary: {
      50: '#67A2DC',
      100: '#0466C8',
    },
    neutral: {
      50: '#FCFCFC',
      100: '#C1C4CD',
    },
    white: '#FFFFFF',
  },
};

// Font Sizes
const fontSizes = {
  xl: '1.3125rem',
  '2xl': '1.75rem',
};

// Container Size
const sizes = {
  container: {
    sm: '327px',
    md: '689px',
    lg: '1110px',
  },
};

// Breakpoint Size
const breakpoints = {
  base: '0em',
  md: '46em', // tablet from 736px
  lg: '64em', // desktop from 1024px
};

export const theme = extendTheme({
  colors,
  fontSizes,
  sizes,
  breakpoints,
  components: {
    Heading,
    Text,
    Container,
  },
  config: {
    cssVarPrefix: 'bdg',
  },
});
