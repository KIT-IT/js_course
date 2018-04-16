let money,
		name,
		time,
   	price;



function start() {
	money = prompt('Ваш бюджет?', '0');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?');
	}
	
	name = prompt('Какое название вашего магазина?').toUpperCase();
	time = 19;
}
start();

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true
};

function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('Какой первый тип товара на сегодня?', '');

		if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 50 )  {
			console.log('Все верно!');
			mainList.shopGoods[i] = a; 
		} else {
			i -= 1;
		}
	}
}
chooseGoods();

function workTime(time) {
	if (time < 0) {
		console.log('Такого не может быть!');
	} else if (time > 0 && time < 20) {
			console.log('Время работать!');
	} else if (time < 24) {
		console.log('Уже слишком поздно!');
	} else {
		console.log('В сутках только 24 часа');
	}
}
workTime();

function budgetOneDay() {
	alert('Ваш бюджет на 1 день составляет: ' + (mainList.budget / 30).toFixed(2));
}
budgetOneDay();

function discountSystem(price) {
 	if (mainList.discount == true) {
 		price *= 0.8;
 		console.log(price);
 	}
} 
discountSystem(1000);

function headHunter() {
	for (let i = 0; i < 5; i++) {
		let a = prompt('Введите ваше имя?');

		if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 15 ) {
			mainList.employers[i] = i + 1 + ': ' + a; 
		} else {
			i = i - 1;
		}
	}
}
headHunter();

/*-------------------------------------------------------*/
console.log(mainList);
console.log('------------------------');
console.log(mainList.shopGoods);
console.log('------------------------');
console.log(mainList.employers);


