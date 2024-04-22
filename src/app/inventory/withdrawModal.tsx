import Modal from '@/components/modal'
import SelectValidate from '@/components/selectValidate'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'
import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {
  open: boolean
  onClose: () => void
}

function WithdrawModal({ open, onClose }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            การถอนเครดิต
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>กรุณาระบุจำนวนเครดิตที่ต้องการถอนเครดิต</Typography>
        <Typography variant='small' color='black' className='font-semibold'>Symbol</Typography>
        <SelectValidate value={undefined} options={[]} callBack={() => { }} />
        <div className='flex flex-row justify-between'>
          <Typography className='font-semibold' color='black'>จำนวน</Typography>
          <Typography className='flex gap-4'><ExclamationCircleIcon width={24} height={24} /> ใช้ได้ 0 เครดิต</Typography>
        </div>
        <Input />
        <div className='flex gap-2'>
          <Button fullWidth={true} color='white' onClick={() => onClose()}>ยกเลิก</Button>
          <Button fullWidth={true} onClick={() => onClose()}>ถอนเงิน</Button>
        </div>
      </div>
    </Modal>
  )
}

export default WithdrawModal