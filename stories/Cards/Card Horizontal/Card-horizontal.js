import './Card-horizontal.css';

export const createCardHorizontal = ({
   title,
   date,
   category,
   variant,
   messages,
   share,
   text,
   type,
   platform,
   badge,
   money,
   download,
   tag,
   linkCircle,
   icon,
   iconYellow,
   link,
   linkYellow,
   label,
   labelYellow

}) => {
  const cardHorizontal = document.createElement('div');
  
  const formattedDate = new Date(date).toLocaleDateString('pt-PT', {
     day: '2-digit',
     month: '2-digit',
     year: 'numeric',
   });
   
   if(variant === 'advertise'){
      cardHorizontal.className = ['card-news card-numbers card-position card-horizontal'].join(' ');
      cardHorizontal.innerHTML = `
      <div class="card-news-container">
         <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
            <div>
               <p>${text}</p>
               <div class="date">${formattedDate}</div>
            </div>
            <div class="d-flex align-items-center">
               <div class="btn-icon">
                  <i class="icon-forum"></i>
                  <span>${messages}</span>
               </div>
               <div class="btn-icon">
                  <i class="icon-refresh"></i>
                  <span>${share}</span>
               </div>
            </div>
         </div>
      </div>`
   }

   if(variant === 'arrows'){
      cardHorizontal.className = ['card-news card-numbers card-position card-horizontal'].join(' ');
      cardHorizontal.innerHTML = `
       <div class="card-news-container">
         <div class="card-news-content mt-0">
            <div>
               <p>${text}</p>
               <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex">
                   ${type ? `
                     <div class="btn-icon">
                        <span>Type</span>
                        <span><strong>${type}</strong></span>
                     </div>` 
                  : ''}
                  ${platform ? `
                     <div class="btn-icon">
                        <span>Platform 🤗</span>
                        <span><strong>${platform}</strong></span>
                     </div>` 
                  : ''}
                  ${badge ? `
                     
                     <div class="btn-icon">
                        <span>Badge</span>
                        <i class="icon-award"></i>
                        <span><strong>${badge}</strong></span>
                     </div>` 
                  : ''}
                  ${tag ? `
                     
                     <div class="tag-container">
                        <span class="tag">${tag}</span>
                     </div>` 
                  : ''}
                  ${date ? `
                     <div class="btn-icon">
                        <i class="icon-clock"></i>
                        <span>${formattedDate}4</span>
                     </div>` 
                  : ''}
                  ${money ? `
                     <div class="btn-icon">
                        <i class="icon-dollar"></i>
                        <span>${money}</span>
                     </div>` 
                  : ''}
                  ${download ? `
                     <div class="btn-icon">
                        <i class="icon-download"></i>
                        <span>${download}</span>
                     </div>
                  </div>` 
                  : ''}
                  <div class="d-flex">
                     <div class="btn btn-circle btn-circle--blue ml-2">
                        <i class="icon-resources-saved"></i>
                     </div>
                     ${linkCircle ? `<a href="${linkCircle}" class="btn btn-circle btn-circle--yellow ml-2">
                        <i class="icon-${icon}"></i>
                     </a>` 
                  : ''}
                  </div>
               </div>
            </div>
         </div>
      </div>`
   }



   if(variant === 'buttons'){
      cardHorizontal.className = ['card-news card-numbers card-position card-horizontal'].join(' ');
      cardHorizontal.innerHTML = `
      <div class="card-news-container">
         <div class="card-news-content pb-0 d-flex align-items-center justify-content-between">
            ${category ? `<div class="category">${category}</div>` : ''}
         </div>
         <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
            <div>
               ${title ? `<h3>${title}</h3>` : ''}
               ${date ? `<div class="date">${formattedDate}</div>` : ''}
            </div>
            <div>
               ${linkYellow ? `<a href="${linkYellow}" class="btn btn-default btn-default--yellow">${labelYellow} <i class="icon-${iconYellow}"></i></a>` : ""}
               ${link ? `<a href="${link}" class="btn btn-default  ms-3">${label} <i class="icon-${icon}"></i></a>` : ""}
            </div>

         
         </div>
      </div>`
   }
  return cardHorizontal;
};



