
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
   link: { control: 'text' },
   linkCircle: { control: 'text' },
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
export const bigNumbers = {
  args: {
      category: 'AI models',
      number: '15791',
      variant: 'big-numbers',
      linkCircle: '#',
  },
};

 
 export const services = {
   args: {
      category: 'Services',
      tag: 'AIoD',
      title: 'MyLibrary',
      text: 'Research and Innovative <br> AI Lab',
      variant: "services",
      link: '#',
      icon: 'arrow',
      label: 'Know more',
      linkCircle: '#2',
   },
 };

  
 export const highlight = {
   args: {
      category: 'Check all available education resources',
      title: 'Educational <br> Resources',
      variant: "highlight",
      linkCircle: '#2',
      link: '#',
      icon: 'arrow',
      label: 'Available for you',
   },
 };



 