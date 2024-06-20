import React, { ReactElement, useRef, useState } from 'react'
import styles from './Slider.module.scss'
import classNames from 'classnames'

interface Props {
  children: ReactElement
  stylesList?: string
  stylesBtn?: string
}

export const Slider = ({ children, stylesBtn, stylesList }: Props) => {
  const listSlider = useRef<HTMLDivElement | null>(null)
  const parentWidth = useRef<HTMLDivElement | null>(null)
  const [translate, setTranslate] = useState(0)
  const [point, setPoint] = useState(0)

  const onScrollSlider = (position: 'left' | 'right') => {
    const styles = window.getComputedStyle(listSlider.current!)

    const isGap = parseInt(styles.gap)
    const childElement = listSlider.current!.lastElementChild!.clientWidth
    const scrollElement = isGap + childElement

    if (position === 'right') {
      const pivotRight = listSlider.current!.scrollWidth - parentWidth.current!.clientWidth
      const result = translate - scrollElement

      if (-pivotRight <= result) {
        setTranslate(result)
      } else {
        setTranslate(-pivotRight)
      }
    }

    if (position === 'left') {
      const result = translate + scrollElement

      if (0 >= result) {
        setTranslate(result)
      } else {
        setTranslate(0)
      }
    }
  }

  const handlePointerEvent = (e: React.SyntheticEvent<HTMLDivElement>): void => {
    if (e.nativeEvent instanceof TouchEvent) {
      setPoint((e.nativeEvent as TouchEvent).changedTouches[0].pageX);
    } else if (e.nativeEvent instanceof MouseEvent) {
      setPoint((e.nativeEvent as MouseEvent).clientX);
    }
  };

  const handleToggleList = (e: React.SyntheticEvent<HTMLDivElement>): void => {
    const touchPoint: number = e.nativeEvent instanceof TouchEvent
      ? (e.nativeEvent as TouchEvent).changedTouches[0].pageX
      : (e.nativeEvent as MouseEvent).clientX;
    const distance: number = 65;
    const leftTouch: number = point - distance;
    const rightTouch: number = point + distance;

    if (touchPoint < leftTouch) {
      onScrollSlider('right');
    } else if (touchPoint > rightTouch) {
      onScrollSlider('left');
    }
  };

  return (
    <div className={classNames(styles.slider, stylesList)}>
      <div
        ref={parentWidth}
        className={styles.wrapperCard}
        onTouchStart={handlePointerEvent}
        onTouchEnd={handleToggleList}
        onMouseDown={handlePointerEvent}
        onMouseUp={handleToggleList}
      >
        <div
          className={classNames(styles.listItem)}
          ref={listSlider}
          style={{
            transform: `translateX(${translate}px)`,
            transition: 'transform 0.5s ease',
          }}
        >
          {children}
        </div>
      </div>

      <div className={classNames(styles.wrapperBtn, stylesBtn)}>
        <button className={styles.btn} onClick={() => onScrollSlider('left')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40" fill="none">
            <rect width="60" height="40" rx="10" fill="white" />
            <path d="M32.206 30L33.7939 28.4335L25.339 20L33.7939 11.5665L32.206 10L22.206 20L32.206 30Z"
                  fill="black" />
          </svg>
        </button>

        <button className={styles.btn} onClick={() => onScrollSlider('right')}>
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="40" viewBox="0 0 60 40" fill="none">
            <rect width="60" height="40" rx="10" fill="white" />
            <path d="M27.794 30L26.2061 28.4335L34.661 20L26.2061 11.5665L27.794 10L37.794 20L27.794 30Z"
                  fill="black" />
          </svg>
        </button>
      </div>
    </div>
  )
}
