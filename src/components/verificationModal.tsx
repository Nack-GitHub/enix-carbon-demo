import React, { Fragment, useEffect, useRef, useState } from 'react'
import Modal from './modal'
import { Button, Typography } from '@material-tailwind/react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import TabBar from './tabBar'
import OtpInputView from './otpInputView'
import { signIn } from 'next-auth/react'

type Props = {
  open: boolean,
  onClose: () => void
}

function VerificationModal({ open, onClose }: Props) {

  const [selectedTab, setSelectedTab] = useState<string | number>(1)
  const [isConfirm, setIsConfirm] = useState(false)

  const [timer, setTimer] = useState(60)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const [otpValue, setOtpValue] = useState('')

  useEffect(() => {
    if (isConfirm) {
      let interval = setInterval(() => {
        setTimer((prevTime) => prevTime - 1)
      }, 1000)
      timerRef.current = interval
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [isConfirm])

  function handleClose() {
    setSelectedTab(1)
    setIsConfirm(false)
    setTimer(60)
    setOtpValue('')
    onClose()
  }

  const _submit = async () => {
    if (otpValue.length !== 6) {
      return
    }
    console.log("_submit >>")

    let email_input = 'user@example.com'
    let password_input = 'P@ssw0rd1234'

    console.log('submitttt 1', email_input)
    console.log('submitttt 2', password_input)

    const result = await signIn('credentials', {
      email: email_input,
      password: password_input,
      redirect: true,
      // callbackUrl: "http://localhost:3000/market"
    })
  }

  return (
    <Modal open={open} onClose={handleClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='flex justify-between'>
          <Typography variant='h4' color='black'>
            Security Verification
          </Typography>
          <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
        </div>
        <Typography variant='small'>กรุณากรอกรหัส 6 หลักที่ส่งไปที่</Typography>
        <TabBar
          className='w-full'
          data={[
            {
              label: 'E-mail',
              desc: <></>,
              value: 1
            },
            {
              label: 'Phone number',
              desc: <></>,
              value: 2
            },
          ]}
          onSelected={(value) => {
            setSelectedTab(value)
            setIsConfirm(false)
            setTimer(60)
            setOtpValue('')
          }} />
        <Fragment>
          {
            isConfirm
              ? <div className='my-4'>
                <Typography variant='paragraph'>{selectedTab === 1 ? 'Name@mail.com' : '+66987654321'}</Typography>
                <Typography className='mb-4' variant='paragraph'>Ref: 635N2</Typography>
                {
                  timer < 0
                    ? <>
                      <Typography variant='small'>OTP หมดอายุแล้ว</Typography>
                    </>
                    : <>
                      <OtpInputView value={otpValue} onChange={(otp: string) => setOtpValue(otp)} />
                      <div className='flex flex-row mt-4 gap-2'>
                        <Typography variant='small'>OTP expires in </Typography>
                        <Typography variant='small' color='green'>{timer}</Typography>
                        <Typography variant='small'>Second.</Typography>
                      </div>
                    </>
                }
              </div>
              : <div className='my-4 text-center'>
                <Typography variant='paragraph'>{selectedTab === 1 ? 'Name@mail.com' : '+66987654321'}</Typography>
              </div>
          }
        </Fragment>
        {
          isConfirm
            ? <>
              {
                timer < 0
                  ? <Button onClick={() => setTimer(60)}>ส่งรหัสอีกครั้ง</Button>
                  : <Button onClick={() => _submit()}>ยืนยัน</Button>
              }
            </>
            : <Button onClick={() => setIsConfirm(true)}>ส่งรหัส</Button>
        }
        <div className='flex flex-row gap-2 justify-center'>
          <Typography variant='small'>
            ไม่ใช่คุณ?
          </Typography>
          <Typography variant='small' className='cursor-pointer text-gray-950' onClick={() => { }}>
            ออกจากระบบ
          </Typography>
        </div>
      </div>
    </Modal>
  )
}

export default VerificationModal