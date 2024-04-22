import Modal from '@/components/modal'
import OtpInputView from '@/components/otpInputView'
import { ArrowPathIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { Button, Typography } from '@material-tailwind/react'
import React, { useEffect, useRef, useState } from 'react'

type Props = {
  open: string
  onClose: () => void
  onConfrim: (value: string | null) => void
}

function RegisterVerificationModal({ open, onClose, onConfrim }: Props) {
  const [timer, setTimer] = useState(60)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [otpValue, setOtpValue] = useState('')

  useEffect(() => {
    setTimer(60)

    return () => {

    }
  }, [open])


  useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTime) => prevTime - 1)
    }, 1000)
    timerRef.current = interval
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [])

  return (
    <Modal open={!!open} onClose={onClose}>
      <div className='p-4 gap-2 flex flex-col'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            {open === 'email' ? 'Email' : 'Phone'} Verification
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>
          {
            open === 'email'
              ? 'กรุณากรอก OTP จากอีเมล Marekee4588@gmail.com เพื่อยืนยันการลงทะเบียน'
              : 'กรุณากรอกรหัส 6 หลักไปที่ +66987654321'
          }
        </Typography>
        <Typography variant='small' className='font-semibold'>
          Ref: PVC1GB
        </Typography>
        <OtpInputView value={otpValue} onChange={(otp: string) => setOtpValue(otp)} />
        <Typography variant='small' className='cursor-pointer'>ยังไม่ได้รับรหัส?</Typography>
        {
          timer < 0
            ? <Typography variant='small' className='flex flex-row gap-1 cursor-pointer text-green-500' onClick={() => setTimer(60)}>
              <ArrowPathIcon width={20} height={20} className='fill-green-500' />
              ส่งซ้ำ
            </Typography>
            : <Typography variant='small'>Request new code in <span className='text-green-500'>{timer}</span> seconds.</Typography>
        }
        <div className='flex flex-row gap-2'>
          <Button color='white' fullWidth={true}>ยกเลิก</Button>
          <Button fullWidth={true}
            onClick={() => {
              if (open !== 'email') {
                onConfrim(null)
                return
              }
              setTimer(60)
              onConfrim('phone')
            }
            }>ยืนยัน</Button>
        </div>
      </div>
    </Modal>
  )
}

export default RegisterVerificationModal