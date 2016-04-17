
$(document).ready(function(){
    /*******************************
     *          mailScript
     *******************************/
    
     $(function(){
            var nav = $('.nav-aside ul li ul');
            if ( nav.is("ul") ) {
                nav.parent('li').addClass('trigon')
            }


            var menu = $('.rm-nav').rMenu({
                minWidth: '993px'
            });

            $(".rm-toggle").bind("click", function() {
                this.classList.toggle("rm-active");
            });

            $(".footer-menu").bind('click',function(){
                $(this).toggleClass('rm-active').parents('.footer-mobail').find('.list-footer').slideToggle();
            });
            
            $('a[href^="#nav"],a[href^="#l"]').click(function(){
                var target = $(this).attr('href');
                $('html, body').animate({
                    scrollTop: $(target).offset().top},1000,"swing");
                return false;
            });
            
            
            if($('.wr-slider').parents().is('body')){
                $('.call').css({"display":"none"});
                $('footer').css({"marginBottom":"0"})
            }
            
           
            if($(".contacts").next("footer").parents().is("body")){
                $("footer").css({"margin":"0"});
            }

        });

    /*******************************
     *          mailScript
     *******************************/

 
    /********************************
     *   Слайдер-Карусель Swiper
     ********************************/
    
    if ($('.swiper').parents().is('body') ) {
        $(function(){
            // collbek для слайдера
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            var animationNameOne = 'animated bounceInLeft';
            var animationNameTwo = 'animated bounceInRight';



            var sliderName = '.swiper';
            //initialize swiper when document ready
            var mySwiper;

            mySwiper = new Swiper (sliderName, {
                // Optional parameters
                direction: 'horizontal',
                loop: true,
                speed: 700,
                autoplay: 5000,
                followFinger:true,

                // Navigation arrows
                nextButton: '.swiper-next',
                prevButton: '.swiper-prev'

            });

            // avto stop hover
            $(sliderName).bind('mouseenter', function(){
                mySwiper.stopAutoplay()
            });
            $(sliderName).bind('mouseleave', function(){
                mySwiper.startAutoplay()
            });


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
            

        });
        
    }

    // ВТОРОЙ
    $(function(){
        var sliderName2 = '.examples-slid';

        new Swiper (sliderName2, {
            // Optional parameters
            direction: 'horizontal',
            loop: true,
            speed: 700,
            followFinger:true,

            // Navigation arrows
            slideNextClass: '.ex-next',
            slidePrevClass: '.ex-prev',
            nextButton: '.swiper-next2',
            prevButton: '.swiper-prev2'

        });
    });
   
   
    /********************************
     *   \Слайдер-Карусель Swiper\
     ********************************/

    
    /*******************************
     *          popapMagnific
     *******************************/
    $(function(){

        $('.button-form .button,.popap-button').magnificPopup({
            type: 'inline',
            preloader: false,
            closeOnBgClick: true,
            showCloseBtn:false
        });
        $(document).on('click', '.popup-modal-dismiss', function (e) {
            e.preventDefault();
            $.magnificPopup.close();
        });

    });
    /*******************************
     *         \popapMagnific\
     *******************************/
    
});

$(window).bind("load resize",function() {

    //var height = $(window).height();
    var width = $(window).width();

    /*******************************
     *           hover blok
     *******************************/
    $(function(){
        if(width > 992){

            $('.immobilien-box .item').bind({
                mouseenter :function(e){
                    $(this).addClass('active').animate({"height":'160','top':'-23px','marginBottom':'-23px' },300);
                },
                mouseleave : function(e){
                    $(this).removeClass('active').animate({"height":'138','top':'0','marginBottom':'0'},300);
                }
            });

        }else{

            $('.immobilien-box .item').bind({
                mouseenter :function(e){
                    $(this).addClass('active');
                },
                mouseleave : function(e){
                    $(this).removeClass('active');
                }
            });


        }
    });
   /*******************************
   *           \hover blok\
   *******************************/
    

    /*******************************
    *           боковые кнопки
    *******************************/

    var buttonUp = $('.button-up');
    var boxApplication = $(".application");
    $(function(){
        if(width > 992){
            buttonUp.css({'display':'block'});
            boxApplication.css({"display":"block"});

            // кнопка наверх

            $('#l-header')
                .waypoint(function(dire){
                    if (dire === 'down') {
                        buttonUp.animate({'left': '0'},700);
                    }
                    else {
                        buttonUp.animate({'left': '-100px'},700);

                    }
                }, {
                    offset: -400
                });
            // \кнопка наверх\


            // заказ звонка
            boxApplication.bind('click',function(){
                var boxApp = $(this).parent(".application-box").toggleClass("active");
                if($(".application-box").hasClass("active")){
                    boxApp.animate({"right":"0"},700)
                }else{
                    boxApp.animate({"right":"-320px"},700)
                }
            });

            // \заказ звонка\

        }else{
            buttonUp.css({'display':'none'});
            boxApplication.css({"display":"none"})
        }
    });

    /*******************************
     *           боковые кнопки
     *******************************/
    
    
});

$(function(){
    $('.loader-box,.loader').fadeIn(10); //показывает фон и индикатор
    $(window).load(function() {
        $('.loader-box,.loader').fadeOut(1000); //скрывает, после загрузки страницы
    });
});