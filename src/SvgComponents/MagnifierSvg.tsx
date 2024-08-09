import type { SVGProps } from 'react';

const MagnifierSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="square"
      strokeLinejoin="round"
      d="M15.228 15.224 21 21M17.667 9.333A8.333 8.333 0 1 1 1 9.333a8.333 8.333 0 0 1 16.667 0Z"
      opacity={0.5}
    />
  </svg>
);
export default MagnifierSvg;
