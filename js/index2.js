var myIndex = 0;
var myIndexTwo = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var loadingBar = document.getElementsByClassName("loading__box__bar")
     ////STYLING THE IMAGES THE MINI IMAGES AND THE LIST ITEMS NAMES
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
        if(x[i].classList.contains("active")) {
            if(myIndex === x.length){
                loadingBar[0].classList.remove("pending");
            }else{
                loadingBar[myIndex].classList.remove("pending");
            }


            loadingBar[myIndex - 1].classList.remove("active");
            x[myIndex - 1].classList.remove('active');

        }
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";

    x[myIndex-1].style.backgroundImage = `url("../img/banner_${myIndex}.png")`;
    loadingBar[myIndex-1].classList.add("active");
    if(myIndex > x.length-1){
        loadingBar[0].classList.add("pending");
    }else{
        loadingBar[myIndex].classList.add("pending");
    }

    setTimeout(function(){
        if (myIndex > x.length) {myIndex = 1}

        x[myIndex-1].classList.add('active');



    },500)


    setTimeout(carousel, 12000); // Change image every 4 seconds


}
setTimeout(function(){
    carousel();
},4500)
