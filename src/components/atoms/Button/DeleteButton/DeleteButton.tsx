import React from 'react'
import { Button as MButton } from "@mui/material"

type Props = {
    children?: string
}

export const DeleteButton = ({children}: Props) => {
  return (
    <MButton variant='contained'>{children}</MButton>
  )
}
