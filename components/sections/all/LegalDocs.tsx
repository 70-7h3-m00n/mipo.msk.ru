import stls from '@/styles/components/sections/all/LegalDocs.module.sass'
import Wrapper from '@/components/layout/Wrapper'
import { IconDoc } from '@/components/icons'

const LegalDocs = () => {
  const listLeft = [
    {
      href: '/documents/rieshieniie-o-sozdanii.pdf',
      val: 'Решение о создании'
    },
    {
      href: '/documents/inn.pdf',
      val: 'ИНН'
    },
    {
      href: '/documents/riekvizity-nano-mipo.pdf',
      val: 'Реквизиты НАНО МИПО'
    },
    {
      href: '/documents/uvedomlenie-o-predostavlenii-licenzii-mipo.pdf',
      val: 'Уведомление о предоставлении лицензии МИПО'
    },
    {
      href: '/documents/vypiska-iz-rieiestra-litsienzii-041880.pdf',
      val: 'Выписка из реестра лицензий № 041880'
    },
    {
      href: '/documents/pravila-vnutrienniegho-trudovogho-rasporiadka.pdf',
      val: 'Правила внутреннего трудового распорядка'
    },
    {
      href: '/documents/pravila-vnutrienniegho-uchiebnogho-rasporiadka.pdf',
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
      href: '/documents/pravila-priiema-na-obuchieniie.pdf',
      val: 'Правила приема на обучение'
    },
    {
      href: '/documents/УСТАВ.pdf',
      val: 'Устав образовательной организации'
    }
  ]
  const listRight = [
    {
      href: '/documents/polozhieniie-o-riezhimie-obuchieniia.pdf',
      val: 'Положение о режиме обучения'
    },
    {
      href: '/documents/polozhenie-o-porjadke-predostavlenija-skidok2024_2.pdf',
      val: 'Положение о скидках'
    },
    {
      href: '/documents/polozhieniie-o-triebovaniiakh-k-sodierzhaniiu-dpop.pdf',
      val: 'Положение о требованиях к содержанию дпоп'
    },
    {
      href: '/documents/polozhieniie-o-iazykie-obrazovaniia.pdf',
      val: 'Положение о языке образования'
    },
    {
      href: '/documents/polozhieniie-ob-obuchienii-invalidov.pdf',
      val: 'Положение об обучении инвалидов'
    },
    {
      href: '/documents/polozhieniie-ob-orghanizatsii-i-osushchiestvlienii-obrazovatiel-noi-dieiatielnosti.pdf',
      val: 'Положение об организации и осуществлении образовательной деятельности'
    },
    {
      href: '/documents/polozhieniie-ob-ofitsial-nom-saitie.pdf',
      val: 'Положение об официальном сайте'
    },
    {
      href: '/documents/polozhieniie-o-poriadkie-uchieta-khranieniia-i-vydachi-blankov-dokumntov-o-kvalifikatsii.pdf',
      val: 'Положение о порядке учета хранения и выдачи бланков докумнтов о квалификации'
    },
    {
      href: '/documents/polozhieniie-o-poriadkie-formirovaniia-viedieniia-i-khranieniia-lichnykh-diel.pdf',
      val: 'Положение о порядке формирования, ведения и хранения личных дел'
    },
    {
      href: '/documents/polozhieniie-o-priedostavlienii-pierieryva-v-obuchienii.pdf',
      val: 'Положение о предоставлении перерыва в обучении'
    },
    {
      href: '/documents/polozhieniie-o-primienienii-distantsionnykh-obrazovatiel-nykh-tiekhnologhii.pdf',
      val: 'Положение о применении дистанционных образовательных технологий'
    },
    {
      href: '/documents/polozhieniie-o-promiezhutochnoi-i-itoghovoi-attiestatsii.pdf',
      val: 'Положение о промежуточной и итоговой аттестации'
    },
    {
      href: '/documents/Положение_о_порядке_перевода_НАНО_МИПО.pdf',
      val: 'Положение о порядке перевода НАНО МИПО'
    },
    {
      href: '/documents/ПОЛОЖЕНИЕ_О_ПОРЯДКЕ_ВОССТАНОВЛЕНИЯ.pdf',
      val: 'Положение о порядке восстановления в число слушателей'
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
