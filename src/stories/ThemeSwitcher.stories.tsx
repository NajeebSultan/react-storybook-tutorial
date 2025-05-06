

import { Meta, StoryFn } from '@storybook/react';
import ThemeSwitcher, { ThemeSwitcherProps } from '@/components/ThemeSwitcher';

// Define the meta data for the component
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  args: {
    onThemeChange: (theme: string) => console.log(`Theme changed to: ${theme}`),
  },
};

export default meta;

// Template function to render the component
const Template: StoryFn<ThemeSwitcherProps> = (args) => <ThemeSwitcher {...args} />;

// Default story, binding args
export const Default = Template.bind({});
Default.args = {
  onThemeChange: (theme: string) => console.log(`Theme changed to: ${theme}`),
};
