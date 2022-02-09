import stls from '@/styles/components/sections/LegalDocs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconDoc } from '@/components/icons'

const LegalDocs = () => {
  const listLeft = [
    {
      href: '/documents/reshenie-o-sozdanii.pdf',
      val: 'Решение о создании'
    },
    {
      href: '/documents/inn.pdf',
      val: 'ИНН'
    },
    {
      href: '/documents/rekvizity-nanomipo.pdf',
      val: 'Реквизиты НАНО МИПО'
    },
    {
      href: '/documents/pravila-vnutrennego-trudovogo-rasporyadka.pdf',
      val: 'Правила внутреннего трудового распорядка'
    },
    {
      href: '/documents/pravila-vnutrennego-uchebnogo-rasporyadka.pdf',
      val: 'Правила внутреннего учебного распорядка'
    },
    {
      href: '/documents/pravila-obucheniya-mba.pdf',
      val: 'Правила обучения МВА'
    },
    {
      href: '/documents/pravila-obycheniya-nano-mipo.pdf',
      val: 'Правила обучения НАНО МИПО'
    },
    {
      href: '/documents/pravila-priema-na-obuchenie.pdf',
      val: 'Правила приема на обучение'
    }
  ]
  const listRight = [
    {
      href: '/documents/uvedomlenie-o-predostavlenii-licenzii-mipo.pdf',
      val: 'Уведомление о предоставлении лицензии МИПО'
    },
    {
      href: '/documents/vypiska-iz-reestra-licenzii-041880.pdf',
      val: 'Выписка из реестра лицензий № 041880'
    },
    {
      href: '/documents/polozhenie-o-rezhime-obucheniya.pdf',
      val: 'Положение о режиме обучения'
    },
    {
      href: '/documents/polozhenie-o-skidkah.pdf',
      val: 'Положение о скидках'
    },
    {
      href: '/documents/polozhenie-o-trebovaniyah-k-soderzhaniu-dpop.pdf',
      val: 'Положение о требованиях к содержанию дпоп'
    },
    {
      href: '/documents/polozhenie-o-yazyke-obrazovaniya.pdf',
      val: 'Положение о языке образования'
    },
    {
      href: '/documents/polozhenie-o-obuchenii-invalidov.pdf',
      val: 'Положение об обучении инвалидов'
    },
    {
      href: '/documents/polozhenie-ob-organizacii-i-osywestvlenii-obrazovatelnoii-deyatelnosti.pdf',
      val: 'Положение об организации и осуществлении образовательной деятельности'
    },
    {
      href: '/documents/polozhenie-ob-oficialnon-saite.pdf',
      val: 'Положение об официальном сайте'
    }
  ]
  return (
    <section className={stls.container}>
      <Wrapper>
        <h2 className={stls.title}>Нормативные документы</h2>
        <div className={stls.content}>
          <ul className={stls.listLeft}>
            {listLeft.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemLeft}>
                <a
                  href={item.href}
                  className={stls.link}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className={stls.listRight}>
            {listRight.map((item, idx) => (
              <li key={item.val + idx} className={stls.itemRight}>
                <a
                  href={item.href}
                  className={stls.link}
                  target='_blank'
                  rel='noreferrer noopener'>
                  <div className={stls.icon}>
                    <IconDoc />
                  </div>
                  <span className={stls.text}>{item.val}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  )
}

export default LegalDocs
