//Slider Carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        center:true,
        responsive:{
            0:{
                items:1
            },
            350:{
                items:1.2
            },
            500:{
                items:1.5
            },
            650:{
                items:2
            },
            1050:{
                items:3
            },
            1300:{
                items:4
            }
        }
    });
});


