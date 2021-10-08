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


