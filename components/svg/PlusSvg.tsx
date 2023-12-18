import { SVGProps } from "react"

const PlusSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35px"
    height="35px"
    fill="none"
    style={{
      height: '50px'
    }}
    {...props}
  >
    <g style={{
      cursor: 'pointer'
    }} filter="url(#a)">
      <circle cx={27.5} cy={19.5} r={17.5} fill="#fff" />
    </g>
    <path style={{
      cursor: 'pointer'
    }}
      fill="#6165D7"
      d="M25.983 21.12h-3.48v-2.6h3.48v-3.46h2.7v3.46h3.52v2.6h-3.52v3.5h-2.7v-3.5Z"
    />
    <defs>
      <filter
        id="a"
        width={55}
        height={55}
        x={0}
        y={0}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy={8} />
        <feGaussianBlur stdDeviation={5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.25098 0 0 0 0 0.258824 0 0 0 0 0.886275 0 0 0 0.24 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_664_735" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_664_735"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
export default PlusSvg
