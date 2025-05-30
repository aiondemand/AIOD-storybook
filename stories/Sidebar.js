import './sidebar.css';


export const createSidebar = ({
   variant,
}) => {
   const sidebar = document.createElement('main');
   sidebar.className = ['d-flex'].join(' ');
   sidebar.innerHTML = `
    <div class="sidebar ${variant === 'collapsed' ? 'collapsed' : ''} scrollable" id="sidebar">
      <div class="sidebar-container">
         <div class="menu">
            <ul>
               <li class="sidebar-link sidebar-link--active">
                  <a href="#">
                     <i class="icon-dashboard"></i>
                     <span>Home</span>
                  </a>
               </li>
               <li class="has-submenu">
                  <span class="d-flex align-items-center justify-content-between sidebar-link">
                     <div><i class="icon-ai"></i> <span>Resources</span></div>
                     <span class="submenu-toggle">
                        <i class="icon-arrow-breadcrumb"></i>
                     </span>
                  </span>
                  <ul class="submenu">
                     <li>
                        <a href="">
                           <i class="icon-catalogue"></i>
                           Catalogue
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-about"></i>About
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-feedback"></i>Feedback
                        </a>
                     </li>
                     <li>
                        <a href=""><i class="icon-catalogue"></i>SDKs and APIs</a>
                     </li>
                     <li>
                        <a href=""><i class="icon-catalogue"></i>Educational Resources</a>
                     </li>
                  </ul>
               </li>
               <li class="has-submenu">
                  <span class="d-flex align-items-center justify-content-between sidebar-link">
                     <div><i class="icon-forum"></i> <span>Tools</span></div>
                     <span class="submenu-toggle">
                        <i class="icon-arrow-breadcrumb"></i>
                     </span>
                  </span>
                  <ul class="submenu">
                     <li>
                        <a href="">
                           <i class="icon-getting-started"></i>
                           Getting started
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-file-text"></i>Documentation
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-about"></i>Support
                        </a>
                     </li>
                  </ul>
               </li>
               <li class="has-submenu ${variant === 'submenu-open' ? 'open' : ''}">
                  <span class="d-flex align-items-center justify-content-between sidebar-link">
                     <div><i class="icon-users"></i> <span>Community</span></div>
                     <span class="submenu-toggle">
                        <i class="icon-arrow-breadcrumb"></i>
                     </span>
                  </span>
                  <ul class="submenu ${variant === 'submenu-open' ? 'open' : ''}">
                     <li>
                        <a href="">
                           <i class="icon-file-text"></i>
                           Press Corner
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-map"></i>AI Ecosystem Map
                        </a>
                     </li>
                     <!-- <li>
                        <a href="">
                           <i class="icon-star"></i>Sucess Stories
                        </a>
                     </li> -->
                     <li class="has-submenu sub-submenu ${variant === 'submenu-open' ? 'open' : ''}">
                        <a href="javascript:void(0)" class="d-flex align-items-center justify-content-between  sub-submenu-link">
                           <div><i class="icon-star"></i>Success Stories</div>
                           <span class="submenu-toggle">
                              <i class="icon-plus"></i>
                           </span>
                        </a>
                        <ul class="submenu">
                           <li>
                              <a href="">
                                 <span class="corner"></span>Success Stories
                              </a>
                           </li>
                           <li>
                              <a href="">
                                 <span class="corner"></span>Research Areas
                              </a>
                           </li>
                           <li>
                              <a href="">
                                 <span class="corner"></span>Industry and Application Areas
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-forum"></i>Forum
                        </a>
                     </li>
                     <li>
                        <a href="">
                           <i class="icon-catalogue"></i> AI Experts
                        </a>
                     </li>
                     
                  </ul>
               </li>
            </ul>
         </div>
         
         <div class="sidebar-footer">
            <div class="menu p-0">
               <ul>
                  <li class="sidebar-link sidebar-link--active">
                     <a href="#">
                        <i class="icon-grid"></i>
                        <span>Dashboard</span>
                     </a>
                  </li>
               </ul>
            </div>
         
            <div id="collapseButton">
               <i class="icon-colapse"></i>
               <span>collapse</span>
            </div>

            <div class="theme-switch-wrapper mt-0 d-flex d-lg-none">
               <label class="theme-switch" for="checkbox">
                  <input type="checkbox" id="checkbox" />
                  <div class="slider round">
                     <div class="theme-switch-icons">
                        <svg class="light-icon" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <g clip-path="url(#clip0_607_11249)">
                           <path d="M10 14.1666C12.3012 14.1666 14.1667 12.3011 14.1667 9.99992C14.1667 7.69873 12.3012 5.83325 10 5.83325C7.69882 5.83325 5.83334 7.69873 5.83334 9.99992C5.83334 12.3011 7.69882 14.1666 10 14.1666Z"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M10 0.833252V2.49992"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M10 17.5V19.1667"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M3.51666 3.5166L4.7 4.69993"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M15.3 15.3L16.4833 16.4834"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M0.833344 10H2.50001"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M17.5 10H19.1667"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M3.51666 16.4834L4.7 15.3"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           <path d="M15.3 4.69993L16.4833 3.5166"  stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                           </g>
                        </svg>

                        <svg class="dark-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M14 8.52667C13.8951 9.66147 13.4692 10.7429 12.7722 11.6445C12.0751 12.5461 11.1357 13.2305 10.0638 13.6177C8.99194 14.0049 7.83199 14.0787 6.71966 13.8307C5.60734 13.5827 4.58866 13.023 3.78281 12.2172C2.97697 11.4113 2.41729 10.3927 2.16927 9.28033C1.92125 8.16801 1.99514 7.00806 2.3823 5.9362C2.76946 4.86434 3.45388 3.92491 4.35547 3.22784C5.25706 2.53076 6.33853 2.10487 7.47333 2C6.80894 2.89884 6.48923 4.0063 6.57235 5.12094C6.65547 6.23559 7.1359 7.28337 7.92626 8.07373C8.71662 8.86409 9.76441 9.34452 10.8791 9.42765C11.9937 9.51077 13.1012 9.19106 14 8.52667Z" stroke="white" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                     </div>
                  </div>
               </label>
            </div>
         </div>
      </div>
   </div>
`
 
  
   
  return sidebar;
};



