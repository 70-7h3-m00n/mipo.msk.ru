import * as React from "react"
import { SVGProps } from "react"

interface Props {
  position: boolean
  color?: 'black' | 'white'
}

const ArrowSvg = ({ position, color='black' }: Props, props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    {...props}
  >
    {
      position ?
        <path stroke={color} d="m5 12 4.5-5 4.5 5" />
        :
        <path stroke={color} d="m14 7-4.5 5L5 7" />
    }
  </svg>
)

export default ArrowSvg
