import qs from 'qs';

import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

import type { IFetchTrustTraining } from './types';

export const fetchTrustTraining = async () => {
  const query = qs.stringify({
    populate: {
      image: {
        fields: ['url'],
      },
    },
  });
  const res = await fetcherGet<IFetchTrustTraining>(
    `${routesBack.newRoot}${'/api/trust-trainings'}?${query}`
  );

  return res?.data || [];
};
