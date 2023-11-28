import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    paddingInline: '30px',
    maxWidth: {
      // md: 'container.md',
      lg: 'container.lg',
    },
  },
});

export default Container;
