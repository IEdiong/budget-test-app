import { HStack, Text, VStack } from '@/utils/chakra-components';
import {
  AvatarIcon,
  BudgetIcon,
  ChatIcon,
  HomeIcon,
  ReportIcon,
} from './icons';
import Link from 'next/link';

export default function NavBar() {
  return (
    <HStack
      zIndex="5"
      pos="fixed"
      bottom="0px"
      w="full"
      // bg="lightblue"
      h="87px"
      px="30px"
      bg="bdg.white"
      boxShadow="0px -5px 20px 5px rgba(0, 0, 0, 0.04)"
    >
      <HStack w="full" h="48px" justify="space-between" align="flex-end">
        <VStack as={Link} href="/" gap="10px">
          <HomeIcon h="20px" w="23px" />
          <Text variant="menuButton">home</Text>
        </VStack>
        <VStack as={Link} href="/" gap="10px">
          <ReportIcon h="20px" w="25px" />
          <Text variant="menuButton">reports</Text>
        </VStack>
        <VStack as={Link} href="/" gap="10px">
          <ChatIcon h="23px" w="23px" transform="scale(2)" mb="-5px" />
          <Text variant="menuButton">chat</Text>
        </VStack>
        <VStack as={Link} href="/" gap="10px">
          <BudgetIcon h="20px" w="20px" />
          <Text variant="menuButton">budget</Text>
        </VStack>
        <VStack as={Link} href="/" gap="10px">
          <AvatarIcon h="20px" w="20px" />
          <Text variant="menuButton">profile</Text>
        </VStack>
      </HStack>
    </HStack>
  );
}
