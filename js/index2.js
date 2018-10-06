var myIndex = 0;
var myIndexTwo = 0;
// --------------FUNCTION FOR THE LINK SEE MORE--------------
 function index(a){
     var link = document.getElementsByClassName("see__box-link");
     
     if(a-1===0){
         link[0].setAttribute("href","/comcast")
     }else if(a-1===1){
         link[0].setAttribute("href","/sandals")
     }else if(a-1===2){
         link[0].setAttribute("href","/training")
     }
     else if(a-1===3){
         link[0].setAttribute("href","/perlota")
     }
 }

function carousel() {

    var i;
    var x = document.getElementsByClassName("mySlides");
    var y =document.getElementsByClassName("mySlides__background");
    var box = document.getElementsByClassName("top__header-box");
    var see = document.getElementsByClassName("see__box")
    var text = document.getElementsByClassName("top__header-item-header");
    var loadingBar = document.getElementsByClassName("loading__box__bar");
     ////STYLING THE IMAGES THE MINI IMAGES AND THE LIST ITEMS NAMES
    if(box[0].classList.contains("active")){
        box[0].classList.remove("active");
        see[0].classList.remove("active1")
    }

    for (i = 0; i < x.length; i++) {
        // text[i].style.transform = "rotateY(90deg)"
        text[i].style.display = "none"
        x[i].style.display = "none";
        x[i].style.transform = "matrix(1,0,0,1,-700,0)";

        y[i].style.display = "none";
        text[i].innerText = ""
        if(x[i].classList.contains("active")) {
            if(myIndex === x.length){
                loadingBar[0].classList.remove("pending");


            }else{
                loadingBar[myIndex].classList.remove("pending");
            }

            loadingBar[myIndex - 1].classList.remove("active");
            x[myIndex - 1].classList.remove('active');

        }
        if(y[i].classList.contains("active")){
            y[i].classList.remove("active")
            x[i].classList.remove("active");
        }

    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    text[myIndex-1].style.display = "flex";
    // x[myIndex-1].classList.add("active");
    x[myIndex-1].style.display = "block";
    y[myIndex-1].style.display = "block";
    index(myIndex)
    var letters = text[myIndex-1].getAttribute("aria-label").split("");
    for(let item of letters){
        var span = document.createElement("span");
        span.classList.add("top-span")
        span.innerText = item
        text[myIndex-1].appendChild(span);
    }
    setTimeout(function(){
        var allSpans = document.getElementsByClassName("top-span");

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
    },500);
    setTimeout(function(){
        y[myIndex-1].style.backgroundImage = `url("../img/banner_${myIndex}_background.jpg")`;
        y[myIndex-1].classList.add("active");
    },6000)
    setTimeout(function(){
        box[0].classList.add("active");
        see[0].classList.add("active1");
    },11000)

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



    setTimeout(carousel, 12000); // Change image every 12 seconds


}
setTimeout(function(){
    carousel();
},4500)
