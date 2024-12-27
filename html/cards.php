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
      <p class="label mt-5 pt-5">listing cards products</p>
      <div class="row">
         <div class="col-12 col-md-4 mt-5">
            <div class="featured-products-item">
               <img src="../assets/img/virtual-labs.svg" alt="">
               <div class="featured-products-item-title">Virtual Lab</div>
               <p>Tools for researchers. To experiment, to play, to explore datasets, ML, NLP.</p>
               <div>
                  <a href="" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <div class="featured-products-item">
               <img src="../assets/img/communities.svg" alt="">
               <div class="featured-products-item-title">Community</div>
               <p>Are you informed about the latest projects from the EC on AI and Robotics? Do you know the news about them? Events, conferences?</p>
               <div>
                  <a href="" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <div class="featured-products-item">
               <img src="../assets/img/innovations.svg" alt="">
               <div class="featured-products-item-title">Innovation</div>
               <p>More than 100 companies showcasing how AI helped them to bootstrap their busines</p>
               <div>
                  <a href="" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <div class="featured-products-item">
               <img src="../assets/img/robospot.svg" alt="">
               <div class="featured-products-item-title">Robospot</div>
               <p>Tools for robotics people. Eurocore, OpenEase</p>
               <div>
                  <a href="" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-4 mt-5">
            <div class="featured-products-item">
               <img src="../assets/img/developer-tools.svg" alt="">
               <div class="featured-products-item-title">Developer Tools</div>
               <p>How to create on top of our API, instanciate a new platform node, or extend ANYTHING you want. You will find it there</p>
               <div>
                  <a href="" class="btn btn-default">Know more <i class="icon-arrow"></i></a>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">listing cards news</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <a href="" class="card-news">
               <div class="card-news-container">
                  <div class="card-news-image">
                     <img src="../assets/img/card-image.jpeg" alt="">
                     <div class="tag-container tag-container--blue">
                        <!-- Se não tiver tag, nao renderizar esta span -->
                        <span class="tag tag--blue">Categorie here</span>
                     </div>
                  </div>
                  <div class="card-news-content">
                     <!-- <span class="category">Ai4Industry</span> -->
                     <h3>Title here </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                     <div class="date">20-01-2030</div>
                  </div>
               </div>
            </a>
         </div>
         <div class="col-12 col-md-3">
            <a href="" class="card-news">
               <div class="card-news-container">
                  <!-- Se não tiver imagen, nao renderizar esta div -->
                  <!-- <div class="card-news-image">
                     <img src="../assets/img/card-image.jpeg" alt="">
                  </div> -->
                  <div class="tag-container no-image tag-container--blue">
                        <span class="tag tag--blue">Categorie here</span>
                     </div>
                  <div class="card-news-content">
                     <!-- <span class="category">Ai4Industry</span> -->
                     <h3>Title here </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                     <div class="date">20-01-2030</div>
                  </div>
               </div>
            </a>
         </div>
      </div>
      <p class="label mt-5 pt-5">listing cards product detail</p>
      <div class="row">
         <div class="col-12">
            <div class="product-list">
               <a class="product-list-link" href="">
               <div class="row">
                  <div class="col-12 col-lg-1 offset-lg-1">
                     <span class="product-list-number">01</span>
                  </div>
                  <div class="col-12 col-lg-6">
                     <div class="product-list-title">Practitioners Portal</div>
                     <img src="../assets/img/product-dummy.png" alt="" class="d-block d-lg-none w-100 mb-m-30">
                     <p>Explore the research contents on the AI on Demand to customise your experiments</p>
                     <ul class="unordered-list">
                     <li>Explore datasets. papers, models</li>
                     <li>Generate/export code</li>
                     <li>Combine these to create and run experiments</li>
                     </ul>
                     <div class="btn btn-default btn-default--yellow">Know more <i class="icon-plus"></i></div>
                  </div>
                  <div class="col-12 col-lg-3 d-none d-lg-block">
                     <img src="../assets/img/product-dummy.png" alt="">
                  </div>
               </div>
               </a>
            </div>
         </div>
      </div>
      <p class="label mb-5 mt-5 pt-5">listing cards Developer Tools</p>
      <div class="row">
         <div class="col-12 col-md-4 mt-5 product-list-developer-container">
            <a href="" class="product-list-developer-card">
               <div class="card-container">
                  <img src="../assets/img/developer-tools1.png" alt="">
                  <div class="product-list-developer-card-content">
                     <h3>Brand Book</h3>
                     <div class="btn btn-default">Download <i class="icon-plus"></i></div>
                  </div>
               </div>
            </a>
         </div>
         <div class="col-12 col-md-4 mt-5 product-list-developer-container">
            <a href="" class="product-list-developer-card">
               <div class="card-container">
                  <img src="../assets/img/developer-tools2.png" alt="">
                  <div class="product-list-developer-card-content">
                     <h3>Stylesheet</h3>
                     <div class="btn btn-default">Download <i class="icon-plus"></i></div>
                  </div>
               </div>
            </a>
         </div>
         <div class="col-12 col-md-4 mt-5 product-list-developer-container">
            <a href="" class="product-list-developer-card has-unordered-list">
               <div class="card-container">
                  <img src="../assets/img/developer-tools2.png" alt="">
                  <div class="product-list-developer-card-content">
                     <h3>Wordpress Theme</h3>
                     <div class="unordered-list-wrapper">
                        <ul>
                           <li>
                              Build your AIoD project website using 
                              our free Wordpress theme
                           </li>
                           <li>
                              Reduce costs
                           </li>
                           <li>
                              Save time
                           </li>
                           <li>
                              Integrate your project with the AIoD domain
                           </li>
                        </ul>
                     </div>
                     <div class="btn btn-default">Download <i class="icon-plus"></i></div>
                  </div>
               </div>
            </a>
         </div>
      </div>
      <p class="label mt-5 pt-5">listing cards Developer Tools</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <a href="" class="card-news">
               <div class="card-news-container">
                  <div class="card-news-image">
                     <img src="../assets/img/card-image.jpeg" alt="">
                     <div class="tag-container">
                        <!-- Se não tiver tag, nao renderizar esta span -->
                        <span class="tag">Categorie here</span>
                     </div>
                  </div>
                  <div class="card-news-content">
                     <!-- <span class="category">Ai4Industry</span> -->
                     <h3>Title here </h3>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                     <div class="date">20-01-2030</div>
                  </div>
               </div>
            </a>
         </div>
         <div class="col-12 col-md-3">
            <div class="card-news">
               <div class="card-news-container">
                  <div class="card-news-image">
                     <img src="../assets/img/card-image.jpeg" alt="">
                     <div class="tag-container">
                     </div>
                  </div>
                  <div class="card-news-content">
                     <span class="category">Ai4Industry</span>
                     <h3>Pick Awesome Color Palette for Your App </h3>
                     <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p> -->
                     <a href="#" title="" class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></a>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-3">
            <div class="card-news">
               <div class="card-news-container">
                  <div class="card-news-image">
                     <!-- Se não tiver imagem, nao renderizar -->
                     <!-- <img src="../assets/img/card-image.jpeg" alt=""> -->
                     <!-- <div class="tag-container">
                     </div> -->
                  </div>
                  <div class="card-news-content">
                     <span class="category">Ai4Industry</span>
                     <h3>UI Design, a User-Centered Approach</h3>
                     <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p> -->
                     <a href="#" title="" class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></a>
                  </div>
               </div>
            </div>
         </div>
         <div class="col-12 col-md-3">
            <div class="card-news">
               <div class="card-news-container">
                  <div class="card-news-image">
                     <img src="../assets/img/card-image.jpeg" alt="">
                     <div class="tag-container">
                     </div>
                  </div>
                  <div class="card-news-content">
                     <!-- <span class="category">Ai4Industry</span> -->
                     <h3>Events</h3>
                     <!-- Se não tiver texto, nao renderizar este <p> -->
                     <!-- <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p> -->
                     <a href="#" title="" class="btn btn-default" target="_blank">Add News <i class="icon-arrow"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">Big Numbers</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <a href="" class="card-news card-numbers">
               <div class="card-news-container">
                  
                  <div class="card-news-content">
                     <span class="category">AI models</span>
                     <div class="numbers">
                        <h2>15791</h2>
                        <div class="btn btn-circle btn-circle--yellow">
                           <i class="icon-arrow"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </div>
      <p class="label mt-5 pt-5">Positions type 2</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <a href="" class="card-news card-numbers card-position">
               <div class="card-news-container">
                  <div class="card-news-content d-flex align-items-center justify-content-between">
                     <span class="category">video</span>
                     <div class="tag-container tag-container--blue position-relative w-auto">
                        <span class="tag tag--blue m-0">Beginer Level</span>
                     </div>
                  </div>
                  <div class="card-news-content">
                     <h3>Data Science / <br>Analytics</h3>
                     <div class="d-flex align-items-center justify-content-between">
                        <div class="date">
                           <p class="mb-0"><strong>AIDA</strong></p>
                           20-01-2030
                        </div>
                        <div class="btn btn-circle btn-circle--yellow">
                           <i class="icon-arrow"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </a>
         </div>
      </div>
      <p class="label mt-5 pt-5">serviços gerais card</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <a href="" class="card-news card-numbers card-position">
               <div class="card-news-container">
                  <div class="card-news-content d-flex align-items-center justify-content-between">
                     <span class="category">Services</span>
                  </div>
                  <div class="card-news-content mt-5">
                     <h3>Rail</h3>
                     <p>Research and Innovative <br>AI Lab</p>
                     <div class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></div>
                  </div>
               </div>
            </a>
         </div>
      </div>
      <p class="label mt-5 pt-5">serviços AIOD card
      </p>
      <div class="row">
         <div class="col-12 col-md-3">
            <div class="card-news card-numbers card-position">
               <div class="card-news-container">
                  <div class="card-news-content d-flex align-items-center justify-content-between">
                     <span class="category">Services</span>
                     <div class="tag-container tag-container--blue position-relative w-auto">
                        <span class="tag tag--blue m-0">AIoD</span>
                     </div>
                  </div>
                  <div class="card-news-content mt-5">
                     <h3>MyLibrary</h3>
                     <p>Research and Innovative <br>AI Lab</p>
                     <a href="" class="btn btn-default" target="_blank">Know more <i class="icon-arrow"></i></a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">big highlight</p>
      <div class="row">
         <div class="col-12 col-md-3">
            <div class="card-news card-numbers card-position">
               <div class="card-news-container">
                  <div class="card-news-content">
                     <span class="category mb-3">Check all available education resources</span>
                     <a href="" class="btn btn-default" target="_blank">Available for you <i class="icon-arrow"></i></a>
                  </div>
                  <div class="card-news-content mt-5 pt-5">
                     <div class="d-flex align-items-center justify-content-between">
                        <h3>Educational Resources</h3>
                        <a href="" class="btn btn-circle btn-circle--yellow">
                           <i class="icon-arrow"></i>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">card horizontal btns</p>
      <div class="row">
         <div class="col-12">
            <div class="card-news card-numbers card-position">
               <div class="card-news-container">
                  <div class="card-news-content pb-0 d-flex align-items-center justify-content-between">
                     <span class="category">665f324b2490e7270324a1fa</span>
                  </div>
                  <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
                     <div>
                        <h3>Summarization experiment</h3>
                        <div class="date">20-01-2030</div>
                     </div>
                     <div>
                        <a href="" title="" class="btn btn-default btn-default--yellow" target="_blank">Show more <i class="icon-arrow"></i></a>
                        <a href="" title="" class="btn btn-default  ms-3" target="_blank">Go to detail<i class="icon-arrow"></i></a>
                        
                     </div>

                  
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">anúncios card</p>
      <div class="row">
         <div class="col-12">
            <div class="card-news card-numbers card-position card-horizontal">
               <div class="card-news-container">
                  <div class="card-news-content mt-0 d-flex align-items-center justify-content-between">
                     <div>
                        <p>Announcements</p>
                        <div class="date">Dec 14, 2024</div>
                     </div>
                     <div class="d-flex align-items-center">
                     <div class="btn-icon">
                        <i class="icon-forum"></i>
                        <span>1,3k</span>
                     </div>
                     <div class="btn-icon">
                        <i class="icon-refresh"></i>
                        <span>44,5k</span>
                     </div>
                     </div>

                  
                  </div>
               </div>
            </div>
         </div>
      </div>
      <p class="label mt-5 pt-5">card horizontal seta</p>
      <div class="row">
         <div class="col-12">
            <div class="card-news card-numbers card-position card-horizontal">
               <div class="card-news-container">
                  <div class="card-news-content mt-0">
                     <div>
                        <p>3d Body Detection</p>
                        <div class="d-flex align-items-center justify-content-between">
                           <div class="d-flex">
                              <div class="btn-icon">
                                 <span>Type</span>
                                 <span><strong>AI Model</strong></span>
                              </div>
                              <div class="btn-icon">
                                 <span>Platform 🤗</span>
                                 <span><strong>Hugging Face</strong></span>
                              </div>
                              <div class="btn-icon">
                                 <span>Badge</span>
                                 <i class="icon-award"></i>
                                 <span><strong>Availability v1.1</strong></span>
                              </div>
                              <div class="tag-container">
                                 <span class="tag">Related Resources</span>
                              </div>
                              <div class="btn-icon">
                                 <i class="icon-clock"></i>
                                 <span>Sep 25, 2024</span>
                              </div>
                              <div class="btn-icon">
                                 <i class="icon-dollar"></i>
                                 <span>44,5k</span>
                              </div>
                              <div class="btn-icon">
                                 <i class="icon-download"></i>
                                 <span>14k</span>
                              </div>
                           </div>
                           <div class="d-flex">
                              <div class="btn btn-circle btn-circle--blue ml-2">
                                 <i class="icon-resources-saved"></i>
                              </div>
                              <div class="btn btn-circle btn-circle--yellow ml-2">
                                 <i class="icon-arrow-back"></i>
                              </div>
                           </div>
                        </div>
                     </div>

                  
                  </div>
               </div>
            </div>
         </div>
      </div>
      
   </div>
</main>
<?php include "html_final.php" ?>