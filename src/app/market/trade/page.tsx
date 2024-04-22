'use client'
import TradingViewWidget from '@/components/tradingViewWidget/TradingViewWidget'
import TabBar from '@/components/tabBar'
import { ColumnType, TableComponent } from '@/components/table'
import { ChevronLeftIcon } from '@heroicons/react/16/solid'
import { Button, Card, CardBody, IconButton, Input, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {}

const Page = (props: Props) => {
  const router = useRouter()

  const columns: ColumnType[] = [
    {
      field: 'id',
      headerName: 'ID',
    },
    {
      field: 'date',
      headerName: 'Date',
    },
    {
      field: 'type',
      headerName: 'Type',
    },
    {
      field: 'side',
      headerName: 'Side',
    },
    {
      field: 'amount',
      headerName: 'Amount',
    },
    {
      field: 'filled',
      headerName: 'Filed',
    },
    {
      field: 'total',
      headerName: 'Total',
    },
  ]

  return (
    <div className='flex flex-col h-full w-full gap-2'>
      <div className='flex flex-col lg:flex-row gap-2 h-auto lg:h-[60%] w-full'>
        <div className='flex flex-col w-full lg:w-[55%] gap-2 max-h-[600px]'>
          <Card className="h-fit mt-2 p-2 w-full gap-x-2 flex flex-col md:flex-row justify-between">
            <div className='flex flex-row gap-1 items-center'>
              <IconButton variant='text' color='green' onClick={() => router.back()}>
                <ChevronLeftIcon fill='#a9a9a9' strokeWidth={2} width={24} height={24} />
              </IconButton>
              <Typography className='text-[.9rem] font-semibold text-black'>
                TVER-CC-2024
              </Typography>
              <Typography className='text-[.9rem] font-semibold text-error'>
                100.44
              </Typography>
            </div>
            <div className='flex items-center flex-row flex-wrap gap-x-4 px-2 lg:px-0'>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>Change</Typography>
                <Typography className='text-[.75rem] font-semibold text-green-500'>+20.10(+10.2%)</Typography>
              </div>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>High</Typography>
                <Typography className='text-[.75rem] font-semibold text-black'>100.44</Typography>
              </div>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>Low</Typography>
                <Typography className='text-[.75rem] font-semibold text-black'>99.44</Typography>
              </div>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>Volumn</Typography>
                <Typography className='text-[.75rem] font-semibold text-black'>1,000</Typography>
              </div>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>Value</Typography>
                <Typography className='text-[.75rem] font-semibold text-black'>10,000</Typography>
              </div>
              <div className='flex flex-col items-end'>
                <Typography className='text-[.6rem] text-[#a9a9a9]'>FTI-G</Typography>
                <Typography className='text-[.75rem] font-semibold text-black'>Pre-open 2</Typography>
              </div>
            </div>
          </Card>
          <Card className='h-full min-h-[400px] lg:min-h-0'>
            <TradingViewWidget />
          </Card>
        </div>
        <div className="lg:w-[45%] flex gap-2 h-full max-h-[600px]">
          <Card className='w-full h-full'>
            <Typography className='text-[.9rem] font-semibold text-black pt-4 px-4'>
              Order Book
            </Typography>
            <div className='flex border-b w-full justify-between p-4'>
              <Typography className='w-[50%]' variant='small'>
                Price
              </Typography>
              <Typography className='w-[10%] flex justify-center' variant='small'>
                Amount
              </Typography>
              <Typography className='w-[40%] flex justify-end' variant='small'>
                Total
              </Typography>
            </div>
            <div className='overflow-scroll no-scrollbar py-2'>
              <div className='h-[50%] py-4 border-b w-full'>
                {
                  [...Array(6).keys()].map((v, i) => {
                    return <div key={i} className='flex w-full justify-between px-4'>
                      <Typography className='w-[60%] text-error font-semibold text-[.8rem]'>
                        100.40
                      </Typography>
                      <Typography className='w-[10%] flex justify-center text-[.8rem]'>
                        20
                      </Typography>
                      <Typography className='w-[40%] flex justify-end text-[.8rem]'>
                        2,008.00
                      </Typography>
                    </div>
                  })
                }
              </div>
              <div className='h-[50%] py-2'>
                {
                  [...Array(6).keys()].map((v, i) => {
                    return <div key={i} className='flex w-full justify-between px-4'>
                      <Typography className='w-[60%] text-error font-semibold text-[.8rem]'>
                        100.40
                      </Typography>
                      <Typography className='w-[10%] flex justify-center text-[.8rem]'>
                        20
                      </Typography>
                      <Typography className='w-[40%] flex justify-end text-[.8rem]'>
                        2,008.00
                      </Typography>
                    </div>
                  })
                }
              </div>
            </div>
          </Card>
          <Card className='w-full h-full'>
            <Typography className='text-[.9rem] font-semibold text-black pt-4 px-4'>
              Public Market Trade
            </Typography>
            <div className='flex border-b w-full justify-between p-4'>
              <Typography className='w-[50%]' variant='small'>
                Price
              </Typography>
              <Typography className='w-[10%] flex justify-center' variant='small'>
                Amount
              </Typography>
              <Typography className='w-[40%] flex justify-end' variant='small'>
                Total
              </Typography>
            </div>
            <div className='overflow-scroll no-scrollbar py-4'>
              {
                [...Array(20).keys()].map((v, i) => {
                  return <div key={i} className='flex w-full justify-between px-4'>
                    <Typography className='w-[50%] text-error font-semibold text-[.8rem]'>
                      100.40
                    </Typography>
                    <Typography className='w-[10%] flex justify-center text-[.8rem]'>
                      20
                    </Typography>
                    <Typography className='w-[40%] flex justify-end text-[.8rem]'>
                      2,008.00
                    </Typography>
                  </div>
                })
              }
            </div>
          </Card>
        </div>
      </div>
      <div className='h-auto lg:h-[40%] gap-2 flex flex-col-reverse lg:flex-row'>
        <Card className='h-full w-full lg:w-[55%] flex gap-2 p-2'>
          <TabBar
            data={[
              {
                label: 'คำสั่งซื้อที่ใช้งานอยู่',
                value: 1,
                desc: <></>,
              },
              {
                label: 'คำสั่งซื้อที่ไม่ใช้งาน',
                value: 2,
                desc: <></>,
              },
              {
                label: 'ประวัติการเทรด',
                value: 3,
                desc: <></>,
              },
            ]}
            className='h-6 text-[.7rem] w-full' />
          <div className='overflow-scroll no-scrollbar'>
            <TableComponent columns={columns} paging={false} loading={false} />
          </div>
        </Card>
        <Card className='h-full w-full lg:w-[45%] p-2'>
          <TabBar data={[
            {
              label: 'Limit',
              value: 1,
              desc: <></>,
            },
            {
              label: 'Market',
              value: 2,
              desc: <></>,
            },
          ]}
            className={'text-[.8rem] w-full h-6'} />
          <div className='flex gap-2'>
            <div className='w-1/2 flex flex-col gap-1'>
              <div className='flex justify-between'>
                <Typography className='text-[.7rem]'>
                  มีอยู่
                </Typography>
                <Typography className='text-[.7rem]'>
                  0.00 THB
                </Typography>
              </div>
              <Input placeholder='ราคา' label='ราคา' icon={<Typography className='text-[.7rem] w-[3rem] absolute right-1 text-right'>0.00 THB</Typography>} />
              <Input placeholder='จำนวน' label='จำนวน' icon={<Typography className='text-[.7rem] w-[3rem] absolute right-1 text-right'>เครดิต</Typography>} />
              <Input placeholder='จำนวน' label='จำนวน' />
              <Button>
                ซื้อ
              </Button>
            </div>
            <div className='w-1/2 flex flex-col gap-1'>
              <div className='flex justify-between'>
                <Typography className='text-[.7rem]'>
                  มีอยู่
                </Typography>
                <Typography className='text-[.7rem]'>
                  0 Credit
                </Typography>
              </div>
              <Input placeholder='ราคา' label='ราคา' icon={<Typography className='text-[.7rem] w-[3rem] absolute right-1 text-right'>0.00 THB</Typography>} />
              <Input placeholder='จำนวน' label='จำนวน' icon={<Typography className='text-[.7rem] w-[3rem] absolute right-1 text-right'>เครดิต</Typography>} />
              <Input placeholder='จำนวน' label='จำนวน' />
              <Button color='red'>
                ขาย
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Page