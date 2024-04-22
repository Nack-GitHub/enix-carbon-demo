import { Button, Checkbox, Typography } from '@material-tailwind/react'
import React from 'react'

export default function NotificationsSetting() {
    return (
        <div className='my-4'>
            <div className='flex flex-row justify-between'>
                <div className='flex-col'>
                    <Typography className=' w-fit text-base mb-1 font-bold'>
                        การแจ้งเตือนทางอีเมล
                    </Typography>
                    <Typography className=' w-fit text-sm ' >
                        รับอีเมลเพื่อดูว่าเกิดอะไรขึ้นเมื่อคุณไม่ได้ออนไลน์ คุณสามารถปิดได้ตลอดเวลา
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
                        การแจ้งเตือนจากเรา
                    </Typography>
                    <Typography className=' w-fit text-sm mb-2' >
                        รับข่าวสารล่าสุด ข้อมูลอัปเดต และบทแนะนำเกี่ยวกับอุตสาหกรรมจากเรา
                    </Typography>
                </div>

                <div className='flex-col basis-full md:flex-1 '>
                    <div className='flex flex-row'>
                        <Checkbox defaultChecked />
                        <div>
                            <Typography className="w-fit text-sm mb-1 font-bold">
                                ข่าวสารและการอัพเดท
                            </Typography>
                            <Typography className=" w-fit text-sm ">
                                ข่าวสารเกี่ยวกับผลิตภัณฑ์และประโยชน์ของ
                            </Typography>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="my-2 border-blue-gray-50" />

        </div >
    )
}
