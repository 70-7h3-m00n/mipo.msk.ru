import stls from '@/styles/components/icons/IconLocation.module.sass'
import classNames from 'classnames'

interface Props {
  cbeta?: boolean
  responsive?: boolean
  colorIcon?: string
}

const IconLocation = ({ cbeta = false, responsive = false, colorIcon }: Props) => {
  
  const rootClassNames = classNames(
    stls.container,
    cbeta && stls.cbeta,
    responsive && stls.responsive
  )

  const rootStyleLocationIcon = colorIcon && { color: colorIcon }

  return (
    <div className={rootClassNames} style={rootStyleLocationIcon}>
      <svg viewBox='0 0 12 17' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Локация</title>
        <path
          d='M11.0302 2.87805C10.0837 1.35518 8.74069 0.412595 6.99435 0.0902838C6.78142 0.051 6.56535 0.0296351 6.35063 0C6.09588 0 5.84091 0 5.58617 0C5.53872 0.00804054 5.49173 0.019527 5.44384 0.0236622C4.87634 0.0719054 4.32054 0.187459 3.79958 0.419716C1.40772 1.48566 0.213586 3.40942 0.0139272 6.02053C-0.0656665 7.06235 0.205717 8.04674 0.577379 9.00449C0.988839 10.0649 1.53048 11.0564 2.13351 12.0139C3.16193 13.6466 4.33695 15.1635 5.6073 16.6053C5.72197 16.7354 5.83327 16.8684 5.94614 17C5.96862 17 5.99111 17 6.01359 17C6.03787 16.9711 6.06171 16.9416 6.08689 16.9136C7.40018 15.4599 8.61455 13.9255 9.68457 12.2749C10.4308 11.1237 11.0979 9.92915 11.5615 8.62589C11.7812 8.00838 11.9525 7.37639 11.9887 6.71891C12.0647 5.33846 11.7569 4.04715 11.0302 2.87805ZM6.00504 8.52435C4.69759 8.5255 3.64039 7.45059 3.64017 6.11977C3.64017 4.78803 4.69422 3.71014 5.99965 3.70692C7.30328 3.7037 8.35981 4.77953 8.36385 6.1138C8.3679 7.44393 7.3116 8.5232 6.00504 8.52435Z'
          fill='currentColor'
        />
      </svg>
    </div>
  )
}

export default IconLocation
