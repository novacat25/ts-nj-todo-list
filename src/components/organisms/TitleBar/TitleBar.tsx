import React from 'react'
import { Typography } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'

type Props = {
    text?: string
}

export const TitleBar = ({text}: Props) => {
  return (
    <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {text}
      </Typography>
    </Toolbar>
  </AppBar>
  )
}
