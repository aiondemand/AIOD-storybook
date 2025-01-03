import { fn } from '@storybook/test';

import { createButton } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Button',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createButton({ label, ...args });
  },
  argTypes: {
    link: { control: 'text' },
    icon: {
      control: { type: 'select' },
      options: ['arrow', 'plus', 'send', 'arrow-back', 'resources-saved'],
    },
    label: { control: 'text' },
    variant: {
      control: { type: 'select' },
      options: ['primary', 'primary-yellow', 'secondary', 'secondary-yellow','underline', 'circle', 'circle-yellow'],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
   variant: 'primary',
   icon: 'arrow',
   label: 'Know more',
  },
};

export const PrimaryYellow = {
  args: {
   variant: 'primary-yellow',
   icon: 'plus',
   label: 'Know more',
  },
};

export const Secondary = {
  args: {
   variant: 'secondary',
   label: 'Know more',
  },
};

export const SecondaryYellow = {
  args: {
   variant: 'secondary-yellow',
   icon: 'send',
   label: 'Know more ',
  },
};

export const Underline = {
   args: {
    variant: 'underline',
    label: 'Know more',
   },
 };

 export const Circle = {
   args: {
      variant: 'circle',
      label: '',
      icon: 'arrow',
   },
 };

