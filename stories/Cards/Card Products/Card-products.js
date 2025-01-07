import './card-products.css';

export const createCardProducts = ({
  image,
  title,
  imageAlt,
  content,
  link,
  icon,
  label,
}) => {
  const cardProducts = document.createElement('div');
  cardProducts.className = ['featured-products-item'].join(' ');
  cardProducts.innerHTML = `
  <img src="../assets/img/${image}.svg" alt="${imageAlt}">
  <div class="featured-products-item-title">${title}</div>
  <p>${content}</p>
  ${link ? `<div><a href="${link}" class="btn btn-default">${label} <i class="icon-${icon}"></i></a></div>` : ""}`

  return cardProducts;
};



