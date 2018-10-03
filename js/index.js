function isScrolledIntoView(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("active");
    } else {
        a.removeClass("active");
    }
};

function border(a){
    if(a.hasClass("active")){
        a.each(function(){
            var number = Math.random()*4
            console.log("hello")
            $(this).css("transition-delay",`${number}s`);
        })
        setTimeout(function(){
            a.addClass("full")
        },200)
    }
}
function isScrolledIntoViewClassStay(a) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = a.offset().top;
    var elemBottom = elemTop + a.outerHeight();

    if (elemBottom > docViewTop && elemTop < docViewBottom) {
        a.addClass("active");
    }
};
var never = ["About Us.", "Following.", "Over Budget.", "Limited.", "Duplicated.", "Compromising.", "Out Of Touch.", "Trown.", "Ordinary.", "Behind.", "Bloated."];
var always = ["About You.", "Leading.", "On Time.", "Creative.", "Impersonating.", "Compelling.", "On Call.", "Able.", "Sharp.", "Focused", "Streamlined."];
function leterChange(a,b) {
    var counter = 0;
    setInterval(function () {
        var delay = 0;
        $(a).empty();
        for (var j = 0; j < b[counter].length; j++) {
            delay = delay + 0.1
            $(a).append($("<span></span>").text(`${b[counter][j]}`));
            $(a).children("span:last-child").css("transition-delay", `${delay}s`);
        }
        setTimeout(function () {
            $(a).children("span").addClass("active");
        }, 500)
        counter++;
        if (counter > b.length - 1) {
            counter = 0
        }
    }, 4000);


}


$(document).ready(function () {
    setTimeout(function () {
        $(".top__animation-horizontal").addClass("active");
        $(".top__animation-vertical").addClass("active");
    }, 500);
    setTimeout(function () {
        $(".top__animation-horizontal").addClass("unactive");
        $(".top__animation-vertical").addClass("unactive");
    }, 2000);
    setTimeout(function () {
        $(".top__animation-horizontal-top").addClass("full");
        $(".top__animation-vertical-left").addClass("full");
        $(".top__animation-horizontal-bottom").addClass("full");
        $(".top__animation-vertical-right").addClass("full");
    }, 2000);
    setTimeout(function () {
        $(".top__animation-horizontal").addClass("move");
        $(".top__animation-vertical").addClass("move");
    }, 2300);
    setTimeout(function () {
        $(".top__animation-horizontal-top").addClass("move");
        $(".top__animation-vertical-left").addClass("move");
        $(".top__animation-horizontal-bottom").addClass("move");
        $(".top__animation-vertical-right").addClass("move");
    }, 3000);
    setTimeout(function () {
        $(".top__left").addClass("active");
        $(".top__right").addClass("active");
        $(".bottom__left").addClass("active");
        $(".bottom__right").addClass("active");
    }, 4000);
    setTimeout(function () {
        $(".loading__box").addClass("active");
        $(".reel__box").addClass("active");
        $(".about__box").addClass("active");
        $(".see__box").addClass("active");
    }, 5000);
    setTimeout(function () {
        $(".logo__dot").addClass("active");
    }, 11000);

    $(document).on("mousemove", function (e) {

        var pageX = e.pageX;
        var pageMiddle = $(window).outerWidth() / 2
        //console.logpa
        if ($(".mySlides__background").hasClass("active")) {

            if (pageX > pageMiddle) {

                $(".mySlides.active").css("transform", `matrix(1,0,0,1,${(pageX - pageMiddle) / 20},${(pageX - pageMiddle) / 20}`);
                $(".mySlides__background").css("transform", `matrix(1,0,0,1,-${(pageX - pageMiddle) / 20},-${(pageX - pageMiddle) / 20}`);
            } else {
                $(".mySlides").css("transform", `matrix(1,0,0,1,${(pageX - pageMiddle) / 20},${(pageX - pageMiddle) / 20}`);
                $(".mySlides__background").css("transform", `matrix(1,0,0,1,-${(pageX - pageMiddle) / 20},-${(pageX - pageMiddle) / 20}`);
            }
        }
    });
    $(window).on("resize scroll", function () {
        isScrolledIntoViewClassStay($(".bottom__text__never"));
        isScrolledIntoViewClassStay($(".bottom__text__always"));
        isScrolledIntoViewClassStay($(".awards__box-header-header"));
        isScrolledIntoViewClassStay($(".awards__box-items-logo-curtain-1"));
        isScrolledIntoViewClassStay($(".awards__box-header-header"));
        isScrolledIntoViewClassStay($(".awards__box-items-logo-curtain-2"));
        isScrolledIntoViewClassStay($(".awards__box-items-logo-curtain-3"));
        isScrolledIntoViewClassStay($(".awards__box-items-logo-curtain-4"));
        isScrolledIntoViewClassStay($(".awards_-box-header-logo-img-1"));
        isScrolledIntoViewClassStay($(".awards_-box-header-logo-img-2"));
        isScrolledIntoViewClassStay($(".awards_-box-header-logo-img-3"));
        isScrolledIntoViewClassStay($(".awards_-box-header-logo-img-4"));
        isScrolledIntoView($(".sayhi__header"));


        isScrolledIntoViewClassStay($(".border"));
        border($(".border"))


    });

    // -----------------DONT KNOW WHY THIS CODE HAD BUGS BUT IT SHOULD BE EQUAL TO THE ONE BELLOW---------------
    // $(window).one("resize scroll", function (e) {
    //     if ($(".bottom__text__never").hasClass("active")) {
    //         leterChange($(".bottom__text__never-variable-header"),never);
    //         leterChange($(".bottom__text__always-variable-header"),always);
    //
    //     }
    // });
    $(window).on("resize scroll", function (e) {
        if ($(".bottom__text__never").hasClass("active")) {
            leterChange($(".bottom__text__never-variable-header"),never);
            leterChange($(".bottom__text__always-variable-header"),always);
            $( this ).off( e );
        }
    });
    $(window).on("resize scroll", function () {
        isScrolledIntoView($(".bottom__line"));
        var height=0;
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(".bottom__line").offset().top;
        var elemBottom = elemTop + $(".bottom__line").outerHeight();
        height = docViewBottom - elemTop - 50
        $(".bottom__line").css("height",`${height}px`)
    });
    $(".backtotop").on("click", function(){
        $("html,body").animate({
            scrollTop:0,
        },2000)
    })



})