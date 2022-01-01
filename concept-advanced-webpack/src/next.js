const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filter =  _.filter(array, function(num) {
  return num % 2 == 0;
});
const h1 = document.createElement('h1');
const p = document.createElement('p');
h1.innerHTML += `Valores pares dos números: ${array}`;
filter.map(it => {
  p.innerText += `${it},`;
});
document.body.appendChild(h1);
document.body.appendChild(p);
