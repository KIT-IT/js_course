var num = '33721';

var result = 1;

for (var i = 0; i < num.length; i++) {
	result *= +num.charAt(i)
	console.log('Промежуточный результат: ' + result);
	console.log('--------');
}

console.log('Реузльтат произведения чисел: ' + result);

alert('Если полученный результат ' + result + 
	' возвести в 3 степень, то получится: ' + Math.pow(result, 3));

