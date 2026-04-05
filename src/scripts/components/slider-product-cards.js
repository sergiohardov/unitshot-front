import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

class SliderProductCardsComponent {
    constructor(elem) {
        this.component      = elem;
        this.slider         = elem.querySelector('.swiper');
        this.pagination     = elem.querySelector('.us-slider-product-cards__pagination')
        this.prev           = elem.querySelector('.us-slider-product-cards__prev')
        this.next           = elem.querySelector('.us-slider-product-cards__next')
        this.swiper         = this.swiperCreate();
    }

    swiperCreate() {
        return new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 2,
            spaceBetween: 20,
            loop: false,
            pagination: {
                el: this.pagination,
                clickable: true,
                bulletClass: 'us-slider-product-cards__pagination-bullet',
                bulletActiveClass: 'us-slider-product-cards__pagination-bullet--active',
                lockClass: 'us-slider-product-cards__pagination--lock',
            },
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
                lockClass: 'us-slider-product-cards__navigation--lock',
            },
            breakpoints: {
                769: {
                    slidesPerView: 3,
                },
                993: {
                    slidesPerView: 4,
                },
            },
        });
    }

    static init() {
        const components = document.querySelectorAll('.us-slider-product-cards')
        if (components) components.forEach(component => new this(component))
    }
}

export default SliderProductCardsComponent
