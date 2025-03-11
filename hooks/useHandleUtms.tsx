import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { deleteCookie, setCookie } from 'cookies-next'
import { parseUrlParams } from '@/utils/index'
import { UTM_KEYS } from '@/config/index'

const NINETY_DAYS = 60 * 60 * 24 * 90

const useHandleUtms = () => {
  const router = useRouter()
  const params = parseUrlParams({ router })

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Запускаем точно, когда смонтировалось все
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted && params) {
      UTM_KEYS.forEach(utmKey => {
        const paramValue = params[utmKey]
        if (paramValue) {
          setCookie(utmKey, paramValue, { maxAge: NINETY_DAYS })
        }
      })
    }
  }, [params, isMounted])

  // useEffect(() => {
  //   if(router.asPath.includes('?') && !router.asPath.includes('utm_source=edpartners&')) {
  //     UTM_KEYS.forEach(utmKey => {
  //       deleteCookie(utmKey)
  //     })
  //   }
  // },[params, router])
}

export default useHandleUtms
