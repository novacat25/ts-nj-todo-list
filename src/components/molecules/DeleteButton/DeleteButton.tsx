import React from 'react'
import { Button } from 'src/components/atoms/Button/Button'
import { colors } from 'src/styles/colors'
import DeleteIcon from '@mui/icons-material/Delete'

export const DeleteButton = () => {
  return (
    <Button sx={{color: colors.background.delete, border: 1, borderRadius: '4px'}}>
      <DeleteIcon sx={{color: colors.background.delete}} />
    </Button>
  )
}
