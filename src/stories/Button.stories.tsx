import {Meta , StoryObj} from '@storybook/react';
import {Button} from '@/components/Button';
import {ComponentProps} from 'react';


type StoryProps = ComponentProps<typeof Button> ;

const meta : Meta<StoryProps> = {
  component: Button,
};

export default meta;

type Story = StoryObj<StoryProps>
export const Primary: Story = {
  args:
  {
    variant: 'primary',
    size: 'md',

  },
  render: (args) => {
    return <Button{...args}>Test</Button>;
  }
}
