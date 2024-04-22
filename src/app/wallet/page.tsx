'use client'
import SelectValidate from '@/components/selectValidate'
import { TrashIcon } from '@heroicons/react/16/solid'
import { HomeIcon } from '@heroicons/react/16/solid'
import { PencilIcon } from '@heroicons/react/24/solid'
import { Button, Card, Checkbox, Input, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import WithDrawWalletModal from './withDrawWalletModal'
import DepositWalletModal from './depositWalletModal'
import DetailDepositModal from './detailDepositModal'

type Props = {}

function WalletPage({ }: Props) {
  const [openDeposit, setOpenDeposit] = useState(false)
  const [openWithdraw, setOpenWithdraw] = useState(false)
  const [openDetailDeposit, setOpenDetailDeposit] = useState(false)

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
          Wallet
        </Typography>
      </div>
      <Typography variant='h4' color='black'>
        กระเป๋าเงินของฉัน
      </Typography>
      <hr />
      <div className='flex flex-row justify-between'>
        <div>
          <Typography variant='h5' color='black'>
            วิธีการชำระเงิน
          </Typography>
          <Typography variant='small'>
            จัดการวิธีการชำระเงินที่คุณต้องการอย่างปลอดภัยและสะดวกสบาย
          </Typography>
        </div>
        <div className='flex flex-row gap-2'>
          <Button color='white' onClick={() => setOpenWithdraw(true)}>ถอนเงิน</Button>
          <Button onClick={() => setOpenDeposit(true)}>ฝากเงิน</Button>
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 gap-2'>
        <div className='col-end-2'>
          <Typography className='font-semibold' variant='small' color='black'>อีเมล์ติดต่อ</Typography>
          <Typography variant='small'>ใบแจ้งหนี้ควรส่งไปที่ไหน?</Typography>
        </div>
        <div className='col-start-3 col-span-3 flex flex-col gap-2'>
          <Checkbox
            label={<div>
              <Typography className="text-[12px]" color='black'>
                ส่งไปที่อีเมลบัญชีของฉัน
              </Typography>
              <Typography className="text-[12px]">
                Nammane@gmail.com
              </Typography>
            </div>}
            containerProps={{
              className: "-mt-5",
            }}
          />
          <Checkbox
            label={<div>
              <Typography className="text-[12px]" color='black'>
                ส่งไปที่อีเมลบัญชีของฉัน
              </Typography>
              <Input />
            </div>}
            containerProps={{
              className: "-mt-5",
            }}
            labelProps={{
              className: 'w-full'
            }}
          />
        </div>
      </div>
      <hr />
      <div className='flex flex-col md:grid md:grid-cols-4 lg:grid-cols-5 gap-2'>
        <div className='col-end-2'>
          <Typography className='font-semibold' variant='small' color='black'>รายละเอียดการชำระเงิน</Typography>
          <Typography variant='small'>เลือกวิธีการชำระเงินเริ่มต้น</Typography>
        </div>
        <div className='col-start-3 col-span-3 flex flex-col gap-4'>
          <Card className='p-2 lg:p-4 flex flex-row gap-2 w-full'>
            <div className='h-16 w-16 bg-blue-gray-300 rounded-lg'>
            </div>
            <div className='w-full relative'>
              <Typography className='w-[65%] lg:w-[80%]' variant='h5' color='black'>SIAM CAMMERCEAL BANK PUBLIC COMPANY LTD </Typography>
              <div className='flex flex-row gap-2 absolute top-0 right-0'>
                <Button className='p-0 flex flex-row gap-1 items-center text-black' variant='text'><PencilIcon width={18} height={18} className='fill-blue-gray-400' /> แก้ไข</Button>
                <Button className='p-0 flex flex-row gap-1 items-center text-red-500' variant='text'><TrashIcon width={18} height={18} className='fill-red-500' />ลบ</Button>
              </div>
              <div className='flex items-center gap-2'>
                <Typography variant='small' className='text-gray-600'>Account Number:</Typography>
                <Typography variant='small' color='black'>xxxx-xxxx-85</Typography>
              </div>
              <div className='flex items-center gap-2'>
                <Typography variant='small' className='text-gray-600'>Account Name:</Typography>
                <Typography variant='small' color='black'>บริษัท อินิกเซอร์ จำกัด</Typography>
              </div>
            </div>
          </Card>
          {/* <span className='flex items-center gap-2 cursor-pointer hover:translate-y-[-1px]'>
            +
            <Typography className='underline' variant='small'>
              เพิ่มบัญชีธนาคาร
            </Typography>
          </span> */}
        </div>
      </div>
      <hr />
      <div>
        <Typography className='font-semibold' variant='small' color='black'>
          ประวัติการโอนเงิน
        </Typography>
        <Typography variant='small' >
          โปรดติดต่อทีมงานที่เป็นมิตรของเราผ่าน ENI-X@untitled.com หากมีคำถาม
        </Typography>
        <div className='flex lg:flex-row w-full gap-2'>
          <div className='grid lg:grid-cols-3 gap-2 w-[85%]'>
            <Input />
            <Input />
            <SelectValidate value={undefined} options={[]} callBack={() => { }} />
          </div>
          <div className='flex flex-col gap-2 lg:flex-row w-[15%]'>
            <Button className='px-1 w-full'>
              ค้นหา
            </Button>
            <Button className='px-1 w-full' color='white'>
              ล้างทั้งหมด
            </Button>
          </div>
        </div>
      </div>
      <WithDrawWalletModal open={openWithdraw} onClose={() => setOpenWithdraw(false)} />
      <DepositWalletModal
        open={openDeposit}
        onClose={() => setOpenDeposit(false)}
        onConfirm={() => {
          setOpenDeposit(false)
          setOpenDetailDeposit(true)
        }} />
      <DetailDepositModal open={openDetailDeposit} onClose={() => setOpenDetailDeposit(false)} />
    </div>
  )
}

export default WalletPage