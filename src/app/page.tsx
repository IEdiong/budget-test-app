import { NairaIcon } from '@/components/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
} from '@/utils/chakra-components';

export default function Home() {
  return (
    <Container minH="100vh" bg="bdg.neutral.50">
      <Box as="header">
        <Heading pt="20px">Budget</Heading>
        <HStack mt="28px" gap="10px">
          <NairaIcon boxSize="20px" />
          <Text>Monthly Budget</Text>
        </HStack>
        <Flex
          w="full"
          h="51px"
          bg="bdg.white"
          borderRadius="10px"
          mt="10px"
          pl="20px"
          align="center"
          boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.03)"
        >
          <Heading>₦120,000</Heading>
        </Flex>
      </Box>
    </Container>
  );
}
