import React from 'react'
import Script from 'next/script'
const Footer = () => {
  return (
    <>
    <Script src="/assets/js/jquery.min.js" strategy='beforeInteractive' />
    <Script src="/assets/js/jquery.poptrox.min.js"/>
    <Script src="/assets/js/browser.min.js"/>
    <Script src="/assets/js/breakpoints.min.js"/>
    <Script src="/assets/js/util.js"/>
    </>
  )
}

export default Footer