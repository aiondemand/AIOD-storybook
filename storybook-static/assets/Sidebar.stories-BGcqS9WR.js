import{f as d}from"./index-Z5tTm0QU.js";const p=({variant:r})=>{const a=document.createElement("main");return a.className=["d-flex"].join(" "),a.innerHTML=`
    <div class="sidebar ${r==="collapsed"?"collapsed":""}" id="sidebar">
      <div class="menu">
      <ul>
         <li class="sidebar-link sidebar-link--active">
            <a href="#">
               <i class="icon-users"></i>
               <span>COMMUNITY</span>
            </a>
         </li>
         <li class="sidebar-link">
            <a href="#">
               <i class="icon-file-text"></i>
               <span>Press Corner</span>
            </a>
         </li>
         <li class="has-submenu open">
            <span class="menu-item sidebar-link">
            <div><i class="icon-map"></i> <span>AI NoE</span></div>
            <span class="submenu-toggle">
               <i class="icon-arrow-breadcrumb"></i>
            </span>
            </span>
            <ul class="submenu open">
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>
                     Map
                  </a>
               </li>
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>Statistics
                  </a>
               </li>
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>Topic & Applications
                  </a>
               </li>
               <li>
                  <a href=""><i class="icon-arrow-breadcrumb"></i>Information</a>
               </li>
            </ul>
         </li>
         <li class="sidebar-link">
            <a href="#">
               <i class="icon-star"></i>
               <span>Sucess Stories</span>
            </a>
         </li>
         <li class="has-submenu">
            <span class="menu-item sidebar-link">
               <div><i class="icon-forum"></i> <span>Forum</span></div>
               <span class="submenu-toggle">
                  <i class="icon-arrow-breadcrumb"></i>
               </span>
            </span>
            <ul class="submenu">
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>
                     Map
                  </a>
               </li>
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>Statistics
                  </a>
               </li>
               <li>
                  <a href="">
                     <i class="icon-arrow-breadcrumb"></i>Topic & Applications
                  </a>
               </li>
               <li>
                  <a href=""><i class="icon-arrow-breadcrumb"></i>Information</a>
               </li>
            </ul>
         </li>
      </ul>
      </div>
      <div class="sidebar-footer">
         <div class="border-top border-bottom">
            <p>Want to see your profile?</p>
            <a href="" class="btn btn-default">Go to dashboard</a>
         </div>
         <div id="collapseButton">
            <i class="icon-colapse"></i>
            <span>collapse</span>
         </div>
      </div>
   </div>
`,a},u={title:"Componentes/Sidebar",tags:["autodocs"],render:({label:r,...a})=>p({label:r,...a}),argTypes:{variant:{control:{type:"select"},options:["open","collapsed"]}},args:{onClick:d()}},s={args:{variant:"open"}},i={args:{variant:"collapsed"}};var e,l,n;s.parameters={...s.parameters,docs:{...(e=s.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    variant: 'open'
  }
}`,...(n=(l=s.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var o,c,t;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'collapsed'
  }
}`,...(t=(c=i.parameters)==null?void 0:c.docs)==null?void 0:t.source}}};const m=["sidebarOpen","sidebarCollapsed"];export{m as __namedExportsOrder,u as default,i as sidebarCollapsed,s as sidebarOpen};
