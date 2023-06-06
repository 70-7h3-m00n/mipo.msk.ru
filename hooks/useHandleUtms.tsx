import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { setCookie, deleteCookie, getCookie } from 'cookies-next'
import { parseUrlParams } from '@/utils/index'
import { UTM_KEYS, UTM_KEYS_OBJ } from '@/config/index'

const NINETY_DAYS = 60 * 60 * 24 * 90

const EDPARTNERS = 'edpartners'

const checkIsEdpartners = (utmSource: string) => utmSource === EDPARTNERS

const useHandleUtms = () => {
  const router = useRouter()
  const params = parseUrlParams({ router })
  const utmSource =
    params?.[UTM_KEYS_OBJ['utm_source']] ||
    getCookie(UTM_KEYS_OBJ['utm_source'])?.toString() ||
    ''
  const isEdpartners = checkIsEdpartners(utmSource)

  useEffect(() => {
    if (params)
      UTM_KEYS.forEach(utmKey => {
        params[utmKey]
          ? setCookie(utmKey, params[utmKey], { maxAge: NINETY_DAYS })
          : undefined
      })

    if (!isEdpartners && params && getCookie(params[UTM_KEYS_OBJ['cl_uid']]))
      deleteCookie(params[UTM_KEYS_OBJ['cl_uid']])
  }, [params])
}
export default useHandleUtms
