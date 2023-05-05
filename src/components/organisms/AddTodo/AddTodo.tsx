import { Button } from 'src/components/atoms/Button/Button'
import { Stack, TextField, Typography } from '@mui/material'
import React from 'react'


export const AddTodo = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={3} justifyContent='center'>
    <Typography>Add tasks</Typography>
    <TextField variant="standard" sx={{ width: '500px' }} />
    <Button variant="contained" sx={{ width: '50px' }}>
      Add
    </Button>
  </Stack>
  )
}
