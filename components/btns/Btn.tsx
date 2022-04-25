import stls from '@/styles/components/btns/Btn.module.sass'
import { TPropChildren } from '@/types/index'
import cn from 'classnames'

// TODO: finish this button and apply it throught the entire app
type TBtnProps = {
  borderRadius:
    | 'borderRadius-2'
    | 'borderRadius-4'
    | 'borderRadius-15'
    | 'borderRadius-25'
  backgroundColor:
    | 'backgroundColor-beta'
    | 'backgroundColor-alpha'
    | 'backgroundColor-transparent'
    | 'backgroundColor-nu-2'
    | 'backgroundColor-xi-2'
  color: 'alpha' | 'nu' | 'nu-50'
  paddingLeftRight:
    | 'paddingLeftRight-2'
    | 'paddingLeftRight-15'
    | 'paddingLeftRight-26'
    | 'paddingLeftRight-28'
    | 'paddingLeftRight-31'
    | 'paddingLeftRight-41'
    | 'paddingLeftRight-51'
    | 'paddingLeftRight-52'
    | 'paddingLeftRight-66'
    | 'paddingLeftRight-67'
    | 'paddingLeftRight-201'
  paddingTopBottom:
    | 'paddingTopBottom-12'
    | 'paddingTopBottom-14'
    | 'paddingTopBottom-15'
    | 'paddingTopBottom-16'
    | 'paddingTopBottom-38'
  borderWidth: 'borderWidth-1' | 'borderWidth-2'
  borderColor:
    | 'borderColor-nu'
    | 'borderColor-alpha'
    | 'borderColor-nu-a20'
    | 'borderColor-omicron-2'
    | 'borderColor-psi'

  icon?: 'info'
  href: any
  target: any
} & TPropChildren

const Btn = ({ children, href = null, target = null }: TBtnProps) => {
  return (
    <>
      {href ? (
        <a
          className={cn({
            [stls.container]: true
          })}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
          {children}
        </a>
      ) : (
        <button
          className={cn({
            [stls.container]: true
          })}>
          {children}
        </button>
      )}
    </>
  )
}

export default Btn
