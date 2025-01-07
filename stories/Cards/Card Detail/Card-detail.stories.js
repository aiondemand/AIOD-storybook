
import { fn } from '@storybook/test';

import { createCardDetail } from './Card-detail';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card Detail',
  tags: ['autodocs'],

  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCardDetail({ label, ...args });
  },
  argTypes: {
   title: { control: 'text' },
   text: { control: 'text' },
   number: { control: 'text' },
   image: { control: { type: 'file', accept: '.png, .jpeg' } } ,
   imageAlt: { control: 'text' },
   list: { control: 'object' },
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
export const cardDetail = {
  args: {
    image: ["../../../assets/img/developer-tools2.png"],
    imageAlt: 'Practitioners Portal',
    title: "Practitioners Portal 2",
    list:{
      "1": "Explore datasets. papers, models 2",
      "2": "Generate/export code",
      "3": "Combine these to create and run experiments",
    },
    number: "01",
    text: "Explore the research contents on the AI on Demand to customise your experiments",
    link: '#',
    icon: 'plus',
    label: 'Know more',
  },
};
