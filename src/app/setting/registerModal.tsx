import Modal from '@/components/modal'
import TextValidate from '@/components/textValidate'
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'

type TProps = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
}

export default function RegisterModal({ open, onClose, onConfirm }: TProps) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className='p-4 flex flex-col gap-4'>
                <div >
                    <Typography variant='h4' color='black'>
                        บัญชีลดการปล่อยก๊าซเรือนกระจกภาคสมัครใจของประเทศไทย
                    </Typography>
                    <Typography >
                        คุณต้องการเพิ่มบัญชี ประเทศไทยสมัครใจลดการปล่อยก๊าซเรือนกระจก?
                    </Typography>
                </div>

                <div className='flex flex-wrap gap-4  mb-4'>
                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            หมายเลขบัญชี
                        </Typography>
                        <TextValidate />
                    </div>

                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            ชื่อบัญชี
                        </Typography>
                        <TextValidate />
                    </div>

                    <div className='basis-full'>
                        <Typography className='text-sm mb-1 font-bold' >
                            Token
                        </Typography>
                        <TextValidate />
                    </div>
                </div>

                <div className='flex flex-row gap-2'>
                    <Button color='white' fullWidth={true} onClick={onClose}>ยกเลิก</Button>
                    <Button fullWidth={true} onClick={onClose}>เพิ่มสมาชิก</Button>
                </div>
            </div>
        </Modal>
    )
}
