import BudgetChart from '@/components/budget-chart';
import { FoodnDrinkIcon, NairaIcon, SavingsIcon } from '@/components/icons';
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
    <Box minH="100vh" bg="bdg.neutral.50">
      <Container>
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

        <Flex align="center" justify="center" mt="140px" pos="relative">
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

        <VStack gap="5px" pb="33px">
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

        <Heading variant="h3">Category Breakdown</Heading>
      </Container>

      {/* Breakdown Section */}
      <VStack
        bg="#FCFEFF"
        borderRadius="10px"
        mt="10px"
        pt="20px"
        px="30px"
        align="flex-start"
        gap="20px"
      >
        <HStack justifyContent="space-between" w="full">
          <HStack gap="10px">
            <FoodnDrinkIcon boxSize="50px" />
            <VStack align="flex-start" justify="center" gap="0">
              <Heading variant="h2">Food and Drink</Heading>
              <Text>40%</Text>
            </VStack>
          </HStack>
          <Heading variant="sub-heading" flexShrink="0">
            ₦20,000/
            <Heading as="span" fontSize="inherit" color="bdg.neutral.100">
              ₦42,000
            </Heading>
          </Heading>
        </HStack>
        <HStack justifyContent="space-between" w="full">
          <HStack gap="10px">
            <SavingsIcon boxSize="50px" />
            <VStack align="flex-start" justify="center" gap="0">
              <Heading variant="h2">Savings</Heading>
              <Text>20%</Text>
            </VStack>
          </HStack>
          <Heading variant="sub-heading" flexShrink="0">
            ₦10,000/
            <Heading as="span" fontSize="inherit" color="bdg.neutral.100">
              ₦24,000
            </Heading>
          </Heading>
        </HStack>
      </VStack>
    </Box>
  );
}
