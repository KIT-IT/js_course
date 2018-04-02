var budget = prompt('Ваш бюджет?', '0');
var shopName = prompt('Какое название вашего магазина?', 'Название вашего магазина');
var budgetOneDay = budget / 30;
alert('Ваш бюджет на 1 день составляет: ' + budgetOneDay.toFixed(2));

var mainList = {
	capital: budget,
	storeName: shopName,
	shopGoods: [],
	employers: {
		admin: 'Стас',
		user: 'Ира'
	},
	open: ''
};

mainList.shopGoods[0] = prompt('Какой первый тип товара на сегодня?', '');
mainList.shopGoods[1] = prompt('Какой второй тип товара на сегодня?', '');
mainList.shopGoods[2] = prompt('Какой третий тип товара на сегодня?', '');

for (var key in mainList) {
	console.log(mainList[key]);
}

