import './faqs.css';


export const createFaqs = ({
   variant,
}) => {
   const faqs = document.createElement('div');
   faqs.className = ['homepage'].join(' ');
   faqs.innerHTML = `
      <div class="section-faqs">
         <div class="accordion" id="accordionFaqs">
            <div class="accordion-item mb-3">
               <h3 class="accordion-header d-flex justify-content-between align-items-center">
                  <button class="accordion-button ${variant === 'collapsed' ? 'collapsed' : ''}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="${variant === 'collapsed' ? 'false' : 'true'}" aria-controls="collapseOne">
                     Click here to View all latest Workshops, Trainings
                     <span class="icon-container"><i class="icon-arrow-down"></i></span>
                  </button>
               </h3>
               <div id="collapseOne" class="accordion-collapse collapse ${variant === 'collapsed' ? '' : 'show'}" data-bs-parent="#accordionFaqs">
                  <div class="accordion-body pt-3">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
               </div>
            </div>
         </div>
      </div>
`
 
  
   
  return faqs;
};



