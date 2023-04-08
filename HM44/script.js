const itemList = document.getElementById('item-list');
const itemInfo = document.getElementById('item-info');

const categories = [
  { id: 'category1', name: 'Фрукты', items: [
      { id: 'item1', name: 'Яблоки', price: 10, discription: 'Сладкие яблочки', currency: 'UAH' },
      { id: 'item2', name: 'Груши', price: 12, discription: 'Спелые груши', currency: 'UAH' },
      { id: 'item3', name: 'Бананы', price: 8, discription: 'Вкуснейшие бананы', currency: 'UAH' }
    ]
  },
  { id: 'category2', name: 'Овощи', items: [
      { id: 'item4', name: 'Морковь', price: 5, discription: 'Морковь как морковь', currency: 'UAH' },
      { id: 'item5', name: 'Огурцы', price: 7, discription: 'Огурцы-сорванцы', currency: 'UAH' },
      { id: 'item6', name: 'Картошка', price: 4, discription: 'Мытая картошка', currency: 'UAH' }
    ]
  },
  { id: 'category3', name: 'Техника Apple', items: [
      { id: 'item7', name: 'iPhone', price: 1000, discription: '14 Pro', currency: 'USD'},
      { id: 'item8', name: 'iPad', price: 800, discription: 'Air 2023', currency: 'USD' },
      { id: 'item9', name: 'MacBook', price: 1500, discription: 'M2 Pro', currency: 'USD' }
    ]
  }
];

function showCategories() {
  categories.forEach(function(category) {
    const link = document.getElementById(category.id);
    link.addEventListener('click', function() {
      showItems(category)
    });
  });
}

function showItems(category) {
  itemList.innerHTML = '';
  category.items.forEach(function(item) {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = '#';
    link.innerText = item.name;
    
    listItem.appendChild(link);
    itemList.appendChild(listItem);
    link.addEventListener('click', function() {
      showItemInfo(item)
    });
  });
}

function showItemInfo(item) {
  itemInfo.innerHTML = '';
  const itemName = document.createElement('h3');
  itemName.innerText = item.name;
  const itemDiscription = document.createElement('p');
  itemDiscription.innerText = item.discription;
  const itemPrice = document.createElement('p');
  if (item.currency === 'USD') {
    itemPrice.innerText = `Цена: $${item.price}`;
  } else {
    itemPrice.innerText = `Цена: ${item.price} грн`;
  }
  const buyButton = document.createElement('button');
  buyButton.innerText = 'Купить';
  buyButton.addEventListener('click', function() {
    buyItem(item,item.currency)
  });
  itemInfo.appendChild(itemName);
  itemInfo.appendChild(itemDiscription);
  itemInfo.appendChild(itemPrice);
  itemInfo.appendChild(buyButton);
}

showCategories();

