import type { Meta, StoryObj } from '@storybook/react'
import { Footer } from './Footer'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Footer> = {
  title: 'Example/Footer',
  component: Footer,
  }


export default meta;
type Story = StoryObj<typeof Footer>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
}