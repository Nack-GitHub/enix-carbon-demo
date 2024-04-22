import Modal from '@/components/modal'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {
  open: boolean,
  onClose: () => void
}

function DetailDepositModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            รายละเอียดการฝากเงิน
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>กรุณาระบุจำนวนเงินที่ต้องการที่จะฝาก พร้อมไฟล์หลักฐาน</Typography>
        <Typography color='black' className='font-semibold'>ฝากด้วย</Typography>
        <Card className='p-4 flex flex-row gap-2'>
          <div className='w-14 h-14 bg-blue-gray-300 rounded-lg'></div>
          <div className=''>
            <Typography>บริษัท อินิกเซอร์ จำกัด</Typography>
            <Typography>xxxx-xxxx-85</Typography>
          </div>
        </Card>
        <Typography color='black' className='font-semibold'>จำนวนเงินที่ฝาก</Typography>
        <Input />
        <Typography color='black' className='font-semibold'>สลิปการโอนเงินหรือใบเสร็จรับเงิน</Typography>
        <Input />
        <div className='flex gap-2 mt-4'>
          <Button color='white' fullWidth={true} onClick={() => onClose()}>ยกเลิก</Button>
          <Button fullWidth={true} onClick={() => onClose()}>ฝากเงิน</Button>
        </div>
      </div>
    </Modal>
  )
}

export default DetailDepositModal