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
        $(".reel__box").addClass("active");
        $(".about__box").addClass("active");
        $(".see__box").addClass("active");
    },5000);
    setTimeout(function(){
        $(".logo__dot").addClass("active");
    },11000);

    $(document).on("mousemove", function(e){

       var pageX = e.pageX;
       var pageMiddle = $(window).outerWidth()/2
        //console.logpa
        if($(".mySlides__background").hasClass("active")){
            console.log("yes it has")
            if(pageX > pageMiddle){
                console.log("yes")
                $(".mySlides.active").css("transform",`matrix(1,0,0,1,${(pageX-pageMiddle)/20},${(pageX-pageMiddle)/20}`);
                $(".mySlides__background").css("transform",`matrix(1,0,0,1,-${(pageX-pageMiddle)/20},-${(pageX-pageMiddle)/20}`);
            }else{
                $(".mySlides").css("transform",`matrix(1,0,0,1,${(pageX-pageMiddle)/20},${(pageX-pageMiddle)/20}`);
                $(".mySlides__background").css("transform",`matrix(1,0,0,1,-${(pageX-pageMiddle)/20},-${(pageX-pageMiddle)/20}`);
            }
        }

       console.log(pageX)

    });










})