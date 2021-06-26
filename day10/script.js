//GENERATE RANDOM STICKER NUMBERS
let stickers=[];
for(let i=0;i<9;i++){
	let num = (Math.floor((Math.random() * 26) + 1));
	stickers.push(num);
	stickers.push(num);
}

//shuffle positions 
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
shuffleArray(stickers);
console.log(stickers);


//initialize the game
const container = document.getElementsByClassName("container");

let flexItems = ''
for( let i =0 ; i<18; i++){
	let seatNo = (i+1).toString();
	flexItems += '<div class="flex-item">' 
	+ '<div class="flex-item-inner sticker-'+ stickers[i].toString() +'">'
	+ '<div class="flex-item-front">'
	+ '<img src="img/sticker_front.png"></img>'
	+ '</div>'
	+ '<div class="flex-item-back">'
	+ '<img src="img/sticker_' + stickers[i].toString() +'.png"></img>'
	+ '</div>'
	+ '</div>'
	+ '</div>';

}

//set the front and back of the card
container[0].innerHTML = flexItems;
console.log(container);

/*
let ms = document.getElementById("ms");
let bs = document.getElementById("bs");
*/

//add event listener 
document.querySelectorAll('.flex-item-inner').forEach( item => {
	item.addEventListener('click',function(){
		addClassClicked(item)});
	item.onclick = respondClick;
});

function addClassClicked(item){
	console.log(item);
	ms.innerHTML++;
	if(! item.classList.contains('clicked') && !item.classList.contains('done')){
		item.classList.add('clicked');
	}
}

function respondClick(){
	const clicks = document.querySelectorAll('.clicked') ;
	console.log(clicks);

	//if number of clicks are two, then check if both cards are same
	if(clicks.length ==2){
		//if they are then disable click event and mark them done
		if(clicks[0].classList[1] === clicks[1].classList[1]){
			bs.innerHTML++;
			bs.innerHTML++;
			setTimeout(function(){
				clicks.forEach(click => { 
					click.removeEventListener('click', function() {addClassClicked(click)} );
					click.onclick = function(){return false;};
					
					click.classList.remove('clicked');
					click.classList.add('done');
				});
			}, 500);
		}
		//else just unclick and repeat
		else{
			setTimeout(function() {	
				clicks.forEach(click => {
				click.classList.remove('clicked');
				});
			}, 800);
			
		}
	}
	
}

