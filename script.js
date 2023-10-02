

function showMenu(){
    nav = document.querySelector('nav')

    if(nav.classList.contains('open')){
        nav.classList.remove('open')

    }else{
        nav.classList.add('open')
    }
    
}
