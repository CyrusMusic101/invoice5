$(document).ready(function(){
    $('.mobilebtn-show').click(function(){
        $('.HT-headertop').toggleClass('active');
    })

    $('.HT-headertop .NT-navigation__links li').click(function(){
        $(this).siblings().removeClass('active');
        $(this).toggleClass('active');
    })
