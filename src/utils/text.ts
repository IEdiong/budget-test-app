import { defineStyleConfig } from '@chakra-ui/react';

const Text = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    color: '#707480',
    fontSize: 'sm',
    fontWeight: 'normal',
    lineHeight: '145%',
    letterSpacing: '-0.07px',
  },
  // Styles for the visual style variations
  variants: {},
  // The default `size` or `variant` values
  defaultProps: {},
});

export default Text;
