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

function buyItem(item,currency) {
  let currencySymbol;
  if (currency === 'USD') {
    currencySymbol = '$';
  } else if (currency === 'UAH') {
    currencySymbol = 'грн';
  }

  alert(`Вы купили ${item.name} за ${item.price}${currencySymbol}`);
  itemInfo.innerHTML = '';
  itemList.innerHTML = '';
}

showCategories();
