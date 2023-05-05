import type { Meta, StoryObj } from '@storybook/react'
import { AddTodo } from './AddTodo'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AddTodo> = {
  title: 'Example/AddTodo',
  component: AddTodo,
  }


export default meta;
type Story = StoryObj<typeof AddTodo>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
}