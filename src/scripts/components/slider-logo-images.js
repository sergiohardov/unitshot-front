import SliderLayout from "@scripts/layouts/slider.js";

class SliderLogoImagesComponent extends SliderLayout {
    constructor(elem) {
        super(elem)
    }

    getCustomSwiperOptions() {
        return {
            slidesPerView: 3,
            spaceBetween: 20,
            breakpoints: {
                769: {
                    slidesPerView: 5,
                },
                993: {
                    slidesPerView: 7,
                },
            },
        }
    }

    static getSelector() {
        return '.us-slider-logo-images'
    }
}

export default SliderLogoImagesComponent
