'use client'
import React, { useEffect, useState } from 'react'
import { AdvancedRealTimeChart } from 'react-ts-tradingview-widgets'

function TradingViewWidget() {
  const [key, setKey] = useState(1)

  useEffect(() => {
    setKey(2)

    return () => {

    }
  }, [])


  return (
    <div style={{ height: '100%', width: '100%' }}>
      <AdvancedRealTimeChart key={key} theme="light" autosize></AdvancedRealTimeChart>
    </div>
  )
}

export default TradingViewWidget
