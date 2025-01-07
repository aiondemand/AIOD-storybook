
import { fn } from '@storybook/test';

import { createForm } from './Form';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Componentes/Form',
  tags: ['autodocs'],
  render: ({ label, ...args }) => {
    // You can either use a function to create DOM elements or use a plain html string!
    // return `<div>${label}</div>`;
    return createForm({ label, ...args });
  },
  argTypes: {
   buttonLabel: { control: 'text' },
   nameLabel: { control: 'text' },
   emailLabel: { control: 'text' },
   messageLabel: { control: 'text' },
   checkboxLabel: { control: 'text' },
   radioLabel: { control: 'text' },
   namePlaceholder: { control: 'text' },
   emailPlaceholder: { control: 'text' },
   messagePlaceholder: { control: 'text' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const form = {
  args: {
   buttonLabel: "Submit Form",
   nameLabel: "Nome:",
   emailLabel: "Email:",
   messageLabel: "Mensagem:",
   checkboxLabel: "Aceitar",
   radioLabel: "Aceitar",
   namePlaceholder: "Escrever aqui...",
   emailPlaceholder: "Escrever aqui...",
   messagePlaceholder: "Escrever aqui...",
  },
};

 

 


 