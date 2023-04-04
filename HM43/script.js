const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  const fio = document.getElementById('fio').value;
  const birthday = document.getElementById('birthday').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const languages = document.querySelectorAll('input[name="languages"]:checked');
  
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  
  const row1 = document.createElement('tr');
  const cell11 = document.createElement('td');
  const cell12 = document.createElement('td');
  cell11.textContent = 'ФИО:';
  cell12.textContent = fio;
  row1.appendChild(cell11);
  row1.appendChild(cell12);
  tbody.appendChild(row1);
  
  const row3 = document.createElement('tr');
  const cell31 = document.createElement('td');
  const cell32 = document.createElement('td');
  cell31.textContent = 'Дата рождения:';
  cell32.textContent = birthday;
  row3.appendChild(cell31);
  row3.appendChild(cell32);
  tbody.appendChild(row3);
  
  const row4 = document.createElement('tr');
  const cell41 = document.createElement('td');
  const cell42 = document.createElement('td');
  cell41.textContent = 'Пол:';
  cell42.textContent = gender;
  row4.appendChild(cell41);
  row4.appendChild(cell42);
  tbody.appendChild(row4);
  
  const row5 = document.createElement('tr');
  const cell51 = document.createElement('td');
  const cell52 = document.createElement('td');
  cell51.textContent = 'Город:';
  cell52.textContent = city;
  row5.appendChild(cell51);
  row5.appendChild(cell52);
  tbody.appendChild(row5);
  
  const row6 = document.createElement('tr');
  const cell61 = document.createElement('td');
  const cell62 = document.createElement('td');
  cell61.textContent = 'Адресс:';
  cell62.textContent = address;
  row6.appendChild(cell61);
  row6.appendChild(cell62);
  tbody.appendChild(row6);
  
  const row7 = document.createElement('tr');
  const cell71 = document.createElement('td');
  const cell72 = document.createElement('td');
  const languagesList = Array.from(languages).map(lang => lang.value).join(', ');
  cell71.textContent = 'Языки, которыми владеете:';
  cell72.textContent = languagesList;
  row7.appendChild(cell71);
  row7.appendChild(cell72);
  tbody.appendChild(row7);
  
  table.appendChild(tbody);
  document.body.appendChild(table);
  form.style.display = 'none';
  });
