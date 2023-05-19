const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('footer');

btnFlotante.addEventListener('click', mostrarFooter);

function mostrarFooter() {
    
    if (footer.classList.contains('activo')) {
        footer.classList.remove('activo');
        // btnFlotante.classList.remove('activo');
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
        /*podemos ponerle el sobrenombre 'this' a la variable btnFlotante, y el navegador lo asociara a ella, ya que fue la que mando a llamar a la funcion */
    } else{
        // btnFlotante.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X cerrar';
        footer.classList.add('activo');
    }
};

// iconRemove = document.querySelector('.icon');
// iconRemove.addEventListener('click', ocultarFooter );

// function ocultarFooter() {
//     btnFlotante.classList.remove('activo');
//     footer.classList.remove('activo');
// };