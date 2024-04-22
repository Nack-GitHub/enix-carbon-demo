'use client'
import { ROUTE_PATH } from '@/constants/RoutePath'
import { BuildingOfficeIcon, ChartBarIcon, Cog6ToothIcon, NewspaperIcon, WalletIcon } from '@heroicons/react/16/solid'
import { SparklesIcon } from '@heroicons/react/20/solid'
import { Alert, Card, List, ListItem, ListItemPrefix, Typography } from '@material-tailwind/react'
import { usePathname, useRouter } from 'next/navigation'
import React, { ReactNode, useState } from 'react'

type Props = {}

export default function SidebarComponent({ }: Props) {
  const pathname = usePathname()
  const router = useRouter()

  const [openAlert, setOpenAlert] = useState(true)

  type ListMenu = {
    title: string,
    path: string,
    icon: ReactNode,
  }

  const listMenu: ListMenu[] = [
    {
      title: 'ตลาดซื้อขาย',
      path: ROUTE_PATH.MARKET,
      icon: <ChartBarIcon className="h-5 w-5" />
    },
    {
      title: 'คำสั่งซื้อ',
      path: ROUTE_PATH.ORDER,
      icon: <NewspaperIcon className="h-5 w-5" />
    },
    {
      title: 'สินค้าคงคลัง',
      path: ROUTE_PATH.INVENTORY,
      icon: <BuildingOfficeIcon className="h-5 w-5" />
    },
    {
      title: 'กระเป๋าเงินของฉัน',
      path: ROUTE_PATH.WALLET,
      icon: <WalletIcon className="h-5 w-5" />
    },
  ]

  return (
    <Card className="h-full w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 hidden lg:flex overflow-scroll no-scrollbar">
      <List>
        {
          listMenu.map((v, i) => {
            const isActive = pathname.includes(v.path)
            return <ListItem key={i} className={`hover:bg-green-50 focus:bg-green-100 ${isActive ? 'bg-green-100' : ''}`} onClick={() => router.push(v.path)}>
              <ListItemPrefix>
                {v.icon}
              </ListItemPrefix>
              {v.title}
            </ListItem>
          })
        }
        <hr className="my-2 border-blue-gray-50" />
        <ListItem onClick={() => router.push(ROUTE_PATH.SETTING)} className='hover:bg-green-50 focus:bg-green-100'>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          ตั้งค่า
        </ListItem>
      </List>
      <Alert open={openAlert} variant='gradient' className="mt-auto" color='green' onClose={() => setOpenAlert(false)}>
        <SparklesIcon width={20} height={20} className="mb-4" />
        <Typography variant="h6" className="mb-1" color='white'>
          Trade Now.
        </Typography>
        <Typography color='white' variant="small" className="font-normal opacity-80">
          Exchange facilitates two-way spot trading of standard contracts and firm orders for project credits.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            color='white'
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium" color='white'>
            Trade
          </Typography>
        </div>
      </Alert>
    </Card>
  )
}