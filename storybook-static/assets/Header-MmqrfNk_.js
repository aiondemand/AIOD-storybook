/* empty css               */const n=({user:s,onLogout:o,onLogin:i,onCreateAccount:a})=>{const e=document.createElement("header");return e.id="header",e.innerHTML=`
  <div class="container-fluid">
        	<div class="row">
            <div class="col-12">
               <div class="header-nav">
                  <div class="header-nav-logo">
                     <a href="index.php"><img src="../assets/img/logo.svg" alt="" class="logotipo"><img src="../assets/img/logo-cinza.svg" alt="" class="logotipo-grey d-none"></a>
                     <div class="icon-header">
                        <a href="#" class="header-items-icon search-mobile toggle-modal" data-modalContainer="search-popup">
                           <i class="icon-search"></i>
                        </a>
                        <div id="open-mobile-menu">
                           <div class="hamburguer d-lg-none d-xl-none">
                              <span></span>
                           </div>
                           <div class="hamburguer-close d-lg-none d-xl-none">
                              <span></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div id="header-items">
                     <ul class="main-menu">   
                        <li class="menu">
                           <div class="menu-link-mobile">
                              <a class="menu-link" href="#">About <i class="icon-arrow d-block d-lg-none"></i></a>
                              
                           </div>
                        </li>
                        <li class="menu">
                           <div class="menu-link-mobile has-submenu">
                              <a class="menu-link">Services <i class="icon-arrow d-block d-lg-none"></i></a>
                           </div>
                           <div class="sub-menu d-flex flex-column">
                              <ul>
                                 <li>
                                    <a href="#">
                                       <span>AI Builder</span>
                                       <p>Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.</p>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <span>RAIL</span>
                                       <p>More than 100 companies showcasing how AI helped them to bootstrap their busines</p>
                                    </a>
                                 </li>
                                 <li>
                                    <a href="#">
                                       <span>RoboCompass</span>
                                       <p>Are you informed about the latest projects from the EC on AI and Robotics?</p>
                                    </a>
                                 </li>
                                 <li class="highlight">
                                    <a href="#">
                                       <span>Integrate <br>Your Service</span>
                                       <p>Tools for robotics people. <br>
                                       Eurocore, OpenEase</p>
                                    </a>
                                 </li>
                              </ul>
                              <a class="mt-4 btn btn-secondary" href="">See all services</a>
                           </div>
                        </li>
                        <li class="menu">
                           <div class="menu-link-mobile">
                              <a class="menu-link" href="#">Develop <i class="icon-arrow d-block d-lg-none"></i></a>
                           </div>
                        </li>
                     </ul>
                    
                  </div>
                  <div class="d-flex flex-lg-row menu-right">
                        <a href="" class="btn btn btn-circle btn-circle--blue btn-search ml-2"><i class="icon-lupa"></i></a>
                        ${s?`<div class="user-avatar">
                           <a href="" class="btn btn btn-circle btn-user ml-2">
                              <img src="../assets/img/user-image.jpeg" alt="">
                              <span class="notifications">1</span>
                           </a>
                           <span>${s.name}</span>
                        </div>`:'<a href="undefined" class="btn btn-default btn-user">Log In</a>'}
                        <div class="theme-switch-wrapper">
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
			</div>
		</div>`,e};export{n as c};
