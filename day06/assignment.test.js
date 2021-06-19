const functions = require('./assignment');
test("Testing Q1",()=>{
	expect(functions.is_array([1,2,3])).toBe(true);
	expect(functions.is_array([])).toBe(true);
	expect(functions.is_array(1)).toBe(false);
	expect(functions.is_array('this is a stirng ')).toBe(false);
})

test("Testing Q2",()=>{
	let a = [1,2,3];
	let cloned = functions.clone_array(a);
	expect(cloned).toEqual(a);
	a.push(4);
	expect(cloned).not.toEqual(a);
})

test("Testing Q3",()=>{
	let a = [1,2,3];
	//console.log(functions.first_n(a,0));
	expect(functions.first_n(a,0)).toStrictEqual([]);
	expect(functions.first_n(a,1)).toStrictEqual([1]);
	expect(functions.first_n(a,4)).toStrictEqual(a);
})

test("Testing Q4",()=>{
	expect(functions.join_by_comma([])).toStrictEqual('');
	expect(functions.join_by_comma([1,2,3])).toStrictEqual('1,2,3');
	expect(functions.join_by_comma(['a','b','c'])).toStrictEqual('a,b,c');
		
})

test("Testing Q5",()=>{
	expect(functions.mode([1,'1',1,1,'1'])).toBe(1);
	expect(functions.mode([1,'1','1',1,'1'])).toBe('1');
	expect(functions.mode([1,'1','1',1,'1',1])).toBe(1);
	expect( () => {functions.mode([]);}).toThrow("Empty array!!");
})