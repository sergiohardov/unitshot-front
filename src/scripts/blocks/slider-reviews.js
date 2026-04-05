import Swiper from "swiper";
import {Navigation, Pagination} from "swiper/modules";

class SliderReviewsBlock {
    constructor(elem) {
        this.block          = elem
        this.slider         = elem.querySelector('.swiper');
        this.pagination     = elem.querySelector('.us-slider-reviews__slider-pagination')
        this.prev           = elem.querySelector('.us-slider-reviews__slider-prev')
        this.next           = elem.querySelector('.us-slider-reviews__slider-next')
        this.swiper         = this.swiperCreate();
    }

    swiperCreate() {
        return new Swiper(this.slider, {
            modules: [Navigation, Pagination],
            slidesPerView: 1.5,
            spaceBetween: 20,
            loop: false,
            pagination: {
                el: this.pagination,
                clickable: true,
                bulletClass: 'us-slider-reviews__slider-pagination-bullet',
                bulletActiveClass: 'us-slider-reviews__slider-pagination-bullet--active',
                lockClass: 'us-slider-reviews__slider-pagination--lock',
            },
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
                lockClass: 'us-slider-reviews__slider-navigation--lock',
            },
            breakpoints: {
                769: {
                    slidesPerView: 2,
                },
                993: {
                    slidesPerView: 3,
                },
            },
        });
    }


    static init() {
        const blocks = document.querySelectorAll('.us-slider-reviews')
        if (blocks) blocks.forEach(block => new this(block))
    }
}

export default SliderReviewsBlock
