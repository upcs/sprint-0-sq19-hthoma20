const add= require("../js/functions");

test('check 2+3', ()=>{
	expect(add(2,3)).toBe(5);
});

test('check 2+0', ()=>{
	expect(add(2,0)).toBe(2);
});

/*test('check 0+0', ()=>{
	expect(add(0,0)).toBe(1);
*/