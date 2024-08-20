const header = document.querySelector("header");
const headerWrap = document.querySelector(".header-wrap");
const headerLogo = document.querySelector(".header-logo img");
const headerGnb = document.querySelectorAll(".header-gnb");
const headerList = document.querySelectorAll(".header-li");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerNav =document.querySelector(".hamburger-nav");

headerList.forEach((target) => target.addEventListener("mouseover",
  function(){
    target.style.backgroundColor = "rgb(249, 249, 249)"
window.addEventListener("scroll", function() {

  let nowScrollTop = window.scrollY;

  if (nowScrollTop < 20){
  target.style.backgroundColor = "transparent" }
  })
}
));
headerList.forEach((target) => target.addEventListener("mouseleave",
  function(){
    target.style.backgroundColor = "transparent"
  }
));

let prevScrollTop = 0;
window.addEventListener("scroll", function() {
  let nowScrollTop = window.scrollY;
  if (nowScrollTop > prevScrollTop){
    //스크롤 내림
    if(hamburgerNav.classList.contains("active")){
    } else {
      hamburgerBtn.classList.add("up");
    }
        headerWrap.classList.add("up");
        console.log('Down!');
        headerWrap.style.height = "105px"
        headerWrap.style.transition = "height 0s ease-in-out"
        headerWrap.style.transition = "transform 0.7s ease-in-out"
        hamburgerBtn.style.transition = "transform 0.7s ease-in-out"
        headerWrap.style.boxShadow = "none"
  }
  else if(nowScrollTop < prevScrollTop){
    //스크롤 올림
        if(hamburgerNav.classList.contains("active")){
        } else {
          hamburgerBtn.classList.remove("up");
          hamburgerBtn.src = "src/menu.svg"
        }
    headerWrap.classList.remove("up");
    headerWrap.style.backgroundColor = "white"
    headerWrap.style.color = "black"
    headerLogo.src = "src/justcompany-logo.svg"
    headerWrap.style.transition = "height 0s ease-in-out"
    hamburgerBtn.style.transition = "transform 0.7s ease-in-out"
    headerWrap.style.transition = "transform 0.7s ease-in-out"
    headerWrap.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.05)"
    document.querySelector(".header-active-bg").style.display ="none"
  }
    prevScrollTop = nowScrollTop;
    console.log(nowScrollTop);
    if (nowScrollTop < 20){
      hamburgerBtn.classList.remove("up");
      if(hamburgerNav.classList.contains("active")){
      } else {
        hamburgerBtn.src = "src/menu--white.svg"
      }
      headerWrap.classList.remove("up");
      headerWrap.style.color = "white"
      headerWrap.style.backgroundColor = 'transparent'
      headerLogo.src = "src/justcompany-logo_white.svg"
      headerWrap.style.boxShadow = "none"
    }
  });



function headerDropdown() {
  var windowWidth = window.innerWidth;
  if(windowWidth>1000){
    headerWrap.style.color = "black"
    headerWrap.style.backgroundColor = "white"
    headerLogo.src = "src/justcompany-logo.svg"
    document.querySelector(".header-active-bg").style.display ="block"
    headerWrap.style.height = "280px"
    header.style.transition = "height 0.7s ease-in-out"
  }
};

function headerDropup() {
  headerLogo.src = "src/justcompany-logo_white.svg"
  headerWrap.style.height = "105px"
  headerWrap.style.transition = "height 0s ease-in-out"
  document.querySelector(".header-active-bg").style.display = "none"
  
  let nowScrollTop = window.scrollY;
  if (nowScrollTop < 20){
    headerWrap.style.color = "white"
    headerWrap.style.backgroundColor = 'transparent'
    headerWrap.style.boxShadow = "none"
  }
  else {
    headerLogo.src = "src/justcompany-logo.svg"
  }
};

function headerClick(){
  hamburgerNav.classList.toggle("active");
  hamburgerBtn.classList.toggle("active");
  hamburgerBtn.src = "src/x.svg"
  if(hamburgerNav.classList.contains("active")){
  } else {
    hamburgerBtn.src = "src/menu.svg"
  }
  let nowScrollTop = window.scrollY;
  if (nowScrollTop < 20){
    if(hamburgerNav.classList.contains("active")){
    } else {
      hamburgerBtn.src = "src/menu--white.svg"
    }
  }
}

function headerResize(){
  var windowWidth = window.innerWidth;
  if(windowWidth>=1000){
    hamburgerNav.classList.remove("active");
    headerWrap.style.display = "flex";
    hamburgerBtn.style.display = "none";
}else{
    header.classList.add("active");
    hamburgerBtn.style.display = "flex";
    hamburgerBtn.src = "src/menu.svg"
    let nowScrollTop = window.scrollY;
    if (nowScrollTop < 20){
hamburgerBtn.src = "src/menu--white.svg"
    }
}

}

window.addEventListener("resize", headerResize)
hamburgerBtn.addEventListener("click", headerClick);
headerWrap.addEventListener("mouseover", headerDropdown);
headerWrap.addEventListener("mouseleave", headerDropup);




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

const isBounceScroll = (div) => {
  if (reverse) { // scroll이 reverse(flex-direction: column-reverse) 모드일 때
    if (div.scrollTop > 0) return true; // scroll 최하단을 뚫음
    if (div.scrollTop < div.clientHeight - div.scrollHeight) return true; // scroll 최상단을 뚫음
  } else { // 일반적인 스크롤 방향일 때
    if (div.scrollTop < 0) return true; // scroll 최상단을 뚫음
    if (div.scrollTop > div.scrollHeight - div.clientHeight) return true; // scroll 최하단을 뚫음
  }
  return false;
}