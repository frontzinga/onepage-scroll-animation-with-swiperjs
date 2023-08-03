document.addEventListener('DOMContentLoaded', () => {

    const bgs = ['#e8dc18', '#01ffe8', '#aded3f'];

    const swiper = new Swiper('.swiper', {
        speed: 500,
        direction: 'vertical',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: {
            forceToAxis: true,
            thresholdDelta: 30,
        },
        on: {
            slideChange: swiper => {
                document.body.style.backgroundColor = bgs[swiper.activeIndex];
            }
        }
    })

    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.closest('.character').querySelector('img').classList.add('color');
        });
        button.addEventListener('mouseleave', () => {
            button.closest('.character').querySelector('img').classList.remove('color');
        });
    })

})