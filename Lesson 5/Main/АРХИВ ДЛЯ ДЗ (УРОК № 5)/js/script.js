let elementFive = document.createElement('li');
elementFive.classList.add('menu-item');
elementFive.textContent = 'Пятый пункт';
let menu = document.getElementsByClassName('menu')[0];
menu.appendChild(elementFive);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

document.title = 'подлинную';

let advertising = document.getElementsByClassName('adv')[0];
console.log(advertising)
advertising.remove();

let prmpt = document.getElementById('prompt');
console.log(prmpt);
let ask = prompt('What do you mean about Apple?','Nice!');

prmpt.textContent = ask;

















