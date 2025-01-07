
import { fn } from '@storybook/test';

import { createCardProducts } from './Card-products';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card Products',
  tags: ['autodocs'],

  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCardProducts({ label, ...args });
  },
  argTypes: {
   title: { control: 'text' },
   content: { control: 'text' },
   image: {
      control: { type: 'select' },
      options: ['virtual-labs', 'communities', 'innovations', 'robospot','developer-tools'],
   },
   imageAlt: { control: 'text' },
   link: { control: 'text' },
   icon: {
      control: { type: 'select' },
      options: ['arrow', 'plus', 'send', 'arrow-back', 'resources-saved'],
   },
   label: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const CardProducts = {
  args: {
   image: 'virtual-labs',
   imageAlt: 'Virtual Labs',
   title: "Virtual Lab",
   content: "Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.",
   link: '#',
   icon: 'arrow',
   label: 'Know more',
  },
};
