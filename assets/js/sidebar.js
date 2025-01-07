export const sidebarFunction = () => {
  
// JavaScript para alternar o estado do menu
const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapseButton');

collapseButton?.addEventListener('click', () => {
   sidebar.classList.toggle('collapsed');
});

// Seleciona todos os elementos com submenu
const submenuParents = document.querySelectorAll('.sidebar .has-submenu');

submenuParents.forEach(parent => {
  parent?.addEventListener('click', () => {
    const submenu = parent.querySelector('.sidebar .submenu'); // Seleciona o submenu dentro do pai

    // Alterna o estado do submenu
    submenu?.classList.toggle('open');
    parent?.classList.toggle('open'); // Adiciona uma classe ao pai para indicar o estado (opcional)
  });
});
 };

