import { StaticImageData } from 'next/image'
import img1 from '@/public/assets/imgs/new-course/item-1.png'
import img2 from '@/public/assets/imgs/new-course/item-2.png'
import img3 from '@/public/assets/imgs/new-course/item-3.png'
import img4 from '@/public/assets/imgs/new-course/item-4.png'
import img5 from '@/public/assets/imgs/new-course/item-5.png'
import img6 from '@/public/assets/imgs/new-course/item-6.png'
import img7 from '@/public/assets/imgs/new-course/item-7.png'
import img8 from '@/public/assets/imgs/new-course/item-8.png'
import descItemOne from '@/public/assets/imgs/new-course/desctItem-1.png'

export interface TrainingWorks {
  image: StaticImageData
  important: boolean
  title: string
  description: {
    image: StaticImageData
    title: string
  }
}

export const ListTrainingWorks = [
  {
    image: img1,
    important: true,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных* технологий.',
    description: {
      image: descItemOne,
      title: 'test-1 дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img2,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением',
    description: {
      image: descItemOne,
      title: 'test-2 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img3,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных* технологий.',
    description: {
      image: descItemOne,
      title: 'test-3 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img4,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных*',
    description: {
      image: descItemOne,
      title: 'test-4  осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img5,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных* технологий.',
    description: {
      image: descItemOne,
      title: 'test-5 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img6,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением',
    description: {
      image: descItemOne,
      title: 'test-6 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img7,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных* технологий.',
    description: {
      image: descItemOne,
      title: 'test-7 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  },
  {
    image: img8,
    important: false,
    title: 'Обучение осуществляется по заочной форме с применением дистанционных',
    description: {
      image: descItemOne,
      title: 'test-8 осуществляется по заочной форме с применением дистанционных* технологий. Лекции, общение, тестирование проходят в онлайн-формате через образовательную платформу'
    }
  }
]
