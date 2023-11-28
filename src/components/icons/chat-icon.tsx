import { Icon } from '@/utils/chakra-components';
import { IconProps } from '@chakra-ui/react';

const ChatIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="47"
    height="47"
    viewBox="0 0 47 47"
    fill="none"
    {...props}
  >
    <g opacity="0.6">
      <g opacity="0.6" filter="url(#filter0_d_809_11)">
        <path
          d="M35 19.5C35 13.1487 29.8513 8 23.5 8C17.1487 8 12 13.1487 12 19.5C12 25.8513 17.1487 31 23.5 31C29.8513 31 35 25.8513 35 19.5Z"
          stroke="#797B8B"
          strokeWidth="3"
        />
      </g>
      <path
        opacity="0.6"
        d="M26.8984 17.6353H24.5267V23.6783H22.8156V17.6353H20.4547V16H26.8984V17.6353Z"
        stroke="#797B8B"
        strokeWidth="0.803901"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_809_11"
        x="0.807143"
        y="0.684286"
        width="45.3857"
        height="45.3857"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3.87714" />
        <feGaussianBlur stdDeviation="4.84643" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0.0705882 0 0 0 0 0.2 0 0 0 0.13 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_809_11"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_809_11"
          result="shape"
        />
      </filter>
    </defs>
  </Icon>
);

export default ChatIcon;
