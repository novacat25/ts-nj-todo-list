import { Spacer } from 'src/components/atoms/Spacer'
import { DeleteButton } from 'src/components/molecules/DeleteButton'
import { Checkbox, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { colors } from 'src/styles/colors'

export const TodoList = () => {
  return (
    <Paper sx={{ p: 1 }}>
      <Typography fontSize="30px" textAlign="center">
        Current Todo Lists
      </Typography>
      <Spacer size={15} />
      <Stack direction="row" alignItems="center" spacing={3} justifyContent='center'>
        <Checkbox
          sx={{
            mr: -1,
            color: colors.background.checked,
            '&.Mui-checked': { color: colors.background.checked },
          }}
        />
        <Stack>
          <Typography>Task 1(Task & Day)</Typography>
          <Typography fontSize="12px">2023/05/05 17:40</Typography>
        </Stack>
        <DeleteButton />
      </Stack>
      <Spacer size={10} />
      <Stack direction="row" alignItems="center" spacing={3} justifyContent='center'>
        <Checkbox
          sx={{
            mr: -1,
            color: colors.background.checked,
            '&.Mui-checked': { color: colors.background.checked },
          }}
        />
        <Stack>
          <Typography>Task 2(Task & Day)</Typography>
          <Typography fontSize="12px">2023/05/05 17:40</Typography>
        </Stack>
        <DeleteButton />
      </Stack>
      <Spacer size={10} />
      <Stack direction="row" alignItems="center" spacing={3} justifyContent='center'>
        <Checkbox
          sx={{
            mr: -1,
            color: colors.background.checked,
            '&.Mui-checked': { color: colors.background.checked },
          }}
        />
        <Stack>
          <Typography>Task 3(Task & Day)</Typography>
          <Typography fontSize="12px">2023/05/05 17:40</Typography>
        </Stack>
        <DeleteButton />
      </Stack>
      <Spacer size={10} />
    </Paper>
  )
}
