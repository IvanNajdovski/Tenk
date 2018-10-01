var myIndex = 0;
var myIndexTwo = 0;


function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var text = document.getElementsByClassName("top__header-item-header")
    var loadingBar = document.getElementsByClassName("loading__box__bar")
     ////STYLING THE IMAGES THE MINI IMAGES AND THE LIST ITEMS NAMES
    for (i = 0; i < x.length; i++) {
        // text[i].style.transform = "rotateY(90deg)"
        text[i].style.display = "none"

        x[i].style.display = "none";
        if(x[i].classList.contains("active")) {

            if(myIndex === x.length){
                loadingBar[0].classList.remove("pending");

            }else{
                loadingBar[myIndex].classList.remove("pending");
            }


            loadingBar[myIndex - 1].classList.remove("active");
            x[myIndex - 1].classList.remove('active');
            text[myIndex -1].innerHTML = ""

        }
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    text[myIndex-1].style.display = "block"
    x[myIndex-1].style.display = "block";
    var letters = text[myIndex-1].getAttribute("aria-label").split("")
    for(let item of letters){
        var span = document.createElement("span");
        span.innerText = item
        text[myIndex-1].appendChild(span);

        //span.style.transition = "all 2s linear"
       // span.classList.add("active");




    }
    setTimeout(function(){
        var allSpans = document.getElementsByTagName("span");
        console.log(allSpans)
        let delay =0;
        for(let val of allSpans){
            if(val.innerText === ""){
                val.style.width = "3rem";
                val.style.height = "2rem";
                val.style.content = "";
                val.style.display = "block";

            }
            delay = delay + 0.1
            val.classList.add("active")
            val.style.transitionDelay = `${delay}s`
        }


    },500)
    console.log(letters);


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
