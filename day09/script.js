
const container = document.getElementsByClassName("container");

let flexItems = ''
for( let i =0 ; i<36; i++){
	let seatNo = (i+1).toString();
	flexItems += '<div class="flex-item">'+seatNo+'</div>';
	//let id = i.toString();
	//flexItems = flexItems + '<div class="flex-item" id="grid-item-' +id+'">'+'</div>';
}
//console.log(container);
container[0].innerHTML = flexItems;
//console.log(container);

let bs = document.getElementById("bs");
console.log(bs);
let rs = document.getElementById("rs");
document.querySelectorAll('.flex-item').forEach( item => {
	item.addEventListener('click', () => {
		if(item.classList.contains('booked')){
			item.classList.remove('booked');			
			bs.innerHTML--;
			rs.innerHTML++;
		}
		else{
			item.classList.add('booked');
			bs.innerHTML++;
			rs.innerHTML--;
		}
	});
});