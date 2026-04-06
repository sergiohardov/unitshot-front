import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";
import "swiper/css";

class SliderLayout {
    constructor(elem) {
        this.slider = elem;
        this.id = elem.id;
        this.slider = elem.querySelector('.swiper');
        this.prev = elem.querySelector('.us-slider__prev')
        this.next = elem.querySelector('.us-slider__next')
        this.pagination = elem.querySelector('.us-slider__pagination')
        this.swiper = this.swiperCreate();
    }

    getCustomSwiperOptions() {
        return {}
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
                bulletClass: 'us-slider__pagination-bullet',
                bulletActiveClass: 'us-slider__pagination-bullet--active',
                lockClass: 'us-slider__pagination--lock',
            },
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
                lockClass: 'us-slider__navigation--lock',
            },
            ...this.getCustomSwiperOptions(),
        });
    }

    static getSelector() {
        throw new Error(`${this.name} method getClass() must be overridden, and must return only a string id of the modal`);
    }

    static init() {
        const components = document.querySelectorAll(this.getSelector())
        console.log(components)
        if (components) components.forEach(component => new this(component))
    }
}

export default SliderLayout
