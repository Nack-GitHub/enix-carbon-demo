'use client'
import TradingViewWidget from '@/components/tradingViewWidget/TradingViewWidget'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className='h-full w-full'>
      <TradingViewWidget />
    </div>
  )
}

export default Page