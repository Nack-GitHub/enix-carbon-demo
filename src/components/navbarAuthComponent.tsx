'use client'
import { Button, Card, Collapse, IconButton, MenuItem, Navbar, Typography } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import Logo from '@/assets/logo.svg'
import { signIn } from 'next-auth/react'

type Props = {
  onClickLogin: () => void,
  onClickRegister: () => void,
}

function AuthLayoutNavbar({ onClickLogin, onClickRegister }: Props) {

  const [openNav, setOpenNav] = useState(false)

  const _submit = async () => {
    console.log("_submit >>")

    let email_input = 'user@example.com'
    let password_input = 'P@ssw0rd1234'

    console.log('submitttt 1', email_input)
    console.log('submitttt 2', password_input)

    const result = await signIn('credentials', {
      email: email_input,
      password: password_input,
      redirect: true,
      // callbackUrl: "http://localhost:3000/market"
    })
  }

  return (
    <Navbar className="sticky top-0 z-20 min-h-16 w-full" fullWidth={true}>
      <div className="flex items-center h-full justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer font-medium"
        >
          <Logo />
        </Typography>
        <div className="flex items-center">
          <div className="hidden items-center gap-x-1 lg:flex">
            <Button onClick={() => onClickLogin()} variant='text' color='black'>
              เข้าสู่ระบบ
            </Button>
            <Button onClick={() => onClickRegister()}>
              ลงทะเบียน
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <Button onClick={() => onClickLogin()} variant='text' color='black' className='text-start'>
            เข้าสู่ระบบ
          </Button>
          <Button className='text-start' onClick={() => onClickRegister()}>
            ลงทะเบียน
          </Button>
        </ul>
      </Collapse>
    </Navbar >
  )
}

export default AuthLayoutNavbar