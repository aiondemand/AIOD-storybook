import{f as l}from"./index-BDOojamX.js";const p=({variant:r})=>{const s=document.createElement("main");return s.className=["d-flex"].join(" "),s.innerHTML=`
   <div class="sidebar sidebar-user ${r==="collapsed"?"collapsed":""}" id="sidebar-user">
      <div class="menu">
         <ul>
            <li class="sidebar-link">
               <a href="#">
                  <i class="icon-settings"></i>
                  <span>Settings</span>
               </a>
            </li>
            <li class="sidebar-link">
               <a href="#">
                  <i class="icon-notifications"></i>
                  <span>Notifications</span>
               </a>
               <span class="notifications">1</span>
            </li>
         </ul>
      </div>
      <div class="sidebar-footer">
         <div class="border-bottom">
            <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
         </div>
         <div class="border-bottom">
            <p class="mb-0 text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
         </div>
         <div class="border-bottom">
            <p class="mb-0 text-grey">Sed do eiusmod tempor incididunt ut labore et dolore </p>
         </div>
         <div class="border-bottom">
            <a class="btn btn-success btn-success--blue mt-3 w-100" href="">Sign Out</a>
         </div>
      </div>
   </div>
`,s},b={title:"Componentes/Sidebar User",tags:["autodocs"],render:({label:r,...s})=>p({...s}),argTypes:{variant:{control:{type:"select"},options:["open","collapsed"]}},args:{onClick:l()}},e={args:{variant:"open"}},a={args:{variant:"collapsed"}};var i,o,t;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'open'
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};var n,d,c;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    variant: 'collapsed'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const u=["sidebarOpen","sidebarCollapsed"];export{u as __namedExportsOrder,b as default,a as sidebarCollapsed,e as sidebarOpen};
