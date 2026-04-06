import SliderLayout from "@scripts/layouts/slider.js";

class SliderCategoriesComponent extends SliderLayout {
    constructor(elem) {
        super(elem)
    }

    getCustomSwiperOptions() {
        return {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                769: {
                    slidesPerView: 4,
                },
                993: {
                    slidesPerView: 5,
                },
            },
        }
    }

    static getSelector() {
        return '.us-slider-categories'
    }
}

export default SliderCategoriesComponent
