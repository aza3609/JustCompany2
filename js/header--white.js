const header = document.querySelector("header");
const headerLogo = document.querySelector(".header-logo img");
const headerList1 = document.querySelector(".header-li--1");
const headerList2 = document.querySelector(".header-li--2");
const headerList3 = document.querySelector(".header-li--3");

headerList1.addEventListener('mouseover',function(){
  headerList1.style.backgroundColor = "rgb(243, 243, 243)"
})
headerList1.addEventListener('mouseleave',function(){
  headerList1.style.backgroundColor = "transparent"
})

headerList2.addEventListener('mouseover',function(){
  headerList2.style.backgroundColor = "rgb(243, 243, 243)"
})
headerList2.addEventListener('mouseleave',function(){
  headerList2.style.backgroundColor = "transparent"
})

headerList3.addEventListener('mouseover',function(){
  headerList3.style.backgroundColor = "rgb(243, 243, 243)"
})
headerList3.addEventListener('mouseleave',function(){
  headerList3.style.backgroundColor = "transparent"
})

let prevScrollTop = 0;
window.addEventListener("scroll", function() {
  let nowScrollTop = window.scrollY;
  if (nowScrollTop > prevScrollTop){
    //스크롤 내림
        header.style.transform = "translateY(-110px)"
        console.log('Down!');
        header.style.height = "110px"
        header.style.transition = "height 0s ease-in-out"
        header.style.transition = "transform 0.7s ease-in-out"
        header.style.boxShadow = "none"
  }
  else if(nowScrollTop < prevScrollTop){
    //스크롤 올림
    header.style.transform = "translateY(0px)"
    header.style.backgroundColor = "white"
    header.style.color = "black"
    console.log('Up!');
    headerLogo.src = "src/justcompany-logo.svg"
    header.style.height = "110px"
    header.style.transition = "height 0s ease-in-out"
    header.style.transition = "transform 0.7s ease-in-out"
    header.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)"
    document.querySelector(".header-active-bg").style.display ="none"
  }
    prevScrollTop = nowScrollTop;

    if (nowScrollTop < 20){
      header.style.color = "white"
      header.style.backgroundColor = 'transparent'
      headerLogo.src = "src/justcompany-logo_white.svg"
      headerList1.style.backgroundColor = 'transparent'
      headerList2.style.backgroundColor = 'transparent'
      headerList3.style.backgroundColor = 'transparent'
      header.style.boxShadow = "none"
    }
  });



function headerDropdown() {
    header.classList.add("over");
    header.style.color = "black"
    header.style.backgroundColor = "white"
    headerLogo.src = "src/justcompany-logo.svg"
    document.querySelector(".header-active-bg").style.display ="block"
    
    header.style.height = "290px"
    header.style.transition = "height 0.7s ease-in-out"
};

function headerDropup() {
  header.classList.remove("over");
  headerLogo.src = "src/justcompany-logo_white.svg"
  header.style.height = "110px"
  header.style.transition = "height 0s ease-in-out"
  document.querySelector(".header-active-bg").style.display = "none"
  
  let nowScrollTop = window.scrollY;
  if (nowScrollTop < 20){
    header.style.color = "white"
    header.style.backgroundColor = 'transparent'
  }
  else {
    headerLogo.src = "src/justcompany-logo.svg"
  }
};


header.addEventListener("mouseover", headerDropdown);
header.addEventListener("mouseleave", headerDropup);




/* function headerToggle() {
  header.classList.toggle("active");
  header.querySelector(".header__logo img").classList.toggle("active");
}

function handleResize() {
  const width = window.innerWidth;
  if (header.classList.contains("active")) {
    if (width > 900) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
  }
} */

/* hamburgerBtn.addEventListener("click", headerToggle);
window.addEventListener("resize", handleResize); */