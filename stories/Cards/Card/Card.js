import './card.css';

export const createCard = ({
  image,
  title,
  imageAlt,
  tag,
  date,
  category,
  variant,
  text,
  link,
  icon,
  label
}) => {
  const card = document.createElement('div');
  card.className = ['card-news'].join(' ');

  const formattedDate = new Date(date).toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
   });
  card.innerHTML = `
     <div class="card-news-container">
     ${variant === 'primary' ? `
      <div class="card-news-image">
         ${image ? `<img src="${image}" alt="${imageAlt}">` : ''}
      </div>
   ` : image ? `
      <div class="card-news-image">
         <img src="${image}" alt="${imageAlt}">
         <div class="tag-container ${variant === 'news' ? 'tag-container--blue' : ''}">
            ${tag ? `<span class="tag ${variant === 'news' ? 'tag--blue' : ''}">${tag}</span>` : ""}
         </div>
      </div>
   ` : `
      <div class="tag-container no-image ${variant === 'news' ? 'tag-container--blue' : ''}">
         ${tag ? `<span class="tag ${variant === 'news' ? 'tag--blue' : ''}">${tag}</span>` : ""}
      </div>
   `}
         <div class="card-news-content">
            ${category ? `<span class="category">${category}</span>` : ""}
            ${title ? `<h3>${title}</h3>` : ""}
            ${text ? `<p>${text}</p>` : ""}
            ${date ?`<div class="date">${formattedDate}</div>` : ""}
            ${link ? `<a href="${link}" class="btn btn-default mt-3">${label} <i class="icon-${icon}"></i></a>` : ""}
         </div>
      </div>`

  return card;
};



