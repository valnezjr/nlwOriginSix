const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const links = document.querySelectorAll('nav .menu ul li a')
for (const element of links) {
  element.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
