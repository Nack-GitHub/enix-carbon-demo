'use client'
import Modal from '@/components/modal'
import TabBar from '@/components/tabBar'
import { HomeIcon } from '@heroicons/react/20/solid'
import { Typography } from '@material-tailwind/react'
import React, { useEffect } from 'react'
import CarbonCreditTable from './carbonCreditTable'
import RecTable from './recTable'
import ReTable from './reTable'


type Props = {}

function Page({ }: Props) {

  useEffect(() => {



  }, [])


  const tabData = [
    {
      label: "Carbon Credit",
      value: 1,
      desc: <CarbonCreditTable />,
    },
    {
      label: "REC",
      value: 2,
      desc: <RecTable />,
    },
    {
      label: "RE",
      value: 3,
      desc: <ReTable />,
    }
  ]

  return (
    <div className='p-1 lg:p-4 flex flex-col gap-4'>
      <div className='flex gap-2'>
        <Typography variant='paragraph' className='flex'>
          <HomeIcon width={20} className='fill-blue-gray-300 ' />
          <span className='text-blue-gray-300'>
            Home /
          </span>
        </Typography>
        <Typography variant='paragraph'>
          Markets
        </Typography>
      </div>
      <Typography variant='h4'>
        ตลาดซื้อขาย
      </Typography>
      <hr />
      <TabBar data={tabData} />
    </div >
  )
}

export default Page