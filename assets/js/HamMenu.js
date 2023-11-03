let HambMenu = document.getElementById('HambMenu')


document.getElementById('HambMenuIcon').addEventListener('click', () => {
    console.log(document.getElementById('HambMenu'));
    HambMenu.classList.toggle('HambToggle')
})

document.querySelectorAll('.HambLink').forEach((val) => {
    val.addEventListener('click', () => {
        HambMenu.classList.remove('HambToggle');
    })
})