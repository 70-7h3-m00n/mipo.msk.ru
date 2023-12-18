import image1 from '@/public/assets/imgs/new-course/card-profession-1.png'
import image2 from '@/public/assets/imgs/new-course/card-profession-2.png'
import image3 from '@/public/assets/imgs/new-course/card-profession-3.png'
import image4 from '@/public/assets/imgs/new-course/card-profession-4.png'
import image5 from '@/public/assets/imgs/new-course/card-profession-5.png'
import { StaticImageData } from 'next/image'

export interface ListProfession {
  title: string
  description: string
  image: StaticImageData
  index: number
}

const listProfession: Array<ListProfession> = [
  {
    title: 'Ознакомьтесь с выбранной профессией',
    description: 'Подберите интересующую Вас профессию на нашем сайте, подробно ознакомьтесь с учебными материалами и самой практикой в профессии',
    image: image1,
    index: 1
  },
  {
    title: 'Подайте заявку',
    description: 'Оставьте заявку и консультант приемной комиссии свяжется с вами удобным способом, подробно расскажет про выбранную профессию и сформирует необходимый паркет документов чтобы начать обучения',
    image: image2,
    index: 2
  },
  {
    title: 'Пройдите обучение',
    description: 'После зачисления Вам на почту высылается: логин и пароль для входа в Ваш личный кабинет. Проходите обучение по модулям в удобное для Вас время, осваивайте практику и общайтесь со спикерами, кураторами и однокурсниками, делитесь полученными знаниями и навыками.',
    image: image3,
    index: 3
  },
  {
    title: 'Официальный документ',
    description: 'Получите официальный документ об образовании. Сведения о документах о квалификации (об удостоверениях о повышении квалификации, дипломах о профессиональной переподготовке) вносятся в Федеральный реестр сведений о документах об образовании и (или) о квалификации, документах об обучении (ФИС ФРДО) в течение 60-и дней с даты выдачи соответствующего документа.',
    image: image4,
    index: 4
  },
  {
    title: 'Новая профессия ждет вас',
    description: 'Вы получаете официальные документы и приступаете к вашей новой работе!',
    image: image5,
    index: 5
  }
]

export default listProfession
