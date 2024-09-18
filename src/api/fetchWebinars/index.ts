import qs from 'qs';

import type { IFetchWebinars } from '@/api/fetchWebinars/type';
import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

export const fetchWebinars = async () => {
  const query = qs.stringify({
    fields: ['title', 'slug', 'dataPlay', 'speaker'],
    populate: {
      faculty: {
        fields: ['title'],
      },
    },
  });
  const res = await fetcherGet<IFetchWebinars>(
    `${routesBack.newRoot}${'/api/webinars'}?${query}`
  );

  return res?.data || [];
};
