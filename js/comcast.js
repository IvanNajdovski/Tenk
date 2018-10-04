$(document).ready(function() {
    $(window).on("mousemove", function(e){
        e.stopPropagation()
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var page = $(window).outerWidth()/2;
        console.log(mouseX,mouseY)
        if(mouseX > page && mouseY < 600){
            //console.log("you are on the right");
            $(".background__front").css("cursor","url(../img/right-arrow.png), auto")
            $(".background-main-header").css("cursor","url(../img/right-arrow.png), auto")
        }else{
            $(".background__front").css("cursor","url(../img/left-arrow.png), auto")
            $(".background-main-header").css("cursor","url(../img/left-arrow.png), auto")
            //console.log("you are on the left")
        }
        if(mouseY > 700){
            $("body").css("cursor","unset")
        }
    });
    $(".background__front").on("click", function(){
        console.log("mkey")
    })
    $(".background-main-header").on("click", function(e){
        e.stopPropagation()
        console.log("mkey")
    })
    $("body").on("click",function(){
        //window.location.replace('/');
    })
});
