
import TextValidate from '@/components/textValidate'
import { Button, Switch, Typography } from '@material-tailwind/react'
import React, { useState } from 'react'
import PinModal from '@/app/setting/pinModal'
import ChangePasswordModal from '@/app/setting/changePasswordModal'

export default function SecuritySetting() {
    const [openPinModal, setOpenPinModal] = useState(false)
    const [openChangePassModal, setOpenChangePassModal] = useState(false)

    return (
        <div className='my-4'>
            <div className='flex flex-row justify-between'>

                <div className='flex-col'>
                    <Typography className=' w-fit text-base mb-1 font-bold'>
                        ความปลอดภัย
                    </Typography>
                    <Typography className=' w-fit text-sm ' >
                        จัดการรหัสผ่านและ PIN ของคุณเพื่อให้ปลอดภัย!
                    </Typography>
                </div>

                <div className='flex-col'>
                    <Button
                        size="sm"
                        className='flex flex-row content-center '
                    >
                        <Typography color='white' className=' w-fit text-sm ml-1' >
                            บันทึก
                        </Typography>
                    </Button>
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50 mb-4" />

            <div className='flex flex-wrap'>

                <div className='flex-col basis-full md:flex-1'>
                    <Typography className=' w-fit text-sm mb-1 font-bold'>
                        รหัสผ่าน
                    </Typography>
                    <Typography className=' w-fit text-sm sm:mb-2' >
                        Where should invoices be sent?
                    </Typography>
                </div>

                <div className='flex-col basis-full md:flex-1 '>
                    <div className='w-2/3'>
                        <TextValidate />
                    </div>
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50" />

            <div className='flex flex-wrap'>

                <div className='flex-col basis-full md:flex-1'>
                    <Typography className=' w-fit text-sm mb-1 font-bold'>
                        PIN
                    </Typography>
                    <Typography className=' w-fit text-sm sm:mb-2' >
                        Where should invoices be sent?
                    </Typography>
                </div>

                <div className='flex-col basis-full md:flex-1 '>
                    <div className='w-2/3'>
                        <TextValidate />
                    </div>
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50" />

            <div className='flex flex-wrap'>

                <div className='flex-col basis-full md:flex-1'>
                    <Typography className=' w-fit text-sm mb-1 font-bold'>
                        Two-facter Verification
                    </Typography>
                    <Typography className=' w-fit text-sm mb-2' >
                        Update your profile information below.
                    </Typography>
                </div>

                <div className='flex-col basis-full md:flex-1 '>
                    <Switch
                        label={<div>
                            <Typography className="w-fit text-sm mb-1 font-bold">
                                Open Two-facter Verification
                            </Typography>
                            <Typography className=" w-fit text-sm ">
                                You’ll be able to login without password for 24 hours.
                            </Typography>
                        </div>}
                        ripple={false}
                        className="h-full w-full checked:bg-[green]"
                        containerProps={{
                            className: "w-11 h-6",
                        }}
                        circleProps={{
                            className: "before:hidden left-0.5 border-none",
                        }}
                        onPointerEnterCapture={undefined}
                        onPointerLeaveCapture={undefined}
                        crossOrigin={undefined}
                    />
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50" />

            <PinModal
                open={openPinModal}
                onClose={() => setOpenPinModal(false)}
                onConfirm={() => { }}
            />
            <ChangePasswordModal
                open={openChangePassModal}
                onClose={() => setOpenChangePassModal(false)}
                onConfirm={() => { }}
            />

        </div>
    )
}
