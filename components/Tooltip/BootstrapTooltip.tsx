// @ts-ignore
import { styled } from '@mui/material/styles'
// @ts-ignore
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip'

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }: any) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default BootstrapTooltip
