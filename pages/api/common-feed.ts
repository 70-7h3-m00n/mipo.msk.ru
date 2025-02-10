import axios from 'axios'
import { format } from 'date-fns'

import { NextApiRequest, NextApiResponse } from 'next'

// Нужно для ограничения лимита запросов к серверу
import pLimit from '@esm2cjs/p-limit'

const limit = pLimit(5)

async function getDataProgram(id) {
  const { data } = await axios.get(`https://api.mipo.msk.ru/programs/${id}`, {
    timeout: 8000
  })
  return data
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
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

  try {
    const { data } = await axios.get(
      'https://api.mipo.msk.ru/get-static-props/programs'
    )
    const programs = data.programs.filter(
      elem => elem.category.label == 'Профессиональная переподготовка'
    )

    const fullProgramsData = await Promise.all(
      programs.map(elem =>
        limit(async () => {
          const {
            description,
            yandex_feed_categories: categoryFeed,
            YandexStepsFeed
          } = await getDataProgram(elem.id)
          return { ...elem, description, categoryFeed, YandexStepsFeed }
        })
      )
    )

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <yml_catalog date="${format(new Date(), 'yyyy-MM-dd HH:mm')}">
      <shop>
      
      <name>${escapeXml(
        'Московский институт профессионального образования'
      )}</name>
      <company>${escapeXml('НАНО "МИПО"')}</company>
      <url>${escapeXml('https://mipo.msk.ru/')}</url>
      <count>9999</count>
      <email>${escapeXml('info@mipo.msk.ru')}</email>
      <picture>${escapeXml(
        'https://mipo.msk.ru/image/catalog/main-logo.png'
      )}</picture>
      <description>${escapeXml(
        'Московский институт дополнительного профессионального образования «МИПО» – это удобное и быстрое получение дополнительного профобразования и повышения квалификации в сети интернет по востребованным на рынке гуманитарным, техническим и бизнес направлениям.'
      )}</description>
      <version>1.0</version>
      <currencies>
        <currency id="RUR" rate="1"/>
      </currencies>
    </shop>
    <categories>
      <category id="766199767651">All</category>
    </categories>
      <offers>
        ${fullProgramsData
          .map(elem => {
            return `<offer id="${escapeXml(elem.id)}">
              <name>${escapeXml(elem.title)}</name>
              <url>${escapeXml(
                `https://mipo.msk.ru/professions/${elem.study_field.slug}/${elem.slug}`
              )}</url>
              <description>${escapeXml(elem.description)}</description>
              <price>${Math.round(
                (elem.timenprice[0].ref.price / (100 - 40)) *
                  100 *
                  1.17 *
                  1.69 *
                  0.35
              )}</price>
              <oldprice>${Math.round(
                (((elem.timenprice[0].ref.price / (100 - 40)) *
                  100 *
                  1.17 *
                  1.69 *
                  0.35) /
                  60) *
                  100
              )}</oldprice>
              <currencyId>RUR</currencyId> 
              <categoryId>766199767651</categoryId>         
            </offer>`
          })
          .join('')}
      </offers>
    </yml_catalog>`

    res.setHeader('Content-Type', 'application/xml; charset=utf-8')
    return res.status(200).send(xml)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Произошла ошибка при генерации XML' })
  }
}
