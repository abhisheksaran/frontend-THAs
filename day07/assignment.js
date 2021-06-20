//create a student object 
const student = {
	name: "Abhishek Saran",
	sclass:"VI",
	rollno:12
};

const library =[
	{
		author:"Bill Gates",
		title:"The Road Ahead",
		readingStatus:true
	},
	{
		author:"Steve Jobs",
		title:"Walter Isaacson",
		readingStatus:true
	},
	{
		author:"Suzanne Collins",
		title:"Mockingjay",
		readingStatus:false
	}
];
function listObject(object){
	for(let property in object){
		console.log(property +" -> "+ object[property]);
	}
}

function deleteRollno(object){
	console.log("Before deleting-");
	console.log(object);
	delete object.rollno;
	console.log("After deleting-");
	console.log(object);
}

function getLength(object){
	return Object.keys(object).length;
}

function readingStatus(object){
	for(let book of library){
		for( let property in book){
			console.log(property +" -> "+ book[property]);
		}
		console.log();
	}
}

cylinder={
	set setRadius(radius){
		this.r = radius;
	},
	set setHeight(height){
		this.h = height;
	},
	calVolume: function(){
		volume = Math.PI*this.r*this.r*this.h;
		this.volume = volume.toFixed(4);
	},
	get getVolume(){
		this.calVolume();
		return this.volume;
	}
}

const library2 =[
	{
		author:"Bill Gates",
		title:"The Road Ahead",
		readingStatus:true
	},
	{
		author:"Suzanne Collins",
		title:"Mockingjay",
		readingStatus:true
	},
	{
		author:"Steve Jobs",
		title:"Walter Isaacson",
		readingStatus:false
	}
];

console.log("Testing...");

console.log("\n1. List properties of student object:");
listObject(student);

console.log("\n2. Deleting roll no property of student object:");
deleteRollno(student);

console.log("\n3. The length of the student object is: "+ getLength(student));

console.log("\n4. Display the reading status of library books:");
readingStatus(library);

console.log("\n5.To calculate volume for the cylinder, set radius and height:");
cylinder.setRadius = 2.3;
cylinder.setHeight = 4.3;
console.log("The volume of the cylinder is: "+cylinder.getVolume);

console.log("\n6. Sort the array of objects (library):");
console.log("Before sorting-")
console.log(library2);

//sorting objects by authors, then titles and finally by reading status.
library2.sort(function(objA, objB){
	if(objA.author === objB.author){
		if(objA.title === objB.title){
			if(objA.readingStatus) return false;
			else return true;
		}
		else return objA.title.localeCompare(objB.title);
	}
	else return objA.author.localeCompare(objB.author);
});
console.log("After sorting-")
console.log(library2);


