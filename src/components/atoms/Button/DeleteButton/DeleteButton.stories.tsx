import type { Meta, StoryObj } from '@storybook/react'
import { DeleteButton } from './DeleteButton'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DeleteButton> = {
  title: 'Example/DeleteButton',
  component: DeleteButton,
  }


export default meta;
type Story = StoryObj<typeof DeleteButton>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'delete',
  },
}