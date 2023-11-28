import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const ThreedotsMenuIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="16"
    viewBox="0 0 30 16"
    fill="none"
    {...props}
  >
    <circle cx="10.5" cy="8.5" r="1.5" fill="#707480" />
    <circle cx="15.5" cy="8.5" r="1.5" fill="#707480" />
    <circle cx="20.5" cy="8.5" r="1.5" fill="#707480" />
  </Icon>
);

export default ThreedotsMenuIcon;
