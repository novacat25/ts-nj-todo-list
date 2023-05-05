import type { Meta, StoryObj } from '@storybook/react'
import { TodoList } from './TodoList'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TodoList> = {
  title: 'Example/TodoList',
  component: TodoList,
  }


export default meta;
type Story = StoryObj<typeof TodoList>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
}