const mainAboutMenu1 = document.getElementById("main-about__manu--1");
const mainAboutMenu2 = document.getElementById("main-about__manu--2");
const mainAboutMenu3 = document.getElementById("main-about__manu--3");
const mainAboutMenu4 = document.getElementById("main-about__manu--4");

/* -------------- 대문이미지 전환 -----------------*/

var image = ["src/main-top-4-4.jpg","src/main-top-1.jpg","src/main-top-3-3.jpeg"];
var i = 0;

const order1 = document.getElementById("main-top__order--1");
const order2 = document.getElementById("main-top__order--2");
const order3 = document.getElementById("main-top__order--3");

function showImage() {
    i++;
    if(i>=image.length){
     i=0
    }
    var objImg = document.getElementById("introImg");
    objImg.src = image[i];

    objImg.classList.remove("animationActive");
    void objImg.offsetWidth;
    objImg.classList.add("animationActive");

    console.log( i );



    setTimeout("showImage()", 4000);
}


/*------- 회사소개 모션 -------*/
function mainAboutAction1() {
     document.querySelector(".main-about__manu").style.gridTemplateColumns = "2fr 1fr 1fr 1fr"
    }
    function mainAboutAction2() {
        document.querySelector(".main-about__manu").style.gridTemplateColumns = "1fr 2fr 1fr 1fr"
       }
       function mainAboutAction3() {
        document.querySelector(".main-about__manu").style.gridTemplateColumns = "1fr 1fr 2fr 1fr"
       }
       function mainAboutAction4() {
        document.querySelector(".main-about__manu").style.gridTemplateColumns = "1fr 1fr 1fr 2fr"
       }
             
    function mainAboutDeaction() {
         document.querySelector(".main-about__manu").style.gridTemplateColumns = "1fr 1fr 1fr 1fr"
    }
    
    mainAboutMenu1.addEventListener("mouseenter", mainAboutAction1);
    mainAboutMenu2.addEventListener("mouseenter", mainAboutAction2);
    mainAboutMenu3.addEventListener("ouseenter", mainAboutAction3);
    mainAboutMenu4.addEventListener("ouseenter", mainAboutAction4);
    mainAboutMenu1.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu2.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu3.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu4.addEventListener("mouseleave", mainAboutDeaction);
/*-------
function orderClick1() {
     var objImg = document.getElementById("introImg");
     objImg.src = image[1];
}
function orderClick2() {
     var objImg = document.getElementById("introImg");
     objImg.src = image[2];
}
function orderClick3() {
     var objImg = document.getElementById("introImg");
     objImg.src = image[0];
}

order1.addEventListener('click',orderClick1)
order2.addEventListener('click',orderClick2)
order3.addEventListener('click',orderClick3)
-------*/