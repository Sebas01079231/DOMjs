let encabezado = document.querySelector('h1');
console.log(encabezado);

console.log(encabezado.innerText); //si en CSS - visibility: hidden; no lo va a encontrar
console.log(encabezado.textContent); // si lo va a encontrar
console.log(encabezado.innerHTML); //muestra todo el html


let titulo = 'Cochinote';
document.querySelector('h1').textContent = titulo;


const cardImg = document.querySelector('.card img');
console.log(cardImg);

cardImg.src = 'img/hacer2.jpg';

