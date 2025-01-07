import '../assets/css/main.css';
import '../stories/custom.css';
// import '../assets/js/app.js';


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
       values: [
         { name: 'light', value: '#ffffff' },
         { name: 'dark', value: '#010714' },
       ],
     },
   },
 decorators: [
    (Story, context) => {
      const htmlElement = document.documentElement;
      const backgroundName = context.globals.backgrounds.value

      // Alterar o data-theme
        if (backgroundName === '#ffffff') {
          htmlElement.setAttribute('data-theme', 'light');
        } else if (backgroundName === '#010714') {
          htmlElement.setAttribute('data-theme', 'dark');
        }

      return Story();
    },
  ],
 };
 
 export default preview;