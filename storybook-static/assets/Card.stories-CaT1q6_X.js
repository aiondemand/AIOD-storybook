import{f as h}from"./index-Z5tTm0QU.js";const C=({image:e,title:a,imageAlt:o,tag:r,date:c,category:l,variant:t,text:d,link:m,icon:x,label:y})=>{const i=document.createElement("div");i.className=["card-news"].join(" ");const b=new Date(c).toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit",year:"numeric"});return i.innerHTML=`
     <div class="card-news-container">
     ${t==="primary"?`
      <div class="card-news-image">
         ${e?`<img src="${e}" alt="${o}">`:""}
      </div>
   `:e?`
      <div class="card-news-image">
         <img src="${e}" alt="${o}">
         <div class="tag-container ${t==="news"?"tag-container--blue":""}">
            ${r?`<span class="tag ${t==="news"?"tag--blue":""}">${r}</span>`:""}
         </div>
      </div>
   `:`
      <div class="tag-container no-image ${t==="news"?"tag-container--blue":""}">
         ${r?`<span class="tag ${t==="news"?"tag--blue":""}">${r}</span>`:""}
      </div>
   `}
         <div class="card-news-content">
            ${l?`<span class="category">${l}</span>`:""}
            ${a?`<h3>${a}</h3>`:""}
            ${d?`<p>${d}</p>`:""}
            ${c?`<div class="date">${b}</div>`:""}
            ${m?`<a href="${m}" class="btn btn-default mt-3">${y} <i class="icon-${x}"></i></a>`:""}
         </div>
      </div>`,i},f={title:"Componentes/Cards/Card",tags:["autodocs"],render:({label:e,...a})=>C({label:e,...a}),argTypes:{tag:{control:"text"},title:{control:"text"},text:{control:"text"},image:{control:{type:"file",accept:".png, .jpeg"}},imageAlt:{control:"text"},category:{control:"text"},date:{control:"date"},variant:{control:{type:"select"},options:["primary","news"]},link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"}},args:{onClick:h()}},s={args:{image:"../assets/img/card-image.jpeg",imageAlt:"Practitioners Portal",tag:"Categorie here",title:"Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",variant:"primary",date:new Date,link:"#",icon:"plus",label:"Know more"}},n={args:{image:["../../../assets/img/card-image.jpeg"],imageAlt:"Practitioners Portal",tag:"Categorie here",title:"Title here",text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ",date:new Date,variant:"news",link:"#",icon:"plus",label:"Know more"}};var g,p,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    image: '../assets/img/card-image.jpeg',
    imageAlt: 'Practitioners Portal',
    tag: 'Categorie here',
    title: 'Title here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    variant: 'primary',
    date: new Date(),
    link: '#',
    icon: 'plus',
    label: 'Know more'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var $,w,v;n.parameters={...n.parameters,docs:{...($=n.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    image: ["../../../assets/img/card-image.jpeg"],
    imageAlt: 'Practitioners Portal',
    tag: 'Categorie here',
    title: 'Title here',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    date: new Date(),
    variant: "news",
    link: '#',
    icon: 'plus',
    label: 'Know more'
  }
}`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const D=["primary","news"];export{D as __namedExportsOrder,f as default,n as news,s as primary};
