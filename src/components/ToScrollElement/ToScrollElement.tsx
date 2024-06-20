import { ReactNode } from 'react'


interface ToScrollElementProps {
  children: ReactNode
  idElement: string | number
}

export const ToScrollElement = ({ children, idElement }:ToScrollElementProps) => {
  const scrollToBlock = () => {
    const $elem = window.document.querySelector(`#${idElement}`)!;
    const offset = 140;

    const elementPosition = $elem.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth',
    });
  };

  return <div onClick={scrollToBlock}>{children}</div>
}
