const btn = document.querySelector('.hamburguer');
const mobile = document.querySelector('.mobile');

function oi() {btn.addEventListener('click', () => {
  mobile.classList.toggle('show-menu')
})}

oi()

const menuMobile = () => {
  document.getElementById('menu-mobile-ul').addEventListener('click', () => {
    mobile.classList.remove('show-menu')
  })
}

menuMobile()