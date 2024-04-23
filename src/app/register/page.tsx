'use client'
import React, { useEffect, useState } from 'react'
import { BookmarkIcon, BuildingLibraryIcon, CheckBadgeIcon, ChevronLeftIcon, EyeIcon, EyeSlashIcon, UserIcon } from "@heroicons/react/16/solid"
import Logo from '@/assets/logo.svg'
import { Button, Checkbox, Input, Option, Radio, Select, Step, Stepper, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import AuthLayoutNavbar from '@/components/navbarAuthComponent'
import Image from 'next/image'
import Background from '@/assets/background.jpeg'
import { ROUTE_PATH } from '@/constants/RoutePath'
import LoginModal from '@/components/loginModal'
import VerificationModal from '@/components/verificationModal'
import { useSession } from 'next-auth/react'
import ContinueRegistationModal from './continueRegistationModal'
import RegisterVerificationModal from './registerVerificationModal'
import PinModal from './pinModal'

type Props = {}

function RegisterPage({ }: Props) {
  const router = useRouter()
  const [activeStep, setActiveStep] = useState(0)

  const { data: session, status } = useSession()

  const [openLogin, setOpenLogin] = useState(false)
  const [openVerification, setOpenVerification] = useState(false)

  const [agree, setAgree] = useState(false)
  const [showPassword, setShowPassword] = useState(0)

  const [openContinue, setOpenContinue] = useState(false)
  const [openEmailVerification, setOpenEmailVerification] = useState('')
  const [openPinModal, setOpenPinModal] = useState(false)

  const [branch, setBranch] = useState(0)
  const [register, setRegister] = useState(0)
  const [addressContact, setAddressContact] = useState(0)

  useEffect(() => {
    if (status === "authenticated") {
      router.push(ROUTE_PATH.MARKET)
    }
  }, [])

  return (
    <>
      <AuthLayoutNavbar onClickLogin={() => setOpenLogin(true)} onClickRegister={() => router.push(ROUTE_PATH.REGISTER)} />
      <Image src={Background} alt='Background' className='top-0 h-full w-full fixed z-0 object-cover bg-fixed bg-repeat' />
      <div className='h-[100%] w-full absolute z-10 top-0 mt-16 overflow-scroll no-scrollbar'>
        <div className="relative min-h-full h-auto w-full flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-white p-2 md:p-10 lg:p-20 flex flex-col items-center gap-2">
            <Button
              variant="text"
              color="black"
              className="flex items-center gap-3 self-start"
              onClick={() => {
                if (activeStep > 0) {
                  setActiveStep(activeStep - 1)
                } else {
                  setOpenContinue(true)
                }
              }}>
              <ChevronLeftIcon className="fill-black border-black border-2 rounded-full" width={21} height={21} /> กลับ
            </Button>
            <Stepper
              activeStep={activeStep}
              activeLineClassName="bg-green-500"
              className="w-[80%] md:w-full">
              <Step completedClassName="bg-green-500" activeClassName="bg-green-500" placeholder={''} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <BookmarkIcon className="h-5 w-5" />
                <div className="absolute -bottom-[3rem] w-max text-center">
                  <Typography
                    variant="small"
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                    className="font-semibold">
                    ขั้นตอนที่ 1
                  </Typography>
                  <Typography
                    variant="small"
                    color={activeStep === 0 ? "blue-gray" : "gray"}
                    className="font-normal text-[.6rem]">
                    กฎและระเบียบข้อบังคับ
                  </Typography>
                </div>
              </Step>
              <Step completedClassName="bg-green-500" activeClassName="bg-green-500" placeholder={''} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                <UserIcon className="h-5 w-5" />
                <div className="absolute -bottom-[3rem] w-max text-center">
                  <Typography
                    variant="small"
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                    className="font-semibold">
                    ขั้นตอนที่ 2
                  </Typography>
                  <Typography
                    variant="small"
                    color={activeStep === 1 ? "blue-gray" : "gray"}
                    className="font-normal text-[.6rem]">
                    ยืนยันข้อมูล
                  </Typography>
                </div>
              </Step>
              <Step completedClassName="bg-green-500" activeClassName="bg-green-500" placeholder={''} onPointerEnterCapture={() => console.log('enter')} onPointerLeaveCapture={undefined}>
                <CheckBadgeIcon className="h-5 w-5" />
                <div className="absolute -bottom-[3rem] w-max text-center">
                  <Typography
                    variant="small"
                    color={activeStep === 2 ? "blue-gray" : "gray"}
                    className="font-semibold">
                    ขั้นตอนที่ 3
                  </Typography>
                  <Typography
                    variant="small"
                    color={activeStep === 2 ? "blue-gray" : "gray"}
                    className="font-normal text-[.6rem]">
                    เลือก Broker
                  </Typography>
                </div>
              </Step>
              <Step completedClassName="bg-green-500" activeClassName="bg-green-500" placeholder={''} onPointerEnterCapture={() => console.log('enter')} onPointerLeaveCapture={undefined}>
                <BuildingLibraryIcon className="h-5 w-5" />
                <div className="absolute -bottom-[3rem] w-max text-center">
                  <Typography
                    variant="small"
                    color={activeStep === 3 ? "blue-gray" : "gray"}
                    className="font-semibold">
                    ขั้นตอนที่ 4
                  </Typography>
                  <Typography
                    variant="small"
                    color={activeStep === 3 ? "blue-gray" : "gray"}
                    className="font-normal text-[.6rem]">
                    ยืนยันตัวตน KYC
                  </Typography>
                </div>
              </Step>
            </Stepper>
            {
              activeStep === 0
                ? <div className="mt-12 w-full h-auto flex flex-col gap-4">
                  <div className="flex flex-row items-center w-full">
                    <Logo />
                    <hr className="w-full" />
                  </div>
                  <Typography variant="h4" color="black">
                    Agreement Acknowledgement
                  </Typography>
                  <Typography variant="h4" color="black">
                    กฎและระเบียบข้อบังคับ (ข้อกำหนดและเงื่อนไข) สำหรับ EN-IX
                  </Typography>
                  <Typography variant="small">
                    วัตถุประสงค์ของกฎและระเบียบข้อบังคับการซื้อขายแลกเปลี่ยนพลังงานสะอาดและคาร์บอนเครดิต (“กฎ”) ต่อไปนี้ มีเพื่ออำนวยความสะดวกในการซื้อขายคาร์บอนเครดิตระหว่างสมาชิก โดยการส่งเสริมระบบที่เป็นแนวปฏิบัติที่ดีทางธุรกิจและความเข้าใจในกฎของการซื้อขายแลกเปลี่ยนพลังงานสะอาดและคาร์บอนเครดิตของแพลตฟอร์มการซื้อขายพลังงานสะอาดและคาร์บอนเครดิตโดยสภาอุตสาหกรรมแห่งประเทศไทย (EN-IX) และกิจกรรมทั้งหมดที่เกี่ยวข้องกับการซื้อขายผ่านแพลตฟอร์มทั้งนี้กฎ
                  </Typography>
                  <div className="flex flex-row gap-2 items-center">
                    <Checkbox
                      defaultChecked={agree}
                      onClick={() => setAgree(!agree)}
                      color="green"
                      label={<>
                        <Typography>
                          ฉันเห็นด้วยกับ
                        </Typography>
                      </>} />
                    <Typography color="black" className="cursor-pointer">
                      ข้อกำหนดและเงื่อนไข
                    </Typography>
                  </div>
                  <Button onClick={() => { if (agree) setActiveStep(1) }}>
                    ไปต่อ
                  </Button>
                </div>
                : activeStep === 1
                  ? <div className="mt-16 w-full h-auto flex flex-col gap-4">
                    <Typography variant='h4' color='black' className='text-center'>Profile</Typography>
                    <div className='flex flex-col gap-2'>
                      <Typography variant='small' className='text-blue-gray-900'>เจ้าของบัญชี</Typography>
                      <Select label="Company">
                        <Option>Company</Option>
                        <Option>Company</Option>
                      </Select>
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Typography variant='small' className='text-blue-gray-900'>อีเมลของคุณ</Typography>
                      <Input
                        className="!border-t-blue-gray-200 focus:!border-t-green-500"
                        labelProps={{
                          className: "hidden",
                        }} />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Typography variant='small' className='text-blue-gray-900'>รหัสผ่าน</Typography>
                      <Input
                        className="!border-t-blue-gray-200 focus:!border-t-green-500"
                        type={showPassword === 1 ? 'text' : 'password'}
                        labelProps={{
                          className: "hidden",
                        }}
                        icon={showPassword === 1 ? <EyeSlashIcon className='cursor-pointer' onClick={() => setShowPassword(0)} /> : <EyeIcon className='cursor-pointer' onClick={() => setShowPassword(1)} />}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Typography variant='small' className='text-blue-gray-900'>ยืนยันรหัสผ่านอีกครั้ง</Typography>
                      <Input
                        className="!border-t-blue-gray-200 focus:!border-t-green-500"
                        type={showPassword === 2 ? 'text' : 'password'}
                        labelProps={{
                          className: "hidden",
                        }}
                        icon={showPassword === 2 ? <EyeSlashIcon className='cursor-pointer' onClick={() => setShowPassword(0)} /> : <EyeIcon className='cursor-pointer' onClick={() => setShowPassword(2)} />}
                      />
                    </div>
                    <div className='flex flex-col gap-2'>
                      <Input
                        className="!border-t-blue-gray-200 focus:!border-t-green-500"
                        type='text'
                        labelProps={{
                          className: "hidden",
                        }}
                      />
                    </div>
                    <Button onClick={() => setOpenEmailVerification('email')}>
                      ยืนยันเพื่อไปต่อ
                    </Button>
                  </div>
                  : activeStep === 2
                    ? <div className="mt-16 w-full h-auto flex flex-col gap-4">
                      <Typography variant='h4' color='black' className=''>เลือก Broker</Typography>
                      <div className='h-[100px] w-full bg-blue-gray-50'>
                      </div>
                      <Button onClick={() => setActiveStep(3)}>
                        เลือกเพื่อไปต่อ
                      </Button>
                    </div>
                    : activeStep === 3
                      ? <div className="mt-16 w-full h-auto flex flex-col gap-4">
                        <div className="flex flex-row items-center w-full">
                          <Logo />
                          <hr className="w-full" />
                        </div>
                        <div>
                          <Typography variant='h4' color='black' className='text-center'>KYC</Typography>
                          <Typography variant='small' color='black' className='text-center'>ข้อมูลนิติบุคคล</Typography>
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ชื่อนิติบุคคล (ไทย)<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ชื่อนิติบุคคล (อังกฤษ)<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>สำนักงาน<span className='text-red-500'>*</span></Typography>
                          <Radio className='' label="สำนักงานใหญ่" checked={branch === 1} onChange={() => setBranch(1)} />
                          <Radio className='' label="สาขา" checked={branch === 2} onChange={() => setBranch(2)} />
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            placeholder='สาขาที่'
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>จดทะเบียน<span className='text-red-500'>*</span></Typography>
                          <Radio className='' label="ไทย" checked={register === 1} onChange={() => setRegister(1)} />
                          <Radio className='' label="อื่น ๆ" checked={register === 2} onChange={() => setRegister(2)} />
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            placeholder='อื่น ๆ'
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>

                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>เลขทะเบียนนิติบุคคล / เลขประจำตัวผู้เสียภาษีอากร<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>วันที่จดทะเบียน<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            type='date'
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ประเภทของนิติบุคคล<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ลักษณะของธุรกิจ<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ที่อยู่สำนักงานตามหนังสือรับรอง<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>รหัสไปรษณีย์ (ตามหนังสือรับรอง)<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ชื่อ - นามสกุล ผู้รับมอบอำนาจ<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>โทรศัพท์<span className='text-red-500'>*</span></Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>โทรสาร</Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col gap-2'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ที่อยู่อีเมล</Typography>
                          <Input
                            className="!border-t-blue-gray-200 focus:!border-t-green-500"
                            labelProps={{
                              className: "hidden",
                            }} />
                        </div>
                        <div className='flex flex-col'>
                          <Typography variant='small' className='text-blue-gray-900 font-semibold'>ที่อยู่ที่ติดต่อได้</Typography>
                          <Radio className='' label="เหมือน ที่อยู่ตามหนังสือรับรอง" checked={addressContact === 1} onChange={() => setAddressContact(1)} />
                          <Radio className='' label="ไม่เหมือน ที่อยู่ตามหนังสือรับรอง" checked={addressContact === 2} onChange={() => setAddressContact(2)} />
                        </div>
                        <Button onClick={() => router.replace('/')}>
                          ยืนยัน
                        </Button>
                      </div>
                      : <></>
            }
          </div>
          <div className="lg:fixed right-0 w-full h-screen lg:w-1/2 flex flex-col justify-center p-4 md:p-10 lg:p-20">
            <Typography variant="h1" color="white">ลดคาร์บอน เพิ่มเครดิต</Typography>
            <Typography variant="h1" color="white">ผลลัพธ์คือโลกที่ยั่งยืน</Typography>
            <Typography variant="lead" className="mt-2" color="white">EN-IX Exchange</Typography>
            <Typography variant="lead" color="white">อำนวยความสะดวกในการซื้อขายสัญญามาตรฐานและคำสั่งซื้อของบริษัทสำหรับเครดิตโครงการแบบสองทาง</Typography>
          </div>
        </div>
      </div>
      <LoginModal open={openLogin} onClose={() => setOpenLogin(false)} onConfirm={() => setOpenVerification(true)} />
      <VerificationModal open={openVerification} onClose={() => setOpenVerification(false)} />
      <ContinueRegistationModal open={openContinue} onClose={() => setOpenContinue(false)} />
      <RegisterVerificationModal
        open={openEmailVerification}
        onClose={() => setOpenEmailVerification('')}
        onConfrim={(value) => {
          if (value) {
            setOpenEmailVerification(value)
          } else {
            setOpenEmailVerification('')
            setOpenPinModal(true)
          }
        }} />
      <PinModal open={openPinModal} onClose={() => setOpenPinModal(false)} onConfirm={() => setActiveStep(2)} />
    </>
  )
}

export default RegisterPage