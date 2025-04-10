<?php include "html_inicial.php" ?>

<main class="d-flex">
   <div class="sidebar" id="sidebar">
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
   <div class="container main-offset">
      <div class="row">
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Default</p>
            <a href="" class="btn btn-default">Know more <i class="icon-plus"></i></a>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Default Yellow</p>
            <div class="btn btn-default btn-default--yellow">Know more <i class="icon-plus"></i></div>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Scroll</p>
            <a href="#" aria-label="Scroll to Next Section" class="btn btn-primary hero-btn-scroll"><i class="icon-arrow"></i></a>
         </div>
         
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Detail</p>
            <a href="#" title="" class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></a>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Footer</p>
            <a class="mt-m-40 btn btn-secondary" href="https://www.ai4europe.eu/open-calls">Discover opportunities</a>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Subscribe</p>
            <button type="submit" class="btn btn-secondary btn-secondary--yellow">
         Subscribe <i class="icon-send"></i>
            </button>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Footer underline</p>
            <a class="btn btn-success mb-m-50" href="">About the project</a>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <p class="label">Arrow</p>
            <a href="" aria-label="Let´s develop together" class="btn-with-text btn btn-default">
               <div class="btn-circle-title">Let´s develop together</div> <i class="icon-arrow"></i>
            </a>
         </div>
         <div class="col-12 col-md-8 mt-5">
            <p class="label">Tabs</p>
            <div class="product-list-buttons">
               <div data-tab-target="#tab1" class="btn btn-blue active">Communication teams</div>
               <div data-tab-target="#tab2" class="btn btn-blue btn-disabled">Service builders</div>
               <div data-tab-target="#tab3" class="btn btn-blue btn-disabled">Service builders</div>
            </div> 
            <div class="product-list-developer active mt-5" id="tab1" data-tab-content>
               <p class="label">Tab 1</p>
            </div>
            <div class="product-list-developer mt-5" id="tab2" data-tab-content>
               <p class="label">Tab 2</p>
            </div>
            <div class="product-list-developer mt-5" id="tab3" data-tab-content>
               <p class="label"> Tab 3</p>
            </div>
         </div>

         
      </div>
   </div>
</main>
<?php include "html_final.php" ?>