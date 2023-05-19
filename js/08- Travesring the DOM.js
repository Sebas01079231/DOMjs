// Travesring the DOM - de padre a Hijo
const card = document.querySelector('.card');

console.log(card.childNodes); //los espacios son considerados elementos 
console.log(card.children); //las etiquetas son considerados solo elementos


card.children[0].src = 'img/hacer3.jpg';
card.children[1].children[1].textContent = 'Musica House-Techno'

// console.log(card.children);


// Traversing the DOM - de hijo a padre
console.log(card.parentNode); //los espacios son considerados elementos 
console.log(card.parentElement);//los elementos son solo las tags
console.log(card.parentElement.parentElement.parentElement);
 

// Traversing the DOM - hermano siguiente
console.log(card.nextElementSibling);


// Travesring the DOM - hermano anterior
const ultimoCard = document.querySelector('.card:last-child');
console.log(ultimoCard.previousElementSibling);


// fist element child / last element child  
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild);


