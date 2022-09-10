const slider = () => {
    const heroSlider = new Swiper('#heroSlider', {
        effect: 'cube',
        loop: true,
        speed: 1000,
        direction: 'horizontal',
        pagination: {
            clickable: true,
            el: '.swiper-pagination',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        autoplay: {
            delay: 5000,
        },
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
        },
    });

    const bestSellers = new Swiper('#bestSellers', {
        // loop: true,
        // pagination: {
        // el: '.swiper-pagination',
        // },
        // allowSlideNext: false,
        speed: 500,
        spaceBetween: 100,
        navigation: {
        nextEl: '.swiper-next',
        prevEl: '.swiper-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 32,
            }
        }
        // scrollbar: {
        // el: '.swiper-scrollbar',
        // },
    });
};

export default slider;