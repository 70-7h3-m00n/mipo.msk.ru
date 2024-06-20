import styles from './StudentReviews.module.scss'
import Slider from '../../Slider'
import CardSwiper from '../../Items/CardSwiper'
import Modal from '../../Modal'
import { useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

interface StudentReviewsProps {
  studentCommentData: {
    name: string
    description: string
    data: string
    image: {
      url: string
    }
  }[]
}

export const StudentReviews = ({ studentCommentData }: StudentReviewsProps) => {
  const [openModal, setOpenModal] = useState(false)
  const [counterReviews, setCounterReviews] = useState(0)

  const toggleModal = (index: number) => {
    setOpenModal(true)
    setCounterReviews(index)
  }

  return (
    <section id={'reviews'} className={'container'}>
      <h2 className={classNames('header', styles.header)}>СТУДЕНТЫ ДОВОЛЬНЫ ОБУЧЕНИЕМ</h2>

      <div className={styles.wrapperContent}>
        <CardSwiper />

        <div className={styles.wrapperSlider}>
          <Slider stylesBtn={styles.sliderBtn}>
            <>
              {
                studentCommentData?.map((item, index) => (
                  <div className={styles.itemComment} key={index}>
                    <div className={styles.wrapperHeader}>
                      <Image className={styles.wrapperImage} width={80} height={80} src={item.image.url} alt={'icon'} />

                      <div className={styles.wrapperAuthor}>
                        <div className={styles.name}>{item.name}</div>

                        <div className={styles.data}>{item.data}</div>
                      </div>
                    </div>

                    <div className={styles.description}>{item.description}</div>

                    <div onClick={() => toggleModal(index)} className={styles.wrapperIndicator}>
                      <div className={styles.textIndicator}>
                        ЧИТАТЬ ПОЛНОСТЬЮ

                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="21" viewBox="0 0 29 21" fill="none">
                          <path
                            d="M18.8559 20.5L17.245 18.9335L25.8218 10.5L17.245 2.06652L18.8559 0.5L29 10.5L18.8559 20.5Z"
                            fill="black" />
                          <path d="M26.3747 10.5L5.57561e-06 10.5" stroke="black" strokeWidth="2.3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ))
              }
            </>
          </Slider>
        </div>
      </div>

      <Modal open={openModal} setHidden={setOpenModal}>
        <div className={styles.modalComment}>
          <div className={styles.wrapperHeader}>
            <div className={styles.wrapperAuthor}>
              <div className={styles.name}>{studentCommentData[counterReviews]?.name}</div>

              <div className={styles.data}>{studentCommentData[counterReviews]?.data}</div>
            </div>

            <svg onClick={() => setOpenModal(false)} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M1.59749 20L0 18.4335L8.50554 10L0 1.56652L1.59749 0L11.6573 10L1.59749 20Z" fill="black" />
              <path d="M18.4025 20L20 18.4335L11.4945 10L20 1.56652L18.4025 0L8.34266 10L18.4025 20Z" fill="black" />
            </svg>
          </div>

          <div className={styles.modalDescription}>
            {studentCommentData[counterReviews]?.description}
          </div>
        </div>
      </Modal>
    </section>
  )
}
