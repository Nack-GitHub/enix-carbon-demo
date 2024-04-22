import { Input } from '@material-tailwind/react'
import React from 'react'
import OTPInput from 'react-otp-input'

type Props = {
  value: string,
  onChange: (otp: string) => void
}

function OtpInputView({ value, onChange }: Props) {

  return (
    <div className="flex flex-col space-y-16 w-full">
      <div className="flex flex-row items-center justify-between w-full gap-2">
        <OTPInput
          value={value}
          onChange={(otp: string) => onChange(otp)}
          numInputs={6}
          containerStyle={'w-full gap-2 justify-between'}
          inputStyle={'!w-[13%] aspect-[1/1.2] border-2 rounded-md border-blue-gray-200 focus:!border-green-500 text-[20px] md:text-[25px]'}
          renderInput={(props) => <input {...props} />}
        />
        {/* <Input maxLength={1} className='text-xl text-center border-t-blue-gray-200 focus:border-t-green-500' labelProps={{ className: 'hidden' }} containerProps={{ className: 'aspect-[1/1.2] h-auto w-[14%] min-w-[14%]' }} />
        <Input maxLength={1} className='text-xl text-center border-t-blue-gray-200 focus:border-t-green-500' labelProps={{ className: 'hidden' }} containerProps={{ className: 'aspect-[1/1.2] h-auto w-[14%] min-w-[14%]' }} />
        <Input maxLength={1} className='text-xl text-center border-t-blue-gray-200 focus:border-t-green-500' labelProps={{ className: 'hidden' }} containerProps={{ className: 'aspect-[1/1.2] h-auto w-[14%] min-w-[14%]' }} />
        <Input maxLength={1} className='text-xl text-center border-t-blue-gray-200 focus:border-t-green-500' labelProps={{ className: 'hidden' }} containerProps={{ className: 'aspect-[1/1.2] h-auto w-[14%] min-w-[14%]' }} />
        <Input maxLength={1} className='text-xl text-center border-t-blue-gray-200 focus:border-t-green-500' labelProps={{ className: 'hidden' }} containerProps={{ className: 'aspect-[1/1.2] h-auto w-[14%] min-w-[14%]' }} /> */}
      </div>
    </div>
  )
}

export default OtpInputView