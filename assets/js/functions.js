"use strict";

import "jquery-validation";
window.jQuery = $;
window.$ = $;


/**
|--------------------------------------------------
| Helper (JS closest polyfill)
|--------------------------------------------------
*/
if (window.Element && !Element.prototype.closest) {
   Element.prototype.closest = function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s),
         i,
         el = this;
      do {
         i = matches.length;
         while (--i >= 0 && matches.item(i) !== el) { }
      } while (i < 0 && (el = el.parentElement));
      return el;
   };
}

/**
|--------------------------------------------------
| Validate Forms Functions
|--------------------------------------------------
*/
//  General Form Validation Function
export const validateFormsGeneral = (form) => {
   $(form).validate();
   return $(form).valid();
};

window.validateFormsGeneral = validateFormsGeneral;

export const recaptchaData = function (token) {
   if (token) {
      $(".g-recaptcha").each(function () {
         var object = $(this);
         object.parents("form").submit();
      });
   }

   return;
};

window.recaptchaData = recaptchaData;

// Jquery Validation Form (docs: https://jqueryvalidation.org)
export const validateForm = (formClass) => {
   const form = $(formClass);
   form.each(function (e) {
      let thisForm = $(this);
      thisForm.attr("novalidate", "true");

      $(this).submit(function (event) {
         // Adds the loading state to button
         // const button = event.originalEvent.submitter.classList.contains("main-btn-submit")
         const validate = $(this).find(".validate-inputs");
         const btn = $(this).find("[type=submit]:focus").hasClass("main-btn-submit");
         let mainBtn = $(this).find(".open-rgpd") || $(this).find(".main-btn-submit");
         mainBtn.addClass("loading");
         mainBtn.attr("disabled", true);

         console.log(validate);

         // If form is perfectly filled and allowed to submit
         if (validateFormsGeneral($(this))) {
            if (btn) {
               this.parentElement.querySelector(".rgpd").classList.add("rgpd--open");
            }

            if (validate) {
               this.parentElement.querySelector(".rgpd").classList.add("rgpd--open");
            }

            closeRGPD(".reject-rgpd");

            // prevents submit
            event.preventDefault();
         } else {
            // prevents submit if has errors
            event.preventDefault();
            closeRGPD(".reject-rgpd");

            mainBtn.removeClass("loading");
            mainBtn.removeAttr("disabled");
         }
      });
   });
};

export const listenerKeyUpForm = (listenerClassForm) => {
   document.addEventListener("keyup", function (e) {
      e.preventDefault();
      e.stopPropagation();

      var activeForm = document.activeElement.closest(listenerClassForm);

      if (e.keyCode === 13 && activeForm) {
         if (activeForm.querySelector(".rgpd").classList.contains("rgpd--open")) {
            activeForm.querySelector(".open-rgpd").click();
         }
      }
   });
};

/**
|--------------------------------------------------
| RGPD
|--------------------------------------------------
*/
// Listener RGPD
export const listenerRGPD = (rgpdClass) => {
   const rgpdBoxes = document.querySelectorAll(rgpdClass);
   document.querySelector("body").addEventListener("click", function (e) {
      // close when clicked outside RGPD
      for (var _i = 0; _i < rgpdBoxes.length; _i++) {
         if (!rgpdBoxes[_i].contains(e.target) && rgpdBoxes[_i].className == "rgpd rgpd--open") {
            rgpdBoxes[_i].classList.remove("rgpd--open");
         }
      }
   });
};

// Open and Accept RGPD
export const openRGPD = (openClass) => {
   const submitForms = document.querySelectorAll(openClass);

   for (var i = 0; i < submitForms.length; i++) {
      const element = submitForms[i];
      element.addEventListener("click", function (e) {
         this.parentElement.querySelector(".rgpd").classList.add("rgpd--open");
         e.preventDefault();
         e.stopPropagation();
         return false;
      });
   }
};

// Reject RGPD's
export const closeRGPD = (closeClass) => {
   var rejectRgpd = document.querySelectorAll(closeClass);

   for (var i = 0; i < rejectRgpd.length; i++) {
      rejectRgpd[i].closest(".rgpd").classList.remove("rgpd--open");
      rejectRgpd[i].addEventListener("click", function (e) {
         this.closest(".rgpd").classList.remove("rgpd--open");
         e.preventDefault();
         return false;
      });
   }
};

/**
|--------------------------------------------------
| Cookies functions
|--------------------------------------------------
*/
export const createCookie = (name, value, days) => {
   // Condition to check if already exists a
   // different cookie and erase it to create a new one
   console.log(name);
   name.forEach((cookie) => {
      const cookieValue = "eucookie-" + cookie.value;
      readCookie("eucookie-required") && cookieValue != "eucookie-required" ? eraseCookie("eucookie-required") : "";
      readCookie("eucookie-functional") && cookieValue != "eucookie-functional" ? eraseCookie("eucookie-functional") : "";
      readCookie("eucookie-analytical") && cookieValue != "eucookie-analytical" ? eraseCookie("eucookie-analytical") : "";
   });

   value.forEach((cookie) => {
      const cookieValue = "eucookie-" + cookie.value;
      if (days) {
         var date = new Date();
         date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
         var expires = "; expires=" + date.toGMTString();
      } else {
         var expires = "";
      }

      document.cookie = cookieValue + "=" + cookieValue + expires + "; path=/";
   });
};

export const readCookie = (name) => {
   var nameEQ = name + "=";
   var ca = document.cookie.split(";");
   for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
         c = c.substring(1, c.length);
      }
      if (c.indexOf(nameEQ) == 0) {
         // return c.substring(nameEQ.length, c.length);
         return true;
      }
   }
   return null;
};

export const readCookiePermissions = () => {
   // JS code if user accepted only minimum required cookies

   if (readCookie("eucookie-required" || readCookie("eucookie-functional") || readCookie("eucookie-analytical"))) {
      // JS code if user accepted only functional cookies

      if (readCookie("eucookie-required") || readCookie("eucookie-functional")) {
         // JS code if user accepted all cookies

         if (readCookie("eucookie-analytical")) {
            if (typeof analyticsCode !== "undefined" && analyticsCode !== null) {
               // Load Google Analytics Code
               (function (b, o, i, l, e, r) {
                  b.GoogleAnalyticsObject = l;
                  b[l] ||
                     (b[l] = function () {
                        (b[l].q = b[l].q || []).push(arguments);
                     });
                  b[l].l = +new Date();
                  e = o.createElement(i);
                  r = o.getElementsByTagName(i)[0];
                  e.src = "https://www.google-analytics.com/analytics.js";
                  r.parentNode.insertBefore(e, r);
               })(window, document, "script", "ga");
               ga("create", analyticsCode, "auto", {
                  anonymizeIp: true,
               });
               ga("send", "pageview");
               // End Google Analytics Code
            }

            if (typeof fbPixelCode !== "undefined" && fbPixelCode !== null) {
               // Facebook Pixel Code
               !(function (f, b, e, v, n, t, s) {
                  if (f.fbq) return;
                  n = f.fbq = function () {
                     n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
                  };
                  if (!f._fbq) f._fbq = n;
                  n.push = n;
                  n.loaded = !0;
                  n.version = "2.0";
                  n.queue = [];
                  t = b.createElement(e);
                  t.async = !0;
                  t.src = v;
                  s = b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t, s);
               })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
               fbq("init", fbPixelCode);
               fbq("track", "PageView");
               // End Facebook Pixel Code
            }

            if (typeof tagManagerCode !== "undefined" && tagManagerCode !== null) {
               (function (w, d, s, l, i) {
                  w[l] = w[l] || [];
                  w[l].push({
                     "gtm.start": new Date().getTime(),
                     event: "gtm.js",
                  });
                  var f = d.getElementsByTagName(s)[0],
                     j = d.createElement(s),
                     dl = l != "dataLayer" ? "&l=" + l : "";
                  j.async = true;
                  j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
                  f.parentNode.insertBefore(j, f);
               })(window, document, "script", "dataLayer", tagManagerCode);
            }
         }
         // cookie-complete code
      }
      // cookie-functional code
   }
};

export const eraseCookie = (name) => {
   createCookie(name, "", -1);
};

export const cookiesListener = (
   cookiesWrapperClass,
   changeCookiesClass,
   cookiesRadiosClass,
   acceptedCookiesYes,
   acceptedCookiesClass,
   cookieSettingsClass,
   cookieSettingsCancelClass
) => {
   const cookiesWrapper = document.querySelector(cookiesWrapperClass),
      changeCookies = document.querySelector(changeCookiesClass),
      bodyElem = document.querySelector("body"),
      cookiesRadios = document.querySelectorAll(cookiesRadiosClass),
      acceptedCookiesAccepted = document.querySelector(acceptedCookiesYes),
      acceptedCookiesPreferences = document.querySelector(acceptedCookiesClass);

   // Show Cookies if not accepted already
   if (!readCookie("eucookie-functional") && !readCookie("eucookie-analytical") && !readCookie("eucookie-required")) {
      cookiesWrapper.style.display = "block";
      bodyElem.classList.add("in-modal");
   } else {
      readCookiePermissions();
   }

   if (changeCookies) {
      changeCookies.addEventListener("click", function (e) {
         e.preventDefault();
         cookiesWrapper.style.display = "block";
      });
   }

   // Listen for changes on Cookies radios
   for (var i = 0; i < cookiesRadios.length; i++) {
      var cookieRadio = cookiesRadios[i];

      cookieRadio.addEventListener("change", function () {
         var cookieID = this.id;

         // get all messages to dismiss them
         var cookiesMessages = document.querySelectorAll(".cookies-message p");
         for (var j = 0; j < cookiesMessages.length; j++) {
            cookiesMessages[j].style.display = "none";
         }

         // show the message of the selected cookie
         document.querySelector('.cookies-message p[data-id="' + cookieID + '"]').style.display = "block";
      });
   }

   // Click to accept and close cookies
   acceptedCookiesAccepted.addEventListener("click", function (e) {
      e.preventDefault();
      const cookieVal = document.querySelectorAll('input[name="cookie-radio"]:checked');
      createCookie(cookieVal, cookieVal, 365 * 10);
      readCookiePermissions();
      cookiesWrapper.style.display = "none";
      bodyElem.classList.remove("in-modal");
   });

   acceptedCookiesPreferences.addEventListener("click", function (e) {
      e.preventDefault();
      const cookieVal = document.querySelectorAll('input[name="cookie-radio"]:checked');
      createCookie(cookieVal, cookieVal, 365 * 10);
      readCookiePermissions();
      cookiesWrapper.style.display = "none";
      bodyElem.classList.remove("in-modal");
   });

   // open and close cookies preferences
   $(`${cookieSettingsClass}, ${cookieSettingsCancelClass}`).on("click", function (e) {
      $(".cookies-description, .cookies-settings").toggle();
   });
};

/**
|--------------------------------------------------
| Custom Functions
|--------------------------------------------------
*/
// Custom Select Combo Box
export const customSelect = (selectClass) => {
   var x, i, j, selElmnt, a, b, c;
   // look for any elements with the class "custom-select":
   x = document.querySelectorAll(selectClass);
   let valueAttr = null;

   for (i = 0; i < x.length; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      valueAttr = selElmnt.options[selElmnt.selectedIndex].value;

      // disable dropdown on mobile to use native instead
      if (checkIfMobile() == true) {
         selElmnt.classList.add("custom-select__mobile");
      }

      // for each element, create a new DIV that will act as the selected item:
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");

      // add value of option selected 'data-atribute' inside a new DIV -> FILIPE
      a.setAttribute("data-value", valueAttr);

      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].insertBefore(a, selElmnt);

      // for each element, create a new DIV that will contain the option list:
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");

      for (j = 0; j < selElmnt.length; j++) {
         // for each option in the original select element,
         // create a new DIV that will act as an option item:
         c = document.createElement("DIV");
         c.innerHTML = selElmnt.options[j].innerHTML;

         c.addEventListener("click", function (e) {
            // when an item is clicked, update the original select box,
            // and the selected item:
            var i, s, h;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            h = this.parentNode.previousSibling;

            for (i = 0; i < s.length; i++) {
               //new -> FILIPE
               h.setAttribute("data-value", s.options[i].value);
               if (s.options[i].innerHTML == this.innerHTML) {
                  s.selectedIndex = i;
                  h.innerHTML = this.innerHTML;
                  break;
               }
            }
            h.click();
         });

         b.appendChild(c);
      }

      selElmnt.addEventListener("change", function () {
         //console.log(this.parentNode.querySelector('.select-selected'));
         this.parentNode.querySelector(".select-selected").innerHTML = this.options[this.selectedIndex].text;
      });

      x[i].insertBefore(b, selElmnt);

      a.addEventListener("click", function (e) {
         // when the select box is clicked, close any other select boxes,
         // and open/close the current select box:
         e.stopPropagation();
         closeAllSelect(this);
         this.nextSibling.classList.toggle("select-hide");
         this.classList.toggle("select-arrow-active");
      });
   }

   function closeAllSelect(elmnt) {
      // a function that will close all select boxes in the document,
      // except the current select box:
      var x,
         y,
         i,
         arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");

      for (i = 0; i < y.length; i++) {
         if (elmnt == y[i]) {
            arrNo.push(i);
         } else {
            y[i].classList.remove("select-arrow-active");
         }
      }

      for (i = 0; i < x.length; i++) {
         if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
         }
      }
   }

   // if the user clicks anywhere outside the select box,
   // then close all select boxes:
   document.addEventListener("click", closeAllSelect);
};

