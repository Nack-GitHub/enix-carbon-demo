import Modal from '@/components/modal'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button, Card, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {
  open: boolean,
  onClose: () => void,
  onConfirm: () => void
}

function DepositWalletModal({ open, onClose, onConfirm }: Props) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            การฝากเงิน
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>กรุณาโอนเงินของคุณไปที่รายละเอียดบัญชีธนาคารต่อไปนี้</Typography>
        <Card className='p-2 lg:p-4 flex flex-row gap-2 w-full mb-4'>
          <div className='h-24 w-24 bg-blue-gray-300 rounded-lg'>
          </div>
          <div className='w-full'>
            <Typography variant='h5' color='black'>SIAM CAMMERCEAL BANK PUBLIC COMPANY LTD </Typography>
            <div className='flex items-center gap-2'>
              <Typography variant='small' className='text-gray-600'>สาขาธนาคาร:</Typography>
              <Typography variant='small' color='black'>0247 สาขา เซ็นทรัลเวิลด์</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <Typography variant='small' className='text-gray-600'>ชื่อบัญชีธนาคาร:</Typography>
              <Typography variant='small' color='black'>บริษัท เอสโคโพลิส จำกัด</Typography>
            </div>
            <div className='flex items-center gap-2'>
              <Typography variant='small' className='text-gray-600'>หมายเลขบัญชีธนาคาร:</Typography>
              <Typography variant='small' color='black'>247-259671-0</Typography>
            </div>
          </div>
        </Card>
        <div className='flex flex-row gap-2'>
          <Button fullWidth={true} color='white' onClick={() => onClose()}>ยกเลิก</Button>
          <Button fullWidth={true} onClick={() => onConfirm()}>I have tranfer money</Button>
        </div>
      </div>
    </Modal>
  )
}

export default DepositWalletModal