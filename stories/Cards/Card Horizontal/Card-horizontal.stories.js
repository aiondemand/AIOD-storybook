
import { fn } from '@storybook/test';

import { createCardHorizontal } from './Card-horizontal';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card Horizontal',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCardHorizontal({ label, ...args });
  },
  argTypes: {
   messages: { control: 'text' },
   share: { control: 'text' },
   title: { control: 'text' },
   text: { control: 'text' },
   category: { control: 'text' },
   date: { control: 'date' },
   type: { control: 'text' },
   platform: { control: 'text' },
   badge: { control: 'text' },
   tag: { control: 'text' },
   money: { control: 'text' },
   download: { control: 'text' },
   variant: {
      control: { type: 'select' },
      options: ['advertise', 'arrows','buttons'],
    },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const advertise = {
  args: {
      text: 'Announcements',
      date: new Date(),
      messages: '1,3k',
      share: '44,6k',
      variant: 'advertise',

  },
};

 
 export const arrows = {
   args: {
      type: 'AI Model',
      platform: 'Hugging Face',
      badge: 'Availability v1.1',
      tag: 'Related Resources',
      text: '3d Body Detection',
      date: new Date(),
      money: '44,5k',
      download: '14k',
      variant: "arrows",
   },
 };

  
 export const buttons = {
   args: {
      category: '665f324b2490e7270324a1fa',
      title: 'Summarization experiment',
      date: new Date(),
      variant: "buttons",
   },
 };



 