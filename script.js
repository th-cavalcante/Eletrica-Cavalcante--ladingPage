const icon = document.getElementById('btn-icon')
icon.addEventListener('click', () => {
    showMenu();
})

function showMenu(){
    nav = document.querySelector('nav')

    if(nav.classList.contains('open')){
        nav.classList.remove('open')
        icon.innerHTML= `menu`
    }else{
        nav.classList.add('open')
        icon.innerHTML= `close`
       
    }
    
}


function closeMenu(){
    if(showMenu()){
        showMenu.remove()
    }

}
