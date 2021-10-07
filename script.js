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