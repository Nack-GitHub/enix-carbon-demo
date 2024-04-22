import SelectValidate from '@/components/selectValidate'
import { ColumnType, TableComponent } from '@/components/table'
import { Button, Input } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import WithdrawModal from './withdrawModal'

type Props = {}

function InventoryTable({ }: Props) {
  const [loading, setLoading] = useState(false)
  const [rows, setRows] = useState([])

  const [openModal, setOpenModal] = useState(false)

  const inventoryColumns: ColumnType[] = [
    {
      field: 'symbol',
      headerName: 'Symbol'
    },
    {
      field: 'totalAmount',
      headerName: 'Total Amount'
    },
    {
      field: 'availableAmount',
      headerName: 'Available Amount'
    },
    {
      field: '',
      headerName: '',
      renderCell: ({ rows }) => <div>
        <Button variant='text' onClick={() => setOpenModal(true)}>ถอนเงิน</Button>
        <Button variant='text' color='blue-gray'>เกษียณอายุ</Button>
      </div>
    },
  ]

  useEffect(() => {
    loadData()

    return () => {

    }
  }, [])

  const data: any = [
    {
      symbol: 'TVER-CC-2024',
      totalAmount: 0.00,
      availableAmount: 0.00
    },
    {
      symbol: 'TVER-CC-2024',
      totalAmount: 0.00,
      availableAmount: 0.00
    },
    {
      symbol: 'TVER-CC-2024',
      totalAmount: 0.00,
      availableAmount: 0.00
    },
  ]

  function loadData() {
    setLoading(true)

    setTimeout(() => {
      setRows(data)
      setLoading(false)
    }, 3000)
  }


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
      <TableComponent rows={rows} columns={inventoryColumns} loading={loading} />
      <WithdrawModal open={openModal} onClose={() => setOpenModal(false)} />
    </div>
  )
}

export default InventoryTable