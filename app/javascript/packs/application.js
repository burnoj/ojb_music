// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

//= require jquery.lazyload


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

function smoothScroll () {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  });
}

let elements = document.querySelectorAll('.hidden');
let windowHeight = window.innerHeight;

function checkPosition () {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    console.log(elements)
    const positionFromTop = elements[i].getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      element.classList.add('fade-in-element');
      element.classList.remove('hidden');
    }
  }
}

window.addEventListener('scroll', checkPosition);



// External imports
import "bootstrap";

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

document.addEventListener('turbolinks:load', () => {
  smoothScroll();
  checkPosition();
  // Call your functions here, e.g:
  // initSelect2();
});
