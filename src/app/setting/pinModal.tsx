import Modal from '@/components/modal'
import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import { XMarkIcon } from '@heroicons/react/16/solid'
import OtpInputView from '@/components/otpInputView'

type TProps = {
    open: boolean
    onClose: () => void
    onConfirm: () => void
}

export default function PinModal({ open, onClose, onConfirm }: TProps) {
    return (
        <Modal open={open} onClose={onClose}>
            <div className='p-4 flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <Typography variant='h4' color='black'>
                        ยืนยัน PIN
                    </Typography>
                    <XMarkIcon width={24} height={24} className='fill-gray-950 cursor-pointer' onClick={() => onClose()} />
                </div>
                <Typography variant='small'>กรุณากรอก PIN ปัจจุบันของคุณ</Typography>
                {
                    <OtpInputView value={''} onChange={(pin: string) => { }} />
                }
                <div className='flex flex-row gap-2'>
                    <Button color='white' fullWidth={true} onClick={onClose}>ยกเลิก</Button>
                    <Button fullWidth={true} onClick={onClose}>ยืนยัน</Button>
                </div>
            </div>
        </Modal>
    )
}
