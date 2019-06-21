import {TweenMax, Power2, TimelineLite, Expo, Back, TweenLite, Power4} from "gsap/TweenMax";

document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault()

    TweenMax.to('h1', .5, {
        x: 300
    })
})
