"use strict";

/////////////////////////////////// TOGGLE MENU ////////////////////////////////////////////

let toggle = document.getElementById('toggle');

// toggleClass
function toggleClass(element, className) {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  } else {
    element.classList.add(className);
  }
}

toggle.onclick = function() {
  toggleClass(this, 'on');
  // Toggle open class which sets a with of 300px for the navigation side bar (departs from 0)
  toggleClass(document.getElementById('navigation-list'), 'open');
}


//////////////////////////////// TOGGLE PDF /////////////////////////////////////////

// let pdfToggle = document.getElementById("architecture-portfolio");
// let architecturePdf = document.getElementById("pdf");

// pdfToggle.onclick = function() {
//   toggleClass(architecturePdf, "toggle-pdf");
// }

//////////////////////////////// ANIMATION ON SCROLL /////////////////////////////////////////


function scrollAnimation(hiddenClassName, revealClassName) {
  let hiddenElements = document.querySelectorAll(hiddenClassName);

let observer = new IntersectionObserver( function (entries) {
  entries.forEach(function (entry) {
    if(entry.isIntersecting) {
      entry.target.classList.add(revealClassName);
    } else {
      entry.target.classList.remove(revealClassName);
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el));
}

scrollAnimation(".hidden", "reveal");
scrollAnimation(".hiddenAtBottom", "revealFromBottom");
scrollAnimation(".hiddenAtRight", "revealFromRight");
