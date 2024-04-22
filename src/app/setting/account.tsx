import SelectValidate from '@/components/selectValidate'
import TextValidate from '@/components/textValidate'
import { TOptionSelect } from '@/types/options'
import { Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

const VALUE_OPTIONS = [
    {
        value: "test1111",
        label: "test1111",
    },
    {
        value: "test11112222",
        label: "test11112222",
    },
    {
        value: "test111133333",
        label: "test111133333",
    },
];

export default function AccountSetting() {
    const [selectInput, setSelectInput] = useState<string | undefined>("Select")
    const [options, setOptions] = useState<TOptionSelect[]>([])
    useEffect(() => {

        setOptions([
            { value: "Select", label: "Select" },
            ...VALUE_OPTIONS
        ])

    }, [])
    return (
        <div className='my-4'>
            <Typography className=' w-fit text-base mb-1 font-bold'>
                บัญชี
            </Typography>
            <Typography className=' w-fit text-sm ' >
                ที่นี่คุณสามารถตั้งค่าและจัดการการตั้งค่าการรวมระบบของคุณได้
            </Typography>
            <hr className="my-2 border-blue-gray-50" />

            <div className='flex flex-wrap gap-4 mt-4'>
                <div className='basis-full md:flex-1'>
                    <Typography className='text-sm mb-1 font-bold' >
                        หมายเลขบัญชี
                    </Typography>
                    <TextValidate />
                </div>
                <div className='basis-full md:flex-1'>
                    <Typography className='text-sm mb-1 font-bold' >
                        เจ้าของบัญชี
                    </Typography>

                    {options.length > 0 && <SelectValidate
                        value={selectInput}
                        options={options}
                        callBack={() => { }}
                    // errorMessage={}
                    />}
                </div>
            </div>

            <div className='flex flex-wrap gap-4 mt-4'>
                <div className='basis-full'>
                    <Typography className='text-sm mb-1 font-bold' >
                        ชื่อบัญชี
                    </Typography>
                    <TextValidate />
                </div>
            </div>

            <div className='flex flex-wrap gap-4 mt-4'>
                <div className='basis-full md:flex-1'>
                    <Typography className='text-sm mb-1 font-bold' >
                        อีเมล
                    </Typography>
                    <TextValidate />
                </div>
                <div className='basis-full md:flex-1'>
                    <Typography className='text-sm mb-1 font-bold' >
                        หมายเลขเบอร์โทรศัพท์
                    </Typography>
                    <TextValidate />
                </div>
            </div>

        </div>
    )
}
