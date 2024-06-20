import Script from 'next/script'

interface ScriptHeadProps {

}

export const ScriptHead = ({ }:ScriptHeadProps) => {
  return (
    <>
      <Script type="text/javascript" src="https://api.flocktory.com/v2/loader.js?site_id=5594" async />
    </>
  )
}
