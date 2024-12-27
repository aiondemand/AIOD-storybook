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
         <div class="col-12">
            <p class="label mt-5 pt-5">Form</p>
            <form id="customForm">
               <input type="hidden" name="action" value="">
               <div class="warnings">
               <p class="warnings__success">Mensagem enviada com sucesso. Obrigado.</p>
               <p class="warnings__error">Preencha o formulário corretamente.</p>
               </div>

               <div class="row">
                  <div class="col-md-6">
                     <!-- Input Text Styles -->
                     <div class="form-group">
                        <label for="">Name:</label>
                        <input type="text" name="name" placeholder="Input text..." id="name" class="form-control" required
                        data-msg="O campo é obrigatório">
                     </div>
                     <div class="form-group">
                        <label for="">Email:</label>
                        <input type="email" name="email" placeholder="Input text..." id="email" class="form-control" required
                        data-msg="Por favor, insira um campo de email válido" data-msg-required="Campo obrigatório">
                     </div>
                     <div class="form-group">
                        <label for="">Message:</label>
                        <textarea name="" placeholder="Input text..." id="message" class="form-control" required
                        data-msg="Campo de preenchimento obrigatório"
                        data-msg-minlength="Deverá escrever pelo menos 100 carateres" data-rule-minlength="100"></textarea>
                     </div>
                     <!-- Input Text Styles ends -->
                  </div>
                  <div class="col-md-6">
                     <div class="form-group">
                        <label for="location">Please select a location</label>
                        <div class="custom-select-option">
                        <select name="location" id="location" class="form-control" required
                           data-msg="Campo de preenchimento obrigatório">
                           <option value="">Select a location</option>
                           <option value="Portugal">Portugal</option>
                           <option value="Oliveira de Azeméis">Oliveira de Azeméis</option>
                           <option value="LOBA">LOBA</option>
                           <option value="Portugal">Portugal</option>
                           <option value="Portugal">Oliveira de Azeméis</option>
                           <option value="Portugal">LOBA</option>
                           <option value="Portugal">Portugal</option>
                           <option value="Portugal">Oliveira de Azeméis</option>
                           <option value="Portugal">LOBA</option>
                           <option value="Portugal">Portugal</option>
                           <option value="Portugal">Oliveira de Azeméis</option>
                           <option value="Portugal">LOBA</option>
                        </select>
                        </div>
                     </div>
                     <!-- <div class="form-group">
                        <label for="file">Please select a location</label>
                        <div class="custom-file">
                        <label for="file" class="custom-file__mask">Select file</label>
                        <input type="file" name="file" id="file" class="form-control" multiple data-label="Select file"
                           data-selected="%s files selected" required data-msg="Campo obrigatório">
                        </div>
                     </div> -->
                     <div class="row">
                        <!-- Checkbox inputs -->
                        <div class="col-sm-6 col-lg-4">
                        <div class="form-group">
                           <input type="checkbox" name="check[]" id="check-1" value="" class="" required
                              data-msg="este campo é obrigatório"><label for="" class="form-check-label">Checkbox Input</label>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                           <input type="checkbox" name="check[]" id="check-2" value="" class="" required
                              data-msg="este campo é obrigatório"><label for="" class="form-check-label">Checkbox Input</label>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                           <input type="checkbox" name="check-3" id="check-3" value="" class="" disabled><label for=""
                              class="form-check-label">Checkbox Input</label>
                        </div>
                        </div>
                        <div class="col-sm-6 col-lg-4">
                        <!-- Radio inputs -->
                        <div class="form-group">
                           <input type="radio" name="radio" id="radio-1" value="" required
                              data-msg="este campo é obrigatório"><label for="" class="form-check-label">Radio Input</label>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                           <input type="radio" name="radio" id="radio-2" value="" required><label for=""
                              class="form-check-label">Radio Input</label>
                        </div>
                        <div class="clearfix"></div>
                        <div class="form-group">
                           <input type="radio" name="radio" id="radio-3" value="" required disabled><label for=""
                              class="form-check-label">Radio Input</label>
                        </div>
                        </div>
                     </div>
                  </div>
               </div>

               <!-- if there is no rgpd pop up but a checkbox to accept the terms -->
               <!-- <button class="btn btn-primary open-rgpd">Test Form Validation</button> -->

               <!-- if there is an rgpd pop up and yes, a checkbox to accept the terms -->
               <button type="submit" class="btn btn-primary main-btn-submit">Test Form Validation</button>



               <div class="rgpd">
               <h4 class="rgpd__title">Processing my personal data</h4>
               <p>I authorize <b>Company</b> to store the data I have provided for the purpose of responding to my contact
                  request. The information I am providing will be stored in accordance with our <a href="" title="">Privacy
                     Policy</a> and with data protection regulations.</p>
               <button class="btn btn-outline reject-rgpd">Refuse</button>


               <!-- if there is an rgpd pop up and yes, a checkbox to accept the terms -->
               <!-- <button class="btn btn-primary">Accept</button> -->

               <!-- if there is no rgpd pop up but a checkbox to accept the terms -->
               <button type="submit" id="btn-submit" class="btn btn-primary g-recaptcha" data-sitekey="<?php echo $BO_RECAPTCHA_SITEKEY ?>" data-callback="recaptchaData" data-action="submit">Accept</button>
               </div>
            </form>
         </div>
      </div>
   
   </div>
</main>

<?php include "html_final.php" ?>