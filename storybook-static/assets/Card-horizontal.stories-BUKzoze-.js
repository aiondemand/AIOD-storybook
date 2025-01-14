import{f as L}from"./index-Z5tTm0QU.js";const R=({title:a,date:n,category:c,variant:r,messages:Y,share:j,text:l,type:d,platform:v,badge:p,money:m,download:w,tag:b,linkCircle:u,icon:g,iconYellow:A,link:$,linkYellow:f,label:T,labelYellow:M})=>{const e=document.createElement("div"),i=new Date(n).toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit",year:"numeric"});return r==="advertise"&&(e.className=["card-news card-numbers card-position card-horizontal"].join(" "),e.innerHTML=`
      <div class="card-news-container">
         <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
            <div>
               <p>${l}</p>
               <div class="date">${i}</div>
            </div>
            <div class="d-flex align-items-center">
               <div class="btn-icon">
                  <i class="icon-forum"></i>
                  <span>${Y}</span>
               </div>
               <div class="btn-icon">
                  <i class="icon-refresh"></i>
                  <span>${j}</span>
               </div>
            </div>
         </div>
      </div>`),r==="arrows"&&(e.className=["card-news card-numbers card-position card-horizontal"].join(" "),e.innerHTML=`
       <div class="card-news-container">
         <div class="card-news-content mt-0">
            <div>
               <p>${l}</p>
               <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex">
                   ${d?`
                     <div class="btn-icon">
                        <span>Type</span>
                        <span><strong>${d}</strong></span>
                     </div>`:""}
                  ${v?`
                     <div class="btn-icon">
                        <span>Platform 🤗</span>
                        <span><strong>${v}</strong></span>
                     </div>`:""}
                  ${p?`
                     
                     <div class="btn-icon">
                        <span>Badge</span>
                        <i class="icon-award"></i>
                        <span><strong>${p}</strong></span>
                     </div>`:""}
                  ${b?`
                     
                     <div class="tag-container">
                        <span class="tag">${b}</span>
                     </div>`:""}
                  ${n?`
                     <div class="btn-icon">
                        <i class="icon-clock"></i>
                        <span>${i}4</span>
                     </div>`:""}
                  ${m?`
                     <div class="btn-icon">
                        <i class="icon-dollar"></i>
                        <span>${m}</span>
                     </div>`:""}
                  ${w?`
                     <div class="btn-icon">
                        <i class="icon-download"></i>
                        <span>${w}</span>
                     </div>
                  </div>`:""}
                  <div class="d-flex">
                     <div class="btn btn-circle btn-circle--blue ml-2">
                        <i class="icon-resources-saved"></i>
                     </div>
                     ${u?`<a href="${u}" class="btn btn-circle btn-circle--yellow ml-2">
                        <i class="icon-${g}"></i>
                     </a>`:""}
                  </div>
               </div>
            </div>
         </div>
      </div>`),r==="buttons"&&(e.className=["card-news card-numbers card-position card-horizontal"].join(" "),e.innerHTML=`
      <div class="card-news-container">
         <div class="card-news-content pb-0 d-flex align-items-center justify-content-between">
            ${c?`<div class="category">${c}</div>`:""}
         </div>
         <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
            <div>
               ${a?`<h3>${a}</h3>`:""}
               ${n?`<div class="date">${i}</div>`:""}
            </div>
            <div>
               ${f?`<a href="${f}" class="btn btn-default btn-default--yellow">${M} <i class="icon-${A}"></i></a>`:""}
               ${$?`<a href="${$}" class="btn btn-default  ms-3">${T} <i class="icon-${g}"></i></a>`:""}
            </div>

         
         </div>
      </div>`),e},N={title:"Componentes/Cards/Card Horizontal",tags:["autodocs"],render:({label:a,...n})=>R({label:a,...n}),argTypes:{messages:{control:"text"},share:{control:"text"},title:{control:"text"},text:{control:"text"},category:{control:"text"},date:{control:"date"},type:{control:"text"},platform:{control:"text"},badge:{control:"text"},tag:{control:"text"},money:{control:"text"},download:{control:"text"},variant:{control:{type:"select"},options:["advertise","arrows","buttons"]},linkCircle:{control:"text"},label:{control:"text"},link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},labelYellow:{control:"text"},linkYellow:{control:"text"},iconYellow:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]}},args:{onClick:L()}},t={args:{text:"Announcements",date:new Date,messages:"1,3k",share:"44,6k",variant:"advertise"}},s={args:{type:"AI Model",platform:"Hugging Face",badge:"Availability v1.1",tag:"Related Resources",text:"3d Body Detection",date:new Date,money:"44,5k",download:"14k",variant:"arrows",linkCircle:"#",icon:"arrow-back"}},o={args:{category:"665f324b2490e7270324a1fa",title:"Summarization experiment",date:new Date,variant:"buttons",icon:"plus",label:"Go to detail",iconYellow:"arrow",labelYellow:"Show more",link:"#",linkYellow:"#2"}};var x,y,k;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    text: 'Announcements',
    date: new Date(),
    messages: '1,3k',
    share: '44,6k',
    variant: 'advertise'
  }
}`,...(k=(y=t.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var h,D,z;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'AI Model',
    platform: 'Hugging Face',
    badge: 'Availability v1.1',
    tag: 'Related Resources',
    text: '3d Body Detection',
    date: new Date(),
    money: '44,5k',
    download: '14k',
    variant: "arrows",
    linkCircle: "#",
    icon: "arrow-back"
  }
}`,...(z=(D=s.parameters)==null?void 0:D.docs)==null?void 0:z.source}}};var H,C,S;o.parameters={...o.parameters,docs:{...(H=o.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    category: '665f324b2490e7270324a1fa',
    title: 'Summarization experiment',
    date: new Date(),
    variant: "buttons",
    icon: "plus",
    label: "Go to detail",
    iconYellow: "arrow",
    labelYellow: "Show more",
    link: "#",
    linkYellow: "#2"
  }
}`,...(S=(C=o.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};const _=["advertise","arrows","buttons"];export{_ as __namedExportsOrder,t as advertise,s as arrows,o as buttons,N as default};
