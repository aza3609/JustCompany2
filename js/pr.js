const tab = document.querySelectorAll(".category-li");
const con = document.querySelectorAll(".pr-items");
const pageName = document.querySelectorAll(".page-name");

tab.forEach(function(tab_btn, index){
    tab_btn.addEventListener('click',function(){
      console.log([index]);
      tab.forEach(other_btn => {
        other_btn.classList.remove('active');
      });
      con.forEach(other_cont => {
        other_cont.classList.remove('con_active');
      });
      pageName.forEach(other_name => {
        other_name.classList.remove('name_active');
      });
      tab[index].classList.add('active');
      con[index].classList.add('con_active');
      pageName[index].classList.add('name_active');
    });
  });
  