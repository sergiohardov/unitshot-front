import Alpine from 'alpinejs'
import Swiper from "swiper";
import {FreeMode, Navigation, Thumbs, Pagination} from "swiper/modules";
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/thumbs';

export default function ProductGalleryComponent() {
    Alpine.data('ProductGalleryComponent', () => ({
        init() {
            const thumbsEl      = this.$el.querySelector('.us-product-gallery__thumbs');
            const mainEl        = this.$el.querySelector('.us-product-gallery__main');
            const nextBtn       = this.$el.querySelector('.us-product-gallery__main__next');
            const prevBtn       = this.$el.querySelector('.us-product-gallery__main__prev');
            const paginationEl  = this.$el.querySelector('.us-product-gallery__pagination');

            const thumbsSlider = new Swiper(thumbsEl, {
                loop: false,
                spaceBetween: 20,
                slidesPerView: 4,
                freeMode: true,
                watchSlidesProgress: true,
            });

            new Swiper(mainEl, {
                modules: [FreeMode, Navigation, Thumbs, Pagination],
                loop: false,
                spaceBetween: 20,
                navigation: {
                    nextEl: nextBtn,
                    prevEl: prevBtn,
                },
                pagination: {
                    el: paginationEl,
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
    }));
}
