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

