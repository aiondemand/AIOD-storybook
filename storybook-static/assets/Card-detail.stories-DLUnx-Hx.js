import{f as b}from"./index-Z5tTm0QU.js";const v=({image:e,title:o,imageAlt:r,number:d,list:l,text:p,link:n,icon:m,label:u})=>{const s=document.createElement("div");s.className=["product-list"].join(" ");const g=Object.values(l).length>0?Object.values(l).map(x=>`<li>${x}</li>`).join(""):"";return s.innerHTML=`
  <div class="product-list-link">
   <div class="row">
      <div class="col-12 col-lg-1 offset-lg-1">
         <span class="product-list-number">${d}</span>
      </div>
      <div class="col-12 col-lg-6">
         <div class="product-list-title">${o}</div>
         <img src="${e}" alt="${r}" class="d-block d-lg-none w-100 mb-m-30">
         <p>${p}</p>
         <ul class="unordered-list">
            ${g}
         </ul>
         ${n?`<a href="${n}" class="btn btn-default btn-default--yellow">${u} <i class="icon-${m}"></i></a>`:""}
      </div>
      <div class="col-12 col-lg-3 d-none d-lg-block">
          <img class="w-100" src="${e}" alt="${r}"
      </div>
      </div>
   </div>`,s},f={title:"Componentes/Cards/Card Detail",tags:["autodocs"],render:({label:e,...o})=>v({label:e,...o}),argTypes:{title:{control:"text"},text:{control:"text"},number:{control:"text"},image:{control:{type:"file",accept:".png, .jpeg"}},imageAlt:{control:"text"},list:{control:"object"},link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"}},args:{onClick:b()}},t={args:{image:["../../../assets/img/developer-tools2.png"],imageAlt:"Practitioners Portal",title:"Practitioners Portal 2",list:{1:"Explore datasets. papers, models 2",2:"Generate/export code",3:"Combine these to create and run experiments"},number:"01",text:"Explore the research contents on the AI on Demand to customise your experiments",link:"#",icon:"plus",label:"Know more"}};var a,c,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    image: ["../../../assets/img/developer-tools2.png"],
    imageAlt: 'Practitioners Portal',
    title: "Practitioners Portal 2",
    list: {
      "1": "Explore datasets. papers, models 2",
      "2": "Generate/export code",
      "3": "Combine these to create and run experiments"
    },
    number: "01",
    text: "Explore the research contents on the AI on Demand to customise your experiments",
    link: '#',
    icon: 'plus',
    label: 'Know more'
  }
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const h=["cardDetail"];export{h as __namedExportsOrder,t as cardDetail,f as default};
