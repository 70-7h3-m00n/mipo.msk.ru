import imageTrainingPeriod from '@/public/assets/imgs/sections/SectionHeroProgram/little-icon01.png'
import imageFormOfStudy from '@/public/assets/imgs/sections/SectionHeroProgram/little-icon02.png'
import imageNextEnrollment from '@/public/assets/imgs/sections/SectionHeroProgram/little-icon03.png'
import imageNumberHours from '@/public/assets/imgs/sections/SectionHeroProgram/little-icon04.png'
import imageCertificateCompletion from '@/public/assets/imgs/sections/SectionHeroProgram/little-icon05.png'
import { StaticImageData } from 'next/image'

type TrainingInfo = {
  image: StaticImageData,
  title: string,
}

type AvailableData = 'trainingPeriod' | 'formOfStudy' | 'nextEnrollment' | 'numberHours' | 'certificateCompletion';

type DataListTraining = Record<AvailableData, TrainingInfo>;

const dataListTrainingInfo: DataListTraining = {
  trainingPeriod: {
    image: imageTrainingPeriod,
    title: 'Срок обучения:'
  },
  formOfStudy: {
    image: imageFormOfStudy,
    title: 'Форма обучения:'
  },
  nextEnrollment: {
    image: imageNextEnrollment,
    title: 'Ближайшее зачисление:'
  },
  numberHours: {
    image: imageNumberHours,
    title: 'Количество часов:'
  },
  certificateCompletion: {
    image: imageCertificateCompletion,
    title: 'Документ об окончании:'
  }
}

export default dataListTrainingInfo;
