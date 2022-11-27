const CambioImg = document.querySelectorAll('.imgS2')

CambioImg.forEach(function(img){
    img.addEventListener('click', function(){
        if(img.classList.contains('imgCambio')){
        }else{
            CambioImg.forEach(function(imgs){
                imgs.classList.toggle('imgCambio')
            })
        }
    })
})
