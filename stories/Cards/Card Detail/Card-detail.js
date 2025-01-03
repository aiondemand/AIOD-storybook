import './card-detail.css';

export const createCardDetail = ({
  image,
  title,
  imageAlt,
  number,
  list,
  text
}) => {
  const cardDetail = document.createElement('div');
  cardDetail.className = ['product-list-link'].join(' ');

  const listHTML = Object.values(list).length > 0 
  ? Object.values(list).map((item) => `<li>${item}</li>`).join('') 
  : '';

  cardDetail.innerHTML = `
   <div class="row">
      <div class="col-12 col-lg-1 offset-lg-1">
         <span class="product-list-number">${number}</span>
      </div>
      <div class="col-12 col-lg-6">
         <div class="product-list-title">${title}</div>
         <img src="${image}" alt="${imageAlt}" class="d-block d-lg-none w-100 mb-m-30">
         <p>${text}</p>
         <ul class="unordered-list">
            ${listHTML}
         </ul>
         <div class="btn btn-default btn-default--yellow">Know more <i class="icon-plus"></i></div>
      </div>
      <div class="col-12 col-lg-3 d-none d-lg-block">
          <img class="w-100" src="${image}" alt="${imageAlt}"
      </div>
   </div>`

  return cardDetail;
};



