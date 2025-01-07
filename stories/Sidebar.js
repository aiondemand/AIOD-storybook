import './sidebar.css';


export const createSidebar = ({
   variant,
}) => {
   const sidebar = document.createElement('main');
   sidebar.className = ['d-flex'].join(' ');
   sidebar.innerHTML = `
    <div class="sidebar ${variant === 'collapsed' ? 'collapsed' : ''}" id="sidebar">
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
`
 
  
   
  return sidebar;
};



