import SliderLayout from "@scripts/layouts/slider.js";

class SliderPostsBlock extends SliderLayout {
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
        return '.us-slider-posts'
    }
}

export default SliderPostsBlock
