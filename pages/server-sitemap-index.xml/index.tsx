import { getServerSideSitemapIndexLegacy } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import fetchFaculty from '@/api/fetchFaculty'
import fetchTypeProgram from '@/api/fetchTypeProgram'
import fetchProgramCourses from '@/api/fetchProgramCourses'

export const getServerSideProps: GetServerSideProps = async ctx => {
    const paths = (
        await Promise.all(
            ctx.locales!.map(async () => {
                //=============Catalog================
                const faculty = await fetchFaculty()
                const typeProgram = await fetchTypeProgram()
                const courses = await fetchProgramCourses()

                const facultyMap = Object.fromEntries(faculty.map(f => [f.title, f.slug]))
                const typeProgramMap = Object.fromEntries(typeProgram.map(tp => [tp.title, tp.slug]))

                const slugFaculty = courses.reduce((previousValue, currentValue) => {
                    if (facultyMap[currentValue.faculty.title]){
                      return previousValue.add(facultyMap[currentValue.faculty.title])
                    }
                    return previousValue
                }, new Set(''))

                const slugTypeProgram = courses.reduce((previousValue, currentValue) => {
                    if (typeProgramMap[currentValue.typeProgram.title]){
                      return previousValue.add(typeProgramMap[currentValue.typeProgram.title])
                    }
                    return previousValue
                }, new Set(''))

                const secondRowUrl = courses.reduce((previousValue, currentValue) => {
                    if (typeProgramMap[currentValue.typeProgram.title] && typeProgramMap[currentValue.faculty.title]){
                      return previousValue.add(`${typeProgramMap[currentValue.typeProgram.title]}/${typeProgramMap[currentValue.faculty.title]}`)
                    }
                    return previousValue
                }, new Set(''))

                const slugCourses = courses.reduce((previousValue, currentValue) => {
                    if (typeProgramMap[currentValue.typeProgram.title] && typeProgramMap[currentValue.faculty.title]){
                      return previousValue.add(`${typeProgramMap[currentValue.typeProgram.title]}/${typeProgramMap[currentValue.faculty.title]}/${currentValue.slug}`)
                    }
                    return previousValue
                }, new Set(''))

                const catalogPathUrl = [
                    ...slugTypeProgram,
                    ...slugFaculty,
                    ...secondRowUrl,
                    ...slugCourses
                ].reduce((previousValue, currentValue) => {
                    return previousValue.add(`https://mipo.msk.ru/catalog/${currentValue}`)
                }, new Set(''))
                //===============================================

                //=============Webinars===============

                //====================================

                return [...catalogPathUrl]
            }),
        )
    ).flat(2)


    return getServerSideSitemapIndexLegacy(ctx, paths)
}

export default function SitemapIndex() {}
