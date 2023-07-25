$(document).ready(function () {
    // Función para cambiar el modo de imagen del slider
    function changeImage() {
        var activeItem = $('.img-slider-item.active');
        var nextItem = activeItem.next();

        if (nextItem.length === 0) {
            nextItem = $('.img-slider-item:first');
        }

        activeItem.removeClass('active');
        nextItem.addClass('active');
    }

    setInterval(changeImage, 10000);

    // Función para cambiar la posición del encabezado con transición suave
    function changeHeaderPosition() {
        var header = $('#header-fixed');
        var scrollTop = $(window).scrollTop();

        if (scrollTop > header.outerHeight()) {
            if (!header.hasClass('fixed-header')) {
                header.addClass('fixed-header');
                setTimeout(function () {
                    header.css('opacity', '1');
                }, 10);
            }
        } else {
            header.removeClass('fixed-header');
            header.css('opacity', '0');
        }
    }

    changeHeaderPosition();

    $(window).scroll(changeHeaderPosition);

    function cambiarModoOscuro() {
        document.body.classList.toggle("dark-mode");
    }

    document.getElementById("btn-darkmode").addEventListener("click", cambiarModoOscuro);
    document.getElementById("btn-darkmode-fixed").addEventListener("click", cambiarModoOscuro);
});
