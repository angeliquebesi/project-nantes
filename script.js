let icon = document.querySelector('.icons')
let logo = document.querySelector('.logo')
let nav = document.querySelector('.navigation')

let click = 0
icon.addEventListener("click", function(event) {
    click++
    if (click % 2 == 0){
        logo.style.display ="flex"
        nav.style.display ="none"
    }
    if (click % 2 == 1 ){
        logo.style.display ="none"
        nav.style.display ="flex"
    }

})

 let modal = false
 function pop() {
   if(modal === false) {
     document.getElementById("overlay").style.display = "block";
     modal = true
   } else {
     document.getElementById("overlay").style.display = "none";
     modal = false
   }
 }

 let modal1 = false
 function pop1() {
   if(modal === false) {
     document.getElementById("overlay1").style.display = "block";
     modal = true
   } else {
     document.getElementById("overlay1").style.display = "none";
     modal = false
   }
 }
