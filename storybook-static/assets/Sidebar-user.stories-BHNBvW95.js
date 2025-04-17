import{f as o}from"./index-BDOojamX.js";const n=({variant:t})=>{const s=document.createElement("main");return s.className=["d-flex"].join(" "),s.innerHTML=`
   <div class="sidebar sidebar-user" id="sidebar-user">
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
`,s},c={title:"Componentes/Sidebar User",tags:["autodocs"],render:({label:t,...s})=>n({...s}),argTypes:{variant:{control:{type:"select"},options:["open","collapsed"]}},args:{onClick:o()}},e={args:{variant:"open"}};var i,a,r;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: 'open'
  }
}`,...(r=(a=e.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const l=["sidebarOpen"];export{l as __namedExportsOrder,c as default,e as sidebarOpen};
