import{f as g}from"./index-BDOojamX.js";const v=({image:o,title:r,imageAlt:c,list:s,link:a,icon:d,label:p})=>{const t=document.createElement("div");t.className=["product-list-developer-card  has-unordered-list"].join(" ");const u=Object.values(s).length>0?Object.values(s).map(m=>`<li>${m}</li>`).join(""):"";return t.innerHTML=`
   <div class="card-container">
      <img src="${o}" alt="${c}">
      <div class="product-list-developer-card-content">
         <h3>${r}</h3>
          <div class="unordered-list-wrapper">
            <ul>
            ${u}
            </ul>
         </div>
          ${a?`<a href="${a}" class="btn btn-default">${p} <i class="icon-${d}"></i></a>`:""}
      </div>
   </div>`,t},b={title:"Componentes/Cards/Card Developer",tags:["autodocs"],render:({label:o,...r})=>v({label:o,...r}),argTypes:{title:{control:"text"},image:{control:{type:"file",accept:".png, .jpeg"}},imageAlt:{control:"text"},list:{control:"object"},link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"}},args:{onClick:g()}},e={args:{image:["../../../assets/img/developer-tools2.png"],imageAlt:"Developer Tools",title:"Virtual Lab",list:{1:"Build your AIoD project website using                                our free Wordpress theme",2:"Reduce costs",3:"Save time",4:" Integrate your project with the AIoD domain"},link:"#",icon:"arrow",label:"Download"}};var l,n,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    image: ["../../../assets/img/developer-tools2.png"],
    imageAlt: 'Developer Tools',
    title: "Virtual Lab",
    list: {
      "1": "Build your AIoD project website using                                our free Wordpress theme",
      "2": "Reduce costs",
      "3": "Save time",
      "4": " Integrate your project with the AIoD domain"
    },
    link: '#',
    icon: 'arrow',
    label: 'Download'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const h=["CardDeveloper"];export{e as CardDeveloper,h as __namedExportsOrder,b as default};
