import { SVGProps } from "react"

const StarSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24px"
    height="24px"
    fill="none"
    {...props}
  >
    <path
      fill="#ECA000"
      d="m12 19.262 5.82 3.53c1.066.646 2.37-.31 2.09-1.52l-1.543-6.637 5.146-4.471c.94-.816.435-2.363-.799-2.461l-6.773-.577L13.29.854c-.478-1.139-2.104-1.139-2.581 0L8.06 7.112l-6.774.577c-1.234.098-1.739 1.645-.8 2.46l5.147 4.472-1.542 6.638c-.28 1.209 1.023 2.165 2.09 1.518L12 19.262Z"
    />
  </svg>
)
export default StarSvg
