import Modal from '@/components/modal'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Button, Card, Input, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {
  open: boolean,
  onClose: () => void
}

function WithDrawWalletModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            รายการถอนเงิน
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>กรุณาระบุจำนวนเครดิตที่จะถอน</Typography>
        <Typography variant='small' className='mt-4 font-semibold' color='black'>การถอนเงินไปที่</Typography>
        <Card className='p-4 flex flex-row gap-2'>
          <div className='w-14 h-14 bg-blue-gray-300 rounded-lg'></div>
          <div className=''>
            <Typography>บริษัท อินิกเซอร์ จำกัด</Typography>
            <Typography>xxxx-xxxx-85</Typography>
          </div>
        </Card>
        <div className='flex justify-between'>
          <Typography variant='small' className='font-semibold'>สามารถถอนออกได้</Typography>
          <Typography variant='small' className='font-semibold'>0.00 THB</Typography>
        </div>
        <div className='flex justify-between'>
          <Typography variant='small' className='flex items-center gap-2'>รวมที่มีอยู่ <ExclamationCircleIcon width={24} height={24} /></Typography>
          <Typography variant='small' className='font-semibold'>0.00 THB</Typography>
        </div>
        <Typography variant='small' className='font-semibold'>จำนวนเงินที่ถอน</Typography>
        <Input className='mb-4' />
        <div className='flex gap-2 mt-4'>
          <Button color='white' fullWidth={true} onClick={() => onClose()}>ยกเลิก</Button>
          <Button fullWidth={true} onClick={() => onClose()}>ถอนเงิน</Button>
        </div>
      </div>
    </Modal>
  )
}

export default WithDrawWalletModal