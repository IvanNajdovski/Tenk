function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom -70) {
        a.addClass("active");
    } else {
        a.removeClass("active");
    }
};

$(document).ready(function() {
    setTimeout(function () {
        $(".logo__dot").addClass("active");
    }, 11000);
    $(window).on("mousemove", function(e){
        e.stopPropagation()
        var mouseX = e.pageX;
        var mouseY = e.pageY;
        var page = $(window).outerWidth()/2;
        console.log(mouseX,mouseY)
        if(mouseX > page && mouseY < 600){

            $(".background__front").css("cursor","url(../img/right-arrow.png), auto");
            $(".background-main-header").css("cursor","url(../img/right-arrow.png), auto");
            if($(".background-main-header").attr("aria-label")==="Comcast Retreat"){
                $(".arrow__link").attr("href","/sandals");
            }else if($(".background-main-header").attr("aria-label")==="Sandals Resort") {
                $(".arrow__link").attr("href", "/training");
            }else if($(".background-main-header").attr("aria-label")==="Training Shots") {
                $(".arrow__link").attr("href", "/perlota");
            }else if($(".background-main-header").attr("aria-label")==="Cabeza Pelota") {
                $(".arrow__link").attr("href", "/comcast");
            }
        }else{
            $(".background__front").css("cursor","url(../img/left-arrow.png), auto");
            $(".background-main-header").css("cursor","url(../img/left-arrow.png), auto");
            if($(".background-main-header").attr("aria-label")==="Comcast Retreat"){
                $(".arrow__link").attr("href","/perlota");
            }else if($(".background-main-header").attr("aria-label")==="Sandals Resort") {
                $(".arrow__link").attr("href", "/comcast");
            }else if($(".background-main-header").attr("aria-label")==="Training Shots") {
                $(".arrow__link").attr("href", "/sandals");
            }else if($(".background-main-header").attr("aria-label")==="Cabeza Pelota") {
                $(".arrow__link").attr("href", "/training");
            }
        }
        if(mouseY > 700){
            $("body").css("cursor","unset")
        }
    });
    $(".background__front").on("mousemove", function(e){
        var eventX = e.pageX;
        var eventY = e.pageY;
        var item  = $(this).offset();
        var height = $(this).height()/2;
        var width = $(this).width()/2;

        var offsetX = (width - eventX)/30
        var offsetY = (height - eventY)/30
        $(".background__front").css("transform",`matrix(1,0,0,1,${offsetX},${offsetY}`)
        $(".background__behind").css("transform",`matrix(1,0,0,1,-${offsetX},-${offsetY}`)
    })
    $(".production__box-plane").on("mousemove", function(e){
        var eventX = e.pageX;
        var eventY = e.pageY;
        var item  = $(this).offset();
        var height = $(this).height()/2;
        var width = $(this).width()/2;
        var offsetX = ((width + item.left) - eventX)/5
        var offsetY = ((height + item.top) - eventY)/5
        $(this).parent("div").css("transform",`matrix(1,0,0,1,${offsetX},${offsetY}`)
        //$(".production__box-plane").css("transform",`matrix(1,0,0,1,-${offsetX},-${offsetY}`)
    })
    $(".background-main-header").on("click", function(e){
        e.stopPropagation()
        console.log("mkey")
    })
    $("body").on("click",function(){
        //window.location.replace('/');
    })

    $(window).on("resize scroll", function () {
        isScrolledIntoView($(".line-1"));
        isScrolledIntoView($(".bold-1"));
        isScrolledIntoView($(".line-2"));
        isScrolledIntoView($(".bold-2"));
        isScrolledIntoView($(".line-3"));
        isScrolledIntoView($(".bold-3"));
        isScrolledIntoView($(".plane-1"));
        isScrolledIntoView($(".plane-2"));
        isScrolledIntoView($(".plane-3"));

    });
    var $header=$(".background-main-header");
    var $text = $(".background-main-header").attr("aria-label").split("");
    console.log($text)


    for(let item of $text){
        $header.append(`<span class="top-span">${item}</span>`)

    }
    setTimeout(function(){
        var allSpans = $(".top-span");
        console.log(allSpans)
        let delay =0;
        for(let val of allSpans){
            console
            if(val.innerText === ""){

            val.style.width = "5rem";
            val.style.height = "4rem";
            val.style.content = "";
            val.style.display = "block";

            }
            //val.style.fontSize = "12rem";
            delay = delay + 0.1
            val.classList.add("active")
            val.style.transitionDelay = `${delay}s`
        }
    },500);
    if($(window).innerWidth() > 800){
        console.log("hey")
        $(".iframe").attr("width","800");
        $(".iframe").attr("height","440");
    }else if($(window).width() < 350){
        $(".iframe").attr("width","300");
        $(".iframe").attr("height","220");
    }else if($(window).width() < 400){
        $(".iframe").attr("width","350");
        $(".iframe").attr("height","265");
    }else if($(window).width() < 600){
        $(".iframe").attr("width","400");
        $(".iframe").attr("height","300");
    }else if($(window).innerWidth() < 800){
        console.log("hey")
        $(".iframe").attr("width","600");
        $(".iframe").attr("height","350");
    }
    $(".mobile__menu__label").on("click",function(){
        $(".mobile__popup").toggleClass("active")
    })





});
