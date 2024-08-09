import type { SVGProps } from 'react';

const DoubleSwitchSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15px"
    height="20px"
    fill="none"
    {...props}
  >
    <g opacity={0.5}>
      <path stroke="#000" d="M2.5 0v20M13 0v20" />
      <circle cx={2.5} cy={6.5} r={2.5} fill="#000" />
      <circle cx={13} cy={13.5} r={2.5} fill="#000" />
    </g>
  </svg>
);
export default DoubleSwitchSvg;
