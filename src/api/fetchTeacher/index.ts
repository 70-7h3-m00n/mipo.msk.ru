import qs from 'qs';

import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

import type { IFetchTeacher } from './types';

export const fetchTeacher = async () => {
  const query = qs.stringify({
    fields: ['name', 'description'],
    populate: {
      image: {
        fields: ['url'],
      },
    },
  });
  const res = await fetcherGet<IFetchTeacher>(
    `${routesBack.newRoot}${'/api/teachers'}?${query}`
  );

  return res?.data || [];
};
