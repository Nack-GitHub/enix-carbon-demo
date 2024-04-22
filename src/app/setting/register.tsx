import { Button, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import RegisterModal from '@/app/setting/registerModal'
import { PlusIcon } from '@heroicons/react/20/solid'
export default function RegisterSetting() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div className='my-4'>
            <div className='flex flex-row justify-between'>

                <div className='flex-col'>
                    <Typography className=' w-fit text-base mb-1 font-bold'>
                        สมัครสมาชิก
                    </Typography>
                    <Typography className=' w-fit text-sm ' >
                        คุณไม่มีสมาชิกลงทะเบียน!
                    </Typography>
                </div>

                <div className='flex-col'>
                    <Button
                        size="sm"
                        className='flex flex-row content-center '
                        onClick={() => setOpenModal(true)}
                    >
                        <PlusIcon width={20} />
                        <Typography color='white' className=' w-fit text-sm ml-1' >
                            เพิ่มบัญชี
                        </Typography>
                    </Button>
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50" />

            <RegisterModal
                open={openModal}
                onClose={() => setOpenModal(false)}
                onConfirm={() => { }}
            />

        </div>
    )
}
