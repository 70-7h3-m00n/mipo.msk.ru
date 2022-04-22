import colors from '@/styles/config/Colors.module.sass'
import { TGeneralColorKeys, TGeneralColorHex } from '@/types/index'

type TColors = {
  [key in TGeneralColorKeys]: TGeneralColorHex
}

export default colors as TColors
