import qs from 'qs';

import routesBack from '@/config/routesBack';
import { fetcherGet } from '@/helpers/fetcherGet';

import type { IFetchFaq } from './types';

export const fetchFaq = async () => {
  const query = qs.stringify({
    fields: ['question', 'answer'],
  });
  const res = await fetcherGet<IFetchFaq>(
    `${routesBack.newRoot}${'/api/faqs'}?${query}`
  );

  return res?.data || [];
};
