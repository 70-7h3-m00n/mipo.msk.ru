import stls from '@/styles/components/sections/all/ContactForm.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { FormAlpha } from '@/components/forms'
import { IconAtom } from '@/components/icons'

const ContactForm = () => {
  return (
    <section className={stls.container}>
      <Wrapper>
        <div className={stls.wrapper}>
          <div className={stls.atom}>
            <IconAtom regular crho />
          </div>
          <h2 className={stls.title}>Подберите программу</h2>
          <p className={stls.p}>
            Ответьте на несколько вопросов и подберите программу обучения
          </p>
          <div className={stls.form}>
            <FormAlpha />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default ContactForm
