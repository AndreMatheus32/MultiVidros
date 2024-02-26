$(function () {

    $('.section-2-slides .mosaico-wraper').slick({
        centerMode: false ,
        slidesToShow:6,
        arrows:false ,
        responsive: [
            {
                breakpoint: 768,
                settings:{
                    centerMode:true ,
                    slidesToShow:3
                } ,
             
            } , 
            {
                breakpoint:580 ,
                settings: {
                    centerMode:true ,
                    slidesToShow: 2
                }
            } ,
            {
                breakpoint:380 ,
                settings: {
                    centerMode:true ,
                    slidesToShow: 1 ,
                    infinite: false
                }
            }
            
        ]
    });


    $('.section-3-commentary .slide').slick({
        centerMode: false ,
        slidesToShow:1,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        dotsClass:'dots',

    })





})