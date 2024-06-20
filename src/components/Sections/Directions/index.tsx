import styles from './styles.module.scss'
import Button from '../../Button'
import LinkProfession from '../../LinkProfession'

const Directions = () => {

  return (
    <section className={'container'}>
      <h2 className={'header'}>Направления ОБУЧЕНИЯ</h2>

      <div className={styles.content}>
        <div className={styles.category}>
          <Button text={'Профессиональная переподготовка'}
                  active={true}
                  styleOption={'round'}
          />
          <Button text={'ПОВЫШЕНИЕ КВАЛИФИКАЦИИ'}
                  active={false}
                  styleOption={'round'}
          />
          <Button text={'Бизнес-образование'}
                  active={false}
                  styleOption={'round'}
          />
        </div>

        <div className={styles.profession}>
          <LinkProfession active={true} />
          <LinkProfession active={false} />
          <LinkProfession active={false} />
          <LinkProfession active={false} />
          <LinkProfession active={false} />
          <LinkProfession active={false} />
          <div className={styles.wrapperBtnItem}>
            <Button text={'ВСЕ Направления'}
                    active={true}
                    styleOption={'square'}
            />
          </div>
        </div>
      </div>

      <div className={styles.wrapperBtn}>
        <Button text={'ВСЕ Направления'}
                active={true}
                styleOption={'square'}
        />
      </div>
    </section>
  )
}

export default Directions
