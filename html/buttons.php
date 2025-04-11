<?php include "html_inicial.php" ?>

<main class="d-flex">
   <?php include "sidebar.php"; ?>
   <?php include "sidebar-user.php"; ?>
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
      <div class="row homepage">
         <div class="offset-lg-1 col-lg-11 section-faqs">
            <div class="accordion" id="accordionFaqs">
               <div class="accordion-item mb-3">
               <h3 class="accordion-header d-flex justify-content-between align-items-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                     Click here to View all latest Workshops, Trainings
                     <span class="icon-container"><i class="icon-arrow-down"></i></span>
                  </button>

                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFaqs">
                     <div class="accordion-body pt-3">
                     <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                     </div>
                  </div>
               </div>
               <div class="accordion-item mb-3">
               <h3 class="accordion-header d-flex justify-content-between align-items-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                     Click here to View popular Datasets, models
                     <span class="icon-container"><i class="icon-arrow-down"></i></span>
                  </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFaqs">
                     <div class="accordion-body pt-3">
                     <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                     </div>
                  </div>
               </div>
               <div class="accordion-item mb-3">
               <h3 class="accordion-header d-flex justify-content-between align-items-center">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                     Click here to View all latest AI popular services
                     <span class="icon-container"><i class="icon-arrow-down"></i></span>
                  </button> </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFaqs">
                     <div class="accordion-body pt-3">
                     <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</main>
<?php include "html_final.php" ?>