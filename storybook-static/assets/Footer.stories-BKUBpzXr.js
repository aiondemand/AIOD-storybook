import{f as d}from"./index-Z5tTm0QU.js";const f=({variant:t})=>{const e=document.createElement("div");return e.className=["footer-container"].join(" "),e.innerHTML=`
   <footer class="footer">
    <div class="footer-top">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12 col-lg-3 d-flex flex-wrap flex-column justify-lg-content-between mb-m-50">
            <a href="" class="d-block">
              <img src="../assets/img/logo.svg" alt="" class="logotipo-branco d-block">
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
               <div class="col-6">
                  <a class="menu-footer-links" href="">Overview</a>
               </div>
               <div class="col-6">
                  <a class="menu-footer-links" href="">community</a>
               </div>
               <div class="col-6">
                  <a class="menu-footer-links" href="">resources</a>
               </div>
               <div class="col-6">
                  <a class="menu-footer-links" href="">dashboard</a>
               </div>
               <div class="col-6">
                  <a class="menu-footer-links" href="">services</a>
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
          ${t==="homepage"?`
            <div class="col-12 offset-lg-1 col-lg-4 d-lg-flex flex-lg-column justify-content-lg-between">
               <div class="contact-us">
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
               <div class="integrate">
                  <p class="footer-title">Integrate with the aiod</p>
                  <p class="footer-subtitle">Stay current wLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
               </div>
               <a class="btn-link" href="">Don´t see your product? Click here</a>
            </div>
         `:`
          <div class="col-12 offset-lg-1 col-lg-4 d-lg-flex flex-lg-column justify-content-lg-between">
            <div class="footer-button">
               <h2>Go back to the marketing portal</h2>
               <a href="#" title="" class="btn btn-default" target="_blank">Marketing Portal <i class="icon-arrow"></i></a>
            </div>
          </div>`}

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
`,e},u={title:"Componentes/Footer",tags:["autodocs"],render:({label:t,...e})=>f({label:t,...e}),argTypes:{variant:{control:{type:"select"},options:["homepage","default"]}},args:{onClick:d()}},s={args:{variant:"homepage"}},o={args:{variant:"default"}};var a,l,i;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    variant: 'homepage'
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var r,c,n;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    variant: 'default'
  }
}`,...(n=(c=o.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};const g=["footerHomepage","footerDefault"];export{g as __namedExportsOrder,u as default,o as footerDefault,s as footerHomepage};
