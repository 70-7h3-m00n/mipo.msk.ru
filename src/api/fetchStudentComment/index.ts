import qs from 'qs';

import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

import type { IFetchStudentComment } from './types';

export const fetchStudentComment = async () => {
  const query = qs.stringify({
    fields: ['name', 'description', 'data'],
    populate: {
      image: {
        fields: ['url'],
      },
    },
  });
  const res = await fetcherGet<IFetchStudentComment>(
    `${routesBack.newRoot}${'/api/student-comments'}?${query}`
  );

  return res?.data || [];
};
