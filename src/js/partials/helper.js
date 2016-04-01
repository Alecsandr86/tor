//Так приятней :)
window.log = function(param){
    console.log(param);
};
$(document).ready(function(){

    //Chrome Smooth Scroll
    try {
        $.browserSelector();
        if($("html").hasClass("chrome")) {
            $.smoothScroll();
        }
    } catch(err) {

    };
    
    
    $('.logo').bind('click',function(){
        alert('ok')
    });
    
    
    var menu = $('.rm-nav').rMenu({
        minWidth: '993px'
    });
    
    $(".rm-toggle").bind("click", function() {
        this.classList.toggle("rm-active");
    });



    /********************************
     *   Слайдер-Карусель Swiper
     ********************************/
    var sliderName = '.swiper';


    //initialize swiper when document ready
    var mySwiper = new Swiper (sliderName, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        autoplay: 5000,
        followFinger:true,
        
        // Navigation arrows
        nextButton: '.swiper-next',
        prevButton: '.swiper-prev',
        


    });

    // avto stop hover
    $(sliderName).bind('mouseenter', function(){
        mySwiper.stopAutoplay()
    });
    $(sliderName).bind('mouseleave', function(){
        mySwiper.startAutoplay()
    });




    // collbek для слайдера
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var animationNameOne = 'animated bounceInLeft';
    var animationNameTwo = 'animated bounceInRight';


    mySwiper.on('onSlidePrevStart', function () {
        $('.cal span').css({"opacity": "0"});
        
    });

    mySwiper.on('onSlideNextStart', function () {
        $('.cal span').css({"opacity": "0"});
        
    });

    mySwiper.on('onSlidePrevEnd', function () {
        $('.cal span').css({'opacity': '1'}).addClass(animationNameOne).one(animationEnd, function () {
            $(this).removeClass(animationNameOne);
        });
    });

    mySwiper.on('onSlideNextEnd', function () {
        $('.cal span').css({'opacity': '1'}).addClass(animationNameTwo).one(animationEnd, function () {
            $(this).removeClass(animationNameTwo);
        });
    });
    
    // ВТОРОЙ

    var sliderName2 = '.examples-slid';


    //initialize swiper when document ready
    var mySwiper2 = new Swiper (sliderName2, {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        speed: 700,
        followFinger:true,

        // Navigation arrows
        slideNextClass: '.ex-next',
        slidePrevClass: '.ex-prev',
        nextButton: '.swiper-next2',
        prevButton: '.swiper-prev2',



    });
    

    /********************************
     *   \Слайдер-Карусель Swiper\
     ********************************/
    
 $('.footer-menu').bind('click',function(){
     $(this).toggleClass('rm-active').next('ul').slideToggle();
 })

    /*******************************
     *   ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ
     *******************************/
    $('a[href^="#nav"]').click(function(){
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top},1000,"swing");
        return false;
    });

    /*******************************
     *   \ПЛАВНЫЙ ПЕРЕХОД ПО ЯКОРЯМ\
     *******************************/


    /*******************************
     *          popapMagnific
     *******************************/
    $('.button-form .button').magnificPopup({
        type: 'inline',
        preloader: false,
        closeOnBgClick: true,
        showCloseBtn:false
    });
    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });


    /*******************************
     *         \popapMagnific\
     *******************************/
});


$(window).bind("load resize",function() {

    var height = $(window).height();
    var width = $(window).width();
    
    if(width > 992){
        $('.immobilien-box .item').hoverIntent(makeTall,makeShort);
        function makeTall(){$(this).addClass('active').animate({"height":'160','top':'-23px','marginBottom':'-23px' },300);}
        function makeShort(){$(this).removeClass('active').animate({"height":'138','top':'0','marginBottom':'0'},300);}
    }else{
        $('.immobilien-box .item').hoverIntent(makeTall,makeShort);
        function makeTall(){$(this).addClass('active');}
        function makeShort(){$(this).removeClass('active');}
    }

});