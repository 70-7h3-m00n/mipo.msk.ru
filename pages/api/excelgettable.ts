import axios from 'axios'
import { format } from 'date-fns'

import { NextApiRequest, NextApiResponse } from 'next'

import xlsx from 'xlsx'
// Нужно для ограничения лимита запросов к серверу

import pLimit from '@esm2cjs/p-limit'

const limit = pLimit(3)

const SECRET_KEY = 'AbUAwoUCBYOtDGj1o3Mp1xV1O'

async function getDataProgram(id) {
  const { data } = await axios.get(`https://api.mipo.msk.ru/programs/${id}`)
  return data
}

interface ErrorMessage {
  message?: string
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<string | ErrorMessage>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Метод не разрешен' })
  }

  const { key } = req.query

  if (key !== SECRET_KEY) {
    return res.status(403).json({ error: 'Недопустимый ключ' })  // 403 Forbidden если ключ не совпадает
  }

  try {
    const { data } = await axios.get(
      'https://api.mipo.msk.ru/get-static-props/programs'
    )
    const programs = data.programs

    const fullProgramsData = await Promise.all(
      programs.map(elem =>
        limit(async () => {
          const {
            description,
            yandex_feed_categories: categoryFeed,
            timenprice,
            YandexStepsFeed
          } = await getDataProgram(elem.id)
          return {
            ...elem,
            description,
            timenprice,
            categoryFeed,
            YandexStepsFeed
          }
        })
      )
    )

    const dataXLS = [
      [
        '№',
        'Наименование программы',
        'Количество часов',
        'Базовый тариф',
        'Практический тариф',
        'Экспертный тариф'
      ]
    ]

    fullProgramsData.forEach((elem, idx) => {
      
      const pathPhychoTariff = [
        'Psychology',
        'prakticheskaya-psihologiya-m-sh-pp',
        'obshhaya-psihologiya'
      ];

      const pathAnotherTariff = [
        'Marketing',
        'jekonomika',
        'Management',
        'Jurisprudence'
      ]

      const saleToDisplay = 0.35

      const fullPrice = Math.round(
        (elem.timenprice[0].price / (100 - elem.timenprice[0].discount)) *
          100 *
          1.17 *
          1.69 *
          saleToDisplay
      )

      const firstTariff = pathPhychoTariff.includes(elem.study_field.slug)
        ? fullPrice - fullPrice * 0.10
        : pathAnotherTariff.includes(elem.study_field.slug) ? fullPrice - fullPrice * 0.11 : null 

      const thirdTariff = pathPhychoTariff.includes(elem.study_field.slug)
        ? fullPrice + fullPrice * 1.20
        : pathAnotherTariff.includes(elem.study_field.slug) ? fullPrice + fullPrice * 0.44 : null

      const studyHours =
        elem.timenprice[0] && elem.timenprice[0]
          ? elem.timenprice[0].studyHours
          : null

      dataXLS.push([
        `${idx + 1}`,
        elem.title,
        studyHours,
        firstTariff,
        fullPrice,
        thirdTariff
      ])
    })

    const workbook = xlsx.utils.book_new()
    const worksheet = xlsx.utils.aoa_to_sheet(dataXLS)

    xlsx.utils.book_append_sheet(workbook, worksheet, 'Тарифы')

    const buffer = xlsx.write(workbook, { bookType: 'xlsx', type: 'buffer' })
    res.setHeader(
      'Content-Type',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    )
    const filename = 'Тарифы.xlsx'
    const encodedFilename = encodeURIComponent(filename)
    res.setHeader(
      'Content-Disposition',
      `attachment; filename="${encodedFilename}"`
    )
    res.end(buffer)

    console.log('Файл успешно создан!')
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Произошла ошибка при генерации XML' })
  }
}
