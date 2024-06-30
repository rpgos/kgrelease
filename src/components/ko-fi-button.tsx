'use client'

import Script from 'next/script'
import React from 'react'

export default function KofiButton() {

  const handleScriptLoad = () => {
    window.kofiWidgetOverlay.draw('rodribuilds', {
      'type': 'floating-chat',
      'floating-chat.donateButton.text': '',
      'floating-chat.donateButton.background-color': '#fbbf24',
      'floating-chat.donateButton.text-color': '#323842'
    })
  }

  return (
    <>
      <Script strategy="lazyOnload" src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js" onLoad={handleScriptLoad} />
    </>
  )
}
