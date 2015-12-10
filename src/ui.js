var $ = function(element) {
  return document.querySelector(element) || document.querySelectorAll(element);
}

    // var clone = $('#header').innerHTML;
    // $('nav header').innerHTML = clone;


// var sections = document.querySelectorAll('#documentation > section');
// var cl_zone = document.querySelectorAll('#documentation > section > header.header');
// for(i=0, len = sections.length ; i < len; i++) {
//   var h = sections[i].offsetHeight + 60;
//   sections[i].classList.add('closed')
//   sections[i].style.height = h + 'px';
//   cl_zone[i].addEventListener('click', function(){
//     this.parentNode.classList.toggle('closed')
//   })
// }

function stickyHeader(){
  var headerMin = document.querySelector('#minHeader');
  var navHeader = document.querySelector('nav .hero-header');
  var navHeaderSpan = document.querySelectorAll('nav .hero-header h1 span');
  var fromY = Math.floor(window.pageYOffset);
  var delta = 360;
  if(fromY >= delta) {
    headerMin.classList.add('appear')
    // for(i=0, len = navHeaderSpan.length ; i < len; i++) {
    //   navHeaderSpan[i].style.color='#fff';
    // }
  }
  if(fromY <= delta) {
    headerMin.classList.remove('appear')
    // for(i=0, len = navHeaderSpan.length ; i < len; i++) {
    //   navHeaderSpan[i].style.color='';
    // }
  }
}

window.onscroll = function(e) {  
 stickyHeader()
} 

window.onload = function(e) {  
 stickyHeader()
} 

document.getElementById('closeNav').addEventListener('click', function(){
  document.querySelector('.control a span.icon').classList.toggle('flip')
  document.querySelector('nav').classList.toggle('closed');
  document.querySelector('.content').classList.toggle('full-width');
  document.querySelector('#header').classList.toggle('full-width');
  document.querySelector('#minHeader').classList.toggle('full-width');
})