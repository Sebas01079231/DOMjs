const text = document.querySelector('.contenido-hero h1');
text.style.textTransform = 'uppercase';
text.style.backgroundColor = 'green';
text.style.textAlign = 'center';
console.log(text);


const card = document.querySelector('.card');
card.classList.add('card2', 'card3');
card.classList.remove('card3');
console.log(card);