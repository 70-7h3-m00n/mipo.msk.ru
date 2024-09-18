import type { SVGProps } from 'react';

const IncreaseSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70px"
    height="70px"
    fill="none"
    {...props}
  >
    <circle cx={35} cy={35} r={35} fill="#3F3BFF" />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m41.92 41.912 9.444 9.452m-19.09-24.545v10.909m-5.456-5.455h10.91m8.181 0c0 7.531-6.105 13.636-13.636 13.636-7.531 0-13.636-6.105-13.636-13.636 0-7.531 6.105-13.636 13.636-13.636 7.531 0 13.636 6.105 13.636 13.636Z"
    />
  </svg>
);
export default IncreaseSvg;
