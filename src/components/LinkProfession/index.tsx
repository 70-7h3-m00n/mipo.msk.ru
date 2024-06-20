import styles from './styles.module.scss'
import classNames from 'classnames'

interface LinkProfession {
  active: boolean
}

const LinkProfession = ({ active }: LinkProfession) => {
  return (
    <div className={classNames(styles.block, active && styles.active)}>
      <div>Практическая психология</div>
      <div className={styles.wrapperSvg}>
        <svg xmlns="http://www.w3.org/2000/svg"
             width="12"
             height="21"
             viewBox="0 0 12 21"
             fill="none">
          <path d="M2.00009 20.5L0.412109 18.9335L8.86705 10.5L0.412109 2.06652L2.00009 0.5L12.0001 10.5L2.00009 20.5Z"
                fill={active? 'white' : 'black'} />
        </svg>
      </div>
    </div>
  )
}

export default LinkProfession
