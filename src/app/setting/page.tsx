'use client'
import { Typography } from '@material-tailwind/react'
import React, { Suspense } from 'react'
import { HomeIcon } from '@heroicons/react/20/solid'
import TabBar from '@/components/tabBar'
import AccountSetting from '@/app/setting/account'
import RegisterSetting from '@/app/setting/register'
import SecuritySetting from '@/app/setting/security'
import NotificationsSetting from '@/app/setting/notifications'
import Loading from '@/app/loading'

export default function SettingPage() {


    const tabData = [
        {
            label: "บัญชี",
            value: 1,
            desc: <AccountSetting />,
            icon: "account"
        },
        {
            label: "สมัครสมาชิก",
            value: 2,
            desc: <RegisterSetting />,
            icon: "register"
        },
        {
            label: "ความปลอดภัย",
            value: 3,
            desc: <SecuritySetting />,
            icon: "security"
        },
        {
            label: "การแจ้งเตือน",
            value: 4,
            desc: <NotificationsSetting />,
            icon: "notification"
        }
    ]

    return (
        <Suspense fallback={<Loading />}>
            <div className='p-1 lg:p-4 flex flex-col gap-4'>
                <div className='flex gap-2'>
                    <Typography variant='paragraph' className='flex'>
                        <HomeIcon width={20} className='fill-blue-gray-300 ' />
                        <span className='text-blue-gray-300'>
                            Home /
                        </span>
                    </Typography>
                    <Typography variant='paragraph'>
                        Setting
                    </Typography>
                </div>
                <Typography variant='h4'>
                    ตั้งค่า
                </Typography>

                <TabBar className='' data={tabData} />
            </div>
        </Suspense>
    )
}
