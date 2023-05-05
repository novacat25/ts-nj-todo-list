import { Button } from 'src/components/atoms/Button/Button'
import { Spacer } from 'src/components/atoms/Spacer'
import { DeleteButton } from 'src/components/molecules/DeleteButton'
import { Checkbox, Paper, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import { colors } from 'src/styles/colors'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

const HomePage = () => {
  return (
    <Paper sx={{ p: 2 }}>
      {/* Title */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To do list
          </Typography>
        </Toolbar>
      </AppBar>
      <Spacer size={30} />
      {/* Add Tasks */}
      <Stack direction="row" alignItems="center" spacing={3} justifyContent='center'>
        <Typography>Add tasks</Typography>
        <TextField variant="standard" sx={{ width: '500px' }} />
        <Button variant="contained" sx={{ width: '50px' }}>
          Add
        </Button>
      </Stack>
      <Spacer size={20} />
      {/* To do lists */}
      <Paper sx={{p:1}}>
        <Typography fontSize='30px' textAlign='center'>Current Lists</Typography>
        <Spacer size={15} />
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox
            sx={{
              mr: -1,
              color: colors.background.checked,
              '&.Mui-checked': { color: colors.background.checked },
            }}
          />
          <Typography>Task 1(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox
            sx={{
              mr: -1,
              color: colors.background.checked,
              '&.Mui-checked': { color: colors.background.checked },
            }}
          />
          <Typography>Task 2(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Checkbox
            sx={{
              mr: -1,
              color: colors.background.checked,
              '&.Mui-checked': { color: colors.background.checked },
            }}
          />
          <Typography>Task 3(Task & Day)</Typography>
          <DeleteButton />
        </Stack>
      </Paper>
      {/* Footer */}
      <Spacer size={20} />
      <Paper
        sx={{
          p: 2,
          boxShadow: 0,
          border: 1,
          borderColor: colors.text.border,
        }}
      >
        <Typography textAlign="right" fontSize="12px">
        ©2023.05 created By Roche
        </Typography>
      </Paper>
    </Paper>
  )
}

export default HomePage
