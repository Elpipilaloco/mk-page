const imagen = document.querySelectorAll('.img')

imagen.forEach(function (img) {
    img.addEventListener('click', function () {
        const cambio1 = document.querySelector('.cambio1')
        const cambio2 = document.querySelector('.cambio2')
        const cambio3 = document.querySelector('.cambio3')
        if (img.classList.contains('cambio1')) {
            cambio1.classList.add('cambio2')
            cambio1.classList.remove('cambio1')

            cambio2.classList.add('cambio1')
            cambio2.classList.remove('cambio2')
        }
        else if (img.classList.contains('cambio2')) {
            cambio1.classList.add('cambio2')
            cambio1.classList.remove('cambio1')

            cambio2.classList.add('cambio1')
            cambio2.classList.remove('cambio2')
        }else{
            cambio1.classList.add('cambio3')
            cambio1.classList.remove('cambio1')

            cambio3.classList.add('cambio1')
            cambio3.classList.remove('cambio3')
        }
    })
})
