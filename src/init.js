// // COLORIFY 0.1
// // Config file



colorify({
 id: 4,
 attr: "colorify-demo",
 container: "colorify-header",
 accuracy: 10,
 gradient: true,
 lazyReveal: {
  transition: 3, 
  delay: 3
},
gradientDirection: 'to bottom right',
padding: 10
});

colorify({
 id: 1,
 attr: "colorify-1",
 container: 'colorify-list-1',
 images: false,
 accuracy: 10,
 lazyReveal: {
  transition: 1, 
  delay: 1
},
gradient: true,
gradientDirection: 'to right',
padding: 10,
giveTo: false
});


colorify({
 id: 2,
 attr: "colorify-2",
 container: 'colorify-list-2',
 images: false,
 accuracy: 100,
 lazyReveal: {
  transition: 200, 
  delay: 100
},
gradient: false,
padding: 8,
giveTo: false
});


colorify({
 id: 3,
 attr: "colorify-3",
 container: 'text-unique',
 images: false,
 accuracy: 10,
 lazyReveal: {
  transition: 200, 
  delay: 1
},
gradient: true,
gradientDirection: 'to bottom right',
padding: 40,
give: {
 textColor: {
   parent: false,
   child: false,
   exact: false
 }
},
revealOn: {
  event:'click',
  trigger: 'a'
}
});



// DEMO MAIN COLOR
colorify({
  id: 12,
  container: 'colorify-main-color',
  accuracy: 10,
  gradient: false,
  color: true
});

// DEMO MAIN GRADIENT 
colorify({
  id: 13,
  attr:'colorifyDemo',
  container: 'colorify-gradient-color',
  accuracy: 100,
  gradient: true,
  gradientDirection: 'to bottom right'
});

// Lazy reveal

colorify({
  container: 'colorify-lazy-reveal',
  accuracy: 10,
  lazyReveal: {
   delay: 3
 }

});

colorify({
  container: 'colorify-lazy-reveal-2',
  accuracy: 10,
  lazyReveal: {
   transition: 2, 
   delay: 3
 }

});

colorify({
  container: 'colorify-lazy-reveal-3',
  accuracy: 10,
  lazyReveal: {
   transition: 2, 
   delay: 1,
   steps: true
 }

});

colorify({
  container: 'colorify-lazy-reveal-steps',
  lazyReveal: {
    transition: 1,
    delay: 1,
    steps: true
  },
  revealOn: {
    event: 'click',
    trigger: 'body'
  }
})

colorify({
  container: 'colorify-reveal-on-event',
  revealOn: {
    event: 'mouseover',
    trigger: '#event1'
  }
})