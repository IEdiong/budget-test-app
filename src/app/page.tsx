import BudgetChart from '@/components/budget-chart';
import { NairaIcon } from '@/components/icons';
import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
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
      <Flex align="center" justify="center" mt="30px" pos="relative">
        <BudgetChart />
        <Text
          pos="absolute"
          left="50%"
          transform="translate(-50%)"
          fontSize="4xl"
          fontWeight="bold"
          color="bdg.primary.100"
        >
          49%
        </Text>
      </Flex>
      <VStack gap="5px">
        <Text textAlign="center" mt="21px">
          Amount spent so far
        </Text>
        <Text fontSize="16px" color="bdg.primary.100">
          ₦50,000
          <Text as="span" color="bdg.primary.50">
            /₦120,000
          </Text>
        </Text>
      </VStack>
    </Container>
  );
}
