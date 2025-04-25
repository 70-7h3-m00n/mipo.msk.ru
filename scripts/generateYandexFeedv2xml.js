const fs = require('fs')
const path = require('path')
const axios = require('axios')
const { format } = require('date-fns')

async function getDataProgram(id) {
  const { data } = await axios.get(`https://api.mipo.msk.ru/programs/${id}`)
  return data
}

function escapeXml(unsafe) {
  if (!unsafe || typeof unsafe !== 'string') {
    return '' // Если unsafe пустой или не строка, возвращаем пустую строку
  }
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

async function generateYandexFeed() {
  const { data } = await axios.get(
    'https://api.mipo.msk.ru/get-static-props/programs'
  )
  const programs = data.programs.filter(
    elem => elem.category.label == 'Профессиональная переподготовка'
  )

  const fullProgramsData = await Promise.all(
    programs.map(async elem => {
      const {
        description,
        yandex_feed_categories: categoryFeed,
        YandexStepsFeed,
        heroPicture
      } = await getDataProgram(elem.id)
      return { ...elem, description, categoryFeed, YandexStepsFeed, heroPicture }
    })
  )

  const filtredPrograms = fullProgramsData.filter((element) => element?.study_field?.slug && element?.slug && element?.heroPicture?.url)

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <yml_catalog date="${format(new Date(), 'yyyy-MM-dd HH:mm')}">
        <shop>
            <name>${escapeXml(
            'Московский институт профессионального образования'
            )}</name>
            <company>${escapeXml('Фид для Яндекс"')}</company>
            <url>${escapeXml('https://mipo.msk.ru/')}</url>
            <platform>${escapeXml('МИПО"')}</platform>
            <version>1.0</version>
            <currencies>
                <currency id="RUR" rate="1"/>
            </currencies>
            <categories>
               <category id="766199767651">All</category>
            </categories>
            <offers>
                ${filtredPrograms
                    .map(elem => {
                    return `<offer id="${escapeXml(elem.id)}">
                                <name>${escapeXml(elem.title)}</name>
                                <picture>${elem?.heroPicture?.url}</picture>
                                <url>${escapeXml(
                                `https://mipo.msk.ru/professions/${elem.study_field.slug}/${elem.slug}`
                                )}</url>
                                
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
        </shop>   
      </yml_catalog>`

  const filePath = path.join(
    __dirname,
    '../public/yandex-feed/yandexfeedManualFilev2.yml'
  )

  fs.writeFileSync(filePath, xml, 'utf8')

  console.log('yandexfeedManualFilev2.yml создан успешно!')
}

generateYandexFeed()
