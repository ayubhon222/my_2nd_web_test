let burger = document.querySelector("#toggleNav");
console.log(burger);
burger.addEventListener("click",function(){
   let navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle('.active');
    console.log("done");
})
