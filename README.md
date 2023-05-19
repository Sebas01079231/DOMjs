# DOM 
    Es una interfaz de programación de aplicaciones (API) que permite a los desarrolladores acceder y manipular elementos en una página web.

    El DOM se compone de un árbol de nodos, donde cada nodo representa un elemento en la página, como un elemento HTML (como un párrafo o un enlace) o un nodo de texto. Los desarrolladores pueden utilizar JavaScript para acceder a estos nodos y manipular sus propiedades, como el contenido de un elemento, los atributos, los estilos y los eventos.

# Acceder a elementos HTML con document ->
    Se puede acceder a elementos del html con el objeto document, que es basicamnte todo del html que tenemos en nuetra pagina web. En primeras instancias ocupamos una variable y se la asignamos al objeto document, de esa manera podemos acceder a los diferentes elementos del html, con la siguiente sintaxis:

        let elemento;

        elemento = document;
        elemento = document.all;
        elemento = document.head;
        elemento = document.body;
        elemento = document.domain;
        elemento = document.forms;
        elemento = document.forms[0];
        elemento = document.forms[0].id;
        elemento = document.forms[0].classList; //muestra clase en forma de arreglo
        elemento = document.forms[0].className; //muestra clase en forma de string

        elemento = document.links;
        elemento = document.links[4];
        elemento = document.links[4].classList;

        elemento = document.images;
        elemento = document.images[1].src;

        console.log(elemento);

    Los elementos hijos que se encuentran dentro de cada padre suelen venir con su indice para facilitar el acceso, normalmente nos muesta un HTMLcollections y nos muestra por su indice los elementos que seleccionamos.

# getElementsByClassName ->
  me permite seleccionar elementos por su clase. su sintaxis es:
  
        const contenedores = document.getElementsByClassName('contenedor');
        console.log(contenedores);

# getElementById -> 
  me permite seleccionar elementos por su ID. su sintaxis es:
        
        const formulario = document.getElementById('formulario');   
        console.log(formulario);
    
    este metodo te retorna maximo un elemento, ya que un ID no puede estar en mas de 1 etiqueta html.

# querySelector -> 
    -retorna maximo un elemento 
    -tiene sintaxis de css

        const card = document.querySelector('.card');
        console.log(card);

        const info = document.querySelector('.premium .info');
        console.log(info);

        const segundoCard = document.querySelector('section.hospedaje .card:nth-child(2)');
        console.log(segundoCard);

        const formulario = document.querySelector('#formulario');
        console.log(formulario);

# querySelectorAll -> 
  selecciona todos los elementos que tengan una clase, (tambien se puede un id, aunque no es buena practica)

        const cards = document.querySelectorAll('.card');
        console.log(cards);

# Agregar clases por medio de JS ->
  se pueden agregar o eliminar clases por medio de js, de la siguiente manera: 
    
          const card = document.querySelector('.card');
          card.classList.add('card2', 'card3');
          card.classList.remove('card3');
          console.log(card);

    add agrega y remove quita.

traversing the DOM ->
    Es la forma en la que puedes llegar a un determinado elemento apartir de los diferentes nodos, como etiquetas padre, hijos, hermanos, etc.

Algunas propiedades y metodos ->

    textContent -> muestra el texto y puedo editarlo
    classList.add() -> agregar clase
    classList.remove() -> eliminadr clase
    children -> seleccionar hijo 
    parentElement -> seleccionar padre
    nextElementSibling -> seleccionar hermano siguiente
    previousElementSibling -> seleccionar hermano anterior
    firstElementChild -> seleccionar primer hijo
    lastElementChild -> seleccionar ultimo hijo
    remove() -> eliminar elemento
    removeChild() -> eliminar hijo
    createElement() -> crear un elemento HTML
    appendChild() -> agregar un hijo (al final) a un elemento HTML
    insertBefore() -> agregar un hijo (en posicion indicada) a un elemento HTML
    addEventListener() -> me permite asignarle una accion (evento) a un elemento.
    contains() -> verifica si un elemento específico está contenido dentro
