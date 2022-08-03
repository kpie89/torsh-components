import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: { type: 'radio' }
    },
    color: {
      options: ['primary', 'warning'],
      control: { type: 'radio' }
    },
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Default = Template.bind({});

Default.args = {
  label: 'Torsh Button',
  text: 'Upload New',
  rounded: false,
  variant: "contained",
  color: "primary",
  onClick: () => console.log('Clicked!'),
};