import styles from './styles.module.scss'
import Faq from '../../Sections/FAQ'
import BlockHelp from '../../BlockHelp'
import classNames from 'classnames'

const AreasStudy = () => {
  return (
    <>
      <section className={classNames('container', styles.wrapperFormHelp)}>
        <BlockHelp />
      </section>
      <Faq />
    </>
  )
}

export default AreasStudy
