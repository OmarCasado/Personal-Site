
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



