// $('#pull').on('click', function() {
// 	$('nav ul').slideToggle();
// 	return false;
// });

const menuButton = document.querySelector('#pull')
const menu = document.querySelector('nav ul')
menuButton.addEventListener('click', toggleMenu)

function toggleMenu(){
	menu.classList.toggle('show');
	event.preventDefault();
}


// $('.content-video a').on('click',function(){
// 	$('.content-video a').removeClass('active');
// 	$(this).addClass('active');
// 	var videoToPlay = $(this).attr('href');
// 	$('iframe').attr('src',videoToPlay);
// 	console.log(videoToPlay);
// 	return false;
//  });


const iFrame = document.querySelector('iframe')
const videoLinks = document.querySelectorAll('.content-video a')
const videoLinksArray = [...videoLinks]
videoLinksArray.forEach( 
	videoLink => videoLink.addEventListener('click', selectVideo ))

function selectVideo(){
	removeActiveClass()
	const videoToPlay = this.getAttribute('href')
	iFrame.setAttribute('src', videoToPlay)
	this.classList.add('active')
	// console.log(videoToPlay)
	event.preventDefault()
}

function removeActiveClass(){
	videoLinksArray.forEach( videoLink => videoLink.classList.remove('active'))
}



// $('.nav-sub>li a').on('click tap', function(){
// 	$('.nav-sub ul').slideUp();
// 	$(this).next().slideToggle();
// 	console.log(this);
// 	return false;
// });

const subnavLinks = document.querySelectorAll('.nav-sub > li > a')
const subnavLinksArray = [...subnavLinks]
subnavLinksArray.forEach( subnavLink => subnavLink.addEventListener('click', openAccordion))
subnavLinksArray[0].nextElementSibling.classList.add('active')

function openAccordion(){
	removeActiveClass()
	this.nextElementSibling.classList.toggle('active')
	event.preventDefault()
}

function removeActiveClass(){
	subnavLinksArray.forEach( subnavLink => subnavLink.nextElementSibling.classList.remove('active'))
}
















