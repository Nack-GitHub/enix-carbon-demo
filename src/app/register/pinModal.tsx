import Modal from '@/components/modal'
import OtpInputView from '@/components/otpInputView'
import { XMarkIcon } from '@heroicons/react/16/solid'
import { Button, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
}

function PinModal({ open, onClose, onConfirm }: Props) {
  const [pinValue, setPinValue] = useState('')
  const [confirmValue, setConfirmValue] = useState('')
  const [confirm, setConfirm] = useState(false)

  function handleClose() {
    setPinValue('')
    setConfirmValue('')
    setConfirm(false)
    onClose()
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <div className='p-4 flex flex-col gap-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            {
              confirm
                ? 'Confirm Pin Setup'
                : 'Pin Setup'
            }
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => handleClose()} />
        </div>
        <Typography variant='small'>กรุณากรอกรหัสพินของคุณ</Typography>
        {
          confirm
            ? <OtpInputView value={confirmValue} onChange={(pin: string) => setConfirmValue(pin)} />
            : <OtpInputView value={pinValue} onChange={(pin: string) => setPinValue(pin)} />
        }
        <div className='flex flex-row gap-2'>
          <Button color='white' fullWidth={true}>ยกเลิก</Button>
          <Button fullWidth={true} onClick={() => {
            if (confirm && confirmValue.length === 6 && confirmValue === pinValue) {
              handleClose()
              onConfirm()
              return
            }
            if (pinValue.length === 6) {
              setConfirm(true)
            }
          }}>ยืนยัน</Button>
        </div>
      </div>
    </Modal>
  )
}

export default PinModal