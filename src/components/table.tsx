'use client'
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid"
// import { PencilIcon } from "@heroicons/react/24/solid"
// import {
//   ArrowDownTrayIcon,
//   MagnifyingGlassIcon,
// } from "@heroicons/react/24/outline"
import {
  Button, Card, CardHeader, Typography, CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "../themeProvider/materialTailwind"
import { Fragment, ReactNode } from "react"

type Props = {
  columns: ColumnType[],
  rows?: any[],
  loading: boolean,
  errorMessage?: string,
  paging?: boolean,
  height?: number
}

export type ColumnType = {
  field: string,
  headerName: string,
  renderCell?: ({ row }: any) => ReactNode
}

export function TableComponent({ columns = [], rows = [], loading = true, errorMessage = '', paging = true, height = 48, }: Props) {
  return (
    <Fragment>
      <div className="w-full h-full overflow-x-scroll no-scrollbar">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {columns.map((c: ColumnType, index) => {
                return (
                  <th
                    key={index}
                    style={{ height }}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-4 min-w-[100px]">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70">
                      {c.headerName}
                    </Typography>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {
              loading
                ? <tr className="text-center">
                  <td colSpan={20}
                    style={{ height }}
                    className="px-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70">
                      loading...
                    </Typography>
                  </td>
                </tr>
                : errorMessage
                  ? <tr className="text-center">
                    <td colSpan={20}
                      style={{ height: height }}
                      className="px-4 border-b border-blue-gray-50">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70">
                        {errorMessage}
                      </Typography>
                    </td>
                  </tr>
                  : rows.length !== 0
                    ? rows.map((r, i) => {
                      return <tr key={i} className="hover:bg-green-50">
                        {
                          columns.map((cc, j) => {
                            return <td key={j} className="px-4 border-b border-blue-gray-50" style={{ height }}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal leading-none opacity-70">
                                {
                                  cc?.renderCell
                                    ? cc?.renderCell(r)
                                    : r?.[cc?.field]
                                }
                              </Typography>
                            </td>
                          })
                        }
                      </tr>
                    })
                    : <tr className="text-center">
                      <td colSpan={20} className="px-4 border-b border-blue-gray-50" style={{ height }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70">
                          No Row
                        </Typography>
                      </td>
                    </tr>
            }
          </tbody>
        </table>
      </div>
      {
        paging
          ? <div className="flex justify-center mt-4 md:justify-end">
            <div className="flex items-center gap-1">
              <Button
                variant="text"
                className="px-1 flex"
                color="black"
              // onClick={prev}
              // disabled={active === 1}
              >
                <ChevronLeftIcon strokeWidth={2} className="h-4 w-4" /> ก่อนหน้า
              </Button>
              <div className="flex items-center gap-1">
                <IconButton variant="text">1</IconButton>
                <IconButton variant="text">2</IconButton>
                <IconButton variant="text">3</IconButton>
                <IconButton variant="text">4</IconButton>
                <IconButton variant="text">5</IconButton>
              </div>
              <Button
                variant="text"
                className="px-1 flex"
                color="black"
              // onClick={next}
              // disabled={active === 5}
              >
                ถัดไป
                <ChevronRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </div>
          : <></>
      }
    </Fragment>
  )
}