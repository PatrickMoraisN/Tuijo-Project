const btn = document.querySelector('.hamburguer');
const mobile = document.querySelector('.mobile');

function oi() {btn.addEventListener('click', () => {
  mobile.classList.toggle('show-menu')
})}

oi()