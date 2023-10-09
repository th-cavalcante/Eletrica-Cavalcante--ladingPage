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

const iconTop = document.querySelector('.icon-top');
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const scrollThreshold = 500;
    if (scrollPosition > scrollThreshold) {
        iconTop.style.display = 'block';
      } else {
        iconTop.style.display = 'none';
      }
})

function topPage() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }