import './cookies.css';


export const createCookies = ({
   variant,
}) => {
   const cookiesPreferences = {
      "required": {
        "label": "Strictly Necessary Cookies",
        "description": "These cookies are essential to provide services available on our website and allow you to use certain features on our website. Without these cookies, we cannot provide certain services on our website."
      },
      "functionality": {
        "label": "Functionality cookies",
        "description": "These cookies are used to provide you with a more personalized experience on our website and to remember the choices you make when using our website. For example, we may use functionality cookies to remember your language preferences and/or your login details."
      },
      "personalization": {
        "label": "Personalization cookies",
        "description": "These cookies are used to recognize visitors when they return to our website. This allows us to personalize the content of the site for you, greet you by name, and remember your preferences."
      },
      "security": {
        "label": "Security cookies",
        "description": "These cookies are used to protect the security of our website and your data. This includes cookies that are used to enable you to log into secure areas of our website."
      },
      "analytics": {
        "label": "Measurement and performance cookies",
        "description": "These cookies are used to collect information to analyze traffic on our website and understand how visitors are using our website. For example, these cookies can measure factors such as time spent on the site or pages visited, this will allow us to understand how we can improve our site for users. The information collected through these measurement and performance cookies does not identify any individual visitor."
      },
      "ad": {
        "label": "Advertising cookies",
        "description": "These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator's permission. They remember that you have visited a website and this information is shared with other organizations such as advertisers. Quite often targeting or advertising cookies will be linked to site functionality provided by the other organization."
      }
    }
   const cookies = document.createElement('div');
   cookies.className = ['cookies__wrapper'].join(' ');
   cookies.innerHTML = `
  <div class="cookies__box modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title h4 fw-bold" id="cookiesTitle">🍪 Our website uses cookies</div>
      </div>
      <div class="modal-body">
        <div class="cookies__description ${variant === 'cookies-preferences' ? 'd-none' : ''}">
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

        <div class="cookies__settings ${variant === 'cookies' ? 'd-none' : ''}">
          <fieldset class="mb-4">
            <legend class="visually-hidden">Enable or disable your cookies preferences</legend>
            <div class="accordion" id="cookieAccordion">
              ${Object.keys(cookiesPreferences).map((key) => {
                const cookie = cookiesPreferences[key];
                return `
                  <div class="accordion-item">
                    <div class="accordion-header position-relative">
                      <button class="accordion-button collapsed fw-bold" type="button" data-toggle="collapse" data-target="#cookieCollapse-${key}" aria-expanded="false" aria-controls="cookieCollapse-${key}">
                        <i class="icon-arrow"></i>${cookie.label}
                      </button>
                      <div class="form-check form-switch form-control-lg">
                        <label for="cookie-${key}" class="form-check-label visually-hidden">${cookie.label}</label>
                        <input type="checkbox" name="cookie-radio" id="cookie-${key}" value="${key}" class="form-check-input m-0" ${key === 'required' ? 'disabled checked' : ''}>
                      </div>
                    </div>
                    <div id="cookieCollapse-${key}" data-parent="#cookieAccordion" class="accordion-collapse collapse">
                      <div class="accordion-body">
                        <p class="mb-0">
                          ${cookie.description}
                        </p>
                      </div>
                    </div>
                  </div>
                `;
              }).join('')}
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
`;
 
  
   
  return cookies;
};



