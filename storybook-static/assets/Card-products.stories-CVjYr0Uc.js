import{f as m}from"./index-BDOojamX.js";const p=({image:e,title:r,imageAlt:c,content:i,link:a,icon:d,label:u})=>{const o=document.createElement("div");return o.className=["featured-products-item"].join(" "),o.innerHTML=`
  <img src="../assets/img/${e}.svg" alt="${c}">
  <div class="featured-products-item-title">${r}</div>
  <p>${i}</p>
  ${a?`<div><a href="${a}" class="btn btn-default">${u} <i class="icon-${d}"></i></a></div>`:""}`,o},b={title:"Componentes/Cards/Card Products",tags:["autodocs"],render:({label:e,...r})=>p({label:e,...r}),argTypes:{title:{control:"text"},content:{control:"text"},image:{control:{type:"select"},options:["virtual-labs","communities","innovations","robospot","developer-tools"]},imageAlt:{control:"text"},link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"}},args:{onClick:m()}},t={args:{image:"virtual-labs",imageAlt:"Virtual Labs",title:"Virtual Lab",content:"Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.",link:"#",icon:"arrow",label:"Know more"}};var s,n,l;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    image: 'virtual-labs',
    imageAlt: 'Virtual Labs',
    title: "Virtual Lab",
    content: "Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.",
    link: '#',
    icon: 'arrow',
    label: 'Know more'
  }
}`,...(l=(n=t.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const v=["CardProducts"];export{t as CardProducts,v as __namedExportsOrder,b as default};
