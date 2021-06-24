const frame = document.getElementById('frame');

let grid=''; 
for(let i =0;i<400;i++){
	let id = i.toString();
	grid = grid + '<div class="grid-item" id="grid-item-' +id+'">'+'</div>';
	
}
console.log(grid)
frame.innerHTML = grid;

function changeColor(){
	if(this.style.backgroundColor ==='red') this.style.backgroundColor = "white";
	else this.style.backgroundColor = 'red';	
}

for(let i =0;i<400;i++){
	let id = i.toString();
	var sth =document.getElementById('grid-item-'+id);
	//sth.style.cursor = 'pointer';
	sth.onclick = function(){
		if(this.style.backgroundColor === 'red') this.style.backgroundColor = 'white';
		else this.style.backgroundColor = 'red';
	}
}

