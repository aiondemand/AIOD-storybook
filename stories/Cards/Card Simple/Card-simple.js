import './card-simple.css';

export const createCardSimple = ({
  title,
  tag,
  number,
  date,
  category,
  variant,
  text,
  link,
  linkCircle,
  icon,
  label
}) => {
  const cardSimple = document.createElement('div');
  
  const formattedDate = new Date(date).toLocaleDateString('pt-PT', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
   });
   
   if(variant === 'big-numbers'){
      cardSimple.className = ['card-news card-numbers'].join(' ');
      cardSimple.innerHTML = `
      <div class="card-news-container">
         <div class="card-news-content">
         <span class="category">${category}</span>
         <div class="numbers">
            <h2>${number}</h2>
            ${linkCircle ? `<a href="${linkCircle}" class="btn btn-circle btn-circle--yellow"><i class="icon-arrow"></i></a>` : ""}
         </div>
      </div>
     </div>`
   }

   if(variant === 'services' || variant === 'positions'){
      cardSimple.className = ['card-news card-numbers card-position'].join(' ');
      cardSimple.innerHTML = `
       <div class="card-news-container">
         <div class="card-news-content d-flex align-items-center justify-content-between">
            <span class="category">${category}</span>
            <div class="tag-container tag-container--blue position-relative w-auto">
               <span class="tag tag--blue m-0">${tag}</span>
            </div>
         </div>
         <div class="card-news-content ${variant === 'services' ? 'mt-5' : ''}">
            <h3>${title}</h3>
            <div class="d-flex align-items-center justify-content-between">
               <div class="date">
                  <p class="${variant === 'positions' ? 'mb-0' : ''}">${text}</p>
                  ${date ? `${formattedDate}` : ""}
               </div>
               ${variant === 'positions' ? `
                  ${linkCircle ? `<a href="${linkCircle}" class="btn btn-circle btn-circle--yellow">
                     <i class="icon-arrow"></i>
                  </a>` : ""}
               `: ""}
            </div>
            ${variant === 'services' ? `
               ${link ? `<a href="${link}" class="btn btn-default">${label} <i class="icon-${icon}"></i></a>` : ""}
            ` : ""}
         </div>
      </div>`
   }
   if(variant === 'highlight'){
      cardSimple.className = ['card-news card-numbers card-position'].join(' ');
      cardSimple.innerHTML = `
      <div class="card-news-container">
         <div class="card-news-content">
            <span class="category mb-3">${category}</span>
            ${link ? `<a href="${link}" class="btn btn-default">${label} <i class="icon-${icon}"></i></a>` : ""}
         </div>
         <div class="card-news-content mt-5 pt-5">
            <div class="d-flex align-items-center justify-content-between">
               <h3>${title}</h3>
               ${linkCircle ? `<a href="${linkCircle}" class="btn btn-circle btn-circle--yellow">
                  <i class="icon-arrow"></i>
               </a>` : ""}
            </div>
         </div>
      </div>`
   }
  return cardSimple;
};



