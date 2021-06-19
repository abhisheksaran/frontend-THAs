//day06 assignment

//Question 1
function is_array(a){
	return Array.isArray(a);
}

//Question 2
function clone_array(a){
	return a.slice(0);
}

//Question 3
function first_n(a,n){
	return a.slice(0,n);
}

//Question 4
function join_by_comma(a){
	return a.join(',');
}

//Question 5
function mode(a){
	if(a.length ==0 ) throw new Error('Empty array!!');
	return a.sort((x,y) => a.filter( f => f===x).length  - a.filter(f => f===y).length).pop();
 }

module.exports = {
	is_array,
	clone_array,
	first_n,
	join_by_comma,
	mode
};

