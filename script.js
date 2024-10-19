const TL = gsap.timeline();


TL.from('.nav-link', {opacity:0 , x:-50 , duration:1.5 , stagger: 0.2 , delay:0.5})
.from('.btnOne', {opacity:0 , scale:0, duration:1})

gsap.from('.text', {
    y: 100 ,
    opacity: 0 ,
    duration: 1,
    scrollTrigger: {
    trigger: '.text',
    start: '-350 0'}
    })

gsap.from('.textOne', {
    scale: 0,
    opacity: 0 ,
    duration: 3,
    scrollTrigger: {
    trigger: '.text',
    start: '-300 0'}
        })

gsap.from('.textTwo', {
    y: 100 ,
    opacity: 0 ,
    duration: 2,
    scrollTrigger: {
    trigger: '.text',
    start: '-200 0'}
        })


gsap.from('#price', {
    y: -50 ,
    duration: 2,
    ease: "bounce",
    scrollTrigger: {
    trigger: '#price',
    start: '-450 0'}
    })

gsap.from('.textThree', {
    scale: 0,
    opacity: 0 ,
    duration: 2,
    y:100,
    scrollTrigger: {
    trigger: '.textThree',
    start: '-600 0'}
    })