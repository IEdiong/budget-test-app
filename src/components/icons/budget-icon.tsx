import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const BudgetIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <path
      d="M0 6H4.28571V20H0V6ZM8 0H12V20H8V0ZM16 11.4286H20V20H16V11.4286Z"
      fill="#0466C8"
    />
  </Icon>
);

export default BudgetIcon;
