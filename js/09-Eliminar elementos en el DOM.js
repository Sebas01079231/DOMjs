//eliminando un elemento seleccionandolo directamente
const card = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(card);
card.remove(); 


// eliminando un elemento apartir del elemento padre
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children)
navegacion.removeChild(navegacion.children[2]);

