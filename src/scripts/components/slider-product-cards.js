import SliderLayout from "@scripts/layouts/slider.js";

class SliderProductCardsComponent extends SliderLayout {
    constructor(elem) {
        super(elem)
    }

    getCustomSwiperOptions() {
        return {
            breakpoints: {
                769: {
                    slidesPerView: 3,
                },
                993: {
                    slidesPerView: 4,
                },
            },
        }
    }

    static getSelector() {
        return '.us-slider-product-cards'
    }
}

export default SliderProductCardsComponent
