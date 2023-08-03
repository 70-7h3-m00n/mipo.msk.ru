import { useEffect, useLayoutEffect } from 'react'
import { useRouter } from 'next/router'
import { deleteCookie, setCookie } from 'cookies-next'
import { parseUrlParams } from '@/utils/index'
import { UTM_KEYS } from '@/config/index'

const NINETY_DAYS = 60 * 60 * 24 * 90

const useHandleUtms = () => {
  const router = useRouter()
  const params = parseUrlParams({ router })

  if (params && router.asPath.includes('utm_source')){
    UTM_KEYS.forEach(utmKey =>
      params[utmKey]
        ? setCookie(utmKey, params[utmKey], { maxAge: NINETY_DAYS })
        : undefined
    )
  }
  useEffect(() => {
    if(!router.asPath.includes('utm_source')) {
      UTM_KEYS.forEach(utmKey => {
        deleteCookie(utmKey)
      })
    }
  },[])
}
export default useHandleUtms
