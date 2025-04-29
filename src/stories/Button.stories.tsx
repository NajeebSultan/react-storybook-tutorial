import {Meta , StoryObj} from '@storybook/react';
import {Button} from '@/components/Button';
import {ComponentProps} from 'react';


type StoryProps = ComponentProps<typeof Button> & {
buttonText: string;
};

const meta : Meta<StoryProps> = {
  component: Button,
  argTypes: {
    variant:{
      options:['primary', 'secondary'],
      control:{
        type : 'select',
      }
    }
  },
};

export default meta;

type Story = StoryObj<StoryProps>
export const Primary: Story = {
  args:
  {
    buttonText: "Hello",
    variant: 'primary',
    size: 'md',

  },
  render: ({buttonText, ...args}) => {
    return <Button {...args}>{buttonText}</Button>;
  },
}
