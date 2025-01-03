
import { fn } from '@storybook/test';

import { createCardDeveloper } from './Card-developer';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card Developer',
  tags: ['autodocs'],

  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCardDeveloper({ label, ...args });
  },
  argTypes: {
   title: { control: 'text' },
   image: { control:  'text' } ,
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
export const CardDeveloper = {
  args: {
    image: 'https://aiod.dev.loba.com/wp-content/uploads/2023/06/developer-tools2-1.png',
    imageAlt: 'Developer Tools',
    title: "Virtual Lab",
    list:{
      "1": "Build your AIoD project website using                                our free Wordpress theme",
      "2": "Reduce costs",
      "3": "Save time",
      "4": " Integrate your project with the AIoD domain"
    }
  },
};
