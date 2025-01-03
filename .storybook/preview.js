import '../assets/css/main.css';

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
   backgrounds: {
      default: 'dark',
      values: [
         { name: 'light', value: '#ffffff' },
         { name: 'dark', value: '#010714' },
      ],
   },
  },
};

export default preview;
