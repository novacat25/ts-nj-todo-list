import { Button } from 'src/components/atoms/Button/Button'
import { Spacer } from 'src/components/atoms/Spacer'
import { DeleteButton } from 'src/components/molecules/DeleteButton'
import { Checkbox, Stack, TextField, Typography } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <>
      {/* Title */}
      To do list
      <Spacer size={10} />
      {/* Add Tasks */}
      Add task
      <TextField variant="standard" />
      <Button variant="contained" sx={{ width: '50px' }}>
        Add
      </Button>
      <Spacer size={10} />
      {/* To do lists */}
      <Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox sx={{mr: -1}} />
          <Typography>Task 1(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox sx={{mr: -1}} />
          <Typography>Task 2(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox sx={{mr: -1}} />
          <Typography>Task 3(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
      </Stack>
    </>
  )
}

export default HomePage
