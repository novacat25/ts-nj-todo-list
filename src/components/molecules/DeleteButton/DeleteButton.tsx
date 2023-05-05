import React from 'react'
import { Button } from '@/components/atoms/Button/Button'
import { colors } from '@/styles/colors'

export const DeleteButton = () => {
  return (
    <Button color={colors.background.delete} variant="contained" width="50px">
      Delete
    </Button>
  )
}
