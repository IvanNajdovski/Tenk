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
            //console.log("you are on the right");
            $(".background__front").css("cursor","url(../img/right-arrow.png), auto");
            $(".background-main-header").css("cursor","url(../img/right-arrow.png), auto");
        }else{
            $(".background__front").css("cursor","url(../img/left-arrow.png), auto");
            $(".background-main-header").css("cursor","url(../img/left-arrow.png), auto");
            //console.log("you are on the left")
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
        // console.log(item , " height =",height,"wight =",width);
        // console.log(eventX)
        // console.log(eventY)
        // console.log("mkey")
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
        console.log(item , " height =",height,"wight =",width);
        console.log(eventX)
        console.log(eventY)
        console.log("mkey")
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
});
