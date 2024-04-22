'use client'

import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'
import { Button, Typography } from "@material-tailwind/react"

export default function ErrorGlobal({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {

    return (
        <div className="flex flex-col content-center ">
            <ExclamationTriangleIcon className='fill-red-500 w-20 self-center mt-10' />
            <div className="text-center ">
                <Typography className="text-6xl" variant='h2'>
                    {error.message}
                </Typography>
                <Typography variant='paragraph'>
                    มีบางอย่างผิดผลาด: โปรดลองอีกครั้งในภายหลัง
                </Typography>
            </div>
            <Button className="w-1/4 self-center mt-4 text-white py-2 rounded mb-4" onClick={() => reset()}>Try again</Button>
        </div>
    )
}