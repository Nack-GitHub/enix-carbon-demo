import React, { useEffect, useState } from 'react'
import Modal from './modal'
import Logo from '@/assets/logo.svg'
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'

type Props = {
  open: boolean,
  onClose: () => void,
  onConfirm: () => void
}

function LoginModal({ open, onClose, onConfirm }: Props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleConfirm() {
    if (email && password) {
      onClose()
      onConfirm()
    }
  }

  function handleClose() {
    setEmail('')
    setPassword('')
    onClose()
  }


  return (
    <Modal open={open} onClose={handleClose}>
      <div className='flex flex-col gap-2 p-4'>
        <div className='h-4'>
          <Logo />
        </div>
        <Typography variant='h4' color='black'>
          ยินดีต้อนรับกลับมา!
        </Typography>
        <Typography variant='paragraph'>
          กรอกอีเมลและรหัสผ่านของคุณเพื่อเข้าสู่ระบบ
        </Typography>
        <Typography className='mt-4 text-blue-gray-900 font-semibold'>
          อีเมลของคุณ
        </Typography>
        <Input
          type="email"
          className="!border-t-blue-gray-200 focus:!border-t-green-500"
          placeholder="Email Address"
          labelProps={{
            className: "hidden",
          }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Typography className='mt-4 text-blue-gray-900 font-semibold'>
          รหัสผ่าน
        </Typography>
        <Input
          type="password"
          className="!border-t-blue-gray-200 focus:!border-t-green-500"
          placeholder="*********"
          labelProps={{
            className: "hidden",
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Checkbox color='green' defaultChecked={false} label='Remember me' />
        <Button onClick={handleConfirm}>
          เข้าสูระบบ
        </Button>
        <div className='justify-center flex flex-row gap-2'>
          <Typography variant='small'>
            ยังไม่มีบัญชี?
          </Typography>
          <Typography variant='small' className='cursor-pointer' onClick={() => { }}>
            ลงทะเบียน
          </Typography>
        </div>
      </div>
    </Modal>
  )
}

export default LoginModal