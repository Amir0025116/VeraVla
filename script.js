const newOpen = document.querySelector ('.new-open')
const newButton = document.querySelector  ('.new-button') 
const ph = document.querySelector('.header-phone')

 
document.querySelector('.burger').addEventListener('click', function () {
    this.classList.toggle('active');
    ph.classList.toggle('open')
})

new Swiper('.image-slider', { 
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
    }, 
    spaceBetween: 20,
    grabCursor: true,    
      
        breakpoints: { 
            1300: {
                slidesPerView: 3,
                spaceBetween: 20
            }, 
            1039: {
                slidesPerView: 2.5, spaceBetween: 20

            }, 
            848: {
                slidesPerView: 2, 
                spaceBetween: 20
            }, 
            660: {
                slidesPerView: 1.5, 
                spaceBetween: 20
            }, 
            200: {
                slidesPerView: 1, 
                spaceBetween: 50
            }, 
        }
    }) 
document.querySelector('.new-button').addEventListener('click', function(){
    document.querySelector('.new-open').classList.toggle('open')
    document.querySelector('.new-menu__list ul').classList.toggle('top')
})
document.querySelector('.new-button2').addEventListener('click', function(){
    document.querySelector('.new-open2').classList.toggle('open')
})
document.querySelector('.new-button3').addEventListener('click', function(){
    document.querySelector('.new-open3').classList.toggle('open')
})



document.querySelector('.header-menu').addEventListener('click', function(){
    document.querySelector('.menu').style.transform = 'translateY(0)'; 
}) 
document.querySelector('.menu-card   img').addEventListener('click', function(){
    document.querySelector('.menu').style.transform = 'translateY(-100%)';
})
 
 


// animation

 