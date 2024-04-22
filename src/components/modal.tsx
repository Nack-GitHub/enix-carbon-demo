import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from '@material-tailwind/react'
import React, { ReactNode, useEffect } from 'react'

type Props = {
  open: boolean,
  onClose: () => void,
  children: ReactNode
}

function Modal({ open, onClose, children }: Props) {

  useEffect(() => {


    return () => {
    }
  }, [])


  return (
    <Dialog open={open} handler={onClose}>
      {children}
    </Dialog>
  )
}

export default Modal