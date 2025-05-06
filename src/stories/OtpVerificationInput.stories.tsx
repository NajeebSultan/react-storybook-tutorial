import type { Meta, StoryObj } from '@storybook/react';
import OtpVerificationInput from '@/components/OtpVerificationInput';

const meta: Meta<typeof OtpVerificationInput> = {
  title: 'Components/OtpVerificationInput',
  component: OtpVerificationInput,
  tags: ['autodocs'],
  args: {
    length: 6,
    duration: 30,
    onComplete: (otp: string) => alert(`Entered OTP: ${otp}`),
    onResend: () => alert('OTP Resent!'),
  },
};

export default meta;

type Story = StoryObj<typeof OtpVerificationInput>;

export const Default: Story = {};
