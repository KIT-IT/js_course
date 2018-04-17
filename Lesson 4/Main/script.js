let money,
		name,
		time,
   	price;



function start() {
	money = prompt('Ваш бюджет?', '0');

	while (isNaN(money) || money == '' || money == null) {
		money = prompt('Ваш бюджет?', '0');
	}
	
	name = prompt('Какое название вашего магазина?', 'Магазин').toUpperCase();
	time = 19;
}
/*start();*/

let mainList = {
	budget: money,
	shopName: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {
			let a = prompt('Какой первый тип товара на сегодня?', 'товар');

			if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 50 )  {
				console.log('Все верно!');
				mainList.shopGoods[i] = a; 
			} else {
				i -= 1;
			}
		}
	},
	workTime: function workTime(time) {
		if (time < 0) {
			console.log('Такого не может быть!');
		} else if (time > 0 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if (time < 24) {
			console.log('Уже слишком поздно!');
		} else {
			console.log('В сутках только 24 часа');
		}
	},
	dayBudget: function dayBudget() {
		alert('Ваш бюджет на 1 день составляет: ' + (mainList.budget / 30).toFixed(2));
	},
	makeDiscount: function makeDiscount() {
	 	if (mainList.discount == true) {
	 		price *= 0.8;
	 		console.log(price);
	 	}
	},
	hireEmployers: function hireEmployers() {
		for (let i = 0; i < 5; i++) {
			let a = prompt('Введите ваше имя?','Имя');

			if ((typeof(a)) === 'string' && typeof(a) != null && a != '' && a.length < 15 ) {
				mainList.employers[i] = i + 1 + ': ' + a; 
			} else {
				i = i - 1;
			}
		}
	},
	chooseShopItem: function chooseShopItem() {
		let items = prompt('Перечислите товары', '');

		mainList.shopItems = items.split(',');
		mainList.shopItems.push(prompt('Подождите еще', ''));

		mainList.shopItems.sort();
	}
};


/*-------------------------------------------------------*/

console.log(mainList);




