import stls from '@/styles/components/btns/BtnDelta.module.sass'
import Link from 'next/link'
import cn from 'classnames'

const BtnDelta = ({ text = '', href = null }: any) => {

  if (!href)
    return (
      <button className={cn(stls.container)}>
        {text}
      </button>
    )
  if (href)
    return (
      <Link href={href} className={cn(stls.container)}>
          {text}
      </Link>
    )
}

export default BtnDelta
