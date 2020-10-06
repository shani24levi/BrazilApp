//------Burger lisinner:-----//
let btn = document.querySelector("#nav_btn");
// for nav display 
let theNav = document.querySelector("#id_nav");

// $("nav_btn").on("click", function() {
//   console.log("work")
//   $("id_nav").slideToggle(700);
// })

btn.addEventListener("click", () => {
  console.log("work")

  //Check current display nav 
  if (theNav.style.display != "block") {
    theNav.style.display = "block"
    btn.className = "menu clickMenu d-lg-none d-md-none d-sm-block";
  }
  else {
    theNav.style.display = "none"
    btn.className = "menu d-lg-none d-md-none d-sm-block";
  }
}
)



import { trivia_ar } from "../data.js";
//----------------------------------//
let btnTrivia = document.querySelector("#id_submitTrivia");
let your_score = document.querySelector(".show_score");

btnTrivia.addEventListener("click", () => {

  //reStart the page and open the page ( in the same page )
  if (btnTrivia.value == "ReStart"){
    window.open("trivia.html",'_self');
  }

  //show scores: 
  your_score.style.display = "block";

  let one = "0";
  trivia_ar.map((item, i) => {
    //show answers: 
    document.querySelector(`.show_correct_answer${one}`).style.display = "block";
    //show icons :
    //check for null - if not all qustions is marked so this.id dosent exists.
    if(document.querySelector(`#correct_answer${one}`) != null){
      document.querySelector(`#correct_answer${one}`).style.display = "inline";
    }
    one++;
  })

  //change value for reStart the page
  btnTrivia.value= "ReStart";
  btnTrivia.innerHTML= "ReStart";

  //To Do : block inputs 

})

