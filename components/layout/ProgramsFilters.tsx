import stls from '@/styles/components/layout/ProgramsFilters.module.sass'
import { TypeCategory } from '@/types/index'
import StudyFields from '@/components/general/StudyFields'
import SearchDesktop from '@/components/general/SearchDesktop'
import { useEffect, useState } from 'react'
import fetchPathsCourses from '../../api/fetchCourses'
import { useRouter } from 'next/router'

type ProgramsFiltersType = {
  ofType?: TypeCategory
  close?: any
}

const ProgramsFilters = ({ ofType = null, close }: ProgramsFiltersType) => {
  const [course, setCourse] = useState([])

  const route = useRouter()

  useEffect(() => {
    const data= async () => {
      const courseResponse = await fetchPathsCourses()
      const result = courseResponse.map(item => item.attributes)
      setCourse([...result])
    }

    data()
  }, [])

  return (
    <div className={stls.container}>
      <SearchDesktop />
      <StudyFields aside ofType={ofType} close={close} />

      <div style={{
        marginTop: '20px'
      }}>
        <h2>Список новых курсов</h2>

        <div>
          {
            course.map((item, index) => (
              <div key={item}
                   onClick={() => route.push(`new-courses/${item.slug}`)}
                   style={{
                     cursor: 'pointer',
                     margin: '15px 0'
                   }}
              >
                {item.nameCourse}
              </div>
            ))
          }
        </div>
      </div>
      {/* <div className={stls.divider}></div>
      <ProgramType close={close} /> */}
    </div>
  )
}

export default ProgramsFilters
