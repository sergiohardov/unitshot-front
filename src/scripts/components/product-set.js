import Swiper from "swiper";
import "swiper/css";
import {Navigation} from "swiper/modules";


// TODO: сделать передачу валюты и чистых значений сум через data атрибуты
// TODO: сделать подсчет при инициализации или передача значения с сервера
class ProductSetComponent  {
    constructor(elem) {
        this.component = elem
        this.slider = elem.querySelector('.us-product-set__slider')
        this.prev = elem.querySelector('.us-product-set__slider__prev')
        this.next = elem.querySelector('.us-product-set__slider__next')
        this.price = elem.querySelector('.us-product-set__product__price-current')
        this.total = elem.querySelector('.us-product-set__bottom__price__total')


        const swiper = new Swiper(this.slider, {
            modules: [Navigation],
            slidesPerView: 1,
            spaceBetween: 0,
            navigation: {
                nextEl: this.next,
                prevEl: this.prev,
            },
            on: {
                slideChange: () => {
                    const currency = this.getCurrency(this.price.textContent)
                    const price = swiper.slides[swiper.activeIndex].querySelector('.us-product-set__product__price-current').textContent
                    const sum = this.parseAmount(price) + this.parseAmount(this.price.textContent)
                    this.total.textContent = sum.toLocaleString('ru-RU') + ' ' + currency
                },
            },
        });
    }

    getCurrency(str) {
        const match = str.match(/[^\d\s.,]+\.?$/u);
        return match ? match[0] : null;
    }

    parseAmount(str) {
        return Number(str.replace(/[^\d]/g, ''));
    }

    static init() {
        const elems = document.querySelectorAll('.us-product-set')
        if(!elems) return null;

        elems.forEach(elem => new this(elem))
    }
}

export default ProductSetComponent
