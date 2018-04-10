let week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
let date = new Date();

for (let i = 0; i < week.length; i++) {
	if (week[i] == 'Суббота' || week[i] == 'Воскресенье') {
		document.write("<p style='font-weight: bold;'>" + week[i] + "</p>");
	} else if (i == date.getDay()) {
		document.write("<p style='font-style: italic;'>" + week[i] + "</p>");
	} else {
		document.write("<p>" + week[i] + "</p>");
	};
};

/***************************************************/

let arr = ['37','12','22','73'];

for (let i = 0 ; i < arr.length; i++) {
	if (arr[i].charAt(0) == '3' ||  arr[i].charAt(0) == '7') {
		console.log(arr[i]);
	};
};



