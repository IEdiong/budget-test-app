import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    color: '#001233',
    fontFamily: 'inherit',
  },
  // Styles for the visual style variations
  variants: {
    h1: {
      fontSize: '2xl',
      fontWeight: 'bold',
      lineHeight: '36px',
      letterSpacing: '-1.4px',
    },
    h2: {
      fontSize: 'sm',
      fontWeight: 'medium',
      lineHeight: '24px',
      letterSpacing: '-0.07px',
    },
    h3: {
      fontSize: 'xl',
      fontWeight: 'medium',
      lineHeight: '24px',
      letterSpacing: '-0.105px',
    },
    'sub-heading': {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: '30.5px',
      letterSpacing: '-0.08px',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'h1',
  },
});

export default Heading;
