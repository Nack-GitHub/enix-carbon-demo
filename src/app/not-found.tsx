'use client'
import { FlagIcon } from '@heroicons/react/16/solid'
import { Button, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'

function NotFound() {

  const router = useRouter()

  return (
    <div className='h-full flex flex-col justify-center items-center gap-2'>
      <FlagIcon width={79} height={79} />
      <Typography className='text-[60px] font-[700]' color='black'>404</Typography>
      <Typography className='text-[30px] font-[600] text-center' color='black'>ดูเหมือนว่ามีบางอย่างผิดพลาด</Typography>
      <Typography className='text-[18px] font-[400] text-center'>ไม่ต้องกังวล ทีมของเราพร้อมแล้ว โปรดลองรีเฟรชหน้าเว็บหรือกลับมาใหม่ในภายหลัง</Typography>
      <Button onClick={() => router.replace('/')}>กลับไปยังหน้าหลัก</Button>
    </div>
  )
}

export default NotFound