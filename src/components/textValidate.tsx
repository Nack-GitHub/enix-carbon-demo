import { Input, Typography } from '@material-tailwind/react'
import React from 'react'
import { EnvelopeIcon } from '@heroicons/react/16/solid'

type TProps = {
    type?: string,
    label?: string,
    className?: string,
    errorMessage?: string,
    placeholder?: string,
    icon?: string,
    objRegister?: object
}

export default function TextValidate({
    type,
    label,
    className,
    errorMessage,
    icon,
    placeholder,
    objRegister
}: TProps) {

    let _icon: any = null;
    switch (icon) {
        case "email":
            _icon = <EnvelopeIcon width={20} className='fill-blue-gray-300' />
            break;
        default:
            _icon = null
            break;
    }

    return (
        <div>
            <Input
                type={type ? type : "text"}
                label={label && label}
                labelProps={{
                    className: "before:content-none",
                }}
                className={
                    'placeholder:text-gray-500 placeholder:opacity-100'
                    + `${className}`
                }
                error={errorMessage ? true : false}
                placeholder={placeholder}
                {...objRegister}
                icon={_icon}
            />
            {errorMessage && (
                <Typography variant="small" color='red' >
                    {errorMessage}
                </Typography>
            )}
        </div>
    )
}