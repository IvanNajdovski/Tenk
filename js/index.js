$(document).ready(function(){
    setTimeout(function(){
        $(".top__animation-horizontal").addClass("active");
        $(".top__animation-vertical").addClass("active");
    },500);
    setTimeout(function(){
        $(".top__animation-horizontal").addClass("unactive");
        $(".top__animation-vertical").addClass("unactive");
    },2000);
    setTimeout(function(){
        $(".top__animation-horizontal-top").addClass("full");
        $(".top__animation-vertical-left").addClass("full");
        $(".top__animation-horizontal-bottom").addClass("full");
        $(".top__animation-vertical-right").addClass("full");
    },2000);
    setTimeout(function() {
        $(".top__animation-horizontal").addClass("move");
        $(".top__animation-vertical").addClass("move");
    },2300);
    setTimeout(function(){
        $(".top__animation-horizontal-top").addClass("move");
        $(".top__animation-vertical-left").addClass("move");
        $(".top__animation-horizontal-bottom").addClass("move");
        $(".top__animation-vertical-right").addClass("move");
    },3000);
    setTimeout(function(){
        $(".top__left").addClass("active");
        $(".top__right").addClass("active");
        $(".bottom__left").addClass("active");
        $(".bottom__right").addClass("active");
     },4000);
    setTimeout(function(){
        $(".loading__box").addClass("active");
    },5000);
    setTimeout(function(){
        $(".logo__dot").addClass("active");
    },7000);








})