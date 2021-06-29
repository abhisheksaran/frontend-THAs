tasks = [];
function add_item(){
	let item = document.getElementById("box");
	let list_item_pending = document.getElementById("list-item-pending");
	let list_item_completed = document.getElementById("list-item-completed");
	if(item.value !=""){

		//create ele and add value to it
		let make_li = document.createElement("LI");
		
		let make_item = document.createElement('DIV');
		make_li.appendChild(document.createTextNode(item.value));

		let make_button_done = document.createElement("BUTTON");
		make_button_done.appendChild(document.createTextNode("Mark Done"));
		make_button_done.className += "button-done";

		let make_button_deleted = document.createElement("BUTTON");
		make_button_deleted.appendChild(document.createTextNode("Delete"));
		make_button_deleted.className += "button-delete";
		
		make_item.append(make_button_done);
		make_item.append(make_button_deleted);

		make_li.append(make_item);
		make_li.append(document.createElement("BR"));
		//append it to the list
		list_item_pending.appendChild(make_li);

		item.value="";
		make_button_deleted.onclick = function(){
			//dada ko jake bola papa dant rhe hai to, dada ne bap ko danta.
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);	
		}
		
		make_button_done.onclick = function(){
			list_item_completed.appendChild(this.parentNode.parentNode);
			console.log(this.parentNode);
			console.log(this.parentNode.parentNode);
			this.parentNode.removeChild(this.parentNode.childNodes[0]);
		}
	}
	else{
		alert("Abe task to add kr pahle!!");
	}
}