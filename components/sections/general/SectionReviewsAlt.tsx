import stls from '@/styles/components/sections/general/SectionReviewsAlt.module.sass'
import { TPropClassNames } from '@/types/index'
import { FC, useState } from 'react'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import Wrapper from '@/components/layout/Wrapper'
import { ImgReview } from '@/components/imgs'
import { IconGeneralArrowRightAlt } from '@/components/icons'

type TSectionReviewsAlt = TPropClassNames & {
  programReviews: any // TODO: figure out types
  reviews: any // TODO: figure out types
}

const SectionReviewsAlt: FC<TSectionReviewsAlt> = ({
  classNames,
  programReviews,
  reviews
}) => {
  console.log(programReviews)
  console.log(reviews)

  const [curTranslateX, setCurTranslateX] = useState(0)

  const list = programReviews?.length === 0 ? reviews : programReviews

  const distance = 300
  const reviewItemLength = 479 + 30
  const handleMove = (
    dir: 'left' | 'right',
    distance: number,
    reviewItemLength: number
  ) => {
    if (dir === 'left') {
      if (curTranslateX - distance < 0) {
        setCurTranslateX(0)
        return
      }
      setCurTranslateX(curTranslateX - distance)
      return
    }
    if (dir === 'right') {
      if (curTranslateX + distance > reviewItemLength * (list.length - 1)) {
        return
      }
      setCurTranslateX(curTranslateX + distance)
    }
  }

  if (!list || list.length === 0) return null

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.heading}>
          <h2 className={stls.title}>Что о нас говорят выпускники</h2>
          <div className={stls.controls}>
            <a
              href='#!'
              className={stls.controlsArrowLeft}
              onClick={() => handleMove('left', distance, reviewItemLength)}>
              <IconGeneralArrowRightAlt
                classNames={[
                  cn(stls.controlsIcon, stls.controlsArrowLeftIcon, {
                    [stls.dim]: curTranslateX === 0
                  })
                ]}
              />
            </a>
            <a
              href='#!'
              className={stls.controlsArrowRight}
              onClick={() => handleMove('right', distance, reviewItemLength)}>
              <IconGeneralArrowRightAlt
                classNames={[
                  cn(stls.controlsIcon, stls.controlsArrowRightIcon, {
                    [stls.dim]:
                      curTranslateX + distance >
                      reviewItemLength * (list.length - 1)
                  })
                ]}
              />
            </a>
          </div>
        </div>
        <ul
          className={stls.list}
          style={{ transform: `translateX(${-curTranslateX}px)` }}>
          {list?.map((item, idx) => (
            <li
              key={`${item?.title || 'SectionReviewsAlt__item'}-${idx}`}
              className={stls.listItem}>
              <div className={stls.itemBody}>
                <div className={stls.itemBodyContainer}>
                  <p className={stls.itemStory}>{item?.story}</p>
                  <div className={stls.author}>
                    <div className={stls.img}>
                      <ImgReview
                        src={item?.picture?.[0]?.url}
                        alt={item.name}
                        width={70}
                        height={getImageHeight({
                          width: 70,
                          widthInitial: item?.picture?.[0]?.width,
                          heightInitial: item?.picture?.[0]?.height
                        })}
                      />
                    </div>
                    <div className={stls.authorCredits}>
                      <p className={stls.authorName}>{item?.name}</p>
                      <p className={stls.itemProfession}>{item?.profession}</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionReviewsAlt
