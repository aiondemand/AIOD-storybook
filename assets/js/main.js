import {
   closeRGPD,
   initCookiesListener,
   customFileInput,
   customSelect,
   listenerKeyUpForm,
   listenerRGPD,
   openRGPD,
   validateForm,
   controlScrollMenu,
   openMenuMobile,
   openCloseSubmenuMobile,
   toggleModal,
} from "./functions";


const bodyElem = document.getElementsByTagName("body")[0];
const htmlElem = document.getElementsByTagName("html")[0];


// jQuery document.ready equivalent - faster
document.addEventListener("DOMContentLoaded", function () {

   // ES6 example syntax
   const some = () => {
      console.log("Developed by LOBA.cx - https://www.loba.pt/");
   };

   some();


   /**
   |--------------------------------------------------
   | RGPD
   |--------------------------------------------------
   */
   listenerRGPD(".rgpd");
   openRGPD(".open-rgpd");
   closeRGPD(".reject-rgpd");

   /**
   |--------------------------------------------------
   | COOKIES
   |--------------------------------------------------
   */
   initCookiesListener(".cookies__wrapper", ".cookies__change-settings"); 

   /**
   |--------------------------------------------------
   | Validate form's
   |--------------------------------------------------
   */
   validateForm(".validate-form");
   listenerKeyUpForm(".validate-form");

   /**
   |--------------------------------------------------
   | Custom Elements
   |--------------------------------------------------
   */
   customSelect(".custom-select-option");
   customFileInput(".custom-file input");

   // Open menu mobile
   openMenuMobile()
   // Open and close submenu mobile
   openCloseSubmenuMobile()



   // Switch Dark / Light Mode
   const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
   const currentTheme = localStorage.getItem('theme');

   // Default dark mode
   document.documentElement.setAttribute('data-theme', 'dark');
   localStorage.setItem('theme', 'dark');

   if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      if (currentTheme === 'dark') {
         toggleSwitch.checked = true;
      }
   }

   function switchTheme(e) {
      if (e.target.checked) {
         document.documentElement.setAttribute('data-theme', 'dark');
         localStorage.setItem('theme', 'dark');
      }
      else {
         document.documentElement.setAttribute('data-theme', 'light');
         localStorage.setItem('theme', 'light');
      }
   }

   toggleSwitch.addEventListener('change', switchTheme, false);

   // Tabs
   const tabs = document.querySelectorAll('[data-tab-target]')
   const tabContents = document.querySelectorAll('[data-tab-content]')

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const target = document.querySelector(tab.dataset.tabTarget)
         tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
         })
         tabs.forEach(tab => {
            tab.classList.remove('active')
            tab.classList.add('btn-disabled')
         })
         tab.classList.add('active')
         tab.classList.remove('btn-disabled')
         target.classList.add('active')
      })
   })

   //	toggle modals button
   document.querySelectorAll(".toggle-modal").forEach(function (modalButton) {
      modalButton.addEventListener('click', function (event) {
         const modalContainer = this.getAttribute("data-modalContainer");
         toggleModal(modalContainer);
         event.preventDefault();
      });
   });



   var swiperDefault = new Swiper(".swiper-default", {
      effect: "fade",
      pagination: {
        el: ".swiper-pagination",
      },
    });


   

   // About Hover Images
   let hoverImages = document.querySelectorAll(".hover-image");
   hoverImages.forEach(element => {
      element.querySelector(".hover-image-title").addEventListener('mouseover', () => {
         let hoverImagesSrc = element.getElementsByTagName('img')[0].attributes.src.value;
         document.querySelector(".hover-image-background").style.zIndex = "111";
         document.querySelector(".hover-image-background").style.opacity = "1";
         document.querySelector(".hover-image-background").style.backgroundImage = "url('" + hoverImagesSrc + "')";
         element.querySelector(".hover-image-title").classList.add("show-background");
      })
      element.querySelector(".hover-image-title").addEventListener('mouseout', () => {
         document.querySelector(".hover-image-background").style.zIndex = "-1";
         document.querySelector(".hover-image-background").style.opacity = "0";
         element.querySelector(".hover-image-title").classList.remove("show-background");
         setTimeout(() => {
            document.querySelector(".hover-image-background").style.backgroundImage = "none";
         }, 300);
      })
   });

});

// header change appearance
window.addEventListener("scroll", controlScrollMenu)



// Typewrite animation
var TxtType = function (el, toRotate, period) {
   this.toRotate = toRotate;
   this.el = el;
   this.loopNum = 0;
   this.period = parseInt(period, 10) || 2000;
   this.txt = '';
   this.tick();
   this.isDeleting = false;
};

TxtType.prototype.tick = function () {
   var i = this.loopNum % this.toRotate.length;
   var fullTxt = this.toRotate[i];

   let wrapper = this.el.querySelector('.wrap');

   if (!wrapper) {
      wrapper = document.createElement('span');
      wrapper.classList.add('wrap');
      wrapper.setAttribute('aria-hidden', true);
      this.el.appendChild(wrapper);
   }

   if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
   } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
   }

   wrapper.innerHTML = this.txt;

   var that = this;
   var delta = 200 - Math.random() * 100;

   if (this.isDeleting) { delta /= 2; }

   if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
   } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
   }

   setTimeout(function () {
      that.tick();
   }, delta);
};

window.onload = function () {
   var elements = document.getElementsByClassName('typewrite');
   for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-type');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
         new TxtType(elements[i], JSON.parse(toRotate), period);
      }
   }
   // INJECT CSS
   var css = document.createElement("style");
   css.type = "text/css";
   css.innerHTML = ".typewrite > .wrap { border-right: 3px solid #FFED00; padding-right: 5px;}";
   document.body.appendChild(css);
};


// JavaScript para alternar o estado do menu
const sidebar = document.getElementById('sidebar');
const collapseButton = document.getElementById('collapseButton');

collapseButton.addEventListener('click', () => {
   sidebar.classList.toggle('collapsed');
});

// Seleciona todos os elementos com submenu
const submenuParents = document.querySelectorAll('.sidebar .has-submenu');

submenuParents.forEach(parent => {
  parent.addEventListener('click', () => {
    const submenu = parent.querySelector('.sidebar .submenu'); // Seleciona o submenu dentro do pai

    // Alterna o estado do submenu
    submenu.classList.toggle('open');
    parent.classList.toggle('open'); // Adiciona uma classe ao pai para indicar o estado (opcional)
  });
});


