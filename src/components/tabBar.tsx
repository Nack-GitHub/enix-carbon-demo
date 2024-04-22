import { UserCircleIcon, SparklesIcon, ShieldExclamationIcon, BellIcon } from '@heroicons/react/16/solid'
import { Tab, TabPanel, Tabs, TabsBody, TabsHeader } from '@material-tailwind/react'
import React, { ReactNode } from 'react'

type Props = {
  data: {
    label: string,
    value: string | number,
    desc: ReactNode,
    icon?: string | "account" | "register" | "security" | "notification"
  }[],
  className?: string,
  onSelected?: (value: string | number) => void,
  tabsHeaderClassName?: string,
  indicatorProps?: object
}

const TabBar = ({ data = [], className = '', onSelected = () => { }, tabsHeaderClassName = '', indicatorProps = {} }: Props) => {
  return (
    <Tabs value={data.at(0)?.value}>
      <TabsHeader className={`bg-gray-50 ${tabsHeaderClassName}`} indicatorProps={indicatorProps}>
        {data.map(({ label, value, icon }) => {

          let _icon: any = null;
          switch (icon) {
            case "account":
              _icon = <UserCircleIcon width={20} className='fill-blue-gray-300' />
              break;
            case "register":
              _icon = <SparklesIcon width={20} className='fill-blue-gray-300' />
              break;
            case "security":
              _icon = <ShieldExclamationIcon width={20} className='fill-blue-gray-300' />
              break;
            case "notification":
              _icon = <BellIcon width={20} className='fill-blue-gray-300' />
              break;
            default:
              _icon = null
              break;
          }
          return <Tab
            key={value}
            value={value}
            className={`w-[200px] ${className}`}
            activeClassName='text-green-500'
            onClick={() => onSelected(value)}>
            <div className=' flex flex-row gap-2'>
              {_icon}
              {label}
            </div>
          </Tab>
        })}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value} className='p-0'>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  )
}

export default TabBar