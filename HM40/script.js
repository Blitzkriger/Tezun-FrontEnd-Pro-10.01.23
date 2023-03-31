const array = [1, 2, [1.1, 1.2, 1.3], 3];

function generateList(array) {
  const list = document.createElement("ul");

  array.forEach(function(item) {
    const li = document.createElement("li");
    if (Array.isArray(item)) {
      li.appendChild(generateList(item));
    } else {
      li.appendChild(document.createTextNode(item));
    }
    list.appendChild(li);
  });

  return list;
}

const mainList = generateList(array);
document.body.appendChild(mainList);
