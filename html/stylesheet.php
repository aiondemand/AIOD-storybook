<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Stylesheet LOBA</title>

  <!-- Website icons -->
  <link href="../assets/img/favicon-192x192.png" rel="icon" sizes="192x192">
  <link href="../assets/img/favicon-180x180.png" rel="apple-touch-icon" sizes="180x180">

  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700|Open+Sans:300,400,700" rel="stylesheet">

  <!-- inject:css -->
  <link rel="stylesheet" href="../assets/css/main.css">
  <!-- endinject -->

  <style>
  .grid div[class^="col-"] div {
    height: 30px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
  }
  </style>

  <script>
  var analyticsCode = 'UA-119956680-1';
  var fbPixelCode = '944308468939832'; // Facebook Pixel tracking ID
  </script>
</head>

<body>

  <br><br>

  <div class="text-center">
    <img src="../assets/img/loba-dark.svg" alt="">
  </div>

  <br><br>

  <div class="container">

    <div class="grid-stylesheet">
      <!-- Colors -->
      <section class="colors">
        <h6>colors</h6>
        <div class="palette main">
          <div class="palette__main"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <h5>Primary</h5>
        </div>
        <div class="palette secondary">
          <div class="palette__main"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <h5>Secondary</h5>
        </div>
        <div class="palette neutrals">
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <div class="palette__shade"></div>
          <h5>Neutrals</h5>
        </div>
      </section>

      <!-- Typography -->
      <section class="typography">
        <h6>typography</h6>
        <div class="font-family">
          <div class="font-family-bold">
            <h1>Aa</h1>
            <h4>Montserrat Bold</h4>
          </div>
          <div class="font-family-medium">
            <h1>Aa</h1>
            <h4>Montserrat Medium</h4>
          </div>
          <div class="font-family-light">
            <h1>Aa</h1>
            <h4>Montserrat Light</h4>
          </div>
        </div>
        <div class="font-example">
          <div class="font-example__headline">
            <h6 class="subheader">Headlines</h6>
            <h1>h1 headline</h1>
            <h2>h2 headline</h2>
            <h3>h3 headline</h3>
            <h4>h4 headline</h4>
            <h5>h5 headline</h5>
            <h6>h6 headline</h6>
          </div>
          <div class="font-example__bodytext">
            <h6 class="subheader">Body Text - <em>Open-sans</em></h6>
            <p>I think we need to start from scratch. Jazz it up a little bit- use a funky color like purple.</p>
            <p><strong> Can you add a bit of pastel pink and baby blue because the purple alone looks too
                fancy.</strong></p>
            <p><em> Make the purple more well, purple-er. Try a more powerful colour, it needs to be the same, but
                totally different.</em></p>
          </div>
        </div>
      </section>

      <!-- Buttons -->
      <section class="buttons-wrapper">
        <h6>Buttons</h6>
        <div class="buttons">
          <button class="btn btn-default">Button</button>
          <input type="button" class="btn" value="Input" />
          <a href="" class="btn btn-primary">&lt;a&gt; tag</a>
          <span class="btn btn-secondary">&lt;span&gt; tag</span>
          <div class="clearfix"><br></div>
          <button class="btn btn-default btn-xs">Button</button>
          <button class="btn">Button</button>
          <button class="btn btn-primary btn-sm">Button</button>
          <button class="btn btn-secondary btn-lg">Button</button>
          <button class="btn btn-secondary btn-xl">Button</button>
          <div class="clearfix"></div>
          <div>
            <br>
            <div>
              <button class="btn btn-default btn-block">Medium Button</button>
            </div>
            <br>
            <button class="change-cookies">Alterar preferências de cookies</button>
      </section>

      <!-- Links -->
      <section class="links">
        <h6>Links</h6>
        <div class="links__sec">
          <a class="link">Sample Link</a>
          <br />
          <a class="link hover">Hovered Link</a>
        </div>
      </section>

      <!-- Forms -->
      <section class="inputs-selects">
        <h6>Forms Validation, Inputs & Selects</h6>
        <!-- RECAPTCHA -->
        <?php $BO_RECAPTCHA_SITEKEY = '6LcnPFIUAAAAAAO0g6GQ-3G6GpuKDxOTdaM8HyHn' ?>

        <form id="customForm" class="validate-form">
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

      </section>

      <!-- Badges -->
      <section class="badges">
        <h6>responsive images</h6>
        <!-- 
						RESPONSIVE IMAGES
						until resolution 767px loads first image
						until resolution 991px loads second image
						992px forward loads third image
						may vary accordingly the pixel density
						srcset parameters must match sizes parameters
					 -->
        <img srcset="http://www.dummyimage.com/320x100 767w,
								  http://www.dummyimage.com/480x230 991w,
								  http://www.dummyimage.com/800x350" sizes="(max-width: 767px) 767px, (max-width: 991px) 991px, 992px"
          src="http://www.dummyimage.com/800x350" alt="Elva dressed as a fairy" style="max-width: 100%;">
      </section>

      <!-- Alerts -->
      <section class="alerts">
        <h6>Alerts</h6>
        <div class="warnings warnings--show">
          <p class="warnings__success">Mensagem enviada com sucesso. Obrigado.</p>
          <p class="warnings__error">Preencha o formulário corretamente.</p>
        </div>
      </section>

      <!-- Favicons -->
      <section class="favicons">
        <h6>favicons</h6>
        <div class="row">
          <div class="col-sm-6">
            <!-- Image for Favicon -->
            <img src="../assets/img/favicon-192x192.png" alt="">
          </div>
          <div class="col-sm-6">
            <!-- Image for Apple Touch Icon -->
            <img src="../assets/img/favicon-180x180.png" alt="">
          </div>
        </div>
      </section>

      <!-- Grid -->
      <section class="grid-layout">
        <h6>grid</h6>
        <div class="row grid">
          <div class="col-12">
            <div></div>
          </div>
          <div class="col-6">
            <div></div>
          </div>
          <div class="col-6">
            <div></div>
          </div>
          <div class="col-4">
            <div></div>
          </div>
          <div class="col-4">
            <div></div>
          </div>
          <div class="col-4">
            <div></div>
          </div>
          <div class="col-3">
            <div></div>
          </div>
          <div class="col-3">
            <div></div>
          </div>
          <div class="col-3">
            <div></div>
          </div>
          <div class="col-3">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-2">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
          <div class="col-1">
            <div></div>
          </div>
        </div>
      </section>

    </div>

    <div class="text-center">
      <br>
      <small>https://codepen.io/oliviale/pen/mgWjpq</small>
      <br>
      <br>
    </div>

  </div>

  <br><br>

  <!-- Slider main container -->
  <div class="swiper-container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div class="swiper-slide">
        <img src="https://placebear.com/800/600" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="https://placebear.com/g/800/600" alt="" />
      </div>
      <div class="swiper-slide">
        <img src="https://placebear.com/800/600" alt="" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>


  <!-- Cookies -->
  <div class="cookies-wrapper">
    <div class="cookies-box">
      <div class="container">
        <div class="cookies__title">Definições de Cookies</div>
        <div class="cookies-description">
          <p class="cookies-bar-message">A <b>NOME DA EMPRESA</b> pode utilizar cookies para memorizar os seus dados de
            início de sessão, recolher estatísticas para otimizar a funcionalidade do site e para realizar ações de
            marketing com base nos seus interesses.</p>
          <div class="row">
            <div class="col-sm-6 order-2 cookies-settings-link">
              <button class="btn btn-default">Preferências de Cookies</button>
            </div>
            <div class="col-sm-6 order-1">
              <button class="btn btn-primary btn-block" id="accept-cookie">Sim, aceito</button>
            </div>
          </div>
        </div>
        <div class="cookies-settings">
          <div class="row">
            <div class="col-12 col-sm-7">
              <div class="form-group">
                <input type="checkbox" name="cookie-radio" disabled id="cookie-required" value="required" checked><label
                  for="cookie-required" class="form-check-label" style="pointer-events: none">Cookies estritamente
                  necessários</label>
                <div class="clearfix"></div>
                <small class="cookie-info">
                  Estes cookies são essenciais para fornecer serviços disponíveis no nosso site e permitir que possa
                  usar determinados recursos no nosso site.
                </small>
              </div>
              <div class="clearfix"></div>
              <div class="form-group">
                <input type="checkbox" name="cookie-radio" id="cookie-functional" value="functional"><label
                  for="cookie-functional" class="form-check-label" style="pointer-events: none">Cookies de
                  funcionalidade</label>
                <div class="clearfix"></div>
                <small class="cookie-info">
                  Estes cookies são usados ​​para fornecer uma experiência mais personalizada no nosso site e para
                  lembrar as escolhas que faz ao usar o nosso site.
                </small>
              </div>
              <div class="clearfix"></div>
              <div class="form-group">
                <input type="checkbox" name="cookie-radio" id="cookie-analytical" value="analytical"><label
                  for="cookie-analytical" class="form-check-label">Cookies de medição e desempenho</label>
                <div class="clearfix"></div>
                <small class="cookie-info">
                  Estes cookies são usados ​​para coletar informações para analisar o tráfego no nosso site e entender
                  como é que os visitantes estão a usar o nosso site.
                </small>
              </div>
            </div>
            <div class="col-12 col-sm-5 cookies-message">
              <p data-id="cookie-required" style="display: block;">
                <b>Cookies estritamente necessários</b>
                Estes cookies são essenciais para fornecer serviços disponíveis no nosso site e permitir que possa usar
                determinados recursos no nosso site.
                Sem estes cookies, não podemos fornecer certos serviços no nosso site.
              </p>
              <p data-id="cookie-functional">
                <b>Cookies de funcionalidade</b>
                Estes cookies são usados ​​para fornecer uma experiência mais personalizada no nosso site e para lembrar
                as escolhas que faz ao usar o nosso site.
                Por exemplo, podemos usar cookies de funcionalidade para se lembrar das suas preferências de idioma e/
                ou os seus detalhes de login.
              </p>
              <p data-id="cookie-analytical">
                <b>Cookies de medição e desempenho</b>
                Estes cookies são usados ​​para coletar informações para analisar o tráfego no nosso site e entender
                como é que os visitantes estão a usar o nosso site.
                Por exemplo, estes cookies podem medir fatores como o tempo despendido no site ou as páginas visitadas,
                isto vai permitir entender como podemos melhorar o nosso site para os utilizadores.
                As informações coletadas por meio destes cookies de medição e desempenho não identificam nenhum
                visitante individual.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <button class="btn btn-primary" id="submit-preferences">Submeter Preferências</button>
            </div>
            <div class="col-sm-6 cookies-settings-cancel">
              <button class="btn btn-default">Cancelar</button>
            </div>
          </div>
        </div>
        <div class="cookies-policy-link">
          <a href="" rel="nofollow" class="cookies-bar-know-more" title="Política de Privacidade"
            target="_blank">Política
            de Privacidade</a>
        </div>
      </div>
    </div>
  </div>
  <!-- Cookies ends -->

  <!-- RECAPTCHA -->
  <script src="https://www.google.com/recaptcha/api.js"></script>

  <!-- inject:js -->
  <script src="../assets/js/app.js" defer></script>
  <!-- endinject -->

</body>

</html>