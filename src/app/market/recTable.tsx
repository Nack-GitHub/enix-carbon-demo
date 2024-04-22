import { ColumnType, TableComponent } from '@/components/table'
import { ROUTE_PATH } from '@/constants/RoutePath'
import { Button, Typography } from '@material-tailwind/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

type Props = {}

const RecTable = (props: Props) => {
  const router = useRouter()
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const columns: ColumnType[] = [
    {
      field: 'symbol',
      headerName: 'Symbol',
    },
    {
      field: 'last',
      headerName: 'Last',
    },
    {
      field: 'chg',
      headerName: 'Chg',
    },
    {
      field: 'chg',
      headerName: '% Chg',
    },
    {
      field: 'buy',
      headerName: 'Buy Vol',
    },
    {
      field: 'buy',
      headerName: 'Buy Price',
    },
    {
      field: 'sell',
      headerName: 'Sell Vol',
    },
    {
      field: 'sell',
      headerName: 'Sell Price',
    },
    {
      field: 'buy',
      headerName: 'Buy Vol',
    },
    {
      field: 'close',
      headerName: 'Close Price',
    },
    {
      field: 'total',
      headerName: 'Total Vol',
    },
    {
      field: 'total',
      headerName: 'Total Val',
    },
    {
      field: '',
      headerName: '',
      renderCell: () => <Button
        onClick={() => router.push(ROUTE_PATH.MARKET_TRADE)}
        variant='text'
      >Trade</Button>
    },
  ]

  const data: any = [
    {
      symbol: 'TVER-CC-2024',
      last: 0.00,
      chg: 0.00,
      buy: 0.00,
      sell: 0.00,
      close: 0.00,
      total: 0.00,
    },
    {
      symbol: 'TVER-CC-2024',
      last: 0.00,
      chg: 0.00,
      buy: 0.00,
      sell: 0.00,
      close: 0.00,
      total: 0.00,
    },
    {
      symbol: 'TVER-CC-2024',
      last: 0.00,
      chg: 0.00,
      buy: 0.00,
      sell: 0.00,
      close: 0.00,
      total: 0.00,
    },
    {
      symbol: 'TVER-CC-2024',
      last: 0.00,
      chg: 0.00,
      buy: 0.00,
      sell: 0.00,
      close: 0.00,
      total: 0.00,
    },
  ]

  async function loadData() {
    setLoading(true)
    try {
      // const res = await 
      // if (res.status !== 200) {
      //   setErrorMessage('Something went wrong')
      //   setLoading(false)
      //   return
      // }
      // const { data, error } = res.data
      // if (error) {
      //   setErrorMessage(error.message)
      //   setLoading(false)
      //   return
      // }
      setTimeout(() => {
        setRows(data)
        setLoading(false)
      }, 2000)

    } catch (error: any) {
      setErrorMessage(error?.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    loadData()

    return () => {

    }
  }, [])

  return (
    <div>
      <div className='my-4'>
        <Typography color='green' className='border-b-[1px] border-b-green-500 w-fit'>
          REC
        </Typography>
      </div>
      <TableComponent rows={rows} columns={columns} loading={loading} />
    </div>
  )
}

export default RecTable