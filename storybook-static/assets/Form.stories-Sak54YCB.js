import{f as i}from"./index-BDOojamX.js";const d=()=>{const l=document.createElement("div");l.className="section-experts-detail";const e=document.createElement("form");e.id=["form-expert"],e.className=["form-expert validate-form"].join(" "),e.innerHTML=`
      <input type="hidden" name="action" value="">
         <div class="row">
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" name="name" placeholder="Name*" id="name" class="form-control" required data-msg="Required field">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" name="position" placeholder="Position*" id="position" class="form-control" required="" data-msg="Required field">
               </div>
            </div>
            <div class="col-md-12">
               <div class="form-group">
                  <input type="text" name="resume-title" placeholder="Resume title*" id="resume-title" class="form-control" required="" data-msg="Required field" data-msg-maxlength="50 words max" data-rule-maxlength="50">
                  <span class="help">50 words max</span>
               </div>
            </div>
            <div class="col-md-12">
               <div class="form-group">
                  <textarea name="" placeholder="Short resume *" id="message" class="form-control" required="" data-msg="Required field" data-msg-maxlength="150 words max" data-rule-maxlength="150"></textarea>
                  <span class="help">150 words max</span>
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" name="linkedin" placeholder="LinkedIn" id="linkedin" class="form-control">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <input type="text" name="website" placeholder="Website" id="website" class="form-control">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <input type="email" name="email" placeholder="Contact email*" id="email" class="form-control" required="" data-msg-required="Required field" data-msg="Plese enter a valid email">
               </div>
            </div>
            <div class="col-md-6">
               <div class="form-group">
                  <label for="photo" class="form-control label-photo">
                     <span class="">Photo</span>
                     <i class="icon-upload"></i>
                  </label>
                  <input type="file" name="photo" placeholder="Photo" id="photo" class="form-control d-none">
               </div>
            </div>
            <div class="col-12">
               <div class="form-group">
                  <input type="text" name="expertise-keywords" placeholder="Expertise keywords*" id="expertise-keywords" class="form-control" required="" data-msg-required="Required field" data-msg="Please, enter only 5 keywords">
                  <span class="help">Descriptive of your area of expertise, max 5</span>
               </div>
            </div>
         </div>
         <div class="row mt-5">
            <div class="col-12">
               <div class="d-flex justify-content-between align-items-center flex-wrap">
                  <div class="form-group">
                     <input type="checkbox" name="privacy" id="privacy" value="" class="" required="" data-msg="Required field">
                     <label for="privacy" class="form-check-label">I have read and agree with the <a href="">Terms and Conditions</a></label>
                  </div>

                  <div class="d-flex justify-content-end">
                     <button type="submit" class="btn btn-default">Apply here <i class="icon-arrow"></i></button>
                  </div>

               </div>
            </div>
         </div>


         `;const r=document.createElement("div");return r.className="section-experts-detail",r.appendChild(e),r},n={title:"Componentes/Form",tags:["autodocs"],render:({label:l,...e})=>d({...e}),argTypes:{buttonLabel:{control:"text"},nameLabel:{control:"text"},emailLabel:{control:"text"},messageLabel:{control:"text"},checkboxLabel:{control:"text"},radioLabel:{control:"text"},namePlaceholder:{control:"text"},emailPlaceholder:{control:"text"},messagePlaceholder:{control:"text"}},args:{onClick:i()}},a={args:{buttonLabel:"Submit Form",nameLabel:"Nome:",emailLabel:"Email:",messageLabel:"Mensagem:",checkboxLabel:"Aceitar",radioLabel:"Aceitar",namePlaceholder:"Escrever aqui...",emailPlaceholder:"Escrever aqui...",messagePlaceholder:"Escrever aqui..."}};var o,t,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(s=(t=a.parameters)==null?void 0:t.docs)==null?void 0:s.source}}};const m=["form"];export{m as __namedExportsOrder,n as default,a as form};
