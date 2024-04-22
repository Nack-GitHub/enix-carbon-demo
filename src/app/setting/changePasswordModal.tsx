import Modal from '@/components/modal'
import TextValidate from '@/components/textValidate'
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

type TProps = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
}

export default function ChangePasswordModal({ open, onClose, onConfirm }: TProps) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className='p-4 flex flex-col gap-4'>
                <div >
                    <Typography variant='h4' color='black'>
                        เปลี่ยนรหัสผ่าน
                    </Typography>
                    <Typography >
                        กรุณากรอกรหัสผ่านของคุณเพื่อทำการเปลี่ยนแปลงนี้
                    </Typography>
                </div>
                <div className='flex flex-wrap gap-4  mb-4'>
                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            รหัสผ่านปัจจุบัน
                        </Typography>
                        <TextValidate />
                    </div>

                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            รหัสผ่านใหม่
                        </Typography>
                        <TextValidate />
                    </div>

                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            รหัสผ่านใหม่อีกครั้ง
                        </Typography>
                        <TextValidate />
                    </div>
                </div>
                <div className='flex flex-row gap-2'>
                    <Button color='white' fullWidth={true} onClick={onClose}>ยกเลิก</Button>
                    <Button fullWidth={true} onClick={onClose}>ยืนยัน</Button>
                </div>
            </div>
        </Modal>
    )
}
