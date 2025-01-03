
import { fn } from '@storybook/test';

import { createCardSimple } from './Card-simple';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card Simple',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCardSimple({ label, ...args });
  },
  argTypes: {
   number: { control: 'text' },
   tag: { control: 'text' },
   title: { control: 'text' },
   text: { control: 'text' },
   category: { control: 'text' },
   date: { control: 'date' },
   variant: {
      control: { type: 'select' },
      options: ['big-numbers', 'positions','services', 'highlight'],
    },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const bigNumbers = {
  args: {
      category: 'AI models',
      number: '15791',
      variant: 'big-numbers',

  },
};

 
 export const services = {
   args: {
      category: 'Services',
      tag: 'AIoD',
      title: 'MyLibrary',
      text: 'Research and Innovative <br> AI Lab',
      variant: "services",
   },
 };

  
 export const highlight = {
   args: {
      category: 'Check all available education resources',
      title: 'Educational Resources',
      variant: "highlight",
   },
 };



 