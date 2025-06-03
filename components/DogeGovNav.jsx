// DogeGovNav.jsx
'use client'

import { useEffect } from 'react'

export default function DogeGovNav() {
  useEffect(() => {
    const DogeGovNav = require('@/components/dogegov-nav').default
    new DogeGovNav('dogegov-nav-container')
  }, [])

  return <div id="dogegov-nav-container"></div>
}