function buyItem(item,currency) {
  let currencySymbol;
  if (currency === 'USD') {
    currencySymbol = '$';
  } else if (currency === 'UAH') {
    currencySymbol = 'грн';
  }

  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.innerText = 'ФИО:';
  const nameInput = document.createElement('input');
  nameInput.required = true;
  nameInput.classList.add('input-field')
  nameLabel.appendChild(nameInput);

  const cityLabel = document.createElement('label');
  cityLabel.innerText = 'Город:';
  const citySelect = document.createElement('select');
  const cities = ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Львов'];
  cities.forEach(function(city) {
    const option = document.createElement('option');
    option.value = city;
    option.innerText = city;
    citySelect.appendChild(option);
  });
  cityLabel.appendChild(citySelect);

  const npLabel = document.createElement('label');
  npLabel.innerText = 'Номер склада Новой почты:';
  const npInput = document.createElement('input');
  npInput.type = 'number';
  npInput.required = true;
  npInput.classList.add('input-field')
  npLabel.appendChild(npInput);

  const paymentLabel = document.createElement('label');
  paymentLabel.innerText = 'Способ оплаты:';

  const paymentRadio1 = document.createElement('input');
  paymentRadio1.type = 'radio';
  paymentRadio1.name = 'payment';
  paymentRadio1.value = 'Оплата при получении';
  paymentRadio1.required = true;
  paymentRadio1.classList.add('radio-button')

  const paymentRadio1Label = document.createElement('label');
  paymentRadio1Label.innerText = 'Оплата при получении';
  paymentRadio1Label.appendChild(paymentRadio1);
  const paymentRadio2 = document.createElement('input');
  paymentRadio2.type = 'radio';
  paymentRadio2.name = 'payment';
  paymentRadio2.value = 'Оплата банковской картой';
  paymentRadio2.classList.add('radio-button')
  
  const paymentRadio2Label = document.createElement('label');
  paymentRadio2Label.innerText = 'Оплата банковской картой';
  paymentRadio2Label.appendChild(paymentRadio2);
  paymentLabel.appendChild(paymentRadio1Label);
  paymentLabel.appendChild(paymentRadio2Label);

  const quantityLabel = document.createElement('label');
  quantityLabel.innerText = 'Кол-во:';
  const quantityInput = document.createElement('input');
  quantityInput.type = 'number';
  quantityInput.min = '1';
  quantityInput.required = true;
  quantityLabel.appendChild(quantityInput);

  const commentLabel = document.createElement('label');
  commentLabel.innerText = 'Коментарий к заказу:';
  const commentTextarea = document.createElement('textarea');
  commentLabel.appendChild(commentTextarea);

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
  submitButton.innerText = 'Сформировать заказ';
  form.appendChild(nameLabel);
  form.appendChild(cityLabel);
  form.appendChild(npLabel);
  form.appendChild(paymentLabel);
  form.appendChild(quantityLabel);
  form.appendChild(commentLabel);
  form.appendChild(submitButton);

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = nameInput.value;
    const city = citySelect.value;
    const np = npInput.value;
    const payment = form.elements['payment'].value;
    const quantity = quantityInput.value;
    const comment = commentTextarea.value;

    const totalPrice = quantity * item.price;
    const formattedPrice = totalPrice + currencySymbol;

    const order = {
      date: new Date().toLocaleString(),
      totalPrice: formattedPrice,
      details: {
        'Товар': item.name,
        'Количество': quantity,
        'ФИО': name,
        'Город': city,
        'Номер отделения новой почты': np,
        'Способ оплаты': payment,
        'Сумма к оплате': formattedPrice,
        'Коментарии к заказу': comment,
      },
    };

    saveOrder(order);
    location.reload();
  });
  document.body.appendChild(form);
}

const ordersButton = document.createElement('button');
ordersButton.innerText = 'Мои заказы';
ordersButton.classList.add('order-button');
ordersButton.addEventListener('click', function () {
  showOrders();
});
document.body.appendChild(ordersButton, document.querySelector('.container'));

function saveOrder(order) {
  let orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function loadOrders() {
  return JSON.parse(localStorage.getItem('orders')) || [];
}

function deleteOrder(orderIndex) {
  let orders = loadOrders();
  orders.splice(orderIndex, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
}

function showOrders() {
  document.querySelector('.container').style.display = 'none';
  ordersButton.style.display = 'none';

  const ordersList = document.createElement('ul');
  document.body.appendChild(ordersList);

  const backButton = document.createElement('button');
  backButton.innerText = 'Назад';
  backButton.classList.add('order-button');
  backButton.addEventListener('click', function () {
    document.querySelector('.container').style.display = 'flex';
    ordersButton.style.display = 'block';
    ordersList.remove();
    backButton.remove();
  });
  document.body.appendChild(backButton);

  const orders = loadOrders();
  orders.forEach((order, index) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${order.date} - ${order.totalPrice}`;

    let isDetailsVisible = false;
    let details;

    listItem.addEventListener('click', function () {
      if (isDetailsVisible) {
        details.remove();
      } else {
        details = document.createElement('ul');
        for (const key in order.details) {
          const detailItem = document.createElement('li');
          detailItem.innerHTML = `${key}: ${order.details[key]}`;
          details.appendChild(detailItem);
        }
        listItem.appendChild(details);
      }

      isDetailsVisible = !isDetailsVisible;
    });

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Удалить заказ';
    deleteButton.classList.add('order-button');
    deleteButton.addEventListener('click', function (event) {
      event.stopPropagation();
      deleteOrder(index);
      listItem.remove();
    });
    listItem.appendChild(deleteButton);

    ordersList.appendChild(listItem);
  });
}





