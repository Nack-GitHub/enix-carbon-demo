'use client'
import TabBar from '@/components/tabBar'
import { HomeIcon } from '@heroicons/react/16/solid'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import InventoryTable from './inventoryTable'
import InventoryHistoryTable from './inventoryHistoryTable'

type Props = {}

function InventoryPage({ }: Props) {

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
          Inventory
        </Typography>
      </div>
      <Typography variant='h4'>
        สินค้าคงคลัง
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
            label: 'สินค้าคงคลัง',
            value: 1,
            desc: <InventoryTable />,
          },
          {
            label: 'ประวัติ',
            value: 2,
            desc: <InventoryHistoryTable />,
          },
        ]} />
    </div>
  )
}

export default InventoryPage