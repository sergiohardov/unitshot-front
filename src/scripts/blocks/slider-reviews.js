import SliderLayout from "@scripts/layouts/slider.js";

class SliderReviewsBlock extends SliderLayout {
    constructor(elem) {
        super(elem)
    }

    getCustomSwiperOptions() {
        return {
            slidesPerView: 1.5,
            breakpoints: {
                769: {
                    slidesPerView: 2,
                },
                993: {
                    slidesPerView: 3,
                },
            },
        }
    }

    static getSelector() {
        return '.us-slider-reviews'
    }
}

export default SliderReviewsBlock
