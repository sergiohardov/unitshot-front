import Swiper from "swiper";
import {FreeMode, Navigation, Thumbs, Pagination} from "swiper/modules";
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

class ProductGalleryComponent {
    constructor(elem) {
        this.component = elem
        this.mainSlider = elem.querySelector('.us-product-gallery__main')
        this.thumbsSlider = elem.querySelector('.us-product-gallery__thumbs')
        this.pagination = elem.querySelector('.us-product-gallery__pagination')
        this.next = elem.querySelector('.us-product-gallery__main__next')
        this.prev = elem.querySelector('.us-product-gallery__main__prev')

        const thumbsSlider = new Swiper(this.thumbsSlider, {
            loop: false,
            spaceBetween: 20,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
        });

        const mainSlider = new Swiper(this.mainSlider, {
            modules: [FreeMode, Navigation, Thumbs, Pagination],
            loop: false,
            spaceBetween: 20,
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
            },
            pagination: {
                el: this.pagination,
                clickable: true,
                bulletClass: 'us-product-gallery__pagination-bullet',
                bulletActiveClass: 'us-product-gallery__pagination-bullet--active',
                lockClass: 'us-product-gallery__pagination--lock',
            },
            thumbs: {
                swiper: thumbsSlider,
            },
        });
    }

    static init() {
        const elems = document.querySelectorAll('.us-product-gallery')
        if (!elems) return null;

        elems.forEach(elem => new this(elem))
    }
}

export default ProductGalleryComponent
