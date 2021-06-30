
const container = document.getElementById("container");
container.addEventListener("wheel",incrFontSize);

function incrFontSize(){
	console.log("increasing font size on scroll on container...");
	this.style.fontSize = "35px";
}

function offline(){
	alert("Check the damn wifi, you are offline idiot!!");
}

function inputStyle(){
	console.log("Box selected: changing the input box color to blue");
	const inp = document.querySelector("input");
	inp.style.color = "red";
	inp.style.backgroundColor = "grey";
}