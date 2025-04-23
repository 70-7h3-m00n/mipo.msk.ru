import stls from '@/styles/components/program/ProgramLabel.module.sass'
import ProgramContext from '@/context/program/programContext'
import { useContext } from 'react'
import cn from 'classnames'

interface Props {
  color?: 'white' | 'black' | 'purple'
  text?: string
  needIcon?: boolean
  bgColor?: string
  className?: string
}

const ProgramLabel = ({
  color = 'white',
  text,
  needIcon = false,
  bgColor,
  className
}: Props) => {
  const { program } = useContext(ProgramContext)

  const containerClass = cn(stls.container, stls[color], className)
  const textClass = cn(stls.p, stls[color])
  const label = text ?? program?.category?.label

  const styleBlock = {
    backgroundColor: bgColor ? bgColor : undefined,
    border: bgColor ? 'none' : undefined,
  }

  return (
    <div
      className={containerClass}
      style={styleBlock}>
      <p className={textClass}>{label}</p>
      {needIcon && (
        <span className={stls.icon}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'>
            <path
              d='M19.0152 11.8108C19.0703 10.944 18.7845 10.1077 18.2105 9.45606C17.6366 8.80439 16.8432 8.41511 15.9766 8.36018L13.8366 8.22431L15.1543 2.67385C15.37 1.75887 14.9776 0.813869 14.1778 0.322415C13.6836 0.0186435 13.1005 -0.0745569 12.536 0.0602083C11.9717 0.194974 11.4936 0.541408 11.1898 1.03579L5.55388 10.2072C5.16459 10.8392 4.98369 11.566 5.03074 12.309C5.15581 14.2792 6.8607 15.7801 8.83091 15.6556L10.6317 15.5414L8.81882 21.1742C8.50956 22.1348 8.89719 23.1695 9.76199 23.6905C10.1104 23.9001 10.4948 23.9999 10.8745 23.9999C11.6088 23.9999 12.3258 23.6267 12.7314 22.9533L18.5571 13.2798C18.8244 12.8321 18.9828 12.3242 19.0152 11.8108ZM17.6119 11.7218C17.5934 12.0131 17.5028 12.3026 17.3511 12.5568L11.5268 22.2276C11.3114 22.5852 10.8452 22.7011 10.4876 22.4856C10.185 22.3034 10.0493 21.9413 10.1575 21.6051L12.2866 14.9899C12.3579 14.7683 12.315 14.5261 12.1722 14.3424C12.0384 14.1706 11.8333 14.0712 11.6174 14.0712C11.6026 14.0712 11.5877 14.0718 11.5727 14.0727L8.74173 14.2523C7.54496 14.3274 6.51005 13.4164 6.43424 12.22C6.4055 11.7689 6.51518 11.3278 6.75157 10.944L12.3879 1.77187C12.495 1.59756 12.6637 1.47543 12.8625 1.428C13.0615 1.3804 13.2672 1.41335 13.4415 1.52047C13.7237 1.69369 13.8617 2.02749 13.7857 2.34994L12.2758 8.71082C12.2279 8.9126 12.2714 9.12501 12.3947 9.29163C12.5181 9.45826 12.7085 9.56189 12.9154 9.57508L15.8874 9.76367C16.3792 9.7948 16.8295 10.0156 17.1552 10.3855C17.481 10.7554 17.643 11.2298 17.6119 11.7218Z'
              fill='#6F01C6'
            />
          </svg>
        </span>
      )}
    </div>
  )
}

export default ProgramLabel
