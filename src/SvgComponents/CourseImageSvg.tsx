import Image from 'next/image';
import type { SVGProps } from 'react';

type CourseImageSvgProps = {
  href: string;
} & SVGProps<SVGSVGElement>;

const CourseImageSvg = ({ href, ...props }: CourseImageSvgProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width="auto"
    height="auto"
    viewBox="0 0 723 672"
    fill="none"
    {...props}
  >
    <path
      fill="#3F3BFF"
      d="M219 0C126.216 0 51 75.216 51 168c0 92.785 75.216 168 168 168-92.784 0-168 75.215-168 168s75.216 168 168 168c92.785 0 168-75.215 168-168 0 92.785 75.215 168 168 168s168-75.215 168-168-75.215-168-168-168c92.785 0 168-75.215 168-168C723 75.216 647.785 0 555 0S387 75.216 387 168C387 75.216 311.785 0 219 0Z"
    />
    <mask
      id="a"
      width={658}
      height={658}
      x={0}
      y={6}
      maskUnits="userSpaceOnUse"
      style={{ maskType: 'alpha' }}
    >
      <path
        fill="#3F3BFF"
        d="M164.5 6C73.65 6 0 79.65 0 170.5 0 261.352 73.65 335 164.5 335 73.65 335 0 408.648 0 499.5S73.65 664 164.5 664c90.852 0 164.5-73.648 164.5-164.5 0 90.852 73.648 164.5 164.5 164.5S658 590.352 658 499.5 584.352 335 493.5 335c90.852 0 164.5-73.648 164.5-164.5C658 79.65 584.352 6 493.5 6S329 79.65 329 170.5C329 79.65 255.352 6 164.5 6Z"
      />
    </mask>
    <g mask="url(#a)">
      <foreignObject x="0" y="6" width="686" height="664">
        <Image
          sizes={'100%'}
          src={href}
          priority
          width={723}
          height={672}
          alt="course"
          style={{ objectFit: 'cover' }}
        />
      </foreignObject>
    </g>
  </svg>
);
export default CourseImageSvg;
