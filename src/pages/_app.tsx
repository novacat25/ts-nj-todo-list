import 'src/styles/globals.css'
import 'src/lib/firebase'
import { ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'
import React from 'react'
import { RecoilRoot } from 'recoil'
import { theme } from 'src/styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp