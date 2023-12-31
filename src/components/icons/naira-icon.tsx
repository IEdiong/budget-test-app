import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const NairaIcon = (props: IconProps) => (
  <Icon
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="currentColor"
    {...props}
  >
    <circle cx="10" cy="10" r="10" fill="#0466C8" fillOpacity="0.2" />
    <path
      d="M6.05072 15V11.5406H5V10.5042H6.05072V9.4958H5V8.45938H6.05072V5H8.89493L10.308 8.45938H11.9565V5H13.9674V8.45938H15V9.4958H13.9674V10.5042H15V11.5406H13.9674V15H11.1051L9.6558 11.5406H8.06159V15H6.05072ZM7.98913 8.45938H8.49638L7.97101 7.11485H7.89855L7.98913 8.45938ZM8.06159 10.5042H9.25725L8.8587 9.4958H8.02536L8.06159 10.5042ZM11.1594 10.5042H11.9928L11.9565 9.4958H10.7428L11.1594 10.5042ZM12.0109 12.8151H12.1014L12.029 11.5406H11.5399L12.0109 12.8151Z"
      fill="#0466C8"
    />
  </Icon>
);

export default NairaIcon;
