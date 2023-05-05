import { Paper, Typography } from '@mui/material'
import React from 'react'
import { colors } from 'src/styles/colors'

export const Footer = () => {
  return (
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
  )
}
