<footer class="footer">
   <div class="footer-top">
   <div class="container-fluid">
      <div class="row">
         <div class="col-12 col-lg-3 d-flex flex-wrap flex-column justify-lg-content-between mb-m-50">
         <a href="" class="d-block">
            <img src="../assets/img/logo-white.svg" alt="" class="logotipo-branco d-block">
            <img src="../assets/img/logo-cinza.svg" alt="" class="logotipo-cinza d-none">

         </a>
         <a class="btn btn-success mt-5" href="">For developers</a>
         <a class="btn btn-success btn-success--blue mt-3" href="">About the project</a>

         <div class="flag-container mt-5">
            <img src="../assets/img/flag.svg" class="flag" alt="">
            <img src="../assets/img/flag-black.svg" class="flag-black d-none" alt="">
         </div>
         </div>
         <div class="col-12 col-lg-4 d-flex flex-wrap flex-lg-column justify-content-between align-items-center align-items-lg-start">
         <div class="menu-footer row">
            <div class="col-4 text-center ">
               <a class="menu-footer-links" href="">Resources</a>
            </div>
            <div class="col-4 text-center ">
               <a class="menu-footer-links" href="">Tools</a>
            </div>
            <div class="col-4 text-center ">
               <a class="menu-footer-links" href="">Community</a>
            </div>
         </div>
         <form id="customForm" class="validate-form newsletter-form">
            <p class="newsletter-title footer-title">Subscribe</p>
            <p class="newsletter-subtitle footer-subtitle">Stay current with all things AIoD</p>
            <div class="newsletter-input">
               <div class="form-group">
                  <input type="email" name="email" placeholder="Email" id="email" class="form-control" required
                  data-msg="Por favor, insira um campo de email válido" data-msg-required="Campo obrigatório">
               </div>
               <button type="submit" class="btn btn-secondary btn-secondary--yellow">
                  Subscribe <i class="icon-send"></i></i>
               </button>
            </div>
         </form>
         
         </div>
         <div class="col-12 offset-lg-1 col-lg-4 d-lg-flex flex-lg-column justify-content-lg-between column-show flex-column">
         <div class="d-flex">
            <div class="contact-us mt-3 w-50">
               <p class="footer-title">Follow us</p>
               <div class="footer-top-social mb-m-50">
                  <a href="">
                     <i class="icon-twitter"></i>
                  </a>
                  <a href="">
                     <i class="icon-linkedin"></i>
                  </a>
                  <a href="">
                     <i class="icon-youtube"></i>
                  </a>
               </div>
            </div>
            <div class="contact-us contact-us-mail mt-3 w-50">
               <p class="footer-title">Contact us</p>
               <a href="mailto:info@aiod.eu">info@aiod.eu</a>
            </div>
         </div>
         
         <div class="integrate">
            <p class="footer-title">Integrate with the aiod</p>
            <p class="footer-subtitle">Stay current wLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
         </div>
         <a class="btn-link" href="">Don´t see your product? Click here</a>
         </div>
      </div>
   </div>
   </div>
</footer>
<div class="footer-bottom">
   <div class="container-fluid">
      <div class="row">
      <div class="col-12 d-flex flex-column flex-lg-row align-items-center justify-content-between">
         <p class='footer-bottom-title'>©2023 All Rights Reserved AIoD</p>
         <ul class="footer-bottom-list flex-wrap">
            <li>
               <a href="">Privacy Policy</a>
               <span>|</span>
            </li>
            <li>
               <a href="">Responsible Disclosure</a>
               <span>|</span>
            <li>
            <li>
               <a href="">Terms of use</a>
            </li>
         </ul>
         <a href="#"><img src="../assets/img/loba.svg" class="loba-logo" alt=""></a>
         </div>
      </div>
   </div>
</div>


