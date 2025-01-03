import './card-products.css';

export const createCardProducts = ({
  image,
  title,
  imageAlt,
  content,
}) => {
  const cardProducts = document.createElement('div');
  cardProducts.className = ['featured-products-item'].join(' ');
  cardProducts.innerHTML = `
  <img src="../assets/img/${image}.svg" alt="${imageAlt}">
  <div class="featured-products-item-title">${title}</div>
  <p>${content}</p>
  <div>
      <a href="#" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
   </div>`

  return cardProducts;
};



