import './form.css';


export const createForm = ({
   nameLabel,
   namePlaceholder,
   emailLabel,
   emailPlaceholder,
   messageLabel,
   messagePlaceholder,
   checkboxLabel,
   radioLabel,
   buttonLabel,
}) => {
   const form = document.createElement('form');
   form.id = ['customForm'];
   form.innerHTML = `
      <input type="hidden" name="action" value="">
      <div class="row">
         <div class="col-md-6">
            <!-- Input Text Styles -->
            <div class="form-group">
               ${nameLabel ? `<label for="">${nameLabel}</label>` : ""}   
               <input type="text" name="name" placeholder="${namePlaceholder}" id="name" class="form-control" required>
            </div>
            <div class="form-group">
               ${emailLabel ? `<label for="">${emailLabel}</label>` : ""}   
               <input type="email" name="email" placeholder="${emailPlaceholder}" id="email" class="form-control" required>
            </div>
            <div class="form-group">
               ${messageLabel ? `<label for="">${messageLabel}</label>` : ""}   
               <textarea name="" placeholder="${messagePlaceholder}" id="message" class="form-control" required></textarea>
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
                     ${checkboxLabel ? `<label for="" class="form-check-label">${checkboxLabel}</label>` : ""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="checkbox" name="check[]" id="check-2" value="" class="" required
                     >
                     ${checkboxLabel ? `<label for="" class="form-check-label">${checkboxLabel}</label>` : ""}
                     
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="checkbox" name="check-3" id="check-3" value="" class="" disabled>
                     ${checkboxLabel ? `<label for="" class="form-check-label">${checkboxLabel}</label>` : ""}
               </div>
               </div>
               <div class="col-sm-6 col-lg-4">
               <!-- Radio inputs -->
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-1" value="" required
                     >
                     ${radioLabel ? `<label for="" class="form-check-label">${radioLabel}</label>` : ""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-2" value="" required>
                     ${radioLabel ? `<label for="" class="form-check-label">${radioLabel}</label>` : ""}
               </div>
               <div class="clearfix"></div>
               <div class="form-group">
                  <input type="radio" name="radio" id="radio-3" value="" required disabled>
                     ${radioLabel ? `<label for="" class="form-check-label">${radioLabel}</label>` : ""}
               </div>
               </div>
            </div>
         </div>
      </div>

      <button type="submit" class="btn btn-primary main-btn-submit">${buttonLabel}</button>

`
 
  
   
  return form;
};



