// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length,key) {

  let randomString = '';

  if (length === 0) {
    alert('Невозможно сгенерировать ключ');

  } else if (randomString.length < length) {

    for (let i = 0; i < length; i++) {
      randomString += key[Math.floor(Math.random() * key.length)];
    }
  } 
  return randomString
}

const key = generateKey(16,characters);
console.log(key);
