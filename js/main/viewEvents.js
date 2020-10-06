// //------Burger lisinner:-----//
// let btn = document.querySelector("#nav_btn");
// // for nav display 
// let theNav = document.querySelector("#id_nav");

// btn.addEventListener("click", () =>{
//   console.log("work")

//   //Check current display nav 
//   if (theNav.style.display != "block") {
//     theNav.style.display = "block"
//     btn.className ="menu clickMenu d-lg-none d-md-none d-sm-block";
//   }
//   else {
//     theNav.style.display = "none"
//     btn.className ="menu d-lg-none d-md-none d-sm-block";
//   }
// }
// )

//----------------------------------//
//------for button in index.html ------// 
let btnMore = document.querySelector("#but_more");
// for display 
let info = document.querySelector("#id_more");

btnMore.addEventListener("click", () =>{
    //Check current display nav 
    if (info.style.display != "block") {
        info.style.display = "block";
        btnMore.innerHTML = `
        <spen style="color:#6F3CA0;">READ LESS</spen>
        <span style="color: #e1bd29;"><strong> >> </strong></span>
        `;
    }
    else {
        info.style.display = "none"
        btnMore.innerHTML = `
        <spen style="color:#6F3CA0;">READ MORE</spen>
        <span style="color: #e1bd29;"><strong> >> </strong></span>
        `;

    }
  }
  )

//----------------------------------//
//------for button in .html ------// 