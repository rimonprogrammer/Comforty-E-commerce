$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop()){
            $('.navbar').addClass('actived');
            $('.nav-link').css('color', 'white');
            $('.contactNav').css('color', ('white'));
            $('.contactNav span').css('color', ('white'));
        }
        else{
            $('.navbar').removeClass('actived');
            $('.nav-link').css('color', 'black');
        }
    })
})