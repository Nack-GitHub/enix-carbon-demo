"use client"
import Image from "next/image"
import Loading from "./loading"
import { Suspense, useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { signIn, useSession } from "next-auth/react"
import WhiteLogo from '@/assets/whiteLogo.png'
import { Button, Typography } from '@material-tailwind/react'
import AuthLayoutNavbar from "../components/navbarAuthComponent"
import Background from '@/assets/background.jpeg'
import { ROUTE_PATH } from "@/constants/RoutePath"
import LoginModal from "@/components/loginModal"
import VerificationModal from "@/components/verificationModal"


export default function Home() {
  const router = useRouter()
  const { data: session, status } = useSession()

  const [openLogin, setOpenLogin] = useState(false)
  const [openVerification, setOpenVerification] = useState(false)

  useEffect(() => {

    // console.log("status of home >>>", status)
    // console.log("session of home", session)

    if (status === "authenticated") {
      router.push(ROUTE_PATH.MARKET)
    }

  }, [])

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
    <Suspense fallback={<Loading />}>
      {status === "loading" ? <Loading /> :
        <>
          <AuthLayoutNavbar onClickLogin={() => setOpenLogin(true)} onClickRegister={() => router.push(ROUTE_PATH.REGISTER)} />
          <Image src={Background} alt='Background' className='top-0 h-full w-full absolute z-0 object-cover bg-fixed bg-repeat' />
          <div className='h-full w-full absolute z-10 top-0 pt-16 overflow-scroll no-scrollbar'>
            <div className='h-full w-full' >
              <div className='h-full w-full flex justify-center items-center'>
                <div className='flex flex-col items-center max-w-[90%] lg:max-w-[50%]'>
                  <Image src={WhiteLogo} alt='WhiteLogo' />
                  <Typography variant='h1' color='white' className='text-center mt-2' >
                    ลดคาร์บอน เพิ่มเครดิต  ผลลัพธ์คือโลกที่ยั่งยืน
                  </Typography>
                  <Typography variant='lead' color='white' className='text-center my-2'>
                    EN-IX Exchange อำนวยความสะดวกในการซื้อขายสัญญามาตรฐานและคำสั่งซื้อของบริษัทสำหรับเครดิตโครงการแบบสองทาง
                  </Typography>
                  <div className='flex gap-2 w-full flex-col md:flex-row'>
                    <Button fullWidth={true} onClick={() => router.push(ROUTE_PATH.REGISTER)}>
                      ลงทะเบียน
                    </Button>
                    <Button color='white' fullWidth={true} onClick={() => setOpenLogin(true)}>
                      เข้าสู่ระบบ
                    </Button>
                  </div>
                </div>
                <LoginModal open={openLogin} onClose={() => setOpenLogin(false)}
                  onConfirm={() => {
                    _submit()
                    setOpenVerification(true)
                  }} />
                <VerificationModal open={openVerification} onClose={() => setOpenVerification(false)} />
              </div>
            </div>
          </div>
        </>
      }
    </Suspense >
  )
}
