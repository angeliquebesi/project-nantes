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
const modal = null
 function pop() {
   if(modal === null) {
     document.getElementById("overlay").style.display = "block";
     modal = true
   } else {
     document.getElementById("overlay").style.display = "none";
     modal = null
   }
 }


// $(window).scroll(function (event) {
//     // A chaque fois que l'utilisateur va scroller (descendre la page)
//     var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical
 
//     //si cette valeur > à 200 on ajouter la class
//     if (y >= 200) {
//       $('.nav').addClass('fixed');
//     } else {
//       // sinon, on l'enlève
//       $('.nav').removeClass('fixed');
//     }
//   });
