import qs from 'qs';

import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

import type { IFetchFaculty } from './type';

export const fetchFaculty = async () => {
  const query = qs.stringify({
    fields: ['title', 'slug'],
    populate: {
      image: {
        fields: ['url'],
      },
      icon: {
        fields: ['url'],
      },
    },
  });
  const res = await fetcherGet<IFetchFaculty>(
    `${routesBack.newRoot}${'/api/faculties'}?${query}`
  );

  return res?.data || [];
};
