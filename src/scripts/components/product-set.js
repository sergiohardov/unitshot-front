import Alpine from "alpinejs";
import Swiper from "swiper";
import {Navigation} from "swiper/modules";
import {formatPrice} from "@scripts/base/helpers.js";
import "swiper/css";


export default function ProductSetComponent() {
    Alpine.data('ProductSetComponent', (basePrice) => ({
        basePrice: Number(basePrice) || 0,
        activeSetPrice: 0,

        get totalPrice() {
            return formatPrice(this.basePrice + this.activeSetPrice);
        },

        init() {
            const swiper = new Swiper(this.$el.querySelector('.swiper'), {
                modules: [Navigation],
                slidesPerView: 1,
                spaceBetween: 0,
                navigation: {
                    nextEl: this.$el.querySelector('.us-product-set__slider__next'),
                    prevEl: this.$el.querySelector('.us-product-set__slider__prev'),
                },
                on: {
                    // При инициализации сразу берем цену первого слайда
                    init: (swiperInstance) => {
                        this.updatePriceFromSlide(swiperInstance);
                    },
                    // При перелистывании обновляем цену
                    slideChange: (swiperInstance) => {
                        this.updatePriceFromSlide(swiperInstance);
                    },
                },
            });
        },

        // Метод, который достает цену из data-атрибута активного слайда
        updatePriceFromSlide(swiperInstance) {
            const activeSlide = swiperInstance.slides[swiperInstance.activeIndex];
            const activeSlidePrice = activeSlide.getAttribute('data-us-product-set-price');

            if (activeSlide && activeSlidePrice) this.activeSetPrice = Number(activeSlidePrice) || 0;
        }
    }));
}
