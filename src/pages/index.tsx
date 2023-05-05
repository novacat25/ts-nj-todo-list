import { Button } from 'src/components/atoms/Button/Button'
import { Spacer } from 'src/components/atoms/Spacer'
import { DeleteButton } from 'src/components/molecules/DeleteButton'
import { Checkbox } from '@mui/material'
import React from 'react'

const HomePage = () => {
  return (
    <>
      {/* Title */}
      To do list
      <Spacer size={10} />
      {/* Add Tasks */}
      Add task
      <Button variant="contained" width="50px">
        Add
      </Button>
      <Spacer size={10} />
      {/* To do lists */}
      <Checkbox />
      Task 1(Task & Day)<DeleteButton />
    </>
  )
}

export default HomePage
