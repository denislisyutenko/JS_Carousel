
// import Carousel from './carousel.js'; 
import SwipeCarousel from './swipe-carousel.js'; 

// const carousel = new SwipeCarousel('#carousel', '.slide', 1000); верная
const carousel = new SwipeCarousel({
    containerID: '#carousel',
    slideID: '.slide',
    interval: 1000,
    isPlaying: false
});

carousel.init();





