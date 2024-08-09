import checkIsAffiseUtmCampaign from './checkIsAffiseUtmCampaign';
import checkIsAffiseUtmSource from './checkIsAffiseUtmSource';

const checkIsLeadFromAffise = (params: Record<string, string | undefined>) => {
  const isAffiseUtmSource = checkIsAffiseUtmSource(params.utm_source);
  const isAffiseUtmCampaign = checkIsAffiseUtmCampaign(params.utm_campaign);

  return isAffiseUtmSource && isAffiseUtmCampaign;
};

export default checkIsLeadFromAffise;
