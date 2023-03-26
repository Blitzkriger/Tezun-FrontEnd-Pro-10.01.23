const button1 = document.createElement('button');
const button2 = document.createElement('button');
const buttons =[button1,button2];

buttons.forEach(function(button) {
  button.classList.add('button');

  button.addEventListener('mouseover', function() {
    button.style.backgroundColor = '#1C84EC';
    button.style.color = 'white';
  });
  
  button.addEventListener('mouseout', function() {
    button.style.backgroundColor = '#7F1CEC';
    button.style.color = 'black';
  });

  button.style.borderRadius ='5px';
  button.style.border ='none';
  button.style.padding ='10px';
  button.style.backgroundColor = '#7F1CEC';
  button.style.cursor = 'pointer';
})

button1.style.marginRight = '10px';

button1.innerText = 'Выбор таблетки';
button2.innerText = 'Самый длинный сайт в мире';

button1.addEventListener('click', function() {
  const link = 'thechoiceisyours.whatisthematrix.com/ru/';
  if (!link.includes('http://') && !link.includes('https://')) {
    document.location.href = 'https://' + link;
  }
});

button2.addEventListener('click', function() {
  const link = 'thedeepestsite.com/ua/?country_code=ua';
  if (!link.includes('http://') && !link.includes('https://')) {
    document.location.href = 'https://' + link;
  }
});

document.body.appendChild(button1);
document.body.appendChild(button2);
