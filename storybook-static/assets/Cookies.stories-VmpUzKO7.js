import{f as b}from"./index-Z5tTm0QU.js";const m=({variant:o})=>{const s={required:{label:"Strictly Necessary Cookies",description:"These cookies are essential to provide services available on our website and allow you to use certain features on our website. Without these cookies, we cannot provide certain services on our website."},functionality:{label:"Functionality cookies",description:"These cookies are used to provide you with a more personalized experience on our website and to remember the choices you make when using our website. For example, we may use functionality cookies to remember your language preferences and/or your login details."},personalization:{label:"Personalization cookies",description:"These cookies are used to recognize visitors when they return to our website. This allows us to personalize the content of the site for you, greet you by name, and remember your preferences."},security:{label:"Security cookies",description:"These cookies are used to protect the security of our website and your data. This includes cookies that are used to enable you to log into secure areas of our website."},analytics:{label:"Measurement and performance cookies",description:"These cookies are used to collect information to analyze traffic on our website and understand how visitors are using our website. For example, these cookies can measure factors such as time spent on the site or pages visited, this will allow us to understand how we can improve our site for users. The information collected through these measurement and performance cookies does not identify any individual visitor."},ad:{label:"Advertising cookies",description:"These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator's permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to site functionality provided by the other organization."}},a=document.createElement("div");return a.className=["cookies__wrapper"].join(" "),a.innerHTML=`
  <div class="cookies__box modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title h4 fw-bold" id="cookiesTitle">🍪 Our website uses cookies</div>
      </div>
      <div class="modal-body">
        <div class="cookies__description ${o==="cookies-preferences"?"d-none":""}">
          <p class="cookies__message mb-4 mt-2">
            Our website uses cookies to improve your browsing experience on our website. By continuing to browse this website, the user is expressly agreeing to the placement of cookies on their computer.
            <button class="btn btn-link cookies__settings-link">Cookies Preferences</button>.
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

        <div class="cookies__settings ${o==="cookies"?"d-none":""}">
          <fieldset class="mb-4">
            <legend class="visually-hidden">Enable or disable your cookies preferences</legend>
            <div class="accordion" id="cookieAccordion">
              ${Object.keys(s).map(e=>{const r=s[e];return`
                  <div class="accordion-item">
                    <div class="accordion-header position-relative">
                      <button class="accordion-button collapsed fw-bold" type="button" data-toggle="collapse" data-target="#cookieCollapse-${e}" aria-expanded="false" aria-controls="cookieCollapse-${e}">
                        <i class="icon-arrow"></i>${r.label}
                      </button>
                      <div class="form-check form-switch form-control-lg">
                        <label for="cookie-${e}" class="form-check-label visually-hidden">${r.label}</label>
                        <input type="checkbox" name="cookie-radio" id="cookie-${e}" value="${e}" class="form-check-input m-0" ${e==="required"?"disabled checked":""}>
                      </div>
                    </div>
                    <div id="cookieCollapse-${e}" data-parent="#cookieAccordion" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="mb-0">
                          ${r.description}
                        </p>
                      </div>
                    </div>
                  </div>
                `}).join("")}
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
`,a},k={title:"Componentes/Cookies",tags:["autodocs"],render:({label:o,...s})=>m({label:o,...s}),argTypes:{variant:{control:{type:"select"},options:["cookies","cookies-preferences"]}},args:{onClick:b()}},i={args:{variant:"cookies"}},t={args:{variant:"cookies-preferences"}};var c,n,l;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'cookies'
  }
}`,...(l=(n=i.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'cookies-preferences'
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const h=["cookies","cookiesPreferences"];export{h as __namedExportsOrder,i as cookies,t as cookiesPreferences,k as default};
