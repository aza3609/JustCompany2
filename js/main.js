
const mainAboutItem = document.querySelectorAll(".main-about__item");
/* -------------- 대문이미지 전환 -----------------*/


const order = document.querySelectorAll(".main-top__order");
const introImg = document.querySelectorAll(".main-top__img");


var i = 0;
function changeImg(){

     i++;
     if(i>=introImg.length){i=0}

     order.forEach(other_btn => {
          other_btn.classList.remove('active');
     });
     introImg.forEach(other_cont => {
     other_cont.classList.remove('active');
     });
     
     console.log(i);

     order[i].classList.add('active');
     introImg[i].classList.add('active');

}
setInterval("changeImg()",4000)

/*-
let Timer = setInterval("changeImg()",4000)

order.forEach(function(order_btn, index){
       
       order_btn.addEventListener('click',function(){
       order.forEach(other_btn => {
         other_btn.classList.remove('active');
       });
       introImg.forEach(other_cont => {
         other_cont.classList.remove('active');
       });

       order[index].classList.add('active');
       introImg[index].classList.add('active');
       
     });
   });


/*-function showImage() {
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


/*-------
var windowWidth = window.innerWidth;

mainAboutItem.forEach(function(about_btn, index){
     about_btn.addEventListener('mouseenter',function(){

       mainAboutItem.forEach(other_btn => {
         other_btn.style.width="25%";
       });
       mainAboutItem[index].style.width="40%";
     });
     about_btn.addEventListener('mouseleave',function(){

          mainAboutItem.forEach(other_btn => {
            other_btn.style.width="25%";
          });
          mainAboutItem[index].style.width="25%";
        });
   });
   
window.addEventListener("resize",handleResize);
 

/*------- 회사소개 모션 -------
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
    mainAboutMenu3.addEventListener("mouseenter", mainAboutAction3);
    mainAboutMenu4.addEventListener("mouseenter", mainAboutAction4);
    mainAboutMenu1.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu2.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu3.addEventListener("mouseleave", mainAboutDeaction);
    mainAboutMenu4.addEventListener("mouseleave", mainAboutDeaction);*/
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