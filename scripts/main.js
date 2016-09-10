// Set current  year in the footer:
var date = document.querySelector('.date'),
    currentYear = new Date().getFullYear();
date.innerText = currentYear;

/*// Set current li - unnecessary:
 var currentLi = document.querySelector('.current'),
 nav = document.querySelector('.main-nav');
 nav.addEventListener('click', function (ev) {
 if (ev.target.nodeName == 'LI'){
 currentLi.classList.remove('current');
 ev.target.classList.add('current');
 }
 }, false);*/

// Create image gallery:
var currentImg = document.querySelector('#gallery-current'),
    smallGal = document.querySelector('.small-gal');
if (smallGal) {
    smallGal.addEventListener('click', function (ev) {
        if (ev.target.nodeName == 'IMG') {
            currentImg.src = ev.target.src;
        }
    }, false);
}

// Off-canvas nav menu for smaller screens (under 768px):
var menuIcon = document.querySelector('#menu-icon'),
    plusIcon = document.querySelector('#plus-icon'),
    minusIcon = document.querySelector('#minus-icon'),
    drawer = document.querySelector('.main-nav'),
    innerList = document.querySelector('.inner-nav');

menuIcon.addEventListener('click', function (ev) {
    drawer.classList.toggle('open');
    ev.stopPropagation();
}, false);

// Hovering the plus icon or its parent element removes the hover effect from the list items:
plusIcon.addEventListener('mouseover', function(ev){
}, false);
plusIcon.parentElement.addEventListener('mouseover', function(ev){
    innerList.parentElement.classList.add('no-hover');
}, false);


// Clicking the plus icon open the inner menu, clicking the minus icon closes the inner menu:
plusIcon.addEventListener('click', function (ev) {
    innerList.classList.toggle('open');
    this.classList.toggle('rotate');
    minusIcon.classList.toggle('rotate');
    ev.stopPropagation();
}, false);
