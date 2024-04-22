'use client'
import { Bars3Icon, ChevronDownIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { Card, Collapse, IconButton, Menu, MenuHandler, MenuItem, MenuList, Navbar, Typography } from '@material-tailwind/react'
import React, { Suspense, useEffect, useState } from 'react'
import Logo from '@/assets/logo.svg'
import { BellIcon } from '@heroicons/react/24/solid'
import { useSession, signOut } from 'next-auth/react'
import Loading from '@/app/loading'
import SidebarComponent from './sidebarComponent'
import { usePathname, useRouter } from 'next/navigation'
import { ROUTE_PATH } from '@/constants/RoutePath'

type Props = {}

function NavBarComponent({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [openNav, setOpenNav] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(0)

  const [openProfile, setOpenProfile] = useState(false)

  const { data: session, status } = useSession()
  useEffect(() => {
    console.log("session of navbar >>", session)
    console.log("session of user >>", session?.user)
    console.log("status >>", status)

    if (!session?.user) {
      console.log("22222 >>", session?.user)
    }

  }, [])



  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography>
        <MenuItem className="flex items-center hover:bg-green-50" onClick={() => router.push(ROUTE_PATH.MARKET)}>
          ตลาดซื้อขาย
        </MenuItem>
      </Typography>
      <Menu
        open={isMenuOpen === 1} handler={() => setIsMenuOpen(prev => prev === 1 ? 0 : 1)}
      >
        <MenuHandler>
          <Typography as="a">
            <MenuItem className="hidden items-center gap-2 lg:flex hover:bg-green-50">
              กระเป๋าเงิน
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${isMenuOpen === 1 ? "rotate-180" : ""}`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden w-8 gap-3 lg:flex">
          <MenuItem className="flex items-center hover:bg-green-50" onClick={() => router.push(ROUTE_PATH.WALLET)}>
            กระเป๋าเงินของฉัน
          </MenuItem>
        </MenuList>
      </Menu>
    </ul>
  )

  return (
    <Suspense fallback={<Loading />}>
      <div className='h-screen w-screen relative overflow-scroll no-scrollbar'>
        {session?.user ?
          <>
            <Navbar className="sticky top-0 z-30 min-h-16 w-full" fullWidth={true}>
              <div className="flex items-center h-full justify-between text-blue-gray-900">
                <Typography
                  as="a"
                  href="#"
                  className="mr-4 cursor-pointer font-medium"
                >
                  <Logo />
                </Typography>
                <div className="flex items-center">
                  <div className="mr-4 hidden lg:block">{navList}</div>
                  <div className="hidden items-center gap-x-1 lg:flex">
                    <IconButton variant='text' className='hover:bg-green-50'>
                      <BellIcon width={20} className='fill-blue-gray-300' />
                    </IconButton>
                    <Menu
                      open={isMenuOpen === 2} handler={() => setIsMenuOpen(prev => prev === 2 ? 0 : 2)}
                    >
                      <MenuHandler>
                        <Typography>
                          <MenuItem className="flex items-center gap-2 hover:bg-green-50">
                            <UserCircleIcon width={20} className='fill-blue-gray-300' />
                            <ChevronDownIcon
                              strokeWidth={2}
                              className={`h-3 w-3 transition-transform ${isMenuOpen === 2 ? "rotate-180" : ""}`}
                            />
                          </MenuItem>
                        </Typography>
                      </MenuHandler>
                      <MenuList className="hidden w-8 gap-3 lg:flex flex-col">
                        <MenuItem className="flex items-center hover:bg-green-50 gap-2" onClick={() => router.push(ROUTE_PATH.SETTING)}>
                          <Typography>
                            ตั้งค่า
                          </Typography>
                        </MenuItem>
                        <MenuItem className="flex items-center gap-2 hover:bg-green-50"
                          onClick={() => {
                            console.log("signOut>>")
                            signOut()
                          }}>
                          <Typography variant='small'>ลงชื่อออก</Typography>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </div>
                  <IconButton
                    variant="text"
                    className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => {
                      setOpenNav(!openNav)
                      setOpenProfile(false)
                    }}
                  >
                    {openNav ? (
                      <XMarkIcon width={24} height={24} />
                    ) : (
                      <Bars3Icon width={24} height={24} />
                    )}
                  </IconButton>
                </div>
              </div>
              <Collapse open={openNav} className='h-auto'>
                <div>
                  <Typography>
                    <MenuItem className="flex items-center hover:bg-green-50"
                      onClick={() => {
                        router.push(ROUTE_PATH.MARKET)
                        setOpenNav(false)
                      }}>
                      ตลาดซื้อขาย
                    </MenuItem>
                  </Typography>
                  <Typography>
                    <MenuItem className="flex items-center hover:bg-green-50"
                      onClick={() => {
                        router.push(ROUTE_PATH.ORDER)
                        setOpenNav(false)
                      }}>
                      คำสั่งซื้อ
                    </MenuItem>
                  </Typography>
                  <Typography>
                    <MenuItem className="flex items-center hover:bg-green-50"
                      onClick={() => {
                        router.push(ROUTE_PATH.INVENTORY)
                        setOpenNav(false)
                      }}>
                      สินค้าคงคลัง
                    </MenuItem>
                  </Typography>
                  <Typography>
                    <MenuItem className="flex items-center hover:bg-green-50"
                      onClick={() => {
                        router.push(ROUTE_PATH.WALLET)
                        setOpenNav(false)
                      }}>
                      กระเป๋าเงิน
                    </MenuItem>
                  </Typography>
                  <Typography>
                    <MenuItem className="flex items-center hover:bg-green-50 gap-2"
                      onClick={() => {
                        router.push(ROUTE_PATH.SETTING)
                        setOpenNav(false)
                      }}>
                      ตั้งค่า
                    </MenuItem>
                  </Typography>
                  <Typography onClick={() => setOpenProfile(!openProfile)}>
                    <MenuItem className="flex items-center hover:bg-green-50 gap-2">
                      <UserCircleIcon width={20} className='fill-blue-gray-300' />
                      โปรไฟล์
                      <ChevronDownIcon
                        strokeWidth={2}
                        className={`h-3 w-3 transition-transform ${openProfile ? "rotate-180" : ""}`}
                      />
                    </MenuItem>
                  </Typography>
                  <Collapse open={openProfile} className='h-auto'>
                    <Typography>
                      <MenuItem className="flex items-center hover:bg-green-50 gap-2" onClick={() => signOut()}>
                        ลงชื่อออก
                      </MenuItem>
                    </Typography>
                  </Collapse>
                </div>
              </Collapse>
            </Navbar>
            <div className='h-full w-full pt-16 flex absolute top-0'>
              {
                pathname === ROUTE_PATH.MARKET_TRADE
                  ? <></>
                  : <SidebarComponent />
              }
              <div className='p-2 h-full w-full overflow-scroll no-scrollbar'>{children}</div>
            </div>
          </>
          :
          <>
            {status === "loading" ?
              <Loading /> :
              <div>{children}</div>
            }
          </>
        }
      </div>
    </Suspense>
  )
}

export default NavBarComponent