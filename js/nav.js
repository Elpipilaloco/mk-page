const navbar = document.querySelector('.navbar')
const navbarLink = document.querySelectorAll('.navbarLink')

window.addEventListener('scroll', function(){
    if(window.scrollY>1){
        navbar.classList.add('navegale')
        navbarLink.forEach(function(link){
            link.classList.add('linki')
        })
    }else{
        navbar.classList.remove('navegale')
        navbarLink.forEach(function(link){
            link.classList.remove('linki')
        })
    }
})