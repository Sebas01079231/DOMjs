// añadir enlace


// definiendo el elemento que queremos
const enlace = document.createElement('a');

// agregando el texto
enlace.textContent = 'Nuevo Enlace';


// añadiendo atributos
enlace.href = '/nuevo-enlace';
enlace.target = '_blank'
enlace.classList.add('enlace-nuevo')

// agregando una funcion
enlace.onclick = miFuncion;
function miFuncion() {
    alert('Click en "nuevo-enlace"');
}

// viendo el avance
console.log(enlace);

// añadiendo el enlace a la navegacion
const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(enlace); //metodo que me permite agregar al final un hijo nuevo a un elemento


console.log(navegacion.children);
navegacion.insertBefore(enlace, navegacion.children[2]); //metodo que me permite agregar un hijo nuevo en la posicion anterior indicada en el segundo parametro de la funcion (nodo de referencia).









// añadir una card

// definiendo los elementos
const newCard = document.createElement('div');
const imgCard = document.createElement('img');
const cardInfo = document.createElement('div');
const categoriaCard = document.createElement('p');
const titleCard = document.createElement('p');
const precioCard = document.createElement('p');

// anidando los elementos
newCard.appendChild(imgCard);
newCard.appendChild(cardInfo);
cardInfo.appendChild(categoriaCard);
cardInfo.appendChild(titleCard);
cardInfo.appendChild(precioCard);

// añadiendo clases
newCard.classList.add('card');
cardInfo.classList.add('info');
categoriaCard.classList.add('categoria', 'clase');
titleCard.classList.add('titulo');
precioCard.classList.add('precio');

// añadiendo datos
imgCard.src = 'img/newyork1.jpg';
categoriaCard.textContent = 'Clase Cocina';
titleCard.textContent = 'Cocina Moderna';
precioCard.textContent = '$200 por persona';


// añadiendo la card al html
const contenedorCards = document.querySelector('.contenedor-cards');

contenedorCards.insertBefore(newCard, contenedorCards.children[0]);


console.log(newCard.children);
console.log(cardInfo.children);
