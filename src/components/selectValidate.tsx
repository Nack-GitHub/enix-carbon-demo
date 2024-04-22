import { TOptionSelect } from '@/types/options'
import { Option, Select, Typography } from '@material-tailwind/react'
import React from 'react'

type TProps = {
    value: string | undefined,
    errorMessage?: string,
    className?: string,
    options: TOptionSelect[],
    callBack: (val?: any) => void
}

export default function SelectValidate({
    value,
    errorMessage,
    className,
    options,
    callBack
}: TProps) {
    return <>
        <Select
            value={value}
            label={undefined}
            onChange={(val) => callBack(val)}
            className={
                'placeholder:text-gray-500 placeholder:opacity-100'
                + `${className}`
            }
            labelProps={{ className: "before:content-none" }}
            error={errorMessage ? true : false}
        >
            {options.map(({ value, label }) => (
                value === "Select" ?
                    <Option key={label} value={value} disabled>
                        {label}
                    </Option> :
                    <Option key={label} value={value}>
                        {label}
                    </Option>
            ))}
        </Select>
        {errorMessage && (
            <Typography variant="small" color='red' >
                {errorMessage}
            </Typography>
        )}
    </>
}
