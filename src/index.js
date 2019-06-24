import {TweenMax, Power2, TimelineLite, Expo, Back, TweenLite, Power4, Elastic} from "gsap/TweenMax"
import ScrollMagic from 'scrollmagic'
import 'imports-loader?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'





        



if (document.querySelector('.bio')) {
      
document.querySelector('.scroll').addEventListener('click', () => {
    //Intro Left Section
    TweenMax.to('.left', .8, { width: '0%', ease: Expo.easeOut })
    //Header
    TweenMax.to('.bucket-header', .8, { marginLeft: '-20%', ease: Expo.easeOut })    
    //Bio
    TweenMax.staggerTo('.bio-text', .8, { opacity: 1, y: 20, ease: Sine.easeOut }, .2)
    TweenMax.to('.bio', .8, { display: 'block', ease: Expo.easeOut })  
    //Contact
    TweenMax.to('.contact', .8, { display: 'block', ease: Expo.easeOut })    
    //Hide scroll
    TweenMax.to('.scroll', .5, {opacity: 0})
    //Show Close
    TweenMax.to('.close-about', .5, {opacity: 1})
    
    })

    //Reverse About
document.querySelector('.close-about').addEventListener('click', () => {
    
    //Intro Left Section
    TweenMax.to('.left', .8, { width: '50%', ease: Expo.easeOut })
    //Header
    TweenMax.to('.bucket-header', .8, { marginLeft: '0%', ease: Expo.easeOut })    
    //Bio
    TweenMax.staggerTo('.bio-text', .2, { opacity: 0, y: -20, ease: Sine.easeOut }, .2)
    TweenMax.to('.bio', .2, { display: 'none', ease: Expo.easeOut })  
    //Contact
    TweenMax.to('.contact', .3, { display: 'none', ease: Expo.easeOut })    
    //Hide scroll
    TweenMax.to('.scroll', .5, {opacity: 1})
    //Show Close
    TweenMax.to('.close-about', .5, {opacity: 0})
    
})
    
    
    //Hide logo
 const controller = new ScrollMagic.Controller()

 new ScrollMagic.Scene({ offset: 10 })
     .setTween('.logo', { opacity: 0 })
     .addTo(controller)
 
 //Show and Hide Contact Info
 let contactToggle = new TimelineMax({paused: true, reversed: true})
 contactToggle.to('.contact', .2, { y: '-100%' })
 
 let contactBottom =  new TimelineMax({paused: true, reversed: true})
 contactBottom.to('.bottom', .2, { display: 'block' })
 
 document.querySelector('.open-convo').addEventListener('click', (e) => {
     e.preventDefault()
     contactToggle.reversed() ? contactToggle.play() : contactToggle.reverse()
     contactBottom.reversed() ? contactBottom.play() : contactBottom.reverse()
 })
}





//Show My Works

document.querySelectorAll('.trigger').forEach(triggers => {
    triggers.addEventListener('click', (e) => {
        e.preventDefault()
        TweenMax.to('.left', .8, { width: '100%', ease: Expo.easeOut })
        TweenMax.to('.right', .8, { width: '0%', ease: Expo.easeOut })
        TweenMax.to('.full-view-work', .5, { x: '0%', ease: Expo.easeOut, delay: .5 })
        TweenMax.staggerFrom('.projects li', .5, {opacity: 0, x: -20, delay: .5,  ease:Expo.easeOut}, .2)
   })
    
})


//Close Work
document.querySelector('.close-work').addEventListener('click', () => {
    TweenMax.to('.left', .8, { width: '50%', ease: Expo.easeOut })
    TweenMax.to('.right', .8, { width: '50%', ease: Expo.easeOut })
    TweenMax.to('.full-view-work', .5, { x: '-100%', ease: Expo.easeOut})
})






//Check for DOM
let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
        clearInterval(stateCheck)
        //Document ready
        TweenMax.staggerFrom('.bucket-header h1', 2, {x: 30, opacity: 0, ease: Expo.easeOut, delay: 1}, 0)
        TweenMax.from('.scroll', 2, { x: -30, opacity: 0, ease: Expo.easeOut, delay: 1 })
        TweenMax.to('.pre-logo', .5, {opacity: 0})
        TweenMax.to('.preloader', .5, {width: '0%', delay: 1})
    }
}, 3000)



