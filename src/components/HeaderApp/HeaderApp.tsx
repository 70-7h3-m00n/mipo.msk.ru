import { useRouter } from 'next/router';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import HeaderCourse from '@/components/HeaderCourse';
import HeaderDefault from '@/components/HeaderDefault';

const headerMapping: { [key: string]: ReactElement } = {
  '/catalog/[slugTypePrograms]/[slugFaculty]/[id]': <HeaderCourse />,
};

export const HeaderApp = () => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();

  const isHeaderComponent = () => {
    if (headerMapping[router.pathname] !== undefined) {
      if (scrollY !== 0) {
        return headerMapping[router.pathname];
      } else {
        return <HeaderDefault />;
      }
    } else {
      return <HeaderDefault />;
    }
  };

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
  }, [router.pathname]);

  return isHeaderComponent();
};
