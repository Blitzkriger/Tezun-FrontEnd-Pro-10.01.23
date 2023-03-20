const input = document.querySelector('.input-area');
const layer = document.querySelector('.hidden-layer');

layer.hidden = true;

input.addEventListener('focus', () => {
    layer.hidden = false
});

input.addEventListener('blur', () => {
  layer.hidden = true
});