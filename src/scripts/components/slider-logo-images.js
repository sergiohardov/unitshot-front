import Swiper from 'swiper';
import {Navigation, Pagination} from 'swiper/modules';
import 'swiper/css';

class SliderLogoImagesComponent {
    constructor(elem) {
        this.component      = elem;
        this.slider         = elem.querySelector('.swiper');
        this.pagination     = elem.querySelector('.us-slider-logo-images__pagination')
        this.swiper         = this.swiperCreate();
    }

    swiperCreate() {
        return new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 3,
            spaceBetween: 20,
            loop: false,
            pagination: {
                el: this.pagination,
                clickable: true,
                bulletClass: 'us-slider-logo-images__pagination-bullet',
                bulletActiveClass: 'us-slider-logo-images__pagination-bullet--active',
                lockClass: 'us-slider-logo-images__pagination--lock',
            },
            breakpoints: {
                769: {
                    slidesPerView: 5,
                },
                993: {
                    slidesPerView: 7,
                },
            },
        });
    }

    static init() {
        const components = document.querySelectorAll('.us-slider-logo-images')
        if (components) components.forEach(component => new this(component))
    }
}

export default SliderLogoImagesComponent
