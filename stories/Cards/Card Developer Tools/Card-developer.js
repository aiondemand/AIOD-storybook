import './card-developer.css';

export const createCardDeveloper = ({
  image,
  title,
  imageAlt,
  list,
  link,
  icon,
  label,
}) => {
  const cardDeveloper = document.createElement('div');
  cardDeveloper.className = ['product-list-developer-card  has-unordered-list'].join(' ');

  const listHTML = Object.values(list).length > 0 
  ? Object.values(list).map((item) => `<li>${item}</li>`).join('') 
  : '';

  cardDeveloper.innerHTML = `
   <div class="card-container">
      <img src="${image}" alt="${imageAlt}">
      <div class="product-list-developer-card-content">
         <h3>${title}</h3>
          <div class="unordered-list-wrapper">
            <ul>
            ${listHTML}
            </ul>
         </div>
          ${link ? `<a href="${link}" class="btn btn-default">${label} <i class="icon-${icon}"></i></a>` : ""}
      </div>
   </div>`

  return cardDeveloper;
};



