let btn = document.getElementsByTagName('button');

btn[0].addEventListener('click', function (event) {
  console.log('Произошло событие: ' + event.type + ' element ' + event.target);
})