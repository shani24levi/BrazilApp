//------Burger lisinner:-----//
let btn = document.querySelector("#nav_btn");
// for nav display 
let theNav = document.querySelector("#id_nav");

btn.addEventListener("click", () =>{
  console.log("work")
  //Check current display nav 
  if (theNav.style.display != "block") {
    theNav.style.display = "block"
    btn.className ="menu clickMenu d-lg-none d-md-none d-sm-block";
  }
  else {
    theNav.style.display = "none"
    btn.className ="menu d-lg-none d-md-none d-sm-block";
  }
}
)
