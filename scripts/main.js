window.onload = function () {
// Set current  year in the footer:
    var date = document.querySelector('.date');
    date.innerText = new Date().getFullYear();

    /*// Set current li - unnecessary since it's already set in the html:
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
            if (ev.target.nodeName === 'IMG') {
                currentImg.src = ev.target.src;
            }
        }, false);
    }

// Off-canvas nav menu for smaller screens (under 768px):
    var menuIcon = document.querySelector('#menu-icon'),
        plusIcon = document.querySelectorAll('.plus-icon'),
        minusIcon = document.querySelectorAll('.minus-icon'),
        drawer = document.querySelector('.main-nav'),
        innerList = document.querySelectorAll('.inner-nav');

    menuIcon.addEventListener('click', function (ev) {
        drawer.classList.toggle('open');
        ev.stopPropagation();
    }, false);


    for (var i = 0, len = plusIcon.length; i < len; i += 1) {
        // Clicking the plus icon opens the inner menu, clicking the minus icon closes the inner menu:
        plusIcon[i].addEventListener('click', function (ev) {
            ev.target.nextElementSibling.classList.toggle('open');
            ev.target.classList.toggle('rotate');
            ev.target.previousElementSibling.classList.toggle('rotate');
            ev.stopPropagation();
        }, false);
    }
};
