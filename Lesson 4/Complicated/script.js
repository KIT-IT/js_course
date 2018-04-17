let str = 'урок-3-был слишком легким';
str = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str);

console.log('---------------------------------------');

console.log(str.replace('-',' ') + ' - Не пойдет, после 3 есть символ -');

console.log('---------------------------------------');

let str2 = '';
for (let i = 0; i < str.length; i++) {
	//console.log(str.charAt(i));
	if (str.charAt(i) == '-') {
		str2 += ' ';
	} else {
		str2 += str.charAt(i);
	}
};
str = str2;
console.log(str);

console.log('---------------------------------------');

str = str.replace('легким',' ');
console.log(str);

console.log('---------------------------------------');

str = str.replace(str.slice(-3),'о');
console.log(str);

console.log('---------------------------------------');

let arr = [20, 33, 1, 'Человек', 2, 3];
let a = 0;

for (let i = 0; i < arr.length; i++) {
	if (typeof(arr[i]) !== 'string') {
		a += arr[i];
	}
}; 
console.log(Math.sqrt(a));

console.log('---------------------------------------');



