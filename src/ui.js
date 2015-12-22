var $ = function(element) {
  return document.querySelector(element) || document.querySelectorAll(element);
}


function stickyHeader(){
  var headerMin = document.querySelector('#minHeader');
  var navHeader = document.querySelector('nav .hero-header');
  var navHeaderSpan = document.querySelectorAll('nav .hero-header h1 span');
  var fromY = Math.floor(window.pageYOffset);
  var delta = 360;
  if(fromY >= delta) {
    headerMin.classList.add('appear')
  }
  if(fromY <= delta) {
    headerMin.classList.remove('appear')
  }
}

window.onscroll = function(e) {  
 stickyHeader()
} 

window.onload = function(e) {  
 stickyHeader()
 isSmall()
} 

window.addEventListener('resize', isSmall, false);

function isSmall(){
  var w = document.documentElement.clientWidth;
  if(w<=768){
    document.querySelector('nav').classList.add('closed')
    document.querySelector('#closeNav .icon').classList.add('flip')
  }
   if(w>=768){
    document.querySelector('nav').classList.remove('closed')
    document.querySelector('#closeNav .icon').classList.remove('flip')
  }
}

document.getElementById('closeNav').addEventListener('click', function(){
  document.querySelector('.control a span.icon').classList.toggle('flip')
  document.querySelector('nav').classList.toggle('closed');
  document.querySelector('.content').classList.toggle('full-width');
  document.querySelector('#header').classList.toggle('full-width');
  document.querySelector('#minHeader').classList.toggle('full-width');
})