import{f as b}from"./index-Z5tTm0QU.js";const p=({nameLabel:l,namePlaceholder:o,emailLabel:c,emailPlaceholder:n,messageLabel:i,messagePlaceholder:u,checkboxLabel:e,radioLabel:a,buttonLabel:v})=>{const s=document.createElement("form");return s.id=["customForm"],s.innerHTML=`
      <input type="hidden" name="action" value="">
      <div class="row">
         <div class="col-md-6">
            <!-- Input Text Styles -->
            <div class="form-group">
               ${l?`<label for="">${l}</label>`:""}   
               <input type="text" name="name" placeholder="${o}" id="name" class="form-control" required>
            </div>
            <div class="form-group">
               ${c?`<label for="">${c}</label>`:""}   
               <input type="email" name="email" placeholder="${n}" id="email" class="form-control" required>
            </div>
            <div class="form-group">
               ${i?`<label for="">${i}</label>`:""}   
               <textarea name="" placeholder="${u}" id="message" class="form-control" required></textarea>
            </div>
            <!-- Input Text Styles ends -->
         </div>
         <div class="col-md-6">
            <div class="row">
               <!-- Checkbox inputs -->
               <div class="col-sm-6 col-lg-4">
               <div class="form-group">
                  <input type="checkbox" name="check[]" id="check-1" value="" class="" required
                     >
                     ${e?`<label for="" class="form-check-label">${e}</label>`:""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="checkbox" name="check[]" id="check-2" value="" class="" required
                     >
                     ${e?`<label for="" class="form-check-label">${e}</label>`:""}
                     
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="checkbox" name="check-3" id="check-3" value="" class="" disabled>
                     ${e?`<label for="" class="form-check-label">${e}</label>`:""}
               </div>
               </div>
               <div class="col-sm-6 col-lg-4">
               <!-- Radio inputs -->
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-1" value="" required
                     >
                     ${a?`<label for="" class="form-check-label">${a}</label>`:""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-2" value="" required>
                     ${a?`<label for="" class="form-check-label">${a}</label>`:""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-3" value="" required disabled>
                     ${a?`<label for="" class="form-check-label">${a}</label>`:""}
               </div>
               </div>
            </div>
         </div>
      </div>

      <button type="submit" class="btn btn-primary main-btn-submit">${v}</button>

`,s},h={title:"Componentes/Form",tags:["autodocs"],render:({label:l,...o})=>p({label:l,...o}),argTypes:{buttonLabel:{control:"text"},nameLabel:{control:"text"},emailLabel:{control:"text"},messageLabel:{control:"text"},checkboxLabel:{control:"text"},radioLabel:{control:"text"},namePlaceholder:{control:"text"},emailPlaceholder:{control:"text"},messagePlaceholder:{control:"text"}},args:{onClick:b()}},r={args:{buttonLabel:"Submit Form",nameLabel:"Nome:",emailLabel:"Email:",messageLabel:"Mensagem:",checkboxLabel:"Aceitar",radioLabel:"Aceitar",namePlaceholder:"Escrever aqui...",emailPlaceholder:"Escrever aqui...",messagePlaceholder:"Escrever aqui..."}};var t,d,m;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    buttonLabel: "Submit Form",
    nameLabel: "Nome:",
    emailLabel: "Email:",
    messageLabel: "Mensagem:",
    checkboxLabel: "Aceitar",
    radioLabel: "Aceitar",
    namePlaceholder: "Escrever aqui...",
    emailPlaceholder: "Escrever aqui...",
    messagePlaceholder: "Escrever aqui..."
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const g=["form"];export{g as __namedExportsOrder,h as default,r as form};
