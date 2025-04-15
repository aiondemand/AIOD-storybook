import{f as d}from"./index-BDOojamX.js";const p=({variant:s})=>{const a=document.createElement("div");return a.className=["homepage"].join(" "),a.innerHTML=`
      <div class="section-faqs">
         <div class="accordion" id="accordionFaqs">
            <div class="accordion-item mb-3">
               <h3 class="accordion-header d-flex justify-content-between align-items-center">
                  <button class="accordion-button ${s==="collapsed"?"collapsed":""}" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="${s==="collapsed"?"false":"true"}" aria-controls="collapseOne">
                     Click here to View all latest Workshops, Trainings
                     <span class="icon-container"><i class="icon-arrow-down"></i></span>
                  </button>
               </h3>
               <div id="collapseOne" class="accordion-collapse collapse ${s==="collapsed"?"":"show"}" data-bs-parent="#accordionFaqs">
                  <div class="accordion-body pt-3">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
               </div>
            </div>
         </div>
      </div>
`,a},u={title:"Componentes/Faqs",tags:["autodocs"],render:({label:s,...a})=>p({...a}),argTypes:{variant:{control:{type:"select"},options:["open","collapsed"]}},args:{onClick:d()}},e={args:{variant:"open"}},o={args:{variant:"collapsed"}};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    variant: 'open'
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var c,i,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'collapsed'
  }
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const g=["faqsOpen","faqsCollapsed"];export{g as __namedExportsOrder,u as default,o as faqsCollapsed,e as faqsOpen};
