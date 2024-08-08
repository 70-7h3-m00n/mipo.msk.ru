import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import HeaderCourse from '@/new-components/HeaderCourse'
import HeaderDefault from '@/new-components/HeaderDefault'

const headerMapping: {[key: string]: React.ReactElement} = {
  '/catalog/[slugTypePrograms]/[slugFaculty]/[id]': <HeaderCourse />
};

export const HeaderApp = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter()

  const isHeaderComponent = () => {
    if (headerMapping[router.pathname] !== undefined) {
      if (scrollY !== 0) {
        return headerMapping[router.pathname]
      } else {
        return <HeaderDefault />
      }
    } else {
      return <HeaderDefault />
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    if (headerMapping[router.pathname] !== undefined) {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [router.pathname])

  return isHeaderComponent()
}
