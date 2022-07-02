var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randButton = document.getElementById("randomB"); //getting button


function randomColorButton(){
	
	rand1=Math.floor(Math.random()*16777215).toString(16); //radom number random function copied from css tricks
	rand2=Math.floor(Math.random()*16777215).toString(16);
	body.style.background ="linear-gradient(to right, #"+rand1+", #"+rand2+")";// just adding # in string 
	css.textContent = body.style.background + ";"; // value display

}

	
function setGradient() {
	body.style.background ="linear-gradient(to right, "+color1.value+", "+color2.value+")";
	css.textContent = body.style.background + ";";
}



setGradient(); //calling itself first so the default values are set

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randButton.addEventListener("click", randomColorButton);
