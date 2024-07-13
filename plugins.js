$(document).ready(function(){

    //     var myCarousel = document.querySelector('.carousel')
    // var carousel = new bootstrap.Carousel(myCarousel)
    //     // $('.carousel').carousel({
    //     //     interval:500
    
    //     // });
    var myCarousel = document.querySelector('#myslide')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 500,
      wrap: false
    })
    
    });

// change color theme in option box
var colorLi =document.querySelector(".color-option ul li");
colorLi.eq(0).css()
    