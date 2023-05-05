import { Spacer } from 'src/components/atoms/Spacer'
import { Paper } from '@mui/material'
import React from 'react'
import { TitleBar } from 'src/components/organisms/TitleBar'
import { Footer } from 'src/components/organisms/Footer'
import { TodoList } from 'src/components/organisms/TodoList'
import { AddTodo } from 'src/components/organisms/AddTodo'

export const Home = () => {
  return (
    <Paper sx={{ p: 2 }}>
      <TitleBar text='To do list' />
      <Spacer size={30} />
      <AddTodo />
      <Spacer size={20} />
      <TodoList />
      <Spacer size={20} />
      <Footer />
    </Paper>
  )
}