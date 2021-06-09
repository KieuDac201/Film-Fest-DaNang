const menuIcon = document.querySelector('.menu-icon')
const menuE = document.querySelector('.menu')

menuIcon.addEventListener('click', () => {

    if(menuE.classList.value.includes('active')){
        menuE.classList.remove('active')
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'
    }else{
        menuE.classList.add('active')
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'
    }
})