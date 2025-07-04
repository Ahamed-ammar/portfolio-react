let images = document.querySelectorAll(".slides img");
let timeOut = null;
let imageInd = 0;

Initialiser();
function Initialiser(){
    console.log("ammar");
    console.log(images[imageInd]);
    images[imageInd].classList.add("Showdisplay");
}