<!-- Cookies -->
<div class="cookies__wrapper modal fade" id="cookiesModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="cookiesTitle" aria-hidden="true">
  <div class="cookies__box modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title h4 fw-bold" id="cookiesTitle">🍪 Our website uses cookies</div>
      </div>
      <div class="modal-body">
        <div class="cookies__description">
          <p class="cookies__message mb-4 mt-2">
          Our website uses cookies to improve your browsing experience on our website. By continuing to browse this website, the user is expressly agreeing to the placement of cookies on their computer that allow measuring visit statistics and improving the quality of the content offered. <button class="btn btn-link cookies__settings-link">Cookies Preferences</button>.
          </p>
          <div class="row row-cols-1 row-cols-sm-2 gy-2">
            <div class="col">
              <button class="btn btn-primary btn-block py-2 cookies__accept">Accept All</button>
            </div>
            <div class="col">
              <button class="btn btn-primary btn-block py-2 cookies__deny">Accept just necessary</button>
            </div>
          </div>
        </div>
        <div class="cookies__settings d-none">
          <fieldset class="mb-4">
            <legend class="visually-hidden">Enable or disable your cookies preferences</legend>
            <div class="accordion" id="cookieAccordion">
              <?php
              $cookies = [
                'required' => [
                  'label' => 'Strictly Necessary Cookies',
                  'description' => 'These cookies are essential to provide services available on our website and allow you to use certain features on our website. Without these cookies, we cannot provide certain services on our website.'
                ],
                'functionality' => [
                  'label' => 'Functionality cookies',
                  'description' => 'These cookies are used to provide you with a more personalized experience on our website and to remember the choices you make when using our website. For example, we may use functionality cookies to remember your language preferences and/or your login details.'
                ],
                'personalization' => [
                  'label' => 'Personalization cookies',
                  'description' => 'These cookies are used to recognize visitors when they return to our website. This allows us to personalize the content of the site for you, greet you by name, and remember your preferences.'
                ],
                'security' => [
                  'label' => 'Security cookies',
                  'description' => 'These cookies are used to protect the security of our website and your data. This includes cookies that are used to enable you to log into secure areas of our website.'
                ],
                'analytics' => [
                  'label' => 'Measurement and performance cookies',
                  'description' => 'These cookies are used to collect information to analyze traffic on our website and understand how visitors are using our website. For example, these cookies can measure factors such as time spent on the site or pages visited, this will allow us to understand how we can improve our site for users. The information collected through these measurement and performance cookies does not identify any individual visitor.'
                ],
                'ad' => [
                  'label' => 'Advertising cookies',
                  'description' => "These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator's permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to site functionality provided by the other organization."
                ]
              ];
              foreach ($cookies as $key => $cookie) {
              ?>
                <div class="accordion-item">
                  <div class="accordion-header position-relative">
                    <button class="accordion-button collapsed fw-bold" type="button" data-toggle="collapse" data-target="#cookieCollapse-<?= $key ?>" aria-expanded="false" aria-controls="cookieCollapse-<?= $key ?>">
                      <i class="icon-arrow"></i><?= $cookie['label'] ?>
                    </button>
                    <div class="form-check form-switch form-control-lg">
                      <label for="cookie-<?= $key ?>" class="form-check-label visually-hidden"><?= $cookie['label'] ?></label>
                      <input type="checkbox" name="cookie-radio" id="cookie-<?= $key ?>" value="<?= $key ?>" class="form-check-input m-0" <?= $key == 'required' ? 'disabled checked' : '' ?>>
                    </div>
                  </div>
                  <div id="cookieCollapse-<?= $key ?>" data-parent="#cookieAccordion" class="accordion-collapse collapse">
                    <div class="accordion-body">
                      <p class="mb-0">
                        <?= $cookie['description'] ?>
                      </p>
                    </div>
                  </div>
                </div>
              <?php } ?>
            </div>
          </fieldset>
          <div class="row row-cols-1 row-cols-sm-2 gy-2">
            <div class="col">
              <button class="btn btn-primary py-2 cookies__submit">Submit</button>
            </div>
            <div class="col text-sm-end">
              <button class="btn btn-outline-default py-2 cookies__cancel">Cancel</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer justify-content-center py-1">
        <a href="#" rel="nofollow" class="cookies__know-more text-decoration-none" target="_blank"><small>Política de Privacidade</small></a>
      </div>
    </div>
  </div>
</div>
<!-- Cookies ends -->

  <!-- inject:js -->
      <script src="../assets/js/app.js" defer></script>
      <!-- endinject -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

  <script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>

  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>


  </body>

  </html>

  