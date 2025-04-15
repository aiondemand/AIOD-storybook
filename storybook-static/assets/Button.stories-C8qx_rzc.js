import{f as A}from"./index-BDOojamX.js";/* empty css               */const E=({variant:r="primary-yellow",link:i,icon:h,label:_,onClick:T})=>{const e=document.createElement("a");return e.href=i,e.innerHTML=_+`<i class="icon-${h}"></i> `,r==="primary"&&(e.className=["btn","btn-default"].join(" ")),r==="primary-yellow"&&(e.className=["btn","btn-default","btn-default--yellow"].join(" ")),r==="secondary"&&(e.className=["btn","btn-secondary"].join(" ")),r==="secondary-yellow"&&(e.className=["btn","btn-secondary","btn-secondary--yellow"].join(" ")),r==="underline"&&(e.className=["btn","btn-success"].join(" ")),r==="underline-blue"&&(e.className=["btn","btn-success","btn-success--blue"].join(" ")),r==="circle"&&(e.className=["btn","btn-circle","btn-circle--yellow"].join(" ")),e},M={title:"Componentes/Button",tags:["autodocs"],render:({label:r,...i})=>E({label:r,...i}),argTypes:{link:{control:"text"},icon:{control:{type:"select"},options:["arrow","plus","send","arrow-back","resources-saved"]},label:{control:"text"},variant:{control:{type:"select"},options:["primary","primary-yellow","secondary","secondary-yellow","underline","circle","circle-yellow"]}},args:{onClick:A()}},a={args:{variant:"primary",icon:"arrow",label:"Know more"}},n={args:{variant:"primary-yellow",icon:"plus",label:"Know more"}},o={args:{variant:"secondary",label:"Know more"}},s={args:{variant:"secondary-yellow",icon:"send",label:"Know more "}},c={args:{variant:"underline",label:"Know more"}},l={args:{variant:"underline-blue",label:"About the project"}},t={args:{variant:"circle",label:"",icon:"arrow"}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    icon: 'arrow',
    label: 'Know more'
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,y,b;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'primary-yellow',
    icon: 'plus',
    label: 'Know more'
  }
}`,...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var w,g,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Know more'
  }
}`,...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var S,v,K;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'secondary-yellow',
    icon: 'send',
    label: 'Know more '
  }
}`,...(K=(v=s.parameters)==null?void 0:v.docs)==null?void 0:K.source}}};var j,N,B;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    variant: 'underline',
    label: 'Know more'
  }
}`,...(B=(N=c.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var C,k,x;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: 'underline-blue',
    label: 'About the project'
  }
}`,...(x=(k=l.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var P,U,Y;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'circle',
    label: '',
    icon: 'arrow'
  }
}`,...(Y=(U=t.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const O=["Primary","PrimaryYellow","Secondary","SecondaryYellow","Underline","UnderlineBlue","Circle"];export{t as Circle,a as Primary,n as PrimaryYellow,o as Secondary,s as SecondaryYellow,c as Underline,l as UnderlineBlue,O as __namedExportsOrder,M as default};
