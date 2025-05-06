// src/stories/ThemeSwitcher.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import ThemeSwitcher, { ThemeSwitcherProps } from '@/components/ThemeSwitcher';

// Storybook metadata
const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
};

export default meta;

// Template for stories
const Template: StoryFn<ThemeSwitcherProps> = (args) => <ThemeSwitcher {...args} />;

// Light Theme story
export const LightTheme = Template.bind({});
LightTheme.args = {
  onThemeChange: (theme: string) => console.log(`Theme is light`),
};

// Dark Theme story
export const DarkTheme = Template.bind({});
DarkTheme.args = {
  onThemeChange: (theme: string) => console.log(`Theme is dark`),
};

// System Theme story
export const SystemTheme = Template.bind({});
SystemTheme.args = {
  onThemeChange: (theme: string) => console.log(`System theme: ${theme}`),
};
