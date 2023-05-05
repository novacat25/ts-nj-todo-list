import type { Meta, StoryObj } from '@storybook/react'
import { TitleBar } from './TitleBar'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TitleBar> = {
  title: 'Example/TitleBar',
  component: TitleBar,
  }


export default meta;
type Story = StoryObj<typeof TitleBar>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        text: 'To do list',
    }
}