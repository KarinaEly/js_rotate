document.addEventListener("DOMContentLoaded", (event) => {
    window.addEventListener("resize", detectOrientation) ;
    detectOrientation() ;
  });
  
  function detectOrientation(){
    
    if ( window.innerWidth > window.innerHeight ) {
        document.getElementById("rotateScreen").style.display = "block";
        document.getElementById("displayContent").style.display = "none";

      } else {
        document.getElementById("displayContent").style.display = "block";
        document.getElementById("rotateScreen").style.display = "none";
      }




  }
  