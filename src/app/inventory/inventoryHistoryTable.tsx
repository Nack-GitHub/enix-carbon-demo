import SelectValidate from '@/components/selectValidate'
import { ColumnType, TableComponent } from '@/components/table'
import { Button, Input } from '@material-tailwind/react'
import React from 'react'

type Props = {}

function InventoryHistoryTable({ }: Props) {
  const historyColumns: ColumnType[] = [
    {
      field: 'orderId',
      headerName: 'Order ID'
    },
    {
      field: 'date',
      headerName: 'Date'
    },
    {
      field: 'currencyPair',
      headerName: 'Currency Pair'
    },
    {
      field: 'type',
      headerName: 'Type'
    },
    {
      field: 'side',
      headerName: 'Side'
    },
    {
      field: 'avgPrice',
      headerName: 'Avg Price'
    },
    {
      field: 'filled',
      headerName: 'Filled'
    },
    {
      field: 'total',
      headerName: 'Total'
    },
  ]


  return (
    <div className='mt-4'>
      <div className='flex flex-row gap-2 justify-between lg:w-[50%] mb-4'>
        <div className='flex flex-col lg:grid grid-cols-2 lg:grid-cols-2 w-[75%] gap-2'>
          <Input containerProps={{ className: 'min-w-fit' }} />
          <SelectValidate options={[]} value={undefined} callBack={() => { }} />
        </div>
        <div className='flex flex-col lg:flex-row w-[25%] justify-between gap-2'>
          <Button className='lg:p-1 px-2' fullWidth>ค้นหา</Button>
          <Button className='lg:p-1 px-2' color='white' fullWidth>ล้างทั้งหมด</Button>
        </div>
      </div>
      <TableComponent rows={[]} columns={historyColumns} loading={false} />
    </div>
  )
}

export default InventoryHistoryTable