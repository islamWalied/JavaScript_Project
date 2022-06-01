/*global document, $, window*/

$(document).ready(function () {
   
    "use strict";
    
    //adjust header height
    
    
    var myHeader = $(".header");
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
       
        myHeader.height($(window).height());
        
        $(".bxslider li").each(function () {
       
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
        });
        
    });
       
    //links add active class
    
    $(".links li a").on("mouseenter", function () {
       
        $(this).parent().addClass("active").siblings().removeClass("active");
    });
    
    $(".bxslider li").each(function () {
       
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        
    });
    
    //trigger the bx slider
    
    $(".bxslider").bxSlider({
        
        pager: false
        
    });
    //smooth scroll to div
    
    $(".links li a").on("click", function () {
       
        $("html, body").animate({
            
            scrollTop: $("#" + $(this).data("value")).offset().top
            
        }, 1000);
        
    });
    
    //our auto slider code
    
    (function autoSlider() {
      
        $(".slider .active").each(function () {
            
            if (!$(this).is(":last-child")) {
                
                $(this).delay(2000).fadeOut(1000, function () {
                    
                    $(this).removeClass("active").next().addClass("active").fadeIn(2000);
                    
                    autoSlider();
                    
                });
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                   
                    $(this).removeClass("active");
                    
                    $(".slider div").eq(0).addClass("active").fadeIn(1000);
                    
                    autoSlider();
                    
                });
            }
            
        });
        
    }());
    
    //trigger MixItUp
    
    $('#Container').mixItUp();
    
    //Adjust Shuffle links
    
    $(".shuffle li").on("click", function () {
       
        $(this).addClass("selected").siblings().removeClass("selected");
        
    });
    
    //trigger nice scroll
    
    $("html").niceScroll({
        
        cursorcolor: "#1abc9c",
        
        cursorwidth: "20px",
        
        cursorborder: "1px solid #1abc9c"
        
        
        
        
    });
});