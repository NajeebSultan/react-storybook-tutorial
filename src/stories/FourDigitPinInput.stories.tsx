import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import FourDigitPinInput from '../components/FourDigitPinInput';

type StoryProps = ComponentProps<typeof FourDigitPinInput>;

const meta: Meta<StoryProps> = {
  component: FourDigitPinInput,
  title: 'Components/FourDigitPinInput',
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    onComplete: (pin: string) => alert(`Entered PIN: ${pin}`),
  },
  render: (args) => <FourDigitPinInput {...args} />,
};
