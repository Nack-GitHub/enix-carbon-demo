import Modal from '@/components/modal'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React from 'react'

type Props = {
  open: boolean,
  onClose: () => void,
}

function ContinueRegistationModal({ open, onClose }: Props) {
  const router = useRouter()

  return (
    <Modal open={open} onClose={onClose}>
      <div className='p-4'>
        <div className='flex flex-row justify-between'>
          <Typography variant='h4' color='black'>Continue registration?</Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>
          คุณมีการลงทะเบียนที่ไม่สมบูรณ์ คุณต้องการดำเนินการต่อหรือไม่?
        </Typography>
        <div className='flex flex-row mt-8 gap-2'>
          <Button color='white' fullWidth={true} onClick={onClose}>
            ยกเลิก
          </Button>
          <Button fullWidth={true} onClick={() => router.back()}>
            ยืนยัน
          </Button>
        </div>
      </div>
    </Modal>
  )
}

export default ContinueRegistationModal