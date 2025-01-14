import{f as B}from"./index-Z5tTm0QU.js";/* empty css               */const _=({variant:e="primary-yellow",link:t,icon:P,label:Y,onClick:E})=>{const r=document.createElement("a");return r.href=t,r.innerHTML=Y+`<i class="icon-${P}"></i> `,e==="primary"&&(r.className=["btn","btn-default"].join(" ")),e==="primary-yellow"&&(r.className=["btn","btn-default","btn-default--yellow"].join(" ")),e==="secondary"&&(r.className=["btn","btn-secondary"].join(" ")),e==="secondary-yellow"&&(r.className=["btn","btn-secondary","btn-secondary--yellow"].join(" ")),e==="underline"&&(r.className=["btn","btn-success"].join(" ")),e==="circle"&&(r.className=["btn","btn-circle","btn-circle--yellow"].join(" ")),r},h={title:"Componentes/Button",tags:["autodocs"],render:({label:e,...t})=>_({label:e,...t}),argTypes:{link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"},variant:{control:{type:"select"},options:["primary","primary-yellow","secondary","secondary-yellow","underline","circle","circle-yellow"]}},args:{onClick:B()}},a={args:{variant:"primary",icon:"arrow",label:"Know more"}},o={args:{variant:"primary-yellow",icon:"plus",label:"Know more"}},n={args:{variant:"secondary",label:"Know more"}},s={args:{variant:"secondary-yellow",icon:"send",label:"Know more "}},c={args:{variant:"underline",label:"Know more"}},l={args:{variant:"circle",label:"",icon:"arrow"}};var i,m,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'arrow',
    label: 'Know more'
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,y,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary-yellow',
    icon: 'plus',
    label: 'Know more'
  }
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var w,b,g;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Know more'
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var f,K,S;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary-yellow',
    icon: 'send',
    label: 'Know more '
  }
}`,...(S=(K=s.parameters)==null?void 0:K.docs)==null?void 0:S.source}}};var v,j,N;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    label: 'Know more'
  }
}`,...(N=(j=c.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var C,k,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    label: '',
    icon: 'arrow'
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Primary","PrimaryYellow","Secondary","SecondaryYellow","Underline","Circle"];export{l as Circle,a as Primary,o as PrimaryYellow,n as Secondary,s as SecondaryYellow,c as Underline,H as __namedExportsOrder,h as default};
