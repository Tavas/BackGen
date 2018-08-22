const css = document.querySelector("h3");
const colorOne = document.querySelector(".colorOne");
const colorTwo = document.querySelector(".colorTwo");
let body = document.getElementById("gradient");
let random = document.getElementById("random");

setBackground = () => {
    body.style.background = 
	"linear-gradient(to right, " + "#163671" + ", " + "#20DCC1" + ")"; 
    colorOne.value = "#163671";
    colorTwo.value = "#20DCC1";
    css.textContent = "linear-gradient(to right, " + "#163671" + ", #20DCC1" + ");";
}

generateRandom = () => {
   colorOne.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
   colorTwo.value = '#'+(Math.random()*0xFFFFFF<<0).toString(16);;
   body.style.background = 
   "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
   css.textContent = "linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ");";

}

function setGradient(gradient) {
    body.style.background = 
	"linear-gradient(to right, " + colorOne.value + ", " + colorTwo.value + ")";
    css.textContent = body.style.background + ";";
}
setBackground();
colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);
random.addEventListener("click", generateRandom);
