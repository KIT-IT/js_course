var budget = prompt('Ваш бюджет?', '0');
var shopName = prompt('Какое название вашего магазина?', 'Название вашего магазина');
var budgetOneDay = budget / 30;
var time = 19

//alert('Ваш бюджет на 1 день составляет: ' + budgetOneDay.toFixed(2));

var mainList = {
	capital: budget,
	storeName: shopName,
	shopGoods: [],
	employers: {
		admin: 'Стас',
		user: 'Ира'
	},
	open: false
};


//Цикл по уроку

/*for (let i = 0; i < 5; i++) {
	let a = prompt('Какой первый тип товара на сегодня?', '');

	if ((typeof(a)) === 'string' && typeof(a) === null && a != '' && a.length < 50 )  {
		console.log('Все верно!');
		mainList.shopGoods[i] = a; 
	} else {

	}
}*/

//Цикл 1 домашнего задания

/*var i = 0;

while (i < 5) {

	console.log(i);
	let a = prompt('Какой первый тип товара на сегодня?', '');

	if ((typeof(a)) === 'string' && typeof(a) === null && a != '' && a.length < 50 )  {
		console.log('Все верно!');
		mainList.shopGoods[i] = a; 
	} else {
		//mainList.shopGoods[i] = a; 
	}

	i++;
}*/

//Цикл 2 домашнего задания

var i = 0;

do {
	let a = prompt('Какой первый тип товара на сегодня?', '');

	if ((typeof(a)) === 'string' && typeof(a) === null && a != '' && a.length < 50 )  {
		console.log('Все верно!');
		mainList.shopGoods[i] = a; 
	} else {
		mainList.shopGoods[i] = a; 
	}
	i++;
}
while (i < 5) {
	console.log(i);
}


if (time < 0) {
	console.log('Такого не может быть!');
} else if (time > 0 && time < 20) {
	console.log('Вреря работать!');
} else if (time < 24) {
	console.log('Уже слишком поздно!');
} else {
	console.log('В сутках только 24 часа');
}

console.log(mainList);

console.log(mainList.shopGoods)

console.log(mainList.shopGoods.length);

