import{f as k}from"./index-BDOojamX.js";const A=({title:r,tag:o,number:x,date:d,category:l,variant:e,text:C,link:n,linkCircle:a,icon:b,label:m})=>{const s=document.createElement("div"),S=new Date(d).toLocaleDateString("pt-PT",{day:"2-digit",month:"2-digit",year:"numeric"});return e==="big-numbers"&&(s.className=["card-news card-numbers"].join(" "),s.innerHTML=`
      <div class="card-news-container">
         <div class="card-news-content">
         <span class="category">${l}</span>
         <div class="numbers">
            <h2>${x}</h2>
            ${a?`<a href="${a}" class="btn btn-circle btn-circle--yellow"><i class="icon-arrow"></i></a>`:""}
         </div>
      </div>
     </div>`),(e==="services"||e==="positions")&&(s.className=["card-news card-numbers card-position"].join(" "),s.innerHTML=`
       <div class="card-news-container">
         <div class="card-news-content d-flex align-items-center justify-content-between">
            <span class="category">${l}</span>
            <div class="tag-container tag-container--blue position-relative w-auto">
               <span class="tag-default tag--blue m-0">${o}</span>
            </div>
         </div>
         <div class="card-news-content ${e==="services"?"mt-5":""}">
            <h3>${r}</h3>
            <div class="d-flex align-items-center justify-content-between">
               <div class="date">
                  <p class="${e==="positions"?"mb-0":""}">${C}</p>
                  ${d?`${S}`:""}
               </div>
               ${e==="positions"?`
                  ${a?`<a href="${a}" class="btn btn-circle btn-circle--yellow">
                     <i class="icon-arrow"></i>
                  </a>`:""}
               `:""}
            </div>
            ${e==="services"?`
               ${n?`<a href="${n}" class="btn btn-default">${m} <i class="icon-${b}"></i></a>`:""}
            `:""}
         </div>
      </div>`),e==="highlight"&&(s.className=["card-news card-numbers card-position"].join(" "),s.innerHTML=`
      <div class="card-news-container">
         <div class="card-news-content">
            <span class="category mb-3">${l}</span>
            ${n?`<a href="${n}" class="btn btn-default">${m} <i class="icon-${b}"></i></a>`:""}
         </div>
         <div class="card-news-content mt-5 pt-5">
            <div class="d-flex align-items-center justify-content-between">
               <h3>${r}</h3>
               ${a?`<a href="${a}" class="btn btn-circle btn-circle--yellow">
                  <i class="icon-arrow"></i>
               </a>`:""}
            </div>
         </div>
      </div>`),s},L={title:"Componentes/Cards/Card Simple",tags:["autodocs"],render:({label:r,...o})=>A({label:r,...o}),argTypes:{number:{control:"text"},tag:{control:"text"},title:{control:"text"},text:{control:"text"},category:{control:"text"},date:{control:"date"},variant:{control:{type:"select"},options:["big-numbers","positions","services","highlight"]},link:{control:"text"},linkCircle:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"}},args:{onClick:k()}},t={args:{category:"AI models",number:"15791",variant:"big-numbers",linkCircle:"#"}},c={args:{category:"Services",tag:"AIoD",title:"MyLibrary",text:"Research and Innovative <br> AI Lab",variant:"services",link:"#",icon:"arrow",label:"Know more",linkCircle:"#2"}},i={args:{category:"Check all available education resources",title:"Educational <br> Resources",variant:"highlight",linkCircle:"#2",link:"#",icon:"arrow",label:"Available for you"}};var g,u,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    category: 'AI models',
    number: '15791',
    variant: 'big-numbers',
    linkCircle: '#'
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var p,h,w;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    category: 'Services',
    tag: 'AIoD',
    title: 'MyLibrary',
    text: 'Research and Innovative <br> AI Lab',
    variant: "services",
    link: '#',
    icon: 'arrow',
    label: 'Know more',
    linkCircle: '#2'
  }
}`,...(w=(h=c.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var $,y,f;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    category: 'Check all available education resources',
    title: 'Educational <br> Resources',
    variant: "highlight",
    linkCircle: '#2',
    link: '#',
    icon: 'arrow',
    label: 'Available for you'
  }
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const j=["bigNumbers","services","highlight"];export{j as __namedExportsOrder,t as bigNumbers,L as default,i as highlight,c as services};
