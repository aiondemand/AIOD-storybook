import { fn } from '@storybook/test';

import { createHeader } from './Header';

export default {
  title: 'Componentes/Header',
  tags: ['autodocs'],

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  render: (args) => createHeader(args),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
};

export const LoggedIn = {
  args: {
    user: {
      name: 'Nuno Alves',
    },
  },
};

export const LoggedOut = {};
