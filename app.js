const btnDarkMode = document.querySelector('.dark-mode-btn')
const body = document.querySelector('body')

btnDarkMode.addEventListener('click', ()=> {
    body.classList.toggle('dark-mode')
    if (btnDarkMode.textContent == 'WHITE-MODE'){
        btnDarkMode.textContent = 'DARK-MODE'
    } else {
        btnDarkMode.textContent = 'WHITE-MODE'
    }
})  