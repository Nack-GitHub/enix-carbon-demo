import SelectValidate from '@/components/selectValidate'
import { ColumnType, TableComponent } from '@/components/table'
import { Button, Input, Typography } from '@material-tailwind/react'
import React from 'react'

type Props = {}

function HistoryOrderTable({ }: Props) {
  const historyOrderColumns: ColumnType[] = [
    {
      field: 'orderId',
      headerName: 'Order ID',
    },
    {
      field: 'date',
      headerName: 'Date',
    },
    {
      field: 'currencyPair',
      headerName: 'Currency Pair',
    },
    {
      field: 'type',
      headerName: 'Type',
    },
    {
      field: 'side',
      headerName: 'Side',
    },
    {
      field: 'avgPrice',
      headerName: 'Avg Price',
    },
    {
      field: 'filled',
      headerName: 'Filled',
    },
    {
      field: 'total',
      headerName: 'Total',
    },
  ]

  return (
    <div className='mt-4'>
      <div className='flex flex-row gap-2 justify-between w-full'>
        <div className='grid grid-cols-2 lg:grid-cols-4 w-[85%] gap-2'>
          <Input type='date' containerProps={{ className: 'min-w-fit' }} />
          <SelectValidate options={[]} value={undefined} callBack={() => { }} />
          <SelectValidate options={[]} value={undefined} callBack={() => { }} />
          <SelectValidate options={[]} value={undefined} callBack={() => { }} />
        </div>
        <div className='flex flex-col lg:flex-row w-[15%] justify-between gap-2'>
          <Button className='lg:p-1 px-2' fullWidth>ค้นหา</Button>
          <Button className='lg:p-1 px-2' color='white' fullWidth>ล้างทั้งหมด</Button>
        </div>
      </div>
      <div className='my-4'>
        <Typography color='green' className='border-b-[1px] border-b-green-500 w-fit'>
          เครดิตทั้งหมด
        </Typography>
      </div>
      <TableComponent rows={[]} columns={historyOrderColumns} loading={false} />
    </div>
  )
}

export default HistoryOrderTable