// Custom Input File
export const customFileInput = (customFileClass) => {
   var selects = document.querySelectorAll(customFileClass);

   for (var i = 0; i < selects.length; i++) {
      var item = selects[i];

      item.addEventListener("change", function () {
         if (this.files.length > 1) {
            // multiple files selected
            var inputStr = this.getAttribute("data-selected").replace("%s", this.files.length);
         } else if (this.files.length == 1) {
            // one file selected
            var inputStr = this.files[0].name;
         } else {
            // empty
            var inputStr = this.getAttribute("data-label");
         }

         // write to label mask
         this.previousElementSibling.innerHTML = inputStr;
      });
   }
};

// Alerts EveryWhere
export const alertsEveryWhere = () => {
   alert("Opcional - Função exemplo a ser chamada depois de formulário validado.");
};

// Check is mobile
export const checkIfMobile = () => {
   if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
         navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
         navigator.userAgent.substr(0, 4)
      )
   ) {
      return true;
   } else {
      return false;
   }
};

//  Generic Ajax Load More function
export const loadMore = (triggerBtn, target, totalItemsLoaded, dataType, dataUrl, dataMethod) => {
   triggerBtn.classList.add("loading");

   $.ajax({
      method: dataMethod,
      url: URL + dataUrl,
      data: { total: totalItemsLoaded, type: dataType },
      dataType: "html",
      success: function (data) {
         if (data && data !== null) {
            // append items to target div
            document.querySelector("#" + target).innerHTML += data;
            // remove loading spinner from button
            triggerBtn.classList.remove("loading");
         } else {
            document.querySelector(".view-more").innerHTML = "";
         }
      },
      error: function () {
         alert("Error");
         triggerBtn.classList.remove("loading");
      },
   });
};


// Header change appearence
export const controlScrollMenu = () => {
   window.scrollY > 1 ? document.getElementById("header").classList.add("appearence-changed") : document.getElementById("header").classList.remove("appearence-changed")
}


//  open/close menu mobile
export const openMenuMobile = () => {
   const openMenuMobile = document.getElementById("open-mobile-menu");
   const header = document.querySelector("header");
   const mainMenu = document.getElementById("header-items");

   openMenuMobile.addEventListener("click", function () {
      if (header.classList.contains("mobile-opened")) {
         header.classList.remove("mobile-opened");
         setTimeout(() => {
            mainMenu.removeAttribute("style");
         }, 100);
      } else {
         header.classList.add("mobile-opened");
         mainMenu.style.visibility = "visible";
      }
   });
}

//  open/close submenu mobile
export const openCloseSubmenuMobile = () => {
   let openTrigger = document.querySelectorAll(".menu-link-mobile.has-submenu");
   if (window.innerWidth <= 991) {
      //  mobile
      openTrigger.forEach((btn) => {
         btn.addEventListener("click", (e) => {
            if (btn.closest(".menu").classList.contains("selected")) {
               btn.closest(".menu").classList.remove("selected");
               e.preventDefault();
               return;
            }
            if (document.querySelector(".menu.selected")) {
               document.querySelector(".menu.selected").classList.remove("selected");
            }
            btn.closest(".menu").classList.add("selected");
            e.preventDefault();
         });
      });
   }
}

//  toggle modals function
export const toggleModal = (modalId) => {
   let modalContainer = document.getElementById(modalId);

   if (modalContainer.getAttribute("data-status") != "opened") {

      modalContainer.setAttribute("data-status", "opened");

      //  add class to body to disable Y scroll
      bodyElem.classList.add("in-modal");
      htmlElem.classList.add("in-modal");

   } else {

      //	remove class 'opened' to modal container to hide it
      modalContainer.setAttribute("data-status", "closed");

      //  remove class to body to enable Y scroll
      bodyElem.classList.remove("in-modal");
      htmlElem.classList.remove("in-modal");

   }

}