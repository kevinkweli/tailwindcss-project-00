const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

// Event listener when we click the menu button
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    //Now show the menu when toggled.
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})