'use client'
import { TValidationLogin, validationLoginSchema } from '@/types/validationLoginSchema'
import { Input, Button, Option, Typography, MenuItem, Select } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import TextValidate from '@/components/textValidate'
import { TOptionSelect } from '@/types/options'
import SelectValidate from '@/components/selectValidate'

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

export default function FormTestPage() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm<TValidationLogin>({
        resolver: zodResolver(validationLoginSchema),
    })
    const [selectInput, setSelectInput] = useState<string | undefined>("Select")
    const [options, setOptions] = useState<TOptionSelect[]>([])

    useEffect(() => {

        setOptions([
            { value: "Select", label: "Select" },
            ...VALUE_OPTIONS
        ])

    }, [])

    const _onChangeSelect = (value: string) => {
        setSelectInput(value)
        setValue("confirmPassword", value)
    }

    const _onSubmit = async (data: any) => {
        console.log("SUCCESS >>>>", data);
    }

    return (
        <form onSubmit={handleSubmit(_onSubmit)} >
            <div className='h-10'></div>
            <TextValidate
                type='text'
                placeholder='Email Address'
                errorMessage={errors.email?.message}
                objRegister={{ ...register("email") }}
                icon='email'
            />

            <div className='h-10'></div>
            <TextValidate
                type='password'
                placeholder='Password'
                errorMessage={errors.password?.message}
                objRegister={{ ...register("password") }}
            />

            {options.length > 0 && <SelectValidate
                value={selectInput}
                options={options}
                callBack={_onChangeSelect}
                errorMessage={errors.confirmPassword?.message}
            />}

            <Button variant="gradient" type="submit"
                className="submit-button"
            >submit</Button>
        </form>

    )
}
