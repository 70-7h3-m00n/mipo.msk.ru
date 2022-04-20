import { StaticImageData } from 'next/image'

type TypeImg = {
  classNames?: string[]
  src?: StaticImageData | string
  alt?: string
  width?: number
  height?: number
}

export default TypeImg
