'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import WhiteLogo from '@/assets/whiteLogo.png'
import { Button, Typography } from '@material-tailwind/react'
import LoginModal from '@/components/loginModal'
import VerificationModal from '@/components/verificationModal'

type Props = {}

function LoginPage({ }: Props) {

  const [openLogin, setOpenLogin] = useState(false)
  const [openVerification, setOpenVerification] = useState(false)

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='flex flex-col items-center max-w-[90%] lg:max-w-[50%]'>
        <Image src={WhiteLogo} alt='WhiteLogo' />
        <Typography variant='h1' color='white' className='text-center mt-2' >
          ลดคาร์บอน เพิ่มเครดิต  ผลลัพธ์คือโลกที่ยั่งยืน
        </Typography>
        <Typography variant='lead' color='white' className='text-center my-2'>
          EN-IX Exchange อำนวยความสะดวกในการซื้อขายสัญญามาตรฐานและคำสั่งซื้อของบริษัทสำหรับเครดิตโครงการแบบสองทาง
        </Typography>
        <div className='flex gap-2 w-full flex-col md:flex-row'>
          <Button fullWidth={true}>
            ลงทะเบียน
          </Button>
          <Button color='white' fullWidth={true} onClick={() => setOpenLogin(true)}>
            เข้าสู่ระบบ
          </Button>
        </div>
      </div>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} onConfirm={() => setOpenVerification(true)} />
      <VerificationModal open={openVerification} onClose={() => setOpenVerification(false)} />
    </div>
  )
}

export default LoginPage