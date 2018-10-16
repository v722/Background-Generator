var css = document.querySelector("h2");
var colo1 = document.querySelector(".color1");
var colo2 = document.querySelector(".color2");
var bod = document.getElementById("boom");
function colorChange(){
	bod.style.background = 
	"linear-gradient(to right, " 
	+ colo1.value 
	+ "," 
	+ colo2.value 
	+ ")";
	css.textContent = bod.style.background + ";";
}
colo1.addEventListener("input",colorChange);
colo2.addEventListener("input",colorChange);	