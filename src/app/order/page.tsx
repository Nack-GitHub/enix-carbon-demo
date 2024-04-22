'use client'
import TabBar from '@/components/tabBar'
import { HomeIcon } from '@heroicons/react/16/solid'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import HistoryOrderTable from './historyOrderTable'
import HistoryTradeTable from './historyTradeTable'

type Props = {}

function OrderPage({ }: Props) {

  return (
    <div className='p-1 lg:p-4 flex flex-col gap-4 h-full w-full'>
      <div className='flex gap-2'>
        <Typography variant='paragraph' className='flex'>
          <HomeIcon width={20} className='fill-blue-gray-300 ' />
          <span className='text-blue-gray-300'>
            Home /
          </span>
        </Typography>
        <Typography variant='paragraph'>
          Order
        </Typography>
      </div>
      <Typography variant='h4'>
        คำสั่งซื้อ
      </Typography>
      <hr />
      <TabBar
        tabsHeaderClassName='bg-transparent border-b-[1px] border-[#0000000F] p-0'
        indicatorProps={{
          className:
            "bg-transparent border-b-[1px] border-green-500 shadow-none rounded-none",
        }}
        data={[
          {
            label: 'ประวัติการสั่งซื้อ',
            value: 1,
            desc: <HistoryOrderTable />,
          },
          {
            label: 'ประวัติการเทรด',
            value: 2,
            desc: <HistoryTradeTable />,
          },
        ]} />
    </div>
  )
}

export default OrderPage