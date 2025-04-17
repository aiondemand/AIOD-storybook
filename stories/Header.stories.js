import { fn } from '@storybook/test';

import { createHeader } from './Header';

export default {
  title: 'Componentes/Header',
  tags: ['autodocs'],

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  render: ({ label, ...args }) => {
      return createHeader({ label, ...args });
   },

  argTypes: {
   variant: {
      control: { type: 'select' },
      options: ['dashboard', 'loggedout'],
    },
  },
  args: { onClick: fn() },
};


export const LoggedIn = {
   args: {
       variant: 'dashboard',
   },
 };
 
 export const LoggedOut = {
    args: {
        variant: 'loggedout',
    },
  };
  
