
import { fn } from '@storybook/test';

import { createCard } from './Card';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Cards/Card',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createCard({ label, ...args });
  },
  argTypes: {
   tag: { control: 'text' },
   title: { control: 'text' },
   text: { control: 'text' },
   image: { control:  'text' } ,
   imageAlt: { control: 'text' },
   category: { control: 'text' },
   date: { control: 'date' },
   variant: {
      control: { type: 'select' },
      options: ['primary', 'news', 'big-numbers', 'positions','general-services', 'aiod-services', 'big-highlight'],
    },

  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const primary = {
  args: {
      image: '../assets/img/card-image.jpeg',
      imageAlt: 'Practitioners Portal',
      tag: 'Categorie here',
      title: 'Title here',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
      variant: 'primary',
      date: new Date(),

  },
};

 
 export const news = {
   args: {
      image: "../assets/img/card-image.jpeg",
      imageAlt: 'Practitioners Portal',
      tag: 'Categorie here',
      title: 'Title here',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
      date: new Date(),
      variant: "news",
   },
 };