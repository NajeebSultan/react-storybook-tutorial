import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '@/components/Navbar';

const meta: Meta<typeof Navbar> = {
  title: 'Components/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  args: {
    title: 'My App',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {};
