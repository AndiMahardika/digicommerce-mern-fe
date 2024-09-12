import { Meta, StoryObj } from "@storybook/react"
import { Dialog } from "./dialog"

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Dialog>

export const BasicDialog: Story = {
  args: {
    children: 'Hello',
    title: 'Hello from Dialog',
    description: 'Hello from Dialog',
    messageClose: 'Save Changes',
    formFields: [
      {
        label: 'Name',
        type: 'text',
        placeholder: 'Input your name'
      },
      {
        label: 'Email',
        type: 'email',
        placeholder: 'Input your email'
      },
      {
        label: 'address',
        type: 'text',
        placeholder: 'Input your address'
      }
    ]
  },
}